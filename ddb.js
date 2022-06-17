var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ca-central-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var putItem = {
  TableName: 'test-dynamodbtable',
  Item: {
    'PK': {S: 'COMPANY#FACEBOOK'},
    'SK': {S: 'COMPANY#FACEBOOK'},
    'USER_HASH' : {S: 'i787978080csdvs'},
    'USER_COMPANY' : {S: 'Facebook'},
    'USER_GENDER' : {S: 'Female'},
    'USER_POSITION' : {S: 'Dev Lead'},
    'USER_CITY' : {S: 'Toronto'},
    'USER_PROVINCE' : {S: 'Ontario'},
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(putItem, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});

