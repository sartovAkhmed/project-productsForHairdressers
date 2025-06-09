import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSuccess from './components/OrderSuccess';
import BrandsPage from './components/BrandsPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import Footer from './components/Footer';
import { products, categories } from './data/products';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CartItem, Product } from './types';

function App() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSubmit = (orderFormData: any) => {
    // Сохраняем данные заказа
    setOrderData(orderFormData);
    
    // Очищаем корзину
    setCartItems([]);
    
    // Закрываем форму оформления и показываем успешное сообщение
    setIsCheckoutOpen(false);
    setIsOrderSuccessOpen(true);
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Заказ оформлен:', orderFormData);
  };

  const handleOrderSuccessClose = () => {
    setIsOrderSuccessOpen(false);
    setOrderData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        onBrandsClick={() => setIsBrandsOpen(true)}
        onAboutClick={() => setIsAboutOpen(true)}
        onContactsClick={() => setIsContactsOpen(true)}
      />
      
      <Hero />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedCategory ? 
                  `Товары в категории: ${categories.find(c => c.id === selectedCategory)?.name}` : 
                  'Все товары'
                }
              </h2>
              <p className="text-gray-600">
                Найдено {filteredProducts.length} товаров
              </p>
            </div>

            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        total={cartTotal}
        onOrderSubmit={handleOrderSubmit}
      />

      <OrderSuccess
        isOpen={isOrderSuccessOpen}
        onClose={handleOrderSuccessClose}
        orderData={orderData}
      />

      <BrandsPage
        isOpen={isBrandsOpen}
        onClose={() => setIsBrandsOpen(false)}
      />

      <AboutPage
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <ContactsPage
        isOpen={isContactsOpen}
        onClose={() => setIsContactsOpen(false)}
      />
    </div>
  );
}

export default App;