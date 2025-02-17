import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 스타일 적용
import festivals from '../data/festivalList'; // 축제 데이터 import
import Modal from './FestivalModal'; // 모달 컴포넌트 import
import FestivalAddButton from '../components/blog/FestivalAddButton';

type Value = Date | null;
type Festival = {
  id: number;
  img: string;
  title: string;
  date: string;
  details: string;
};

function CalendarComponent() {
  const [value, setValue] = useState<Value>(new Date()); // 초기값 설정
  const [filteredItems, setFilteredItems] = useState(festivals);
  const [showModal, setShowModal] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  // 날짜 형식 비교 함수 (YYYY-MM-DD)
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 선택된 날짜에 해당하는 축제를 필터링하는 함수
  const handleDateChange = (date: Value, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (!date) return; // null 방어 코드 추가
    setValue(date);
    const selectedDate = formatDate(date);
    const filtered = festivals.filter((festival) => festival.date === selectedDate);
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
    <div>
      {/* Calendar에 onChange 적용 */}
      <Calendar onChange={(date, event) => handleDateChange(date as Date, event)} value={value} />
      <FestivalAddButton />
      
      {/* 축제 리스트 */}
      <div className="row y-gap-30 pt-30">
        {filteredItems.length > 0 ? (
          filteredItems.slice(0, 9).map((item) => (
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
          ))
        ) : (
          <div>No events found for this date.</div>
        )}
      </div>

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
