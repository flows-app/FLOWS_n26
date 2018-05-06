const N26 = require("n26");
const AWS = require("aws-sdk");

exports.handler = (event, context,callback) => {
  //remove credentials from event structure
  let username = event.user.username;
  let password = event.user.password;
  event.user.username='***';
  event.user.password='***';

  console.log("event");
  console.log(JSON.stringify(event,null,2));

  new N26(username, password)
  .then(account => account.account())
  .then(accountData => {
    console.log(JSON.stringify(accountData,null,2));
    let result = {"balance":accountData.availableBalance,
                    "now":new Date().toISOString()};
    callback(null, result);
  });
}
