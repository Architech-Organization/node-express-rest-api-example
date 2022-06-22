var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ca-central-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'aspyr-poc-test-bucket',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
// snippet-end:[s3.JavaScript.buckets.listObjects]