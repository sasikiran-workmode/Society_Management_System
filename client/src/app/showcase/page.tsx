"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ArrowRight,
  Zap,
  Database,
  Mail,
  Shield,
  CreditCard,
  Bell,
  Users,
  BarChart3,
  Lock,
  Smartphone,
  Monitor,
  Github,
  ChevronRight,
  Sparkles,
  Layers,
  Globe,
  Settings,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Palette,
  Server,
} from "lucide-react";

const productHighlights = [
  {
    title: "Manager Dashboard",
    description: "Complete admin control with user management, payment tracking, and asset monitoring.",
    role: "Manager",
    gradient: "from-primary to-slate-700",
    lightGradient: "from-slate-100 to-slate-50",
    icon: <Settings className="w-6 h-6" />,
    features: ["User Management", "Payment Overview", "Complaint Resolution", "Asset Tracking"],
  },
  {
    title: "Resident Portal",
    description: "Simple daily workflows for maintenance payments, complaints, and emergency alerts.",
    role: "Resident",
    gradient: "from-accent to-emerald-600",
    lightGradient: "from-emerald-100 to-emerald-50",
    icon: <Users className="w-6 h-6" />,
    features: ["Pay Maintenance", "File Complaints", "View History", "Emergency Button"],
  },
  {
    title: "Watchman Portal",
    description: "Mobile-first control for gate security, visitor logs, and quick emergency response.",
    role: "Watchman",
    gradient: "from-amber-500 to-orange-500",
    lightGradient: "from-amber-100 to-orange-50",
    icon: <Shield className="w-6 h-6" />,
    features: ["Gate Logs", "Visitor Tracking", "Emergency Alerts", "Mobile Optimized"],
  },
];

const techStack = [
  { name: "Next.js 14", icon: <Globe className="w-5 h-5" />, category: "Frontend", color: "text-slate-900" },
  { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" />, category: "Styling", color: "text-teal-600" },
  { name: "shadcn/ui", icon: <Layers className="w-5 h-5" />, category: "Components", color: "text-slate-700" },
  { name: "Express.js", icon: <Server className="w-5 h-5" />, category: "Backend", color: "text-slate-800" },
  { name: "MongoDB", icon: <Database className="w-5 h-5" />, category: "Database", color: "text-green-600" },
  { name: "Razorpay", icon: <CreditCard className="w-5 h-5" />, category: "Payments", color: "text-blue-600" },
  { name: "Brevo", icon: <Mail className="w-5 h-5" />, category: "Email", color: "text-indigo-600" },
  { name: "ImageKit", icon: <Sparkles className="w-5 h-5" />, category: "CDN", color: "text-pink-600" },
];

const features = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Razorpay Payments",
    description: "Integrated UPI & card payments with auto-generated invoices and late fee controls.",
    gradient: "from-primary to-slate-700",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Lift Emergency Alerts",
    description: "One-click emergency flow with immediate notifications to residents and admins.",
    gradient: "from-rose-500 to-red-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Role-Based Access",
    description: "Distinct dashboards for Manager, Admin, Resident, and Watchman.",
    gradient: "from-accent to-emerald-600",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Asset Tracking",
    description: "Track lifts, water pumps, and generators with detailed service history.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Authentication",
    description: "JWT with httpOnly cookies and OTP-based password reset security.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Gate Log System",
    description: "Visitor management with entry and exit times, vehicles, and intent tracking.",
    gradient: "from-slate-600 to-slate-800",
  },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415514_1px,transparent_1px),linear-gradient(to_bottom,#33415514_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
}

