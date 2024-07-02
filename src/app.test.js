const app = require('../app');
const supertest = require('supertest');
const mongoose = require('mongoose');
const request = supertest(app);

describe("/resume-uploaded/applications endpoint", () => {
    let token;

    beforeAll(async () => {
        const dbUri = process.env.MONGO_URI;
        await mongoose.connect(dbUri);

        // Log in to get the token
        const response = await request.post('/api/login')
            .send({ email: 'aayush@gmail.com', password: '123' }); // Use valid credentials
        token = response.headers['set-cookie'][0]; // Assuming the token is set in cookies
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    it('should return all applications with status 200', async () => {
        const response = await request.get('/resume-uploaded/applications')
            .set('Cookie', token); // Set the token in the request
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // Ensure response body is an array
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('name'); // Check if the first item has a 'name' property
        }
    });
});
