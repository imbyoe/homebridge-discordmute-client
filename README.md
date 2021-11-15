# Homebridge DiscordMute Client
this plugin allows you to Mute yourself on Discord through an Express server, also check my [Homebridge Plugin](https://github.com/imbyoe/homebridge-discordmute) to make the functionality available on HomeKit.

## How Does it work?
It's actually way simpler than you think. 

All the script does is listen for GET requests and sends key input to your computer.

The keys can be set via the config file, and to make it mute your Discord client, you just make a keybind on Discord settings to the same key you've put in the config file.

Please not that the node script needs to be running in the background for this to work. You can use tools like [PM2](https://pm2.keymetrics.io/) to keep the script running even when the cmd window is off, and to make it turn on automatically when you turn your PC on.

## Quick Start

Install [Node.js](https://nodejs.org/en/) and clone the repo into your computer.

Open config.json file using a tool like: [Notepad++](https://notepad-plus-plus.org/) or [Visual Studio Code](https://code.visualstudio.com/), 

then edit these values:

`deafen_key` - The key that will be used to deafen.

`port` - the port of the express Server (leave as is if you don't know what that means.)

`mute_key` - The key that will be used to mute.

now all you need to do, is open a terminal/CMD window and use the `npm run main` Command to start the server.

Now go to Discord -> Settings -> Keybinds -> Add a Keybind, choose your action and then the key you've put in the config (without it all the script will do is just send random keys to your pc.)

Now if you'll go to http://localhost/toggleMute you'll see the bot is sending the keys into your pc, and if all worked correctly, will mute your Discord!

To keep the server on without the need of the cmd window open all time, make sure to check [PM2](https://pm2.keymetrics.io/)
