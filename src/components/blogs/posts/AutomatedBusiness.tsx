import React from 'react';
import { Target, Lightbulb, BarChart3, CheckCircle, TrendingUp } from 'lucide-react';

export const automatedBusinessData = {
  title: "We Automated the Overall Business: A Complete Digital Transformation",
  subtitle: "How comprehensive automation systems revolutionized business operations and increased efficiency by 300%",
  author: "Istiak Ahmed",
  date: "November 2024",
  readTime: "12 min read",
  tags: ["Automation", "Digital Transformation", "Efficiency", "Systems"],
  heroImage: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
  content: {
    challenge: {
      title: "The Challenge",
      description: "A growing service-based business was drowning in manual processes. With 50+ employees spending 60% of their time on repetitive tasks, growth was stalling and operational costs were skyrocketing.",
      metrics: [
        { label: "Manual Task Time", value: "60%", trend: "high" },
        { label: "Operational Efficiency", value: "35%", trend: "low" },
        { label: "Employee Satisfaction", value: "2.8/5", trend: "low" },
        { label: "Error Rate", value: "15%", trend: "high" }
      ]
    },
    strategy: {
      title: "The Automation Strategy",
      description: "We designed a comprehensive automation ecosystem that would transform every aspect of the business operations.",
      steps: [
        { title: "Process Mapping & Analysis", description: "Identified all manual processes and their automation potential", icon: Target },
        { title: "Technology Stack Selection", description: "Chose the right tools and platforms for seamless integration", icon: Lightbulb },
        { title: "Workflow Automation Design", description: "Created automated workflows for all key business processes", icon: BarChart3 },
        { title: "Integration & Testing", description: "Implemented systems with thorough testing and validation", icon: CheckCircle }
      ]
    },
    results: {
      title: "Transformation Results",
      description: "The automation implementation delivered unprecedented improvements across all business metrics.",
      metrics: [
        { label: "Efficiency Increase", value: "+300%", change: "35% → 95%", color: "emerald" },
        { label: "Manual Work Reduction", value: "-60%", change: "60% → 24%", color: "blue" },
        { label: "Error Rate Decrease", value: "-80%", change: "15% → 3%", color: "green" },
        { label: "Employee Satisfaction", value: "+75%", change: "2.8/5 → 4.9/5", color: "purple" }
      ]
    },
    keyTakeaways: [
      "Comprehensive approach: Automating interconnected processes delivered exponential benefits",
      "Change management: Proper training and support ensured smooth adoption",
      "Scalable systems: Built infrastructure that grows with the business",
      "ROI focus: Every automation was evaluated for its impact on business outcomes"
    ]
  }
};