const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.ping = functions.https.onRequest(async (_req, _res) => {
  console.log('Enters ping()');
  _res.redirect(303, 'Response from ping()');
});

exports.onCreate = functions.firestore
  .document('')
  .onCreate((data, context) => {
    console.log('Enters onCreate()');
});