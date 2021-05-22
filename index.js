const { Client, Intents } = require("discord.js");
const myIntents = new Intents();
myIntents.add("GUILD_MESSAGES");

const client = new Client({ intents: myIntents });

const keys = require("./config/keys");

client.once("ready", () => {
  console.log("Weady! :3");
});

client.login(keys.BOT_TOWOKEN);

client.on("message", (message) => {
  console.log(message);
});
