import React from "react";
import NoticeStyle from "../style/notice.module.css";
import { useState, useEffect } from "react";
import NoticeItem from "./NoticeItem";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const Notice = () => {
  const listNum = 10;
  const [noticeList, setNoticeList] = useState([]);
  const [moreNum, setMorenum] = useState(listNum);
  const dataUrl = "./data/noticeData.json";
  useEffect(() => {
    (async () => {
      await fetch(dataUrl)
        .then((res) => res.json())
        .then((res) => setNoticeList(res));
    })();
  }, []);
  const fncMore = () => {
    setMorenum(moreNum === listNum ? moreNum + listNum : moreNum - listNum);
  };
  const viewData = noticeList.filter((data, index) => index < moreNum);

  return (
    <div className={NoticeStyle.notice}>
      <h2>Notice</h2>
      <ul>
        {viewData.map((data, index) => {
          return <NoticeItem key={data.id} data={data} index={index} />;
        })}
      </ul>
      <div className={NoticeStyle.moreBtn}>
        <button type="button" onClick={fncMore}>
          <span>
            인기영상 <b>{moreNum === listNum ? "펼쳐보기": "접어두기"}</b>
          </span>
          {moreNum === listNum ? (
            <IoChevronDownOutline />
          ) : (
            <IoChevronUpOutline />
          )}
        </button>
      </div>
    </div>
  );
};

export default Notice;
