// Hàm hiển thị chi tiết động vật
function renderAnimalDetail(animal) {
  const container = document.querySelector('.animal-detail');

  if (!animal) {
    container.innerHTML = `
      <div class="not-found">
        <h1>Không tìm thấy động vật</h1>
        <a href="main.html">Quay lại trang chủ</a>
      </div>
    `;
    return;
  }

  // Tạo HTML động từ dữ liệu
  container.innerHTML = `
    <div class="animal-header">
      <h1>${animal.name}</h1>
      <p class="scientific-name">${animal.scientific}</p>
      <div class="classification">
        <span>${animal.category}</span>
        <span>${animal.family}</span>
      </div>
    </div>

    <div class="animal-content">
      <div class="media-container">

      ${animal.image ? `
        <div class="main-image">
          <img src="${animal.image}" alt="${animal.name}" loading="lazy">
        </div>
        ` : ''}

          ${animal.video ? `
          <div class="video-container">
            <iframe src="${animal.video.url}" title="${animal.video.title}" allowfullscreen></iframe>
          </div>
        ` : ''}


        ${animal.gallery ? `
          <div class="gallery">
            ${animal.gallery.map(img => `
              <div class="thumbnail">
                <img src="${img.url}" alt="${img.alt}" loading="lazy">
              </div>
            `).join('')}
          </div>
        ` : ''}

   
      </div>

      <div class="info-container">
        <div class="quick-facts">
          <h2>Thông tin nhanh</h2>
          <ul>
            ${animal.facts?.map(fact => `
              <li><strong>${fact.label}:</strong> ${fact.value}</li>
            `).join('') || ''}
          </ul>
        </div>

        ${animal.description ? `
          <div class="description">
            <h2>Mô tả</h2>
            <p>${animal.description}</p>
          </div>
        ` : ''}

        ${animal.behavior ? `
          <div class="behavior">
            <h2>Hành vi</h2>
            <p>${animal.behavior}</p>
          </div>
        ` : ''}

        ${animal.conservation ? `
          <div class="conservation">
            <h2>Bảo tồn</h2>
            <p>${animal.conservation}</p>
          </div>
        ` : ''}
      </div>
    </div>

    ${animal.related ? `
      <div class="related-animals">
        <h2>Loài liên quan</h2>
        <div class="card-grid">
          ${animal.related.map(id => {
            const relatedAnimal = getAnimalById(id);
            return relatedAnimal ? `
              <a href="animalDetail.html?name=${id}" class="card">${relatedAnimal.name}</a>
            ` : '';
          }).join('')}
        </div>
      </div>
    ` : ''}
  `;

  // Fun Facts
  if (animal.funfacts?.length) {
    const funfactsContainer = document.createElement('div');
    funfactsContainer.className = 'funfacts';
    funfactsContainer.innerHTML = `
      <h2>Fun Facts</h2>
      <ul class="funfacts-list">
        ${animal.funfacts.map(fact => `<li>${fact}</li>`).join('')}
      </ul>
    `;
    container.appendChild(funfactsContainer);
  }

  // Bài viết liên quan
  if (animal.articles?.length) {
    const articlesContainer = document.createElement('div');
    articlesContainer.className = 'articles';
    articlesContainer.innerHTML = `
      <h2>Bài viết liên quan</h2>
      <div class="article-list">
        ${animal.articles.map(article => `
          <a href="${article.url}" target="_blank" class="article-card">
            <h3>${article.title}</h3>
            <p>Nguồn: ${article.source}</p>
          </a>
        `).join('')}
      </div>
    `;
    container.appendChild(articlesContainer);
  }

  // Click thumbnail => đổi ảnh chính
  if (animal.gallery) {
    document.querySelectorAll('.thumbnail img').forEach(img => {
      img.addEventListener('click', () => {
        document.querySelector('.main-image img').src = img.src;
      });
    });
  }
}

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const animalId = urlParams.get('name')?.trim();

  const animalData = getAnimalById(animalId);
  const linkedData = getLinkData(animalId); // Trả về object chứa image và Video

  if (!animalData) {
    renderAnimalDetail(null);
    return;
  }


  const getEmbeddedYouTubeURL = (url) => {
    if (!url) return null;
    const videoIdMatch = url.match(/(?:watch\?v=|youtu\.be\/)([^\s&]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };
  
  // Gộp dữ liệu
  const mergedAnimal = {
    ...animalData,
    video: linkedData.Video
      ? {
          url: getEmbeddedYouTubeURL(linkedData.Video),
          title: animalData.name
        }
      : animalData.video,
    image: linkedData.image || animalData.image,
  };
  

  renderAnimalDetail(mergedAnimal);
});
