const { Telegraf } = require("telegraf");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const bot = new Telegraf("7393164570:AAGSUubTB8-H0pBMM7jf_eDUdwamjKxhZwE");

const URL =
  "https://telegram-horoscope-qk3cxhwzp-sergey-web-devs-projects.vercel.app";

bot.start((ctx) =>
  ctx.reply(
    "Welcome to the Horoscope Bot! Click the button below to check your daily horoscope:",
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Dayly Horoscope", web_app: { url: URL } }]],
      },
    }
  )
);

bot.launch();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`bot app listening on port ${port}`);
});
