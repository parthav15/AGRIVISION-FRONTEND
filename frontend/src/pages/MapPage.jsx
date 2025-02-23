import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import PunjabMap from '../components/Map/PunjabMap';
import Footer from '../components/HomePage/Footer';
import DistrictDataPanel from '../components/Map/DistrictDataPanel';
import { BASE_URL } from '../config';

const MapPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login-register');
    }
  }, [navigate]);

  const [selectedDistrict, setSelectedDistrict] = React.useState(null);
  const [selectedCrop, setSelectedCrop] = React.useState('Wheat');
  const [districtData, setDistrictData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const popularCrops = [
    'Wheat', 'Rice', 'Maize', 'Cotton', 
    'Sugarcane', 'Potato', 'Sunflower'
  ];

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    setSelectedDistrict(null);
  };

  const handleDistrictClick = async (district) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}crops/${district}/${selectedCrop}`
      );
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setSelectedDistrict(district);
      setDistrictData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Crop Selection Bar */}
      <div className="bg-green-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <h3 className="text-lg font-semibold text-green-700">
              Popular Crops in Punjab:
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularCrops.map((crop) => (
                <button
                  key={crop}
                  onClick={() => handleCropSelect(crop)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCrop === crop
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-white text-green-600 border border-green-200 hover:border-green-400'
                  }`}
                >
                  {crop}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        {!selectedDistrict && (
          <PunjabMap onDistrictClick={handleDistrictClick} />
        )}

        {selectedDistrict && (
          <DistrictDataPanel
            district={selectedDistrict}
            data={districtData}
            selectedCrop={selectedCrop}
            onClose={() => setSelectedDistrict(null)}
          />
        )}

        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
            <div className="text-green-700 text-xl font-semibold animate-pulse">
              Loading {selectedCrop} data for {selectedDistrict}...
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MapPage;