let key = `f27e1b4ec2dcdcb40c550a3c7d27cc11`;
let target = `20260331`;
const data_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

window.addEventListener('DOMContentLoaded', function() {
    showJson();
})

const getJson = async() => {
    let response = await fetch(data_url);
    return response.json();
}

async function showJson() {
    // 1. JSON 데이터 호출
    let kobis = await getJson();
    console.log(kobis);

    // 2. 출력 데이터 생성 DHTML
    let output = `
        <h1>${kobis.boxOfficeResult.boxofficeType}</h1>
        <h3>${kobis.boxOfficeResult.showRange}</h3>
        <table border=1>
            <tr>
                <th>순위</th>
                <th>영화제목</th>
                <th>개봉일</th>
                <th>당일 관객수</th>
                <th>누적 관객수</th>
                <th>누적 매출액</th>
            </tr>
            ${
                kobis.boxOfficeResult.dailyBoxOfficeList.map((data) => 
                    `
                        <tr>
                            <td>${data.rank}</td>
                            <td>${data.movieNm}</td>
                            <td>${data.openDt}</td>
                            <td>${parseInt(data.audiCnt).toLocaleString()} 명</td>
                            <td>${parseInt(data.audiAcc).toLocaleString()} 명</td>
                            <td>${parseInt(data.salesAcc).toLocaleString()} 원</td>
                        </tr>
                    `
                ).join("")
                /* join으로 배열을 문자열로 바꿔주지 않으면 출력값 상단에 map()으로 인해 새롭게 생성된
                배열을 구분하는 , 가 무수히 생성되는 현상이 발생한다.*/
            }
        </table>
    `;
    /*
    순위 : rank
    영화제목 : movieNm
    개봉일 : openDt
    당일 관객수 : audiCnt
    누적 관객수 : audiAcc
    누적 매출액 : salesAcc
    */
    // 3. 출력 innerHTML
    document.querySelector('#content').innerHTML = output;
}