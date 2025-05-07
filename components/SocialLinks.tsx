import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialLinkData";

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Button
              variant="outline"
              size="icon"
              aria-label={link.name}
              className="w-full p-4 duration-200 hover:bg-gray-100 shadow-md"
            >
              {link.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
