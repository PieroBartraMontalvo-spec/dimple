import { Link } from 'react-router-dom';
import { useStore } from '../store';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const clearCart = useStore((state) => state.clearCart);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

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
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex gap-6">
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
                  <p className="text-pink-600 font-bold mt-2">${item.price}</p>
                </div>

                {/* Quantity and Remove */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 font-semibold text-sm transition"
                  >
                    ✕ Eliminar
                  </button>
                  <p className="font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
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
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Envío:</span>
                  <span className="font-semibold text-pink-600">
                    {shipping === 0 ? '¡GRATIS!' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Impuestos (10%):</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg">
                <span className="font-bold text-gray-900">TOTAL:</span>
                <span className="font-bold text-pink-600 text-xl">${total.toFixed(2)}</span>
              </div>

              {subtotal <= 50 && (
                <div className="bg-pink-50 border border-pink-200 p-3 rounded-lg mb-6 text-sm text-gray-700">
                  💡 ¡Compra ${(50 - subtotal).toFixed(2)} más para obtener envío gratis!
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-bold hover:from-pink-600 hover:to-pink-700 transition mb-3">
                PROCEDER AL PAGO
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
                  <p>💳 Tarjeta de Crédito/Débito</p>
                  <p>📱 Billetera Digital</p>
                  <p>💰 Transferencia Bancaria</p>
                  <p>🏦 Pago en Efectivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
