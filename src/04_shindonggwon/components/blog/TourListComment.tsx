import { useState } from "react";
import "../../styles/tourListComment.scss"

const TourListComment = () => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value); // 텍스트 영역의 값을 상태에 저장
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      // 실제 댓글 제출 로직 (예: API 호출 등)
      console.log("댓글 등록:", comment);
      setComment(""); // 댓글 등록 후 텍스트 영역 비우기
    } else {
      alert("댓글을 작성해주세요.");
    }
  };

  return (
    <div className="container comment mt-100 mb-50">
      <div className="col-12 commentBox subFont">
        <textarea
          placeholder="소중한 댓글을 남겨주세요."
          value={comment}
          onChange={handleCommentChange} // 댓글 입력값을 상태에 반영
        />
      </div>
      <div className="col-12 text-end subFont">
        <button
          className="btn text-16 mt-10"
          onClick={handleCommentSubmit} // 댓글 등록 처리
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default TourListComment;
