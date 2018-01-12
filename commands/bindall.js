exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  args.join(" ")
  
  if(args === undefined) {
    message.channel.send(":x: Please provide a roblox group ID.")
    return
  };
  message.channel.send(":x: Something went wrong, please check the logs for more information. ```DEBUG: #ID5.5 AT: commands/bindall.js```")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "bindall",
  category: "BETA COMMANDS",
  description: "Scoops up all relevant roles and binds them with a provided roblox group.",
  usage: ";bindall <group>"
};
