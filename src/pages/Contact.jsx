
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Truck, Users, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real application, you would send the formData to a backend here.
    // For this example, we just simulate a submission.
    setTimeout(() => {
      setIsSubmitted(false);
      // Optionally reset form data here
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "טלפון",
      details: ["נייד: 050-3340490", "נייח: 02-5440441"],
      description: "זמינים לשירותכם בימים א-ה 8:00-17:00"
    },
    {
      icon: Mail,
      title: "אימייל",
      details: ["alegefen@gmail.com"], // Updated email address
      description: "מענה תוך 24 שעות"
    },
    {
      icon: MapPin,
      title: "כתובת",
      details: ["אופירה 17, מישור אדומים"],
      description: "איסוף עצמי בתיאום מראש",
      waze: true // Added for Waze link
    },
    {
      icon: Clock,
      title: "שעות פעילות",
      details: ["ימים א-ה: 06:00-17:00", "יום ו: 06:00-14:00"],
      description: "סגורים בשבת וחגי ישראל"
    }
  ];

  const services = [ // This array is defined but not used in the current render method
    {
      icon: Truck,
      title: "משלוחים ארציים",
      description: "רשת הפצה מקצועית לכל הארץ עם שמירה על שרשרת הקור"
    },
    {
      icon: Users,
      title: "שירות אישי",
      description: "ייעוץ מקצועי והתאמה אישית לצרכים של כל לקוח"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">צור קשר</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto">
            נשמח לענות על כל שאלה ולהציע לכם את הפתרון המושלם לצרכים שלכם
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border-2 border-orange-200 bg-orange-500">
                <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
                  <CardTitle className="text-2xl font-bold text-center text-white">
                    שלחו לנו הודעה
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 bg-orange-500">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">תודה רבה!</h3>
                      <p className="text-orange-100">ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם האפשרי.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            שם מלא *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="border-orange-200 bg-white text-gray-900"
                            placeholder="השם שלכם"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            טלפון *
                          </label>
                          <Input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="border-orange-200 bg-white text-gray-900"
                            placeholder="050-123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          אימייל
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-orange-200 bg-white text-gray-900"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          שם החברה/עסק
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="border-orange-200 bg-white text-gray-900"
                          placeholder="שם החברה שלכם"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          הודעה *
                        </label>
                        <Textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="border-orange-200 bg-white text-gray-900"
                          placeholder="ספרו לנו על הצרכים שלכם..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-white text-orange-600 hover:bg-orange-50 text-lg py-3 font-bold"
                      >
                        שלח הודעה
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">פרטי התקשרות</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-2 border-orange-200 bg-orange-500/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-orange-100 font-medium mb-1">{detail}</p>
                            ))}
                            <p className="text-sm text-orange-200 mt-2">{info.description}</p>
                            {info.waze && (
                              <a 
                                href="https://waze.com/ul/h9bce32qve"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium"
                              >
                                <MapPin className="w-4 h-4" />
                                פתח בוייז: "מבשלים בשבילך מעלה אדומים"
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <Card className="border-2 border-orange-200 bg-orange-500/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    המיקום שלנו
                  </h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 text-center">
                    <MapPin className="w-12 h-12 text-white mx-auto mb-3" />
                    <p className="text-white font-medium">אופירה 17, מישור אדומים</p>
                    <p className="text-orange-100 text-sm mt-2">
                      איסוף עצמי בתיאום מראש.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
