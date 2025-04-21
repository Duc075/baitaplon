// data.js - Danh sách động vật
const animals = {
  "chim-canh-cut": {
    "id": "chim-canh-cut",
    "name": "Chim cánh cụt",
    "scientific": "Spheniscidae",
    "category": "Động vật có vú",
    "family": "Họ chim cánh cụt (Spheniscidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Nam Cực và các vùng biển lạnh khác" },
      { "label": "Chế độ ăn", "value": "Chủ yếu ăn cá và mực" },
      { "label": "Tuổi thọ", "value": "15-20 năm" },
      { "label": "Kích thước", "value": "50–120 cm" },
      { "label": "Cân nặng", "value": "2–40 kg" }
    ],
    "description": "Chim cánh cụt là loài chim không bay, sống chủ yếu ở các vùng cực của Nam Cực, nổi bật với khả năng bơi lội và điều kiện sống đặc biệt.",
    "behavior": "Chúng có thể bơi với tốc độ 36 km/h và sống trong những đàn lớn.",
    "conservation": "Một số loài chim cánh cụt đang bị đe dọa do sự biến đổi khí hậu và sự mất môi trường sống.",
    "related": ["gau-xam", "ca-voi", "chim-nhan-california"],
    "articles": [
      {
        "title": "Chim cánh cụt: Chúa tể của những vùng lạnh giá",
        "url": "https://www.nationalgeographic.com/animals/birds/penguin",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
      "Chim cánh cụt không thể bay, nhưng lại là những vận động viên bơi tuyệt vời 🏊",
      "Chúng có thể sống dưới nước tới 20 phút mỗi lần 🐧"
    ]
  },

  "su-tu": {
      id: "su-tu",
      name: "Sư tử",
      scientific: "Panthera leo",
      category: "Động vật có vú",
      family: "Họ mèo (Felidae)",
      image: "https://images.pexels.com/photos/19930586/pexels-photo-19930586.jpeg",
     
      video: {
        url: "https://www.youtube.com/embed/OMkEVX23BdM",
        title: "Tài liệu về sư tử"
      },
      facts: [
        { label: "Môi trường sống", value: "Thảo nguyên, đồng cỏ" },
        { label: "Chế độ ăn", value: "Động vật ăn thịt" },
        { label: "Tuổi thọ", value: "10-14 năm" },
        { label: "Kích thước", value: "1.4–2.0 m (thân), 60–105 cm (đuôi)" },
        { label: "Cân nặng", value: "120–190 kg (đực), 110–140 kg (cái)" },
        { label: "Tốc độ", value: "80 km/h (tối đa)" },
        { label: "Mang thai", value: "110 ngày" },
        { label: "Bảo tồn", value: "Dễ bị tổn thương (IUCN)" }
      ],
      description: "Sư tử (Panthera leo) là một trong những loài mèo lớn nhất...",
      behavior: "Sư tử là loài sống xã hội duy nhất trong họ mèo...",
      conservation: "Số lượng sư tử châu Phi đã giảm 43% từ năm 1993...",
      related: ["ho", "bao-dom", "bao-hoa-mai"],
      articles: [
        {
          title: "Sư tử châu Phi đang suy giảm nghiêm trọng",
          url: "https://www.nationalgeographic.com/animals/article/lion-population-decline-africa",
          source: "National Geographic"
        },
        {
          title: "Bí mật đời sống bầy đàn của sư tử",
          url: "https://www.bbc.com/news/science-environment-12325678",
          source: "BBC News"
        },],
      funfacts: [
        "Sư tử có thể ngủ tới 20 tiếng mỗi ngày 😴",
        "Tiếng gầm của sư tử nghe thấy từ 8km 🦁🔊",
        "Sư tử cái làm 90% việc săn mồi 🏹",
        "Bờm sư tử đực càng tối màu càng khỏe 💪",
        "Sư tử con có đốm trên lông và sẽ mất dần khi lớn 🐆"
      ],
    },

      "ong": {
        "id": "ong",
        "name": "Ong",
        "scientific": "Apis mellifera",
        "category": "Côn trùng",
        "family": "Họ ong (Apidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Mọi nơi có hoa" },
          { "label": "Chế độ ăn", "value": "Phấn hoa và mật hoa" },
          { "label": "Tuổi thọ", "value": "30-60 ngày (thợ), vài năm (chúa)" },
          { "label": "Kích thước", "value": "1.2–1.5 cm" },
          { "label": "Cân nặng", "value": "~0.1 g" }
        ],
        "description": "Ong mật là loài côn trùng quan trọng trong thụ phấn cây trồng.",
        "behavior": "Sống theo tổ với phân cấp xã hội rõ ràng.",
        "conservation": "Một số loài đang suy giảm",
        "related": ["ong-vang", "ong-ban"],
        "articles": [
          {
            "title": "Sự sụt giảm số lượng ong trên toàn cầu",
            "url": "https://www.nationalgeographic.com/animals/article/why-are-bees-dying",
            "source": "National Geographic"
          }
        ],
        "funfacts": [
          "Ong có thể giao tiếp bằng 'điệu nhảy' 💃",
          "Một con ong tạo ra 1/12 muỗng mật trong đời 🍯"
        ]
      },
    
      

 



    // Có thể thêm các động vật khác ở đây
  };
  
  // Hàm lấy dữ liệu động vật theo ID
  function getAnimalById(name) {
    return animals[name] || null;
  }
  
 
  
