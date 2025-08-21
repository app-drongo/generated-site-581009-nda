// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T08:05:59.913Z
// Section: footer
// Category: footer
// Template ID: footer-c001
// Page: layout
// Component: Footer

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  FileText,
  CreditCard,
  BarChart,
  PieChart,
  Shield
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Invoicing", href: "/features/invoicing" },
        { name: "Expense Tracking", href: "/features/expenses" },
        { name: "Financial Reports", href: "/features/reports" },
        { name: "Client Management", href: "/features/clients" },
        { name: "Tax Preparation", href: "/features/tax" },
        { name: "API Documentation", href: "/docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About FinanceFlow", href: "/about" },
        { name: "Finance Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Customer Stories", href: "/case-studies" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Accounting Guides", href: "/guides" },
        { name: "Webinars", href: "/webinars" },
        { name: "Tax Calendar", href: "/tax-calendar" },
        { name: "Financial Templates", href: "/templates" },
        { name: "System Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Processing", href: "/data-processing" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Security Practices", href: "/security" },
        { name: "Financial Compliance", href: "/compliance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/financeflow" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/financeflow" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/financeflow" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/financeflow" },
    { name: "GitHub", icon: Github, href: "https://github.com/financeflow" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">F</span>
                </div>
                <span className="font-bold text-xl">FinanceFlow</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Streamlining financial management for consulting firms and SMBs with intuitive 
                invoicing, accounting, and reporting tools. Save time, reduce errors, and gain 
                financial clarity.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-blue-500 flex-shrink-0" />
                <span className="text-muted-foreground">support@financeflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-blue-500 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (800) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-blue-500 flex-shrink-0" />
                <span className="text-muted-foreground">123 Financial District, Suite 500, New York</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get Financial Tips & Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <Button size="sm" className="px-3 bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Monthly financial insights and product updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 FinanceFlow. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Shield className="size-3 text-blue-500" /> SOC 2 & GDPR Compliant
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-blue-500/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
            <Link href="/support" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}