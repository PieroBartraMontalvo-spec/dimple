import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  // Función para redirigir a las categorías y aplicar el filtro
  const handleCategoryClick = (category) => {
    navigate(`/tienda?cat=${category}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para ir a "Sobre Nosotros" de forma suave si está en la Home
  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about'); // Asegúrate de que tu sección Sobre Nosotros en Home.jsx tenga id="about"
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/sobre-nosotros');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Dimple</h4>
            <p className="text-sm">Ropa interior y ropa para mujeres que se sienten hermosas y cómodas.</p>
          </div>

          {/* Links de Categorías */}
      <div>
          <h4 className="text-white font-bold text-lg mb-4">Categorías</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>Brassieres</li>
            <li>Pants</li>
            <li>Conjuntos</li>
            <li>Accesorios</li>
          </ul>
        </div>
          {/* Información */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Información</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#about" onClick={handleAboutClick} className="hover:text-pink-500 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <Link to="/politicas-de-privacidad" className="hover:text-pink-500 transition block">
                  Políticas de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="hover:text-pink-500 transition block">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/envios-y-devoluciones" className="hover:text-pink-500 transition block">
                  Envíos y Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
            <p className="text-sm mb-2">📧 Email: info@dimple.com</p>
            <p className="text-sm mb-2">
              📱 WhatsApp:{' '}
              <a 
                href="https://wa.me/51956949147?text=Hola%20Dimple!%20Me%20gustaría%20hacer%20una%20consulta." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-500 transition font-medium"
              >
                +51 956 949 147
              </a>
            </p>
            <p className="text-sm mb-4">📍 Ciudad Pucallpa, Perú</p>
            
            {/* Redes Sociales Reales */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-lg transition">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-lg transition">
                📷
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-lg transition">
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Dimple. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <img
                src="https://w7.pngwing.com/pngs/20/987/png-transparent-logo-visa-credit-card-business-visa-text-trademark-payment.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
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
