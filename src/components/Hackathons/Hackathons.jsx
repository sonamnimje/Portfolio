import React from "react";
import { hackathons } from "../../constants"; // Import the hackathons data

const Hackathons = () => {
  return (
    <section
      id="hackathons"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">HACKATHONS & ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My participation in various hackathons and coding competitions has enhanced my problem-solving skills
        </p>
      </div>

      {/* Hackathons Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Hackathon Entries */}
        {hackathons.map((hack, index) => (
          <div
            key={hack.id}
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
              {/* Event Logo/Image - Bigger Size */}
              <div className="flex justify-center mb-6">
                <div className="w-48 h-40 bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={hack.img}
                    alt={hack.title}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title and Organizer */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {hack.title}
                </h3>
                <h4 className="text-lg text-purple-300 font-semibold">
                  {hack.organizer}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{hack.date}</p>
              </div>

              {/* Achievement Badge */}
              <div className="text-center mb-4">
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🏆 {hack.achievement}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">{hack.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;