import React from 'react';
import { ShoppingCart, Search, Heart, User, Phone } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  onBrandsClick: () => void;
  onAboutClick: () => void;
  onContactsClick: () => void;
}

export default function Header({ 
  cartItemsCount, 
  onCartClick, 
  onSearchChange, 
  onBrandsClick, 
  onAboutClick, 
  onContactsClick 
}: HeaderProps) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+996 700 123 456</span>
            </div>
            <span>Доставка по Бишкеку</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-purple-600 transition-colors">
              <User className="w-4 h-4 inline mr-1" />
              Войти
            </button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BeautyPro
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Каталог</a>
              <button 
                onClick={onBrandsClick}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Бренды
              </button>
              <button 
                onClick={onAboutClick}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                О нас
              </button>
              <button 
                onClick={onContactsClick}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Favorites */}
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}