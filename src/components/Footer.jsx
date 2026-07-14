export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Dimple</h4>
            <p className="text-sm">Ropa interior y ropa para mujeres que se sienten hermosas y cómodas.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Categorías</h4>
            <ul className="text-sm space-y-2">
              <li><a href="/tienda?cat=brassieres" className="hover:text-pink-500 transition">Brassieres</a></li>
              <li><a href="/tienda?cat=pants" className="hover:text-pink-500 transition">Pants</a></li>
              <li><a href="/tienda?cat=conjuntos" className="hover:text-pink-500 transition">Conjuntos</a></li>
              <li><a href="/tienda?cat=accesorios" className="hover:text-pink-500 transition">Accesorios</a></li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Información</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Envíos y Devoluciones</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
            <p className="text-sm mb-2">📧 Email: info@dimple.com</p>
            <p className="text-sm mb-2">📱 WhatsApp: +1 (555) 123-4567</p>
            <p className="text-sm mb-4">📍 Ciudad, País</p>
            <div className="flex gap-3">
              <a href="#" className="text-pink-500 hover:text-pink-400 text-lg">f</a>
              <a href="#" className="text-pink-500 hover:text-pink-400 text-lg">📷</a>
              <a href="#" className="text-pink-500 hover:text-pink-400 text-lg">𝕏</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Dimple. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Visa_logo.svg/1200px-Visa_logo.svg.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_logo.svg"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
