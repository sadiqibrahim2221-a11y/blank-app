'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sica-blue text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sica-cyan to-sica-emerald rounded-lg" />
              <span className="text-xl font-bold">SICA</span>
            </div>
            <p className="text-sica-cyan/80 text-sm">
              Where Minds Meet, Science Moves.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-sica-cyan/80">
              <li><Link href="/programs" className="hover:text-sica-cyan transition">Programs</Link></li>
              <li><Link href="/courses" className="hover:text-sica-cyan transition">Courses</Link></li>
              <li><Link href="/mentorship" className="hover:text-sica-cyan transition">Mentorship</Link></li>
              <li><Link href="/opportunities" className="hover:text-sica-cyan transition">Opportunities</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-sica-cyan/80">
              <li><Link href="/community" className="hover:text-sica-cyan transition">Forums</Link></li>
              <li><Link href="/showcase" className="hover:text-sica-cyan transition">Showcase</Link></li>
              <li><Link href="/success-stories" className="hover:text-sica-cyan transition">Success Stories</Link></li>
              <li><Link href="/network" className="hover:text-sica-cyan transition">Global Network</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-sica-cyan/80 hover:text-sica-cyan transition">
                <Mail size={20} />
              </a>
              <a href="#" className="text-sica-cyan/80 hover:text-sica-cyan transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-sica-cyan/80 hover:text-sica-cyan transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sica-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sica-cyan/60">
            <p>&copy; {currentYear} SICA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-sica-cyan transition">Privacy</Link>
              <Link href="/terms" className="hover:text-sica-cyan transition">Terms</Link>
              <Link href="/contact" className="hover:text-sica-cyan transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
