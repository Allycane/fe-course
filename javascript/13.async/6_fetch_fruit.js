// 최초로 호출되는 이벤트 함수 : window.addEventListener();

window.addEventListener('DOMContentLoaded', () => {
    show(); // show 함수 내에서 getJson을 호출하고 있기 때문에 show만 호출해서 바로 실행하면 된다
});




// getJson 함수를 생성

const data_url = 'http://127.0.0.1:5500/javascript/13.async/fruit.json';
async function getJson() {
    let response = await fetch(data_url);
    return response.json();
}

// show 함수 생성
const show = async() => {
    let jsonData = await getJson(); // getJson 함수도 비동기식이기 때문에 먼저 실행하게끔 만들어줘야 함
    console.log(`jsonData = `, jsonData, typeof jsonData);

    let output = `
        <h2>${jsonData.title}</h2>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>COLOR</th>
                <th>EMOJI</th>
            </tr>
            ${//JavaScript 문법을 추가할 땐 이와같이 작성
                jsonData.list.map((fruit, idx) => 
                    `
                    <tr>
                        <td>${idx+1}</td>
                        <td>${fruit.name}</td>
                        <td>${fruit.color}</td>
                        <td>${fruit.emoji}</td>
                    </tr>
                    `
                    // 백틱연산자에 묶인 요소들은 하나의 문자열로 처리된다 : return 제거가능
                ).join("") // 배열을 문자열로 만들어주는 메서드
            }
        </table>
    `;
    // console.log(output);
    
    document.querySelector('#content').innerHTML = output;
};
