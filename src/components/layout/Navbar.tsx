'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-sica-light shadow-sica-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sica-blue to-sica-cyan rounded-lg" />
            <span className="text-xl font-bold text-sica-blue hidden sm:inline">SICA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/programs" className="text-sica-gray hover:text-sica-blue transition">
              Programs
            </Link>
            <Link href="/community" className="text-sica-gray hover:text-sica-blue transition">
              Community
            </Link>
            <Link href="/opportunities" className="text-sica-gray hover:text-sica-blue transition">
              Opportunities
            </Link>
            <Link href="/mentorship" className="text-sica-gray hover:text-sica-blue transition">
              Mentorship
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="md">
                Sign In
              </Button>
            </Link>
            <Link href="/apply">
              <Button variant="primary" size="md">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/programs" className="block py-2 text-sica-gray hover:text-sica-blue">
              Programs
            </Link>
            <Link href="/community" className="block py-2 text-sica-gray hover:text-sica-blue">
              Community
            </Link>
            <Link href="/opportunities" className="block py-2 text-sica-gray hover:text-sica-blue">
              Opportunities
            </Link>
            <Link href="/mentorship" className="block py-2 text-sica-gray hover:text-sica-blue">
              Mentorship
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/login">
                <Button variant="ghost" size="md" fullWidth>
                  Sign In
                </Button>
              </Link>
              <Link href="/apply">
                <Button variant="primary" size="md" fullWidth>
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
