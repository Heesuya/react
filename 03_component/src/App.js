import TestComponent3 from "./component/ComponentTest1";
import { TestComponent5, TestComponent6 } from "./component/ComponentTest2";
import { useState } from "react";
function App() {
  const [str, setStr] = useState("hi");
  const [num, setNum] = useState(100);
  const [obj, setObj] = useState({
    name: "유저1",
    age: 20,
    addr: "서울시 종로구",
  });
  const [arr, setArr] = useState([1, 2, 3, 4]);
  return (
    <div className="App">
      <h1>컴포넌트 프로젝트</h1>
      <hr></hr>
      <h2>컴포넌트(component) : 사용자에게 보여지는 UI 요소</h2>
      <p>
        HTML 태그는 단일 태그를 작성해야 함<br></br>
        컴포넌트 여러태그와, 디자인, 기능까지 포함한 태그 덩어리
      </p>
      <p>
        컴포넌트는 함수 형식으로 작성해서 문서 내부에 포함할 수 있고, 외부에서
        작성된걸 불러올 수도 있음.
      </p>
      {/* 컴포넌트 사용할때는 태그 사용하듯이 사용 -> 태그이름은 컴포넌트 함수 이름 */}
      <TestComponent1></TestComponent1>
      <TestComponent1></TestComponent1>
      <TestComponent1></TestComponent1>
      <TestComponent1></TestComponent1>
      <TestComponent2></TestComponent2>
      <TestComponent3 />
      <TestComponent5 />
      <TestComponent6 />
      <p>
        컴포넌트 호출 시 데이터를 전달할 수 있고, 해당 데이터로 만들어진 요소를
        리턴 받을 수 있음
      </p>
      {/*
      컴포넌트로 데이터를 전송하는 방법 : 속성=값 -> <컴포넌트이름 속성1=값1 속성2=값2 속성3=값3 />
      컴포넌트로 전달하는 데이터 타입은 무관(문자열, 숫자, 객체, 배열, 함수, 논리형...)
      */}
      <TestComponent8 data1="문자열1" data2="문자열2" data3="문자열3" />
      <TestComponent9 str={str} data1={num} />
      <TestComponent10 arr={arr} obj={obj} />
      <hr></hr>
      <TestComponent11 obj={obj} setObj={setObj} />
      <hr></hr>
      <TestComponent12 arr={arr} setArr={setArr} />
    </div>
  );
}
//컴포넌트 생성하는 방법
//-> 함수를 한개 생성하면 됨!!
//1. 함수 이름 작성할때 대문자로 시작
//2. jsx를 리턴
//소문자로 시작 기능을 위한 함수 / 대문자 시작 컴포넌트 담당하는 함수로 인식
function TestComponent1() {
  return (
    <div>
      <h3>첫번째 컴포넌트!!</h3>
      <p>이거 잘 보여???</p>
    </div>
  );
}
const TestComponent2 = () => {
  return (
    <div>
      <h3>나는 두번째 컴포넌트!</h3>
      <p>이것도 잘 보이지?</p>
    </div>
  );
};
/*
function TestComponent8(props){

}
*/
const TestComponent8 = (props) => {
  //컴포넌트로 보내온 데이터를 받는 방법
  //매개변수로 props를 선언 -> 매개변수의 props 객체내부에 전달된 데이터들이 있음
  console.log(props);
  const data1 = props.data1;
  const data2 = props.data2;
  const data3 = props.data3;
  return (
    <ul>
      <li>{data1}</li>
      <li>{data2}</li>
      <li>{data3}</li>
    </ul>
  );
};
const TestComponent9 = (props) => {
  console.log(props);
  const str = props.str;
  const num = props.data1;
  return (
    <div>
      <p>str : {str}</p>
      <p>num : {num}</p>
    </div>
  );
};
const TestComponent10 = (props) => {
  const arr = props.arr;
  const obj = props.obj;
  return (
    <div>
      <ul>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{obj.addr}</li>
      </ul>
      <ul>
        {arr.map((item, index) => {
          return <li key={"arr" + index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
const TestComponent11 = (props) => {
  const obj = props.obj;
  const setObj = props.setObj; //같은 state를 사용을 해서 같이 바뀐다
  const changeName = () => {
    obj.name = "윤희수";
    setObj({ ...obj }); //객체 타입이 무엇이든 받을수 있기에,  setObj(수정함수) 보낼수 있다.
  };
  return (
    <div>
      <p>이름 : {obj.name}</p>
      <p>나이 : {obj.age}</p>
      <p>주소 : {obj.addr}</p>
      <button onClick={changeName}>이름변경</button>
    </div>
  );
};

const TestComponent12 = (props) => {
  const arr = props.arr;
  const setArr = props.setArr;
  const [addNum, setAddNum] = useState("");
  const changeInput = (e) => {
    setAddNum(e.target.value);
  };
  const pushArr = () => {
    setArr([...arr, addNum]);
    setAddNum("");
  };
  return (
    <>
      <ul>
        {arr.map((item, index) => {
          return <li key={"arr" + index}>{item}</li>;
        })}
      </ul>
      <div>
        <label htmlFor="addNum">추가할숫자입력</label>
        <input
          type="text"
          id="addNum"
          value={addNum}
          onChange={changeInput}
        ></input>
        <button onClick={pushArr}>추가하기</button>
      </div>
    </>
  );
};
export default App;
