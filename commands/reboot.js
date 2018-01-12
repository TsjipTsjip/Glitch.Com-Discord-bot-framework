exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  await message.channel.send(":white_check_mark: Shutting down to apply changes...");
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  client.wait(5000);
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "reboot",
  category: "Bot administration",
  description: "Reboots the bot.",
  usage: "reboot"
};
