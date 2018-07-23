let Discord = require("discord.js");
let bot = new Discord.Client();

let auth = require("./auth.json"); //Create a file called "auth.json" in same dir

let prefix = "~";


bot.on("message", msg => {
  if(!msg.content.startsWith(prefix) || msg.author.bot) {
    return;
  }

  if(msg.content.startsWith(prefix+"hello")) {
    msg.reply("Hello to you too!");
  }
});

bot.on("ready", msg => {
  console.log("Bot ready");
});

bot.login(auth.token);