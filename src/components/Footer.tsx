import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              BeautyPro
            </h3>
            <p className="text-gray-300 mb-4">
              Ваш надежный поставщик профессиональной косметики и оборудования для парикмахерских в Бишкеке.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Шампуни и кондиционеры</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Краски для волос</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Инструменты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Оборудование</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Стайлинг</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+996 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>info@beautypro.kg</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>г. Бишкек, ул. Чуй 123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>Пн-Пт: 9:00-19:00<br />Сб: 10:00-17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BeautyPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}