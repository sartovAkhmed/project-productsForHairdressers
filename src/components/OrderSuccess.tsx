import React from 'react';
import { CheckCircle, Package, Phone, Mail } from 'lucide-react';

interface OrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: any;
}

export default function OrderSuccess({ isOpen, onClose, orderData }: OrderSuccessProps) {
  if (!isOpen || !orderData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Заказ оформлен!</h2>
          <p className="text-gray-600 mb-6">
            Ваш заказ #{orderData.orderId} успешно принят в обработку
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <div className="flex items-center mb-3">
              <Package className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-medium">Детали заказа:</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Получатель: {orderData.firstName} {orderData.lastName}</div>
              <div>Телефон: {orderData.phone}</div>
              <div>Email: {orderData.email}</div>
              <div>
                Получение: {orderData.deliveryMethod === 'delivery' ? 'Доставка' : 'Самовывоз'}
              </div>
              {orderData.deliveryMethod === 'delivery' && (
                <div>Адрес: {orderData.address}</div>
              )}
              <div>Оплата: {orderData.paymentMethod === 'cash' ? 'Наличными' : 'Картой'}</div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-6">
            <p className="mb-2">Мы свяжемся с вами в ближайшее время для подтверждения заказа.</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+996 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@beautypro.kg</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
}