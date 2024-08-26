const TestComponent3 = () => {
  return (
    <div>
      <h3>이건 세번째 컴포넌트!</h3>
      <TestComponent4></TestComponent4>
    </div>
  );
};

const TestComponent4 = () => {
  return (
    <div>
      <h3>이건 세번째 컴포넌트!</h3>
    </div>
  );
};
//외부에 작성한 컴포넌트는 해당파일에서 외부에서 사용할 수 있는 컴포넌트를 지정
export default TestComponent3;
