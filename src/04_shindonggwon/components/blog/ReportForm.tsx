import { useState } from "react";

const ReportForm = () => {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reportData = { reason, details };

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        alert("신고가 접수되었습니다.");
        setReason("");
        setDetails("");
      } else {
        alert("신고 접수에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  const handleCancel = () => {
    setReason("");
    setDetails("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row x-gap-20 y-gap-20">
        <h3>신고사유</h3>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
          className="form-control"
        />

        {/* 버튼 그룹 */}
        <div className="col-12 d-flex gap-10">         
          <button type="button" className="btn btn-secondary w-full" onClick={handleCancel}>
            취소
          </button>
          <button type="submit" className="btn btn-primary w-full">
            등록 요청
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportForm;
