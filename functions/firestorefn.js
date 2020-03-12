const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firestoreDb = admin.firestore();

exports.onCreate = functions.firestore
  .document('tasks/{id}')
  .onCreate((snap, context) => {
    console.log('Enters onCreate()');
});

exports.onUpdate = functions.firestore
  .document('')
  .onUpdate((change, context) => {
    console.log('Enters onUpdate()');
    const newValue = change.after.data();
    const oldValue = change.before.data();
});

exports.onDelete = functions.firestore
  .document('')
  .onDelete((snap, context) => {
    console.log('Enters onDelete()');

    const deleteValue = snap.data();
});

exports.onWrite = functions.firestore
  .document('')
  .onWrite((change, context) => {
    console.log('Enters onCreate()');

    // change.before.data();
    // change.after.data();
});

//other table updated
exports.onChange = functions.firestore
  .document('')
  .onWrite((snap, context) => {
    firestoreDb.doc('').set({}); //pass the new data here.
});