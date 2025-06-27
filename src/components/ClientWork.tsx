import React from 'react';
import { Rocket, TrendingUp, DollarSign, Zap, TrendingDown, Star, ArrowUpRight, Target, Lightbulb, BarChart3, Sparkles, Award, CheckCircle } from 'lucide-react';

interface ClientWorkProps {
  onCaseStudyClick: (title: string) => void;
}

const OVERVIEW_STATS = [
  { icon: TrendingUp, value: "+187%", label: "Average ROI Boost", gradient: "from-green-500/10 to-emerald-600/10", border: "border-green-500/20", color: "text-green-400" },
  { icon: DollarSign, value: "-45%", label: "Cost Reduction", gradient: "from-blue-500/10 to-cyan-600/10", border: "border-blue-500/20", color: "text-blue-400" },
  { icon: Zap, value: "300%", label: "Efficiency Gain", gradient: "from-purple-500/10 to-pink-600/10", border: "border-purple-500/20", color: "text-purple-400" }
];

const PROCESS_STEPS = [
  { icon: Target, title: 'Analyze', desc: 'Deep dive into current performance', color: 'from-red-400 to-pink-500' },
  { icon: Lightbulb, title: 'Strategy', desc: 'Develop data-driven approach', color: 'from-yellow-400 to-orange-500' },
  { icon: Rocket, title: 'Execute', desc: 'Implement optimized campaigns', color: 'from-blue-400 to-cyan-500' },
  { icon: BarChart3, title: 'Optimize', desc: 'Continuous improvement cycle', color: 'from-green-400 to-emerald-500' }
];

export default function ClientWork({ onCaseStudyClick }: ClientWorkProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 border border-green-400/30 rounded-full px-4 py-2">
          <Rocket className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium text-sm">Proven Results</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          Real Projects,<br />
          <span className="text-green-400">Real Impact</span>
        </h3>
        <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Here's how I've helped businesses optimize their marketing spend and maximize revenue through strategic campaigns.
        </p>
      </div>

      {/* Results Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {OVERVIEW_STATS.map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-xl p-4 border ${stat.border}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-${stat.color.split('-')[1]}-500 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="space-y-8">
        {/* Case Study 1 */}
        <div 
          onClick={() => onCaseStudyClick("I spend less but it worked")}
          className="group relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-500/20 to-cyan-400/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
          
          <div className="relative bg-gradient-to-br from-slate-800/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-400/20 group-hover:border-emerald-400/60 transition-all duration-700 group-hover:scale-[1.01] shadow-2xl">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="flex flex-col xl:flex-row min-h-[450px]">
              <div className="xl:w-3/5 p-6 sm:p-8 xl:p-12 flex flex-col justify-center relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Award className="w-4 h-4" />
                    <span>Premium Success Story</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-yellow-500/30">
                    <Sparkles className="w-3 h-3" />
                    Cost Optimization Master
                  </div>
                </div>
                
                <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    I spend less
                  </span>
                  <br />
                  <span className="text-white">but it </span>
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    worked
                  </span>
                </h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    A revolutionary approach to campaign optimization that <span className="text-emerald-400 font-semibold">slashed advertising costs by 40%</span> while simultaneously <span className="text-teal-400 font-semibold">boosting conversions by 25%</span>.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-4 border border-emerald-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-emerald-400">-40%</div>
                    </div>
                    <div className="text-xs text-gray-400">Ad Spend Reduction</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl p-4 border border-teal-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-teal-400">+25%</div>
                    </div>
                    <div className="text-xs text-gray-400">Conversion Boost</div>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onCaseStudyClick("I spend less but it worked");
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg group/btn"
                >
                  <span className="text-base">Explore Full Case Study</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="xl:w-2/5 relative overflow-hidden">
                <div className="aspect-[4/3] xl:aspect-auto xl:h-full relative">
                  <img 
                    src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Advanced analytics dashboard"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 filter brightness-75 group-hover:brightness-90"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-slate-900/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent xl:bg-gradient-to-l xl:from-slate-900/95 xl:via-slate-900/40 xl:to-transparent"></div>
                  
                  <div className="absolute top-6 left-6">
                    <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-4 py-3 border border-emerald-400/30 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                        <div>
                          <div className="text-emerald-400 font-bold text-lg">180% ROI</div>
                          <div className="text-white text-xs">Improvement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-4 py-3 border border-yellow-400/30 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <div>
                          <div className="text-yellow-400 font-bold text-sm">Featured</div>
                          <div className="text-white text-xs">Success</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div 
          onClick={() => onCaseStudyClick("We Automated the overall business")}
          className="group relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-blue-400/60 transition-all duration-700 group-hover:scale-[1.02] shadow-2xl">
            <div className="flex flex-col xl:flex-row-reverse min-h-[400px]">
              <div className="xl:w-2/5 relative overflow-hidden">
                <div className="aspect-[16/9] xl:aspect-auto xl:h-full relative">
                  <img 
                    src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Business automation dashboard"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-gray-900/80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent xl:bg-gradient-to-l xl:from-transparent xl:to-gray-900/90"></div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="inline-flex items-center gap-2 bg-blue-500/95 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                      <Zap className="w-4 h-4" />
                      Fully Automated
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-400/30">
                      <div className="text-blue-400 font-bold text-xl">300%</div>
                      <div className="text-white text-xs">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-3/5 p-6 sm:p-8 xl:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    Automation & Efficiency
                  </div>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 group-hover:text-blue-400 transition-colors duration-500 leading-tight">
                  We Automated the overall business
                </h3>
                
                <p className="text-gray-300 text-base xl:text-lg leading-relaxed mb-8 max-w-2xl">
                  Completely restructured business operations by implementing comprehensive automation systems, streamlining workflows, and creating scalable processes.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: "300%", label: "Efficiency Boost", color: "purple-400" },
                    { value: "-60%", label: "Manual Work", color: "green-400" },
                    { value: "24/7", label: "Automated Systems", color: "blue-400" },
                    { value: "6 Mo", label: "Implementation", color: "yellow-400" }
                  ].map((metric, index) => (
                    <div key={index} className="text-center bg-gray-800/40 rounded-xl p-4 border border-gray-700/30">
                      <div className={`text-2xl font-bold text-${metric.color} mb-1`}>{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onCaseStudyClick("We Automated the overall business");
                  }}
                  className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 font-semibold text-base group/btn bg-blue-400/10 hover:bg-blue-400/20 px-6 py-3 rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
                >
                  <span>View Detailed Case Study</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <div className="relative">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-white mb-3">My Process</h4>
          <p className="text-gray-400 text-base">How I approach every client project</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 text-center group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-white text-base mb-2">{step.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}