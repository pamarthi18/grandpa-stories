import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <a href="/" className="w-full">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/about" className="w-full">About</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <h1 className="font-heading font-bold text-xl text-primary">Grandpa Stories</h1>
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