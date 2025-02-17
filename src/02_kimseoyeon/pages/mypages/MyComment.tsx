import React, { useState } from "react";
import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";
import Pagination from "../../components/common/mypage/Pagination";

const tabItems: string[] = [
  "마이댓글",
  "좋아요"
];

const MyComment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // ✅ 현재 선택된 탭

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <div className="dashboard__content">
          <h1 className="text-30 lh-14 fw-600 titleFont" style={{marginBottom : "30px"}}>내 활동</h1>

          {/* ✅ 탭 네비게이션 */}
          <div className="tabs -underline-2 js-tabs">
            <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
              {tabItems.map((item, index) => (
                <div className="col-auto" key={index}>
                  <button
                    className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                      activeTab === index ? "is-tab-el-active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ 표 추가 (탭에 따라 변경 가능) */}
          <div className="overflow-scroll scroll-bar-1">
            <table className="table-3 -border-bottom col-12">
              <thead className="bg-light-2">
                <tr>
                  <th>번호</th>
                  <th>댓글 내용</th>
                  <th>작성일</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                {/* ✅ 탭에 따라 다른 내용 표시 (예제 데이터) */}
                {activeTab === 0 && (
                  <>
                    <tr>
                      <td>1</td>
                      <td>좋은 글 감사합니다!</td>
                      <td>2024-02-17</td>
                      <td>
                         <button className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          수정
                        </button>
                        <button className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          삭제
                        </button>
                      </td>
                    
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>이 내용 정말 유익하네요!</td>
                      <td>2024-02-16</td>
                      <td>
                        <button className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          수정
                        </button>
                        <button className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          삭제
                        </button>
                      </td>
                    </tr>
                  </>
                )}
                {activeTab === 1 && (
                  <tr>
                    <td>3</td>
                    <td>좋은 정보 감사합니다!</td>
                    <td>2024-02-15</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-green-1 text-white">
                        승인됨
                      </span>
                    </td>
                    <td>
                      <button className="button -blue-1 size-40 rounded-full border-light">
                        수정
                      </button>
                      <button className="button -red-1 size-40 rounded-full border-light">
                        삭제
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default MyComment;
