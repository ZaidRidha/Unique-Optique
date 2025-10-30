"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND_INFO } from "@/lib/constants";
import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-[var(--color-gold)]/20"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <h1 className="font-display text-2xl md:text-3xl text-[var(--color-gold)] italic">
                  unique optique
                </h1>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-neon-pink)]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink href="/collections">Collections</NavLink>
              <NavLink href="/celebrities">Celebrities</NavLink>
              <NavLink href="/lookbook">Lookbook</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/visit">Visit</NavLink>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Phone */}
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="hidden md:flex items-center space-x-2 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-grotesk">{BRAND_INFO.phone}</span>
              </a>

              {/* Cart */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 text-foreground hover:text-[var(--color-gold)] transition-colors"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-neon-pink)] text-black text-xs font-bold rounded-full flex items-center justify-center">
                    0
                  </span>
                </motion.button>
              </Link>

              {/* Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-foreground hover:text-[var(--color-gold)] transition-colors lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Navigation Menu */}
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} className="relative group">
      <span className="text-foreground font-grotesk text-sm uppercase tracking-wider group-hover:text-[var(--color-gold)] transition-colors">
        {children}
      </span>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-neon-pink)]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};
