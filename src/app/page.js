import React from "react";
import { readFile, writeFile } from "./helpers/file-helpers";

function Home() {
  const content = JSON.parse(readFile("src/app/database.json"));
  const nextContent = { hits: content.hits + 1 };
  writeFile("src/app/database.json", JSON.stringify(nextContent));
  return (
    <main>
      <h1>page visitors: {content.hits}</h1>
    </main>
  );
}

export default Home;
