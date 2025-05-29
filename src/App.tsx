import { useState } from 'react';
import { Socket } from 'socket.io-client';
import './index.css';

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Monopoly Game</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <p className="text-xl mb-4">Welcome to Online Monopoly!</p>
            <button
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => {
                // TODO: Implement socket connection
              }}
            >
              Connect to Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
