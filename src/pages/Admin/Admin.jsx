import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div id="admin">
      <form>
        <label>창고 이름</label>
        <input type="text" required />
        <br />
        <label>창고 주소</label>
        <input type="text" required />
        <br />
        <label>상세 주소</label>
        <input type="text" />
        <br />
        <label>창고종류</label>
        <select name="types">
          <option value="ROOM_TEMPERATURE">상온창고</option>
          <option value="LOW_TEMPERATURE">저온창고</option>
          <option value="BONDED">보세창고</option>
          <option value="SAVAGE">야외창고</option>
          <option value="HAZARDOUS">위험물창고</option>
          <option value="SELF_STORAGE">셀프창고</option>
          <option value="CONTAINER">컨테이너</option>
        </select>
        <br />
        <label>서비스 타입</label>
        <select name="service-type">
          <option value="GENERAL">일반</option>
          <option value="AGENCY">에이전시</option>
        </select>
        <br />
        <p>
          위도 경도는 여기를 참고해주세요{" "}
          <a href="http://lalo.esran.com" target="_blank">
            위도경도찾기 사이트
          </a>
        </p>
        <label>위도</label>
        <input type="text" required />
        <br />
        <label>경도</label>
        <input type="text" required />
        <br />
        <label>창고 평수</label>
        <input type="text" />
        <br />
        <label>창고 설명</label>
        <input type="text" />
        <br />
        <label>창고 여는시간</label>
        <input type="text" placeholder="00:00:00" />
        <label>창고 닫는시간</label>
        <input type="text" placeholder="00:00:00" />
        <br />
        <label>창고 운영시간 추가 정보</label>
        <input type="text"/>
        <br />
        <label>CCTV존재유무</label>
        <input type="radio" name="cctv"/>있음
        <input type="radio" name="cctv"/>없음
        <br/>
        <label>경비업체 존재유무</label>
        <input type="radio" name="security"/>있음
        <input type="radio" name="security"/>없음
        <br/>
        <label>경비업체 이름</label>
        <input type="text"/>
        <br/>
        <label>잠금장치 존재유무</label>
        <input type="radio" name="lock"/>있음
        <input type="radio" name="lock"/>없음
        <br/>
        <label>냉난방 정보</label>
        <input type="text"/>
        <br/>
        <label>관리인역 존재유무</label>
        <input type="radio" name="worker"/>있음
        <input type="radio" name="worker"/>없음
        <br/>
        <label>보험 가입유무</label>
        <input type="radio" name="insurance"/>있음
        <input type="radio" name="insurance"/>없음
        <br/>
        <label>보험사 이름</label>
        <input type="text"/>
        <br/>
        <label>픽업 서비스유무</label>
        <input type="radio" name="pickup"/>있음
        <input type="radio" name="pickup"/>없음
        <br/>
        <label>방문시 주차가능유무</label>
        <input type="radio" name="park"/>있음
        <input type="radio" name="park"/>없음
        <br/>
        <label>주차장 규모</label>
        <input type="text"/>
        <br/>
        <button>제출</button>
      </form>
    </div>
  );
}

export default Admin;
