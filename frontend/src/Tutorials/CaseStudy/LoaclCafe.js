import React from 'react';
import Navbar from '../../pages/Navbar';

const LocalCafe = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
            <img 
              src="path/to/cafe-image.jpg" 
              alt="[Café Name] - [Owner's Name]" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800">From Dream to Reality</h1>
              <p className="text-xl text-gray-600">The Journey of [Owner's Name]</p>
            </div>
          </div>

          {/* Introduction Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction</h2>
            <p>
              In the heart of [City/Neighborhood], [Owner's Name] transformed a simple idea into a thriving café known for its [unique selling point].
            </p>
          </section>

          {/* The Journey Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">The Journey</h2>
            <h3 className="text-xl font-medium text-gray-800">Initial Challenges</h3>
            <p>
              The journey wasn’t easy. [Owner's Name] faced numerous hurdles, from securing funding to navigating the complexities of the food industry.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Key Milestones</h3>
            <p>
              The grand opening on [Date] was a day filled with excitement and nerves, welcoming over [number] guests.
            </p>
          </section>

          {/* Unique Offerings Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Unique Offerings</h2>
            <h3 className="text-xl font-medium text-gray-800">Signature Products</h3>
            <p>
              [Café Name]'s famous [Signature Dish/Drink] was inspired by [source of inspiration]. It has become a favorite among locals.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Community Involvement</h3>
            <p>
              Committed to supporting the community, [Café Name] regularly hosts open mic nights, showcasing local talent.
            </p>
          </section>

          {/* Customer Experience Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Customer Experience</h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
              "The warm atmosphere and friendly staff make every visit special." - [Customer Name]
            </blockquote>
            <img 
              src="path/to/customer-experience.jpg" 
              alt="Happy Customers at [Café Name]" 
              className="w-full h-64 object-cover mb-4"
            />
          </section>

          {/* Looking Ahead Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Looking Ahead</h2>
            <p>
              [Owner's Name] envisions expanding the café's reach with a second location by [year], while continuing to innovate the menu.
            </p>
          </section>

          {/* Conclusion Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Final Thoughts</h2>
            <p>
              To anyone chasing their dream, remember that every great journey begins with a single step. Thank you for being a part of ours!
            </p>
          </section>

          {/* Call to Action Section */}
          <section className="bg-blue-600 text-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Visit Us!</h2>
            <p>
              Join us at [Café Name] located at [address]. Follow us on [social media platforms] for updates and specials!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default LocalCafe;
