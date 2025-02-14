const CommentList = () => {
  return (
    <div className="container commentList">
      <div className="row px-20 subFont text-16">
        <div className="col-9 mt-20">
          <div className="row">
            <div className="col-12">
              <p>
                댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용
                댓글내용 댓글내용 댓글내용 댓글내용
                댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
              </p>
            </div>
            <div className="col-12 mt-10">
              <div>아이디 | 작성날짜</div>
            </div>
            <div className="col-12 mt-10 pointer text-20">
              <i className="bi bi-chat-square-heart mr-10 "></i>
              <span className="">0</span>
            </div>
          </div>
        </div>
        <div className="col-3 text-end text-24 ">
          <i className="bi bi-exclamation-triangle mr-20 pointer softFont"></i>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CommentList;
