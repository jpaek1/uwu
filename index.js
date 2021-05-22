const { Client, Intents, NewsChannel } = require("discord.js");
const myIntents = new Intents();
myIntents.add("GUILD_MESSAGES");
const dumbassEmojis = [':3', 'c:', ':^)', '(´・ω・｀)', '(✿◕‿◕)', '(◡‿◡✿)', 'ᕕ( ᐛ )ᕗ', 'ᐠ( ᐛ )ᐟ', '( ´ ▽ ` )b', '＼(＠＾０＾＠)/やったぁ♪', '', '＼ʕ •ᴥ•ʔ／' , 'UwU', 'OwO', 'ʅ(°ヮ°)ʃ', '|:^0', ':weary:', ':flushed:', ':drool:', ':sweat_drops: :sweat_drops:', '  |:^{)    | :^{)    |:^{)']


const client = new Client({ intents: myIntents });

const keys = require("./config/keys");

client.once("ready", () => {
  console.log("Weady! :3");
});

client.login(keys.BOT_TOWOKEN);

client.on("message", (message) => {
  if (message.author.username == 'uwu-owo'){
    return
  } else if (message.content.includes('http')) {
    return
  } else {
    let rlCount = 0
    rlCount += (message.content.match(/r/g) || []).length
    rlCount += (message.content.match(/l/g) || []).length
    rlCount += (message.content.match(/R/g) || []).length
    rlCount += (message.content.match(/L/g) || []).length
    if (rlCount <= 4){
    return
    }
  } 
  const readMessage = message.content;
  const messageArray = []
  let newString = ''
  const messageWords = readMessage.split(' ')
  for (var i = 0; i < messageWords.length; i++ ) {
    if (!messageWords[i].startsWith('@')) {
      messageWords[i] = messageWords[i].replace(/r/g, 'w')
      messageWords[i] = messageWords[i].replace(/l/g, 'w')
      messageWords[i] = messageWords[i].replace(/R/g, 'W')
      messageWords[i] = messageWords[i].replace(/L/g, 'W')
    }
    // messageArray.push(messageWords[i])
    newString += (messageWords[i].toString() + ' ')
  }
  newString += dumbassEmojis[Math.floor(Math.random() * dumbassEmojis.length)]
  message.channel.send(newString)
});


