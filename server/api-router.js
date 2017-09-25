
const express = require('express');

var ApiRouter = (function () {
    var instance;

    function createInstance() {
        const router = express.Router();
        return router;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = ApiRouter;