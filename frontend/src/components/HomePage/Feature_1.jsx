import React from 'react';
import { motion } from 'framer-motion';

const Feature1 = () => {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-center text-green-700 mb-8"
            >
              AgriVision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-700"
            >
              A project that focuses on Map of Punjab, and by clicking every section we can view the Crop Yield of that area and also we can predict the market price of that area based on Historical Data.
            </motion.p>
          </div>
          <div className="md:order-1">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-700"
            >
              This project uses satellite data to predict crop yields and market prices. By using machine learning algorithms, we can provide accurate predictions and help farmers and policymakers make informed decisions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature1;

