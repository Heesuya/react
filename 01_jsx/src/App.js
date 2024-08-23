import "./test.css";
function App() {
  /*
  JSX 사용 시 주의 사항
  1. 함수에러 JSX를 리턴하면 화면에 표현
  -> 리턴할때는 반드시 1개의 태그로 리턴
  -> 여러개 태그를 리턴하고 싶으면 -> 1개의 태그로 감싸서 리턴
  에러발생코드 : h1태그와 h3태그를 동시에 리턴하려고해서 문제가 발생
    return(
      <h1>테스트1</h1>
      <h3>테스트2</h3>
    )
    -> 1개의 태그로 묶어서 리턴하는 방법 : 부모태그 하나를 사용
    return(
      <div>
        <h1>테스트1</h1>
        <h3>테스트2</h3>
      </div>
    )
    -> 1개의 태그로 묶어서 리턴하는 방법 : 감싸는 태그는 리턴하고싶지 않을때는 비어있는 태그로 감쌈
    return(
      <br>
        <h1>테스트1</h1>
        <h3>테스트2</h3>
      </>
    )  
  2. 모든 태그에는 닫는 태그가 존재
    -> html 에서는 닫는 태그가 없는 태그도 존재 (<br>,<hr>,<img>,<input>)
    -> html 에서 닫는태그가 없는 태그도 jsx에서는 반드시 닫아야 함
      <br> -> <br></br>     
      <hr> -> <hr></hr>
      <img> -> <img></img>
      <input> -> <input></input>
    -> 닫는 태그를 생략하는 방법
      <br></br> -> <br />
      <hr><hr>  -> <hr />
      <img></img> -> <img />
      <input></input> ->  <input />
  3. html 에서 사용하던 속성 중에 속성이름이 다른 경우가 존재 -> 기존속성으로 사용하다가 문제가 없으면 그냥 사용 -> 경고 발생하면 변경
    -> <div class="test1"></div>  ->  <div className-"test1"></div>
    -> <label for=""></label> ->  <label htmlFor=""></label>
  4. css 적용하는 방법
    -> 외부파일에 작성 -> import
    -> style속성을 이용하여 inline으로 적용하는 경우 -> js 객체형식으로 처리
    -> <div style="background-color:blue; color:red">
        -> <div style={{backgroundColor:"blue", color : "red"}}>
  */
  return (
    <>
      <h1>안녕</h1>
      <h2>이제 곧 점심시간이야</h2>
      <hr></hr>
      <hr />
      <h3 style={{backgroundColor:"yellow", color:"red"}}>test</h3>
      <div id="abc" className="bbb">테스트div</div>
      <label htmlFor="abc">라벨테스트</label>
<hr />      
      {
        /*
          주석은 {} 내부에 자바스크립트 주석
        */
      }
      <div className="login-wrap">
        <h2 className="login-title">LOGIN</h2>
        <div className="input-wrap">
          <label htmlFor="userId">아이디</label>
          {/* input 태그 사용할때에도 반드시 닫는태그 사용 */}
          <input type="text" name="userId" id="userId"></input>
        </div>
        <div className="input-wrap">
          <label htmlFor="userPw">비밀번호</label>
          <input type="password" name="userPw" id="userPw" />
        </div>
        <div className="login-btn">
          <input type="submit" value="로그인" />
        </div>
      </div>
      <hr></hr>
      <hr />
      {/*
        회원가입
        회원가입항목 : 아이디 / 비밀번호 / 비밀번호확인 / 이름 / 전화번호 / 성별 
      */}
      <div className="join-wrap">
        <h2>회원가입</h2>
        <div className="input-wrap">
          <label htmlFor ="joinId">아이디</label>
          <input type="text" name="joinId" id="joinId"></input>
        </div>
        <div className="input-wrap">
          <label htmlFor ="joinPw">비밀번호</label>
          <input type="password" name="joinPw" id="joinPw"></input>
        </div>
        <div className="input-wrap">
          <label htmlFor ="rePw">비밀번호 확인</label>
          <input type="password" name="rePw" id="rePw"></input>
        </div>
        <div className="input-wrap">
          <label htmlFor ="joinName">이름</label>
          <input type="text" name="joinName" id="joinName"></input>
        </div>
        <div className="input-wrap">
          <label htmlFor ="joinPhone">전화번호</label>
          <input type="text" name="joinPhone" id="joinPhone"></input>
        </div>
        <div className="gender-wrap">
          <label htmlFor ="m">남자</label>
          <input type="radio" name="gender" id="m" defaultValue="m"></input>
          <label htmlFor="f">여자</label>
          <input type="radio" name="gender" id="f" defaultValue="f"></input>
        </div>
        <div className="join-btn">
          <input type="button" value="회원가입" />
        </div>
      </div>
    </>
  );
}

export default App;
