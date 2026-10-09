import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

const maximumPrice = Math.ceil(Math.max(...products.map((product) => product.price)) / 10) * 10;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceLimit, setPriceLimit] = useState(maximumPrice);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setSelectedCategory(searchParams.get('cat') || '');
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = !normalizedSearch
        || product.name.toLowerCase().includes(normalizedSearch)
        || product.description.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch && product.price <= priceLimit;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.id - a.id;
      return 0;
    });
  }, [selectedCategory, searchTerm, priceLimit, sortBy]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId) setSearchParams({ cat: categoryId });
    else setSearchParams({});
  };

  return (
    <div className="bg-[#FFF9F8] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E29B9B]">Colección Dimple</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#4A3B32]">Encuentra tu estilo</h1>
          <p className="mt-2 text-[#4A3B32]/70">Prendas pensadas para sentirte cómoda, segura y hermosa.</p>
        </div>

        <label className="block mb-8">
          <span className="sr-only">Buscar productos</span>
          <input
            type="search"
            placeholder="Buscar por nombre o descripción…"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-2xl border border-[#E29B9B]/30 bg-white px-5 py-4 shadow-sm outline-none transition focus:border-[#E29B9B] focus:ring-4 focus:ring-[#E29B9B]/10"
          />
        </label>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="space-y-5 lg:col-span-1">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E29B9B]/10">
              <h2 className="mb-4 font-bold text-[#4A3B32]">Categorías</h2>
              <div className="space-y-2">
                <button type="button" onClick={() => handleCategoryChange('')} className={`w-full rounded-xl px-4 py-2.5 text-left transition ${!selectedCategory ? 'bg-[#E29B9B] text-white' : 'hover:bg-[#FFF5F3]'}`}>Todas</button>
                {categories.map((category) => (
                  <button type="button" key={category.id} onClick={() => handleCategoryChange(category.id)} className={`w-full rounded-xl px-4 py-2.5 text-left transition ${selectedCategory === category.id ? 'bg-[#E29B9B] text-white' : 'hover:bg-[#FFF5F3]'}`}>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E29B9B]/10">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[#4A3B32]">Precio máximo</h2>
                <span className="font-bold text-[#E29B9B]">S/ {priceLimit}</span>
              </div>
              <input type="range" min="0" max={maximumPrice} step="5" value={priceLimit} onChange={(event) => setPriceLimit(Number(event.target.value))} className="mt-5 w-full accent-[#E29B9B]" />
            </div>

            <label className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E29B9B]/10">
              <span className="mb-3 block font-bold text-[#4A3B32]">Ordenar por</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="w-full rounded-xl border border-[#E29B9B]/30 px-3 py-2.5 outline-none focus:border-[#E29B9B]">
                <option value="featured">Destacados</option>
                <option value="newest">Más nuevos</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
                <option value="rating">Mejor calificados</option>
              </select>
            </label>
          </aside>

          <section className="lg:col-span-3" aria-live="polite">
            <p className="mb-5 font-medium text-[#4A3B32]/70">{filteredProducts.length} producto{filteredProducts.length === 1 ? '' : 's'}</p>
            {filteredProducts.length ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                <p className="text-xl font-bold text-[#4A3B32]">No encontramos productos</p>
                <p className="mt-2 text-gray-600">Prueba otra categoría, búsqueda o precio.</p>
                <button type="button" onClick={() => { setSearchTerm(''); setPriceLimit(maximumPrice); handleCategoryChange(''); }} className="mt-5 rounded-xl bg-[#E29B9B] px-5 py-2.5 font-semibold text-white">Limpiar filtros</button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
