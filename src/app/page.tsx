"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Smart Waste Management System
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Revolutionizing waste management with AI-powered solutions.
        </p>
        <div className="space-x-4">
          <Link href="/app">
            <Button variant="primary" size="lg">
              Analyze Waste <Icons.arrowRight className="ml-2" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4 md:px-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <Icons.shield className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            AI-Powered Classification
          </h3>
          <p className="text-muted-foreground text-center">
            Accurate waste classification for efficient sorting and recycling.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <Icons.messageSquare className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Real-time Monitoring
          </h3>
          <p className="text-muted-foreground text-center">
            Monitor waste levels and optimize collection routes.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <Icons.workflow className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Automated Reporting
          </h3>
          <p className="text-muted-foreground text-center">
            Generate detailed reports on waste management performance.
          </p>
        </div>
        
        {/* Feature 4 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <Icons.settings className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Customizable Solutions
          </h3>
          <p className="text-muted-foreground text-center">
            Tailor the system to meet your specific waste management needs.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <Icons.search className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Smart Analytics
          </h3>
          <p className="text-muted-foreground text-center">
            Gain insights into waste generation patterns and recycling efficiency.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <Icons.plusCircle className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Scalable Infrastructure
          </h3>
          <p className="text-muted-foreground text-center">
            Easily expand the system to accommodate growing waste management demands.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} WasteWise AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

