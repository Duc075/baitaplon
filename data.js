// data.js - Danh sách động vật
const animals = {
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

    
      "chim-se-bang": {
        "id": "chim-se-bang",
        "name": "Chim sẻ băng",
        "scientific": "Montifringilla nivalis",
        "category": "Chim",
        "family": "Họ sẻ (Passeridae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Vùng núi cao, khu vực có tuyết" },
          { "label": "Chế độ ăn", "value": "Hạt và côn trùng" },
          { "label": "Tuổi thọ", "value": "2-5 năm" },
          { "label": "Kích thước", "value": "13–15 cm" },
          { "label": "Cân nặng", "value": "25–40 g" }
        ],
        "description": "Chim sẻ băng là loài chim nhỏ sống ở các khu vực có tuyết, thích nghi với điều kiện khắc nghiệt.",
        "behavior": "Sống theo đàn, linh hoạt trong điều kiện khắc nghiệt.",
        "conservation": "Không đe dọa (IUCN)",
        "related": ["chim-se", "chim-tuyet"],
        "articles": [
          {
            "title": "Những loài chim sống sót ở điều kiện lạnh giá",
            "url": "https://www.audubon.org/news/how-birds-survive-cold",
            "source": "Audubon"
          }
        ],
        "funfacts": [
          "Chúng có thể đào tuyết để tìm thức ăn ❄️",
          "Thường làm tổ trong hốc đá 🪨"
        ]
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
    
      "huou-cao-co": {
        "id": "huou-cao-co",
        "name": "Hươu cao cổ",
        "scientific": "Giraffa camelopardalis",
        "category": "Động vật có vú",
        "family": "Họ hươu cao cổ (Giraffidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Savanna và rừng thưa châu Phi" },
          { "label": "Chế độ ăn", "value": "Lá cây, chủ yếu là keo" },
          { "label": "Tuổi thọ", "value": "20-25 năm" },
          { "label": "Kích thước", "value": "4.5–6 m" },
          { "label": "Cân nặng", "value": "800–1.200 kg" }
        ],
        "description": "Hươu cao cổ là động vật cao nhất trên cạn với chiếc cổ dài đặc trưng.",
        "behavior": "Sống theo nhóm nhỏ, hiền hòa và nhút nhát.",
        "conservation": "Suy giảm số lượng (IUCN)",
        "related": ["linh-duong", "ngua-van"],
        "articles": [
          {
            "title": "Giraffes are quietly slipping toward extinction",
            "url": "https://www.nationalgeographic.com/animals/article/giraffes-are-silently-disappearing",
            "source": "National Geographic"
          }
        ],
        "funfacts": [
          "Chỉ ngủ 4-5 phút mỗi lần 💤",
          "Cổ có 7 đốt như người, dù dài 2 mét! 🦒"
        ]
      },
    
      "cay-meerkat": {
        "id": "cay-meerkat",
        "name": "Cầy meerkat",
        "scientific": "Suricata suricatta",
        "category": "Động vật có vú",
        "family": "Họ chồn (Herpestidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Sa mạc và bán hoang mạc châu Phi" },
          { "label": "Chế độ ăn", "value": "Côn trùng, bò sát nhỏ" },
          { "label": "Tuổi thọ", "value": "8-10 năm" },
          { "label": "Kích thước", "value": "25–35 cm" },
          { "label": "Cân nặng", "value": "0.6–1.0 kg" }
        ],
        "description": "Meerkat là loài có tính xã hội cao, thường đứng canh gác cho bầy đàn.",
        "behavior": "Sống theo nhóm gia đình, có phân công vai trò.",
        "conservation": "Không đe dọa",
        "related": ["chồn-dat", "chuot-sa-mac"],
        "articles": [
          {
            "title": "Inside the life of a meerkat mob",
            "url": "https://www.bbc.com/earth/story/20150917-meerkat-mob-life",
            "source": "BBC Earth"
          }
        ],
        "funfacts": [
          "Meerkat có thể miễn nhiễm với nọc rắn độc 🐍",
          "Luôn có một cá thể đứng canh gác 👀"
        ]
      },
    
      "than-lan-shingleback": {
        "id": "than-lan-shingleback",
        "name": "Thằn lằn Shingleback",
        "scientific": "Tiliqua rugosa",
        "category": "Bò sát",
        "family": "Họ thằn lằn Scincidae",
        "facts": [
          { "label": "Môi trường sống", "value": "Sa mạc, rừng bụi Úc" },
          { "label": "Chế độ ăn", "value": "Thực vật, côn trùng" },
          { "label": "Tuổi thọ", "value": "20–30 năm" },
          { "label": "Kích thước", "value": "26–31 cm" },
          { "label": "Cân nặng", "value": "600–900 g" }
        ],
        "description": "Thằn lằn Shingleback có vẻ ngoài đặc biệt với vảy dày và đuôi giống đầu.",
        "behavior": "Sống thành cặp lâu dài, hiếm thấy ở bò sát.",
        "conservation": "Không nguy cấp",
        "related": ["than-lan", "than-lan-xanh"],
        "articles": [
          {
            "title": "The loyal life of shingleback lizards",
            "url": "https://www.australiangeographic.com.au/topics/wildlife/2013/11/shingleback-lizards-monogamous-lizards-of-australia/",
            "source": "Australian Geographic"
          }
        ],
        "funfacts": [
          "Chúng nhận biết bạn đời bằng mùi hương 👃",
          "Sống thành đôi trong nhiều năm 💑"
        ]
      },
      
        "rua-luyt": {
          "id": "rua-luyt",
          "name": "Rùa luýt (Rùa da)",
          "scientific": "Dermochelys coriacea",
          "category": "Bò sát",
          "family": "Họ Rùa da (Dermochelyidae)",
          "facts": [
            { "label": "Môi trường sống", "value": "Đại dương nhiệt đới và ôn đới" },
            { "label": "Chế độ ăn", "value": "Sứa và các loài nhuyễn thể" },
            { "label": "Tuổi thọ", "value": "30-50 năm" },
            { "label": "Kích thước", "value": "1.8–2.2 m" },
            { "label": "Cân nặng", "value": "250–700 kg" },
            { "label": "Mang thai", "value": "60–70 ngày" },
            { "label": "Bảo tồn", "value": "Nguy cấp (IUCN)" }
          ],
          "description": "Rùa da là loài rùa biển lớn nhất, nổi bật với lớp da thay vì mai cứng...",
          "behavior": "Di cư xa hàng ngàn km, chủ yếu sống đơn độc và đẻ trứng trên bãi biển cát.",
          "conservation": "Suy giảm do đánh bắt, ô nhiễm nhựa và biến đổi khí hậu.",
          "related": ["rua-xanh", "rua-loggerhead"],
          "articles": [
            {
              "title": "Tình trạng nguy cấp của rùa luýt",
              "url": "https://www.nationalgeographic.com/animals/article/leatherback-turtle-threats",
              "source": "National Geographic"
            },
            {
              "title": "Những điều kỳ thú về rùa da",
              "url": "https://www.bbc.com/news/science-environment-56712345",
              "source": "BBC News"
            }
          ],
          "funfacts": [
            "Rùa da có thể lặn sâu tới 1.200 mét 🌊",
            "Chúng có thể điều chỉnh nhiệt độ cơ thể để sống ở vùng nước lạnh ❄️",
            "Mai rùa mềm và có nhiều rãnh giúp bơi lội linh hoạt 🐢",
            "Là loài rùa duy nhất không có mai xương cứng",
            "Có thể vượt đại dương từ Thái Bình Dương sang bờ biển Bắc Mỹ"
          ]
        },
        "gau-den": {
          "id": "gau-den",
          "name": "Gấu đen",
          "scientific": "Ursus americanus",
          "category": "Động vật có vú",
          "family": "Họ Gấu (Ursidae)",
          "facts": [
            { "label": "Môi trường sống", "value": "Rừng rậm Bắc Mỹ" },
            { "label": "Chế độ ăn", "value": "Tạp ăn" },
            { "label": "Tuổi thọ", "value": "20-30 năm" },
            { "label": "Kích thước", "value": "1.4–2 m" },
            { "label": "Cân nặng", "value": "60–300 kg" },
            { "label": "Tốc độ", "value": "50 km/h" },
            { "label": "Mang thai", "value": "220 ngày" },
            { "label": "Bảo tồn", "value": "Ít quan ngại (IUCN)" }
          ],
          "description": "Gấu đen là loài gấu phổ biến nhất ở Bắc Mỹ, linh hoạt và thích nghi tốt...",
          "behavior": "Thường sống đơn độc, hoạt động về đêm và mùa hè tích lũy mỡ để ngủ đông.",
          "conservation": "Được bảo vệ tại nhiều khu bảo tồn nhưng vẫn đối mặt với nạn phá rừng.",
          "related": ["gau-nau", "gau-bac-cuc"],
          "articles": [
            {
              "title": "Cuộc sống hoang dã của gấu đen Bắc Mỹ",
              "url": "https://www.nationalgeographic.com/animals/article/american-black-bear",
              "source": "National Geographic"
            },
            {
              "title": "Những hiểu lầm thường gặp về gấu đen",
              "url": "https://www.bbc.com/news/science-environment-45698765",
              "source": "BBC News"
            }
          ],
          "funfacts": [
            "Có thể leo cây cực kỳ giỏi 🧗‍♂️",
            "Thính giác và khứu giác rất phát triển 👃",
            "Không thực sự ngủ đông hoàn toàn mà ở trạng thái bán ngủ 😴",
            "Màu lông có thể thay đổi từ đen, nâu đến quế",
            "Thường dùng tiếng gầm hoặc thổi hơi để giao tiếp"
          ]
        },

        "bao-tuyet": {
  "id": "bao-tuyet",
  "name": "Báo tuyết",
  "scientific": "Panthera uncia",
  "category": "Động vật có vú",
  "family": "Họ Mèo (Felidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Vùng núi cao Trung Á" },
    { "label": "Chế độ ăn", "value": "Động vật ăn thịt" },
    { "label": "Tuổi thọ", "value": "15–18 năm (tự nhiên)" },
    { "label": "Kích thước", "value": "0.9–1.2 m (thân), 0.8–1 m (đuôi)" },
    { "label": "Cân nặng", "value": "22–55 kg" },
    { "label": "Tốc độ", "value": "64 km/h" },
    { "label": "Mang thai", "value": "90–100 ngày" },
    { "label": "Bảo tồn", "value": "Dễ bị tổn thương (IUCN)" }
  ],
  "description": "Báo tuyết là loài mèo lớn sống ở vùng núi cao với bộ lông trắng xám đặc trưng...",
  "behavior": "Chúng đơn độc, hoạt động về đêm và có khả năng nhảy xa tới 15m để vồ mồi...",
  "conservation": "Bị đe dọa bởi săn trộm, mất môi trường sống và xung đột với con người...",
  "related": ["su-tu", "bao-dom"],
  "articles": [
    {
      "title": "Cuộc sống ẩn dật của báo tuyết",
      "url": "https://www.nationalgeographic.com/animals/article/elusive-snow-leopards",
      "source": "National Geographic"
    },
    {
      "title": "Theo dấu chân loài mèo tuyết huyền thoại",
      "url": "https://www.bbc.com/news/science-environment-57729556",
      "source": "BBC News"
    }
  ],
  "funfacts": [
    "Đuôi báo tuyết cực dài giúp giữ thăng bằng ❄️🐾",
    "Chúng có thể sống ở độ cao hơn 5000m! 🏔️",
    "Bộ lông dày giúp chịu rét tới -40°C 🧣❄️"
  ]
},
"than-lan": {
  "id": "than-lan",
  "name": "Thằn lằn",
  "scientific": "Lacertilia",
  "category": "Bò sát",
  "family": "Nhiều họ khác nhau",
  "facts": [
    { "label": "Môi trường sống", "value": "Đa dạng: rừng, sa mạc, đồng cỏ" },
    { "label": "Chế độ ăn", "value": "Côn trùng, trái cây, thằn lằn nhỏ" },
    { "label": "Tuổi thọ", "value": "1–20 năm (tùy loài)" },
    { "label": "Kích thước", "value": "Vài cm đến hơn 2 m" },
    { "label": "Cân nặng", "value": "Vài gram đến vài kg" },
    { "label": "Tốc độ", "value": "15–30 km/h" },
    { "label": "Mang thai", "value": "1–3 tháng hoặc đẻ trứng" },
    { "label": "Bảo tồn", "value": "Phổ biến, một số loài nguy cấp" }
  ],
  "description": "Thằn lằn là nhóm bò sát đa dạng về hình dạng, màu sắc và môi trường sống...",
  "behavior": "Phần lớn hoạt động ban ngày, có thể thay đổi màu sắc để ngụy trang...",
  "conservation": "Một số loài bị đe dọa do mất môi trường sống và buôn bán động vật hoang dã...",
  "related": ["than-lan-shingleback", "to-tia"],
  "articles": [
    {
      "title": "Thằn lằn: Bậc thầy ngụy trang tự nhiên",
      "url": "https://www.nationalgeographic.com/animals/article/lizards-camouflage",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Một số loài có thể mọc lại đuôi sau khi bị đứt! 🦎✨",
    "Thằn lằn có thể nhìn độc lập bằng mỗi mắt 👁️👁️",
    "Nhiều loài có bàn chân dính để leo tường 🧗"
  ]
},
"linh-mieu-iberia": {
  "id": "linh-mieu-iberia",
  "name": "Linh miêu Iberia",
  "scientific": "Lynx pardinus",
  "category": "Động vật có vú",
  "family": "Họ Mèo (Felidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng rậm và đồng cỏ bán khô hạn ở Tây Ban Nha, Bồ Đào Nha" },
    { "label": "Chế độ ăn", "value": "Thỏ là nguồn chính" },
    { "label": "Tuổi thọ", "value": "12–15 năm" },
    { "label": "Kích thước", "value": "85–110 cm" },
    { "label": "Cân nặng", "value": "9–13 kg" },
    { "label": "Tốc độ", "value": "50–60 km/h" },
    { "label": "Mang thai", "value": "63–74 ngày" },
    { "label": "Bảo tồn", "value": "Nguy cấp (IUCN)" }
  ],
  "description": "Linh miêu Iberia là một trong những loài mèo hiếm nhất thế giới...",
  "behavior": "Sống đơn độc, rất nhút nhát và hoạt động về đêm...",
  "conservation": "Từng chỉ còn dưới 100 cá thể, hiện đã được bảo vệ và phục hồi thành công...",
  "related": ["linh-mieu-canada", "bao-tuyet"],
  "articles": [
    {
      "title": "Tái sinh thần kỳ của linh miêu Iberia",
      "url": "https://www.nationalgeographic.com/animals/article/iberian-lynx-recovery",
      "source": "National Geographic"
    },
    {
      "title": "Linh miêu Iberia thoát khỏi bờ vực tuyệt chủng",
      "url": "https://www.bbc.com/news/world-europe-66000055",
      "source": "BBC News"
    }
  ],
  "funfacts": [
    "Linh miêu có túm lông dài ở tai giúp tăng khả năng nghe 🔊👂",
    "Mắt cực nhạy để đi săn trong bóng tối 👁️🌑",
    "Lông vằn giúp ẩn mình giữa rừng 🌲🧥"
  ]
},
"duoi-uoi": {
  "id": "duoi-uoi",
  "name": "Đười ươi",
  "scientific": "Pongo",
  "category": "Động vật có vú",
  "family": "Họ Người (Hominidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng mưa nhiệt đới Đông Nam Á" },
    { "label": "Chế độ ăn", "value": "Trái cây, lá, côn trùng" },
    { "label": "Tuổi thọ", "value": "30–45 năm (hoang dã), tới 60 năm (nuôi nhốt)" },
    { "label": "Kích thước", "value": "1.2–1.5 m" },
    { "label": "Cân nặng", "value": "30–100 kg" },
    { "label": "Tốc độ", "value": "Đi chậm, leo trèo tốt" },
    { "label": "Mang thai", "value": "230–260 ngày" },
    { "label": "Bảo tồn", "value": "Nguy cấp nghiêm trọng (IUCN)" }
  ],
  "description": "Đười ươi là loài linh trưởng thông minh bậc nhất, sống chủ yếu trên cây...",
  "behavior": "Chúng xây tổ mới mỗi đêm, biết sử dụng công cụ, sống đơn độc hoặc theo mẹ con...",
  "conservation": "Mất rừng và săn bắt khiến số lượng sụt giảm nghiêm trọng...",
  "related": ["khi-dau-cho", "tinh-tinh"],
  "articles": [
    {
      "title": "Đười ươi và nguy cơ tuyệt chủng",
      "url": "https://www.nationalgeographic.com/animals/article/orangutan-extinction-threat",
      "source": "National Geographic"
    },
    {
      "title": "Đười ươi biết sử dụng công cụ để sinh tồn",
      "url": "https://www.bbc.com/news/science-environment-57899121",
      "source": "BBC News"
    }
  ],
  "funfacts": [
    "Chúng có ADN giống người tới 97%! 🧬👨‍🦰",
    "Đười ươi có thể học ngôn ngữ ký hiệu 🤟🗨️",
    "Mỗi ngày xây tổ mới để ngủ 🛏️🌿"
  ]
},

  "tac-ke-hoa": {
    "id": "tac-ke-hoa",
    "name": "Tắc kè hoa",
    "scientific": "Chamaeleonidae",
    "category": "Bò sát",
    "family": "Họ Tắc kè hoa (Chamaeleonidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Rừng, sa mạc, vùng đồi núi" },
      { "label": "Chế độ ăn", "value": "Côn trùng" },
      { "label": "Kích thước", "value": "15–60 cm" },
      { "label": "Đặc điểm nổi bật", "value": "Thay đổi màu sắc, mắt độc lập" }
    ],
    "description": "Tắc kè hoa nổi tiếng với khả năng thay đổi màu da để ngụy trang và giao tiếp.",
    "behavior": "Thường sống đơn độc, chậm rãi di chuyển, săn mồi bằng lưỡi dài.",
    "conservation": "Một số loài bị đe dọa do mất môi trường sống.",
    "related": ["than-lan", "ech", "rua-luyt"],
    "articles": [
      {
        "title": "Tắc kè hoa: nghệ sĩ ngụy trang của thiên nhiên",
        "url": "https://www.nationalgeographic.com/animals/reptiles/facts/chameleon",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
      "Tắc kè hoa có thể nhìn hai hướng khác nhau cùng lúc 👀",
      "Lưỡi của chúng dài gấp 2 lần chiều dài cơ thể 👅",
      "Chúng thay đổi màu sắc để giao tiếp và điều chỉnh nhiệt độ 🌈"
    ]
  },

  "ngua-van": {
    "id": "ngua-van",
    "name": "Ngựa vằn",
    "scientific": "Equus zebra",
    "category": "Động vật có vú",
    "family": "Họ Ngựa (Equidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Thảo nguyên, đồng cỏ châu Phi" },
      { "label": "Chế độ ăn", "value": "Cỏ và thực vật" },
      { "label": "Tuổi thọ", "value": "20–30 năm" },
      { "label": "Tốc độ", "value": "65 km/h" }
    ],
    "description": "Ngựa vằn nổi bật với bộ lông sọc đen trắng độc đáo như dấu vân tay.",
    "behavior": "Sống theo đàn, di cư để tìm thức ăn và nước.",
    "conservation": "Một số loài đang bị đe dọa do săn bắn và mất môi trường.",
    "related": ["huou-cao-co", "su-tu", "linh-cau-rung"],
    "articles": [
      {
        "title": "Vì sao ngựa vằn có sọc?",
        "url": "https://www.bbc.com/news/science-environment-47495048",
        "source": "BBC News"
      }
    ],
    "funfacts": [
      "Không có hai cá thể ngựa vằn nào có sọc giống nhau 🦓",
      "Sọc giúp xua đuổi côn trùng và kẻ săn mồi 🌀"
    ]
  },

  "linh-cau-rung": {
    "id": "linh-cau-rung",
    "name": "Linh cẩu rừng (Chó rừng)",
    "scientific": "Lycaon pictus",
    "category": "Động vật có vú",
    "family": "Họ Chó (Canidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Đồng cỏ, rừng thưa châu Phi" },
      { "label": "Chế độ ăn", "value": "Động vật ăn thịt" },
      { "label": "Tuổi thọ", "value": "10–12 năm" },
      { "label": "Đặc điểm nổi bật", "value": "Săn mồi theo bầy hiệu quả cao" }
    ],
    "description": "Linh cẩu rừng là loài săn mồi có tổ chức cao, thường được gọi là chó hoang châu Phi.",
    "behavior": "Sống theo bầy đàn chặt chẽ, rất thông minh và phối hợp tốt khi săn mồi.",
    "conservation": "Nguy cấp do săn bắn và mất môi trường sống.",
    "related": ["su-tu", "bao-hoa-mai", "ngua-van"],
    "articles": [
      {
        "title": "Chiến thuật săn mồi siêu đỉnh của linh cẩu rừng",
        "url": "https://www.nationalgeographic.com/animals/article/african-wild-dog-hunting",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
      "Tỷ lệ săn mồi thành công lên đến 80% 🐕",
      "Chúng có tiếng hú đặc trưng dùng để gọi đàn 📣"
    ]
  },

  "ech-phi-tieu-doc": {
    "id": "ech-phi-tieu-doc",
    "name": "Ếch phi tiêu độc",
    "scientific": "Dendrobatidae",
    "category": "Lưỡng cư",
    "family": "Họ Ếch phi tiêu độc (Dendrobatidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Rừng mưa nhiệt đới Trung & Nam Mỹ" },
      { "label": "Độc tố", "value": "Rất độc – có thể gây chết người" },
      { "label": "Màu sắc", "value": "Rực rỡ – cảnh báo kẻ săn mồi" }
    ],
    "description": "Ếch phi tiêu độc có màu sắc nổi bật và chứa độc tố mạnh để tự vệ.",
    "behavior": "Hoạt động ban ngày, thường di chuyển giữa các lá cây và mặt đất ẩm.",
    "conservation": "Một số loài đang bị đe dọa nghiêm trọng.",
    "related": ["ech", "than-lan", "rua-luyt"],
    "articles": [
      {
        "title": "Những điều bạn chưa biết về ếch phi tiêu độc",
        "url": "https://www.britannica.com/animal/poison-dart-frog",
        "source": "Britannica"
      }
    ],
    "funfacts": [
      "Một số loài đủ độc để giết 10 người trưởng thành ☠️",
      "Chúng không độc trong môi trường nuôi nhốt 🐸"
    ]
  },

  "co-trang-lon": {
    "id": "co-trang-lon",
    "name": "Cò trắng lớn",
    "scientific": "Ardea alba",
    "category": "Chim",
    "family": "Họ Diệc (Ardeidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Đầm lầy, hồ, sông, ruộng lúa" },
      { "label": "Chế độ ăn", "value": "Cá, lưỡng cư, côn trùng" },
      { "label": "Sải cánh", "value": "130–170 cm" }
    ],
    "description": "Cò trắng lớn là loài chim cao lớn, có màu trắng toàn thân, cổ dài và mỏ nhọn.",
    "behavior": "Săn mồi bằng cách đứng yên chờ cá tới gần, sau đó nhanh chóng chộp lấy.",
    "conservation": "Ổn định nhưng chịu ảnh hưởng từ ô nhiễm nước.",
    "related": ["co", "chim-se-bang", "ech"],
    "articles": [
      {
        "title": "Hành vi săn mồi của cò trắng lớn",
        "url": "https://www.birdlife.org/bird/co-trang-lon/",
        "source": "BirdLife International"
      }
    ],
    "funfacts": [
      "Bay với cổ cong hình chữ S ✈️",
      "Xây tổ tập trung trên cây cao 🌳"
    ]
  },

  "doi": {
    "id": "doi",
    "name": "Dơi",
    "scientific": "Chiroptera",
    "category": "Động vật có vú",
    "family": "Chiroptera (Dơi)",
    "facts": [
      { "label": "Đặc điểm", "value": "Động vật có vú biết bay duy nhất" },
      { "label": "Sử dụng", "value": "Sóng siêu âm định vị" },
      { "label": "Chế độ ăn", "value": "Côn trùng, quả, máu (vampire bats)" }
    ],
    "description": "Dơi là loài thú duy nhất có khả năng bay thực sự, với cánh cấu tạo từ da và xương tay.",
    "behavior": "Sống theo đàn, hoạt động ban đêm, treo ngược khi nghỉ ngơi.",
    "conservation": "Một số loài đang bị đe dọa do dịch bệnh và mất môi trường sống.",
    "related": ["chim", "meerkat", "linh-mieu-iberia"],
    "articles": [
      {
        "title": "Vai trò sinh thái của dơi",
        "url": "https://www.nationalgeographic.com/animals/mammals/group/bats/",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
      "Dơi chiếm 1/5 số loài thú trên thế giới 🦇",
      "Có loài dơi bay được hơn 100 km một đêm 🌙",
      "Chúng giúp kiểm soát số lượng côn trùng tự nhiên 🪰"
    ]
  },

  "bao-su-tu": {
  "id": "bao-su-tu",
  "name": "Báo sư tử (Puma)",
  "scientific": "Puma concolor",
  "category": "Động vật có vú",
  "family": "Họ mèo (Felidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng, núi, sa mạc" },
    { "label": "Chế độ ăn", "value": "Động vật ăn thịt" },
    { "label": "Tuổi thọ", "value": "8–13 năm" },
    { "label": "Kích thước", "value": "1–2.4 m (thân), 60–75 cm (đuôi)" },
    { "label": "Cân nặng", "value": "29–100 kg" },
    { "label": "Tốc độ", "value": "64–80 km/h" },
    { "label": "Mang thai", "value": "91–96 ngày" },
    { "label": "Bảo tồn", "value": "Ít quan tâm (IUCN)" }
  ],
  "description": "Báo sư tử (Puma concolor) là loài mèo lớn phân bố rộng nhất ở châu Mỹ...",
  "behavior": "Chúng thường săn mồi đơn độc và chủ yếu hoạt động vào ban đêm...",
  "conservation": "Mất môi trường sống và xung đột với con người là những mối đe dọa chính...",
  "related": ["su-tu", "bao-tuyet", "linh-mieu-iberia"],
  "articles": [
    {
      "title": "Pumas are making a comeback in the U.S.",
      "url": "https://www.nationalgeographic.com/animals/article/puma-comeback",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Báo sư tử không thể gầm như sư tử mà chỉ gừ hoặc kêu như mèo lớn 🐱",
    "Chúng có thể nhảy xa tới 12 mét một lần nhảy 💥",
    "Puma còn có tên gọi khác như cougar hay mountain lion 🏞️"
  ]
},

