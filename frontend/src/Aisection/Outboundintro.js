import React from 'react';
import { motion } from 'framer-motion';
import Navbar  from '../pages/Navbar';
import Footer from '../pages/MainPage/Footer';
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaEnvelope, FaLinkedin, FaBell, FaChartLine } from 'react-icons/fa';

const Outboundintro = () => {

    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate('/EricaAITools/AIOutboundSdrExplore'); // Replace with the path of the page you want to navigate to
      };
  const features = [
    { icon: FaEnvelope, title: 'Automated Email Campaigns', description: 'ERICA sends personalized emails at the right time.' },
    { icon: FaLinkedin, title: 'Multichannel Outreach', description: 'ERICA interacts with prospects on various platforms.' },
    { icon: FaBell, title: 'Follow-up Reminders', description: 'ERICA keeps track of follow-ups, ensuring no lead is left behind.' },
    { icon: FaChartLine, title: 'Data-Driven Insights', description: 'ERICA tracks outreach performance and provides insights for improvement.' },
  ];

  const testimonials = [
    { name: 'John Doe', company: 'Tech Co', quote: 'ERICA has revolutionized our outbound sales process!', metric: 'Increased lead engagement by 35%' },
    { name: 'Jane Smith', company: 'Sales Inc', quote: 'We\'ve seen a dramatic improvement in our sales efficiency.', metric: 'Saved over 20 hours per week in sales tasks' },
  ];

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">ERICA</h1>
          <p className="text-lg text-gray-600">AI-powered Outbound Sales Development Representative</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Revolutionize Your Outbound Sales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            ERICA automates your outbound sales outreach, engages prospects with precision, and helps your business save time and resources.
          </motion.p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">How ERICA Can Help You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <feature.icon className="text-4xl text-indigo-500 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Services ERICA Provides</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <feature.icon className="text-2xl text-indigo-500 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
                <p className="text-indigo-500 font-bold mt-2">{testimonial.metric}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center"
    >
      <button
        onClick={handleNavigate} // Add the onClick function
        className="bg-indigo-600 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Started with ERICA
      </button>
    </motion.div>
      </main>

      
    </div>
    <Footer />
    </>
  );
};

export default Outboundintro;