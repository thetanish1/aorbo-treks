import React from 'react';
import { motion } from 'framer-motion';

const globeKeyframes = `
@keyframes rotateMeridian {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
@keyframes spinDash {
  0% { stroke-dashoffset: 400; }
  100% { stroke-dashoffset: 0; }
}
@keyframes pulsePoint {
  0%, 100% { opacity: 1; r: 4; }
  50% { opacity: 0.4; r: 6; }
}
@keyframes arcDraw {
  0% { stroke-dashoffset: 300; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes spinMeridian {
  from { transform: rotate(0deg); transform-origin: 100px 100px; }
  to { transform: rotate(360deg); transform-origin: 100px 100px; }
}
`;

// Convert lat/lng to SVG x/y on a 200x200 circle (radius=90, center=100,100)
function latLngToXY(lat: number, lng: number, cx = 100, cy = 100, r = 86): { x: number; y: number } {
  // Simple equirectangular projection
  const lngNorm = (lng - 78) / 50; // center around India's longitude ~78
  const latNorm = (lat - 22) / 30; // center around India's latitude ~22
  const x = cx + lngNorm * r * 0.9;
  const y = cy - latNorm * r * 0.6;
  return { x, y };
}

const cities = [
  { name: 'Hyderabad', lat: 17.4, lng: 78.5 },
  { name: 'Delhi', lat: 28.6, lng: 77.2 },
  { name: 'Manali', lat: 32.2, lng: 77.1 },
  { name: 'Leh', lat: 34.2, lng: 77.6 },
  { name: 'Kedarkantha', lat: 31.0, lng: 78.2 },
  { name: 'Darjeeling', lat: 27.0, lng: 88.3 },
  { name: 'Munnar', lat: 10.1, lng: 77.1 },
];

const arcPairs = [
  [0, 1],
  [1, 2],
  [1, 3],
  [0, 4],
  [0, 5],
];

export const AnimatedGlobe: React.FC = () => {
  const points = cities.map((c) => latLngToXY(c.lat, c.lng));

  return (
    <>
      <style>{globeKeyframes}</style>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        {/* Globe Container */}
        <div
          className="relative flex items-center justify-center bg-slate-900 rounded-2xl"
          style={{
            width: 280,
            height: 280,
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16,185,129,0.15)',
          }}
        >
          {/* Glowing ring */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 60px rgba(16, 185, 129, 0.08)',
            }}
          />

          <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
            {/* Outer globe circle */}
            <circle
              cx="100"
              cy="100"
              r="88"
              fill="rgba(15,23,42,0.6)"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />

            {/* Latitude lines */}
            {[-30, -15, 0, 15, 30].map((lat, i) => {
              const y = 100 - (lat / 60) * 88;
              const halfWidth = Math.sqrt(Math.max(0, 88 * 88 - (y - 100) * (y - 100)));
              return (
                <ellipse
                  key={i}
                  cx="100"
                  cy={y}
                  rx={halfWidth}
                  ry={halfWidth * 0.18}
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.6"
                />
              );
            })}

            {/* Rotating dashed meridian */}
            <ellipse
              cx="100"
              cy="100"
              rx="88"
              ry="22"
              fill="none"
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity="0.35"
              strokeDasharray="6 4"
              style={{
                animation: 'spinMeridian 10s linear infinite',
                transformOrigin: '100px 100px',
              }}
            />

            {/* Second rotating meridian at different angle */}
            <ellipse
              cx="100"
              cy="100"
              rx="88"
              ry="30"
              fill="none"
              stroke="#6366f1"
              strokeWidth="0.8"
              strokeOpacity="0.2"
              strokeDasharray="4 6"
              style={{
                animation: 'spinMeridian 16s linear infinite reverse',
                transformOrigin: '100px 100px',
              }}
            />

            {/* Animated arcs between cities */}
            {arcPairs.map(([a, b], i) => {
              const p1 = points[a];
              const p2 = points[b];
              const mx = (p1.x + p2.x) / 2;
              const my = (p1.y + p2.y) / 2 - 20;
              const d = `M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`;
              return (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  strokeDasharray="300"
                  style={{
                    animation: `arcDraw 4s ease-in-out ${i * 0.8}s infinite`,
                  }}
                />
              );
            })}

            {/* City dots */}
            {points.map((p, i) => (
              <g key={i}>
                {/* Outer pulse ring */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="8"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  style={{
                    animation: `pulsePoint 2s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
                {/* Inner dot */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill="#10b981"
                  style={{
                    animation: `pulsePoint 2s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              </g>
            ))}

            {/* City labels for key cities */}
            <text x={points[0].x + 6} y={points[0].y + 4} fontSize="7" fill="#6ee7b7" fontWeight="600">
              HYD
            </text>
            <text x={points[1].x + 5} y={points[1].y - 5} fontSize="7" fill="#6ee7b7" fontWeight="600">
              DEL
            </text>
            <text x={points[3].x + 5} y={points[3].y - 4} fontSize="7" fill="#6ee7b7" fontWeight="600">
              LEH
            </text>
          </svg>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-slate-900">Trek routes across India</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Connecting trekkers from Hyderabad to the peaks of India
          </p>
        </div>
      </motion.div>
    </>
  );
};