"ech-cay": {
  "id": "ech-cay",
  "name": "Ếch cây",
  "scientific": "Hyla spp.",
  "category": "Lưỡng cư",
  "family": "Họ Ếch cây (Hylidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng nhiệt đới, đầm lầy" },
    { "label": "Chế độ ăn", "value": "Côn trùng" },
    { "label": "Tuổi thọ", "value": "6–10 năm" },
    { "label": "Kích thước", "value": "3–10 cm" },
    { "label": "Cân nặng", "value": "Dưới 50 gram" },
    { "label": "Tốc độ", "value": "Chậm, thường di chuyển bằng nhảy" },
    { "label": "Mang thai", "value": "Đẻ trứng" },
    { "label": "Bảo tồn", "value": "Khác nhau tùy loài" }
  ],
  "description": "Ếch cây là nhóm ếch có khả năng leo trèo giỏi, thường sống trên cây ở vùng ẩm ướt...",
  "behavior": "Chúng hoạt động vào ban đêm, sử dụng tiếng kêu để gọi bạn tình...",
  "conservation": "Một số loài bị đe dọa do mất rừng và biến đổi khí hậu...",
  "related": ["ech-vang", "ech-phi-tieu-doc"],
  "articles": [
    {
      "title": "Tree frogs' survival depends on forest conservation",
      "url": "https://www.bbc.com/news/science-environment-45632178",
      "source": "BBC"
    }
  ],
  "funfacts": [
    "Chân ếch cây có đệm dính giúp bám chặt vào lá 🌿",
    "Một số loài có màu xanh lá ngụy trang hoàn hảo 🌳",
    "Tiếng kêu của chúng rất đặc trưng, có thể nghe được từ xa 🔊"
  ]
},

"chuot-tui": {
  "id": "chuot-tui",
  "name": "Chuột túi",
  "scientific": "Macropus spp.",
  "category": "Động vật có vú",
  "family": "Họ chuột túi (Macropodidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Thảo nguyên, rừng khô" },
    { "label": "Chế độ ăn", "value": "Thực vật" },
    { "label": "Tuổi thọ", "value": "8–20 năm" },
    { "label": "Kích thước", "value": "0.6–1.5 m" },
    { "label": "Cân nặng", "value": "20–90 kg" },
    { "label": "Tốc độ", "value": "Up to 70 km/h" },
    { "label": "Mang thai", "value": "Khoảng 30–40 ngày" },
    { "label": "Bảo tồn", "value": "Phần lớn là ít quan tâm" }
  ],
  "description": "Chuột túi là biểu tượng nước Úc, nổi tiếng với đôi chân mạnh mẽ và chiếc túi nuôi con...",
  "behavior": "Chúng thường di chuyển bằng cách nhảy, hoạt động theo bầy đàn...",
  "conservation": "Một số loài bị đe dọa bởi săn bắt và mất môi trường sống...",
  "related": ["gau-bac-cuc", "cuu-sung-lon"],
  "articles": [
    {
      "title": "The secret life of kangaroos",
      "url": "https://www.nationalgeographic.com/animals/article/kangaroo-behavior-habitat",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Chuột túi có thể nhảy xa 9 mét trong một cú nhảy 🦘",
    "Con non ở trong túi mẹ đến khi đủ lớn mới ra ngoài 👶👜",
    "Chúng có thể dùng chân để tự vệ rất mạnh 💥"
  ]
},

"cuu-sung-lon": {
  "id": "cuu-sung-lon",
  "name": "Cừu Sừng Lớn",
  "scientific": "Ovis canadensis",
  "category": "Động vật có vú",
  "family": "Họ trâu bò (Bovidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Vùng núi đá và sa mạc Bắc Mỹ" },
    { "label": "Chế độ ăn", "value": "Thực vật, cỏ" },
    { "label": "Tuổi thọ", "value": "10-15 năm" },
    { "label": "Kích thước", "value": "1.5–1.8 m" },
    { "label": "Cân nặng", "value": "58–143 kg" },
    { "label": "Mang thai", "value": "175 ngày" },
    { "label": "Bảo tồn", "value": "Ít lo ngại (IUCN)" }
  ],
  "description": "Cừu Sừng Lớn nổi bật với đôi sừng cong lớn, thường sống ở những vùng núi đá cao và hoang mạc.",
  "behavior": "Chúng rất giỏi leo núi và thường sống thành đàn, có hệ thống phân cấp xã hội.",
  "conservation": "Một số quần thể bị đe dọa bởi mất môi trường sống và bệnh tật từ gia súc.",
  "related": ["linh-duong", "huou", "trau-rung"],
  "articles": [
    {
      "title": "Cuộc sống leo núi của Cừu Sừng Lớn",
      "url": "https://www.nationalgeographic.com/animals/article/bighorn-sheep-mountain-climbers",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Cừu Sừng Lớn có thể leo trên các vách đá gần như thẳng đứng 🧗‍♂️",
    "Cặp sừng có thể nặng tới 14 kg 🐏",
    "Chúng dùng sừng để chiến đấu giành quyền giao phối 💥"
  ]
},

"ech-vang": {
  "id": "ech-vang",
  "name": "Ếch Vàng",
  "scientific": "Mantella aurantiaca",
  "category": "Lưỡng cư",
  "family": "Họ ếch độc (Mantellidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng nhiệt đới Madagascar" },
    { "label": "Chế độ ăn", "value": "Côn trùng nhỏ" },
    { "label": "Tuổi thọ", "value": "5–8 năm" },
    { "label": "Kích thước", "value": "2–3 cm" },
    { "label": "Bảo tồn", "value": "Nguy cấp (IUCN)" }
  ],
  "description": "Ếch Vàng là loài ếch nhỏ sống ở Madagascar, nổi bật với màu da sáng và độc tố trên da.",
  "behavior": "Chúng sống gần các nguồn nước trong rừng và hoạt động chủ yếu vào ban ngày.",
  "conservation": "Suy giảm do mất rừng, khai thác cho buôn bán thú cảnh.",
  "related": ["ech-doc", "ech-phi-tieu", "ech-cay"],
  "articles": [
    {
      "title": "Ếch vàng – Loài ếch rực rỡ và nguy cấp",
      "url": "https://www.britannica.com/animal/golden-frog",
      "source": "Encyclopedia Britannica"
    }
  ],
  "funfacts": [
    "Ếch Vàng sử dụng màu sắc sặc sỡ để cảnh báo kẻ thù ☀️🐸",
    "Độc tố của nó có thể làm tê liệt kẻ săn mồi 🧪",
    "Dù nhỏ nhưng rất hiếu chiến trong mùa sinh sản 💢"
  ]
},

