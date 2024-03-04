import { create } from "zustand";

interface BearState {
  dataIndex: number;
  setDataIndex: (index: number) => void;
}

export const useDataStore = create<BearState>()((set) => ({
  dataIndex: 0,
  setDataIndex: (index) => set(() => ({ dataIndex: index })),
}));
