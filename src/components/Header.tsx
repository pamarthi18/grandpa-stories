import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="font-heading font-bold text-xl text-primary">Modern Blog</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-text hover:text-primary transition-colors">Home</a>
          <a href="/about" className="text-text hover:text-primary transition-colors">About</a>
          <Button>Subscribe</Button>
        </nav>
      </div>
    </header>
  );
};