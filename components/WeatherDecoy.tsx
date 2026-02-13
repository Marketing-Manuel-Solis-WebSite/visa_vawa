'use client';

import React from 'react';

/**
 * WEATHER DECOY — Safety screen for domestic violence survivors
 * 
 * CRITICAL PERFORMANCE REQUIREMENTS:
 * - Must render INSTANTLY (< 16ms) when panic button is pressed
 * - Zero external dependencies (no lucide-react icons)
 * - Static content only — no useState, no useEffect, no timers
 * - Minimal DOM nodes for fast paint
 * - No animations that delay First Contentful Paint
 */
export default function WeatherDecoy() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white" role="main">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-600 font-bold text-lg select-none">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            WeatherDaily
          </div>
          <span className="text-sm text-slate-500">{timeStr}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-6">
        {/* Main Card */}
        <section className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-lg mb-6">
          <p className="text-sky-100 text-sm mb-1">{dateStr}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">New York, NY</h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-7xl font-bold tracking-tighter">72°</span>
            <div>
              <p className="text-lg font-medium">Partly Cloudy</p>
              <p className="text-sky-200 text-sm">Feels like 74° • UV Index 6</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/20 text-sm">
            <div><span className="text-sky-200 block">Wind</span><span className="font-semibold">8 mph NW</span></div>
            <div><span className="text-sky-200 block">Humidity</span><span className="font-semibold">45%</span></div>
            <div><span className="text-sky-200 block">Rain</span><span className="font-semibold">0%</span></div>
          </div>
        </section>

        {/* Hourly */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 mb-6">
          <h2 className="font-bold text-slate-800 mb-4">Hourly Forecast</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 text-center text-sm">
            {[
              { t: 'Now', temp: '72°' },
              { t: '11AM', temp: '74°' },
              { t: '12PM', temp: '76°' },
              { t: '1PM', temp: '77°' },
              { t: '2PM', temp: '75°' },
              { t: '3PM', temp: '70°' },
              { t: '4PM', temp: '68°' },
              { t: '5PM', temp: '67°' },
            ].map((h) => (
              <div key={h.t} className="flex flex-col items-center min-w-[56px]">
                <span className="text-slate-500 text-xs">{h.t}</span>
                <span className="text-lg font-bold text-slate-800 mt-1">{h.temp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7-Day */}
        <section className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-bold text-slate-800 mb-4">7-Day Forecast</h2>
          <div className="space-y-3">
            {[
              { day: 'Today', hi: '77°', lo: '62°', cond: 'Partly Cloudy' },
              { day: 'Thu', hi: '80°', lo: '65°', cond: 'Sunny' },
              { day: 'Fri', hi: '72°', lo: '60°', cond: 'Rain Showers' },
              { day: 'Sat', hi: '70°', lo: '58°', cond: 'Mostly Cloudy' },
              { day: 'Sun', hi: '75°', lo: '60°', cond: 'Clear' },
              { day: 'Mon', hi: '76°', lo: '62°', cond: 'Partly Cloudy' },
              { day: 'Tue', hi: '68°', lo: '56°', cond: 'Thunderstorms' },
            ].map((d) => (
              <div key={d.day} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 text-sm">
                <span className="w-16 font-semibold text-slate-700">{d.day}</span>
                <span className="text-slate-500 flex-1 text-center">{d.cond}</span>
                <span className="font-bold text-slate-800 w-10 text-right">{d.hi}</span>
                <span className="text-slate-400 w-10 text-right">{d.lo}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-xs text-slate-400 mt-8 border-t border-slate-200">
        <p>Weather data by National Weather Service • © {now.getFullYear()} WeatherDaily</p>
      </footer>
    </div>
  );
}