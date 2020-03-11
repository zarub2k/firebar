const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.ping = functions.https.onRequest(async (_req, _res) => {
  console.log('Enters ping()');
  _res.redirect(303, 'Response from ping()');
});

exports.onCreate = functions.firestore
  .document('tasks/{id}')
  .onCreate((data, context) => {
    console.log('Enters onCreate()');
});

exports.onWrite = functions.firestore
  .document('')
  .onWrite((change, context) => {
    console.log('Enters onCreate()');

    // change.before.data();
    // change.after.data();
});

exports.onUpdate = functions.firestore
  .document('')
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    const oldValue = change.before.data();
  });