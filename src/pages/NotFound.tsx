
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-medical-light-blue">
          <AlertTriangle className="h-10 w-10 text-medical-teal" />
        </div>
        <h1 className="mb-2 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-6 max-w-md text-muted-foreground">
          Sorry, we couldn't find the page you were looking for at{" "}
          <span className="font-mono font-medium">{location.pathname}</span>.
        </p>
        <Button asChild className="bg-medical-teal hover:bg-medical-teal/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
