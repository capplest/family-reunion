import { Outlet, Link, useLocation } from "react-router";
import { Trees, Calendar, Images, MapPin, Tent, Hotel } from "lucide-react";

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Trees },
    { path: "/schedule", label: "Schedule", icon: Calendar },
    { path: "/gallery", label: "Gallery", icon: Images },
    { path: "/map", label: "Map", icon: MapPin },
    { path: "/koa", label: "KOA", icon: Tent },
    { path: "/rooms", label: "Rooms", icon: Hotel },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2d5016] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Trees className="size-8" />
              <div>
                <h1 className="text-2xl tracking-tight">Crockett Reunion 2026</h1>
                <p className="text-sm opacity-90">Santa Cruz, California</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b sticky top-[88px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = 
                item.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm opacity-90">
              Crockett Reunion 2026 • Santa Cruz KOA • July 15-19
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}