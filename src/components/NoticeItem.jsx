import React from "react";
import NoticeStyle from "../style/notice.module.css";
import { IoPlayOutline, IoPlay } from "react-icons/io5";

const NoticeItem = ({ data, index }) => {
  return (
    <li key={data.id}>
      <div className={NoticeStyle.thumbnailBox}>
        <a href="#">
          <img src={data.thumbnail} alt={data.title} />
          <div className={NoticeStyle.ioPlay}>
            <IoPlay />
          </div>
          <span>{data.time}</span>
        </a>
      </div>
      <div className={NoticeStyle.profileBox}>
        <a href="#">
          <img src={data.profile} alt={data.name} />
          <span>{data.name}</span>
        </a>
      </div>
      <div className={NoticeStyle.titleBox}>
        <a href="#">{data.title}</a>
      </div>
      <div className={NoticeStyle.playBox}>
        <IoPlayOutline />
        <span>{data.play} · </span>
        <span>{data.before}</span>
      </div>
    </li>
  );
};

export default NoticeItem;
