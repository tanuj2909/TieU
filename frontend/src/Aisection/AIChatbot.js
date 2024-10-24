import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaCalendarAlt, FaPalette, FaClock, FaBookOpen, FaPaperPlane } from 'react-icons/fa';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const botFeatures = [
    { icon: FaRobot, text: 'Real-time AI Interaction' },
    { icon: FaCalendarAlt, text: 'Automated Scheduling' },
    { icon: FaPalette, text: 'Brand Personalization' },
    { icon: FaClock, text: '24/7 Engagement' },
    { icon: FaBookOpen, text: 'Expert Query Handling' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prevMessages => [...prevMessages, { text: getBotResponse(inputMessage), sender: 'bot' }]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('schedule') || lowerMessage.includes('meeting')) {
      return "I can help you schedule a meeting. Please click here to access our Calendly and choose a suitable time slot.";
    } else if (lowerMessage.includes('brand') || lowerMessage.includes('personalize')) {
      return "Our AI is designed to match your brand voice. We can personalize responses based on your company's tone and style. Would you like to set up brand personalization?";
    } else if (lowerMessage.includes('hours') || lowerMessage.includes('available')) {
      return "I'm available 24/7 to assist you with any queries or concerns you may have. Feel free to ask anything at any time!";
    } else if (lowerMessage.includes('expert') || lowerMessage.includes('specific question')) {
      return "I have access to a wide range of expert knowledge based on uploaded materials. What specific topic would you like information on?";
    } else {
      return "Thank you for your message. How else can I assist you today?";
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col"
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">AI Assistant</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <FaRobot size={24} />
      </motion.button>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64"
          >
            <h3 className="text-lg font-semibold mb-2">AI Chatbot Features:</h3>
            <ul className="space-y-2">
              {botFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <feature.icon className="text-blue-600" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;