const fs = require('fs');
const faker = require('faker');

// Function to generate random user data
const generateRandomUserData = () => {
    return {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        //password: faker.internet.password()
    };
};

// Generate random user data
export const randomUserData = generateRandomUserData();
