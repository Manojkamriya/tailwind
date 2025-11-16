import React from "react";
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Zap,
  Star,
  CheckCircle,
  Target,
  BarChart3,
  Award
} from "lucide-react";

const HexagonInfographics = () => {
  const infographicsData = [
    {
      id: 1,
      icon: Users,
      title: "User Growth",
      value: "2.5M+",
      description: "Active Users",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: "0s"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Revenue",
      value: "48%",
      description: "Yearly Increase",
      gradient: "from-emerald-500 to-green-400",
      bgGradient: "from-emerald-50 to-green-50",
      delay: "0.1s"
    },
    {
      id: 3,
      icon: Shield,
      title: "Security",
      value: "99.9%",
      description: "Uptime Guarantee",
      gradient: "from-violet-500 to-purple-400",
      bgGradient: "from-violet-50 to-purple-50",
      delay: "0.2s"
    },
    {
      id: 4,
      icon: Clock,
      title: "Response Time",
      value: "24ms",
      description: "Average Latency",
      gradient: "from-amber-500 to-orange-400",
      bgGradient: "from-amber-50 to-orange-50",
      delay: "0.3s"
    },
    {
      id: 5,
      icon: Zap,
      title: "Performance",
      value: "3.2x",
      description: "Faster Processing",
      gradient: "from-rose-500 to-pink-400",
      bgGradient: "from-rose-50 to-pink-50",
      delay: "0.4s"
    }
  ];

  const HexagonCard = ({ data }) => {
    const IconComponent = data.icon;
    
    return (
      <div 
        className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
        style={{ animationDelay: data.delay }}
      >
        {/* Main Hexagon */}
        <div className={`hexagon bg-gradient-to-br ${data.gradient} p-1 shadow-xl`}>
          <div className="hexagon-inner bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${data.gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{data.value}</h3>
            <p className="text-sm font-semibold text-gray-700 mb-1">{data.title}</p>
            <p className="text-xs text-gray-500">{data.description}</p>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
        </div>
      </div>
    );
  };

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .hexagon {
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      width: 200px;
      height: 230px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: float 3s ease-in-out infinite;
    }
    
    .hexagon-inner {
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      width: calc(100% - 8px);
      height: calc(100% - 8px);
    }
    
    .hexagon-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    @media (max-width: 768px) {
      .hexagon {
        width: 160px;
        height: 184px;
      }
      
      .hexagon-grid {
        gap: 20px;
      }
    }
    
    @media (max-width: 640px) {
      .hexagon {
        width: 140px;
        height: 161px;
      }
      
      .hexagon-grid {
        gap: 15px;
      }
    }
    
    .stat-highlight {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  `;

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{styles}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Performance Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key performance indicators that drive our success and growth strategy
          </p>
        </div>

        {/* Hexagon Grid */}
        <div className="hexagon-grid">
          {infographicsData.map((data) => (
            <HexagonCard key={data.id} data={data} />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h4 className="text-lg font-semibold text-gray-900">Reliability</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Enterprise-grade infrastructure with 24/7 monitoring and support
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Target className="w-6 h-6 text-blue-500" />
              <h4 className="text-lg font-semibold text-gray-900">Precision</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Accurate metrics and real-time analytics for informed decision making
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-purple-500" />
              <h4 className="text-lg font-semibold text-gray-900">Analytics</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Comprehensive dashboards with actionable insights and trends
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <TrendingUp className="w-5 h-5" />
            Explore Detailed Analytics
          </button>
          
          <p className="text-gray-500 text-sm mt-4">
            Trusted by 10,000+ businesses worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default HexagonInfographics;