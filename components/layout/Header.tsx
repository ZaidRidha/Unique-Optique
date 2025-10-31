"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Menu } from "lucide-react";
import { Navigation } from "./Navigation";
import { NAV_LINKS } from "@/lib/constants";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Change header background on scroll
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 175, 55, 0)", "rgba(212, 175, 55, 0.3)"]
  );

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBackground,
          borderBottomColor: headerBorder,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b-2 backdrop-blur-sm transition-all flex justify-center"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <span className="font-street text-2xl md:text-3xl text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors">
                  UNIQUE OPTIQUE
                </span>
              </motion.div>
            </Link>

            {/* Navigation Links - Centered absolutely */}
            <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 font-grotesk text-base font-medium text-[var(--color-offwhite)] hover:text-[var(--color-gold)] transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[var(--color-gold)] group-hover:w-full transition-all duration-300" />
                  </motion.button>
                </Link>
              ))}
            </nav>

            {/* Right Side - Cart & Menu */}
            <div className="flex items-center space-x-4 z-10">
              {/* Cart Button */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
                  aria-label="Shopping Cart"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {/* Cart badge - you can make this dynamic later */}
                  <span className="absolute -top-1 -right-1 bg-[var(--color-neon-pink)] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </motion.button>
              </Link>

              {/* Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Navigation Sidebar */}
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
