import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {/* Profile image input */}
        <div className="flex justify-center mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <div
            onClick={handleProfileImageClick}
            className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden hover:bg-gray-300 transition"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl text-gray-500">+</span>
            )}
          </div>
        </div>

        {/* Name input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full sm:w-full md:w-3/4 lg:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Bio textarea */}
        <div className="mb-6">
          <textarea
            rows={3}
            placeholder="Write a short bio about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full sm:w-full md:w-3/4 lg:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
          ></textarea>
        </div>

        {/* Save button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
