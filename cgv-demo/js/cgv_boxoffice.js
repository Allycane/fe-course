/**
 * KOBIS, KMDB API를 활용한 박스 오피스
 */
const kobis_key = `f27e1b4ec2dcdcb40c550a3c7d27cc11`;
const kmdb_key = '4C2X0064BF3046O14597';

window.addEventListener('DOMContentLoaded', () => {
    createBoxOffice();
})

async function createBoxOffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;

    let outputList = await showList(list);
    console.log(outputList);

    let output = `
        <ul>
            ${
                outputList.map((movie) => `
                    <li>
                            <div>
                                <img src="${movie.poster}" 
                                    alt="moviechart img"
                                    width="200px">
                            </div>
                            <div><h3>${movie.movieNm}</h3></div>
                            <div><h5>누적관객수 ${parseInt(movie.audiAcc).toLocaleString()}명</h5></div>
                        </li>
                `).join("")
            }
        </ul>
    `;

    // console.log(output);
    document.querySelector('#boxOffice').innerHTML = output;
}

async function showList(list) {
    let sList = list.slice(0, 5).map(async(movie) => {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt;
        let audiAcc = movie.audiAcc;
        // getKmdb(movie.movieNm, movie.openDt);
        let poster = await getKmdb(movieNm, openDt, audiAcc);
        // getKmdb를 담고있는 함수는 map이기 때문에 async를 추가로 입력
        
        // console.log(movie.movieNm, movie.openDt, posters);

        return {movieNm, openDt, poster, audiAcc};
        // map으로 새로 생성된 배열을 객체 내에 담아서 반환하도록 함
        // 반환되는 값 {[영화제목, 개봉일, 포스터]}, {[~]}, {[~]}....
    })
    // 출력된 sList는 비동기이기 때문에 Promise로 출력됨
    // log로 출력할 때 await showList로 출력하거나 별도의 sList를 호출하는 함수를 선언하여 log로 출력하면 됨

    return await Promise.all(sList);
    // 프로미스 객체가 다 돌아서 완벽하게 배열을 생성하였을 때 출력하겠다고 알려주는 것
}


/**KOBIS API - 박스오피스 가져오기 */
async function getKobis() {
    let date = new Date();
    let year = new String(date.getFullYear());
    let month = new String(date.getMonth()+1);
    let day = new String(date.getDate()-1);

    month = (month.length < 2) ? '0'.concat(month) : month ;
    day = (day.length < 2) ? '0'.concat(day) : day ;

    let targetDt = year.concat(month).concat(day);
    // console.log(targetDt, typeof targetDt);


    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`;
        url += `searchDailyBoxOfficeList.json?`;
        url += `key=${kobis_key}`;
        url += `&targetDt=${targetDt}`;
    
    // console.log(url);
    
    let response = await fetch(url);
    return response.json();
}

/** KMDB API - KMDB 포스터 가져오기 */
async function getKmdb(movieNm, openDt) {
    openDt = openDt.split("-").reduce((acc, cur) => acc+cur);
    // console.log(movieNm);
    // console.log(openDt);
    

    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y&`;
    url += `title=${movieNm}`;
    url += `&releaseDts=${openDt}&`;
    url += `ServiceKey=${kmdb_key}`;

    let response = await fetch(url);
    let kmdb = await response.json();
    // response.json()? => response.json() 이라는 데이터가 있으면 읽도록 함
    // Data?.[0]? => Data라는 객체가 있다면 0번지의 유무를 또 확인, 있을 경우 Result를 읽도록 함
    let posters = await kmdb?.Data?.[0]?.Result?.[0]?.posters?.split("|");

    // console.log(`posters =`, posters);

    return posters?.[0];
    // posters라는 객체가 존재하면, 0번지 값만 반환한다
}

