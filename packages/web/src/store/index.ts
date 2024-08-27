
import { create } from "zustand";

interface UserAuthState {
  user: any | null; // Replace `any` with a specific type for the user if available
  isAuthenticated: boolean;
  error: boolean;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
}

interface UserAuthActions {
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useUserAuthStore = create<UserAuthState & UserAuthActions>((set) => ({
  user: null,
  isAuthenticated: false,
  error: false,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  login: async () => {
    set({ isAuthenticated: true });
  },

  logout: async () => {
    set({ isAuthenticated: false });
  }
}));
