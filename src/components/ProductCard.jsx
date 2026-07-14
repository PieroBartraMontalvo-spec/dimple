import { Link } from 'react-router-dom';
import { useStore } from '../store';

export default function ProductCard({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    alert(`✓ ${product.name} agregado al carrito`);
  };

  return (
    <Link to={`/producto/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden group">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 h-64 sm:h-72">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(product);
            }}
            className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition text-lg"
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
            ★ {product.rating}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 truncate hover:text-pink-600">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1 truncate">{product.description}</p>

          {/* Price */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-pink-600">${product.price}</span>
            <span className="text-xs text-gray-500">({product.reviews} reseñas)</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full mt-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </Link>
  );
}
