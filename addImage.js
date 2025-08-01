import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("tokugawa15.csv");
for (const d of data) {
  d.肖像リンク = "https://code4fukui.github.io/tokugawa15/img/" + d.代 + ".jpg";
}
await Deno.writeTextFile("tokugawa15.csv", CSV.stringify(data));
