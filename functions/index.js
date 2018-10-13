const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const os = require('os');
const path = require('path');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onfileChange = functions.storage.object().onFinalize(event => {
 const object = event.data;
 const bucket = object.bucket;
 const contentType = object.contentType;
 const filePath = object.name;
 console.log('File change detected, file execution started');

if (path.basename(filePath).startsWith('renamed-')) {
    console.log('we already renamed that file');
    return;
}

 const destBucket = gcs.bucket(bucket);
 const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
 const metadata = { contentType: contentType };
 return destbucket.file(filePath).download({
     destination: tmpFilePath
 }).then(() => {
     return destBucket.upload(tmpFilePath, {
         destination: 'renamed-' + path.basename(filePath),
         metadata: metadata
     });
 })
});
