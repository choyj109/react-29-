import React from "react";
import NoticeStyle from "../style/notice.module.css";
import { useState, useEffect } from "react";
import NoticeItem from "./NoticeItem";

const Notice = () => {
  const listPlusNum = 10;
  const [noticeList, setNoticeList] = useState([]);
  const [moreNum, setMorenum] = useState(listPlusNum);
  const dataUrl = "./data/noticeData.json";
  useEffect(() => {
    (async () => {
      await fetch(dataUrl)
        .then((res) => res.json())
        .then((res) => setNoticeList(res));
    })();
  }, []);
  const fncMore = () => {
    setMorenum(moreNum + listPlusNum);
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
          인기영상 펼쳐보기
        </button>
      </div>
    </div>
  );
};

export default Notice;
