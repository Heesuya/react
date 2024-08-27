import Mypage from "./component/Mypage";
import Main from "./component/Main";
import { Routes, Route, Link } from "react-router-dom";
import BoardList from "./component/BoardList";
import BoardDetail2 from "./component/BoardDetail2";
import BoardDetail1 from "./component/BoardDetail";

function App() {
  return (
    <div className="App">
      <h1>리액트 라우터</h1>
      <hr></hr>
      <h3>
        라우팅 : 사용자의 요청 URL에 따라 그에 알맞은 페이지(컴포넌트)를
        보여주는 것
      </h3>
      <p>
        SPA(Single Page Application)에서는 페이지를 여러개 관리하는 것이 아니라
        url에 따라서 필요한 컴포넌트를 보여줌
      </p>
      <h3>
        <Link to="/main">메인페이지</Link>
        {/* 
        <a href="/main">메인페이지</a> 
        a태그를 통해서 url주소를 변경하면 -> spa방식이 아니라 페이지를 새로 로드
        -> Link 컴포넌트로 url 주소를 변경하면 페이지를 새로로드하지않고 라우터에 설정된 컴포넌트가 화면에 노출
        Link 컴포넌트는 화면에 구현될때는 a태그로 전환 -> 디자인은 a태그에 하면 됨
        */}
      </h3>
      <h3>
        <Link to="/mypage">마이페이지</Link>
      </h3>
      <h3>
        <Link to="/boardList">게시글목록</Link>
      </h3>
      {/* 주소창 설정 */}
      <Routes>
        {/* path : url 주소 / element : path주소를 요청하면 보여줄 컴포넌트 */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardDetail2/:boardNo" element={<BoardDetail2 />} />
        {/* boardDetail2/숫자  /:주소뒤에 변하는값 들어올꺼야*/}
        <Route path="/boardDetail1" element={<BoardDetail1 />} />
      </Routes>
    </div>
  );
}

export default App;
