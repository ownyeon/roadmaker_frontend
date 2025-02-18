import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import festivals from '../data/festivalList';
import Modal from './FestivalModal';
import FestivalAddButton from '../components/blog/FestivalAddButton';
import TagList from '../components/blog/CalendarTag';
import "../styles/common.scss";
import "../styles/festivalAddButton.scss";
import "../styles/calendar.scss";
import "../styles/calendarComponent.scss";

type Value = Date | null;
type Festival = {
  id: number;
  img: string;
  title: string;
  date: string;
  details: string;
};

function CalendarComponent() {
  const [value, setValue] = useState<Value>(new Date()); // 날짜 선택 상태
  const [filterTag, setFilterTag] = useState<string>(''); // 선택된 태그 상태
  const [filteredItems, setFilteredItems] = useState<Festival[]>(festivals); // 필터된 항목 리스트
  const [showModal, setShowModal] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  // 날짜 형식 비교 함수 (YYYY-MM-DD)
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 날짜 필터링 함수
  const handleDateChange = (date: Value, event: React.MouseEvent<HTMLButtonElement>) => {
    if (!date) return; // null 방어 코드 추가
    setValue(date);
    const selectedDate = formatDate(date);
    const filtered = festivals.filter((festival) => festival.date === selectedDate);
    setFilteredItems(filtered); // 일자를 클릭하면 여행지 목록이 필터링 되어 표시됨
  };

  // 태그 필터링 함수
  const handleTagClick = (tag: string) => {
    setFilterTag(tag);
    filterItems(formatDate(value as Date), tag); // 태그와 날짜를 기준으로 필터링
  };

  // 날짜와 태그로 필터링하는 함수
  const filterItems = (date: string, tag: string) => {
    const filtered = festivals.filter((festival) => {
      const dateMatches = festival.date === date || !date; // 날짜가 일치하거나 날짜가 선택되지 않았으면
      const tagMatches = festival.tags.includes(tag) || !tag; // 태그가 일치하거나 태그가 선택되지 않았으면
      return dateMatches && tagMatches;
    });
    setFilteredItems(filtered);
  };

  // 축제 항목 클릭 시 모달 열기
  const handleFestivalClick = (festival: Festival) => {
    setSelectedFestival(festival);
    setShowModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
    setSelectedFestival(null);
  };

  return (
    <div className="calendar-component">
      <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
        <div className="col-auto">
          <div>여행지</div>
        </div>
        <div className="col-auto">
          <div>&gt;</div>
        </div>
        <div className="col-auto">
          <div>축제 달력</div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="titleFont">축제 달력</h2>
              <p className="subFont">올해의 주요 축제 일정</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <hr />
      <section>
        <FestivalAddButton />
        <br />

        {/* Calendar에 onChange 적용 */}
        <div className="calendar-container">
        <Calendar
          onChange={(date, event) => handleDateChange(date as Date, event)}
          value={value}
          tileClassName={({ date }) => {
            // 토요일(6)과 일요일(0)을 인식하여 'weekend' 클래스를 추가
            if (date.getDay() === 0 || date.getDay() === 6) {
              return 'react-calendar__tile--weekend'; // 'weekend' 클래스를 추가
            }
            return '';
          }}
        />
        </div>
      </section>
      <br />
      <TagList onTagClick={handleTagClick} /> {/* TagList에서 태그 클릭 시 필터링 */}
      <br />

      {/* 여행지 목록 - 날짜와 태그가 선택되면 나타남 */}
      {filteredItems.length > 0 && (
        <div className="row y-gap-30 pt-30">
          {filteredItems.map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <div className="blogCard -type-1 d-block" onClick={() => handleFestivalClick(item)}>
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img className="cover w-100 img-fluid" src={item.img} alt="festival" />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 모달 (팝업창) */}
      {selectedFestival && (
        <Modal
          show={showModal}
          onClose={closeModal}
          title={selectedFestival.title}
          details={selectedFestival.details}
          img={selectedFestival.img}
        />
      )}
    </div>
  );
}

export default CalendarComponent;
