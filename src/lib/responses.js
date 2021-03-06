'use strict';

/**
 * AMNA: Amazing Mongoose Node.js API
 *
 * @author Nate Ferrero
 * @url https://github.com/NateFerrero/amna
 *
 * AMNA - Responses
 */
module.exports = function () {
    return {
        ok: function (data) {
            return {status: 'ok', data: data};
        },
        error: function (reason) {
            return {status: 'error', reason: reason};
        }
    };
};
