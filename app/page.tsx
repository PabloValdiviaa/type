"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "Este es el texto que se mostrará progresivamente.";
  const [visibleChars, setVisibleChars] = useState(1);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const handleKeyPress = () => {
      if (currentText.length < text.length) {
        setCurrentText(text.slice(0, currentText.length + visibleChars));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentText, visibleChars]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">Presiona cualquier tecla para escribir</h1>
      <p className="text-lg font-mono border-b-2 border-white pb-2 min-h-[40px]">
        {currentText}
      </p>
      <div className="mt-4 flex flex-col items-center">
        <label htmlFor="charRange" className="mb-2">
          Caracteres por tecla: {visibleChars}
        </label>
        <input
          id="charRange"
          type="range"
          min="1"
          max="30"
          value={visibleChars}
          onChange={(e) => setVisibleChars(Number(e.target.value))}
          className="w-64"
        />
      </div>
    </div>
  );
}
