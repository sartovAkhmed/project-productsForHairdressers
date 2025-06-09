import React from 'react';
import { Heart, Users, Award, Target, Clock, Shield } from 'lucide-react';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
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
              <h1 className="text-4xl font-bold mb-4">О компании BeautyPro</h1>
              <p className="text-xl text-purple-100">
                Ваш надежный партнер в мире профессиональной красоты
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Main Story */}
            <div className="mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша история</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      BeautyPro была основана в 2019 году с простой, но амбициозной целью — 
                      предоставить парикмахерам и стилистам Бишкека доступ к лучшей 
                      профессиональной косметике и инструментам мирового уровня.
                    </p>
                    <p>
                      Мы начинали как небольшой магазин с ассортиментом из 50 товаров, 
                      а сегодня предлагаем более 500 наименований от 15+ ведущих мировых брендов. 
                      За эти годы мы обслужили более 1000 клиентов и стали частью истории 
                      успеха многих салонов красоты в Кыргызстане.
                    </p>
                    <p>
                      Наша команда состоит из профессионалов, которые понимают потребности 
                      индустрии красоты изнутри. Мы не просто продаем товары — мы помогаем 
                      создавать красоту и воплощать мечты наших клиентов.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Наша команда"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-20 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-purple-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Наша миссия</h3>
                </div>
                <p className="text-gray-600">
                  Обеспечить профессионалов индустрии красоты в Кыргызстане качественными 
                  инструментами и косметикой, которые помогают создавать шедевры и 
                  воплощать самые смелые идеи наших клиентов.
                </p>
              </div>
              <div className="bg-pink-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-pink-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Наши ценности</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Качество превыше всего</li>
                  <li>• Честность и прозрачность</li>
                  <li>• Поддержка профессионального роста</li>
                  <li>• Инновации и развитие</li>
                  <li>• Забота о клиентах</li>
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Наши достижения</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-600">Премиальных брендов</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Почему выбирают нас?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Shield className="w-12 h-12 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">100% оригинальная продукция</h4>
                  <p className="text-gray-600 text-sm">
                    Мы работаем напрямую с официальными дистрибьюторами и гарантируем 
                    подлинность всех товаров
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Users className="w-12 h-12 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Экспертные консультации</h4>
                  <p className="text-gray-600 text-sm">
                    Наша команда состоит из профессионалов с многолетним опытом в 
                    индустрии красоты
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Clock className="w-12 h-12 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Быстрая доставка</h4>
                  <p className="text-gray-600 text-sm">
                    Доставляем заказы по Бишкеку в день заказа, работаем без выходных
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Программа лояльности</h4>
                  <p className="text-gray-600 text-sm">
                    Специальные цены для постоянных клиентов и накопительная система скидок
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Heart className="w-12 h-12 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Обучение и поддержка</h4>
                  <p className="text-gray-600 text-sm">
                    Регулярно проводим мастер-классы и семинары для профессионального развития
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Shield className="w-12 h-12 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Гарантия качества</h4>
                  <p className="text-gray-600 text-sm">
                    Возврат и обмен товаров в течение 14 дней, полная гарантия на оборудование
                  </p>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Наша команда</h3>
              <p className="text-gray-600 mb-8">
                Профессионалы, которые живут красотой и помогают создавать её каждый день
              </p>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl">
                <p className="text-lg italic">
                  "Мы верим, что красота — это не просто внешность, это уверенность, 
                  самовыражение и искусство. Наша задача — предоставить инструменты 
                  для создания этого искусства."
                </p>
                <p className="mt-4 font-semibold">— Команда BeautyPro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}