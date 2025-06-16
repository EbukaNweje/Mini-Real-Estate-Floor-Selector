import React, { useEffect, useState } from 'react';
import { TowerList } from '../../components/Data';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Card = () => {
  const [loadingTower, setLoadingTower] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoadingTower(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (towerTitle) => {
    navigate(`/${towerTitle}`);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Available Towers</h1>

        {!loadingTower ? (
          <div className="text-center text-lg text-gray-600"><ClipLoader /></div>
        ) : (
          <div className="flex flex-wrap justify-center gap-10">
            {TowerList.map((tower) => (
              <article
                key={tower.id}
                className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full hover:shadow-xl transition duration-300"
              >
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={tower.imgSrc}
                    alt={tower.Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{tower.Title}</h2>
                <p className="text-gray-600 mb-4">{tower.Description}</p>
                <button
                  onClick={() => handleClick(tower.Title)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  View Tower
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Card;
