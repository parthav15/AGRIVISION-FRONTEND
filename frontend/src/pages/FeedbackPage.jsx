import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleLeftEllipsisIcon, UserIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="min-h-screen bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Share Your Agricultural Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us improve our services by sharing your feedback about crop yields, market prices, and farming practices
            </p>
          </div>

          {/* Feedback Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            whileHover={{ scale: 1.005 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-center p-8"
              >
                <div className="text-green-600 text-6xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Thank you for your feedback!
                </h3>
                <p className="text-gray-600">
                  Your insights help us serve the farming community better
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you rate your experience?
                  </label>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-8 w-8 cursor-pointer ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                {/* Name Input */}
                <div className="relative">
                  <UserIcon className="h-5 w-5 text-green-600 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-green-600 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Feedback Input */}
                <div className="relative">
                  <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-green-600 absolute left-3 top-3" />
                  <textarea
                    required
                    rows="4"
                    placeholder="Share your agricultural feedback..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-4 bg-green-50 rounded-lg">
              <MapPinIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
              <p className="text-gray-600">Agricultural Complex, Ludhiana</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <EnvelopeIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Email Support</h3>
              <p className="text-gray-600">feedback@AgriVision.in</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">Community Forum</h3>
              <p className="text-gray-600">Connect with 50k+ farmers</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
