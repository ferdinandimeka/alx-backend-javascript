const Utils = require('./utils.js');

/**
 * @param {number} totalAmount
 * @param {number} totalShipping
 * @returns {number} total
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
    return total;
}

module.exports = sendPaymentRequestToApi;