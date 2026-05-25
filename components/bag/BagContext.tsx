'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import type { Product } from '@/data/products';

// ── Types ──────────────────────────────────────────────────────

export interface BagItem extends Product {
  size: string;
  qty: number;
}

interface BagState {
  items: BagItem[];
  isOpen: boolean;
}

type BagAction =
  | { type: 'ADD_ITEM'; product: Product; size: string }
  | { type: 'REMOVE_ITEM'; productId: number; size: string }
  | { type: 'CHANGE_QTY'; productId: number; size: string; delta: number }
  | { type: 'OPEN_BAG' }
  | { type: 'CLOSE_BAG' }
  | { type: 'HYDRATE'; items: BagItem[] };

interface BagContextValue {
  items: BagItem[];
  isOpen: boolean;
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: number, size: string) => void;
  changeQty: (productId: number, size: string, delta: number) => void;
  openBag: () => void;
  closeBag: () => void;
  totalCount: number;
  totalPrice: string;
}

// ── Reducer ────────────────────────────────────────────────────

const STORAGE_KEY = 'kahfa-bag';

function bagReducer(state: BagState, action: BagAction): BagState {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, items: action.items };

    case 'ADD_ITEM': {
      const exists = state.items.find(
        (i) => i.id === action.product.id && i.size === action.size,
      );
      const items = exists
        ? state.items.map((i) =>
            i.id === action.product.id && i.size === action.size
              ? { ...i, qty: i.qty + 1 }
              : i,
          )
        : [...state.items, { ...action.product, size: action.size, qty: 1 }];
      return { items, isOpen: true };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.productId && i.size === action.size),
        ),
      };

    case 'CHANGE_QTY': {
      const updated = state.items
        .map((i) =>
          i.id === action.productId && i.size === action.size
            ? { ...i, qty: i.qty + action.delta }
            : i,
        )
        .filter((i) => i.qty > 0);
      return { ...state, items: updated };
    }

    case 'OPEN_BAG':
      return { ...state, isOpen: true };

    case 'CLOSE_BAG':
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

// ── Context ────────────────────────────────────────────────────

const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bagReducer, { items: [], isOpen: false });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const items: BagItem[] = JSON.parse(stored);
        dispatch({ type: 'HYDRATE', items });
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = useCallback((product: Product, size: string) => {
    dispatch({ type: 'ADD_ITEM', product, size });
  }, []);

  const removeItem = useCallback((productId: number, size: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId, size });
  }, []);

  const changeQty = useCallback((productId: number, size: string, delta: number) => {
    dispatch({ type: 'CHANGE_QTY', productId, size, delta });
  }, []);

  const openBag = useCallback(() => dispatch({ type: 'OPEN_BAG' }), []);
  const closeBag = useCallback(() => dispatch({ type: 'CLOSE_BAG' }), []);

  const totalCount = state.items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice =
    'Rp ' +
    state.items
      .reduce((sum, i) => sum + i.priceNum * i.qty, 0)
      .toLocaleString('id-ID');

  return (
    <BagContext.Provider
      value={{ items: state.items, isOpen: state.isOpen, addItem, removeItem, changeQty, openBag, closeBag, totalCount, totalPrice }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag(): BagContextValue {
  const ctx = useContext(BagContext);
  if (!ctx) throw new Error('useBag must be used within BagProvider');
  return ctx;
}
