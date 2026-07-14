import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SIÉNTETE <span className="text-pink-600">DIMPLE</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Ropa íntima y ropa para mujeres que aman sentirse hermosas todos los días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tienda"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-pink-700 transition text-center"
              >
                🛍️ COMPRAR AHORA
              </Link>
              <Link
                to="/tienda"
                className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition text-center"
              >
                Explorar Colección
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop"
              alt="Modelo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            NUESTRAS CATEGORÍAS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/tienda?cat=${category.id}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col items-center justify-center p-6 group-hover:from-pink-200 group-hover:to-pink-300 transition">
                  <span className="text-5xl mb-3">{category.icon}</span>
                  <span className="font-bold text-gray-800 text-center">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/tienda"
            className="block text-center mt-8 text-pink-600 hover:text-pink-700 font-bold text-lg"
          >
            👉 VER TODAS LAS CATEGORÍAS
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '📦', title: 'Envío Rápido', desc: '+500 localidades' },
              { icon: '🔄', title: '100% Seguro', desc: 'Compra con confianza' },
              { icon: '💳', title: 'Pago Flexible', desc: 'Múltiples opciones' },
              { icon: '⭐', title: '100% Satisfacción', desc: 'Garantizado' },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl mb-2">{benefit.icon}</p>
                <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">SOBRE DIMPLE</h2>
          <p className="text-gray-700 mb-4 text-lg">
            En Dimple creemos que toda mujer merece sentirse hermosa, cómoda y confiada todos los días.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Nuestra colección de ropa íntima y ropa está diseñada pensando en ti, con materiales de la más alta calidad
            y diseños que combinan comodidad con estilo.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center py-8">
            <div>
              <p className="text-3xl font-bold text-pink-600">+500</p>
              <p className="text-gray-600">Productos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-600">+10K</p>
              <p className="text-gray-600">Clientes Felices</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-600">+2 Años</p>
              <p className="text-gray-600">En el Mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listos para Sentirse Dimple?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Descubre nuestra colección exclusiva de ropa íntima y ropa para mujeres.
        </p>
        <Link
          to="/tienda"
          className="inline-block bg-white text-pink-600 px-10 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Ir a la Tienda
        </Link>
      </section>
    </div>
  );
}
