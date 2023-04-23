import { create } from "zustand";

interface RentHomeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRentHomeModal = create<RentHomeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentHomeModal;
