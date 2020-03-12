const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firestoreDb = admin.firestore();

exports.onCreate = functions.firestore
  .document('tasks/{id}')
  .onCreate((snap, context) => {
    console.log('Enters onCreate()');
});