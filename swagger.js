const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'School API',
        description: 'API to manage students and teachers',
    },
    // host: "localhost:8080",
    // schemes: ['http'],
    host: "apischool-4wmm.onrender.com",
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js']; 


swaggerAutogen(outputFile, endpointsFiles, doc)