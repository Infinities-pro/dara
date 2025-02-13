import { z } from 'zod';

export interface AIFunction {
  name: string;
  description: string;
  parameters: z.ZodType<any, any>;
  execute: (params: any) => Promise<any>;
  render?: (result: any) => React.ReactNode;
}

// Optional: Add more specific types if needed
export interface AIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AIContext {
  functions: AIFunction[];
  history: Array<{
    role: 'user' | 'assistant' | 'system' | 'function';
    content: string;
    name?: string;
  }>;
}
