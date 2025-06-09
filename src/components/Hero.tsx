import React from 'react';
import { Sparkles, Truck, Shield, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Профессиональная
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                косметика
              </span>
              для парикмахеров
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Широкий ассортимент профессиональных товаров для парикмахерских и салонов красоты в Бишкеке. 
              Качественная косметика, инструменты и оборудование от ведущих брендов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Смотреть каталог
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Связаться с нами
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-3xl blur-3xl opacity-30"></div>
            <img
              src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Профессиональная косметика"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Качественные товары</h3>
            <p className="text-purple-100 text-sm">Только оригинальная продукция от проверенных брендов</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-purple-100 text-sm">Доставка по Бишкеку в течение дня</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Гарантия качества</h3>
            <p className="text-purple-100 text-sm">Гарантия на все товары и возврат в течение 14 дней</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-purple-100 text-sm">Консультации и помощь в выборе товаров</p>
          </div>
        </div>
      </div>
    </div>
  );
}