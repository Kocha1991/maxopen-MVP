import { useRef, useEffect } from 'react';

export function useCalendly(parentSelector, calendlyUrl) {
  const scriptLoaded = useRef(false);
  const calendarInitialized = useRef(false);

  const initCalendly = () => {
    if (!calendarInitialized.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: document.querySelector(parentSelector),
      });
      calendarInitialized.current = true;
    }
  };

  useEffect(() => {
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      script.onload = () => {
        scriptLoaded.current = true;
        initCalendly();
      };

      document.body.appendChild(script);
    } else {
      initCalendly();
    }
  }, []);
}
