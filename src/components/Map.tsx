
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [73.0297, 19.0422], // NMIMS Navi Mumbai coordinates
      zoom: 15,
      pitch: 45,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([73.0297, 19.0422])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white text-center mb-16"
      >
        Event Location
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="relative h-[600px] rounded-xl pixel-corners overflow-hidden">
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute inset-0 pointer-events-none border border-hackathon-yellow/20 pixel-corners" />
        </div>
      </motion.div>
    </section>
  );
};
