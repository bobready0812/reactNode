Global Router

/ -> Home #1

/switch -> 회원/비회원 선택해.
 회원으로 연결하면 로그인 후 현재 2번 화면 띄움
 비회원으로 연결하면 7번 화면 띄움

/join -> Join #4
/login -> Login #3
/loading -> Loading #6


로딩페이지랑 홈 통합

1. 만든 꽃병 확인할 수단 필요함(home에) -> 햄버거 필요함
2. 꽃병 별 삭제/수정 기능 필요함
3. 유저별 관리 기능 도입, 꽃병 아이디별 관리
4. 꽃 선택은 최초 생성자만 가능 -> 디자인 때문에 어쩔 수 없음.


On Router
## 햄버거 / 관리
/on/:user -> 2와 같은 화면 + 햄버거 / - 편지쓰기
모달에서 링크 클릭했을 때 밑으로 연결
/on/:FB_id -> 꽃병 상태 보기
/on/:FB_id/setting -> 수정/삭제 가능
/on/:FB_id/write -> 쓰기

Off Router
## 편지 쓰기
/off -> FB join page
/off/:FB_id -> 꽃병 상태 보기
/off/:FB_id/write -> 편지 쓰기

http://oneulcong/switch/on/:A8cF3f/write
http://oneulcong/switch/off/:A8cF3f/write

보안 관련한 이슈
A8cF3f -> FB_id 해쉬화.
on으로 접속 시 로그인 검사.