import React from "react";
import { achievements } from "../../constants"; // Import the achievements data

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Recognition and awards that highlight my dedication and excellence in various fields
        </p>
      </div>

      {/* Achievements Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Achievement Entries */}
        {achievements.map((achieve, index) => (
          <div
            key={achieve.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Achievement Logo/Image - Bigger Size */}
              <div className="flex justify-center mb-6">
                <div className="w-48 h-40 bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={achieve.img}
                    alt={achieve.title}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title and Organizer */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {achieve.title}
                </h3>
                <h4 className="text-lg text-purple-300 font-semibold">
                  {achieve.organizer}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{achieve.date}</p>
              </div>

              {/* Position Badge */}
              <div className="text-center mb-2">
                <span className="text-purple-400 font-bold text-lg">
                  Position: {achieve.position}
                </span>
              </div>

              {/* Achievement Badge */}
              <div className="text-center mb-4">
                <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🏅 {achieve.achievement}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">{achieve.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;