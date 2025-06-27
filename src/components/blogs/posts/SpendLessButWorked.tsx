import React from 'react';
import { Target, Lightbulb, BarChart3, CheckCircle, TrendingUp } from 'lucide-react';

export const spendLessButWorkedData = {
  title: "I Spend Less But It Worked: A Cost Optimization Success Story",
  subtitle: "How strategic budget reallocation transformed an underperforming campaign into a profit-generating machine",
  author: "Istiak Ahmed",
  date: "December 2024",
  readTime: "8 min read",
  tags: ["Cost Optimization", "PPC", "ROI", "Case Study"],
  heroImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  content: {
    challenge: {
      title: "The Challenge",
      description: "A mid-sized e-commerce company was struggling with their Google Ads campaigns. Despite spending $15,000 monthly, they were seeing diminishing returns with a ROAS of just 2.1x and rising cost-per-acquisition.",
      metrics: [
        { label: "Monthly Ad Spend", value: "$15,000", trend: "high" },
        { label: "ROAS", value: "2.1x", trend: "low" },
        { label: "CPA", value: "$85", trend: "high" },
        { label: "Conversion Rate", value: "1.8%", trend: "low" }
      ]
    },
    strategy: {
      title: "The Strategy",
      description: "Instead of increasing the budget, I implemented a comprehensive optimization strategy focused on efficiency and precision targeting.",
      steps: [
        { title: "Audience Segmentation Analysis", description: "Conducted deep-dive analysis of customer segments to identify high-value audiences", icon: Target },
        { title: "Keyword Optimization", description: "Eliminated wasteful keywords and focused budget on high-converting terms", icon: Lightbulb },
        { title: "Ad Creative Testing", description: "Developed and tested new ad creatives with stronger value propositions", icon: BarChart3 },
        { title: "Landing Page Alignment", description: "Optimized landing pages to match ad messaging and improve conversion rates", icon: CheckCircle }
      ]
    },
    results: {
      title: "The Results",
      description: "Within 3 months, we achieved remarkable improvements across all key metrics while reducing overall ad spend.",
      metrics: [
        { label: "Ad Spend Reduction", value: "-40%", change: "$15,000 → $9,000", color: "emerald" },
        { label: "ROAS Improvement", value: "+180%", change: "2.1x → 5.9x", color: "blue" },
        { label: "CPA Reduction", value: "-65%", change: "$85 → $30", color: "green" },
        { label: "Conversion Rate", value: "+125%", change: "1.8% → 4.1%", color: "purple" }
      ]
    },
    keyTakeaways: [
      "Quality over quantity: Focusing on high-intent audiences delivered better results than broad targeting",
      "Data-driven decisions: Every optimization was backed by performance data and testing",
      "Systematic approach: Gradual implementation allowed for continuous learning and adjustment",
      "Holistic optimization: Success came from optimizing the entire funnel, not just ad campaigns"
    ]
  }
};