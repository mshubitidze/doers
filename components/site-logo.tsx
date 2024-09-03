import { PersonStanding } from "lucide-react";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center text-lg font-bold">
      <PersonStanding className="h-8 w-8" />
      <span>Doer</span>
    </Link>
  );
}
