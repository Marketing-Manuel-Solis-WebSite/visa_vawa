'use client';

import React, { useState, useEffect } from 'react';
import {
  Sun, CloudRain, Wind, Droplets, Thermometer,
  Map, Menu, Search, Bell, Navigation, Sunrise, Sunset,
  Cloud, CloudSun, Moon, Umbrella
} from 'lucide-react';

export default function WeatherDecoy() {
  // Simular fecha y hora actual para que parezca "en vivo"
  const [currentTime, setCurrentTime] = useState(new Date());

  // Actualizar el reloj cada minuto
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* 1. Header de App de Clima Genérica */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="text-slate-500 cursor-pointer hover:text-blue-600" />
            <div className="flex items-center gap-1 text-blue-600 font-bold text-xl tracking-tight cursor-default select-none">
              <CloudSun size={28} />
              <span>SkyCast</span>
            </div>
          </div>

          {/* Barra de búsqueda falsa */}
          <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64 border border-slate-200">
            <Search size={18} className="text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search city or zip code"
              className="bg-transparent border-none outline-none text-sm w-full placeholder-slate-500 cursor-text"
              readOnly 
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-slate-500 cursor-pointer hover:text-blue-600" />
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs cursor-default">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 md:p-6 space-y-6">

        {/* 2. Tarjeta Principal de Clima Actual */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
          {/* Fondo decorativo sutil */}
          <div className="absolute top-[-20%] right-[-10%] opacity-10 pointer-events-none">
            <Sun size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Navigation size={16} className="text-blue-200" />
                  <h2 className="text-2xl md:text-3xl font-bold">New York, NY</h2>
                </div>
                <p className="text-blue-100 text-sm font-medium">{formatDate(currentTime)}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Now
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <Sun size={80} className="text-yellow-300 animate-pulse-slow" />
                <div>
                  <div className="text-7xl font-bold tracking-tighter">72°</div>
                  <p className="text-blue-100 text-lg font-medium">Partly Cloudy</p>
                  <p className="text-blue-200 text-sm">H: 78° L: 64°</p>
                </div>
              </div>

              {/* Grid de detalles */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm w-full md:w-auto bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2">
                  <Wind size={18} className="text-blue-200" />
                  <span>Wind: <strong>8 mph NW</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets size={18} className="text-blue-200" />
                  <span>Humidity: <strong>45%</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer size={18} className="text-blue-200" />
                  <span>Feels Like: <strong>74°</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Umbrella size={18} className="text-blue-200" />
                  <span>Precip: <strong>0%</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pronóstico por Hora (Scroll Horizontal) */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-slate-800 font-bold mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
            <span>Hourly Forecast</span>
            <span className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">See All</span>
          </h3>
          <div className="flex overflow-x-auto pb-2 gap-8 scrollbar-hide">
            {[
              { time: 'Now', icon: Sun, temp: '72°' },
              { time: '11 AM', icon: Sun, temp: '74°' },
              { time: '12 PM', icon: CloudSun, temp: '76°' },
              { time: '1 PM', icon: CloudSun, temp: '77°' },
              { time: '2 PM', icon: Cloud, temp: '75°' },
              { time: '3 PM', icon: CloudRain, temp: '70°' },
              { time: '4 PM', icon: CloudRain, temp: '68°' },
              { time: '5 PM', icon: Cloud, temp: '67°' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[60px] gap-2 cursor-default group">
                <span className="text-xs text-slate-500 font-medium group-hover:text-blue-600">{item.time}</span>
                <item.icon className="text-slate-600 group-hover:text-yellow-500 transition-colors" size={24} />
                <span className="text-sm font-bold text-slate-800">{item.temp}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* 4. Pronóstico de 7 Días */}
          <section className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-slate-800 font-bold mb-4 border-b border-slate-100 pb-3">7-Day Forecast</h3>
            <div className="space-y-1">
              {[
                { day: 'Today', icon: CloudSun, high: '77°', low: '62°', rain: '10%' },
                { day: 'Wed', icon: Sun, high: '80°', low: '65°', rain: '0%' },
                { day: 'Thu', icon: CloudRain, high: '72°', low: '60°', rain: '60%' },
                { day: 'Fri', icon: Cloud, high: '70°', low: '58°', rain: '20%' },
                { day: 'Sat', icon: Sun, high: '75°', low: '60°', rain: '0%' },
              ].map((day, idx) => (
                <div key={idx} className="flex items-center justify-between hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-default">
                  <span className="w-16 font-medium text-slate-700">{day.day}</span>
                  <div className="flex items-center gap-2 w-24 justify-center">
                    <day.icon size={20} className="text-slate-500" />
                    <span className="text-xs text-blue-500 font-medium w-8 text-right">{day.rain !== '0%' ? day.rain : ''}</span>
                  </div>
                  
                  {/* Barra de temperatura visual */}
                  <div className="hidden sm:block flex-1 mx-4 h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 bottom-0 bg-gradient-to-r from-blue-300 to-yellow-300 rounded-full" 
                         style={{left: '20%', right: '20%'}}></div>
                  </div>

                  <div className="flex gap-4 w-24 justify-end">
                    <span className="font-bold text-slate-800">{day.high}</span>
                    <span className="text-slate-400">{day.low}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Widgets Laterales (Radar y Sol) */}
          <div className="space-y-6">
            
            {/* Fake Radar */}
            <section className="bg-slate-200 rounded-2xl shadow-sm border border-slate-300 h-48 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Map size={64} className="text-slate-400" />
              </div>
              {/* Capas falsas de radar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-700">Live Radar</span>
              </div>
            </section>

            {/* Sol y Luna */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-slate-800 font-bold mb-4">Sun & Moon</h3>
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <Sunrise className="text-orange-400" size={24} />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Sunrise</p>
                    <p className="font-bold text-slate-800">6:12 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sunset className="text-indigo-400" size={24} />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Sunset</p>
                    <p className="font-bold text-slate-800">7:45 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Moon className="text-slate-400" size={24} />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Moon Phase</p>
                  <p className="font-bold text-slate-800">Waxing Gibbous</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Fake - Vital para el realismo */}
        <footer className="mt-12 text-center border-t border-slate-200 pt-8 pb-4">
          <div className="flex justify-center items-center gap-2 text-slate-400 mb-4">
            <CloudSun size={20} />
            <span className="font-bold text-lg">SkyCast</span>
          </div>
          <div className="flex justify-center gap-6 text-xs text-slate-500 mb-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
            <span className="hover:underline cursor-pointer">Data Vendors</span>
          </div>
          <p className="text-xs text-slate-400">© 2024 SkyCast Weather Network, LLC. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}