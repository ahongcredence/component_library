import React from 'react';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  version?: string;
}

const Footer: React.FC<FooterProps> = ({ version = "1.0.0" }) => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        {/* Header with FedMall and version */}
        <div className="mb-6">
          <h2 className="text-lg font-bold">fedmall | {version}</h2>
        </div>
        
        <Separator className="mb-6" />
        
        {/* 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Our Mission</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Leadership</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Federal Partners</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">News</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Submit a Ticket</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">System Status</a></li>
            </ul>
          </div>

          {/* Getting Started */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Getting Started</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Registration</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">User Guide</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Training</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Best Practices</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Vendor Onboarding</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Agency Resources</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Policies</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security Information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Related Sites</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        {/* Footer with center-aligned CUI */}
        <div className="text-center">
          <h3 className="text-lg font-bold">CUI</h3>
        </div>
        
        {/* Copyright and legal */}
        <div className="text-center mt-4 text-sm text-gray-600">
          © {new Date().getFullYear()} FedMall. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;