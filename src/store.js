import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getCartId = (product) => [
  product.id,
  product.selectedColor || product.colors?.[0] || '',
  product.selectedSize || product.sizes?.[0] || '',
].join('-');

export const useStore = create(
  persist(
    (set) => ({
      cart: [],
      favorites: [],

      addToCart: (product) => set((state) => {
        const cartId = getCartId(product);
        const incomingQuantity = Math.max(1, Number(product.quantity) || 1);
        const existingItem = state.cart.find((item) => item.cartId === cartId);

        if (existingItem) {
          return {
            cart: state.cart.map((item) => item.cartId === cartId
              ? { ...item, quantity: item.quantity + incomingQuantity }
              : item),
          };
        }

        return {
          cart: [...state.cart, { ...product, cartId, quantity: incomingQuantity }],
        };
      }),

      removeFromCart: (cartId) => set((state) => ({
        cart: state.cart.filter((item) => item.cartId !== cartId),
      })),

      updateQuantity: (cartId, quantity) => set((state) => ({
        cart: state.cart
          .map((item) => item.cartId === cartId ? { ...item, quantity } : item)
          .filter((item) => item.quantity > 0),
      })),

      toggleFavorite: (product) => set((state) => {
        const isFavorite = state.favorites.some((item) => item.id === product.id);
        return {
          favorites: isFavorite
            ? state.favorites.filter((item) => item.id !== product.id)
            : [...state.favorites, product],
        };
      }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'dimple-shopping',
      partialize: (state) => ({ cart: state.cart, favorites: state.favorites }),
    },
  ),
);
