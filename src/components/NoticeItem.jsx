import React from "react";
import NoticeStyle from "../style/notice.module.css";
import { Link } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";

const NoticeItem = ({ data, index }) => {
  return (
    <li key={data.id}>
      <div className={NoticeStyle.thumbnailBox}>
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className={NoticeStyle.profileBox}>
        <img src={data.profile} alt={data.name} />
        <span>{data.name}</span>
      </div>
      <div className={NoticeStyle.playBox}>
        <IoPlayOutline />
        <span>{data.play} · </span>
        <span> {data.before}</span>
      </div>
    </li>
  );
};

export default NoticeItem;
