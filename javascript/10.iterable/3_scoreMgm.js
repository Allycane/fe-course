/**
 * 성적 관리 프로그램
 */
function createList() {
    // 호출되면 배열을 생성해서 반환
    // return [];
    return new Array();
}

function createScore(scoreList, name, kor, eng, math) {
    scoreList.push( { name, kor, eng, math } );
}

function searchName(scoreList, name) {
    return scoreList.find(score => score.name === name);
}

function searchScore(scoreList, subject, score) {
    return scoreList.filter((item) => item[subject] >= score);
}

// function addScore(scoreList, subject) {
//     return scoreList.map((item) => item[subject] + 5);
// }

function updateScore(scoreList, subject, score) {
    return scoreList.map((item) => (item[subject] < 96) ? { ...item, [subject]:item[subject] + score} : item );
}

let scoreList = createList();

// 학생의 이름, 국어, 영어, 수학
createScore(scoreList, '홍길동', 100, 45, 59);
createScore(scoreList, '스미스', 37, 100, 81);
createScore(scoreList, '이순신', 98, 71, 37);
createScore(scoreList, '제임스', 27, 99, 12);
console.log(scoreList.length);
console.log(scoreList);

// 제임스 검색
console.log('Result =', searchName(scoreList, '제임스'));

// 국어점수가 90점 이상인 학생 반환
console.log(searchScore(scoreList, 'kor', 90));
console.log();
console.log(searchScore(scoreList, 'eng', 70));

// 모든 학생의 수학점수에 5점 추가
// console.log(addScore(scoreList, 'math'));
console.log('updateScore :: ', updateScore(scoreList, 'math', 5));