"gau-bac-cuc": {
  "id": "gau-bac-cuc",
  "name": "Gấu Bắc Cực",
  "scientific": "Ursus maritimus",
  "category": "Động vật có vú",
  "family": "Họ gấu (Ursidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Vùng băng Bắc Cực" },
    { "label": "Chế độ ăn", "value": "Thịt, đặc biệt là hải cẩu" },
    { "label": "Tuổi thọ", "value": "20-25 năm" },
    { "label": "Kích thước", "value": "2.4–3 m" },
    { "label": "Cân nặng", "value": "350–700 kg" },
    { "label": "Tốc độ", "value": "40 km/h trên đất, 10 km/h dưới nước" },
    { "label": "Mang thai", "value": "195–265 ngày" },
    { "label": "Bảo tồn", "value": "Dễ bị tổn thương (IUCN)" }
  ],
  "description": "Gấu Bắc Cực là loài ăn thịt lớn nhất trên cạn, sinh sống chủ yếu ở Bắc Cực.",
  "behavior": "Chúng là những tay bơi giỏi, có thể di chuyển hàng trăm km trên biển băng.",
  "conservation": "Bị đe dọa bởi biến đổi khí hậu làm tan băng Bắc Cực.",
  "related": ["gau-nau", "gau-den", "ca-voi-beluga"],
  "articles": [
    {
      "title": "Gấu Bắc Cực và cuộc chiến sống còn trên băng tan",
      "url": "https://www.nationalgeographic.com/environment/article/polar-bears-climate-change",
      "source": "National Geographic"
    },
    {
      "title": "Gấu Bắc Cực – Biểu tượng bị đe dọa",
      "url": "https://www.worldwildlife.org/species/polar-bear",
      "source": "WWF"
    }
  ],
  "funfacts": [
    "Gấu Bắc Cực có lớp lông trắng để ngụy trang và giữ ấm ❄️🐻",
    "Da của chúng thực ra màu đen để hấp thu nhiệt ☀️",
    "Mỗi chân gấu to tới 30 cm giúp đi trên băng 🐾",
    "Chúng có thể ngửi thấy mùi hải cẩu từ 1,6 km 👃"
  ]
},

  "soc": {
    "id": "soc",
    "name": "Sóc",
    "scientific": "Sciuridae",
    "category": "Động vật có vú",
    "family": "Họ sóc (Sciuridae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Rừng, công viên, đô thị" },
      { "label": "Chế độ ăn", "value": "Quả hạch, hạt, trái cây" },
      { "label": "Tuổi thọ", "value": "6-12 năm" },
      { "label": "Kích thước", "value": "20–50 cm (bao gồm đuôi)" },
      { "label": "Cân nặng", "value": "200–600 g" },
      { "label": "Tốc độ", "value": "20 km/h" }
    ],
    "description": "Sóc là loài gặm nhấm nhỏ với đuôi dài, sống chủ yếu ở cây và rất nhanh nhẹn.",
    "behavior": "Thường hoạt động vào ban ngày, có khả năng leo trèo và nhảy xa tốt.",
    "conservation": "Hầu hết các loài sóc không bị đe dọa nghiêm trọng.",
    "related": ["huou", "gau", "chuot-tui"],
    "articles": [
      {
        "title": "Tại sao sóc lại chôn thức ăn?",
        "url": "https://www.nationalgeographic.com/animals/article/squirrel-food-burying-habit",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
      "Sóc có thể quay đầu 180 độ trong khi leo cây 🌳",
      "Một số loài sóc có thể lướt từ cây này sang cây khác như bay 🪂"
    ]
  },

  "huou": {
    "id": "huou",
    "name": "Hươu",
    "scientific": "Cervidae",
    "category": "Động vật có vú",
    "family": "Họ hươu nai (Cervidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Rừng, thảo nguyên, vùng núi" },
      { "label": "Chế độ ăn", "value": "Cỏ, lá cây, quả" },
      { "label": "Tuổi thọ", "value": "10-20 năm" },
      { "label": "Kích thước", "value": "1.5–2.4 m (thân)" },
      { "label": "Cân nặng", "value": "40–200 kg" }
    ],
    "description": "Hươu là loài động vật ăn cỏ với đặc trưng là cặp gạc lớn, chủ yếu do con đực sở hữu.",
    "behavior": "Sống theo đàn, hiền lành, rất nhanh nhẹn khi chạy trốn kẻ thù.",
    "conservation": "Một số loài hươu đang bị đe dọa do săn bắt và mất môi trường sống.",
    "related": ["linh-duong-gazelle", "te-giac"],
    "articles": [
      {
        "title": "Loài hươu mới được phát hiện ở Việt Nam",
        "url": "https://www.bbc.com/news/science-environment-11297856",
        "source": "BBC News"
      }
    ],
    "funfacts": [
      "Gạc hươu rụng và mọc lại mỗi năm 🦌",
      "Hươu là loài động vật có vú mọc gạc nhanh nhất thế giới 🌿"
    ]
  },

  "rua-ve": {
    "id": "rua-ve",
    "name": "Rùa vẽ",
    "scientific": "Chrysemys picta",
    "category": "Bò sát",
    "family": "Họ rùa đầm (Emydidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Ao, hồ, đầm lầy" },
      { "label": "Chế độ ăn", "value": "Động vật nhỏ, thực vật thủy sinh" },
      { "label": "Tuổi thọ", "value": "20-30 năm" },
      { "label": "Kích thước", "value": "10–25 cm" }
    ],
    "description": "Rùa vẽ có mai màu đen với hoa văn đỏ và vàng bắt mắt, rất phổ biến ở Bắc Mỹ.",
    "behavior": "Hoạt động ban ngày, thường phơi nắng trên đá và khúc gỗ nổi.",
    "conservation": "Không bị đe dọa nghiêm trọng.",
    "related": ["rua-luyt", "than-lan"],
    "articles": [
      {
        "title": "Rùa vẽ và chiến lược sinh tồn trong mùa đông",
        "url": "https://www.nationalgeographic.com/animals/article/painted-turtle-winter-survival",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
      "Rùa vẽ có thể sống trong nước gần như đóng băng ❄️",
      "Chúng có thể thở qua da và lỗ hậu môn khi dưới nước 🐢"
    ]
  },

  "cho-golden-retriever": {
    "id": "cho-golden-retriever",
    "name": "Chó Golden Retriever",
    "scientific": "Canis lupus familiaris",
    "category": "Động vật có vú",
    "family": "Họ chó (Canidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Nhà ở, công viên, khu vườn" },
      { "label": "Chế độ ăn", "value": "Thức ăn cho chó, thịt, rau" },
      { "label": "Tuổi thọ", "value": "10-12 năm" },
      { "label": "Kích thước", "value": "50-61 cm (chiều cao)" },
      { "label": "Cân nặng", "value": "25-34 kg" }
    ],
    "description": "Chó Golden Retriever là một trong những giống chó phổ biến nhất trên thế giới, nổi tiếng với sự thông minh, thân thiện và dễ huấn luyện.",
    "behavior": "Thân thiện, hòa đồng, dễ huấn luyện, thích chơi đùa và hoạt động thể chất.",
    "conservation": "Không có mối đe dọa đáng kể đối với giống chó này.",
    "related": ["soc", "hươu", "chuot-tui"],
    "articles": [
      {
        "title": "Golden Retriever: Chó thông minh và dễ huấn luyện",
        "url": "https://www.petfinder.com/dog-breeds/golden-retriever/",
        "source": "Petfinder"
      }
    ],
    "funfacts": [
      "Golden Retriever là một trong những giống chó phổ biến nhất ở Mỹ 🐶",
      "Chúng rất giỏi trong việc làm chó trợ giúp cho người khuyết tật 🤲"
    ]
  },

  "te-giac": {
    "id": "te-giac",
    "name": "Tê giác",
    "scientific": "Rhinocerotidae",
    "category": "Động vật có vú",
    "family": "Họ tê giác (Rhinocerotidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Savanna, rừng thưa" },
      { "label": "Chế độ ăn", "value": "Thực vật (cỏ, lá)" },
      { "label": "Tuổi thọ", "value": "40-50 năm" },
      { "label": "Kích thước", "value": "3-4 m (dài), 1.5-1.8 m (cao)" },
      { "label": "Cân nặng", "value": "800–2,300 kg" }
    ],
    "description": "Tê giác là một trong những loài động vật lớn nhất trên cạn, nổi bật với lớp da dày và cặp sừng đặc trưng.",
    "behavior": "Sống chủ yếu một mình, có thể trở nên nguy hiểm nếu cảm thấy bị đe dọa.",
    "conservation": "Tê giác hiện đang đối mặt với nguy cơ tuyệt chủng do săn bắn trái phép vì sừng của chúng.",
    "related": ["soc", "rua-ve", "chuot-tui"],
    "articles": [
      {
        "title": "Tê giác đang đứng trước nguy cơ tuyệt chủng",
        "url": "https://www.worldwildlife.org/species/rhino",
        "source": "World Wildlife Fund"
      }
    ],
    "funfacts": [
      "Tê giác có thể chạy với tốc độ 50 km/h 🦏",
      "Mỗi con tê giác có dấu vân tay riêng biệt giống như con người 👣"
    ]
  },

  "gau-truc": {
    "id": "gau-truc",
    "name": "Gấu trúc",
    "scientific": "Ailuropoda melanoleuca",
    "category": "Động vật có vú",
    "family": "Họ gấu (Ursidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Rừng tre vùng núi" },
      { "label": "Chế độ ăn", "value": "Tre, lá, một ít động vật nhỏ" },
      { "label": "Tuổi thọ", "value": "20 năm (trong tự nhiên)" },
      { "label": "Kích thước", "value": "1.2–1.8 m (dài)" },
      { "label": "Cân nặng", "value": "70–100 kg" }
    ],
    "description": "Gấu trúc là loài động vật biểu tượng của Trung Quốc, nổi bật với bộ lông đen trắng và khẩu phần ăn chủ yếu là tre.",
    "behavior": "Sống một mình, khá lười biếng và chủ yếu dành thời gian ăn.",
    "conservation": "Loài này đang gặp nguy hiểm vì mất môi trường sống và số lượng giảm sút.",
    "related": ["soc", "te-giac", "chuot-tui"],
    "articles": [
      {
        "title": "Gấu trúc: Biểu tượng của Trung Quốc",
        "url": "https://www.worldwildlife.org/species/panda",
        "source": "WWF"
      }
    ],
    "funfacts": [
      "Gấu trúc ăn tới 38 kg tre mỗi ngày 🌿",
      "Mặc dù là loài động vật ăn chay, chúng thuộc họ gấu 🐼"
    ]
  },

  "linh-duong-gazelle": {
    "id": "linh-duong-gazelle",
    "name": "Linh dương Gazelle",
    "scientific": "Gazella",
    "category": "Động vật có vú",
    "family": "Họ linh dương (Bovidae)",
    "facts": [
      { "label": "Môi trường sống", "value": "Savanna, đồng cỏ" },
      { "label": "Chế độ ăn", "value": "Cỏ, lá cây" },
      { "label": "Tuổi thọ", "value": "10-12 năm" },
      { "label": "Kích thước", "value": "1–1.5 m (dài)" },
      { "label": "Cân nặng", "value": "20–60 kg" }
    ],
    "description": "Linh dương Gazelle là loài động vật ăn cỏ nổi bật với khả năng nhảy cao và nhanh nhẹn để tránh kẻ săn mồi.",
    "behavior": "Linh dương Gazelle di chuyển theo đàn và có thể chạy với tốc độ 80 km/h.",
    "conservation": "Một số loài linh dương Gazelle đang bị đe dọa do mất môi trường sống và săn bắn.",
    "related": ["chuot-tui", "soc", "te-giac"],
    "articles": [
      {
        "title": "Sự tuyệt chủng của linh dương Gazelle",
        "url": "https://www.iucnredlist.org/species/5591/102033845",
        "source": "IUCN"
      }
    ],
    "funfacts": [
      "Linh dương Gazelle có thể nhảy lên tới 3 mét 🌾",
      "Chúng có thể chạy 80 km/h để trốn kẻ săn mồi 🦓"
    ]
  },

  "than-lan": {
    "id": "than-lan",
    "name": "Thằn lằn",
    "scientific": "Lacertilia",
    "category": "Bò sát",
    "family": "Nhiều họ",
    "facts": [
      { "label": "Môi trường sống", "value": "Rừng, sa mạc, bãi đá" },
      { "label": "Chế độ ăn", "value": "Côn trùng, thực vật" },
      { "label": "Tuổi thọ", "value": "5-20 năm" },
      { "label": "Kích thước", "value": "10 cm – 3 m" },
      { "label": "Cân nặng", "value": "5–300 g" }
    ],
    "description": "Thằn lằn là loài bò sát có sự đa dạng lớn về kích thước và hình dạng, sống trong nhiều môi trường khác nhau.",
    "behavior": "Có thể thay đổi màu sắc để nguỵ trang, thường hoạt động ban ngày.",
    "conservation": "Một số loài thằn lằn đang bị đe dọa do mất môi trường sống.",
    "related": ["chuot-tui", "te-giac", "linh-duong-gazelle"],
    "articles": [
      {
        "title": "Tầm quan trọng của thằn lằn trong hệ sinh thái",
        "url": "https://www.nationalgeographic.com/animals/reptiles/lizards",
        "source": "National Geographic"
      }
    ],
    "funfacts": [
    "Thằn lằn có khả năng mọc lại đuôi khi bị đứt - hiện tượng gọi là 'tự cắt đuôi' (autotomy) 🦎✨",
    "Đuôi mới mọc thường ngắn hơn, màu sắc nhạt hơn và cấu trúc bằng sụn thay vì xương sống",
    "Một số loài thằn lằn có thể tự cắt đuôi tới 3 lần trong đời nhưng mỗi lần mọc lại sẽ kém hoàn chỉnh hơn",
    "Khi bỏ chạy, đuôi bị đứt sẽ tiếp tục ngọ nguậy để đánh lạc hướng kẻ thù 🎭",
    "Thằn lằn Jesus Christ có thể chạy trên mặt nước nhờ đôi chân đặc biệt 🌊🏃",
    "Thằn lằn Leopard Gecko dùng đuôi làm kho dự trữ chất béo khi thức đông mùa đông ❄️",
    "Thằn lằn cát có thể 'bơi' trong cát như cá bơi trong nước 🏊♂️"
]
  },

  
    "gau-nau-himalaya": {
      "id": "gau-nau-himalaya",
      "name": "Gấu nâu Himalaya",
      "scientific": "Ursus arctos isabellinus",
      "category": "Động vật có vú",
      "family": "Họ gấu (Ursidae)",
      "facts": [
        { "label": "Môi trường sống", "value": "Rừng núi Himalaya" },
        { "label": "Chế độ ăn", "value": "Cỏ, trái cây, côn trùng" },
        { "label": "Tuổi thọ", "value": "25-30 năm" },
        { "label": "Kích thước", "value": "1.8–2.2 m (dài)" },
        { "label": "Cân nặng", "value": "100–200 kg" }
      ],
      "description": "Gấu nâu Himalaya là một phân loài gấu nâu sống trong khu vực Himalaya, có lông sáng màu và đặc biệt sống ở độ cao lớn.",
      "behavior": "Loài này sống đơn độc và chủ yếu hoạt động vào ban đêm.",
      "conservation": "Gấu nâu Himalaya hiện đang đối mặt với nguy cơ tuyệt chủng do mất môi trường sống và săn bắn.",
      "related": ["gau-truc", "te-giac", "chuot-tui"],
      "articles": [
        {
          "title": "Gấu nâu Himalaya đang đối mặt với nguy cơ tuyệt chủng",
          "url": "https://www.iucnredlist.org/species/8154/53540445",
          "source": "IUCN"
        }
      ],
      "funfacts": [
        "Gấu nâu Himalaya có thể leo núi rất tốt 🏔️",
        "Chúng là loài có khả năng sống sót ở độ cao lên đến 4,500 m 🐻"
      ]
    },
  
    "luoi": {
      "id": "luoi",
      "name": "Lười",
      "scientific": "Folivora",
      "category": "Động vật có vú",
      "family": "Họ lười (Bradypodidae, Megalonychidae)",
      "facts": [
        { "label": "Môi trường sống", "value": "Rừng nhiệt đới" },
        { "label": "Chế độ ăn", "value": "Lá cây" },
        { "label": "Tuổi thọ", "value": "20-30 năm" },
        { "label": "Kích thước", "value": "50-80 cm (dài)" },
        { "label": "Cân nặng", "value": "3–5 kg" }
      ],
      "description": "Lười là loài động vật nổi tiếng với sự di chuyển chậm chạp và cuộc sống treo trên cây.",
      "behavior": "Lười chủ yếu sống trên cây, di chuyển rất chậm và ngủ tới 20 giờ mỗi ngày.",
      "conservation": "Các loài lười đang gặp nguy cơ tuyệt chủng do mất môi trường sống và săn bắt.",
      "related": ["cho-golden-retriever", "soc", "chuot-tui"],
      "articles": [
        {
          "title": "Lười: Động vật sống chậm nhưng thú vị",
          "url": "https://www.nationalgeographic.com/animals/mammals/facts/sloth",
          "source": "National Geographic"
        }
      ],
      "funfacts": [
        "Lười có thể mất tới một tháng để tiêu hóa một bữa ăn 🍂",
        "Chúng chỉ đi vệ sinh một lần mỗi tuần 💩"
      ]
    },
  
    "ca-voi-lung-gu": {
      "id": "ca-voi-lung-gu",
      "name": "Cá voi lưng gù",
      "scientific": "Megaptera novaeangliae",
      "category": "Động vật có vú",
      "family": "Họ cá voi (Balaenopteridae)",
      "facts": [
        { "label": "Môi trường sống", "value": "Biển khắp thế giới, đặc biệt là các vùng nước lạnh" },
        { "label": "Chế độ ăn", "value": "Krill, cá nhỏ" },
        { "label": "Tuổi thọ", "value": "50-80 năm" },
        { "label": "Kích thước", "value": "12–16 m (dài)" },
        { "label": "Cân nặng", "value": "30–40 tấn" }
      ],
      "description": "Cá voi lưng gù là một loài cá voi nổi bật với những vây lưng lớn và khả năng hát những bài hát dài trong mùa sinh sản.",
      "behavior": "Loài cá voi này di chuyển theo nhóm và thường tạo ra những âm thanh gọi là 'bài hát' trong mùa giao phối.",
      "conservation": "Cá voi lưng gù đã được bảo vệ và đang dần phục hồi sau khi bị săn bắt.",
      "related": ["ca-voi-xanh", "te-giac", "chuot-tui"],
      "articles": [
        {
          "title": "Cá voi lưng gù: Loài cá voi biểu tượng",
          "url": "https://www.nationalgeographic.com/animals/mammals/facts/humpback-whale",
          "source": "National Geographic"
        }
      ],
      "funfacts": [
        "Cá voi lưng gù có thể hát suốt vài giờ liền 🎶",
        "Chúng có thể nhảy lên khỏi mặt nước để thể hiện sức mạnh 🐋"
      ]
    },
  
    "de-nui": {
      "id": "de-nui",
      "name": "Dê núi",
      "scientific": "Capra ibex",
      "category": "Động vật có vú",
      "family": "Họ dê (Bovidae)",
      "facts": [
        { "label": "Môi trường sống", "value": "Vùng núi đá" },
        { "label": "Chế độ ăn", "value": "Cỏ, lá cây" },
        { "label": "Tuổi thọ", "value": "12-18 năm" },
        { "label": "Kích thước", "value": "1.2–1.5 m (dài)" },
        { "label": "Cân nặng", "value": "40–70 kg" }
      ],
      "description": "Dê núi là loài động vật có khả năng leo núi xuất sắc, nổi bật với cặp sừng cong hình lưỡi liềm.",
      "behavior": "Chúng là loài sống thành đàn và di chuyển linh hoạt trên địa hình núi đá dốc.",
      "conservation": "Dê núi đang gặp phải sự đe dọa do săn bắn và mất môi trường sống.",
      "related": ["soc", "chuot-tui", "te-giac"],
      "articles": [
        {
          "title": "Dê núi và khả năng sống trên vùng núi đá",
          "url": "https://www.worldwildlife.org/species/alpine-ibex",
          "source": "WWF"
        }
      ],
      "funfacts": [
        "Dê núi có thể nhảy qua các vách đá cao lên tới 6 mét 🧗‍♂️",
        "Cặp sừng của dê núi có thể dài tới 1 m 🌄"
      ]
    },
  
    "tran-cau-vong": {
      "id": "tran-cau-vong",
      "name": "Trăn cầu vồng",
      "scientific": "Epicrates cenchria",
      "category": "Bò sát",
      "family": "Họ trăn (Boidae)",
      "facts": [
        { "label": "Môi trường sống", "value": "Rừng nhiệt đới ẩm ướt" },
        { "label": "Chế độ ăn", "value": "Chuột, chim, thằn lằn" },
        { "label": "Tuổi thọ", "value": "15-20 năm" },
        { "label": "Kích thước", "value": "2–3 m" },
        { "label": "Cân nặng", "value": "5–10 kg" }
      ],
      "description": "Trăn cầu vồng nổi bật với bộ lông sắc màu rực rỡ và có thể cuộn mình quanh con mồi để bắt.",
      "behavior": "Là loài săn mồi đơn độc, trăn cầu vồng có thể kéo dài và nới rộng cơ thể để săn mồi lớn.",
      "conservation": "Trăn cầu vồng không phải là loài có nguy cơ tuyệt chủng, nhưng đang gặp nguy hiểm từ việc buôn bán động vật hoang dã.",
      "related": ["chuot-tui", "te-giac", "soc"],
      "articles": [
        {
          "title": "Trăn cầu vồng và môi trường sống của nó",
          "url": "https://www.arkive.org/rainbow-boas/epicrates-cenchria",
          "source": "ARKive"
        }
      ],
      "funfacts": [
        "Trăn cầu vồng có màu sắc rực rỡ và thay đổi khi nó thay vỏ 🌈",
        "Chúng có thể sống tới 20 năm trong điều kiện nuôi nhốt 🐍"
      ]
    },

      "khi": {
        "id": "khi",
        "name": "Khỉ",
        "scientific": "Primates",
        "category": "Động vật có vú",
        "family": "Họ khỉ (Cercopithecidae, Hominidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Rừng mưa nhiệt đới, rừng núi" },
          { "label": "Chế độ ăn", "value": "Thực vật, côn trùng, quả" },
          { "label": "Tuổi thọ", "value": "10-50 năm tùy loài" },
          { "label": "Kích thước", "value": "30 cm - 1.2 m" },
          { "label": "Cân nặng", "value": "3–70 kg tùy loài" }
        ],
        "description": "Khỉ là loài động vật linh trưởng, có khả năng sử dụng công cụ và sống trong các nhóm xã hội.",
        "behavior": "Khỉ là loài động vật thông minh, có thể giao tiếp và giải quyết vấn đề.",
        "conservation": "Nhiều loài khỉ đang bị đe dọa do mất môi trường sống và săn bắn.",
        "related": ["gau-xam", "tac-ke-hoa", "soc"],
        "articles": [
          {
            "title": "Khỉ: Những sinh vật thông minh của rừng rậm",
            "url": "https://www.nationalgeographic.com/animals/mammals/facts/monkeys",
            "source": "National Geographic"
          }
        ],
        "funfacts": [
          "Khỉ có thể sử dụng công cụ để tìm kiếm thức ăn 🛠️",
          "Chúng có khả năng giao tiếp với nhau qua các tín hiệu khác nhau 🐒"
        ]
      },
    
      "ca": {
        "id": "ca",
        "name": "Cá",
        "scientific": "Pisces",
        "category": "Động vật thủy sinh",
        "family": "Nhiều họ khác nhau",
        "facts": [
          { "label": "Môi trường sống", "value": "Biển, sông hồ, ao" },
          { "label": "Chế độ ăn", "value": "Động vật nhỏ, thực vật thủy sinh" },
          { "label": "Tuổi thọ", "value": "2-30 năm tùy loài" },
          { "label": "Kích thước", "value": "5 cm - 10 m tùy loài" },
          { "label": "Cân nặng", "value": "1 g - 2,000 kg" }
        ],
        "description": "Cá là động vật sống dưới nước, có vây và mang giúp chúng thở trong môi trường nước.",
        "behavior": "Cá di chuyển trong đàn và có thể thay đổi màu sắc để phù hợp với môi trường.",
        "conservation": "Nhiều loài cá đang bị đe dọa do ô nhiễm nước và khai thác quá mức.",
        "related": ["ca-voi-lung-gu", "te-giac", "luoi"],
        "articles": [
          {
            "title": "Cá: Những loài động vật kỳ thú dưới nước",
            "url": "https://www.nationalgeographic.com/animals/fish",
            "source": "National Geographic"
          }
        ],
        "funfacts": [
          "Cá có thể sống mà không cần nước trong một khoảng thời gian ngắn 🐟",
          "Một số loài cá có thể sống tới hơn 100 năm 🐠"
        ]
      },
    
      "gau-xam-grizzly": {
        "id": "gau-xam-grizzly",
        "name": "Gấu xám Grizzly",
        "scientific": "Ursus arctos horribilis",
        "category": "Động vật có vú",
        "family": "Họ gấu (Ursidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Rừng và vùng đồng cỏ Bắc Mỹ" },
          { "label": "Chế độ ăn", "value": "Thực vật, động vật, cá" },
          { "label": "Tuổi thọ", "value": "20-30 năm" },
          { "label": "Kích thước", "value": "2.4–2.8 m (dài)" },
          { "label": "Cân nặng", "value": "270–680 kg" }
        ],
        "description": "Gấu xám Grizzly là một trong những loài gấu lớn nhất và nổi bật với sức mạnh vượt trội và tính cách độc lập.",
        "behavior": "Gấu Grizzly là loài ăn tạp, có thể săn mồi và ăn thực vật.",
        "conservation": "Gấu Grizzly đang đối mặt với nguy cơ mất môi trường sống và xung đột với con người.",
        "related": ["gau-truc", "luoi", "te-giac"],
        "articles": [
          {
            "title": "Gấu xám Grizzly: Chúa tể của rừng rậm",
            "url": "https://www.nationalgeographic.com/animals/mammals/facts/grizzly-bear",
            "source": "National Geographic"
          }
        ],
        "funfacts": [
          "Gấu xám có thể chạy tới 55 km/h 🐻💨",
          "Chúng có thể sống tới 30 năm trong tự nhiên 🐾"
        ]
      },
    
      "oc-sen": {
        "id": "oc-sen",
        "name": "Ốc sên",
        "scientific": "Gastropoda",
        "category": "Động vật thân mềm",
        "family": "Họ ốc sên (Helicidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Rừng, vườn, đồng cỏ" },
          { "label": "Chế độ ăn", "value": "Thực vật, lá cây" },
          { "label": "Tuổi thọ", "value": "1-5 năm" },
          { "label": "Kích thước", "value": "5–30 cm" },
          { "label": "Cân nặng", "value": "1–5 kg" }
        ],
        "description": "Ốc sên là loài động vật thân mềm, có vỏ và di chuyển chậm chạp, sống chủ yếu ở những nơi ẩm ướt.",
        "behavior": "Ốc sên di chuyển bằng cách trượt trên bề mặt nhờ chất nhầy.",
        "conservation": "Ốc sên đang gặp nguy cơ tuyệt chủng do thay đổi môi trường sống và ô nhiễm.",
        "related": ["khi", "luoi", "soc"],
        "articles": [
          {
            "title": "Ốc sên và những điều thú vị về loài động vật này",
            "url": "https://www.britannica.com/animal/snail",
            "source": "Britannica"
          }
        ],
        "funfacts": [
          "Ốc sên có thể sống mà không cần thức ăn trong suốt 1 tuần 🐌",
          "Chúng có thể tạo ra một lớp vỏ bảo vệ khỏi điều kiện khô hạn 🐚"
        ]
      },
    
      "ca-thoi-loi": {
        "id": "ca-thoi-loi",
        "name": "Cá thòi lòi",
        "scientific": "Periophthalmus",
        "category": "Cá",
        "family": "Họ cá thòi lòi (Gobiidae)",
        "facts": [
          { "label": "Môi trường sống", "value": "Đầm lầy, bãi bùn ven biển" },
          { "label": "Chế độ ăn", "value": "Côn trùng, động vật nhỏ" },
          { "label": "Tuổi thọ", "value": "2-4 năm" },
          { "label": "Kích thước", "value": "15–30 cm" },
          { "label": "Cân nặng", "value": "0.1–0.3 kg" }
        ],
        "description": "Cá thòi lòi là loài cá có khả năng sống trên cạn trong thời gian ngắn và thở bằng phổi.",
        "behavior": "Loài cá này thường di chuyển trên bãi bùn, nhảy qua các khe nước.",
        "conservation": "Cá thòi lòi không phải là loài nguy cấp nhưng môi trường sống của chúng đang bị đe dọa.",
        "related": ["ca", "te-giac", "soc"],
        "articles": [
          {
            "title": "Cá thòi lòi: Loài cá biết sống trên cạn",
            "url": "https://www.nationalgeographic.com/animals/fish/facts/periophthalmus",
            "source": "National Geographic"
          }
        ],
        "funfacts": [
          "Cá thòi lòi có thể sống tới vài ngày trên cạn 🐟",
          "Chúng có đôi mắt to giúp nhìn rõ trên cạn và dưới nước 👀"
        ]
      },
      
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
      
        "ky-nhong-bien": {
          "id": "ky-nhong-bien",
          "name": "Kỳ nhông biển",
          "scientific": "Acanthaster planci",
          "category": "Động vật biển",
          "family": "Họ kỳ nhông biển (Acanthasteridae)",
          "facts": [
            { "label": "Môi trường sống", "value": "Biển Ấn Độ Dương, Thái Bình Dương" },
            { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là san hô" },
            { "label": "Tuổi thọ", "value": "5-10 năm" },
            { "label": "Kích thước", "value": "30–40 cm" },
            { "label": "Cân nặng", "value": "1–2 kg" }
          ],
          "description": "Kỳ nhông biển là loài động vật biển có hình dáng giống như sao biển, được biết đến với tên gọi là 'kỳ nhông sao biển' do những chiếc gai dài trên cơ thể.",
          "behavior": "Kỳ nhông biển là loài ăn thịt san hô, có thể tàn phá rạn san hô nếu số lượng quá lớn.",
          "conservation": "Loài này không bị đe dọa, nhưng sự gia tăng của chúng có thể gây tổn hại đến các hệ sinh thái biển.",
          "related": ["ca-thoi-loi", "khi", "chim-canh-cut"],
          "articles": [
            {
              "title": "Kỳ nhông biển và tác động đến rạn san hô",
              "url": "https://www.nationalgeographic.com/animals/invertebrates/a/acanthaster-planci",
              "source": "National Geographic"
            }
          ],
          "funfacts": [
            "Kỳ nhông biển có thể ăn tới 6 m2 san hô mỗi tuần 🐚",
            "Chúng có thể sống trong nước nóng và trong các khu vực có khí hậu khắc nghiệt 🌊"
          ]
        },
      
        "chim-nhan-california": {
          "id": "chim-nhan-california",
          "name": "Chim nhàn California",
          "scientific": "Sterna antillarum browni",
          "category": "Chim",
          "family": "Họ nhàn (Laridae)",
          "facts": [
            { "label": "Môi trường sống", "value": "Các bãi biển và khu vực cửa sông ở California" },
            { "label": "Chế độ ăn", "value": "Chủ yếu là cá và động vật biển nhỏ" },
            { "label": "Tuổi thọ", "value": "15-20 năm" },
            { "label": "Kích thước", "value": "25–35 cm" },
            { "label": "Cân nặng", "value": "0.05–0.1 kg" }
          ],
          "description": "Chim nhàn California là loài chim biển có thân hình nhỏ, sống ở các bãi biển của California và được biết đến với khả năng di chuyển nhanh.",
          "behavior": "Chúng là loài chim di cư, di chuyển giữa các vùng biển để kiếm ăn.",
          "conservation": "Chim nhàn California đang bị đe dọa nghiêm trọng do mất môi trường sống và sự ô nhiễm bãi biển.",
          "related": ["chim-canh-cut", "ky-nhong-bien", "ca-voi"],
          "articles": [
            {
              "title": "Chim nhàn California và sự bảo tồn của chúng",
              "url": "https://www.nationalgeographic.com/animals/birds/california-tern",
              "source": "National Geographic"
            }
          ],
          "funfacts": [
            "Chim nhàn California có thể bay hơn 50 km mỗi ngày để tìm kiếm thức ăn 🦅",
            "Chúng là loài chim di cư dài nhất trong các loài chim biển 🕊️"
          ]
        },
      
        "cho-bull-mastiff": {
          "id": "cho-bull-mastiff",
          "name": "Chó Bull Mastiff",
          "scientific": "Canis lupus familiaris",
          "category": "Động vật có vú",
          "family": "Họ chó (Canidae)",
          "facts": [
            { "label": "Môi trường sống", "value": "Nhà ở, sân vườn" },
            { "label": "Chế độ ăn", "value": "Thịt, thức ăn cho chó" },
            { "label": "Tuổi thọ", "value": "8-10 năm" },
            { "label": "Kích thước", "value": "60–70 cm (chiều cao)" },
            { "label": "Cân nặng", "value": "50–80 kg" }
          ],
          "description": "Chó Bull Mastiff là giống chó lớn, khỏe mạnh và được biết đến với khả năng bảo vệ tốt và sự trung thành cao.",
          "behavior": "Chúng rất thân thiện, bảo vệ gia đình và có tính cảnh giác cao.",
          "conservation": "Chó Bull Mastiff không phải là loài động vật hoang dã, nhưng có thể cần chăm sóc đặc biệt vì kích thước và sức khỏe.",
          "related": ["cho-golden-retriever", "cho-labrador", "ky-nhong-bien"],
          "articles": [
            {
              "title": "Chó Bull Mastiff: Loài chó bảo vệ mạnh mẽ",
              "url": "https://www.akc.org/dog-breeds/bull-mastiff/",
              "source": "American Kennel Club"
            }
          ],
          "funfacts": [
            "Bull Mastiffs có thể giữ canh gác suốt cả ngày 🐕",
            "Chúng là loài chó rất thích ngủ và có thể ngủ tới 12 tiếng mỗi ngày 💤"
          ]
        },

      
          "hai-tieu": {
            "id": "hai-tieu",
            "name": "Hải Tiêu",
            "scientific": "Tritonia Hombergii",
            "category": "Động vật biển",
            "family": "Họ hải tiêu (Tritoniidae)",
            "facts": [
              { "label": "Môi trường sống", "value": "Biển, ven bờ" },
              { "label": "Chế độ ăn", "value": "Lọc thức ăn từ nước biển, chủ yếu là plankton" },
              { "label": "Tuổi thọ", "value": "3-5 năm" },
              { "label": "Kích thước", "value": "10-20 cm" },
              { "label": "Cân nặng", "value": "50-200 g" }
            ],
            "description": "Hải Tiêu là loài động vật biển có hình dáng giống ốc, sống trong môi trường nước biển và thường được tìm thấy ở các khu vực ven bờ.",
            "behavior": "Chúng là loài sinh vật tĩnh lặng, chủ yếu tồn tại bằng cách lọc nước biển để tìm thức ăn.",
            "conservation": "Hải Tiêu không phải là loài nguy cấp, nhưng sự ô nhiễm môi trường có thể ảnh hưởng đến chúng.",
            "related": ["kien", "chim-kiwi"],
            "articles": [
              {
                "title": "Hải Tiêu và tác dụng của chúng đối với hệ sinh thái biển",
                "url": "https://www.nationalgeographic.com/animals/invertebrates/tritonia-hombergii",
                "source": "National Geographic"
              }
            ],
            "funfacts": [
              "Hải Tiêu có thể sống ở độ sâu lên tới 100 mét dưới mực nước biển 🌊",
              "Chúng là một trong những sinh vật có thể tồn tại trong môi trường rất khắc nghiệt 🐚"
            ]
          },
        
          "kien": {
            "id": "kien",
            "name": "Kiến",
            "scientific": "Formicidae",
            "category": "Côn trùng",
            "family": "Họ kiến (Formicidae)",
            "facts": [
              { "label": "Môi trường sống", "value": "Chung cư, tổ mối, cánh đồng" },
              { "label": "Chế độ ăn", "value": "Thực vật, động vật nhỏ, mỡ động vật" },
              { "label": "Tuổi thọ", "value": "1-3 năm (con cái), vài tháng (con đực)" },
              { "label": "Kích thước", "value": "1–2 cm" },
              { "label": "Cân nặng", "value": "Không đáng kể" }
            ],
            "description": "Kiến là một trong những loài côn trùng phổ biến nhất trên thế giới, sống thành các đàn lớn và có hệ thống xã hội phát triển.",
            "behavior": "Chúng có khả năng giao tiếp và làm việc nhóm rất tốt, cùng nhau xây dựng tổ và kiếm ăn.",
            "conservation": "Kiến không phải là loài động vật nguy cấp, chúng tồn tại và phát triển mạnh mẽ ở hầu hết các môi trường trên trái đất.",
            "related": ["hai-tieu", "thu-y-tuc"],
            "articles": [
              {
                "title": "Những điều thú vị về loài kiến và cách chúng tạo ra các đế chế",
                "url": "https://www.nationalgeographic.com/animals/insects/ants",
                "source": "National Geographic"
              }
            ],
            "funfacts": [
              "Một tổ kiến có thể có tới hàng triệu cá thể 🐜",
              "Kiến có thể mang vật nặng gấp 50 lần trọng lượng cơ thể chúng 💪"
            ]
          },
        
          "thuy-tuc": {
            "id": "thuy-tuc",
            "name": "Thủy Tức",
            "scientific": "Hydra",
            "category": "Động vật nước ngọt",
            "family": "Họ thủy tức (Hydridae)",
            "facts": [
              { "label": "Môi trường sống", "value": "Nước ngọt" },
              { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là tảo, động vật phù du nhỏ" },
              { "label": "Tuổi thọ", "value": "Nhiều năm, có thể tái sinh vô hạn" },
              { "label": "Kích thước", "value": "2–3 cm" },
              { "label": "Cân nặng", "value": "Không đáng kể" }
            ],
            "description": "Thủy Tức là loài động vật có khả năng tái sinh cực kỳ mạnh mẽ, có thể phục hồi mọi bộ phận cơ thể nếu bị tổn thương.",
            "behavior": "Chúng là loài động vật ăn thịt, săn mồi bằng cách bắt giữ các sinh vật nhỏ thông qua xúc tu có chứa tế bào độc.",
            "conservation": "Thủy Tức không phải là loài động vật nguy cấp và có thể sinh sống trong nhiều môi trường nước ngọt.",
            "related": ["kien", "buom"],
            "articles": [
              {
                "title": "Thủy Tức và khả năng tái sinh thần kỳ",
                "url": "https://www.nationalgeographic.com/animals/invertebrates/hydra",
                "source": "National Geographic"
              }
            ],
            "funfacts": [
              "Thủy Tức có thể sống vĩnh viễn nhờ khả năng tái sinh hoàn hảo ♻️",
              "Chúng có thể tạo ra bản sao hoàn hảo của cơ thể khi bị cắt đứt 🌱"
            ]
          },
        
          "buom": {
            "id": "buom",
            "name": "Bướm",
            "scientific": "Lepidoptera",
            "category": "Côn trùng",
            "family": "Họ bướm (Lepidoptera)",
            "facts": [
              { "label": "Môi trường sống", "value": "Rừng, đồng cỏ, vườn cây" },
              { "label": "Chế độ ăn", "value": "Nectar hoa" },
              { "label": "Tuổi thọ", "value": "1-2 tháng" },
              { "label": "Kích thước", "value": "3–15 cm (cánh)"},
              { "label": "Cân nặng", "value": "5-10 g" }
            ],
            "description": "Bướm là loài côn trùng đẹp, nổi bật với đôi cánh sắc màu và quá trình biến hình từ ấu trùng thành trưởng thành.",
            "behavior": "Bướm bay từ hoa này sang hoa khác để hút mật, là một phần quan trọng trong việc thụ phấn cho cây cối.",
            "conservation": "Một số loài bướm đang bị đe dọa do mất môi trường sống và biến đổi khí hậu.",
            "related": ["thuy-tuc", "chim-kiwi"],
            "articles": [
              {
                "title": "Bướm và tầm quan trọng trong sinh thái học",
                "url": "https://www.nationalgeographic.com/animals/insects/butterflies",
                "source": "National Geographic"
              }
            ],
            "funfacts": [
              "Bướm có thể bay quãng đường dài lên đến 3.000 km 🦋",
              "Các loài bướm có đôi cánh màu sắc rực rỡ để thu hút bạn tình 🦋"
            ]
          },
        
          "chim-kiwi": {
            "id": "chim-kiwi",
            "name": "Chim Kiwi",
            "scientific": "Apteryx",
            "category": "Chim",
            "family": "Họ kiwi (Apterygidae)",
            "facts": [
              { "label": "Môi trường sống", "value": "Rừng nhiệt đới New Zealand" },
              { "label": "Chế độ ăn", "value": "Ăn côn trùng, trái cây, và thực vật" },
              { "label": "Tuổi thọ", "value": "25-50 năm" },
              { "label": "Kích thước", "value": "40–60 cm" },
              { "label": "Cân nặng", "value": "2–4 kg" }
            ],
            "description": "Chim Kiwi là loài chim không bay đặc trưng của New Zealand, nổi bật với chiếc mỏ dài và bộ lông xù, là biểu tượng của quốc gia này.",
            "behavior": "Chim Kiwi là loài chim hoạt động vào ban đêm, chủ yếu tìm kiếm thức ăn dưới mặt đất.",
            "conservation": "Chim Kiwi đang bị đe dọa nghiêm trọng do mất môi trường sống và sự săn bắt từ loài động vật xâm lấn.",
            "related": ["buom", "hai-tieu"],
            "articles": [
              {
                "title": "Chim Kiwi và chiến lược bảo tồn của New Zealand",
                "url": "https://www.nationalgeographic.com/animals/birds/kiwi",
                "source": "National Geographic"
              }
            ],
            "funfacts": [
              "Chim Kiwi không thể bay nhưng có khả năng đi bộ rất nhanh 👣",
              "Chim Kiwi có thể nhận dạng mùi rất tốt, giúp chúng tìm thức ăn dưới mặt đất 👃"
            ]
          },

          
            "chim-cat": {
              "id": "chim-cat",
              "name": "Chim Cắt",
              "scientific": "Falco peregrinus",
              "category": "Chim",
              "family": "Họ cắt (Falconidae)",
              "facts": [
                { "label": "Môi trường sống", "value": "Vùng đồng cỏ, núi cao, thành phố" },
                { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là các loài chim khác" },
                { "label": "Tuổi thọ", "value": "6-7 năm trong tự nhiên" },
                { "label": "Kích thước", "value": "40-50 cm (dài cơ thể)" },
                { "label": "Cân nặng", "value": "500-1,000 g" }
              ],
              "description": "Chim Cắt (Falco peregrinus) là loài chim săn mồi nổi tiếng với khả năng bay nhanh, là loài chim bay nhanh nhất trong thế giới động vật.",
              "behavior": "Chim Cắt có khả năng bay lượn nhanh và chính xác, chúng săn mồi bằng cách lao xuống từ trên cao với tốc độ rất lớn.",
              "conservation": "Loài chim này đã được bảo vệ và không còn trong tình trạng nguy cấp sau khi được bảo vệ từ những năm 1970.",
              "related": ["kien-quan-doi", "cau-ca"],
              "articles": [
                {
                  "title": "Chim Cắt và khả năng bay nhanh như tia chớp",
                  "url": "https://www.nationalgeographic.com/animals/birds/peregrine-falcon",
                  "source": "National Geographic"
                }
              ],
              "funfacts": [
                "Chim Cắt có thể bay với tốc độ lên đến 380 km/h khi săn mồi 🦅💨",
                "Chim Cắt là loài chim có thị giác rất sắc bén 👀"
              ]
            },
          
            "kien-quan-doi": {
              "id": "kien-quan-doi",
              "name": "Kiến Quân Đội",
              "scientific": "Eciton burchellii",
              "category": "Côn trùng",
              "family": "Họ kiến (Formicidae)",
              "facts": [
                { "label": "Môi trường sống", "value": "Rừng nhiệt đới" },
                { "label": "Chế độ ăn", "value": "Thịt động vật, bao gồm các loài côn trùng nhỏ và động vật chết" },
                { "label": "Tuổi thọ", "value": "1-3 năm" },
                { "label": "Kích thước", "value": "5-10 mm" },
                { "label": "Cân nặng", "value": "Không đáng kể" }
              ],
              "description": "Kiến Quân Đội (Eciton burchellii) là loài kiến nổi tiếng với sự tổ chức chặt chẽ trong đàn và khả năng săn mồi hợp tác.",
              "behavior": "Chúng sống thành bầy đàn rất lớn, đi săn theo nhóm và tìm kiếm thức ăn qua các vùng rừng.",
              "conservation": "Không bị đe dọa, chúng phát triển mạnh mẽ trong môi trường nhiệt đới.",
              "related": ["chim-cat", "buom"],
              "articles": [
                {
                  "title": "Kiến Quân Đội và chiến lược săn mồi đặc biệt",
                  "url": "https://www.nationalgeographic.com/animals/insects/army-ants",
                  "source": "National Geographic"
                }
              ],
              "funfacts": [
                "Kiến Quân Đội có thể di chuyển hàng trăm mét mỗi ngày để săn mồi 🐜⚔️",
                "Chúng có thể ăn thịt động vật lớn hơn nhiều lần so với kích thước cơ thể của chúng 🐜💪"
              ]
            },
          
            "doi": {
              "id": "doi",
              "name": "Dơi",
              "scientific": "Chi chiroptera",
              "category": "Động vật có vú",
              "family": "Họ dơi (Chiroptera)",
              "facts": [
                { "label": "Môi trường sống", "value": "Các khu vực hang động, cây cối" },
                { "label": "Chế độ ăn", "value": "Côn trùng, trái cây, máu (dơi hút máu)" },
                { "label": "Tuổi thọ", "value": "10-30 năm" },
                { "label": "Kích thước", "value": "5 cm đến 1.5 m (đối với các loài lớn)" },
                { "label": "Cân nặng", "value": "5 g đến 1 kg" }
              ],
              "description": "Dơi là loài động vật có vú duy nhất có khả năng bay, với đôi cánh giống như các màng da, có thể giúp chúng di chuyển tự do trong không gian.",
              "behavior": "Dơi chủ yếu hoạt động vào ban đêm và là những động vật ăn côn trùng, có thể di chuyển nhanh chóng trong không gian tối.",
              "conservation": "Một số loài dơi đang bị đe dọa do mất môi trường sống và dịch bệnh như bệnh nấm White-Nose Syndrome.",
              "related": ["chim-cat", "kien-quan-doi"],
              "articles": [
                {
                  "title": "Dơi và các khả năng đặc biệt của chúng trong việc săn mồi",
                  "url": "https://www.nationalgeographic.com/animals/mammals/bats",
                  "source": "National Geographic"
                }
              ],
              "funfacts": [
                "Dơi có thể ăn tới một nửa trọng lượng cơ thể của chúng trong một đêm 🦇🍽️",
                "Chúng là loài động vật có thể nhận dạng môi trường xung quanh bằng sóng siêu âm 🔊"
              ]
            },
          
            "ca-map-greenland": {
              "id": "ca-map-greenland",
              "name": "Cá Mập Greenland",
              "scientific": "Somniosus microcephalus",
              "category": "Cá",
              "family": "Họ cá mập (Somniosidae)",
              "facts": [
                { "label": "Môi trường sống", "value": "Biển Bắc Cực và Bắc Đại Tây Dương" },
                { "label": "Chế độ ăn", "value": "Các loài cá nhỏ, động vật biển khác" },
                { "label": "Tuổi thọ", "value": "200-400 năm" },
                { "label": "Kích thước", "value": "2.4-4.9 m" },
                { "label": "Cân nặng", "value": "200-500 kg" }
              ],
              "description": "Cá Mập Greenland là loài cá mập sống lâu nhất thế giới, với tuổi thọ có thể lên tới 400 năm.",
              "behavior": "Loài cá mập này rất chậm chạp và sống ở độ sâu lớn trong đại dương.",
              "conservation": "Mặc dù không phải là loài nguy cấp, nhưng cá mập Greenland vẫn đối mặt với mối đe dọa từ đánh bắt quá mức.",
              "related": ["doi", "ca"],
              "articles": [
                {
                  "title": "Cá Mập Greenland và tuổi thọ kinh ngạc",
                  "url": "https://www.nationalgeographic.com/animals/fish/greenland-shark",
                  "source": "National Geographic"
                }
              ],
              "funfacts": [
                "Cá Mập Greenland là loài động vật sống lâu nhất trên trái đất 🦈",
                "Chúng sống ở độ sâu tới 2,200 mét dưới mực nước biển 🌊"
              ]
            },
          
            "giun-bien": {
              "id": "giun-bien",
              "name": "Giun Biển",
              "scientific": "Echiura",
              "category": "Động vật biển",
              "family": "Họ giun biển (Echiuridae)",
              "facts": [
                { "label": "Môi trường sống", "value": "Cát và bùn dưới đáy biển" },
                { "label": "Chế độ ăn", "value": "Chất hữu cơ trong bùn và cát" },
                { "label": "Tuổi thọ", "value": "5-10 năm" },
                { "label": "Kích thước", "value": "10-50 cm" },
                { "label": "Cân nặng", "value": "Không đáng kể" }
              ],
              "description": "Giun Biển là loài giun biển sống dưới đáy biển, nổi bật với hình dáng và khả năng tự bảo vệ tốt.",
              "behavior": "Chúng sống chôn sâu dưới cát và bùn, hút các chất hữu cơ từ môi trường quanh đó.",
              "conservation": "Giun Biển không phải là loài nguy cấp và có thể sống ổn định trong môi trường biển.",
              "related": ["ca-map-greenland", "doi"],
              "articles": [
                {
                  "title": "Giun Biển và những điều thú vị về loài động vật này",
                  "url": "https://www.britannica.com/animal/echiurans",
                  "source": "Britannica"
                }
              ],
              "funfacts": [
                "Giun Biển có thể tự bảo vệ mình bằng cách đào sâu vào cát khi gặp nguy hiểm 🐚"
              ]
            },
    
            
              "fossa": {
                "id": "fossa",
                "name": "Fossa",
                "scientific": "Cryptoprocta ferox",
                "category": "Động vật có vú",
                "family": "Họ Fossa (Eupleridae)",
                "facts": [
                  { "label": "Môi trường sống", "value": "Rừng mưa nhiệt đới Madagascar" },
                  { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là các loài động vật nhỏ như linh trưởng, thú có túi" },
                  { "label": "Tuổi thọ", "value": "15-20 năm" },
                  { "label": "Kích thước", "value": "60-80 cm (dài cơ thể)" },
                  { "label": "Cân nặng", "value": "5-8 kg" }
                ],
                "description": "Fossa (Cryptoprocta ferox) là một loài động vật ăn thịt, giống như mèo lớn, có nguồn gốc từ Madagascar, là loài săn mồi hàng đầu ở đảo này.",
                "behavior": "Fossa rất linh hoạt và nhanh nhẹn, chúng có thể leo cây và săn mồi bằng cách lẩn trốn hoặc đột ngột tấn công.",
                "conservation": "Loài này đang bị đe dọa do mất môi trường sống và suy giảm số lượng do săn bắt và phá hủy rừng.",
                "related": ["kangaroo", "cu"],
                "articles": [
                  {
                    "title": "Fossa - Kẻ săn mồi độc đáo của Madagascar",
                    "url": "https://www.nationalgeographic.com/animals/mammals/fossa",
                    "source": "National Geographic"
                  }
                ],
                "funfacts": [
                  "Fossa có thể leo cây rất nhanh và chính xác 🐾🌳",
                  "Đây là loài động vật ăn thịt hàng đầu ở Madagascar 🦓"
                ]
              },
            
              "cu": {
                "id": "cu",
                "name": "Cú",
                "scientific": "Strigidae",
                "category": "Chim",
                "family": "Họ cú (Strigidae)",
                "facts": [
                  { "label": "Môi trường sống", "value": "Rừng, đồng cỏ, các khu vực có nhiều cây cối" },
                  { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là chuột, thỏ và các loài động vật nhỏ" },
                  { "label": "Tuổi thọ", "value": "10-15 năm" },
                  { "label": "Kích thước", "value": "30-70 cm (tùy loài)" },
                  { "label": "Cân nặng", "value": "300-2,000 g (tùy loài)" }
                ],
                "description": "Cú (Strigidae) là loài chim săn mồi, nổi bật với khả năng bay lặng lẽ và thị giác vượt trội, đặc biệt là khả năng săn mồi vào ban đêm.",
                "behavior": "Cú có khả năng bay rất im lặng nhờ bộ lông đặc biệt, chúng sử dụng thính giác cực kỳ nhạy bén để phát hiện con mồi.",
                "conservation": "Một số loài cú đang bị đe dọa do mất môi trường sống và bị săn bắn.",
                "related": ["fossa", "ca-mai-cheo"],
                "articles": [
                  {
                    "title": "Cú và những khả năng săn mồi tuyệt vời của chúng",
                    "url": "https://www.nationalgeographic.com/animals/birds/owls",
                    "source": "National Geographic"
                  }
                ],
                "funfacts": [
                  "Cú có thể quay đầu lên đến 270 độ để tìm con mồi 🦉🔄",
                  "Chúng có khả năng nghe con mồi từ rất xa, ngay cả khi con mồi di chuyển trong đêm 🌙"
                ]
              },
            
              "ca-mai-cheo": {
                "id": "ca-mai-cheo",
                "name": "Cá Mái Chèo",
                "scientific": "Monodactylus argenteus",
                "category": "Cá",
                "family": "Họ cá mái chèo (Monodactylidae)",
                "facts": [
                  { "label": "Môi trường sống", "value": "Các vùng nước ngọt hoặc nước mặn ở khu vực Đông Nam Á" },
                  { "label": "Chế độ ăn", "value": "Thực vật thủy sinh và động vật nhỏ như giáp xác" },
                  { "label": "Tuổi thọ", "value": "10-15 năm" },
                  { "label": "Kích thước", "value": "15-20 cm" },
                  { "label": "Cân nặng", "value": "100-200 g" }
                ],
                "description": "Cá Mái Chèo (Monodactylus argenteus) là loài cá đặc trưng với cơ thể dẹp và vây lưng lớn, sống ở các vùng nước ngọt và nước mặn của Đông Nam Á.",
                "behavior": "Cá Mái Chèo thường sống trong các nhóm, chúng ăn thực vật thủy sinh và các động vật nhỏ như giáp xác.",
                "conservation": "Loài này không bị đe dọa, nhưng môi trường sống của chúng đang dần bị thu hẹp do ô nhiễm và hoạt động đánh bắt quá mức.",
                "related": ["ca-dau-vien", "kangaroo"],
                "articles": [
                  {
                    "title": "Cá Mái Chèo - Vẻ đẹp của các loài cá đặc biệt",
                    "url": "https://www.fishbase.se/summary/Monodactylus-argenteus.html",
                    "source": "FishBase"
                  }
                ],
                "funfacts": [
                  "Cá Mái Chèo có thể sống cả trong môi trường nước mặn và nước ngọt 🌊",
                  "Chúng thường sống theo bầy đàn để bảo vệ nhau khỏi kẻ săn mồi 🐟"
                ]
              },
            
              "ca-dau-vien": {
                "id": "ca-dau-vien",
                "name": "Cá Đầu Viền",
                "scientific": "Cirrhilabrus solorensis",
                "category": "Cá",
                "family": "Họ cá đuối (Labridae)",
                "facts": [
                  { "label": "Môi trường sống", "value": "Rạn san hô ở vùng biển nhiệt đới" },
                  { "label": "Chế độ ăn", "value": "Thực vật thủy sinh và động vật giáp xác" },
                  { "label": "Tuổi thọ", "value": "3-5 năm" },
                  { "label": "Kích thước", "value": "10-15 cm" },
                  { "label": "Cân nặng", "value": "50-100 g" }
                ],
                "description": "Cá Đầu Viền (Cirrhilabrus solorensis) là loài cá đẹp mắt, sống chủ yếu ở các rạn san hô nhiệt đới và có màu sắc bắt mắt.",
                "behavior": "Chúng sống đơn độc hoặc theo nhóm nhỏ và rất hiếm khi tỏ ra hung hăng với các loài cá khác.",
                "conservation": "Mặc dù không bị đe dọa, nhưng môi trường sống của chúng đang bị suy giảm do tác động của con người.",
                "related": ["ca-mai-cheo", "kangaroo"],
                "articles": [
                  {
                    "title": "Cá Đầu Viền và sự sống đẹp trong các rạn san hô",
                    "url": "https://www.aquariumcoop.com/blogs/aquarium/cirrhilabrus-solorensis",
                    "source": "Aquarium Co-op"
                  }
                ],
                "funfacts": [
                  "Cá Đầu Viền có những màu sắc rất bắt mắt và nổi bật trong môi trường rạn san hô 🌈",
                  "Chúng sống chủ yếu ở các vùng biển Đông Nam Á 🌊"
                ]
              },
            
              "kangaroo": {
                "id": "kangaroo",
                "name": "Kangaroo",
                "scientific": "Macropus rufus",
                "category": "Động vật có vú",
                "family": "Họ Kangaroo (Macropodidae)",
                "facts": [
                  { "label": "Môi trường sống", "value": "Các vùng đồng cỏ và sa mạc Australia" },
                  { "label": "Chế độ ăn", "value": "Thực vật, đặc biệt là cỏ" },
                  { "label": "Tuổi thọ", "value": "6-8 năm trong tự nhiên" },
                  { "label": "Kích thước", "value": "1-1.8 m (chiều dài cơ thể)" },
                  { "label": "Cân nặng", "value": "35-90 kg" }
                ],
                "description": "Kangaroo (Macropus rufus) là loài động vật có vú lớn nhất trong họ Kangaroo, nổi bật với khả năng nhảy xa và sống trong môi trường khô cằn của Australia.",
                "behavior": "Kangaroo chủ yếu hoạt động vào ban đêm, chúng sử dụng chân sau mạnh mẽ để nhảy và di chuyển trong môi trường rộng lớn.",
                "conservation": "Kangaroo không bị đe dọa, nhưng một số loài đang bị giảm số lượng do săn bắn và mất môi trường sống.",
                "related": ["fossa", "cu"],
                "articles": [
                  {
                    "title": "Kangaroo - Biểu tượng của Australia",
                    "url": "https://www.nationalgeographic.com/animals/mammals/kangaroo",
                    "source": "National Geographic"
                  }
                ],
                "funfacts": [
                  "Kangaroo có thể nhảy xa tới 9 mét chỉ trong một lần bật 🦘",
                  "Chúng là loài động vật có thể nhảy tới 60 km/h 🚀"
                ]
              },
      

              
                "ran-mamba-den": {
                  "id": "ran-mamba-den",
                  "name": "Rắn Mamba Đen",
                  "scientific": "Dendroaspis polylepis",
                  "category": "Reptilia",
                  "family": "Họ rắn độc (Elapidae)",
                  "facts": [
                    { "label": "Môi trường sống", "value": "Rừng nhiệt đới, thảo nguyên châu Phi" },
                    { "label": "Chế độ ăn", "value": "Thịt, chủ yếu là các loài động vật nhỏ như chuột và chim" },
                    { "label": "Tuổi thọ", "value": "6-8 năm trong tự nhiên" },
                    { "label": "Kích thước", "value": "2.5-4.5 m" },
                    { "label": "Cân nặng", "value": "1.5-2.5 kg" }
                  ],
                  "description": "Rắn Mamba Đen (Dendroaspis polylepis) là loài rắn cực kỳ độc, được biết đến với tốc độ di chuyển rất nhanh và nọc độc mạnh mẽ, gây tử vong cho nạn nhân chỉ trong vài giờ.",
                  "behavior": "Rắn Mamba Đen là loài cực kỳ nhanh nhẹn và có thể di chuyển với tốc độ lên đến 20 km/h. Chúng chủ yếu hoạt động vào ban ngày.",
                  "conservation": "Loài này không bị đe dọa, nhưng vẫn là nỗi khiếp sợ của nhiều người do tính nguy hiểm của nó.",
                  "related": ["ran-ho-mang", "ran-bien"],
                  "articles": [
                    {
                      "title": "Rắn Mamba Đen - Tốc độ và sức mạnh",
                      "url": "https://www.nationalgeographic.com/animals/reptiles/mamba-snake",
                      "source": "National Geographic"
                    }
                  ],
                  "funfacts": [
                    "Rắn Mamba Đen là một trong những loài rắn nhanh nhất thế giới 🐍💨",
                    "Nọc độc của nó có thể giết chết một con người chỉ trong vòng 30 phút nếu không được chữa trị kịp thời 🕒"
                  ]
                },
              
                "ran-bien": {
                  "id": "ran-bien",
                  "name": "Rắn Biển",
                  "scientific": "Hydrophiinae",
                  "category": "Reptilia",
                  "family": "Họ rắn biển (Elapidae)",
                  "facts": [
                    { "label": "Môi trường sống", "value": "Biển, đại dương và các vùng nước ven bờ" },
                    { "label": "Chế độ ăn", "value": "Thịt, chủ yếu là cá và động vật biển nhỏ" },
                    { "label": "Tuổi thọ", "value": "10-15 năm" },
                    { "label": "Kích thước", "value": "1-2 m" },
                    { "label": "Cân nặng", "value": "0.5-1.5 kg" }
                  ],
                  "description": "Rắn Biển (Hydrophiinae) là loài rắn sống trong môi trường nước, có khả năng bơi lội tốt và độc rất mạnh, có thể gây tử vong nếu bị cắn.",
                  "behavior": "Rắn biển sống chủ yếu trong nước, chúng có thể ở dưới nước trong nhiều giờ mà không cần lên mặt nước. Chúng săn mồi dưới nước và rất ít khi tiếp xúc với con người.",
                  "conservation": "Loài này không bị đe dọa nhưng cũng rất khó tiếp cận vì sống chủ yếu dưới nước.",
                  "related": ["mamaba-den", "ran-hso-mang"],
                  "articles": [
                    {
                      "title": "Rắn Biển - Những sinh vật nguy hiểm dưới nước",
                      "url": "https://www.britannica.com/animal/sea-snake",
                      "source": "Britannica"
                    }
                  ],
                  "funfacts": [
                    "Rắn Biển có thể sống hoàn toàn dưới nước trong suốt cuộc đời 🐍🌊",
                    "Chúng có nọc độc mạnh gấp nhiều lần các loài rắn sống trên cạn 🐍"
                  ]
                },
              
                "ran-ho-mang": {
                  "id": "ran-ho-mang",
                  "name": "Rắn Hổ Mang",
                  "scientific": "Naja",
                  "category": "Reptilia",
                  "family": "Họ rắn hổ mang (Elapidae)",
                  "facts": [
                    { "label": "Môi trường sống", "value": "Rừng nhiệt đới, thảo nguyên và các khu vực ấm áp" },
                    { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là chuột, chim và các loài bò sát khác" },
                    { "label": "Tuổi thọ", "value": "15-20 năm" },
                    { "label": "Kích thước", "value": "1.5-2.5 m" },
                    { "label": "Cân nặng", "value": "2-4 kg" }
                  ],
                  "description": "Rắn Hổ Mang (Naja) là loài rắn nổi tiếng với khả năng mở rộng cổ khi cảm thấy bị đe dọa, và nọc độc mạnh có thể gây chết người.",
                  "behavior": "Rắn hổ mang thường sống đơn độc và có xu hướng phòng thủ mạnh mẽ khi cảm thấy bị đe dọa. Chúng có thể đứng thẳng và mở rộng cổ để tạo ra sự đe dọa.",
                  "conservation": "Rắn hổ mang không bị đe dọa trên diện rộng, nhưng một số loài đang gặp phải nguy cơ do phá hủy môi trường sống và săn bắn.",
                  "related": ["mamaba-den", "ran-bien"],
                  "articles": [
                    {
                      "title": "Rắn Hổ Mang - Kẻ săn mồi khét tiếng",
                      "url": "https://www.nationalgeographic.com/animals/reptiles/cobra",
                      "source": "National Geographic"
                    }
                  ],
                  "funfacts": [
                    "Rắn Hổ Mang có thể mở rộng cổ của mình để trông lớn hơn và gây ấn tượng với kẻ thù 🐍",
                    "Nọc độc của nó có thể giết chết một người trong vòng vài giờ nếu không được chữa trị kịp thời ⏳"
                  ]
                },
              
                "ca-nhong": {
                  "id": "ca-nhong",
                  "name": "Cá Nhồng",
                  "scientific": "Toxotes jaculatrix",
                  "category": "Cá",
                  "family": "Họ cá nhồng (Toxotidae)",
                  "facts": [
                    { "label": "Môi trường sống", "value": "Sông ngòi, hồ, vùng nước ngọt" },
                    { "label": "Chế độ ăn", "value": "Cá ăn tạp, chủ yếu là côn trùng, động vật nhỏ và thực vật thủy sinh" },
                    { "label": "Tuổi thọ", "value": "5-7 năm" },
                    { "label": "Kích thước", "value": "30-40 cm" },
                    { "label": "Cân nặng", "value": "200-300 g" }
                  ],
                  "description": "Cá Nhồng (Toxotes jaculatrix) là loài cá có khả năng bắn nước ra xa để bắt con mồi, đặc biệt là côn trùng trên mặt nước.",
                  "behavior": "Cá Nhồng sống trong các hồ và sông, chúng rất thông minh và có thể sử dụng dòng nước để bắt mồi.",
                  "conservation": "Loài này không bị đe dọa, nhưng môi trường sống của chúng đang bị suy giảm do ô nhiễm và biến đổi khí hậu.",
                  "related": ["cao", "ran-hso-mang"],
                  "articles": [
                    {
                      "title": "Cá Nhồng - Loài cá bắn nước độc đáo",
                      "url": "https://www.britannica.com/animal/toxotes-jaculatrix",
                      "source": "Britannica"
                    }
                  ],
                  "funfacts": [
                    "Cá Nhồng có thể bắn nước ra xa để bắt mồi 🐟💦",
                    "Chúng là một trong những loài cá thông minh nhất trong các loài động vật nước ngọt 🧠"
                  ]
                },
              
                "cao": {
                  "id": "cao",
                  "name": "Cáo",
                  "scientific": "Vulpes vulpes",
                  "category": "Động vật có vú",
                  "family": "Họ cáo (Canidae)",
                  "facts": [
                    { "label": "Môi trường sống", "value": "Rừng, thảo nguyên và các khu vực cận sa mạc" },
                    { "label": "Chế độ ăn", "value": "Omnivore, ăn thực vật, động vật nhỏ và các loài côn trùng" },
                    { "label": "Tuổi thọ", "value": "3-6 năm trong tự nhiên" },
                    { "label": "Kích thước", "value": "50-90 cm (thân), 30-50 cm (đuôi)" },
                    { "label": "Cân nặng", "value": "3-6 kg" }
                  ],
                  "description": "Cáo (Vulpes vulpes) là một loài động vật săn mồi, nổi bật với khả năng thích nghi và lối sống linh hoạt trong nhiều môi trường sống khác nhau.",
                  "behavior": "Cáo thường sống đơn độc hoặc theo cặp. Chúng hoạt động chủ yếu vào ban đêm và sử dụng kỹ năng săn mồi xuất sắc để kiếm ăn.",
                  "conservation": "Cáo không bị đe dọa và là loài phổ biến ở nhiều khu vực trên thế giới.",
                  "related": ["ran-bien", "mamaba-den"],
                  "articles": [
                    {
                      "title": "Cáo - Loài động vật thông minh và lanh lợi",
                      "url": "https://www.britannica.com/animal/fox-mammal",
                      "source": "Britannica"
                    }
                  ],
                  "funfacts": [
                    "Cáo có thể di chuyển lặng lẽ và nhanh chóng như một bóng ma trong rừng 🌲",
                    "Chúng có thể sống sót trong nhiều môi trường sống khác nhau, từ rừng sâu đến thành phố 🏙️"
                  ]
                },
                
                
                
                  "hai-quy": {
                    "id": "hai-quy",
                    "name": "Hải Quỳ",
                    "scientific": "Actiniaria",
                    "category": "Động vật biển",
                    "family": "Hải quỳ (Actiniidae)",
                    "facts": [
                      { "label": "Môi trường sống", "value": "Đáy biển, gần các rạn san hô" },
                      { "label": "Chế độ ăn", "value": "Động vật ăn thịt, chủ yếu là cá và động vật biển nhỏ" },
                      { "label": "Tuổi thọ", "value": "5-10 năm" },
                      { "label": "Kích thước", "value": "10-40 cm" },
                      { "label": "Cân nặng", "value": "0.5-2 kg" }
                    ],
                    "description": "Hải Quỳ (Actiniaria) là loài động vật biển sống trên đáy biển, nổi bật với các tua đặc biệt có thể dùng để bắt mồi.",
                    "behavior": "Hải Quỳ có thể di chuyển chậm chạp, nhưng chúng có khả năng tấn công mồi bằng cách sử dụng các tua có chứa độc tố.",
                    "conservation": "Hải Quỳ không bị đe dọa, nhưng các vấn đề về ô nhiễm và sự thay đổi của môi trường biển có thể ảnh hưởng đến chúng.",
                    "related": ["ran-san-ho", "ca-voi-beluga"],
                    "articles": [
                      {
                        "title": "Hải Quỳ - Vẻ đẹp tuyệt vời của đại dương",
                        "url": "https://www.britannica.com/animal/sea-anemone",
                        "source": "Britannica"
                      }
                    ],
                    "funfacts": [
                      "Hải Quỳ có thể sống rất lâu và có khả năng tái sinh sau khi bị mất các phần cơ thể 🐙",
                      "Chúng có các tua chứa độc tố để tấn công mồi và tự vệ 🌊"
                    ]
                  },
                
                  "ngua-van": {
                    "id": "ngua-van",
                    "name": "Ngựa Vằn",
                    "scientific": "Equus quagga",
                    "category": "Động vật có vú",
                    "family": "Họ ngựa (Equidae)",
                    "facts": [
                      { "label": "Môi trường sống", "value": "Thảo nguyên, đồng cỏ châu Phi" },
                      { "label": "Chế độ ăn", "value": "Cỏ và thực vật" },
                      { "label": "Tuổi thọ", "value": "20-30 năm trong tự nhiên" },
                      { "label": "Kích thước", "value": "1.3-1.5 m (chiều cao vai)" },
                      { "label": "Cân nặng", "value": "300-400 kg" }
                    ],
                    "description": "Ngựa Vằn (Equus quagga) là loài động vật có vú nổi bật với bộ lông sọc trắng đen đặc trưng, sống chủ yếu ở các đồng cỏ châu Phi.",
                    "behavior": "Ngựa vằn sống theo bầy đàn và có khả năng chạy rất nhanh để tránh khỏi các loài thú săn mồi.",
                    "conservation": "Ngựa vằn không bị đe dọa nghiêm trọng, nhưng một số phân loài đã gặp phải sự giảm sút số lượng do mất môi trường sống.",
                    "related": ["ca-voi-beluga", "hai-quy"],
                    "articles": [
                      {
                        "title": "Ngựa Vằn - Sự sống trong các đồng cỏ châu Phi",
                        "url": "https://www.nationalgeographic.com/animals/mammals/zebra",
                        "source": "National Geographic"
                      }
                    ],
                    "funfacts": [
                      "Mỗi con ngựa vằn có bộ sọc riêng biệt không giống nhau, giống như dấu vân tay của con người 🦓",
                      "Ngựa vằn có thể chạy với tốc độ lên đến 65 km/h 🏃‍♂️"
                    ]
                  },
                
                  "than-ung-california": {
                    "id": "than-ung-california",
                    "name": "Thần Ưng California",
                    "scientific": "Gymnogyps californianus",
                    "category": "Chim",
                    "family": "Họ kền kền (Cathartidae)",
                    "facts": [
                      { "label": "Môi trường sống", "value": "Các vùng đất khô, vùng núi cao ở Tây Nam Hoa Kỳ" },
                      { "label": "Chế độ ăn", "value": "Thịt, chủ yếu là xác chết động vật lớn" },
                      { "label": "Tuổi thọ", "value": "50-60 năm trong tự nhiên" },
                      { "label": "Kích thước", "value": "2.5-3 m (sải cánh)" },
                      { "label": "Cân nặng", "value": "8-12 kg" }
                    ],
                    "description": "Thần Ưng California (Gymnogyps californianus) là một loài chim kền kền lớn, đang bị đe dọa nghiêm trọng do mất môi trường sống và sự săn bắn.",
                    "behavior": "Chúng thường bay cao và có thể tìm thấy xác chết từ khoảng cách xa. Thần Ưng California có tuổi thọ rất dài và sống trong các nhóm nhỏ.",
                    "conservation": "Loài này là một trong những loài chim bị đe dọa nghiêm trọng, đã được đưa vào các chương trình bảo tồn nhằm cứu vớt số lượng còn lại.",
                    "related": ["ca-voi-beluga", "ngua-van"],
                    "articles": [
                      {
                        "title": "Thần Ưng California: Cánh chim khổng lồ bị đe dọa",
                        "url": "https://www.nationalgeographic.com/animals/birds/california-condor",
                        "source": "National Geographic"
                      }
                    ],
                    "funfacts": [
                      "Thần Ưng California có thể bay với sải cánh lên đến 3m 🦅",
                      "Loài này có tuổi thọ dài và sống trong các nhóm gia đình nhỏ 💕"
                    ]
                  },
                
                  "ca-voi-beluga": {
                    "id": "ca-voi-beluga",
                    "name": "Cá Voi Beluga",
                    "scientific": "Delphinapterus leucas",
                    "category": "Động vật biển",
                    "family": "Họ cá voi (Monodontidae)",
                    "facts": [
                      { "label": "Môi trường sống", "value": "Biển Bắc Cực và các khu vực lạnh giá khác" },
                      { "label": "Chế độ ăn", "value": "Cá, động vật giáp xác và các sinh vật biển khác" },
                      { "label": "Tuổi thọ", "value": "30-35 năm" },
                      { "label": "Kích thước", "value": "4-5 m" },
                      { "label": "Cân nặng", "value": "1,100-1,600 kg" }
                    ],
                    "description": "Cá Voi Beluga (Delphinapterus leucas) là loài cá voi sống ở vùng Bắc Cực, nổi bật với màu da trắng và khả năng giao tiếp qua âm thanh rất phức tạp.",
                    "behavior": "Cá voi Beluga sống thành bầy và có thể di chuyển hàng nghìn km. Chúng sử dụng tiếng kêu để giao tiếp và điều hướng trong môi trường nước lạnh giá.",
                    "conservation": "Loài này đang gặp phải nguy cơ do thay đổi khí hậu và ô nhiễm môi trường biển.",
                    "related": ["hai-quy", "ngua-van"],
                    "articles": [
                      {
                        "title": "Cá Voi Beluga - Khám phá thế giới của loài cá voi trắng",
                        "url": "https://www.nationalgeographic.com/animals/mammals/beluga-whale",
                        "source": "National Geographic"
                      }
                    ],
                    "funfacts": [
                      "Cá Voi Beluga có khả năng thay đổi âm thanh để giao tiếp 🐋🔊",
                      "Loài cá voi này có thể sống trong môi trường nước rất lạnh 🧊"
                    ]
                  },
                
                  "ran-san-ho": {
                    "id": "ran-san-ho",
                    "name": "Rạn San Hô",
                    "scientific": "Scleractinia",
                    "category": "Động vật biển",
                    "family": "Rạn san hô (Scleractiniidae)",
                    "facts": [
                      { "label": "Môi trường sống", "value": "Các vùng biển nhiệt đới và cận nhiệt đới" },
                      { "label": "Chế độ ăn", "value": "Cả động vật và thực vật biển, có thể là sinh vật phù du" },
                      { "label": "Tuổi thọ", "value": "50-100 năm" },
                      { "label": "Kích thước", "value": "Có thể phát triển thành những rạn san hô lớn rộng hàng trăm mét" }
                    ],
                    "description": "Rạn san hô là hệ sinh thái biển phong phú, được tạo thành từ các loài động vật san hô nhỏ, là nơi sinh sống của nhiều loài động vật biển.",
                    "behavior": "Rạn san hô tạo ra các cấu trúc đặc biệt để bảo vệ và hỗ trợ sự sống của nhiều loài sinh vật biển.",
                    "conservation": "Rạn san hô đang bị đe dọa nghiêm trọng bởi sự biến đổi khí hậu, ô nhiễm và hoạt động khai thác hủy hoại.",
                    "related": ["ca-voi-beluga", "hai-quy"],
                    "articles": [
                      {
                        "title": "Rạn san hô - Hệ sinh thái biển đa dạng và phong phú",
                        "url": "https://www.nationalgeographic.com/environment/oceans/coral-reefs",
                        "source": "National Geographic"
                      }
                    ],
                    "funfacts": [
                      "Rạn san hô là ngôi nhà của hàng nghìn loài động vật biển 🐠",
                      "Một số rạn san hô có thể tồn tại hàng nghìn năm 🏝️"
                    ]
                  },

                  
                    "huou-cao-co": {
                      "id": "huou-cao-co",
                      "name": "Hươu Cao Cổ",
                      "scientific": "Giraffa camelopardalis",
                      "category": "Động vật có vú",
                      "family": "Họ hươu cao cổ (Giraffidae)",
                      "facts": [
                        { "label": "Môi trường sống", "value": "Savanna và đồng cỏ châu Phi" },
                        { "label": "Chế độ ăn", "value": "Lá cây, chủ yếu là cây acacia" },
                        { "label": "Tuổi thọ", "value": "25-30 năm trong tự nhiên" },
                        { "label": "Kích thước", "value": "4.3-5.5 m (chiều cao)" },
                        { "label": "Cân nặng", "value": "800-1,200 kg" }
                      ],
                      "description": "Hươu cao cổ (Giraffa camelopardalis) là loài động vật có vú cao nhất trên thế giới, sống trong các đồng cỏ và savanna ở châu Phi.",
                      "behavior": "Hươu cao cổ sống thành nhóm nhỏ và di chuyển chậm, chúng có thể ăn lá cây từ các cây cao nhờ vào cổ dài của mình.",
                      "conservation": "Hươu cao cổ không phải là loài bị đe dọa nghiêm trọng, nhưng một số phân loài đang gặp khó khăn do mất môi trường sống.",
                      "related": ["ca-map-trang-lon", "hama"],
                      "articles": [
                        {
                          "title": "Hươu Cao Cổ - Loài động vật cao nhất trên Trái đất",
                          "url": "https://www.nationalgeographic.com/animals/mammals/giraffe",
                          "source": "National Geographic"
                        }
                      ],
                      "funfacts": [
                        "Hươu cao cổ có thể uống nước trong tư thế đứng thẳng nhờ cổ dài 🦒",
                        "Mặc dù cổ rất dài, nhưng hươu cao cổ có chỉ bảy đốt sống cổ, giống như con người 🦒"
                      ]
                    },
                  
                    "muc-nang": {
                      "id": "muc-nang",
                      "name": "Mực Nang",
                      "scientific": "Architeuthis Dux",
                      "category": "Động vật biển",
                      "family": "Họ mực (Loliginidae)",
                      "facts": [
                        { "label": "Môi trường sống", "value": "Biển sâu, đặc biệt là các vùng nước lạnh" },
                        { "label": "Chế độ ăn", "value": "Cá, tôm và các động vật biển nhỏ" },
                        { "label": "Tuổi thọ", "value": "5-10 năm" },
                        { "label": "Kích thước", "value": "12-20 m (dài cơ thể)" },
                        { "label": "Cân nặng", "value": "500 kg" }
                      ],
                      "description": "Mực Nang (Architeuthis Dux) là một loài mực khổng lồ sống sâu trong biển, được biết đến với kích thước ấn tượng và khả năng bơi nhanh.",
                      "behavior": "Mực Nang sống ở những vùng biển sâu và ít được nghiên cứu. Chúng có thể di chuyển nhanh chóng dưới nước và sử dụng mực để bảo vệ chính mình khỏi kẻ săn mồi.",
                      "conservation": "Mực Nang là loài ít bị đe dọa, nhưng sự thay đổi của môi trường biển có thể ảnh hưởng đến chúng.",
                      "related": ["ca-map-trang-lon", "huou-cao-co"],
                      "articles": [
                        {
                          "title": "Mực Nang - Sinh vật biển khổng lồ",
                          "url": "https://www.nationalgeographic.com/animals/invertebrates/giant-squid",
                          "source": "National Geographic"
                        }
                      ],
                      "funfacts": [
                        "Mực Nang có thể phát triển dài đến 20 m, dài gấp ba lần chiều dài của một chiếc xe buýt 🚍",
                        "Chúng có thể sống trong điều kiện ánh sáng yếu và môi trường nước lạnh ❄️"
                      ]
                    },
                  
                    "ha-ma": {
                      "id": "ha-ma",
                      "name": "Hà Mã",
                      "scientific": "Hippopotamus amphibius",
                      "category": "Động vật có vú",
                      "family": "Họ hà mã (Hippopotamidae)",
                      "facts": [
                        { "label": "Môi trường sống", "value": "Các con sông, hồ và đầm lầy ở châu Phi" },
                        { "label": "Chế độ ăn", "value": "Cỏ" },
                        { "label": "Tuổi thọ", "value": "40-50 năm" },
                        { "label": "Kích thước", "value": "4.5-5.2 m (dài cơ thể)" },
                        { "label": "Cân nặng", "value": "1,500-1,800 kg" }
                      ],
                      "description": "Hà Mã (Hippopotamus amphibius) là loài động vật có vú lớn sống chủ yếu trong môi trường nước ở châu Phi, chúng rất mạnh mẽ và có thể di chuyển nhanh trên cạn.",
                      "behavior": "Hà Mã chủ yếu hoạt động vào ban đêm, chúng sống thành nhóm lớn và rất bảo vệ lãnh thổ.",
                      "conservation": "Hà Mã đang gặp phải sự giảm sút số lượng do săn bắn và mất môi trường sống.",
                      "related": ["ca-map-trang-lon", "muc-nang"],
                      "articles": [
                        {
                          "title": "Hà Mã - Những sinh vật lớn nhưng hiền lành",
                          "url": "https://www.nationalgeographic.com/animals/mammals/hippopotamus",
                          "source": "National Geographic"
                        }
                      ],
                      "funfacts": [
                        "Hà Mã có thể chạy với tốc độ lên đến 30 km/h trên cạn 🦛💨",
                        "Dù có vẻ ngoài nặng nề, nhưng chúng lại có thể bơi rất nhanh dưới nước 🏊‍♂️"
                      ]
                    },
                  
                    "ca-map-trang-lon": {
                      "id": "ca-map-trang-lon",
                      "name": "Cá Mập Trắng Lớn",
                      "scientific": "Carcharodon carcharias",
                      "category": "Động vật biển",
                      "family": "Họ cá mập (Lamnidae)",
                      "facts": [
                        { "label": "Môi trường sống", "value": "Các vùng nước lạnh và ôn đới" },
                        { "label": "Chế độ ăn", "value": "Cá, hải cẩu và các động vật biển lớn" },
                        { "label": "Tuổi thọ", "value": "30-40 năm" },
                        { "label": "Kích thước", "value": "4-6 m" },
                        { "label": "Cân nặng", "value": "1,000-1,500 kg" }
                      ],
                      "description": "Cá Mập Trắng Lớn (Carcharodon carcharias) là loài cá mập săn mồi lớn, nổi tiếng với sức mạnh và khả năng săn bắt.",
                      "behavior": "Cá Mập Trắng Lớn có thể di chuyển với tốc độ nhanh và sử dụng lực tấn công mạnh mẽ để bắt mồi.",
                      "conservation": "Cá Mập Trắng Lớn đang gặp phải nguy cơ bị đe dọa do đánh bắt quá mức và tổn thương môi trường sống.",
                      "related": ["ha-ma", "muc-nang"],
                      "articles": [
                        {
                          "title": "Cá Mập Trắng Lớn - Vị vua của đại dương",
                          "url": "https://www.nationalgeographic.com/animals/fish/great-white-shark",
                          "source": "National Geographic"
                        }
                      ],
                      "funfacts": [
                        "Cá Mập Trắng Lớn có thể tấn công mạnh mẽ với tốc độ lên đến 56 km/h 🦈",
                        "Chúng có thể sống đến 40 năm trong môi trường tự nhiên ⏳"
                      ]
                    },
                  
                    "ve-sau": {
                      "id": "ve-sau",
                      "name": "Ve Sầu",
                      "scientific": "Cicadidae",
                      "category": "Côn trùng",
                      "family": "Họ ve sầu (Cicadidae)",
                      "facts": [
                        { "label": "Môi trường sống", "value": "Khu vực nhiệt đới và ôn đới, đặc biệt là khu rừng" },
                        { "label": "Chế độ ăn", "value": "Nhựa cây, chủ yếu là từ cây lá rộng" },
                        { "label": "Tuổi thọ", "value": "2-5 năm (tuổi trưởng thành chỉ sống vài tuần)" },
                        { "label": "Kích thước", "value": "2-5 cm" },
                        { "label": "Cân nặng", "value": "Dưới 1 gram" }
                      ],
                      "description": "Ve Sầu (Cicadidae) là một loài côn trùng đặc biệt, nổi bật với âm thanh kêu to và thời gian sống dài trong giai đoạn ấu trùng.",
                      "behavior": "Ve sầu sống chủ yếu trong giai đoạn ấu trùng dưới đất, chúng mọc lên bề mặt chỉ khi trưởng thành để giao phối.",
                      "conservation": "Ve sầu là loài không bị đe dọa và xuất hiện phổ biến ở nhiều vùng nhiệt đới và ôn đới.",
                      "related": ["ca-map-trang-lon", "huou-cao-co"],
                      "articles": [
                        {
                          "title": "Ve Sầu - Âm thanh của mùa hè",
                          "url": "https://www.nationalgeographic.com/animals/invertebrates/cicadas",
                          "source": "National Geographic"
                        }
                      ],
                      "funfacts": [
                        "Ve sầu có thể kêu to đến 100 decibel, tương đương với tiếng ồn của một chiếc máy bay 🦗",
                        "Chúng có thể sống dưới đất đến 17 năm trước khi xuất hiện trên mặt đất 🕰️"
                      ]
                    },

                    "tran-tham": {
  "id": "tran-tham",
  "name": "Trăn Thảm",
  "scientific": "Morelia spilota",
  "category": "Bò sát",
  "family": "Họ Trăn (Pythonidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng, đồng cỏ, khu dân cư" },
    { "label": "Chế độ ăn", "value": "Động vật nhỏ như chuột, chim" },
    { "label": "Chiều dài", "value": "2–4 mét" },
    { "label": "Tuổi thọ", "value": "20–30 năm" },
    { "label": "Mang thai", "value": "Đẻ trứng, 20–50 trứng" }
  ],
  "description": "Trăn Thảm là một loài trăn lớn, không độc, sống chủ yếu ở Úc và New Guinea. Chúng có họa tiết vảy đẹp như tấm thảm.",
  "behavior": "Chúng siết chặt con mồi trước khi nuốt chửng. Chủ yếu hoạt động về đêm.",
  "conservation": "Chưa bị đe dọa, phổ biến tại các vùng bản địa.",
  "related": ["tran-an", "ran-ho-mang"],
  "articles": [
    {
      "title": "Carpet Python: The Beautiful Hunter",
      "url": "https://australian.museum/learn/animals/reptiles/carpet-python/",
      "source": "Australian Museum"
    }
  ],
  "funfacts": [
    "Trăn Thảm có thể leo cây và bơi tốt 🐍🌳",
    "Một số con được nuôi làm thú cưng ở Úc 🏡",
    "Chúng có thể nuốt con mồi to gấp 3 lần đầu chúng 😮"
  ]
},

"bao-dom-nam-my": {
  "id": "bao-dom-nam-my",
  "name": "Báo Đốm Nam Mỹ",
  "scientific": "Panthera onca",
  "category": "Động vật có vú",
  "family": "Họ Mèo (Felidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Rừng nhiệt đới Amazon, đầm lầy" },
    { "label": "Chế độ ăn", "value": "Động vật ăn thịt: hươu, cá sấu, cá" },
    { "label": "Chiều dài", "value": "1.1–1.8 m" },
    { "label": "Cân nặng", "value": "45–100 kg" },
    { "label": "Tuổi thọ", "value": "12–15 năm" }
  ],
  "description": "Báo Đốm Nam Mỹ là loài mèo lớn thứ ba trên thế giới, có bộ lông vàng với đốm đen đặc trưng.",
  "behavior": "Sống đơn độc, hoạt động chủ yếu về đêm, biết bơi rất giỏi.",
  "conservation": "Dễ bị tổn thương (IUCN), đe dọa bởi mất môi trường sống.",
  "related": ["su-tu", "bao-tuyet"],
  "articles": [
    {
      "title": "Jaguar Facts and Conservation",
      "url": "https://www.worldwildlife.org/species/jaguar",
      "source": "WWF"
    }
  ],
  "funfacts": [
    "Là loài mèo duy nhất thường xuyên bơi 🐆🌊",
    "Hàm răng cực mạnh, có thể cắn xuyên sọ con mồi 💀",
    "Là biểu tượng văn hóa của người Maya và Aztec 🌿"
  ]
},

"ca-duoi-khong-lo": {
  "id": "ca-duoi-khong-lo",
  "name": "Cá Đuối Khổng Lồ",
  "scientific": "Mobula birostris",
  "category": "Cá",
  "family": "Họ Cá Đuối (Myliobatidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Biển khơi nhiệt đới và cận nhiệt" },
    { "label": "Chế độ ăn", "value": "Sinh vật phù du" },
    { "label": "Chiều dài", "value": "Lên đến 7 mét" },
    { "label": "Cân nặng", "value": "1.300 kg trở lên" },
    { "label": "Tuổi thọ", "value": "20–25 năm" }
  ],
  "description": "Cá Đuối Khổng Lồ, hay còn gọi là cá Manta, là loài cá đuối lớn nhất thế giới, hiền lành và thích hợp tác với thợ lặn.",
  "behavior": "Di chuyển theo đàn, thường xuyên nhảy lên khỏi mặt nước.",
  "conservation": "Dễ bị tổn thương (IUCN), bị đe dọa do đánh bắt và ô nhiễm đại dương.",
  "related": ["ca-map", "rua-bien"],
  "articles": [
    {
      "title": "Meet the Giant Manta Ray",
      "url": "https://www.nationalgeographic.com/animals/article/manta-ray-facts",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Cá Đuối Manta có não lớn nhất trong các loài cá 🧠🐟",
    "Chúng có thể 'bay' dưới nước bằng vây khổng lồ 🌊",
    "Thường xuyên hợp tác với cá nhỏ để được làm sạch 🐠"
  ]
},

"chim-ung": {
  "id": "chim-ung",
  "name": "Chim Ưng",
  "scientific": "Aquila chrysaetos (ví dụ: Ưng vàng)",
  "category": "Chim",
  "family": "Họ Ưng (Accipitridae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Núi, thảo nguyên, rừng" },
    { "label": "Chế độ ăn", "value": "Động vật nhỏ: thỏ, rắn, chim" },
    { "label": "Sải cánh", "value": "2.0–2.3 m" },
    { "label": "Tốc độ", "value": "Lên đến 240 km/h" },
    { "label": "Tuổi thọ", "value": "20–30 năm" }
  ],
  "description": "Chim Ưng là loài chim săn mồi mạnh mẽ, nổi bật với khả năng bay cao và tầm nhìn xa.",
  "behavior": "Săn mồi trên không, trung thành với lãnh thổ, có tổ lớn trên vách đá.",
  "conservation": "Ổn định, nhưng vẫn cần theo dõi ở một số khu vực.",
  "related": ["chim-canh-cut", "chim-cat"],
  "articles": [
    {
      "title": "Golden Eagles and Their Incredible Hunting Skills",
      "url": "https://www.britannica.com/animal/golden-eagle",
      "source": "Britannica"
    }
  ],
  "funfacts": [
    "Chim Ưng có thể nhìn thấy con mồi từ hơn 3 km 👁️🦅",
    "Chúng xây tổ cao nhất trong số các loài chim săn 🏔️",
    "Là biểu tượng quốc gia của nhiều nước như Mexico 🇲🇽"
  ]
},

