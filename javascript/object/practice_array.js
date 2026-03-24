/**
 * 2차원 배열 연습
 * 
 * 입력할 인원수 5명
 * 입력할 과목수 4과목
 * 이름 학년 국어 영어 수학 과학
 * 총점 + 평균
 */


// 학생에 대한 생성자 함수
let Student = (name, grade, kor, eng, math, sci) => {
    this.name = name;
    this.grade = grade;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.sci = sci;

    this.sum = () => {
        return this.kor + this.eng + this.math + this.sci;
    }
    this.avg = () => {
        return parseInt(this.sum() / 4);
    }
}
// 학생 데이터
let stList = [
    ['홍길동', 3, 98, 90, 69, 55],
    ['스미스', 1, 58, 93, 29, 59],
    ['김유신', 2, 100, 52, 78, 35],
    ['이순신', 4, 37, 56, 12, 32],
    ['제임스', 3, 85, 93, 50, 100]
]

// 학생 데이터 2차원 배열
for ( let i = 0; i < stList.length; i++ ) { 
    // 행, 인덱스는 0부터 시작하므로 Student 하나의 속성값 -1
    let object = [];
    
    for ( let j = 0; j < stList[i].length; j++ ) { 
        if ( j == 0 ) object.name = stList[i][j];
        if ( j == 1 ) object.grade = stList[i][j];
        if ( j == 2 ) object.kor = stList[i][j];
        if ( j == 3 ) object.eng = stList[i][j];
        if ( j == 4 ) object.math = stList[i][j];
        if ( j == 5 ) object.sci = stList[i][j];
    }
    console.log(object);
    
    
}
/**
 * 열 = 세로줄
 * 세로만을 신경쓴다고 할 경우,
 * j 가 0 일때 -> 홍길동 스미스와 같은 사람 이름 세로줄
 * j가 1 일때 -> 학년
 * j가 2 일때 -> 국어성적...
 * 
 * i가 0일때 j는 출력할 값이 없다
 * i가 1일때 j는 0 = 이름을 출력
 * i가 2일때 j는 1 = 학년을 출력
 * i가 3일때 j는 2 = 국어 성적을 출력
 */

