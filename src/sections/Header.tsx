import React from "react";

export const Header = () => {

  const headerStyle = {
    color: "#e2e2e2"
  }

  return (
    <div className={"header"} style={headerStyle}>
      <h2>公開SS一覧</h2>
      <h3>Q. これなに？</h3>
      <p>
        このページは、公開されているSSの一覧を表示しています。
      </p>
    </div>
  );
};
