import { useLocation } from "react-router-dom";

const BoardDetail1 = () => {
  const location = useLocation(); //라우터를 통해서 넘어온 데이터를 꺼내는 훅(state를 통해서 넘어온 경우)
  const boardNo = location.state.boardNo;
  const board = location.state.board;
  console.log(boardNo);
  console.log(board);

  return (
    <div>
      <h3>게시글 상세페이지222</h3>
      <ul>
        <li>글번호 : {board.boardNo}</li>
        <li>제목 : {board.boardTitle}</li>
        <li>내용 : {board.boardContent}</li>
        <li>작성자 : {board.boardWriter}</li>
        <li>작성일 : {board.boardDate}</li>
      </ul>
    </div>
  );
};
export default BoardDetail1;
//왠만하면 이 방법 안쓰는게 좋긴하다
