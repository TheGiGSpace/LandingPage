import React from 'react'
import { Home, User, Briefcase, MessageSquare } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"

/**
 * NavBar Demo Component
 * Demonstrates the tubelight navbar with sample navigation items
 */
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'How It Works', url: '#how-it-works', icon: Briefcase },
    { name: 'About', url: '#', icon: User },
    { name: 'Contact', url: '#cta', icon: MessageSquare }
  ]

  return <NavBar items={navItems} />
}
