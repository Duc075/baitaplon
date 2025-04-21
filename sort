document.getElementById('sort-btn').addEventListener('click', function(e) {  
    e.preventDefault();  
  
    // Ẩn tất cả section category hiện có  
    document.querySelectorAll('section.category').forEach(section => {  
      section.style.display = 'none';  
    });  
  
    // Hiện section all-animals  
    const allAnimalsSection = document.getElementById('all-animals');  
    allAnimalsSection.style.display = 'block';  
  
    const allAnimalsContainer = allAnimalsSection.querySelector('.card-grid');  
  
    // Lấy tất cả animal-card từ tất cả section.category  
    const allCards = [];  
  
    document.querySelectorAll('section.category .card-grid .animal-card').forEach(card => {  
      allCards.push(card);  
    });  
  
    // Sắp xếp theo text trong h3 theo bảng chữ cái tiếng Việt  
    allCards.sort((a, b) => {  
      const nameA = a.querySelector('.card-content h3').textContent.trim();  
      const nameB = b.querySelector('.card-content h3').textContent.trim();  
      return nameA.localeCompare(nameB, 'vi', { sensitivity: 'base' });  
    });  
  
    // Xóa các card cũ trong allAnimalsContainer (nếu có)  
    allAnimalsContainer.innerHTML = '';  
  
    // Append các card đã sắp xếp vào allAnimalsContainer  
    allCards.forEach(card => {  
      allAnimalsContainer.appendChild(card);  
    });  
  });
