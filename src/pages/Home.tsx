import React from 'react';
import GameCard from '../components/games/GameCard';
import { Button } from '../components/ui/Button';
import { games } from '../data/games';

const Home = () => {

  const handleClick = () => {
    window.open('https://play.google.com/store/apps/developer?id=Popular+Hyper+Casual+Games', '_blank');
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Popular Casual Games</h1>
          <p className="text-xl mb-8">
            Discover amazing mobile games for every player
          </p>
          <Button variant="secondary" onClick={handleClick}>
          Explore Games
        </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Popular Casual Games development center designing and developing Casual and HyperCasual games for all the age groups. We believe in meeting international standards and we have an in house quality control process and separate quality assurance group to monitor all the aspects of quality. Our vision and aim is to provide best Casual Games and implement the effective strategies and provide customer satisfaction which is shown in our creative and innovative way by our young and energetic team.
            </p>
            <p className="text-gray-600">
              With millions of happy players worldwide, we continue to push the
              boundaries of mobile gaming, delivering high-quality games that
              bring joy and excitement to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Popular Casual Games development center designing and developing Casual and HyperCasual games for all the age groups. We believe in meeting international standards and we have an in-house quality control process and separate quality assurance group to monitor all the aspects of quality. Our vision and aim is to provide the best Casual Games and implement effective strategies to provide customer satisfaction, which is shown in our creative and innovative way by our young and energetic team.
            </p>
            <p className="text-gray-600 mb-6">
              We have strong offshore development and maintenance capabilities and equally strong onsite implementation capabilities. This robust offshore development methodology allows us to start on new projects swiftly and proceed smoothly to deliver high quality results.
            </p>
            <p className="text-gray-600 mb-6">
              The main areas that we focus on are:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-6">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">2D Game Development</h3>
                <p className="text-gray-600">We create engaging and visually appealing 2D games for all age groups.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">3D Game Development</h3>
                <p className="text-gray-600">Our team excels in developing immersive and high-quality 3D games.</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Categories: All Casual and HyperCasual Categories
            </p>
          </div>
        </div>
      </section>


      {/* Games Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
