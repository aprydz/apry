import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">
        // 404 Error
      </div>
      <h1 className="font-heading text-6xl sm:text-7xl font-bold tracking-tight text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-muted max-w-md text-sm sm:text-base font-body mb-8">
        The requested resource or page does not exist or has been moved to another coordinate.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
