require("dotenv").config();
const { Client, RichPresence } = require("discord.js-selfbot-v13");

const { DISCORD_TOKEN, APPLICATION_ID } = process.env;

if (!DISCORD_TOKEN || !APPLICATION_ID) {
  throw new Error("Missing DISCORD_TOKEN or APPLICATION_ID in .env");
}

const client = new Client();

client.on("ready", () => {
  const rpc = new RichPresence(client)
    .setApplicationId(APPLICATION_ID)
    .setType("PLAYING")
    .setName("Umamusume: Pretty Derby")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "https://cdn.discordapp.com/attachments/1380904107061018644/1396291869893328966/images-modified.png?ex=687d8da3&is=687c3c23&hm=256165ccc1c5e2dd88cbd27fb484aac7d37d358aa131e174a79bdbfd1e6c2f6e&"
    )
    .setAssetsLargeText("Umamusume: Pretty Derby");

  client.user.setActivity(rpc);
});

client.login(DISCORD_TOKEN);