const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment.js');
const { expect } = require('chai');

/**
 * @test {sendPaymentRequestToApi}
 * @summary Testing the sendPaymentRequestToApi function
 * @description This is a description of the test
 */
describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
        const spyUtils = sinon.spy(console);
        const spyUtilsCalculateNumber = sinon.stub(Utils, 'calculateNumber');

        spyUtilsCalculateNumber.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(spyUtilsCalculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(spyUtilsCalculateNumber.callCount).to.be.equal(1);
        expect(spyUtils.log.calledWith('The total is: 10')).to.be.true;
        expect(spyUtils.log.callCount).to.be.equal(1);
        spyUtils.log.restore();
        spyUtilsCalculateNumber.restore();
    })
})

