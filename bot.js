const { Telegraf } = require("telegraf");

const bot = new Telegraf("7393164570:AAGSUubTB8-H0pBMM7jf_eDUdwamjKxhZwE");

const URL =
  "https://telegram-horoscope-q0e9adsix-sergey-web-devs-projects.vercel.app";

// bot.on("message", async (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   const webAppUrl = "https://ya.ru";

//   if (text === "/start") {
//     await bot.sendMessage(
//       chatId,
//       "Welcome to the Horoscope Bot! Click the button below to check your daily horoscope:",
//       {
//         reply_markup: {
//           inline_keyboard: [
//             [
//               {
//                 text: "Open Horoscope App",
//                 web_app: { url: webAppUrl }, // Use web_app to open in miniapp window
//               },
//             ],
//           ],
//         },
//       }
//     );
//   }
// });

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
