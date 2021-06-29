// Config file with all data
const config = require('../config.json');

// Imports for Google Firebase and Firestore
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
});

const firestore = admin.firestore();

function getCollection(key) {
    return firestore.collection(key);

}

function getDocumentReference(collection, key) {
    return collection.doc(key);;

}


module.exports = { getCollection, getDocumentReference };