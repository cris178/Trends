console.log("√Trends\n");

//Import twit oAuth package
var Twit = require("twit");
var config = require("./config");

//Make Twitter object with configured data
var T = new Twit(config);

//What to search for and how many tweets to bring back
var params = {
  //Query of what to search for as stated in Twitter docs
  q: "Los Angeles",
  //Count has a limit of 20 according to Twitter docs
  count: 10
};

//Used our Twitter obect to get the data
T.get("search/tweets", params, printSearch);

function printSearch(err, data, response) {
  //We need to get the Tweet data from the json returned
  //statuses in the json has the tweet.
  if (err) {
    console.log("Something went wrong.");
  } else {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
      console.log("\n");
    }
  }
}

// function tweetIt() {
//   var tweet = {
//     status: " √Trends for Twitter"
//   };

//   T.post("statuses/update", tweet, tweeted);

//   function tweeted(err, data, response) {
//     if (err) {
//       console.log("Something went wrong");
//     } else {
//       //The actual tweet will be on Twitter
//       console.log("It worked");
//     }
//   }
// }
