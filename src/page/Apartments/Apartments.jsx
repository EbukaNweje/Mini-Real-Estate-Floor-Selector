import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TowerList } from '../../components/Data';
import {
  Ruler,
  Home,
  BedDouble,
  Bath,
  Wallet,
  X,
  CheckCircle
} from 'lucide-react';

const Apartments = () => {
  const { floor, tower } = useParams();
  const selectedTower = TowerList.find(t => t.Title === tower);
  const selectedFloor = selectedTower?.Floors?.find(f => f.name === floor);
  const apartments = selectedFloor?.apartments || [];

  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <main className="w-full">
      {/* Header */}
      <header className="w-full h-[30vh] flex flex-col items-center justify-center bg-blue-950">
        <h1 className="text-4xl font-bold text-white">{floor}</h1>
        <p className="text-white mt-2 text-lg">Apartments in {tower}</p>
      </header>

      {/* Apartment Details Modal */}
      {selectedApartment && (
        <section className="w-full px-4 py-6 animate-fadeIn">
          <article className="mx-auto bg-white rounded-lg shadow-lg p-6 border border-blue-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              {selectedApartment.name}
            </h2>
            <img
              src={selectedApartment.thumbnailImg}
              alt={`Layout of ${selectedApartment.name}`}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-blue-500" />
                <span><strong>Size:</strong> {selectedApartment.size}</span>
              </li>
              <li className="flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-500" />
                <span><strong>Type:</strong> {selectedApartment.unitType || 'N/A'}</span>
              </li>
              <li className="flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-blue-500" />
                <span><strong>Bedrooms:</strong> {selectedApartment.bedrooms}</span>
              </li>
              <li className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-blue-500" />
                <span><strong>Bathrooms:</strong> {selectedApartment.bathrooms}</span>
              </li>
              <li className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-blue-500" />
                <span><strong>Price:</strong> {selectedApartment.price}</span>
              </li>
            </ul>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setSelectedApartment(null)}
                className="flex items-center gap-2 bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
              >
                <X className="w-4 h-4" />
                Close
              </button>
              <button
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                <CheckCircle className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </article>
        </section>
      )}

      {/* Apartment Grid */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {apartments.length > 0 ? (
          apartments.map((apartment) => (
            <article
              key={apartment.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedApartment(apartment)}
            >
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={apartment.thumbnailImg}
                  alt={apartment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-600" />
                {apartment.name}
              </h3>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <Ruler className="w-4 h-4" /> Size: {apartment.size}
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <Home className="w-4 h-4" /> Type: {apartment.unitType || 'N/A'}
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <BedDouble className="w-4 h-4" /> {apartment.bedrooms} Bed
                <Bath className="w-4 h-4 ml-3" /> {apartment.bathrooms} Bath
              </p>
            </article>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">No apartments found for this floor.</p>
        )}
      </section>
    </main>
  );
};

export default Apartments;
