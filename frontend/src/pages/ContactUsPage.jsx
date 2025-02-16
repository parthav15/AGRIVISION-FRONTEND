import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Connect With Agricultural Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get personalized support for crop management, market trends, and farming techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            whileHover={{ scale: 1.005 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="relative">
                <textarea
                  required
                  rows="4"
                  placeholder="How can we assist with your agricultural needs?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Office</h3>
                  <p className="text-gray-600">
                    Agricultural Technology Park<br />
                    Ludhiana, Punjab 141004
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Helpline Numbers</h3>
                  <p className="text-gray-600">
                    General Support: +91 98765 43210<br />
                    Emergency Crop Support: +91 98765 43211
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <ClockIcon className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h3>
                  <p className="text-gray-600">
                    Mon-Sat: 8:00 AM - 7:00 PM<br />
                    Sunday: Emergency Support Only
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.234567890123!2d75.8527314154567!3d30.90123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345678%3A0x9bce5b234567890!2sAgricultural%20Technology%20Park!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </section>
  );
};

export default ContactUs;
