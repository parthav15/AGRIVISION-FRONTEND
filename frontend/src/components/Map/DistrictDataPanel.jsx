import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DistrictDataPanel = ({ district, data, onClose, selectedCrop }) => {
  // Process API data for the chart
  const processChartData = () => {
    return data.map(entry => ({
      year: entry.year,
      yield: parseFloat(entry.yield_value),
      price: parseFloat(entry.market_price)
    }));
  };

  // Calculate averages
  const calculateAverages = () => {
    const totalYield = data.reduce((sum, entry) => sum + parseFloat(entry.yield_value), 0);
    const totalPrice = data.reduce((sum, entry) => sum + parseFloat(entry.market_price), 0);
    return {
      avgYield: (totalYield / data.length).toFixed(2),
      avgPrice: (totalPrice / data.length).toFixed(2)
    };
  };

  const { avgYield, avgPrice } = calculateAverages();
  const chartData = processChartData();

  return (
    <motion.div
      className="w-full h-screen flex justify-center items-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-[90%] h-[80vh] bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-green-700">
            {district} - {selectedCrop} Data Analysis
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-green-700 transition-colors"
          >
            ← Back to Map
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(80vh-80px)]">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Historical Trends</h3>
            <LineChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="yield"
                stroke="#16a34a"
                name="Yield (tons)"
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#15803d"
                name="Price (₹/ton)"
              />
            </LineChart>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Yield:</span>
                  <span className="font-bold text-green-700">{avgYield} tons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Price:</span>
                  <span className="font-bold text-green-700">₹{avgPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Data Points</h3>
              <div className="space-y-2">
                {data.slice(-5).reverse().map(entry => (
                  <div key={entry.id} className="flex justify-between items-center">
                    <span className="text-gray-600">{entry.year}:</span>
                    <div className="space-x-4">
                      <span className="text-green-700">{entry.yield_value} tons</span>
                      <span className="text-green-700">₹{entry.market_price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DistrictDataPanel;