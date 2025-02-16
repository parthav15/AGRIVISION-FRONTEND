import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, HeartIcon, ArrowPathRoundedSquareIcon, ShareIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const forumPosts = [
  {
    id: 1,
    title: "Best practices for wheat cultivation in dry seasons",
    author: "Harpreet Singh",
    timestamp: "2h ago",
    content: "Sharing my experience with drought-resistant wheat varieties...",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "Gurdeep Kaur",
        content: "Great insights! Have you tried the new irrigation technique?",
        timestamp: "1h ago",
        replies: [
          {
            id: 1,
            author: "Harpreet Singh",
            content: "Yes, tried drip irrigation last season with 20% better yield!",
            timestamp: "30m ago"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Organic pest control solutions for rice fields",
    author: "Rajinder Kumar",
    timestamp: "5h ago",
    content: "Discovering neem-based solutions that improved our crop health...",
    likes: 28,
    comments: [
      {
        id: 1,
        author: "Amandeep Kaur",
        content: "How often should we apply these solutions?",
        timestamp: "3h ago"
      }
    ]
  }
];

const Feature3 = () => {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Farmer's Community Hub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect, Share & Learn with Punjab's Largest Agricultural Community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Forum Posts Column */}
          <div className="space-y-6">
            {forumPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <UserCircleIcon className="h-10 w-10 text-green-600" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{post.author} • {post.timestamp}</p>
                    <p className="text-gray-700 mt-3">{post.content}</p>
                    
                    {/* Interaction Buttons */}
                    <div className="flex items-center gap-6 mt-4">
                      <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
                        <HeartIcon className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                        <span>{post.comments.length}</span>
                      </button>
                      <button className="text-gray-600 hover:text-green-600">
                        <ShareIcon className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-4 space-y-4 border-t pt-4">
                      {post.comments.map(comment => (
                        <div key={comment.id} className="ml-4 border-l-2 border-green-100 pl-4">
                          <div className="flex items-center gap-3">
                            <UserCircleIcon className="h-7 w-7 text-green-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-800">{comment.author}</p>
                              <p className="text-sm text-gray-600">{comment.timestamp}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 mt-2 ml-10">{comment.content}</p>
                          
                          {/* Replies */}
                          {comment.replies?.map(reply => (
                            <div key={reply.id} className="ml-8 mt-3 border-l-2 border-green-100 pl-4">
                              <div className="flex items-center gap-3">
                                <UserCircleIcon className="h-6 w-6 text-green-600" />
                                <div>
                                  <p className="text-sm font-medium text-gray-800">{reply.author}</p>
                                  <p className="text-sm text-gray-600">{reply.timestamp}</p>
                                </div>
                              </div>
                              <p className="text-gray-700 mt-2 ml-8">{reply.content}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Features Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Start New Discussion</h3>
            </div>
            
            <textarea
              className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Share your agricultural insights or ask a question..."
            />
            
            <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <ArrowPathRoundedSquareIcon className="h-5 w-5" />
              Post to Community
            </button>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Trending Topics</h4>
              <div className="space-y-3">
                {['Organic Farming', 'Crop Rotation', 'Soil Health', 'Market Trends'].map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="h-2 w-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;