const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const firestoreDb = admin.firestore();

//Custom function modules
const firefn = require('./firestorefn');
const authfn = require('./authfn');

exports.ping = functions.https.onRequest(async (_req, _res) => {
  console.log('Enters ping()');
  _res.redirect(303, 'Response from ping()');
});

// exports.onCreate = firefn.onCreate();
// exports.onUpdate = firefn.onUpdate();
// exports.onDelete = firefn.onDelete();
// exports.onChange = firefn.onChange();
// exports.onWrite = firefn.onWrite();

exports.user_signup = authfn.onRegister;
exports.user_delete = authfn.onDelete;