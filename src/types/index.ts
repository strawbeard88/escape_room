export interface Item {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Room {
  id: string;
  roomName: string;
  roomPath: string;
  unsolvedInstruction: string;
  solvedInstruction: string;
  unsolvedImage: string;
  solvedImage: string;
  hint: string;
  itemToSolve: string;
  itemToAdd: string | null;
}

export interface GameContextType {
  inventory: Item[];
  addItem: (item: Item) => void;
}
