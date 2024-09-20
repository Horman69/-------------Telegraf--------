import { Telegraf } from "telegraf";

const bot = new Telegraf('')

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

console.log(" Я живой ! ")