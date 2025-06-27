import React from 'react';
import { Sparkles, Target, Zap, BarChart3, Users, Lightbulb, Award } from 'lucide-react';

const PHILOSOPHY_CARDS = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    subtitle: "Performance First",
    description: "Every decision backed by analytics. I believe in testing, measuring, and optimizing until we find what converts your audience into customers.",
    gradient: "from-yellow-400 to-orange-500",
    hoverGradient: "from-yellow-400/20 to-orange-500/20"
  },
  {
    icon: Zap,
    title: "Revenue Integration",
    subtitle: "Marketing + Sales",
    description: "I merge marketing tactics with revenue strategy, creating systems that don't just generate leads—they generate profit.",
    gradient: "from-blue-400 to-purple-500",
    hoverGradient: "from-blue-400/20 to-purple-500/20"
  }
];

const SKILLS = [
  { icon: Target, label: 'PPC Management', color: 'from-red-400 to-pink-500' },
  { icon: BarChart3, label: 'Analytics & BI', color: 'from-blue-400 to-cyan-500' },
  { icon: Users, label: 'CRO & Funnels', color: 'from-green-400 to-emerald-500' },
  { icon: Lightbulb, label: 'Growth Strategy', color: 'from-yellow-400 to-orange-500' }
];

const TIMELINE = [
  {
    title: "Started Digital Marketing",
    description: "Began with traditional marketing approaches, learning the fundamentals of digital advertising and campaign management.",
    color: "yellow-400"
  },
  {
    title: "Revenue Realization",
    description: "Discovered the gap between marketing metrics and actual business revenue. Started integrating sales strategy with marketing efforts.",
    color: "blue-400"
  },
  {
    title: "Hybrid Approach",
    description: "Now I blend growth marketing with revenue optimization, creating systems that drive both engagement and profit.",
    color: "purple-400"
  }
];

export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero Statement */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-medium text-sm">Growth-Focused Approach</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          Transforming Marketing Into<br />
          <span className="text-yellow-400">Revenue Engines</span>
        </h3>
        <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          I don't just run campaigns—I architect growth systems that turn marketing spend into predictable revenue streams.
        </p>
      </div>

      {/* Philosophy Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {PHILOSOPHY_CARDS.map((card, index) => (
          <div key={index} className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${card.hoverGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-yellow-400/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center`}>
                  <card.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{card.title}</h4>
                  <p className="text-gray-400 text-sm">{card.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="relative">
        <div className="text-center mb-6">
          <h4 className="text-xl font-bold text-white mb-2">Core Expertise</h4>
          <p className="text-gray-400 text-sm">Tools and strategies I use to drive results</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-white text-sm">{skill.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="relative">
        <div className="text-center mb-6">
          <h4 className="text-xl font-bold text-white mb-2">My Journey</h4>
          <p className="text-gray-400 text-sm">How I evolved into a revenue-focused marketer</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-500 opacity-30"></div>
          
          <div className="space-y-8">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Left Content (for odd indices) */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-6 sm:pr-8' : ''}`}>
                  {index % 2 === 0 && (
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                      <h5 className={`font-bold text-${item.color} mb-1 text-base`}>{item.title}</h5>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>
                
                {/* Center Circle */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color} rounded-full border-4 border-gray-900 z-10`}></div>
                
                {/* Right Content (for even indices) */}
                <div className={`flex-1 ${index % 2 !== 0 ? 'text-left pl-6 sm:pl-8' : ''}`}>
                  {index % 2 !== 0 && (
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                      <h5 className={`font-bold text-${item.color} mb-1 text-base`}>{item.title}</h5>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full px-6 py-3">
          <Award className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-medium text-sm">Ready to transform your marketing ROI?</span>
        </div>
      </div>
    </div>
  );
}