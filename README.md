# Telegram Bot Documentation

## Overview
This project is a simple Telegram bot built using the Telegraf library for Node.js. The bot can respond to messages and perform various tasks defined in the code. This template includes basic setup for handling system signals to gracefully stop the bot.

## Prerequisites
Before you can run this bot, ensure you have the following:
- **Node.js** (version 12 or higher) installed on your system. You can download it from [here](https://nodejs.org/).
- A **Telegram bot token**. You can create a bot by talking to [BotFather](https://t.me/botfather) on Telegram.

## Installation
1. Clone the repository or download the source files.

    ```bash
    git clone https://github.com/your-username/your-bot-repository.git
    cd your-bot-repository
    ```

2. Install dependencies:

    ```bash
    npm install telegraf
    ```

3. Replace the bot token with your own from BotFather in `index.js`:

    ```js
    const bot = new Telegraf('<YOUR-BOT-TOKEN>')
    ```

## Usage
Run the bot using Node.js:

```bash
node index.js
