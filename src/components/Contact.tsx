import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Phone, Clock, CheckCircle, MapPin, Send, User, MessageSquare, DollarSign, Calendar, Loader2 } from 'lucide-react';

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email Me",
    subtitle: "Primary Contact",
    description: "Ready to discuss your project? Send me an email and I'll get back to you within 24 hours with a detailed strategy proposal.",
    contact: "send.istiak@gmail.com",
    gradient: "from-yellow-400 to-orange-500",
    hoverGradient: "from-yellow-400/20 to-orange-500/20",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: Phone,
    title: "Call Me",
    subtitle: "Quick Discussion",
    description: "Need immediate consultation? Give me a call to discuss your marketing challenges and explore potential solutions.",
    contact: "+880 1727767534",
    gradient: "from-green-400 to-emerald-500",
    hoverGradient: "from-green-400/20 to-emerald-500/20",
    borderColor: "border-green-400/30"
  }
];

const AVAILABILITY_INFO = [
  { icon: Clock, title: "Quick Response", subtitle: "Usually within 2-4 hours", gradient: "from-green-400 to-emerald-500" },
  { icon: CheckCircle, title: "Available Now", subtitle: "Taking new projects", gradient: "from-yellow-400 to-orange-500" },
  { icon: MapPin, title: "Based in Bangladesh", subtitle: "GMT+6 timezone", gradient: "from-blue-400 to-purple-500" }
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Prefer to discuss"
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Just exploring"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    situation: '',
    goals: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1334893928121503847/4jT9f7oP9M2vjuKMTgB2RO4-h_NFxsgqvq_usARnznQmlKPwSoLp3iwt4T2EJCAqq_XP';
      
      const embed = {
        title: "🚀 New Portfolio Contact Form Submission",
        color: 0x3B82F6,
        fields: [
          { name: "👤 Name", value: formData.name || "Not provided", inline: true },
          { name: "📧 Email", value: formData.email || "Not provided", inline: true },
          { name: "📊 Current Situation", value: formData.situation || "Not provided", inline: false },
          { name: "🎯 Goals", value: formData.goals || "Not provided", inline: false },
          { name: "💰 Budget Range", value: formData.budget || "Not provided", inline: true },
          { name: "📅 Timeline", value: formData.timeline || "Not provided", inline: true },
          { name: "💬 Additional Message", value: formData.message || "No additional message", inline: false }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: "Istiak Ahmed Portfolio" }
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', situation: '', goals: '', budget: '', timeline: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2 hover:scale-105 transition-all duration-300 will-change-transform">
          <MessageCircle className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span className="text-yellow-400 font-medium text-sm">Let's Connect</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          Ready to Scale<br />
          <span className="text-yellow-400">Your Business?</span>
        </h3>
        <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can optimize your marketing strategy and turn your campaigns into revenue-generating machines.
        </p>
      </div>

      {/* Contact Methods */}
      <div className={`grid md:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
        {CONTACT_METHODS.map((method, index) => (
          <div key={index} className="group relative will-change-transform">
            <div className={`absolute inset-0 bg-gradient-to-r ${method.hoverGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
            <div className={`relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:${method.borderColor} transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 will-change-transform`}>
                  <method.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base group-hover:text-yellow-400 transition-colors duration-300">{method.title}</h4>
                  <p className="text-gray-400 text-sm">{method.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{method.description}</p>
              <div className={`flex items-center gap-2 ${method.gradient.includes('yellow') ? 'text-yellow-400' : 'text-green-400'} font-medium text-sm`}>
                <method.icon className="w-4 h-4" />
                <span>{method.contact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className={`bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl will-change-transform ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
        <div className="text-center mb-6">
          <h4 className="text-lg font-bold text-white mb-2">Response Time & Availability</h4>
          <p className="text-gray-400 text-sm">Here's what you can expect when you reach out</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {AVAILABILITY_INFO.map((info, index) => (
            <div 
              key={index} 
              className={`text-center hover:scale-105 transition-transform duration-300 will-change-transform animate-scale-in`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300 will-change-transform`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h5 className="font-semibold text-white text-sm mb-1">{info.title}</h5>
              <p className="text-gray-400 text-xs">{info.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className={`group relative will-change-transform ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 group-hover:border-yellow-400/50 transition-all duration-700 shadow-2xl hover:scale-[1.01] hover:-translate-y-1">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">Send Me a Message</h4>
            <p className="text-gray-300 text-sm">Fill out the form below and I'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 text-sm backdrop-blur-sm hover:scale-[1.02] will-change-transform"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 text-sm backdrop-blur-sm hover:scale-[1.02] will-change-transform"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Situation */}
            <div>
              <label htmlFor="situation" className="block text-sm font-medium text-yellow-400 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Current Marketing Situation *
              </label>
              <textarea
                id="situation"
                name="situation"
                value={formData.situation}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 resize-none text-sm backdrop-blur-sm hover:scale-[1.01] will-change-transform"
                placeholder="Describe your current marketing challenges..."
              />
            </div>

            {/* Goals */}
            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-yellow-400 mb-2">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Your Goals *
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 resize-none text-sm backdrop-blur-sm hover:scale-[1.01] will-change-transform"
                placeholder="What specific results are you looking to achieve?"
              />
            </div>

            {/* Budget and Timeline */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-yellow-400 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Monthly Marketing Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 text-sm backdrop-blur-sm hover:scale-[1.02] will-change-transform"
                >
                  <option value="">Select budget range</option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-yellow-400 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 text-sm backdrop-blur-sm hover:scale-[1.02] will-change-transform"
                >
                  <option value="">Select timeline</option>
                  {TIMELINE_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/60 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/60 hover:border-yellow-400/50 transition-all duration-500 resize-none text-sm backdrop-blur-sm hover:scale-[1.01] will-change-transform"
                placeholder="Any additional details or questions..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-semibold text-black transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-yellow-400/25 hover:shadow-2xl text-base will-change-transform focus-ring"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm animate-fade-in-up">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-medium text-sm">Message sent successfully!</p>
                <p className="text-gray-300 text-sm mt-1">I'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg backdrop-blur-sm animate-fade-in-up">
                <p className="text-red-400 font-medium text-sm">Failed to send message</p>
                <p className="text-gray-300 text-sm mt-1">Please try again or contact me directly via email.</p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* CTA */}
      <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full px-6 py-3 hover:scale-105 hover:bg-yellow-400/20 transition-all duration-500 will-change-transform">
          <Send className="w-5 h-5 text-yellow-400 animate-pulse" />
          <span className="text-white font-medium text-sm">Let's build something amazing together</span>
        </div>
      </div>
    </div>
  );
}