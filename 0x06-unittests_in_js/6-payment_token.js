/**
 * @param {boolean} success
 * @returns {object} response from the API
 * @throws {None} return nothing
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, reject) => {
    if (success) {
        resolve({ data: 'Successful response from the API' });
    }
});

module.exports = getPaymentTokenFromAPI;