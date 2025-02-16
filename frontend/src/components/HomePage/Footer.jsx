import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <GlobeAltIcon className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">AgriVision</span>
            </div>
            <p className="text-sm text-green-100">
              Empowering Punjab's farmers with AI-driven agricultural insights and community support since 2023.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Crop Map', 'Yield Predictions', 'Market Prices', 'Community Forum'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-green-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 mt-1" />
                <p className="text-sm text-green-100">
                  Agricultural Technology Park,<br />
                  Ludhiana, Punjab 141004
                </p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" />
                <a href="tel:+919876543210" className="text-green-100 hover:text-white">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5" />
                <a href="mailto:support@AgriVision.in" className="text-green-100 hover:text-white">
                  support@AgriVision.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
            <div className="border-t border-green-500 pt-4">
              <h4 className="text-sm font-semibold mb-2">Legal</h4>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-green-100 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-green-100 hover:text-white">Terms of Service</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-green-500 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-green-100 mb-2 md:mb-0">
              © 2023 AgriVision. All rights reserved.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-green-100 hover:text-white">Farmers Portal</a>
              <a href="#" className="text-green-100 hover:text-white">Government Schemes</a>
              <a href="#" className="text-green-100 hover:text-white">Weather Alerts</a>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm flex items-center mx-auto">
              <PhoneIcon className="h-4 w-4 mr-2" />
              24/7 Emergency Crop Support
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;