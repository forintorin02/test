import React, { useState, useEffect, useMemo } from 'react';
import { ArrowUpRight, Calendar, TrendingUp, Zap, Instagram } from 'lucide-react';
import About from './components/About';
import ClientWork from './components/ClientWork';
import Contact from './components/Contact';
import BlogPost from './components/blogs/BlogPost';

const STATS = [
  { icon: TrendingUp, value: "150%", label: "Average ROI Increase", color: "text-green-400" },
  { icon: Calendar, value: "2+", label: "Years Experience", color: "text-blue-400" },
  { icon: Zap, value: "5", label: "Projects Completed", color: "text-yellow-400" }
];

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/iahmedrifat",
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "Connect on LinkedIn",
    gradient: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
  },
  {
    href: "https://instagram.com/iahmedrifat",
    icon: <Instagram className="w-4 h-4" />,
    label: "@iahmedrifat",
    gradient: "from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
  }
];

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'client-work', label: 'Client Work' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [currentBlog, setCurrentBlog] = useState<string | null>(null);

  const handleHashChange = useMemo(() => () => {
    const hash = window.location.hash;
    
    if (hash === '#/spend_less_but') {
      setCurrentBlog("I spend less but it worked");
      setActiveTab('client-work');
    } else if (hash === '#/automated_business') {
      setCurrentBlog("We Automated the overall business");
      setActiveTab('client-work');
    } else {
      setCurrentBlog(null);
      const tabId = hash.replace('#/', '') || 'about';
      if (TABS.some(tab => tab.id === tabId)) {
        setActiveTab(tabId);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const handleCaseStudyClick = (caseStudyTitle: string) => {
    const hash = caseStudyTitle === "I spend less but it worked" ? '#/spend_less_but' : '#/automated_business';
    window.location.hash = hash;
  };

  const handleBackToBlog = () => {
    window.location.hash = '#/client-work';
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
  };

  const renderTabContent = () => {
    if (currentBlog) {
      return <BlogPost onBack={handleBackToBlog} postId={currentBlog} />;
    }

    switch (activeTab) {
      case 'about': return <About />;
      case 'client-work': return <ClientWork onCaseStudyClick={handleCaseStudyClick} />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  if (currentBlog) {
    return renderTabContent();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-0.5">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Istiak Ahmed"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                Available
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="mb-3">
                <span className="inline-block bg-yellow-400/10 text-yellow-400 px-3 py-1.5 rounded-full text-sm font-medium">
                  Digital Marketing Expert
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Istiak Ahmed
              </h1>
              <p className="text-lg sm:text-xl text-yellow-400 font-semibold mb-3">
                Growth & Revenue-Focused Digital Marketer
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-4">
                I started digital marketing two years ago. Over time, I realized the need to blend revenue strategy with marketing—so I merged both to bring a new approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {SOCIAL_LINKS.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2 bg-gradient-to-r ${link.gradient} px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-medium`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {STATS.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xl font-bold">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6 px-4">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50 w-full max-w-md">
            <div className="flex gap-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent capitalize">
                {activeTab === 'client-work' ? 'Client Work' : activeTab}
              </h2>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
          
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;