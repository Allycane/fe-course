/**
 * fetch 함수 호출
 */

export const fetchData = async(url) => {
    const response = await fetch(url);
    // const jsonData = await response.json();
    // setData(jsonData);
    // return jsonData;
    return await response.json();
}
/**url이 매번 다를 수 있기 떄문에 url을 인자값으로 받아온다
 * useState가 없기 때문에 return으로 반환만 하는 것으로 수정이 가능하다
 * 이 마저도 줄여 jsonData를 별도의 변수로 선언하지 않고 바로 반환하는 것도 가능하다
 */