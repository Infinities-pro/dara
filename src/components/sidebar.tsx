import { TwitterChecker } from '@/components/twitter-checker';
import { Logo } from '@/components/ui/logo';

export function Sidebar() {
  return (
    <div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium">Twitter Checker</h2>
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-bold">DARA</span>
        </div>
        <TwitterChecker />
      </div>
    </div>
  );
}
