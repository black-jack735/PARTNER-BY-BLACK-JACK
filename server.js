const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://partner1er1.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const ms = require("ms");
const enmap = require("enmap");
const moment = require("moment");

const client = new Discord.Client();
const db = new enmap({ name: "test" });

const prefix = = 'prefix'

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ["Partner | send me you link"];

  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ["BLACK JACK | send me you link"];

  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


client.on("message", message => {
if (message.channel.type === "dm") {
if(message.content.startsWith("https://discord.gg")) 
client.channels.cache.get("id channel").send(`<@${message.author.id}> ${message.content}`)
message.author.send("**Done chek partner**")
message.author.send("<#id channel>")
}
});


  
client.login("");
