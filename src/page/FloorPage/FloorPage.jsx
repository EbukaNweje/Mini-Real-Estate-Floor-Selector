import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TowerList } from '../../components/Data';

const FloorPage = () => {
  const { tower } = useParams();
  const navigate = useNavigate();

  const selectedTower = TowerList.find(t => t.Title === tower);

  const handleClick = (floorName) => {
    navigate(`/${tower}/${floorName}`);
  };

  return (
    <main className="w-full">
      {/* Header */}
      <header
        className="w-full h-[30vh] flex flex-col items-center justify-center bg-gray-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${selectedTower?.imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-4xl font-bold">{tower}</h1>
        <p className="text-lg text-yellow-300 mt-2">Floor selection for {tower}</p>
      </header>

      {/* Floor Cards */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {selectedTower?.Floors?.map((floor) => (
          <article
            key={floor.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{tower} {floor.name}</h2>
            <p className="text-gray-700 mb-4">{floor.description}</p>
            <ul className="text-gray-700 text-xs flex flex-wrap gap-2 list-disc list-inside mb-4">
              {floor.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => handleClick(floor.name)}
            >
              View Floor
            </button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default FloorPage;
