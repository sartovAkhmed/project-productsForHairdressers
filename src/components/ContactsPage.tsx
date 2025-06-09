import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, MessageSquare } from 'lucide-react';

interface ContactsPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactsPage({ isOpen, onClose }: ContactsPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Сообщение отправлено:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
              <h1 className="text-4xl font-bold mb-4">Контакты</h1>
              <p className="text-xl text-purple-100">
                Мы всегда готовы помочь и ответить на ваши вопросы
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Contact Info */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Как с нами связаться</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Адрес магазина</h3>
                      <p className="text-gray-600">г. Бишкек, ул. Чуй 123</p>
                      <p className="text-gray-600">ТЦ "Красота", 2 этаж, бутик 45</p>
                      <p className="text-sm text-purple-600 mt-1">Рядом с остановкой "Центральная"</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Телефоны</h3>
                      <p className="text-gray-600">+996 700 123 456 (основной)</p>
                      <p className="text-gray-600">+996 555 987 654 (WhatsApp)</p>
                      <p className="text-sm text-purple-600 mt-1">Звонки принимаем с 9:00 до 19:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">info@beautypro.kg</p>
                      <p className="text-gray-600">orders@beautypro.kg</p>
                      <p className="text-sm text-purple-600 mt-1">Отвечаем в течение 2 часов</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Режим работы</h3>
                      <p className="text-gray-600">Понедельник - Пятница: 9:00 - 19:00</p>
                      <p className="text-gray-600">Суббота: 10:00 - 17:00</p>
                      <p className="text-gray-600">Воскресенье: выходной</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-800 mb-4">Мы в социальных сетях</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 transition-colors">
                      <span className="text-pink-600 font-bold">IG</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <span className="text-blue-600 font-bold">FB</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Напишите нам</h2>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Сообщение отправлено!</h3>
                    <p className="text-green-600">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ваше имя *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                          placeholder="Введите ваше имя"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Телефон *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                          placeholder="+996 700 123 456"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                        placeholder="example@mail.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тема обращения
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                      >
                        <option value="">Выберите тему</option>
                        <option value="order">Вопрос по заказу</option>
                        <option value="product">Консультация по товару</option>
                        <option value="delivery">Доставка</option>
                        <option value="partnership">Сотрудничество</option>
                        <option value="complaint">Жалоба</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none"
                        placeholder="Опишите ваш вопрос или предложение..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Отправить сообщение</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Как нас найти</h3>
                <p className="text-gray-600 mb-4">
                  Мы находимся в самом центре Бишкека, в популярном торговом центре "Красота"
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Ориентиры:</strong><br />
                    • Напротив банка "Демир"<br />
                    • Рядом с кафе "Арзу"<br />
                    • 5 минут пешком от площади Ала-Тоо
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Есть ли доставка по регионам?</h4>
                    <p className="text-gray-600 text-sm">
                      Да, мы доставляем по всему Кыргызстану через службы доставки. 
                      Стоимость рассчитывается индивидуально.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Можно ли вернуть товар?</h4>
                    <p className="text-gray-600 text-sm">
                      Да, возврат возможен в течение 14 дней при сохранении товарного вида 
                      и упаковки.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Есть ли скидки для салонов?</h4>
                    <p className="text-gray-600 text-sm">
                      Да, у нас действует специальная программа для салонов красоты 
                      и парикмахерских с выгодными условиями.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}