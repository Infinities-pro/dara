import { Logo } from './logo';

export default function PageLoading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    </div>
  );
}
