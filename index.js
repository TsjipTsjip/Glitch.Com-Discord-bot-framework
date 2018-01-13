const Discord = require("discord.js");
const client = new Discord.Client();

client.config = require("./config.js");

client.logger = require("./util/Logger");

require("./modules/functions.js")(client);

const http = require('http');
const express = require('express');
const app = express();
const moment = require("moment");
app.get("/", (request, response) => {
  if (client.config.debugEnabled) {
    console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}]:` + " Ping Received!");
  }
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");


const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({provider: new EnmapLevel({name: "settings"})});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
if (client.config.debugEnabled) {
  client.on("debug", (e) => console.info(e));
} else {
  client.logger.warn("Debugging disabled by configuration file.");
}

const init = async () => {
  
  
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  
  
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.logger.log(`Loading Event: ${eventName}`)
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
  
  client.login(process.env.TOKEN);

};

init();