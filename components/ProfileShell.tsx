import { ProfileFooter } from "@/components/ProfileFooter";
import { ProfileHeader } from "@/components/ProfileHeader";

export function ProfileShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f7f7f5] text-neutral-950"><a href="#main-content" className="sr-only z-[100] rounded bg-neutral-950 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to main content</a><ProfileHeader />{children}<ProfileFooter /></div>;
}

