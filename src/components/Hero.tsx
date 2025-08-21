// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T08:06:00.038Z
// Section: hero
// Category: hero
// Template ID: hero-c001
// Page: Homepage
// Component: Hero

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Zap, FileText, CreditCard, BarChart, PieChart } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
              <Zap className="size-4 mr-2" />
              New: AI-Powered Financial Insights
              <ArrowRight className="ml-2 size-4" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Simplify Your
              <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Financial Management
              </span>
              For Business Growth
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              FinanceFlow helps consulting firms and SMBs streamline invoicing, expense tracking, 
              and financial reporting. Save 10+ hours weekly on accounting tasks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="group text-base px-8 bg-blue-600 hover:bg-blue-700">
                Start Free 14-Day Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group text-base px-8">
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                See How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  5,000+ businesses trust us
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2">4.9/5 on Capterra</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 w-full h-full p-6">
                    <div className="col-span-2 bg-background/80 rounded-lg p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <FileText className="size-5 text-blue-500" />
                          <span className="font-medium">Invoices</span>
                        </div>
                        <div className="text-sm text-blue-500 font-medium">View All</div>
                      </div>
                      <div className="space-y-3 flex-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                            <div className="text-sm">Invoice #{2024000 + i}</div>
                            <div className="text-sm font-medium">${(i * 1250).toLocaleString()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="bg-background/80 rounded-lg p-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <CreditCard className="size-4 text-blue-500" />
                          <span className="text-sm font-medium">Expenses</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <PieChart className="size-16 text-blue-500/70" />
                        </div>
                      </div>
                      <div className="bg-background/80 rounded-lg p-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart className="size-4 text-blue-500" />
                          <span className="text-sm font-medium">Revenue</span>
                        </div>
                        <div className="flex-1 flex items-end justify-between gap-1">
                          {[30, 45, 60, 75, 90].map((h, i) => (
                            <div key={i} className="w-full">
                              <div 
                                className="bg-blue-500/70 rounded-t" 
                                style={{height: `${h}%`}}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 size-6 bg-blue-400 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-blue-300 rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}