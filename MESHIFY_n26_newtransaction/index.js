const N26 = require("n26");
const AWS = require("aws-sdk");

exports.handler = (event, context,callback) => {
  let username = event.user.username;
  let password = event.user.password;
  new N26(username, password)
    .then(account => account.transactions())
    .then(transactions => {
      console.log(JSON.stringify(transactions,null,2));
      callback(null, transactions);

    /*
      [{
        "id" : "abbc81ce-a5ab-4b5b-a5c2-82541bdb4630",
        "type" : "PT",
        "smartLinkId" : "1125318169-598442",
        "amount" : -21.79,
        "currencyCode" : "EUR",
        "originalAmount" : -21.79,
        "originalCurrency" : "EUR",
        "exchangeRate" : 1.0,
        "merchantCity" : "PARIS",
        "visibleTS" : 1455292872000,
        "mcc" : 5977,
        "mccGroup" : 4,
        "merchantName" : "LAFAYETTE INT.",
        "merchantId" : "970003006643142",
        "recurring" : false,
        "userId" : "8a21b871-0585-481b-ab62-8e3e2d380757",
        "linkId" : "1125318169-598442",
        "accountId" : "5430d368-a0d3-45b3-bcf7-607ece248fa5",
        "category" : "micro-leisure",
        "cardId" : "24f7804b-8a95-4e80-b48a-11fe395ed505",
        "pending" : false,
        "transactionNature" : "NORMAL",
        "partnerAccountIsSepa": true,
        "partnerBankName": "N26 Bank",
        "partnerName": "N26 Bank",
        "referenceText": "Overdraft / tolerated overdraft Q1-2018 N26 Bank",
        "confirmed" : 1455494400000
      }]
     */
    });
}
