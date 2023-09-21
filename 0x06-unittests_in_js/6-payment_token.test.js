const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

/**
 * @test {getPaymentTokenFromAPI}
 * @summary Testing the getPaymentTokenFromAPI function
 * @description This is a description of the test
 * @property {string} success - The success message
 */
describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI returns the right token string', (done) => {
        getPaymentTokenFromAPI(true)
        .then((response) => {
            expect(response).to.deep.equal({data: 'Successful response from the API'});
            done();
        });
    });
})