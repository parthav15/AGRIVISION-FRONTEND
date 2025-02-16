import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import punjabGeoJSON from "../../assets/punjabgeo.json";
import { useState } from "react";

const PunjabMap = ({ onDistrictClick }) => {
    const [hoveredDistrict, setHoveredDistrict] = useState(null);

    const districtStyle = {
        fillColor: "#16a34a",
        weight: 2,
        opacity: 1,
        color: "#ffffff",
        fillOpacity: 0.7,
    };

    const highlightStyle = {
        fillColor: "#15803d",
        weight: 2,
        opacity: 1,
        color: "#ffffff",
        fillOpacity: 0.9,
    };

    const onEachDistrict = (district, layer) => {
        const districtName = district.properties.name;
        layer.bindTooltip(districtName, { permanent: false });

        layer.on({
            mouseover: () => {
                setHoveredDistrict(districtName);
                layer.setStyle(highlightStyle);
            },
            mouseout: () => {
                setHoveredDistrict(null);
                layer.setStyle(districtStyle);
            },
            click: () => {
                onDistrictClick(districtName);
            },
        });
    };

    return (
        <motion.div
            className="w-full h-screen flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <MapContainer
                center={[30.9, 75.85]}
                zoom={8}
                className="w-[90%] h-[80vh] rounded-xl shadow-lg"
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                maxBounds={[
                    [29.5, 73.8],
                    [32.5, 77]
                ]}
                maxBoundsViscosity={1.0}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />
                <GeoJSON data={punjabGeoJSON} style={districtStyle} onEachFeature={onEachDistrict} />
            </MapContainer>

            {hoveredDistrict && (
                <motion.div
                    className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {hoveredDistrict}
                </motion.div>
            )}
        </motion.div>
    );
};

export default PunjabMap;
