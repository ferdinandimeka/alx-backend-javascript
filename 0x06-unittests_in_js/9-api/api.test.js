const request = require('request');
const { expect } = require('chai');

/**
 * @test {API integration test}
 * @summary Testing the request function
 * @description This is a server test description
 */
describe('API integration test', () => {
    it('GET / correct response', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id returns correct response for valid :id', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 12');
            done();
        });
    });

    it('GET /cart/:id returns correct response for invalid :id', (done) => {
        request.get('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id returns correct response for invalid (negative integers) :id', (done) => {
        request.get('http://localhost:7865/cart/-12', (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    })
})