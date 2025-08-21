// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T08:06:01.713Z
// Section: page-header
// Category: page-header
// Template ID: page-header-c001
// Page: Help Center
// Component: PageHeaderHelpCenter

import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function PageHeaderWithDescription() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Help Center
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Find the
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Answers You Need
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Browse our knowledge base, tutorials, and FAQs to get the most out of FinanceFlow's invoicing and accounting solutions. Can't find what you're looking for? Our support team is here to help.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Search for tutorials, guides, FAQs..."
            />
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary/80">Getting Started</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary/80">Invoicing</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary/80">Reporting</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary/80">Client Management</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary/80">Integrations</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary/80">Account Settings</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}