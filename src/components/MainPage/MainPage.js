import React from 'react';

function HomePage() {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <img src="./assets/TranquilQuest.png" alt="main logo" className="mt-[-40px]" />
      <h1 className="text-orange-500 text-2xl font-bold mb-4">Peace and Wealth</h1>
      <p className="text-white text-lg mb-8">Embark on a Journey to Inner Peace</p>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">Courses</button>
    </div>
  );
}

export default HomePage;
