import { TwitterChecker } from '@/components/twitter-checker';

export function Sidebar() {
  return (
    <div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium">Twitter Checker</h2>
        <TwitterChecker />
      </div>
    </div>
  );
} 