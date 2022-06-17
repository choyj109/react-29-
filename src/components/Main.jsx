import React from "react";
import "../style/main.css";
import { useState, useEffect, useRef } from "react";

const Main = () => {
  const listData = ["content01", "content02", "content03", "content04"];
  const [num, setNum] = useState(0);
  const checkRef = useRef("next");
  /* console.log(checkRef); {current:'next'}
  useRef는 객체 타입으로 값을 저장하고 사용할 수 있다.
  useRef 선택자 querySelector 대신 사용하기도 함 */
  // listData.unshift("more1");
  listData.unshift(listData[listData.length - 1]);

  const fncClassAdd = (i) => {
    const on = i === num ? " on" : " on";
    const view = "view_";
    const textNum = "00000" + (i + 1);
    const viewText = view + textNum.slice(-2);
    // console.log(viewText);
    return viewText + on;
  };
  const initialStyle = {
    position: "relative",
    left: "-100%",
    marginLeft: `${num * -100}%`,
  };
  const [slideStyle, setSlideStyle] = useState(initialStyle);

  const fncPrevStyle = () => {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 3 ? "margin 500ms ease" : "none",
      animation: num === 3 ? "lastSlide 500ms ease 1" : "none",
    });
  };
  const fncNextStyle = () => {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 0 ? "margin 500ms ease" : "none",
      animation: num === 0 ? "firstSlide 500ms ease 1" : "none",
    });
  };
  const fncPrevSlide = () => {
    setNum(num <= 0 ? 3 : num - 1);
    checkRef.current = "prev";
  };
  const fncNextSlide = () => {
    setNum(num >= 3 ? 0 : num + 1);
    checkRef.current = "next";
  };
  /* next버튼을 클릭하면 fncNextSlide 호출
  num => +1 check=next
  useEffect를 사용해서 num의 변화들 감지해서 체크상태 확인
  next가 들어가 있으면 fncNextStyle 함수를 호출해서
  ul fncNextStyle안의 스타일을 적용한다. */
  useEffect(() => {
    checkRef.current === "next" ? fncNextStyle() : fncPrevStyle();
  }, [num]);

  return (
    <div className="mainContainer">
      <h2>메인페이지</h2>
      <div className="viewBox">
        <div className="slideBtn">
          <button type="button" onClick={fncPrevSlide}>
            이전
          </button>
          <button type="button" onClick={fncNextSlide}>
            이후
          </button>
        </div>
      </div>
      <div className="viewContents">
        <ul style={slideStyle}>
          {listData.map((list, index) => {
            return <li className={fncClassAdd(index)}>{list}</li>;
          })}
          {/* <li className="view_01 on">01</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Main;

/* useState: 값이 바뀌면 업데이트된 값을 재할당함
component를 다시 렌더링함(속도가 느려짐)
useRef가 렌더링 문제를 예방할 수 있음 */

/* useState: 값이 바뀌면 해당하는 변수에 값을 재할당함(업데이트)
컴포넌트를 다시 렌더링한다.
useRef: 값이 바뀌더라도 리렌더되지 않는다.
const box = {a:0}
const [box, setBox] = useState(0)
setBox(매개변수) 함수 재실행
-> (useState는 메인함수를 호출하는 콜백함수임)

const box = useRef(변수{a:0}) -> 객체타입
box.a = 10 */
