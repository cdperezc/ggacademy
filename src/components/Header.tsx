import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, Menu, User } from "lucide-react";
import gpsgateLogo from "@/assets/gpsgate-logo.png";

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={gpsgateLogo} alt="GpsGate" className="w-8 h-8" />
            <span className="text-xl font-inter font-bold text-primary">GpsGate</span>
            <span className="text-sm text-muted-foreground hidden md:block">Learning Center</span>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground">Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Getting Started
                          </div>
                          <p className="text-sm leading-tight text-gps-off-white">
                            Essential basics for new GpsGate users
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Signal Processing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Advanced data handling and device mapping
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Administration</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            User management and team setup
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Video Tutorials
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Certification
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden md:block relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-4 h-4" />
            </Button>

            {/* Sign In */}
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}