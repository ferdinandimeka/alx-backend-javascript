const request = require('request');
const { expect } = require('chai');

/**
 * @test {API integration test}
 * @summary Testing the request function
 * @description This is a server test description
 */
describe('API integration test', () => {
    it('GET /', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
})