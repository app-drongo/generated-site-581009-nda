// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T08:06:00.830Z
// Section: pricing
// Category: pricing
// Template ID: pricing-c001
// Page: Pricing
// Component: Pricing

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, FileText, Calculator, BarChart, Users, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Essentials",
      description: "Perfect for freelancers and small consulting firms",
      price: "$19",
      period: "/month",
      badge: null,
      features: [
        "Up to 50 invoices per month",
        "Basic expense tracking",
        "Client management",
        "5GB document storage",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing consulting businesses",
      price: "$49",
      period: "/month",
      badge: "Most Popular",
      features: [
        "Unlimited invoices",
        "Advanced expense tracking",
        "Client portal access",
        "100GB document storage",
        "Priority support",
        "Financial reporting",
        "Multi-currency support",
        "Team collaboration (up to 5 users)"
      ],
      cta: "Start 14-Day Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For established firms with complex needs",
      price: "$99",
      period: "/month",
      badge: "Advanced Features",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "24/7 priority support",
        "Custom integrations",
        "Advanced security features",
        "Dedicated account manager",
        "Custom financial reports",
        "Unlimited team members"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Calculator className="mr-2 size-3" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Streamlined Pricing for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Financial Management
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan for your consulting firm. Our transparent pricing ensures you only pay for what you need.
            All plans include our core invoicing and accounting features.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => {
                    // Choose appropriate icon based on feature text
                    let FeatureIcon = Check;
                    if (feature.includes("invoice")) FeatureIcon = FileText;
                    else if (feature.includes("expense")) FeatureIcon = Calculator;
                    else if (feature.includes("report")) FeatureIcon = BarChart;
                    else if (feature.includes("team")) FeatureIcon = Users;
                    else if (feature.includes("security")) FeatureIcon = Lock;
                    
                    return (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FeatureIcon className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === "Professional" && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Need a custom solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored financial management solutions for consulting firms with specific requirements.
            Let our experts design a package that perfectly fits your business needs.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}