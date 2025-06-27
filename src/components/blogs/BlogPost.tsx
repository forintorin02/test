import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, TrendingUp, Target, CheckCircle, Lightbulb, BarChart3 } from 'lucide-react';
import { spendLessButWorkedData } from './posts/SpendLessButWorked';
import { automatedBusinessData } from './posts/AutomatedBusiness';

interface BlogPostProps {
  onBack: () => void;
  postId: string;
}

const BLOG_DATA = {
  "I spend less but it worked": spendLessButWorkedData,
  "We Automated the overall business": automatedBusinessData
};

export default function BlogPost({ onBack, postId }: BlogPostProps) {
  const blog = BLOG_DATA[postId as keyof typeof BLOG_DATA];
  if (!blog) return null;

  const shareUrl = `${window.location.origin}${window.location.pathname}#/${postId === "I spend less but it worked" ? "spend_less_but" : "automated_business"}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.subtitle,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium mb-6 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Client Work</span>
        </button>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div className="aspect-[21/9] relative">
            <img 
              src={blog.heroImage}
              alt={blog.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center gap-1 bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-400/30">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed max-w-3xl">
                {blog.subtitle}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-yellow-400/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-12">
          {/* Challenge Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              {blog.content.challenge.title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {blog.content.challenge.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {blog.content.challenge.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                  <div className="text-center">
                    <div className={`text-xl sm:text-2xl font-bold mb-2 ${
                      metric.trend === 'high' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              {blog.content.strategy.title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {blog.content.strategy.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {blog.content.strategy.steps.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-blue-400/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {blog.content.results.title}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {blog.content.results.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {blog.content.results.metrics.map((metric, index) => (
                <div key={index} className="group relative">
                  <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-${metric.color}-400/20 group-hover:border-${metric.color}-400/40 transition-all duration-500`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${metric.color}-400 to-${metric.color}-500 rounded-xl flex items-center justify-center`}>
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold text-${metric.color}-400`}>{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm">
                      <span className="font-medium">Change: </span>
                      <span className={`text-${metric.color}-400`}>{metric.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Takeaways */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Key Takeaways
            </h2>
            
            <div className="space-y-4">
              {blog.content.keyTakeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-black" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-br from-yellow-400/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Let's discuss how we can apply similar strategies to optimize your marketing performance and drive exceptional results.
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 px-6 py-3 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}