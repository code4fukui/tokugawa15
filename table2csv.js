import { br2n } from "./br2n.js";

export const table2csv = (tbl) => {
  const res = [];
  const trs = tbl.querySelectorAll("tr");
  trs.forEach((tr) => {
    const tds = tr.querySelectorAll("td, th");
    const line = [];
    tds.forEach((td) => {
      const colspan = td.getAttribute("colspan") || 1;
      const value = td.querySelector("img")?.getAttribute("src") || br2n(td);
      for (let i = 0; i < colspan; i++) {
        line.push(value);
      }
    });
    res.push(line);
  });
  return res;
};
