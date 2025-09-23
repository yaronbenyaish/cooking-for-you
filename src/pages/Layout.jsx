

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);

  const logoImages = [
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3a1a1de5_IMG_6664.jpg',
      alt: 'פלפלים ממולאים',
      title: 'פלפלים ממולאים',
      border: 'border-yellow-300'
    },
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a458bfbf_IMG_6678.jpeg',
      alt: 'עלי גפן ממולאים',
      title: 'עלי גפן ממולאים',
      border: 'border-green-300'
    },
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ef01f432_IMG_6674.jpg',
      alt: 'כרוב ממולא',
      title: 'כרוב ממולא',
      border: 'border-green-300'
    },
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26545758d_IMG_6677.jpg',
      alt: 'קישוא ממולא',
      title: 'קישוא ממולא',
      border: 'border-green-300'
    },
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0d74ec158_IMG_6665.jpeg',
      alt: 'גזר ממולא',
      title: 'גזר ממולא',
      border: 'border-orange-300'
    },
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a248124ff_IMG_6673.jpg',
      alt: 'סלק ממולא',
      title: 'סלק ממולא',
      border: 'border-purple-300'
    },
    {
      src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68519fd70438cbcb17ff863d/df670b77f_IMG_6672.jpg',
      alt: 'בצל ממולא',
      title: 'בצל ממולא',
      border: 'border-red-300'
    }
  ];

  const navigationItems = [
    { name: "דף הבית", path: createPageUrl("Home") },
    { name: "התפריט שלנו", path: createPageUrl("Products") },
    { name: "צור קשר", path: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap');
        
        :root {
          --font-primary: 'Assistant', 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        
        * {
          font-family: var(--font-primary) !important;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-primary) !important;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        
        .font-bold {
          font-weight: 700 !important;
        }
        
        .font-semibold {
          font-weight: 600 !important;
        }
        
        .font-medium {
          font-weight: 500 !important;
        }
        
        body {
          font-family: var(--font-primary) !important;
          font-weight: 400;
          line-height: 1.7;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b-2 border-yellow-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="flex gap-1 md:gap-2 flex-wrap max-w-[200px] md:max-w-none">
                {logoImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImage(image);
                    }}
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${image.border} hover:scale-110 cursor-pointer flex-shrink-0`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg md:text-2xl font-bold text-stone-800 truncate">מבשלים בשבילך</h1>
                <p className="text-xs md:text-sm text-orange-600 font-medium">אוכל ביתי באהבה</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-semibold ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                      : "text-stone-700 hover:bg-yellow-100 hover:text-stone-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button className="p-2 rounded-lg text-stone-700 hover:bg-yellow-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden bg-white border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-4 py-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 font-medium ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "text-stone-700 hover:bg-yellow-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-4 text-center">
                  {selectedImage.title}
                </h3>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3a1a1de5_IMG_6664.jpg" 
                  alt="לוגו מבשלים בשבילך"
                  className="w-10 h-10 rounded-full object-cover border border-yellow-300"
                />
                <h3 className="text-xl font-bold">מבשלים בשבילך</h3>
              </div>
              <p className="text-stone-300 leading-relaxed font-medium">
                מפעל בוטיק לאוכל ביתי טרי ואיכותי. 
                מסורת של טעם ואיכות, עם המתכונים של אמא.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-300">התפריט שלנו</h4>
              <ul className="space-y-2 text-stone-300 font-medium">
                <li>• ממולאים (פלפלים, עלי גפן ועוד)</li>
                <li>• כרובית, קובה ותבשילי ירקות</li>
                <li>• מרקים חמים ומנחמים</li>
                <li>• סלטי הבית הטריים שלנו</li>
                <li>• ועוד הרבה הפתעות טבעוניות</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-300">צור קשר</h4>
              <div className="space-y-3 text-stone-300 font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>נייד: 050-3340490</span>
                </div>
                 <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>נייח: 02-5440441</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>alegefen@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span>אופירה 17, מישור אדומים</span>
                </div>
                {/* Waze button */}
                <a
                  href="https://waze.com/ul?q=%D7%90%D7%95%D7%A4%D7%99%D7%A8%D7%94%2017%2C%20%D7%9E%D7%99%D7%A9%D7%95%D7%A8%20%D7%90%D7%93%D7%95%D7%9E%D7%99%D7%9D&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-stone-900 rounded-full transition-colors duration-300 font-semibold shadow-md mt-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>נווט בוייז</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p className="font-medium">&copy; 2024 מבשלים בשבילך. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

