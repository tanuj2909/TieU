import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import from react-router-dom

const features = [
  {
    title: "Business Resource",
    description: "Harness the power of artificial intelligence to gain deep insights into your business data.",
    color: "from-purple-400 to-indigo-500",
    icon: "🧠",
    link: "/Resource",
  },
  {
    title: "Community",
    description: "Work seamlessly with your team in real-time, no matter where they are in the world.",
    color: "from-green-400 to-cyan-500",
    icon: "👥",
    link: "/Community",
  },
  {
    title: "Tools",
    description: "Business Tools that make you daily work easy and automate your work accordingly.",
    color: "from-yellow-400 to-orange-500",
    icon: "🔧",
    link: "/Tools",
  },
  {
    title: "Programs",
    description: "Tailor your workflows to fit your unique business needs with our flexible platform.",
    color: "from-pink-400 to-rose-500",
    icon: "🔒",
    link: "/JoinProgram",
  },
  {
    title: "Business Dashboard",
    description: "Get a 360 view of your business performance with our integrated analytics dashboard.",
    color: "from-blue-400 to-sky-500",
    icon: "📊",
    link: "/dashboard",
  },
  {
    title: "Business Books",
    description: "Free Business Books to surpass your competition.",
    color: "from-pink-400 to-rose-500",
    icon: "📖",
    link: "/Books",
  },
];

const FeatureCard = ({ feature, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Link to={feature.link}> {/* Use Link from react-router-dom */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
      >
        <div className="text-6xl mb-4">{feature.icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
        <p className="text-white text-opacity-80">{feature.description}</p>
      </motion.div>
    </Link>
  );
};

const KeyFeatures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Unleash the Power of Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center mb-16 text-gray-300"
        >
          Discover how our cutting-edge features can transform your business
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            to="/Resource"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatures;
