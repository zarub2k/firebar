const functions = require('firebase-functions');

exports.onRegister = functions.auth.user().onCreate((user) => {

});