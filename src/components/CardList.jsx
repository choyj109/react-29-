import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style/container.css";
import Detail from "./Detail";
import "../style/container.css";
import { Link } from "react-router-dom";

const CardList = () => {
  const [cardData, setCardData] = useState([]);
  const dataUrl = "./data/cardData.json";
  /* useEffect(() => {
    const response = axios.get(dataUrl)
      .then((response) => response.data)
      .then((data) => setCardData(data))
      .catch((error) => console.log(error));
  }, []); */
  useEffect(() => {
    (async () => {
      const res = await axios.get(dataUrl);
      setCardData(res.data);
    })();
  }, []);
  /* useEffect(() => {
    axios("http://localhost:3000/data/cardData.json")
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => console.log(error));
  }, []); */
  /* useEffect(() => {
    fetch("http://localhost:3000/data/cardData.json")
      .then((response) => response.json())
      .then((data) => setCardData(data)) 
      .catch((error) => console.log(error));
  }, []); */

  const [detailData, setDetailData] = useState([]);
  const [num, setNum] = useState(0);
  const detailDataUrl = "./data/detailData.json";
  useEffect(() => {
    (async () => {
      const res = await axios.get(detailDataUrl);
      setDetailData(res.data);
    })();
  }, []);
  const code = detailData.filter((data, index) => index === num);
  const fncView = (e, index) => {
    e.preventDefault();
    setNum(index);
  };

  return (
    <div className="card_area">
      <h3>CardList</h3>
      <ul className="card_wrap">
        {cardData.map((card, index) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <div className="card_wrap_btn">
        {cardData.map((card, index) => (
          <a
            key={card.id}
            className="linkA"
            href={card.dataLink}
            onClick={(e) => {
              fncView(e, index);
            }}
          >
            상세보기
          </a>
        ))}
      </div>
      <div className="detail">
        {code.map((data, index) => (
          <Detail key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
