import { fetchOrLoad, HTMLParser, CSV, nextTag, prevTag, sleep } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";
import { table2csv } from "./table2csv.js";

const url = "https://ja.wikipedia.org/wiki/%E5%BE%B3%E5%B7%9D%E5%B0%86%E8%BB%8D%E4%B8%80%E8%A6%A7";
const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);
const tbls = dom.querySelectorAll("table");
for (const tbl of tbls) {
  const csv = table2csv(tbl);
  console.log(csv);
  await Deno.writeTextFile("tokugawa15_wikipedia.csv", CSV.encode(csv));
  break;
}
