import { motion } from 'framer-motion';
import { StarIcon, UserCircleIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: "Harpreet Singh",
    role: "Wheat Farmer, Ludhiana",
    text: "AgriVision's yield predictions helped me increase my harvest by 20% last season. The community support is exceptional!",
    rating: 5
  },
  {
    id: 2,
    name: "Gurdeep Kaur",
    role: "Organic Farmer, Amritsar",
    text: "The market price predictions are incredibly accurate. It's transformed how we plan our crop rotations.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Rajinder Sharma",
    role: "Agricultural Officer",
    text: "The interactive Punjab map with real-time data is a game-changer for regional agricultural planning.",
    rating: 5
  }
];

const Feature4 = () => {
  return (
    <section className="relative py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Farmer Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community of 50,000+ farmers transforming agriculture in Punjab
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <UserCircleIcon className="h-12 w-12 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 relative pl-6">
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-green-200 absolute -left-1 top-0" />
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature4;