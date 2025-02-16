import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Get in Touch With AgriVision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about crop yields or market predictions? Our agricultural experts are here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Our Office</h4>
                  <p className="text-gray-600">Agricultural Complex,<br/>Ludhiana, Punjab 141004</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Farmers Helpline</h4>
                  <p className="text-gray-600">+91 98765 43210<br/>Mon-Sat: 8AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Email Support</h4>
                  <p className="text-gray-600">support@AgriVision.in<br/>response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-semibold text-green-700 mb-3">Crop Emergency?</h4>
              <p className="text-sm text-gray-600">
                For urgent crop-related issues, contact our 24/7 helpline:<br/>
                <span className="font-semibold">+91 98765 43211</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <UserIcon className="h-5 w-5 text-green-600 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-green-600 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneIcon className="h-5 w-5 text-green-600 absolute left-3 top-3" />
                  <input
                    type="tel"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
                >
                  <option value="">Select inquiry type</option>
                  <option>Crop Yield Prediction</option>
                  <option>Market Price Analysis</option>
                  <option>Technical Support</option>
                  <option>Community Forum Help</option>
                  <option>General Inquiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Describe your agricultural query..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;