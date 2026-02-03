import React from 'react';
import { Sun, CloudRain, Wind } from 'lucide-react';

/**
 * WeatherDecoy.tsx
 * Esta página simula ser un sitio de clima genérico.
 * Se activa cuando el usuario presiona el Botón de Pánico.
 * No tiene navegación de regreso para proteger al usuario.
 */
export default function WeatherDecoy() {
  return (
    <div className="min-h-screen bg-blue-50 font-sans text-gray-700">
      {/* Fake Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">WeatherDaily</h1>
        <div className="flex space-x-4 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-blue-600">Maps</span>
          <span className="cursor-pointer hover:text-blue-600">Radar</span>
          <span className="cursor-pointer hover:text-blue-600">News</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        {/* Main Weather Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">New York, NY</h2>
              <p className="text-gray-500">Tuesday, 10:00 AM</p>
              <div className="mt-4 text-6xl font-light text-gray-800 flex items-center">
                72° <span className="text-lg ml-2 text-gray-400">F</span>
              </div>
              <p className="mt-2 text-blue-500 font-medium">Partly Cloudy</p>
            </div>
            <Sun size={100} className="text-yellow-400" />
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <CloudRain className="text-blue-400 mb-2" size={32} />
            <span className="font-bold text-gray-700">Humidity</span>
            <span className="text-xl">45%</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Wind className="text-gray-400 mb-2" size={32} />
            <span className="font-bold text-gray-700">Wind</span>
            <span className="text-xl">12 mph NW</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Sun className="text-orange-400 mb-2" size={32} />
            <span className="font-bold text-gray-700">UV Index</span>
            <span className="text-xl">Moderate (4)</span>
          </div>
        </div>

        {/* Filler Content to look realistic */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Weekly Forecast</h3>
            <div className="space-y-2">
                <div className="flex justify-between border-b py-2"><span>Wednesday</span><span>75° / 60°</span></div>
                <div className="flex justify-between border-b py-2"><span>Thursday</span><span>70° / 58°</span></div>
                <div className="flex justify-between border-b py-2"><span>Friday</span><span>68° / 55°</span></div>
            </div>
        </div>
      </main>
    </div>
  );
}