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

    it('GET /available_payments returns correct response', (done) => {
        request.get('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.deep.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });

    it('POST /login returns valid response', (done) => {
        request.post('http://localhost:7865/login', {json: {userName: 'Ferdinand'}}, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Ferdinand');
          done();
        });
      });
})