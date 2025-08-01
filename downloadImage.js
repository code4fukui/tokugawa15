import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("tokugawa15_wikipedia.csv");
for (const d of data) {
  const bin = await (await fetch("https:" + d.肖像)).bytes();
  await Deno.writeFile("img/" + d.代 + ".jpg", bin);
  console.log(d.代);
}
