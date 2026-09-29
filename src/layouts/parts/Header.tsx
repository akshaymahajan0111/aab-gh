import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/airo-assets/images/logo/horizontal"
            alt="Hello AI"
            className="block h-auto max-h-8 md:max-h-9 w-auto max-w-full object-contain"
          />
        </Link>

        {/* Nav */}
        <nav aria-label="Main navigation">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Link to="/sign-in">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
