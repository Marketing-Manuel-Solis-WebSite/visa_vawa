'use client';

import React, { useState, useEffect } from 'react';
import {
  Sun, CloudRain, Wind, Droplets, Thermometer, Map, Menu, Search, Bell, 
  Navigation, Sunrise, Sunset, Cloud, CloudSun, Moon, Umbrella, Eye, 
  CloudDrizzle, CloudSnow, CloudLightning, Waves, MapPin, Calendar,
  TrendingUp, TrendingDown, ChevronRight, Settings, Star, Share2
} from 'lucide-react';

export default function WeatherDecoy() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'today' | 'hourly' | 'weekly' | 'radar'>('today');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCity, setSelectedCity] = useState('New York, NY');

  // Popular cities for realistic search
  const popularCities = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
    'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA'
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  // Realistic hourly data
  const hourlyData = [
    { time: 'Now', icon: Sun, temp: '72°', feels: '74°', wind: '8 mph', humidity: '45%', precip: '0%' },
    { time: '11 AM', icon: Sun, temp: '74°', feels: '76°', wind: '9 mph', humidity: '43%', precip: '0%' },
    { time: '12 PM', icon: CloudSun, temp: '76°', feels: '78°', wind: '10 mph', humidity: '42%', precip: '5%' },
    { time: '1 PM', icon: CloudSun, temp: '77°', feels: '79°', wind: '11 mph', humidity: '40%', precip: '10%' },
    { time: '2 PM', icon: Cloud, temp: '75°', feels: '77°', wind: '12 mph', humidity: '48%', precip: '15%' },
    { time: '3 PM', icon: CloudRain, temp: '70°', feels: '71°', wind: '14 mph', humidity: '62%', precip: '60%' },
    { time: '4 PM', icon: CloudRain, temp: '68°', feels: '69°', wind: '13 mph', humidity: '70%', precip: '80%' },
    { time: '5 PM', icon: CloudDrizzle, temp: '67°', feels: '68°', wind: '11 mph', humidity: '65%', precip: '40%' },
    { time: '6 PM', icon: Cloud, temp: '66°', feels: '67°', wind: '9 mph', humidity: '58%', precip: '20%' },
    { time: '7 PM', icon: CloudSun, temp: '65°', feels: '66°', wind: '7 mph', humidity: '52%', precip: '5%' },
  ];

  // Realistic 7-day forecast
  const weeklyData = [
    { day: 'Today', date: 'Feb 6', icon: CloudSun, high: '77°', low: '62°', rain: '10%', condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Feb 7', icon: Sun, high: '80°', low: '65°', rain: '0%', condition: 'Sunny' },
    { day: 'Fri', date: 'Feb 8', icon: CloudRain, high: '72°', low: '60°', rain: '60%', condition: 'Rain Showers' },
    { day: 'Sat', date: 'Feb 9', icon: Cloud, high: '70°', low: '58°', rain: '20%', condition: 'Mostly Cloudy' },
    { day: 'Sun', date: 'Feb 10', icon: Sun, high: '75°', low: '60°', rain: '0%', condition: 'Clear' },
    { day: 'Mon', date: 'Feb 11', icon: CloudSun, high: '76°', low: '62°', rain: '5%', condition: 'Partly Cloudy' },
    { day: 'Tue', date: 'Feb 12', icon: CloudRain, high: '68°', low: '56°', rain: '70%', condition: 'Thunderstorms' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans text-slate-800">
      
      {/* Professional Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="text-slate-600 cursor-pointer hover:text-blue-600 transition" size={24} />
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-tight cursor-default select-none">
              <CloudSun size={32} strokeWidth={2} />
              <span className="hidden sm:inline">WeatherPro</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200 hover:border-blue-300 transition">
                <Search size={18} className="text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search city or zip code..."
                  className="bg-transparent border-none outline-none text-sm w-full placeholder-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                />
              </div>
              
              {/* Search Dropdown */}
              {showSearch && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
                  {popularCities
                    .filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()))
                    .slice(0, 5)
                    .map((city, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition flex items-center gap-3"
                        onClick={() => {
                          setSelectedCity(city);
                          setSearchQuery('');
                          setShowSearch(false);
                        }}
                      >
                        <MapPin size={16} className="text-slate-400" />
                        <span className="text-sm text-slate-700">{city}</span>
                      </button>
                    ))
                  }
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="text-slate-500 hover:text-blue-600 transition cursor-pointer" size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <Settings className="text-slate-500 hover:text-blue-600 transition cursor-pointer" size={22} />
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer shadow-md hover:shadow-lg transition">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">

        {/* Main Weather Card */}
        <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 opacity-10 pointer-events-none">
            <Sun size={250} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Navigation size={18} className="text-blue-200" />
                  <h2 className="text-3xl md:text-4xl font-bold">{selectedCity}</h2>
                  <button className="text-blue-200 hover:text-white transition">
                    <Star size={20} />
                  </button>
                </div>
                <p className="text-blue-100 text-sm font-medium flex items-center gap-2">
                  <Calendar size={14} />
                  {formatDate(currentTime)} • {formatTime(currentTime)}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition">
                  Share
                  <Share2 size={14} className="inline ml-1" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Sun size={100} className="text-yellow-300 drop-shadow-lg animate-pulse-slow" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                </div>
                <div>
                  <div className="text-8xl font-bold tracking-tighter mb-2">72°</div>
                  <p className="text-blue-100 text-xl font-medium mb-1">Partly Cloudy</p>
                  <p className="text-blue-200 text-base">Feels like 74° • UV Index 6</p>
                </div>
              </div>

              {/* Detailed Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: 'High', value: '78°' },
                  { icon: TrendingDown, label: 'Low', value: '64°' },
                  { icon: Wind, label: 'Wind', value: '8 mph NW' },
                  { icon: Droplets, label: 'Humidity', value: '45%' },
                  { icon: Eye, label: 'Visibility', value: '10 mi' },
                  { icon: Umbrella, label: 'Rain', value: '0%' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition">
                    <stat.icon size={20} className="text-blue-200 mb-2" />
                    <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 flex gap-2 overflow-x-auto">
          {[
            { id: 'today', label: 'Today', icon: Sun },
            { id: 'hourly', label: 'Hourly', icon: CloudSun },
            { id: 'weekly', label: '7-Day', icon: Calendar },
            { id: 'radar', label: 'Radar', icon: Map },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Hourly Forecast */}
        {(activeTab === 'today' || activeTab === 'hourly') && (
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
              <h3 className="text-slate-800 font-bold text-xl flex items-center gap-2">
                <CloudSun size={24} className="text-blue-600" />
                Hourly Forecast
              </h3>
              <button className="text-blue-600 text-sm font-medium hover:underline">See All</button>
            </div>
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
              {hourlyData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center min-w-[100px] p-4 rounded-xl hover:bg-blue-50 transition cursor-pointer border border-transparent hover:border-blue-200 group"
                >
                  <span className="text-xs font-semibold text-slate-500 mb-2 group-hover:text-blue-600">{item.time}</span>
                  <item.icon className="text-slate-600 group-hover:text-yellow-500 transition mb-2" size={32} strokeWidth={1.5} />
                  <span className="text-xl font-bold text-slate-800 mb-1">{item.temp}</span>
                  <span className="text-xs text-slate-400">Feels {item.feels}</span>
                  <div className="flex items-center gap-1 mt-2 text-xs text-blue-500">
                    <Droplets size={12} />
                    <span>{item.precip}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7-Day Forecast */}
        {activeTab === 'weekly' && (
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-slate-800 font-bold text-xl mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
              <Calendar size={24} className="text-blue-600" />
              7-Day Forecast
            </h3>
            <div className="space-y-2">
              {weeklyData.map((day, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition cursor-pointer border border-transparent hover:border-slate-200 group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="w-16 font-semibold text-slate-700">{day.day}</span>
                    <span className="text-sm text-slate-500">{day.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 flex-1 justify-center">
                    <day.icon size={28} className="text-slate-500 group-hover:text-yellow-500 transition" strokeWidth={1.5} />
                    <div className="text-sm text-slate-600 hidden md:block">{day.condition}</div>
                  </div>

                  <div className="hidden sm:flex flex-1 mx-6 h-2 bg-gradient-to-r from-blue-300 via-yellow-200 to-red-300 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 bottom-0 bg-blue-400 rounded-full" style={{left: '20%', right: '60%'}}></div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-blue-500">
                    {day.rain !== '0%' && <><Droplets size={14} /><span>{day.rain}</span></>}
                  </div>

                  <div className="flex gap-6 w-28 justify-end">
                    <span className="font-bold text-slate-800 text-lg">{day.high}</span>
                    <span className="text-slate-400 text-lg">{day.low}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Radar Map */}
        {activeTab === 'radar' && (
          <section className="bg-slate-200 rounded-2xl shadow-sm border border-slate-300 h-96 relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Map size={120} className="text-slate-400" strokeWidth={1} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-blue-500/10"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 border border-slate-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-slate-700">Live Radar • {formatTime(currentTime)}</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-slate-600">Light</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span className="text-slate-600">Moderate</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-slate-600">Heavy</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Additional Details Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Sun & Moon */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-slate-800 font-bold text-lg mb-6 flex items-center gap-2">
              <Sun size={22} className="text-yellow-500" />
              Sun & Moon
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-3 rounded-full">
                    <Sunrise className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Sunrise</p>
                    <p className="font-bold text-slate-800 text-lg">6:42 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold text-right">Sunset</p>
                    <p className="font-bold text-slate-800 text-lg text-right">5:51 PM</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-full">
                    <Sunset className="text-indigo-500" size={24} />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Moon className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Moon Phase</p>
                    <p className="font-bold text-slate-800">Waning Crescent</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Moonrise</p>
                  <p className="font-semibold text-slate-700">4:23 AM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Air Quality */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-slate-800 font-bold text-lg mb-6 flex items-center gap-2">
              <Waves size={22} className="text-green-500" />
              Air Quality
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">AQI Index</span>
                <span className="font-bold text-2xl text-green-600">42</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{width: '42%'}}></div>
              </div>
              <p className="text-sm text-slate-600">Air quality is <span className="font-semibold text-green-600">Good</span>. Ideal for outdoor activities.</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-500 mb-1">PM2.5</p>
                  <p className="font-semibold text-slate-800">12 µg/m³</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">PM10</p>
                  <p className="font-semibold text-slate-800">24 µg/m³</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Realistic Footer */}
        <footer className="text-center border-t border-slate-200 pt-8 pb-6 mt-12">
          <div className="flex justify-center items-center gap-3 text-slate-400 mb-6">
            <CloudSun size={28} className="text-blue-500" />
            <span className="font-bold text-xl text-slate-600">WeatherPro</span>
          </div>
          <div className="flex justify-center gap-8 text-xs text-slate-500 mb-6 flex-wrap">
            <button className="hover:text-blue-600 transition">About</button>
            <button className="hover:text-blue-600 transition">Privacy Policy</button>
            <button className="hover:text-blue-600 transition">Terms of Service</button>
            <button className="hover:text-blue-600 transition">Contact Us</button>
            <button className="hover:text-blue-600 transition">Data Sources</button>
            <button className="hover:text-blue-600 transition">Accessibility</button>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <p>Weather data provided by National Weather Service and AccuWeather</p>
            <p>© {currentTime.getFullYear()} WeatherPro Network, LLC. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}