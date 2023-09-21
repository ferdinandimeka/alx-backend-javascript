const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const { expect } = require('chai');

/**
 * @test {sendPaymentRequestToApi}
 * @summary Testing the sendPaymentRequestToApi function
 * @description This is a description of the test using hooks
 */
describe('sendPaymentRequestToApi', () => {
    let spyUtils;

    beforeEach(() => {
        if(!spyUtils) {
            spyUtils = sinon.spy(console);
        }
    });

    afterEach(() => {
        spyUtils.log.resetHistory();
    });

    it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spyUtils.log.calledWith('The total is: 120')).to.be.true;
        expect(spyUtils.log.calledOnce).to.be.true;
      });
    
    it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyUtils.log.calledWith('The total is: 20')).to.be.true;
    expect(spyUtils.log.calledOnce).to.be.true;
    });
});