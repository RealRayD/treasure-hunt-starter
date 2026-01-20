import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, MapPin, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { openCart, totalItems } = useCart();

  const mainNavItems = [
    { name: "Sievietēm", slug: "women" },
    { name: "Vīriešiem", slug: "men" },
    { name: "Bērniem", slug: "kids" },
    { name: "Mājai", slug: "home" },
    { name: "Izpārdošana", slug: "clearance" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      {/* Top tier - Utility nav */}
      <div className="border-b bg-muted/50">
        <div className="container flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-6">
            <Link
              to="/store-finder"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Atrast veikalu</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/account"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Mans konts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Middle tier - Logo and Search */}
      <div className="container py-4">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-black tracking-tight">
              DRESS<span className="text-sale">COD</span>
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Meklēt zīmolus, produktus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-11 w-full bg-muted/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative ml-auto"
            onClick={openCart}
          >
            <ShoppingBag className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-sale text-sale-foreground text-xs font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Meklēt..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 w-full bg-muted/50 border-0"
            />
          </div>
        </div>
      </div>

      {/* Bottom tier - Main Navigation */}
      <nav className="hidden lg:block border-t">
        <div className="container">
          <ul className="flex items-center justify-center gap-0">
            {mainNavItems.map((item) => {
              const category = categories.find(
                (c) => c.slug === item.slug
              );
              return (
                <li
                  key={item.slug}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(item.slug)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    to={`/shop/${item.slug}`}
                    className={`flex items-center gap-1 px-6 py-4 font-semibold text-sm uppercase tracking-wide transition-colors hover:text-sale ${
                      item.slug === "clearance" ? "text-sale" : ""
                    }`}
                  >
                    {item.name}
                    {category?.subcategories && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeCategory === item.slug && category?.subcategories && (
                    <div className="absolute top-full left-0 bg-background border shadow-lg min-w-[200px] animate-slide-down">
                      <ul className="py-2">
                        {category.subcategories.map((sub) => (
                          <li key={sub}>
                            <Link
                              to={`/shop/${item.slug}/${sub.toLowerCase().replace(/ /g, "-")}`}
                              className="mega-menu-item block"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg animate-slide-down">
          <nav className="container py-4">
            <ul className="space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/shop/${item.slug}`}
                    className={`block py-3 px-4 font-semibold hover:bg-muted rounded-md ${
                      item.slug === "clearance" ? "text-sale" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;