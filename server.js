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
client.login(token);
const client = new Discord.Client();
const db = new enmap({ name: "test" });

client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('By black jack');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`PARTNER | CREATED BY BLACK JACK ${client.guilds.cache.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})

client.on("ready", async () => {
  console.log("Starting..");
  let g = client.guilds.cache.get("794108818489475082"); // id server
  let c = g.channels.cache.get("804714379622088754"); // id channel
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (
        (g.me.voiceChannel && g.me.voiceChannelID !== c.id) ||
        !g.me.voiceChannel
      )
        c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listening."');
  }
});

client.on("message", message => {
if (message.channel.type === "dm") {
if(message.content.startsWith("https://discord.gg")) 
client.channels.cache.get("id channel").send(`<@${message.author.id}> ${message.content}`)
message.author.send("**Done chek partner**")
message.author.send("<#id channel>")
}
});


  
client.login(token);
