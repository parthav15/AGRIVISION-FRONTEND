import { motion } from 'framer-motion';
import { ChartBarIcon, UserGroupIcon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: "Precision Analytics",
    description: "AI-powered crop yield predictions with 95% accuracy using historical data patterns",
    icon: ChartBarIcon,
  },
  {
    title: "Real-Time Monitoring",
    description: "Live satellite data integration for up-to-date field analysis across Punjab",
    icon: GlobeAltIcon,
  },
  {
    title: "Farmer Community",
    description: "Connect with 50,000+ registered farmers for knowledge sharing and support",
    icon: UserGroupIcon,
  },
  {
    title: "Market Predictions",
    description: "Machine learning models forecasting crop prices with 85% accuracy",
    icon: CurrencyDollarIcon,
  }
];

const Feature2 = () => {
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
            Why Farmers Choose AgriVision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Revolutionizing agricultural decision-making through advanced technology and community-driven insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600">95%</div>
            <div className="text-gray-600">Prediction Accuracy</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600">50K+</div>
            <div className="text-gray-600">Active Farmers</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600">15+</div>
            <div className="text-gray-600">Crop Varieties</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature2;