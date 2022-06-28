# Smule Fetch Singer Usernames

## What it does

Using Puppeteer, simulates user actions to log in to Smule.com (social network for singing), search for a particular song and fetch the usernames of users who have sung it in the past. The intention then is to send those users invitations and have them sing that same song with you. It's a strategy for gaining follower faster.

## What you need to run it

Export your Smule cookies into a cookies.json file using this chrome extension:
[Export cookie JSON file for Puppeteer](https://chrome.google.com/webstore/detail/%E3%82%AF%E3%83%83%E3%82%AD%E3%83%BCjson%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%87%BA%E5%8A%9B-for-puppet/nmckokihipjgplolmcmjakknndddifde)

Create a `config.js` file in the root of the project with the following contents:

```
module.exports = {
  cookiesPath: "your_path/cookies.json",
  writePath: "your_path",
};
```

Then run as follows:

`node index.js backstreet boys incomplete`