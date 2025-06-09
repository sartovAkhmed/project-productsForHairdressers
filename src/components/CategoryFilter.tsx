import React from 'react';
import { categories } from '../data/products';
import * as Icons from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Категории</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('')}
          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
            selectedCategory === ''
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span>Все товары</span>
        </button>
        {categories.map((category) => {
          const IconComponent = (Icons as any)[category.icon];
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {IconComponent && <IconComponent className="w-5 h-5" />}
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}