import React from "react";

const WhatsappFloatingButton = () => (
  <a
    href="https://wa.me/+905439430719"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp ile iletişime geç"
    className="fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300 animate-bounce hover:scale-110"
    style={{ boxShadow: '0 8px 32px 0 rgba(37, 211, 102, 0.3)' }}
  >
    <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32" className="text-white">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.11L4 29l7.13-2.33A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.56-1.5l-.4-.23-4.23 1.38 1.38-4.13-.26-.42A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
    </svg>
    <span className="sr-only">WhatsApp</span>
  </a>
);

export default WhatsappFloatingButton; 