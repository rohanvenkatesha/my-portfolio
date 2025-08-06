'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

type CoordinateWithName = {
  lat: number;
  lng: number;
  name: string;
};

type RideMapProps = {
  route: CoordinateWithName[];
};

function FitBounds({ route }: { route: CoordinateWithName[] }) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      const latLngs = route.map((point) => [point.lat, point.lng] as [number, number]);
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [route, map]);

  return null;
}

export default function RideMap({ route }: RideMapProps) {
  if (!route || route.length === 0) {
    return <div className="text-center text-white">No route data available</div>;
  }

  const center = [route[0].lat, route[0].lng] as [number, number];

  return (
    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={true}
      zoomControl={false}
      className="w-full h-full rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org">OSM</a>'
      />

      <Polyline
        positions={route.map((point) => [point.lat, point.lng])}
        color="#d40606ff"
        weight={4}
      />

      {route.map((point, idx) => (
        <Marker key={idx} position={[point.lat, point.lng]}>
          <Popup>
            <strong>{point.name}</strong>
            <br />
            Lat: {point.lat.toFixed(4)}, Lng: {point.lng.toFixed(4)}
          </Popup>
        </Marker>
      ))}

      <ZoomControl position="topright" />
      <FitBounds route={route} />
    </MapContainer>
  );
}
