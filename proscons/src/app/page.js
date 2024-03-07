'use client';
import React, { useState } from 'react';
import Popup from './components/insert-pros-cons';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <main className="h-screen flex items-center justify-center bg-zinc-900 flex-col gap-10">
      <button
        type="button"
        onClick={handleButtonClick}
        className="basis-1/8 w-96 h-32 bg-blue-300 rounded-md shadow-mg flex items-center justify-center cursor-pointer transition-all duratio n-105 hover:scale-105"
      >
        <p className="font-semibold text-lg">
          나의 장점
          <br />
          작성하기
        </p>
      </button>

      <button
        type="button"
        onClick={handleButtonClick}
        className="basis-1/8 w-96 h-32 bg-red-300 rounded-md shadow-mg flex items-center justify-center cursor-pointer transition-all duration-105 hover:scale-105"
      >
        <p className="font-semibold text-lg">
          나의 단점
          <br />
          작성하기
        </p>
      </button>

      {isPopupOpen && <Popup onClose={handlePopupClose} />}
    </main>
  );
}
