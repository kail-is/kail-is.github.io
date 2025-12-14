import React, { useEffect } from 'react';

declare global {
  interface Window {
    UnicornStudio: {
      init: () => void;
      isInitialized: boolean;
    };
  }
}

export const Background: React.FC = () => {
  useEffect(() => {
    // Attempt to initialize Unicorn Studio if it hasn't auto-initialized
    const checkAndInit = () => {
      if (window.UnicornStudio) {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
        }
      }
    };

    // Small delay to ensure DOM is ready for the script
    const timer = setTimeout(checkAndInit, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* The snippet provided by the user, adapted for full screen */}
      <div 
        data-us-project="P8kfJYRk5QylH2VHGWeC" 
        style={{ width: '100%', height: '100%' }}
        className="opacity-60"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none"></div>
    </div>
  );
};
