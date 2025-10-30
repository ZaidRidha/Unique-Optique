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
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink href="/collections">Collections</NavLink>
              <NavLink href="/celebrities">Celebrities</NavLink>
              <NavLink href="/lookbook">Lookbook</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/visit">Visit</NavLink>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* Phone */}
              <motion.a
                href={`tel:${BRAND_INFO.phone}`}
                className="hidden md:flex items-center gap-3 px-6 py-3 border-2 border-[var(--color-gold)]/30 rounded-lg text-[var(--color-gold)] hover:text-[var(--color-gold-light)] hover:border-[var(--color-gold)] transition-all group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--color-gold)]/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="text-base font-grotesk relative z-10">{BRAND_INFO.phone}</span>
              </motion.a>

              {/* Cart */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-4 border-2 border-[var(--color-electric-blue)]/30 rounded-lg text-foreground hover:text-[var(--color-electric-blue)] hover:border-[var(--color-electric-blue)] transition-all group"
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-electric-blue)]/5 rounded-lg"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <ShoppingCart className="w-6 h-6 relative z-10" />
                  <motion.span
                    className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--color-neon-pink)] text-black text-xs font-bold rounded-full flex items-center justify-center shadow-lg ring-2 ring-black"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    0
                  </motion.span>
                </motion.button>
              </Link>

              {/* Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-2 border-[var(--color-neon-pink)]/30 rounded-lg text-foreground hover:text-[var(--color-neon-pink)] hover:border-[var(--color-neon-pink)] transition-all lg:hidden group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--color-neon-pink)]/10"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                />
                <Menu className="w-6 h-6 relative z-10" />
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
      <motion.span
        className="text-foreground font-street text-lg uppercase tracking-wider group-hover:text-[var(--color-gold)] transition-colors relative inline-block px-4 py-2"
        whileHover={{ y: -3, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {children}
        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-neon-pink)] via-[var(--color-electric-blue)] to-[var(--color-gold)]"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 blur-lg bg-[var(--color-gold)]/30 -z-10 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  );
};