"thu-mo-vit": {
  "id": "thu-mo-vit",
  "name": "Thú Mỏ Vịt",
  "scientific": "Ornithorhynchus anatinus",
  "category": "Động vật có vú",
  "family": "Họ Thú Mỏ Vịt (Ornithorhynchidae)",
  "facts": [
    { "label": "Môi trường sống", "value": "Suối, sông ở Úc" },
    { "label": "Chế độ ăn", "value": "Côn trùng, giáp xác nhỏ" },
    { "label": "Chiều dài", "value": "40–60 cm" },
    { "label": "Đặc điểm độc đáo", "value": "Đẻ trứng, có mỏ như vịt" },
    { "label": "Đặc tính", "value": "Con đực có nọc độc" }
  ],
  "description": "Thú Mỏ Vịt là loài thú độc đáo có hình dạng pha trộn giữa vịt, rái cá và hải ly, chỉ sống ở Úc.",
  "behavior": "Bơi giỏi, săn mồi vào ban đêm, dùng mỏ cảm nhận điện từ.",
  "conservation": "Suy giảm số lượng do mất môi trường sống.",
  "related": ["duoi-uoi", "chuot-tui"],
  "articles": [
    {
      "title": "Weird and Wonderful Platypus Facts",
      "url": "https://www.nationalgeographic.com/animals/mammals/facts/platypus",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Là một trong số rất ít loài thú đẻ trứng 🥚🐾",
    "Mỏ của nó có cảm biến điện từ như radar! 🦆⚡",
    "Có độc! Con đực có gai độc ở chân sau 🐍"
  ]
},

"titanoboa": {
  "id": "titanoboa",
  "name": "Titanoboa",
  "scientific": "Titanoboa cerrejonensis",
  "category": "Động vật bò sát (tuyệt chủng)",
  "family": "Boidae (Họ trăn)",
  "facts": [
    { "label": "Kích thước", "value": "Lên đến 12.8 mét" },
    { "label": "Cân nặng", "value": "Gần 1.135 kg" },
    { "label": "Niên đại", "value": "Khoảng 60 triệu năm trước" },
    { "label": "Môi trường sống", "value": "Rừng ngập nước nhiệt đới" },
    { "label": "Chế độ ăn", "value": "Động vật ăn thịt" }
  ],
  "description": "Titanoboa là loài trăn khổng lồ thời tiền sử được cho là dài nhất từng tồn tại.",
  "behavior": "Titanoboa săn mồi bằng cách siết chặt và nuốt chửng các con mồi lớn.",
  "conservation": "Tuyệt chủng",
  "related": ["tran-tham", "tran-cau-vong"],
  "articles": [
    {
      "title": "Phát hiện hóa thạch Titanoboa – trăn khổng lồ cổ đại",
      "url": "https://www.nationalgeographic.com/science/article/titanoboa-giant-snake-fossil",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Titanoboa to hơn cả trăn Miến Điện và trăn gấm hiện đại 🐍",
    "Sức siết của Titanoboa đủ để nghiền xương cá sấu 💀"
  ]
},
"dai-bang-vang": {
  "id": "dai-bang-vang",
  "name": "Đại Bàng Vàng",
  "scientific": "Aquila chrysaetos",
  "category": "Chim",
  "family": "Accipitridae (Họ Ưng)",
  "facts": [
    { "label": "Sải cánh", "value": "1.8 – 2.3 mét" },
    { "label": "Tốc độ", "value": "Lên đến 240 km/h khi lao xuống" },
    { "label": "Thức ăn", "value": "Động vật nhỏ như thỏ, cáo, rắn" },
    { "label": "Phân bố", "value": "Bắc bán cầu" }
  ],
  "description": "Đại Bàng Vàng là một trong những loài chim săn mồi mạnh mẽ nhất.",
  "behavior": "Săn bằng cách lao từ độ cao và tấn công chớp nhoáng.",
  "conservation": "Ít quan ngại",
  "related": ["chim-ung", "chim-cat"],
  "articles": [
    {
      "title": "Những cú tấn công chớp nhoáng của đại bàng vàng",
      "url": "https://www.bbc.com/earth/story/20150521-golden-eagles-killers-from-the-sky",
      "source": "BBC Earth"
    }
  ],
  "funfacts": [
    "Đại bàng vàng có thể nhấc con mồi nặng bằng 50% trọng lượng cơ thể 🦅",
    "Chúng là biểu tượng quốc gia của nhiều nước"
  ]
},
"ho-siberia": {
  "id": "ho-siberia",
  "name": "Hổ Siberia",
  "scientific": "Panthera tigris altaica",
  "category": "Động vật có vú",
  "family": "Họ mèo (Felidae)",
  "facts": [
    { "label": "Chiều dài", "value": "2.7 – 3.3 mét" },
    { "label": "Cân nặng", "value": "180 – 306 kg" },
    { "label": "Môi trường sống", "value": "Rừng lá kim lạnh giá" },
    { "label": "Chế độ ăn", "value": "Động vật ăn thịt" },
    { "label": "Tình trạng", "value": "Nguy cấp" }
  ],
  "description": "Hổ Siberia là loài hổ lớn nhất còn sống, sinh sống ở vùng viễn đông nước Nga.",
  "behavior": "Sống đơn độc, săn mồi vào lúc bình minh hoặc hoàng hôn.",
  "conservation": "Nguy cấp do săn trộm và mất môi trường sống.",
  "related": ["su-tu", "bao-dom"],
  "articles": [
    {
      "title": "Nỗ lực bảo vệ hổ Siberia tại Nga",
      "url": "https://www.worldwildlife.org/species/amur-tiger",
      "source": "WWF"
    }
  ],
  "funfacts": [
    "Hổ Siberia có lớp lông dày để chịu lạnh ❄️",
    "Mỗi cá thể có hoa văn sọc riêng biệt như vân tay 🐅"
  ]
},
"dong-vat-chan-dot": {
  "id": "dong-vat-chan-dot",
  "name": "Động Vật Chân Đốt",
  "scientific": "Arthropoda",
  "category": "Động vật không xương sống",
  "family": "Đa ngành (chân khớp)",
  "facts": [
    { "label": "Các nhóm chính", "value": "Côn trùng, nhện, giáp xác, rết" },
    { "label": "Đặc điểm", "value": "Cơ thể phân đốt, chân khớp, vỏ kitin" },
    { "label": "Phân bố", "value": "Toàn cầu" },
    { "label": "Tầm quan trọng", "value": "Quan trọng trong hệ sinh thái" }
  ],
  "description": "Động vật chân đốt là nhóm động vật lớn nhất với hàng triệu loài khác nhau.",
  "behavior": "Chúng có các hành vi thích nghi đa dạng như bay, bơi, bò, đào hang.",
  "conservation": "Một số loài phổ biến, một số đang bị đe dọa",
  "related": ["kien", "buom", "nhen", "tom"],
  "articles": [
    {
      "title": "Thế giới động vật chân đốt phong phú như thế nào?",
      "url": "https://www.britannica.com/animal/arthropod",
      "source": "Britannica"
    }
  ],
  "funfacts": [
    "Có khoảng 80% loài động vật là chân đốt 🕷️",
    "Một số loài có thể tái tạo chân 🦀",
    "Chúng từng xuất hiện từ thời kỳ Cambri hơn 500 triệu năm trước ⏳"
  ]
},

"ho": {
  "id": "ho",
  "name": "Hổ",
  "scientific": "Panthera tigris",
  "category": "Động vật có vú",
  "family": "Họ mèo (Felidae)",
  "facts": [
    { "label": "Chiều dài", "value": "2.5 – 3.3 mét" },
    { "label": "Cân nặng", "value": "100 – 300 kg" },
    { "label": "Tốc độ", "value": "49 – 65 km/h" },
    { "label": "Tuổi thọ", "value": "10 – 15 năm" },
    { "label": "Tình trạng", "value": "Nguy cấp (IUCN)" }
  ],
  "description": "Hổ là loài mèo lớn nhất trên Trái Đất, được biết đến với bộ lông sọc đặc trưng và khả năng săn mồi đáng kinh ngạc.",
  "behavior": "Hổ là loài đơn độc, chủ yếu săn mồi vào ban đêm và đánh dấu lãnh thổ bằng mùi và tiếng gầm.",
  "conservation": "Số lượng hổ hoang dã suy giảm do mất môi trường sống và nạn săn trộm.",
  "related": ["bao-siberia", "su-tu", "linh-mieu-iberia"],
  "articles": [
    {
      "title": "Tình trạng bảo tồn loài hổ và các nỗ lực toàn cầu",
      "url": "https://www.worldwildlife.org/species/tiger",
      "source": "WWF"
    }
  ],
  "funfacts": [
    "Không có hai con hổ nào có sọc giống nhau 🐯",
    "Hổ có thể bơi rất giỏi và thích tắm nước 🏊‍♂️",
    "Tiếng gầm của hổ có thể vang xa 3 km 🔊"
  ]
},
"bao-florida": {
  "id": "bao-florida",
  "name": "Báo Florida",
  "scientific": "Puma concolor coryi",
  "category": "Động vật có vú",
  "family": "Họ mèo (Felidae)",
  "facts": [
    { "label": "Chiều dài", "value": "1.8 – 2.2 mét (kể cả đuôi)" },
    { "label": "Cân nặng", "value": "45 – 72 kg" },
    { "label": "Tình trạng", "value": "Cực kỳ nguy cấp (IUCN)" },
    { "label": "Phân bố", "value": "Nam Florida, Hoa Kỳ" }
  ],
  "description": "Báo Florida là phân loài cực kỳ quý hiếm của báo sư tử, đang được bảo tồn nghiêm ngặt tại Hoa Kỳ.",
  "behavior": "Sống đơn độc, chủ yếu hoạt động vào sáng sớm và chiều tối.",
  "conservation": "Chỉ còn khoảng 120 – 230 cá thể trong tự nhiên.",
  "related": ["bao-siberia", "linh-mieu-iberia", "su-tu"],
  "articles": [
    {
      "title": "Cuộc chiến sinh tồn của báo Florida",
      "url": "https://www.nationalgeographic.com/animals/article/florida-panther-endangered-conservation",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Là loài mèo biểu tượng của bang Florida 🐆",
    "Thường bị đe dọa bởi tai nạn xe và mất rừng 🌲🚗"
  ]
},
"chihuahua": {
  "id": "chihuahua",
  "name": "Chó Chihuahua",
  "scientific": "Canis lupus familiaris",
  "category": "Động vật có vú",
  "family": "Họ chó (Canidae)",
  "facts": [
    { "label": "Chiều cao", "value": "15 – 23 cm" },
    { "label": "Cân nặng", "value": "1.5 – 3 kg" },
    { "label": "Tuổi thọ", "value": "12 – 20 năm" },
    { "label": "Xuất xứ", "value": "Mexico" }
  ],
  "description": "Chihuahua là giống chó nhỏ nhất thế giới, nổi tiếng với tính cách mạnh mẽ và trung thành.",
  "behavior": "Năng động, canh gác tốt, đôi khi hơi bướng bỉnh.",
  "conservation": "Không bị đe dọa, được nuôi phổ biến toàn cầu.",
  "related": ["cho-golden", "cho-bullmastiff"],
  "articles": [
    {
      "title": "Chihuahua – giống chó nhỏ nhưng đầy cá tính",
      "url": "https://www.akc.org/dog-breeds/chihuahua/",
      "source": "AKC"
    }
  ],
  "funfacts": [
    "Chihuahua từng được xem là linh thiêng trong văn hóa Toltec 🐶",
    "Có thể sống đến 20 năm nếu được chăm sóc tốt 🎂"
  ]
},
"voi": {
  "id": "voi",
  "name": "Voi",
  "scientific": "Elephas maximus / Loxodonta africana",
  "category": "Động vật có vú",
  "family": "Họ voi (Elephantidae)",
  "facts": [
    { "label": "Chiều cao", "value": "2.5 – 4.0 mét" },
    { "label": "Cân nặng", "value": "2.5 – 6 tấn" },
    { "label": "Tuổi thọ", "value": "60 – 70 năm" },
    { "label": "Trí nhớ", "value": "Rất tốt, nổi tiếng với trí nhớ lâu dài" }
  ],
  "description": "Voi là loài động vật có vú lớn nhất trên cạn, nổi bật với chiếc vòi dài và khả năng xã hội cao.",
  "behavior": "Sống thành đàn, có mối quan hệ phức tạp và chăm sóc con cái rất kỹ lưỡng.",
  "conservation": "Nhiều loài voi đang bị đe dọa do nạn săn ngà và mất môi trường sống.",
  "related": ["ha-ma", "huou-cao-co", "te-giac"],
  "articles": [
    {
      "title": "Bảo tồn voi châu Phi và châu Á trong thời đại hiện đại",
      "url": "https://www.worldwildlife.org/species/elephant",
      "source": "WWF"
    }
  ],
  "funfacts": [
    "Voi có thể nhận ra bản thân trong gương 🪞",
    "Chúng có khả năng phát ra âm thanh hạ âm để giao tiếp 🐘🎶",
    "Voi con học các kỹ năng xã hội từ các thành viên lớn tuổi 👩‍👧"
  ]
},

"ca-duoi-khong-lo": {
  "id": "ca-duoi-khong-lo",
  "name": "Cá Đuối Khổng Lồ",
  "scientific": "Urogymnus polylepis",
  "category": "Cá",
  "family": "Họ Dasyatidae (Cá đuối nước ngọt)",
  "facts": [
    { "label": "Chiều dài", "value": "Lên đến 5 mét" },
    { "label": "Cân nặng", "value": "Trên 300 kg" },
    { "label": "Tuổi thọ", "value": "20 – 25 năm" },
    { "label": "Phân bố", "value": "Sông Mekong, Châu Á Đông Nam" }
  ],
  "description": "Cá đuối khổng lồ là loài cá nước ngọt lớn nhất thế giới, sống chủ yếu ở các con sông lớn như Mekong.",
  "behavior": "Sống đáy, di chuyển chậm rãi, thường bị bắt gặp trong các khu vực nước sâu và bùn lầy.",
  "conservation": "Bị đe dọa do đánh bắt quá mức và thay đổi dòng chảy sông.",
  "related": ["ca-map-trang", "ca-mai-cheo"],
  "articles": [
    {
      "title": "Cá đuối nước ngọt lớn nhất thế giới được phát hiện tại Campuchia",
      "url": "https://www.nationalgeographic.com/animals/article/worlds-largest-freshwater-fish-found-in-cambodia",
      "source": "National Geographic"
    }
  ],
  "funfacts": [
    "Cá đuối khổng lồ có thể nặng gấp đôi con người trưởng thành 👤⚖️",
    "Chúng có thể tạo ra dòng điện yếu để cảm nhận môi trường ⚡",
    "Thường bị nhầm là 'quái vật sông' trong các truyền thuyết địa phương 🐟👹"
  ]
},
"ngua": {
  "id": "ngua",
  "name": "Ngựa",
  "scientific": "Equus ferus caballus",
  "category": "Động vật có vú",
  "family": "Họ Ngựa (Equidae)",
  "facts": [
    { "label": "Chiều cao", "value": "1.4 – 1.8 mét" },
    { "label": "Cân nặng", "value": "380 – 1,000 kg" },
    { "label": "Tốc độ", "value": "Lên đến 88 km/h" },
    { "label": "Tuổi thọ", "value": "25 – 30 năm" }
  ],
  "description": "Ngựa là loài động vật được con người thuần hóa hàng ngàn năm, đóng vai trò quan trọng trong vận chuyển và chiến tranh.",
  "behavior": "Ngựa là loài sống theo bầy đàn, có khả năng học hỏi và ghi nhớ cao.",
  "conservation": "Không bị đe dọa. Một số giống hoang dã đang được bảo tồn.",
  "related": ["de-nui", "linh-duong", "ngua-van"],
  "articles": [
    {
      "title": "Tầm quan trọng của ngựa trong lịch sử loài người",
      "url": "https://www.britannica.com/animal/horse",
      "source": "Britannica"
    }
  ],
  "funfacts": [
    "Ngựa có thể ngủ đứng và nằm 🐎😴",
    "Dấu vân mõm của mỗi con ngựa là duy nhất 👃",
    "Ngựa có thể cảm nhận cảm xúc con người 🧠💞"
  ]
},
"gorilla": {
  "id": "gorilla",
  "name": "Khỉ Đột (Gorilla)",
  "scientific": "Gorilla gorilla / Gorilla beringei",
  "category": "Động vật có vú",
  "family": "Họ Người (Hominidae)",
  "facts": [
    { "label": "Chiều cao", "value": "1.4 – 1.8 mét" },
    { "label": "Cân nặng", "value": "100 – 270 kg" },
    { "label": "Tuổi thọ", "value": "35 – 50 năm" },
    { "label": "Chế độ ăn", "value": "Thực vật chủ yếu" }
  ],
  "description": "Khỉ đột là loài linh trưởng lớn nhất, nổi tiếng với trí thông minh và tính xã hội cao.",
  "behavior": "Sống theo bầy, do một con đực đầu đàn 'lưng bạc' dẫn dắt. Có thể dùng công cụ thô sơ.",
  "conservation": "Nhiều phân loài đang nguy cấp do mất rừng và bệnh truyền nhiễm.",
  "related": ["duoi-uoi", "nguoi", "tinh-tinh"],
  "articles": [
    {
      "title": "Hành vi xã hội phức tạp của khỉ đột",
      "url": "https://www.bbc.com/news/science-environment-39559272",
      "source": "BBC News"
    }
  ],
  "funfacts": [
    "Gorilla chia sẻ khoảng 98% DNA với con người 🧬",
    "Khỉ đột có thể học ngôn ngữ ký hiệu 🧠🤟",
    "Chúng thường đánh ngực để thể hiện uy quyền 💥"
  ]
}



    // Có thể thêm các động vật khác ở đây
  };
  
  // Hàm lấy dữ liệu động vật theo ID
  function getAnimalById(name) {
    return animals[name] || null;
  }
  
 
  
