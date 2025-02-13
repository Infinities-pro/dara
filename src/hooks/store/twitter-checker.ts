import { create } from 'zustand';

export interface TwitterMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  data?: any;
  isLoading?: boolean;
}

interface TwitterCheckerState {
  messages: TwitterMessage[];
  isLoading: boolean;
  addMessage: (message: Omit<TwitterMessage, 'id' | 'timestamp'>) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}

export const useTwitterCheckerStore = create<TwitterCheckerState>((set) => ({
  messages: [],
  isLoading: false,
  addMessage: (message) => 
    set((state) => ({
      messages: [...state.messages, {
        ...message,
        id: Math.random().toString(36).slice(2),
        timestamp: new Date(),
      }],
    })),
  setLoading: (loading) => set({ isLoading: loading }),
  clearMessages: () => set({ messages: [] }),
})); 