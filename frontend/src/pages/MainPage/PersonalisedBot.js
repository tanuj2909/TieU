import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei'; // Import Html here
import { motion } from 'framer-motion';

function AIBot() {
  const { nodes, materials } = useGLTF('/assets/3d/duck.glb');

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.Duck.geometry}
        material={materials.default}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#00BFFF" />
      </mesh>
    </group>
  );
}

function Scene({ isExploring }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <AIBot />
      <OrbitControls enableZoom={false} />
      {isExploring && (
        <Html center>
          <div className="bg-white bg-opacity-90 text-black p-4 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-xl font-bold mb-2">AI Assistant Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personalized business insights</li>
              <li>24/7 customer support</li>
              <li>Data analysis and reporting</li>
              <li>Task automation</li>
              <li>Natural language processing</li>
            </ul>
          </div>
        </Html>
      )}
    </>
  );
}

const PersonalisedBot = () => {
  const [isExploring, setIsExploring] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400"
        >
          Meet Your Personal AI Assistant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-300"
        >
          Tailored to your business needs, our AI bot is here to assist you every step of the way
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] lg:h-[600px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Scene isExploring={isExploring} />
            </Canvas>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Personalized Assistance</h3>
              <p>Our AI bot learns your business processes and adapts to provide tailored support, enhancing efficiency and decision-making.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold mb-4">24/7 Availability</h3>
              <p>Get instant support anytime, anywhere. Our AI assistant is always ready to help, ensuring your business never sleeps.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Data-Driven Insights</h3>
              <p>Leverage the power of AI to analyze your business data and gain valuable insights for informed decision-making.</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setIsExploring(!isExploring)}
            className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            {isExploring ? 'Hide AI Features' : 'Explore AI Assistant'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalisedBot;
