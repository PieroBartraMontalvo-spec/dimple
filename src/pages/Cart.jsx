import { Link } from 'react-router-dom';
import { useStore } from '../store';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const clearCart = useStore((state) => state.clearCart);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    const lines = cart.map((item) => {
      const variants = [item.selectedColor && `Color: ${item.selectedColor}`, item.selectedSize && `Talla: ${item.selectedSize}`]
        .filter(Boolean)
        .join(', ');
      return `• ${item.quantity} x ${item.name}${variants ? ` (${variants})` : ''} — S/ ${(item.price * item.quantity).toFixed(2)}`;
    });
    const message = [
      'Hola Dimple, quiero realizar este pedido:',
      '',
      ...lines,
      '',
      `Total de productos: S/ ${subtotal.toFixed(2)}`,
      'Por favor, confírmame disponibilidad, forma de pago y costo de envío.',
    ].join('\n');
    window.open(`https://wa.me/51956949147?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  if (cart.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-5xl mb-6">🛒</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">¡Empieza a agregar tus productos favoritos!</p>
          <Link
            to="/tienda"
            className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-pink-700 transition"
          >
            Ir a Comprar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">MI CARRITO</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.cartId} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <Link
                    to={`/producto/${item.id}`}
                    className="font-bold text-lg text-gray-900 hover:text-pink-600 transition"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  {item.selectedColor && (
                    <p className="text-xs text-gray-600 mt-1">
                      Color: <span className="capitalize font-semibold">{item.selectedColor}</span>
                    </p>
                  )}
                  {item.selectedSize && (
                    <p className="text-xs text-gray-600">
                      Talla: <span className="font-semibold">{item.selectedSize}</span>
                    </p>
                  )}
                  <p className="text-pink-600 font-bold mt-2">S/ {item.price.toFixed(2)}</p>
                </div>

                {/* Quantity and Remove */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-red-600 hover:text-red-700 font-semibold text-sm transition"
                  >
                    ✕ Eliminar
                  </button>
                  <p className="font-bold text-gray-900">
                    S/ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">RESUMEN DEL PEDIDO</h2>

              <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold">S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Envío:</span>
                  <span className="font-semibold text-pink-600">A coordinar</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg">
                <span className="font-bold text-gray-900">TOTAL:</span>
                <span className="font-bold text-pink-600 text-xl">S/ {subtotal.toFixed(2)}</span>
              </div>

              <button onClick={handleWhatsAppOrder} className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold hover:bg-[#1fb85a] transition mb-3">
                PEDIR POR WHATSAPP
              </button>

              <button
                onClick={() => clearCart()}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:border-red-600 hover:text-red-600 transition mb-4"
              >
                LIMPIAR CARRITO
              </button>

              <Link
                to="/tienda"
                className="block text-center text-pink-600 hover:text-pink-700 font-semibold transition"
              >
                ← Continuar Comprando
              </Link>

              {/* Payment Methods */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-semibold">MÉTODOS DE PAGO</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📱 Yape o Plin</p>
                  <p>💰 Transferencia Bancaria</p>
                  <p>💵 Pago en efectivo coordinado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