export default function ShowcasePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-slate-800 to-slate-900">
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span className="text-sm text-white/90 font-medium">Premium Society Management Platform</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-premium">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">Sasikiran</h1>
              <p className="text-2xl text-slate-200 font-medium tracking-premium">Society Management System</p>
            </div>

            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A modern full-stack solution with <span className="text-white font-semibold">Razorpay payments</span>,
              <span className="text-white font-semibold"> emergency alerts</span>,
              <span className="text-white font-semibold"> role-based dashboards</span>, and
              <span className="text-white font-semibold"> automated invoicing</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-2">
              {[
                { value: "40+", label: "Flats" },
                { value: "4", label: "User Roles" },
                { value: "₹1000", label: "Monthly Fee" },
                { value: "100%", label: "Responsive" },
              ].map((stat, idx) => (
                <div key={idx} className="px-7 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button size="lg" className="h-12 px-8 text-base gap-2 bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link href="/login">
                  Try Live Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/40 text-white hover:bg-white/10 gap-2" asChild>
                <a href="https://github.com/sasikiran-workmode/Society-Management-System" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>

            <div className="pt-8 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm text-slate-300">Scroll to explore</span>
              <ChevronRight className="w-5 h-5 text-slate-300 rotate-90" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </header>

      <section className="py-24 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-700 border-0 px-4 py-2 text-sm font-semibold">Portal Highlights</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Designed for Every Role</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Focused interfaces with clear workflows and modern usability for society teams.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productHighlights.map((item, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}>{item.icon}</div>
                    <Badge className="bg-slate-100 text-slate-700 border-0">{item.role}</Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700 border-0 font-medium">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          <div className="text-center space-y-4">
            <Badge className="bg-slate-100 text-slate-700 border-0 px-4 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Everything You Need</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive features for premium day-to-day housing society management.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-slate-200 bg-slate-50 hover:bg-white rounded-xl hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-5 shadow-md`}>{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-700 border-0 px-4 py-2 text-sm font-semibold">
              <Code2 className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Built With Modern Tech</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Production-ready architecture aligned with scalable engineering practices.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="group border-slate-200 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-3">
                  <div className={`inline-flex p-3 rounded-lg bg-slate-100 ${tech.color} group-hover:scale-110 transition-transform duration-200`}>{tech.icon}</div>
                  <h3 className="font-semibold text-slate-900">{tech.name}</h3>
                  <p className="text-sm text-slate-500">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-slate-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          <div className="text-center space-y-4">
            <Badge className="bg-white/10 text-white border-0 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <Settings className="w-4 h-4 mr-2" />
              Architecture
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Production-Ready Design</h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">Clean and maintainable implementation with practical reliability patterns.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Monitor className="w-8 h-8" />, title: "Responsive Design", desc: "Mobile-first experience with Tailwind", color: "text-cyan-300" },
              { icon: <Zap className="w-8 h-8" />, title: "Cron Jobs", desc: "Automated invoicing and late fee flow", color: "text-amber-300" },
              { icon: <Shield className="w-8 h-8" />, title: "Secure APIs", desc: "JWT auth with role-based controls", color: "text-emerald-300" },
              { icon: <Smartphone className="w-8 h-8" />, title: "Watchman Portal", desc: "Focused mobile operations interface", color: "text-violet-300" },
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
                <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-700 border-0 px-4 py-2 text-sm font-semibold">
              <Users className="w-4 h-4 mr-2" />
              Access Control
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Multi-Role System</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "Manager", gradient: "from-primary to-slate-700", desc: "Super admin control", features: ["Assign roles", "View all data", "Manage assets"] },
              { role: "Admin", gradient: "from-blue-600 to-indigo-700", desc: "Operations manager", features: ["Handle complaints", "Resolve emergencies", "View payments"] },
              { role: "Resident", gradient: "from-accent to-emerald-600", desc: "Society member", features: ["Pay maintenance", "File complaints", "Trigger emergency"] },
              { role: "Watchman", gradient: "from-amber-500 to-orange-600", desc: "Gate security", features: ["Log visitors", "Mark exits", "Emergency alerts"] },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 shadow-sm rounded-xl bg-slate-50 hover:shadow-lg transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.role}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-8">
          <div className="inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-md">
            <Zap className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Ready to Explore?</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">Try the live demo or review the source code in this repository.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base bg-white text-slate-900 hover:bg-slate-100 gap-2" asChild>
              <Link href="/login">
                Try Live Demo
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/40 text-white hover:bg-white/10 gap-2" asChild>
              <a href="https://github.com/sasikiran-workmode/Society-Management-System" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View Source
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg tracking-tight">Sasikiran</p>
                <p className="text-sm text-slate-500">Society Management System</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/sasikiran-workmode/Society-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Society Management System. All rights reserved.</p>
            <p className="text-emerald-400 font-semibold">Built by Sasikiran</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
