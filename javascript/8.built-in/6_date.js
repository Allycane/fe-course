/**
 * Date 클래스 - 날짜 형식을 지원하는 클래스
 *  - new Date() 클래스 생성 후, 생성된 객체의 메서드를 호출
 *  - getFullYear(), getMonth(), getDate() ...
 */
console.clear();
let date = new Date();
let date2 = Date.now(); // static / 현재 날짜를 불러온다
let year = date.getFullYear();
let month = date.getMonth() + 1;
let date3 = date.getDate(); 
let day = date.getDay(); // 요일을 호출
console.log(date); // 2026-03-26T04:51:38.408Z 시스템 기준
console.log(date2) // 1774500698408 - 현재 날짜를 1970년 1월 1일 0시 0분 0초인 epoch 부터 현재까지 경과한 밀리초
console.log(year); // 2026
console.log(month); // 3
console.log(date3); // 26
console.log(day); // 4 - 묙요일 ( 일요일 = 0 )
console.log(`오늘을 ${year}년 ${month}월 ${date3}일 입니다~`);

console.log();
console.log(date.toLocaleDateString('ko-KR')); // 한국 기준 날짜 출력 2026. 3. 26.
console.log(date.toLocaleDateString('en-US'));  // 미국 기준 날짜 출력 3/26/2026 
console.log(date.toLocaleDateString('ja-JP')); // 일본 기준 날짜 출력 2026/3/26 

