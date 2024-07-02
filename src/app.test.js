const app = require('../app');
const supertest = require('supertest');
const mongoose = require('mongoose');
const request_app= supertest(app);

describe("/resume-uploaded/applications endpoint", () => {
    beforeAll(async () => {
        const dbUri = process.env.MONGO_URI;
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    it('should return all applications with status 200', async () => {
        const response = await request_app.get('/resume-uploaded/applications');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // Ensure response body is an array
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('name'); // Check if the first item has a 'name' property
            expect(response.body[0]).toHaveProperty('createdBy'); // Check if the first item has a 'createdBy' property
        }
    });  
});
// ???