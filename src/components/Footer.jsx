import { useNavigate } from 'react-router-dom';

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
      navigate('/');
      window.setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100);
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
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Categorías</h4>
          <ul className="text-sm space-y-2">
            <li><button type="button" onClick={() => handleCategoryClick('brassieres')} className="hover:text-pink-500 transition">Brassieres</button></li>
            <li><button type="button" onClick={() => handleCategoryClick('panties')} className="hover:text-pink-500 transition">Panties</button></li>
            <li><button type="button" onClick={() => handleCategoryClick('conjuntos')} className="hover:text-pink-500 transition">Conjuntos</button></li>
            <li><button type="button" onClick={() => handleCategoryClick('pijamas')} className="hover:text-pink-500 transition">Pijamas</button></li>
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
              <li>Atención personalizada</li>
              <li>Pedidos por WhatsApp</li>
              <li>Envíos coordinados</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
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
            
            <p className="text-xs text-gray-400">Atendemos consultas y pedidos directamente.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Dimple. Todos los derechos reservados.</p>
            <p className="mt-4 text-xs text-gray-400 md:mt-0">Pucallpa, Ucayali</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
