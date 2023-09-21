/**
 * @param {number} a
 * @param {number} b
 * @param {string} type
 * @returns {number} a + b or a - b or a / b or error
 */
const Utils = {
    calculateNumber(type, a , b) {
        switch (type) {
            case 'SUM':
                return Math.round(a) + Math.round(b);
            case 'SUBTRACT':
                return Math.round(a) - Math.round(b);
            case 'DIVIDE':
                if (Math.round(b) === 0) {
                    return 'Error';
                }
                return Math.round(a) / Math.round(b);
            default:
                return 'Error';
        }
    }
}

module.exports = Utils