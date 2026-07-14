import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../store';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const addToCart = useStore((state) => state.addToCart);
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = favorites.some((item) => item.id === product?.id);

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
        <Link to="/tienda" className="text-pink-600 font-bold hover:text-pink-700">
          ← Volver a la tienda
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    });
    alert(`✓ ${quantity} x ${product.name} agregado al carrito`);
    setQuantity(1);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 flex gap-2 text-sm">
          <Link to="/" className="text-pink-600 hover:text-pink-700">
            Inicio
          </Link>
          <span className="text-gray-600">/</span>
          <Link to="/tienda" className="text-pink-600 hover:text-pink-700">
            Tienda
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Title and Rating */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">★ {product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reseñas)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <p className="text-3xl font-bold text-pink-600">${product.price}</p>
              <p className="text-gray-600 text-sm mt-2">Envío gratis a nivel nacional</p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 text-lg">{product.description}</p>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Colores:</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition capitalize ${
                      selectedColor === color
                        ? 'border-pink-600 bg-pink-50'
                        : 'border-gray-300 hover:border-pink-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Tallas:</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 rounded-lg border-2 transition ${
                      selectedSize === size
                        ? 'border-pink-600 bg-pink-50'
                        : 'border-gray-300 hover:border-pink-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Cantidad:</h3>
              <div className="flex items-center gap-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-bold transition"
                >
                  −
                </button>
                <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-bold transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-pink-700 transition"
              >
                🛒 AGREGAR AL CARRITO
              </button>
              <button
                onClick={() => toggleFavorite(product)}
                className="px-6 py-4 border-2 border-pink-600 text-pink-600 font-bold rounded-lg hover:bg-pink-50 transition text-2xl"
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-3 text-sm text-gray-600 bg-pink-50 p-4 rounded-lg">
              <p>✓ Entrega en 2-5 días hábiles</p>
              <p>✓ Garantía de satisfacción 100%</p>
              <p>✓ Devolución gratis en 30 días</p>
              <p>✓ Pago seguro</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
