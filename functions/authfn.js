const functions = require('firebase-functions');

//User registration handler
exports.onRegister = functions.auth.user().onCreate((user) => {
  console.log('Enters authfn.onRegister()');
  // user.email
  // user.displayName
});

//User deletion handler
exports.onDelete = functions.auth.user().onDelete((user) => {
  console.log('Enters authfn.onDelete()');
});