import { Product, Category } from "../types";

export const categories: Category[] = [
  { id: "shampoo", name: "Шампуни", icon: "Droplets" },
  { id: "coloring", name: "Окрашивание", icon: "Palette" },
  { id: "tools", name: "Инструменты", icon: "Scissors" },
  { id: "equipment", name: "Оборудование", icon: "Zap" },
  { id: "styling", name: "Стайлинг", icon: "Wind" },
  { id: "care", name: "Уход", icon: "Heart" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Шампунь Kérastase Nutritive Bain Satin",
    category: "shampoo",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/krt/krt40629/l/8.jpg",
    description:
      "Питательный шампунь для сухих и поврежденных волос. Обогащен протеинами и липидами.",
    specifications: {
      Объем: "250 мл",
      "Тип волос": "Сухие, поврежденные",
      Производитель: "Kérastase",
      Страна: "Франция",
    },
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Краска для волос L'Oréal Professionnel Majirel",
    category: "coloring",
    price: 850,
    image:
      "https://karamel-shop.ru/upload/iblock/227/8xv95k0c2suq275w1bf719d369o8ikhn/kraska-krem-mazhirel-i-mazhiruzh-loreal.jpg",
    description:
      "Стойкая крема-краска с технологией Ionène G + Incell для интенсивного цвета.",
    specifications: {
      Объем: "50 мл",
      Стойкость: "До 8 недель",
      "Покрытие седины": "100%",
      Производитель: "L'Oréal Professional",
    },
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Ножницы парикмахерские Jaguar Pre Style Ergo",
    category: "tools",
    price: 12500,
    originalPrice: 15000,
    image: "https://images.prom.ua/3756826994_w600_h600_3756826994.jpg",
    description:
      "Профессиональные ножницы из японской стали с эргономичной ручкой.",
    specifications: {
      Длина: "5.5 дюйма",
      Материал: "Японская сталь",
      Тип: "Прямые",
      Гарантия: "2 года",
    },
    inStock: true,
    rating: 4.9,
    reviews: 45,
  },
  {
    id: "4",
    name: "Фен профессиональный Parlux Alyon",
    category: "equipment",
    price: 18900,
    image:
      "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-2/07/23/94/16/11/12/6/100027386261b1.jpg",
    description:
      "Мощный профессиональный фен с ионизацией и керамическим покрытием.",
    specifications: {
      Мощность: "2250 Вт",
      Вес: "460 г",
      Технология: "Ионизация",
      Гарантия: "4 года",
    },
    inStock: true,
    rating: 4.7,
    reviews: 78,
  },
  {
    id: "5",
    name: "Мусс для укладки Schwarzkopf Osis+ Big Volume",
    category: "styling",
    price: 1200,
    image:
      "https://basket-10.wbbasket.ru/vol1400/part140063/140063734/images/big/1.webp",
    description: "Мусс сильной фиксации для создания объема и текстуры.",
    specifications: {
      Объем: "200 мл",
      Фиксация: "Сильная",
      Эффект: "Объем",
      Производитель: "Schwarzkopf Professional",
    },
    inStock: true,
    rating: 4.4,
    reviews: 92,
  },
  {
    id: "6",
    name: "Маска восстанавливающая Olaplex No.3",
    category: "care",
    price: 3200,
    image: "https://images.deal.by/315767561_w600_h600_315767561.jpg",
    description:
      "Домашняя маска для восстановления поврежденных связей в волосах.",
    specifications: {
      Объем: "100 мл",
      Применение: "1-2 раза в неделю",
      Эффект: "Восстановление",
      "Подходит для": "Всех типов волос",
    },
    inStock: false,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "7",
    name: "Машинка для стрижки Wahl Magic Clip",
    category: "tools",
    price: 8500,
    image:
      "https://static.insales-cdn.com/r/wuax0v1XJCo/rs:fit:1000:0:1/plain/images/products/1/2572/597346828/6331828840.webp@webp",
    description: "Профессиональная сетевая машинка с регулируемым ножом.",
    specifications: {
      Тип: "Сетевая",
      Ножи: "Регулируемые",
      Мотор: "Роторный",
      Насадки: "8 штук",
    },
    inStock: true,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "8",
    name: "Окислитель Wella Welloxon Perfect 9%",
    category: "coloring",
    price: 450,
    image:
      "https://basket-11.wbbasket.ru/vol1634/part163452/163452064/images/big/1.webp",
    description: "Крем-окислитель для стойкого окрашивания волос.",
    specifications: {
      Объем: "1000 мл",
      Концентрация: "9%",
      Тип: "Крем-окислитель",
      Производитель: "Wella Professionals",
    },
    inStock: true,
    rating: 4.3,
    reviews: 34,
  },
  // Новые товары для всех категорий:
  {
    id: "9",
    name: "Шампунь Londa Professional Deep Moisture",
    category: "shampoo",
    price: 1100,
    image:
      "https://shampoo63.ru/upload/iblock/3da/m8ytkogda1asuvs8pvquafja4yp1e17x.jpg",
    description: "Увлажняющий шампунь для нормальных и сухих волос.",
    specifications: {
      Объем: "250 мл",
      "Тип волос": "Нормальные, сухие",
      Производитель: "Londa Professional",
      Страна: "Германия",
    },
    inStock: true,
    rating: 4.2,
    reviews: 41,
  },
  {
    id: "10",
    name: "Триммер для окантовки Andis Slimline Pro Li",
    category: "equipment",
    price: 9900,
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/1569516114/100025763631b0.jpg",
    description: "Легкий и мощный триммер для точной окантовки и дизайна.",
    specifications: {
      Тип: "Беспроводной",
      "Время работы": "2 часа",
      Вес: "140 г",
      Гарантия: "1 год",
    },
    inStock: true,
    rating: 4.6,
    reviews: 53,
  },
  {
    id: "11",
    name: "Лак для волос Estel Airex Сильная фиксация",
    category: "styling",
    price: 650,
    image:
      "https://estel.pro/files/thumbs/catalog-page-preview-image/0/189/preset_recommend_item/421%D1%85489_AIREX_200ml_thermo-spray_x1_.png?t=1529417591",
    description: "Лак для волос с сильной фиксацией и защитой от влаги.",
    specifications: {
      Объем: "400 мл",
      Фиксация: "Сильная",
      Эффект: "Защита от влаги",
      Производитель: "Estel",
    },
    inStock: true,
    rating: 4.5,
    reviews: 38,
  },
  {
    id: "12",
    name: "Сыворотка для кончиков волос Kapous Dual Renascence 2 Phase",
    category: "care",
    price: 780,
    image:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-61/753/653/328/173/9/100023618516b0.jpg",
    description:
      "Двухфазная сыворотка для восстановления и защиты кончиков волос.",
    specifications: {
      Объем: "200 мл",
      Эффект: "Восстановление, защита",
      "Подходит для": "Секущихся кончиков",
      Производитель: "Kapous",
    },
    inStock: true,
    rating: 4.7,
    reviews: 61,
  },
];
