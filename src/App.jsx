import React, { useState } from "react";
import { FaHeart, FaSignInAlt, FaUserPlus } from "react-icons/fa";

function App() {
  const [wishes, setWishes] = useState(new Array(30).fill({ likes: 0, liked: false }));

  const toggleLike = (index) => {
    const newWishes = [...wishes];
    if (newWishes[index].liked) {
      newWishes[index].likes -= 1;
    } else {
      newWishes[index].likes += 1;
    }
    newWishes[index].liked = !newWishes[index].liked;
    setWishes(newWishes.sort((a, b) => b.likes - a.likes));
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <nav className="flex justify-between items-center p-4 border-b border-purple-500">
        <h1 className="text-xl font-bold">I Wish</h1>
        <div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2">
            <FaUserPlus className="mr-2" /> Sign Up
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2">
            <FaSignInAlt className="mr-2" /> Sign In
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">Add My Wish</button>
        </div>
      </nav>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishes.map((wish, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-purple-500 rounded-lg p-4 relative">
            <p className="text-white">App Idea #{index + 1}</p>
            <button className={`absolute bottom-4 right-4 text-2xl ${wish.liked ? "text-red-500" : "text-gray-300"} hover:scale-110 transition-transform`} onClick={() => toggleLike(index)}>
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
