# GLITCH.COM DISCORD BOT FRAMEWORK

## First of all...
There are four things you need to have in order to be able to use this framework.
* A github account
* A discord account
* A discord application
* A bot attached to that application
* A glitch.com __NODE PROJECT__ (I cannot stress this enough, a website project will not do)

When you have this all, you can read on.

## Glitch.com
You can simply import this repo on [glitch.com](https://glitch.com/), set the configurations and the token in the .env file and you're all set!

## Discord.js
This framework uses discord.js to run its bot.

## Setup
This framework logs into discord using a token you specified in the .env file of your glitch project.
Haven't added it? Simply paste the following in .env, replace the placeholder with your token of course.
`TOKEN=<Discord-Bot-Token>`

Once this is set, you are pretty much ready to go.

## Rebooting
This bot reboots 15 minutes after an initial change was made, meaning you have to wait for changes to be applied. This is put in place to prevent your discord bot token from getting reset. (After 1000 logins with the same bot token on the same day, discord resets your token)

This magic is found within the watch.json file, I suggest you do not mess with it if you don't know what you are doing. If this file breaks, your bot reboots, and therefore logs in to discord, every time you make a change. That's 1000 characters typed and boom! Your token is reset.

Alternatively you can use a reboot command to reboot at will. When you did this, watch.json will not kick in for the changes made before that reboot.

## Configuration and commands
Most of the config is explained in the config file itself. I added an example file called example-command.js to explain what you need when a certain command is ran.

This bot stops handling any new message when the prefix is not present, this is how the message.js inside the events folder is set up. Added to that, there is also a blocker for bot messages. If a bot somehow sends a command your bot has, it will not work because this event stops executing when the message sent came from a bot.

## UptimeRobot
As a nice added feature, this bot is compatible with uptime robots as it sends out a 200 every time your glitch.com project page is called, in this case by an uptime robot. Personally I use [UptimeRobot.com](https://uptimerobot.com/) because it is free, and it works really really well.

A simple setup for this service:
* Make a new monitor and set it to the HTTP(S) mode.
* Enter your project's url. `(For example: https://<project_domain>.glitch.com/ )`
* Set up the other settings to your likings and click add monitor.

Boom! You've just set up a discord bot that is hosted 24/7 and is pinged for uptime automatically!
