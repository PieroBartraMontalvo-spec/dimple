import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { Layers, Shirt, ShoppingBag, Sparkles, Truck, ShieldCheck, CreditCard, Star, ArrowRight } from 'lucide-react';

const iconMap = {
  'brassieres': <Layers size={36} />,
  'crop-top': <Shirt size={36} />,
  'vestidos': <ShoppingBag size={36} />,
  'accesorios': <Sparkles size={36} />
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#FFF5F3] py-16 md:py-24 border-b border-[#E29B9B]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A3B32] mb-4 tracking-wide">
              SIÉNTETE <span className="text-[#E29B9B]">DIMPLE</span>
            </h1>
            <p className="text-lg text-[#4A3B32]/80 mb-6">
              Ropa íntima y ropa para mujeres que aman sentirse hermosas todos los días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tienda"
                className="bg-[#E29B9B] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4A3B32] transition-colors duration-300 text-center shadow-sm"
              >
                🛍️ COMPRAR AHORA
              </Link>
              <Link
                to="/tienda"
                className="border-2 border-[#E29B9B] text-[#E29B9B] px-8 py-3 rounded-xl font-bold hover:bg-[#E29B9B] hover:text-white transition-all duration-300 text-center"
              >
                Explorar Colección
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1664158162601-79d988a17334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
              alt="Ropa Íntima Elegante Dimple"
              className="rounded-2xl border border-[#E29B9B]/20 object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4A3B32] tracking-wide">
            NUESTRAS CATEGORÍAS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/tienda?cat=${category.id}`}
                className="group flex flex-col items-center bg-[#FFF5F3] p-8 rounded-2xl border border-[#E29B9B]/10 transition-all duration-300 hover:scale-105 hover:border-[#E29B9B]/40 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#E29B9B]/10 flex items-center justify-center text-[#E29B9B] group-hover:bg-[#E29B9B] group-hover:text-white transition-all duration-300">
                  {iconMap[category.id] || <Sparkles size={36} />}
                </div>
                <span className="font-semibold text-[#4A3B32] mt-4 text-lg text-center transition-colors duration-300 group-hover:text-[#E29B9B]">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/tienda"
              className="group flex items-center gap-2 border border-[#E29B9B] text-[#E29B9B] px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#E29B9B] hover:text-white shadow-sm"
            >
              Ver todas las categorías
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#FFF5F3] border-t border-b border-[#E29B9B]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Truck size={36} />, title: 'Envío Rápido', desc: '+500 localidades' },
              { icon: <ShieldCheck size={36} />, title: '100% Seguro', desc: 'Compra con confianza' },
              { icon: <CreditCard size={36} />, title: 'Pago Flexible', desc: 'Múltiples opciones' },
              { icon: <Star size={36} />, title: '100% Satisfacción', desc: 'Garantizado' },
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-[#E29B9B]/10 flex items-center justify-center text-[#E29B9B] mb-4 transition-all duration-300 group-hover:bg-[#E29B9B] group-hover:text-white">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-[#4A3B32] mb-1 text-lg">{benefit.title}</h4>
                <p className="text-sm text-[#4A3B32]/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#4A3B32] tracking-wide">SOBRE DIMPLE</h2>
          <p className="text-[#4A3B32]/80 mb-4 text-lg leading-relaxed">
            En Dimple creemos que toda mujer merece sentirse hermosa, cómoda y confiada todos los días.
          </p>
          <p className="text-[#4A3B32]/80 mb-6 text-lg leading-relaxed">
            Nuestra colección de ropa íntima y ropa está diseñada pensando en ti, con materiales de la más alta calidad y diseños que combinan comodidad con estilo.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center py-8">
            <div>
              <p className="text-3xl font-bold text-[#E29B9B]">+500</p>
              <p className="text-[#4A3B32]/70 font-medium">Productos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#E29B9B]">+10K</p>
              <p className="text-[#4A3B32]/70 font-medium">Clientes Felices</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#E29B9B]">+2 Años</p>
              <p className="text-[#4A3B32]/70 font-medium">En el Mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A3B32] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">¿Listos para Sentirse Dimple?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
          Descubre nuestra colección exclusiva de ropa íntima y ropa para mujeres.
        </p>
        <Link
          to="/tienda"
          className="inline-block bg-[#E29B9B] text-white px-10 py-3 rounded-xl font-bold hover:bg-white hover:text-[#4A3B32] transition-all duration-300 shadow-sm"
        >
          Ir a la Tienda
        </Link>
      </section>
    </div>
  );
}