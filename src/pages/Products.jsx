
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Truck, Phone, Soup, WheatOff, Vegan } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "פלפלים ממולאים",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3a1a1de5_IMG_6664.jpg",
      description: "פלפלים גדולים ומתוקים במילוי אורז ועשבי תיבול ברוטב עגבניות עשיר.",
      features: ["טעם ביתי", "טבעוני", "ללא גלוטן"],
      season: "כל השנה",
      popular: true
    },
    {
      id: 2,
      name: "עלי גפן ממולאים",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a458bfbf_IMG_6678.jpeg",
      description: "עלי גפן רכים במילוי אורז ועשבי תיבול ברוטב לימוני.",
      features: ["עבודת יד", "טבעוני", "ללא גלוטן"],
      season: "כל השנה",
      popular: true
    },
    {
      id: 3,
      name: "כרוב ממולא",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ef01f432_IMG_6674.jpg",
      description: "עלי כרוב ממולאים באורז ועשבי תיבול, מנה משביעה ומנחמת.",
      features: ["רך ונימוח", "טבעוני", "ללא גלוטן"],
      season: "כל השנה",
    },
    {
      id: 4,
      name: "קישוא ממולא",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26545758d_IMG_6677.jpg",
      description: "קישואים טריים ממולאים באורז ועשבי תיבול.",
      features: ["טעם עדין", "טבעוני", "ללא גלוטן"],
      season: "כל השנה",
    },
    {
      id: 6,
      name: "גזר ממולא",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0d74ec158_IMG_6665.jpeg",
      description: "גזר מתקתק ממולא באורז ופירות יבשים, מנה ייחודית.",
      features: ["מתיקות מעודנת", "טבעוני", "ללא גלוטן"],
      season: "חגים ואירועים",
    },
    {
      id: 7,
      name: "סלק ממולא",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a248124ff_IMG_6673.jpg",
      description: "סלק אדמדם במילוי אורז ועשבי תיבול, בריא ומפתיע.",
      features: ["צבע עז", "טבעוני", "ללא גלוטן"],
      season: "כל השנה",
    },
    {
      id: 8,
      name: "בצל ממולא",
      category: "ממולאים",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68519fd70438cbcb17ff863d/df670b77f_IMG_6672.jpg",
      description: "בצל זהוב ומתוק ממולא באורז ועשבי תיבול, מבושל ברוטב עשיר.",
      features: ["טעם עשיר", "טבעוני", "ללא גלוטן"],
      season: "כל השנה",
      popular: false
    }
  ];

  const categories = ["all", "ממולאים"];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">התפריט שלנו</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            מגוון עשיר של מנות ביתיות טריות ואיכותיות, מהמטבח שלנו ישר אליכם
          </p>
        </div>
      </section>

      {/* Vegan Friendly & Gluten Free Section */}
      <section className="py-12 bg-white border-b-2 border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">100% טבעוני וללא גלוטן</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                כל המנות במפעל שלנו מוכנות בצורה טבעונית לחלוטין וללא גלוטן, 
                כדי שכל אחד יוכל ליהנות מהטעמים הנפלאים שלנו בביטחון מלא
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    : "border-orange-500 text-orange-600 hover:bg-orange-100"
                }`}
              >
                {category === "all" ? "כל המנות" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-2 border-yellow-200 overflow-hidden bg-white rounded-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      פופולרי
                    </Badge>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-white/90 text-stone-700 border-yellow-300">
                      {product.season}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{product.name}</h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-stone-700">
                        {feature === 'ללא גלוטן' ? (
                          <WheatOff className="w-4 h-4 text-green-600" />
                        ) : feature === 'טבעוני' ? (
                          <Vegan className="w-4 h-4 text-green-600" />
                        ) : (
                          <Soup className="w-4 h-4 text-orange-500" />
                        )}
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-300">
                      <Truck className="w-3 h-3 mr-1" />
                      משלוח מהיר
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מעוניינים להזמין?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            צרו קשר עכשיו לקבלת התפריט המלא והצעת מחיר מותאמת אישית
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-green-700 hover:bg-yellow-100 px-8 py-4 text-lg rounded-full">
              <Phone className="ml-2 w-5 h-5" />
              ליצירת קשר והזמנות
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
