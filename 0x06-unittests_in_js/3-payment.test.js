const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

/**
 * @test {sendPaymentRequestToApi}
 * @summary Testing the sendPaymentRequestToApi function
 * @description This is a description of the test
 */
describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the same math method as Utils', () => {
        const spyUtils = sinon.spy(Utils);

        sendPaymentRequestToApi(100, 20);
        expect(spyUtils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(spyUtils.calculateNumber.callCount).to.be.equal(1);
        spyUtils.calculateNumber.restore();
    })
})

