const N26 = require("n26");
const AWS = require("aws-sdk");

exports.handler = (event, context,callback) => {
  let username = event.user.username;
  let password = event.user.password;
  new N26(username, password)
    .then(account => {
      let result = {"balance":account.bankBalance,
                    "now":new Date().toISOString()};
      callback(null, result);
    });
}
