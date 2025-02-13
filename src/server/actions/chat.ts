'use server';

import { nanoid } from 'nanoid';

import { actionClient } from '@/lib/safe-action';

export const createChat = actionClient.action(async (): Promise<string> => {
  try {
    const chatId = nanoid();
    // Add any chat initialization logic here
    return chatId;
  } catch (error) {
    console.error('Failed to create chat:', error);
    throw error;
  }
});
