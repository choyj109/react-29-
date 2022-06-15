import React from "react";

const Nav = () => {
  const navList = [
    { content: "Main", href: "" },
    { content: "Review", href: "Review" },
    { content: "CardList", href: "CardList" },
    { content: "Notice", href: "Notice" },
  ];
  return (
    <div id="nav">
      <h2 className="blind">메인메뉴</h2>
      <ul>
        {navList.map((element, index) => {
          return <li key={index}>{element.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default Nav;
