/**
 * 공통적으로 자주 사용하는 함수를 정리해놓는 라이브러리
 */

// 데이터 타입에 상관없이 문자를 정수 타입으로 변환하는 함수
export function toNumber (num1, num2) {
    return {num1: parseInt(num1), num2: parseInt(num2)};
}