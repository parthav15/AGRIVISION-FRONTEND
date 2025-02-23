import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="ml-2 text-2xl font-bold text-green-800 font-serif">
              AgriVision
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/map"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Crop Map
            </Link>
            <Link
              to="/community"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Community
            </Link>
            <Link
              to="/feedback"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Feedback
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Call to Action Button */}
          <Link to="/login-register" className="hidden md:flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
            Login/Register
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
