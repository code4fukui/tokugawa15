export const br2n = (dom) => {
  const _br2n = (res, dom) => {
    for (const child of dom.childNodes) {
      if (child.nodeType == 3) {
        res.push(child.text.trim());
      } else {
        if (child.tagName == "BR") {
          res.push("\n");
        } else {
          _br2n(res, child);
        }
      }
    }
  };
  const res = [];
  _br2n(res, dom);
  const txt = res.join("");
  return txt;
};
