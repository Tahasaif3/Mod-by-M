
import { create } from "zustand";
import { Product } from "./sanity.types";

import { persist } from "zustand/middleware";

interface WishlistState {
    items: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    clearWishlist: () => void;
    getGroupedItems: () => Product[];
    getItemCount: (productId: string) => number;
}

const userWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            addToWishlist: (product) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item._id === product._id
                    );
                    if (existingItem) {
                        // Update existing item if needed
                        return {
                            items: state.items.map((item) =>
                                item._id === product._id
                                    ? {
                                          ...item,
                                          updatedAt: new Date().toISOString(),
                                      }
                                    : item
                            ),
                        };
                    } else {
                        // Add a new product
                        return {
                            items: [...state.items, { ...product, addedAt: new Date().toISOString() }],
                        };
                    }
                }),
            removeFromWishlist: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) => item._id !== productId),
                })),
            clearWishlist: () => set({ items: [] }),
            getGroupedItems: () => get().items,
            getItemCount: (productId) => {
                const item = get().items.find((item) => item._id === productId);
                return item ? 1 : 0; // Wishlist usually doesn't track quantity; returns 1 if exists
            },
        }),
        { name: "wishlist-store" }
    )
);

export default userWishlistStore;
