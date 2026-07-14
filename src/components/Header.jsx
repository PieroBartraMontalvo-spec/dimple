import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import logo from '../assets/dimple-logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cart = useStore((state) => state.cart);
  const cartTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Dimple"
    className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
  />
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium transition">
            Inicio
          </Link>
          <Link to="/tienda" className="text-gray-700 hover:text-pink-600 font-medium transition">
            Tienda
          </Link>
          <a href="#categorias" className="text-gray-700 hover:text-pink-600 font-medium transition">
            Categorías
          </a>
          <a href="#footer" className="text-gray-700 hover:text-pink-600 font-medium transition">
            Contacto
          </a>
        </div>

        {/* Cart Icon and Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/carrito"
            className="relative flex items-center gap-2 bg-pink-100 px-3 py-2 rounded-full text-pink-600 font-semibold hover:bg-pink-200 transition"
            aria-label="Carrito"
          >
            <span className="text-lg">🛒</span>
            <span className="hidden sm:inline">Carrito</span>
            {cartTotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartTotal}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pink-50 border-t border-pink-200 p-4 space-y-3">
          <Link
            to="/"
            className="block text-gray-700 hover:text-pink-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/tienda"
            className="block text-gray-700 hover:text-pink-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tienda
          </Link>
          <a href="#categorias" className="block text-gray-700 hover:text-pink-600 font-medium">
            Categorías
          </a>
          <a href="#footer" className="block text-gray-700 hover:text-pink-600 font-medium">
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
