import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-6xl font-display bifrost-text">404</p>
      <h1 className="mt-4 font-display text-2xl text-gold-highlight">
        Lost Beyond the Bifrost
      </h1>
      <p className="mt-2 text-text-muted max-w-md">
        This realm does not exist. Return to the golden halls of Asgard University.
      </p>
      <div className="mt-8">
        <Button href="/">Return Home</Button>
      </div>
      <Link href="/news" className="mt-4 text-sm text-aurora-teal hover:text-gold-highlight">
        Browse News
      </Link>
    </div>
  );
}
