"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      {/* Hero Section made with love by humble coders*/}
      <section className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Smart Waste Management System
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Revolutionizing waste management with AI-powered solutions.
        </p>
        <div className="space-x-4">
          <Link href="/waste-analysis">
            <Button className=" bg-green-500" size="lg">
              Analyze Waste <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <a href="https://en.wikipedia.org/wiki/Waste_management" target="blank">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Features Section made with love by Humble coders */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4 md:px-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <ArrowRight className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            AI-Powered classNameification
          </h3>
          <p className="text-muted-foreground text-center">
            Accurate waste classNameification for efficient sorting and recycling.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <ArrowRight className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Real-time Monitoring
          </h3>
          <p className="text-muted-foreground text-center">
            Monitor waste levels and optimize collection routes.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <ArrowRight className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Automated Reporting
          </h3>
          <p className="text-muted-foreground text-center">
            Generate detailed reports on waste management performance.
          </p>
        </div>
        
        {/* Feature 4 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <ArrowRight className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Customizable Solutions
          </h3>
          <p className="text-muted-foreground text-center">
            Tailor the system to meet your specific waste management needs.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <ArrowRight className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Smart Analytics
          </h3>
          <p className="text-muted-foreground text-center">
            Gain insights into waste generation patterns and recycling efficiency.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card">
          <ArrowRight className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Scalable Infrastructure
          </h3>
          <p className="text-muted-foreground text-center">
            Easily expand the system to accommodate growing waste management demands.
          </p>
        </div>
      </section>

      
    <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-primary-green text-center text-xl mb-12 max-w-3xl mx-auto">
                Our smart waste management system uses advanced technology to streamline the entire waste collection process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
                    <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
                    <p className="text-gray-600">IoT sensors installed in waste bins collect real-time data on fill levels and waste composition.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
                    <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
                    <p className="text-gray-600">Our AI algorithms process the data to optimize collection routes and improve waste sorting accuracy.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
                    <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-semibold mb-4">Smart Action</h3>
                    <p className="text-gray-600">Automated reports and alerts help waste management teams make informed decisions and improve efficiency.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Benefits Section --> */}
    <section id="benefits" className="py-16 ">
        <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-4">Benefits</h2>
            <p className="text-primary-green text-center text-xl mb-12 max-w-3xl mx-auto">
                Our system delivers measurable improvements to waste management operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6">
                    <h3 className="text-5xl font-bold text-primary-green mb-2">30%</h3>
                    <p className="text-gray-600">Reduction in collection costs</p>
                </div>
                
                <div className="text-center p-6">
                    <h3 className="text-5xl font-bold text-primary-green mb-2">45%</h3>
                    <p className="text-gray-600">Increase in recycling rates</p>
                </div>
                
                <div className="text-center p-6">
                    <h3 className="text-5xl font-bold text-primary-green mb-2">60%</h3>
                    <p className="text-gray-600">More efficient collection routes</p>
                </div>
                
                <div className="text-center p-6">
                    <h3 className="text-5xl font-bold text-primary-green mb-2">25%</h3>
                    <p className="text-gray-600">Reduction in carbon emissions</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Use Cases Section --> */}
    <section id="use-cases" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-4">Use Cases</h2>
            <p className="text-primary-green text-center text-xl mb-12 max-w-3xl mx-auto">
                Our smart waste management solutions benefit various stakeholders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <svg className="w-16 h-16 text-primary-green mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold mb-4 text-center">Municipalities</h3>
                    <p className="text-gray-600">Optimize waste collection logistics, reduce operational costs, and meet sustainability goals.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <svg className="w-16 h-16 text-primary-green mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold mb-4 text-center">Businesses</h3>
                    <p className="text-gray-600">Improve waste management efficiency, reduce costs, and enhance corporate sustainability initiatives.</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <svg className="w-16 h-16 text-primary-green mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,12c0,4.97-4.03,9-9,9s-9-4.03-9-9s4.03-9,9-9S21,7.03,21,12z M10,7v10h2V7H10z M5,1v4h2V1H5z M5,17v4h2v-4H5z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold mb-4 text-center">Waste Collectors</h3>
                    <p className="text-gray-600">Access real-time data to optimize collection routes, reduce fuel consumption, and improve service efficiency.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials Section --> */}
    <section id="contact" className="py-16 ">
        <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
            <p className="text-primary-green text-center text-xl mb-12 max-w-3xl mx-auto">
                Success stories from organizations implementing our smart waste management solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div className="ml-4">
                            <h3 className="font-semibold">Mr. Parth Gautam Sir</h3>
                            <p className="text-gray-600">Executive Director, Invertis University</p>
                        </div>
                    </div>
                    <p className="text-gray-700">"Since implementing the Smart Waste Management System, we've reduced collection costs by 35% and significantly improved our recycling rates. The AI-powered insights have been invaluable for our sustainability goals."</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div className="ml-4">
                            <h3 className="font-semibold">Mohd. Tallha Khan</h3>
                            <p className="text-gray-600">Director Industry Partnership, Invertis University</p>
                        </div>
                    </div>
                    <p className="text-gray-700">"The real-time monitoring capabilities have transformed our operations. We can now optimize collection routes dynamically, resulting in significant time and fuel savings while providing better service to our clients."</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Call to Action Section --> */}
    <section id="demo" className="py-16 bg-green-500 w-full text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Waste Management?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join the growing number of organizations using AI-powered solutions to optimize waste collection and improve recycling efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {/* <a href="#" className="bg-white text-primary-green font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition">Request Demo</a> */}
                <a href="#" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-primary-green transition">Contact Us</a>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Smart Waste</h3>
                    <p className="text-gray-400 mb-6">Revolutionizing waste management with AI-powered solutions.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 17v-6H9v-2h2V9.5C11 7.6 12.4 6 14.5 6c.9 0 1.7.1 1.9.2v2.2h-1.3c-1 0-1.2.5-1.2 1.2V11h2.4l-.3 2h-2.1v6h-2.9z"></path></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-semibold mb-6">Solutions</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white">AI classNameification</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Real-time Monitoring</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Automated Reporting</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Smart Analytics</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-semibold mb-6">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-semibold mb-6">Contact Us</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>123 Green Street, Eco City, 10001</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>info@smartwaste.com</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-wrap justify-between items-center">
                <p className="text-gray-400">© 2025 Smart Waste Management. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  );
}
