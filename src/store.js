import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  favorites: [],

  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId),
  })),

  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    ).filter((item) => item.quantity > 0),
  })),

  toggleFavorite: (product) => set((state) => {
    const isFavorite = state.favorites.find((item) => item.id === product.id);
    if (isFavorite) {
      return {
        favorites: state.favorites.filter((item) => item.id !== product.id),
      };
    }
    return { favorites: [...state.favorites, product] };
  }),

  clearCart: () => set({ cart: [] }),
}));
