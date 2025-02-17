const Comment = () => {
  return (
    <div className="container comment mt-100 mb-50">
        <div className="col-12 commentBox subFont"><textarea placeholder="소중한 댓글을 남겨주세요." /></div>
        <div className="col-12 text-end subFont"><button className="btn text-16 mt-10">등록</button></div>
    </div>
  );
};

export default Comment;
