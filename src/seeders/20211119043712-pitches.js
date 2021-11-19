'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('baseball_pitches', [{
      pitch_type: 'fastball',
      description: 'The fastball is the most common type of pitch thrown by pitchers in baseball and softball.',
      details_url: 'https://en.wikipedia.org/wiki/Fastball',
      speed: 1,
      response_id: 1,
      curve: 30,
      difficulty: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      pitch_type: 'curveball',
      description: 'In baseball and softball, the curveball is a type of pitch thrown with a characteristic grip and hand movement that imparts forward spin to the ball, causing it to dive as it approaches the plate',
      details_url: 'https://en.wikipedia.org/wiki/Curveball',
      speed: 1,
      response_id: 1,
      curve: 30,
      difficulty: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      pitch_type: 'curveball - variation',
      description: 'In baseball and softball, the curveball is a type of pitch thrown with a characteristic grip and hand movement that imparts forward spin to the ball, causing it to dive as it approaches the plate',
      details_url: 'https://en.wikipedia.org/wiki/Curveball',
      speed: 1,
      response_id: 1,
      curve: 80,
      difficulty: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      pitch_type: 'fastball - variation',
      description: 'The fastball is the most common type of pitch thrown by pitchers in baseball and softball.',
      details_url: 'https://en.wikipedia.org/wiki/Fastball',
      speed: 1,
      response_id: 1,
      curve: 80,
      difficulty: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
