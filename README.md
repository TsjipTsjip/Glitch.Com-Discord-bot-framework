# ENNARD DISCORD BOT
Ennard is a multipurpose bot that is not available to the public yet.

## MIT license
This bot falls under the MIT license and therefore may be modified, distributed, used privately, used commercially, merged, published and sold per copy as long as the original license is included. Please read through LICENSE.md for more information.

As an extention to this, the backend code may be used for another bot, with another name. You must own your own bot to run this code on.

## Permission system
This bot has its own custom permission system built in.

Every command has its required permission level. If a user does not meet the requirement for the command, the command does not execute. If a user's permission level is higher then the command's requirement (not equal) the command will still execute.

Notable permission levels include but may not be limited to:
* User - Permission level 0
* Guild Owner - Permission level 4
* Bot Administrator - Permission level 9
* Bot Owner - Permission level 10

Permission levels are granted to certain criteria, be it automatic or manual.

Please refer to config.js for more information.

## Commands
Ennard has multiple commands, including staff commands. More information can be found in their help entry.

The default prefix is ";".

## Setup
Once installed, only one more thing is required. You must fill in your bot token inside the .env file, when this is done, the bot should run correctly.

## Notes
* ***IMPORTANT:*** If a bot logs in into discord more then 1000 times per day, discord regenerates your bot token! This is why automatic reboots only happen 15 minutes after a change and not whenever a change is made.
* The bot restarts automatically after 15 minutes if and only if any files have been changed. This includes files like README.md and LICENSE.md. Alternatively you can use the ";reboot" command to make these changes have effect immediately. If ";reboot" is used, the bot should not reboot after 15 minutes have passed unless additional changes were made after the reboot.
* Loads of settings can be updated via config.js however a reboot of the bot is required to make these changes have effect.