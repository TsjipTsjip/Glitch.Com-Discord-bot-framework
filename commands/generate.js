exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  const subType = args[0];
  const params = args[1];
  
  if (subType === undefined || params === undefined) {
    message.channel.send("Insufficient arguments were defined.")
    return
  };
  
  switch (subType) {
    case "key" :
      message.channel.send(`Attempting to generate a key with the following parameters: \`${params}\``)
      break;
    default :
      message.channel.send("Subcommand not recognized.")
      break;
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Guild Administrator"
};

exports.help = {
  name: "generate",
  category: "Bot administration",
  description: "Generates a bot object that can be used later on.",
  usage: "generate <subType> <parameters>"
};