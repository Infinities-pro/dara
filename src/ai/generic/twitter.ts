'use client';

import { createElement as h } from 'react';

import { z } from 'zod';

import { type AIFunction } from '@/types/ai';

// Define types for history items
type HistoryItem = [string, number];
type TwitterHistory = {
  username_history?: HistoryItem[];
  name_history?: HistoryItem[];
  bio_history?: HistoryItem[];
  location_history?: HistoryItem[];
  error?: string;
};

// Define the schema for parameters
const searchTwitterUsernameSchema = z.object({
  username: z.string().min(1),
});

// Infer the type from the schema
type SearchTwitterUsernameParams = z.infer<typeof searchTwitterUsernameSchema>;

// Export the tool directly instead of as a toolset
export const searchTwitterUsername: AIFunction = {
  name: 'searchTwitterUsername',
  description:
    'Search for Twitter username history and changes. Use this for any Twitter username related queries.',
  parameters: searchTwitterUsernameSchema,
  execute: async ({ username }: SearchTwitterUsernameParams) => {
    try {
      const response = await fetch(
        `/api/twitter/search-username?username=${encodeURIComponent(username)}`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        throw new Error(`Failed to fetch Twitter data (${response.status})`);
      }

      const text = await response.text();
      return text || 'No history found for this username.';
    } catch (error) {
      return error instanceof Error
        ? error.message
        : 'Failed to fetch Twitter data';
    }
  },
  render: (result: TwitterHistory) => {
    if (!result || typeof result !== 'object') return null;

    if ('error' in result) {
      return h('div', { className: 'text-destructive' }, String(result.error));
    }

    const {
      name_history = [],
      username_history = [],
      bio_history = [],
      location_history = [],
    } = result;

    return h('div', { className: 'space-y-4 text-sm' }, [
      // Username History
      username_history.length > 0 &&
        h('div', { key: 'username', className: 'space-y-1' }, [
          h('div', { className: 'font-medium' }, 'Username History:'),
          ...username_history.map(
            ([username, timestamp]: HistoryItem, i: number) =>
              h(
                'div',
                { key: `u-${i}` },
                `@${username} (${new Date(timestamp * 1000).toLocaleDateString()})`,
              ),
          ),
        ]),

      // Display Name History
      name_history.length > 0 &&
        h('div', { key: 'names', className: 'space-y-1' }, [
          h('div', { className: 'font-medium' }, 'Display Name History:'),
          ...name_history.map(([name, timestamp]: HistoryItem, i: number) =>
            h(
              'div',
              { key: `n-${i}` },
              `${name} (${new Date(timestamp * 1000).toLocaleDateString()})`,
            ),
          ),
        ]),

      // Bio History
      bio_history.length > 0 &&
        h('div', { key: 'bios', className: 'space-y-1' }, [
          h('div', { className: 'font-medium' }, 'Bio History:'),
          ...bio_history.map(([bio, timestamp]: HistoryItem, i: number) =>
            h(
              'div',
              { key: `b-${i}` },
              `${bio || '[empty]'} (${new Date(timestamp * 1000).toLocaleDateString()})`,
            ),
          ),
        ]),

      // Location History
      location_history.length > 0 &&
        h('div', { key: 'locations', className: 'space-y-1' }, [
          h('div', { className: 'font-medium' }, 'Location History:'),
          ...location_history.map(
            ([location, timestamp]: HistoryItem, i: number) =>
              h(
                'div',
                { key: `l-${i}` },
                `${location || '[empty]'} (${new Date(timestamp * 1000).toLocaleDateString()})`,
              ),
          ),
        ]),
    ]);
  },
};
