import { createContext, useContext, useState, type ReactNode } from 'react';
import type { GameContextType, Item } from '../types';
import itemsData from '../data/items.json';

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialItem = itemsData.find((i) => i.id === 'uv-light') as Item;

export function GameProvider({ children }: { children: ReactNode }) {
  const [inventory, setInventory] = useState<Item[]>([initialItem]);

  function addItem(item: Item) {
    if (inventory.some((i) => i.id === item.id)) return;
    setInventory((prev) => [...prev, item]);
  }

  return (
    <GameContext.Provider value={{ inventory, addItem }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextType {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
