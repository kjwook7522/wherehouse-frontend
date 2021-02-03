# WhereHouse Front End
Wherehouse는 숭실대학교 창업지원단 지원을 받는 창업팀 '반창고'의 첫 번째 웹서비스 플랫폼입니다.
이 프로젝트는 기업의 짐을 들어드리고자 뭉쳤습니다. 코로나 사태로 인한, 기업 설비투자 감소, 창고주들의 공실률, 미수율 문제를 중개 플랫폼을 통해 해결하고 물류 업계의 새로운 대안을 만들어 나가고 있습니다.

### **🏠일반창고(저온, 상온, 보세, 야적 보관 창고) 중개 서비스**

-   전국구 단위의 창고 부동산 중개를 위해 노오력 중!
-   부동산과 창고주는 우리의 파트너!
-   할인 쿠폰, 월세 비용 할인 등 다양한 프로모션 기획

### **🏠물류 대행 창고(3PL, FMM) 중개 서비스**

-   언텍트 시대의 트랜드는 바로 물.류.대.행!
-   창고 임대 비용 부담을 최소화 할 수 있는 대행 서비스를 중개합니다😇
-   일반창고처럼, 대행비(운임, 보관, 출고) 할인 프로모션 기획 중!

### **🏠창고 추천 프로세스 운영(창고 에이전시 활동)**

-   팔레트, QC, 풀필먼트, 삼자물류,,,, 너무 어렵잖아요!! 반창고가 해결해 드립니다.
-   원하는 창고 형태, 그리구 화주님의 기업 정보를 입력하면 가장 적합한 창고를 추천해 드립니다.
-   비교견적, 비용 분석 등 물류 에이전시로서의 역할 수행!


## 🗂 디렉토리 구조

```
.
├── public
└── src
    ├── actions
    ├── reducers
    ├── components
    ├── pages
    ├── store.js
    ├── App.js
    └── index.js
```


## 🛠 개발 스택

* HTML5
* CSS3
* JavaScript
* React
* Redux


## 📚 사용한 라이브러리

* create-react-app(3.4.1)
* cross-env(7.0.2)
* react-naver-map(0.0.13)
* antd(4.4.2)
* aos(2.3.4)
* react-icons(3.11.0)
* font-awesome


## 💻 로컬 실행

1. NPM 패키지 설치
```
$ npm install
```
2. 리액트 실행
```
$ npm start
```
3. 웹 브라우저 접속
```
localhost:3000
```


## Main Page

Wherehouse의 첫 화면입니다. 메인 서치바를 통해 창고검색을 할 수 있으며 파트너 버튼을 통해 원하는 카테고리의 파트너를 골라 볼 수 있습니다.
상단의 헤더를 통해 회원가입 / 로그인 페이지로 넘어갈 수 있습니다.

<div>
  <img width="50%" alt="스크린샷 2021-02-03 오후 4 48 51" src="https://user-images.githubusercontent.com/29251371/106715639-b37a2a00-6640-11eb-81fe-c4b23c457bb8.png">
  <img width="50%" alt="스크린샷 2021-02-03 오후 4 48 57" src="https://user-images.githubusercontent.com/29251371/106715662-bb39ce80-6640-11eb-8c36-04826234e31f.png">
</div>


## Sign In / Sign Up Page
<div>
  <img width="50%" alt="스크린샷 2021-02-03 오후 4 49 03" src="https://user-images.githubusercontent.com/29251371/106715690-c42aa000-6640-11eb-92d1-f0ae3bea16d7.png">
  <img width="50%" alt="스크린샷 2021-02-03 오후 4 49 08" src="https://user-images.githubusercontent.com/29251371/106715720-ce4c9e80-6640-11eb-8a7e-6d0cf64791c4.png">
</div>


## Search Page

네이버 지도 API를 활용하여 지도를 보여줍니다. 오른쪽에는 지도에 있는 창고들이 나열될 예정입니다. 일반 창고와 물류 대행 창고를 골라 조회할 수 있습니다.
<img width="1920" alt="스크린샷 2021-02-03 오후 4 53 42" src="https://user-images.githubusercontent.com/29251371/106715730-d3115280-6640-11eb-9f80-f080d38efb5e.png">