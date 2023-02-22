// import fs from "fs";
import { fs } from "@vuepress/utils";
import crawler, { recordExtractorMap } from "./crawler.js";

const functionStore = [];

let content = `new Crawler(${JSON.stringify(
  crawler,
  (key, value) => {
    if (typeof value === "function") {
      functionStore.push(value);

      return value.toString();
    }

    return value;
  },
  2
)})`;

functionStore.forEach((func) => {
  content = content.replaceAll(
    JSON.stringify(func.toString()),
    func.toString()
  );
});

fs.writeFile("./crawler.config.js", content, {
  encoding: "utf-8",
});
