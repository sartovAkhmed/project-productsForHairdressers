import React from 'react';
import { Star, Award, Globe, Users } from 'lucide-react';

interface BrandsPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const brands = [
  {
    id: 1,
    name: 'Kérastase',
    logo: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=100',
    description: 'Французский премиальный бренд профессиональной косметики для волос',
    specialties: ['Питание волос', 'Восстановление', 'Защита от повреждений'],
    founded: '1964',
    country: 'Франция',
    rating: 4.9
  },
  {
    id: 2,
    name: 'L\'Oréal Professionnel',
    logo: 'https://images.pexels.com/photos/3738369/pexels-photo-3738369.jpeg?auto=compress&cs=tinysrgb&w=100',
    description: 'Мировой лидер в области профессиональной косметики и окрашивания',
    specialties: ['Окрашивание', 'Стайлинг', 'Уход за волосами'],
    founded: '1909',
    country: 'Франция',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Schwarzkopf Professional',
    logo: 'https://images.pexels.com/photos/3993173/pexels-photo-3993173.jpeg?auto=compress&cs=tinysrgb&w=100',
    description: 'Немецкое качество и инновации в профессиональной косметике',
    specialties: ['Стайлинг', 'Окрашивание', 'Текстурирование'],
    founded: '1898',
    country: 'Германия',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Wella Professionals',
    logo: 'https://images.pexels.com/photos/7797395/pexels-photo-7797395.jpeg?auto=compress&cs=tinysrgb&w=100',
    description: 'Инновационные решения для профессионального окрашивания и ухода',
    specialties: ['Окрашивание', 'Блондирование', 'Уход'],
    founded: '1880',
    country: 'Германия',
    rating: 4.8
  },
  {
    id: 5,
    name: 'Olaplex',
    logo: 'https://images.pexels.com/photos/7797389/pexels-photo-7797389.jpeg?auto=compress&cs=tinysrgb&w=100',
    description: 'Революционная технология восстановления поврежденных волос',
    specialties: ['Восстановление', 'Защита при окрашивании', 'Укрепление'],
    founded: '2014',
    country: 'США',
    rating: 4.9
  },
  {
    id: 6,
    name: 'Wahl',
    logo: 'https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg?auto=compress&cs=tinysrgb&w=100',
    description: 'Профессиональные инструменты для стрижки и бритья',
    specialties: ['Машинки для стрижки', 'Триммеры', 'Аксессуары'],
    founded: '1919',
    country: 'США',
    rating: 4.6
  }
];

export default function BrandsPage({ isOpen, onClose }: BrandsPageProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
            >
              ✕
            </button>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Наши бренды</h1>
              <p className="text-xl text-purple-100">
                Мы работаем только с проверенными мировыми брендами профессиональной косметики
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 p-8 border-b">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Брендов в ассортименте</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Товаров в наличии</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Оригинальная продукция</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand) => (
                <div key={brand.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-16 h-16 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{brand.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-600">{brand.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{brand.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{brand.country}, с {brand.founded} года</span>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Специализация:</div>
                      <div className="flex flex-wrap gap-2">
                        {brand.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why These Brands */}
          <div className="bg-gray-50 p-8 rounded-b-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Почему мы выбираем эти бренды?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Проверенное качество</h3>
                <p className="text-gray-600 text-sm">
                  Все бренды имеют международные сертификаты качества и многолетнюю репутацию
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Доверие профессионалов</h3>
                <p className="text-gray-600 text-sm">
                  Эти бренды используют ведущие салоны красоты и парикмахерские по всему миру
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Инновации</h3>
                <p className="text-gray-600 text-sm">
                  Постоянные исследования и разработки новых формул и технологий
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}