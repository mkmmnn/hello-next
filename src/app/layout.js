import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}{" "}
        <footer>Page Rendered @ {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
