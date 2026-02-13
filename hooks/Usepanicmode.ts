'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * SHARED PANIC MODE HOOK
 * 
 * Eliminates ~30 lines of duplicated code per page (7 pages = 210 lines saved)
 * Uses requestAnimationFrame for non-blocking DOM updates
 * Handles: double-ESC detection, storage clearing, URL masking
 */
export function usePanicMode() {
  const [panicMode, setPanicMode] = useState(false);

  const triggerPanic = useCallback(() => {
    requestAnimationFrame(() => {
      setPanicMode(true);
      if (typeof window !== 'undefined') {
        // Clear all session data
        try {
          sessionStorage.clear();
          localStorage.clear();
        } catch {
          // Storage might be unavailable — fail silently
        }
        // Disguise the page
        document.title = 'Weather Forecast — WeatherDaily';
        window.history.replaceState(null, '', '/weather');
      }
    });
  }, []);

  // Double-ESC shortcut listener
  useEffect(() => {
    let escCount = 0;
    let escTimer: ReturnType<typeof setTimeout>;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escCount++;
        if (escCount === 1) {
          escTimer = setTimeout(() => { escCount = 0; }, 800);
        }
        if (escCount >= 2) {
          clearTimeout(escTimer);
          escCount = 0;
          triggerPanic();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(escTimer);
    };
  }, [triggerPanic]);

  return { panicMode, triggerPanic };
}