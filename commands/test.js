exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  message.delete()
  message.channel.send("Happy new year's eve everyone!")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["testing"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "test",
  category: "BETA COMMANDS",
  description: "Something that's used for testing.",
  usage: "<Secret>"
};
