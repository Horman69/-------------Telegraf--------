Telegram Bot Documentation
Overview
This project is a simple Telegram bot built using the Telegraf library for Node.js. The bot can respond to messages and perform various tasks defined in the code. This template includes basic setup for handling system signals to gracefully stop the bot.

Prerequisites
Before you can run this bot, ensure you have the following:

Node.js (version 12 or higher) installed on your system. You can download it from here.
A Telegram bot token. You can create a bot by talking to BotFather on Telegram.
Installation
Clone the repository or download the source files.

bash
Копировать код
git clone https://github.com/your-username/your-bot-repository.git
cd your-bot-repository
Install dependencies:

bash
Копировать код
npm install telegraf
Replace the bot token with your own from BotFather:

js
Копировать код
const bot = new Telegraf('<YOUR-BOT-TOKEN>')
Usage
Run the bot using Node.js:

bash
Копировать код
node index.js
This will start the bot, and you should see the message "Я живой !" in the console, indicating that the bot is running and ready to interact with users on Telegram.

Once running, you can find your bot on Telegram (using its username) and start sending it messages.

The bot is configured to gracefully stop when it receives termination signals such as SIGINT or SIGTERM. This ensures that the bot will safely shut down if you stop the process.

SIGINT: Usually triggered by pressing Ctrl+C in the terminal.
SIGTERM: Sent when you try to stop the process via commands like kill.
Stopping the Bot
The bot can be stopped by:

Pressing Ctrl + C in the terminal where the bot is running.
Sending a SIGTERM or SIGINT signal programmatically or from the terminal.
The following lines of code handle this:

js
Копировать код
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
These ensure the bot will close properly when terminated.

Files
index.js: Main file that contains the bot's launch and shutdown logic.
package.json: Contains project dependencies and basic metadata.
Dependencies
Telegraf: The main library for interacting with the Telegram Bot API.

Install it with:

bash
Копировать код
npm install telegraf
Troubleshooting
Missing Token: Make sure to replace <YOUR-BOT-TOKEN> in the script with the token provided by BotFather.
Port Conflicts: Ensure that no other application is using the same port that the bot is trying to use.
Firewall Issues: Check that your firewall settings allow your server to interact with Telegram.
License
This project is licensed under the MIT License.
