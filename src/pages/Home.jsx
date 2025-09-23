
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Award, Truck, ArrowLeft, CheckCircle, Soup, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const slideshowImages = [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a458bfbf_IMG_6678.jpeg', // עלי גפן (ראשון!)
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3a1a1de5_IMG_6664.jpg', // פלפלים
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ef01f432_IMG_6674.jpg', // כרוב
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26545758d_IMG_6677.jpg', // קישוא
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0d74ec158_IMG_6665.jpeg', // גזר
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a248124ff_IMG_6673.jpg'  // סלק
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
      const timer = setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
              prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
          );
      }, 5000); // Change image every 5 seconds
      return () => clearTimeout(timer);
  }, [currentImageIndex, slideshowImages.length]);

  const features = [
    {
      icon: Soup,
      title: "טעם של בית",
      description: "מתכונים שעוברים מדור לדור עם חומרי הגלם הטריים ביותר"
    },
    {
      icon: Award,
      title: "איכות ללא פשרות", 
      description: "פיקוח קפדני על כל מנה, מהמטבח ועד אליכם"
    },
    {
      icon: Truck,
      title: "משלוחים עד הבית",
      description: "שירות משלוחים מהיר ואמין לאזור ירושלים והסביבה"
    }
  ];

  const stats = [
    { number: "20+", text: "שנות ניסיון" },
    { number: "1000+", text: "לקוחות קבועים" },
    { number: "100%", text: "רכיבים טריים" },
    { number: "טבעוני", text: "וללא גלוטן" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slideshowImages[currentImageIndex]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              מבשלים בשבילך
              <span className="block text-3xl md:text-4xl text-yellow-300 font-medium mt-2">
                אוכל ביתי מוכן באהבה
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-50 mb-8 max-w-3xl mx-auto leading-relaxed">
              מפעל בוטיק לאוכל ביתי מוכן. ממולאים, מרקים, סלטים ועוד.
              <br />
              <span className="text-lg text-yellow-300">הטעם של פעם, הנוחות של היום.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to={createPageUrl("Products")}>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  התפריט שלנו
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-transparent border border-yellow-300 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                  צור קשר
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-black/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-yellow-300 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              אנחנו מבשלים עם הלב, כדי שאתם תוכלו ליהנות מאוכל מזין וטעים בלי מאמץ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                הסיפור שלנו
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                "מבשלים בשבילך" נולד מתוך אהבה גדולה לאוכל ביתי, טרי ומנחם. 
                הכל התחיל במטבח הקטן של המשפחה, עם מתכונים סודיים שעברו מדור לדור. 
                היום, אנחנו מפעל בוטיק שמביא את הטעמים האותנטיים והאהובים לצלחת שלכם.
              </p>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                אנו מאמינים שאין תחליף לחומרי גלם איכותיים ולבישול איטי ומלא תשומת לב. 
                כל מנה שיוצאת מהמטבח שלנו מוכנה באהבה, כדי להבטיח שתקבלו את הטעם הביתי והמפנק שאתם אוהבים.
              </p>
              
              <div className="space-y-4">
                {[
                  "שימוש בחומרי גלם טריים יום-יום",
                  "בישול מסורתי ואותנטי",
                  "ללא חומרים משמרים וצבעי מאכל",
                  "שירות אישי וחם לכל לקוח"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a458bfbf_IMG_6678.jpeg')" }}
                aria-label="עלי גפן ממולאים של מבשלים בשבילך"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            מוכנים להזמין?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            הצטרפו למאות לקוחות מרוצים ותיהנו מאוכל ביתי טרי וטעים
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-green-700 hover:bg-yellow-100 px-8 py-4 text-lg rounded-full shadow-lg">
              צור קשר עכשיו
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
