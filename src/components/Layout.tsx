
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, AlertCircle, Home, FlaskConical } from "lucide-react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <Home className="h-5 w-5" />
    },
    {
      path: "/predict",
      label: "Predict",
      icon: <Activity className="h-5 w-5" />
    },
    {
      path: "/model",
      label: "Model Info",
      icon: <FlaskConical className="h-5 w-5" />
    },
    {
      path: "/about",
      label: "About CKD",
      icon: <AlertCircle className="h-5 w-5" />
    }
  ];

  const getCurrentValue = () => {
    return navItems.find((item) => item.path === currentPath)?.path || "/";
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-medical-teal to-medical-dark-blue">
              <Activity className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
            <span className="font-semibold text-xl bg-gradient-to-r from-medical-teal to-medical-dark-blue bg-clip-text text-transparent">
              Kidney Guardian
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Tabs value={getCurrentValue()} className="w-full">
                <TabsList className="grid grid-cols-4 w-fit">
                  {navItems.map((item) => (
                    <TabsTrigger
                      asChild
                      key={item.path}
                      value={item.path}
                      className="data-[state=active]:bg-medical-light-blue data-[state=active]:text-medical-dark-blue"
                    >
                      <Link to={item.path} className="flex items-center gap-1.5">
                        {item.icon}
                        <span className="hidden sm:inline">{item.label}</span>
                      </Link>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-10">{children}</div>
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Kidney Guardian. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            This tool is for educational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
