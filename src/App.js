import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Notice from "./components/Notice";
import Event from "./components/Event";
import { Manual, Policy, Rule, EtcInfo } from "./pages/FooterMenu";
/* 
 Routes 감싸주는 아이 Route 그 안에 내부에들어 가는 아이 
  Routes 라는 범위 안에 메인 리뷰 카드 리스트를 담았다. 
  기능이 원활 하게 돌아 갈려면  
  라우트라는 컴포넌트에 path 라는 프로퍼티와 element 프로퍼티 를 만들어 줘야 한다.  
   element는 클릭 했을때 보여주고 싶은 컴포넌트를 다루는 것으로써 이 자체가 하나의 기능임으로 
   변수로 넣어야 한다. 문자로 넣으면 안됨 
   패스는 메인으로 갈려면 최상단이니  / 
*/
function App() {
  const title = "site";
  return (
    <div className="App">
      <BrowserRouter>
        {/* BrowserRouter로 한번 더 감싸주기 */}
        <Header title={title} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cardList" element={<CardList />} />
          <Route path="/notice" element={<Notice />} />
          {/* path: 경로 주소 element: component */}
          <Route path="/manual" element={<Manual />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/rule" element={<Rule />} />
          <Route path="/etcInfo" element={<EtcInfo />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <Footer title={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
