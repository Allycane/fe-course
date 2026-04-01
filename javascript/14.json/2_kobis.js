let key = `f27e1b4ec2dcdcb40c550a3c7d27cc11`;
let target = `20210305`;

async function getJson(type, target) {
    // getJson이 실행이 될 때마다 url이 갱신되어야 하기 때문에 data_url을 getJson 함수 내에 포함시킨다
    // key값은 전역으로 선언하였고, 날짜는 선택한 날짜의 JSON 데이터를 불러와야 하기 때문에 함수의 파라미터로 선언
    // getJson을 불러오는 handleBoxOffice 함수 내에서도 target을 지정해주어야 함

    const data_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${target}`;
    let response = await fetch(data_url);
    return response.json();
}

async function getMovieInfo(movieCd) {
    // 영화의 상세 API 주소
    const movieData_url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    let response = await fetch(movieData_url);

    return response.json();
}

function openModal(infoObj) {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');

    let modalClose = document.querySelector('#modal-close');
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    })

    let output = `
        <h3>[ ${infoObj.rank}위 ] ${infoObj.movieNm}</h3>
        <ul>
            <li><label>감독 : ${infoObj.director}</label></li>
            <li><label>출연진 : ${infoObj.actorName}</label></li>
        </ul>
    `;

    modal.style.display = 'flex';
    modalBody.innerHTML = output;
}

async function handleMovieInfo(movieCd, rank) {
    let info = await getMovieInfo(movieCd);
    let movieNm = info.movieInfoResult.movieInfo.movieNm;
    let director = info.movieInfoResult.movieInfo.directors[0].peopleNm;

    /* 여러 배우 이름을 출력하고 싶을 경우, 현재 배우의 "한국이름" 까지의 경로 : info.movieInfoResult.movieInfo.actors.peopleNm
    actors 내에 객체로 분리 되어있는 peopleNm만을 여러개 출력하고 싶어서 map()을 이용해 모든 actors의 peopleNm 값을 뽑아냈다*/
    let actors = info.movieInfoResult.movieInfo.actors.map((people) => {
        return people.peopleNm;
    })

    /** 왕과 사는 남자 같은 영화는 배우가 80명이나 되기에 앞에 오는 5명의 이름만 출력할 수 있게 slice()로 배열을 잘라주었다
     * 이후 openModal() 로 내보내는건 슬라이스 처리된 배우 5명의 이름들
     */
    let actorName = actors.slice(0, 5);


    openModal({ movieNm, director, actorName, rank });
    // console.log(movieNm, typeof movieNm);
    // console.log(director, typeof director);
    // console.log(actors.slice(0, 5), typeof actors);
}
 
async function handleBoxOffice() {
    let selectType = document.querySelector('#type').value;
    // 실행버튼을 눌렀을 때 날짜 데이터를 가져와서 콘솔에 적는다
    let targetDt = document.querySelector('#targetDt').value; // input type = value

    if ( selectType === 'default') {
        alert(`옵션을 선택해주세요~`);
        document.querySelector('#type').focus();
    }else if ( targetDt === '' ) {
        alert(`날짜를 선택해주세요~`);
        document.querySelector('#targetDt').focus();
    } else {
        // let target = new String(targetDt).split("-").join("");

        // let dateArray = new String(targetDt).split("-");
        // target = dateArray[0]+dateArray[1]+dateArray[2]
        // target = dateArray.join("");
        
        // target = targetDt.split("-").join("");

        // 출력값이 배열, 요소는 문자열이기 때문에 reduce를 이용하는 것도 가능
        target = targetDt.split("-").reduce((acc, cur) => acc + cur);

        let kobis = await getJson(selectType, target);
        let kobisResult = kobis.boxOfficeResult;
        let kobisList = null;
        if ( selectType === 'Daily') {
            kobisList = kobis.boxOfficeResult.dailyBoxOfficeList;
        } else {
            kobisList = kobis.boxOfficeResult.weeklyBoxOfficeList;
        }

        let output = `
            <h2>${kobisResult.boxofficeType}</h2>
            <h3>${kobisResult.showRange}</h3>
            <table border=1>
            <tr>
                <th>순위</th>
                <th>영화제목 / 영화코드</th>
                <th>개봉일</th>
                <th>당일 관객수</th>
                <th>누적 관객수</th>
                <th>누적 매출액</th>
            </tr>
            ${
                kobisList.map((data) => 
                    `
                        <tr>
                            <td>${data.rank}</td>
                            <td>${data.movieNm} / <a href="#" onclick="handleMovieInfo(${data.movieCd}, ${data.rank})">${data.movieCd}</a></td>
                            <td>${data.openDt}</td>
                            <td>${parseInt(data.audiCnt).toLocaleString()} 명</td>
                            <td>${parseInt(data.audiAcc).toLocaleString()} 명</td>
                            <td>${parseInt(data.salesAcc).toLocaleString()} 원</td>
                        </tr>
                    `
                ).join("")
                /* data.audiCnt 등은 문자열로 출력됨. 때문에 정수형태로 변환 ( parseInt ) 후 .toLocaleString() 메서드를 이용해 세자리 마다 ,로 구분 */
            }
        </table>
        `;

        document.querySelector('#content').innerHTML = output;
    }
}


