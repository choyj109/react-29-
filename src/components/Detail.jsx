import React from "react";
import "./../style/detail.css";
import { useState } from "react";

function Detail({ data }) {
  const list = data;
  const [num, setNum] = useState(0);
  const fncClose = (e) => {
    e.preventDefault();
    setNum(num === 0 ? 1 : 0);
  };
  return (
    <div className={num === 0 ? "detail-area" : "detail-area hidden"}>
      <div className="modal">
        <img src={list.imgUrl} alt="" />
        <div className="detail-desc">
          <p className="title">{list.title}</p>
          <p className="content">{list.content}</p>
        </div>
      </div>
      <button type="button" onClick={fncClose}></button>
    </div>
  );
}

export default Detail;
