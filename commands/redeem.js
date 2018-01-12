exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  
  const keys = client.premiumKeys;
  const providedKey = args[0];
  if (providedKey === undefined) {
    message.channel.send("Please provide a key for me to activate.")
    return
  };
  const keyFound = keys.some(k => k === providedKey);
  if (keyFound) {
    message.channel.send(`I activated the key \`${providedKey}\` (This key will last for: ${client.premium.find("name", providedKey)})`)
  } else {
    message.channel.send(`I could not find the key \`${providedKey}\` in my database.`)
  };
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Guild Administrator"
};

exports.help = {
  name: "redeem",
  category: "Premium",
  description: "Redeem a key to give your current server premium privileges.",
  usage: "redeem <key>"
};