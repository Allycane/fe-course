/**
 * fetch(resource) : 데이터 파일을 호출하여 데이터를 가져오는 함수
 * - 일반적인 데이터 함수 : JSON (JavaScript Object Notation) 파일을 호출
 * - Web API 구조는 보통 JSON 형태임
 * 
 */
let data_url = 'http://127.0.0.1:5500/javascript/13.async/data.json';


function getJson2 () {
    fetch(data_url) // 서버 기반으로 json 파일 호출
        .then(response => response.json())
        // return에 성공한 값이 다음 then의 파라미터로 들어온다 - Method Chaining
        .then(jsonData => console.log(jsonData))
        // 불러온 다양한 Response 데이터 중 json 파일의 내용을 호출 {response.json()}
        .catch(error => console.log(`error = `, error));
}

const getJson = () => {
    fetch(data_url)
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
        .catch(error => console.log(`error = `, error));
};

const getJson3 = async() => {
    let response = await fetch(data_url);
    // 실행에 성공하던 실패하던 response라는 변수 내로 그 결과가 들어가게 된다
    // console.log(`response => \n`, response);
    // 출력값 : response => Promise { <pending> } : 대기중 : 동기식 처리인 콘솔 로그부터 처리했기 때문
    // arrow Function 의 경우에는 async는 파라미터 앞에, await은 fetch 앞에 붙는다
    return response.json();
}

async function getJson4() {
    let response = await fetch(data_url);
    return response.json();
}

async function test() {
    let jsonData1 = await getJson3();
    let jsonData2 = await getJson4();

    console.log(jsonData1);
    console.log(jsonData2);
}

getJson();
getJson2();
/* Response Type? Response object?
status : 200 = OK = 성공 */

// getJson3();
test();

