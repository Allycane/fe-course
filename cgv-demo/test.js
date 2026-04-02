// 박스오피스 쪽에서 영화의 데이터를 받아 포스터를 호출
// 호출한 포스터를 html img 소스로 뿌려주는 과정

let key = `f27e1b4ec2dcdcb40c550a3c7d27cc11`;
let target = `20260328`;


// 박스오피스 데이터 불러오기
const getBoxJson = async(target) => {
    const box_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;
    
    let response = await fetch(box_url);
    return response.json();
}

// 한국영상자료원 데이터 불러오기
const getKmdbJson = async(movieNm, openDt) => {
    const kmdb_key = `4C2X0064BF3046O14597`;
    let kmdb_url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey=${kmdb_key}`

    let response = await fetch(kmdb_url);
    let kmdb = await response.json();

    let data = await kmdb.Data[0].Result[0];
    
    let poster = null;
    if (data === null) {
        poster = [];
    } else {
        poster = await data.posters.split("|");
    }

    return poster;
}

// 불러온 데이터 기반 img소스 뿌리기
async function handleMoviePoster() {
    // let targetDt = document.querySelector(`targetDt`).value;

    let kobis = await getBoxJson(target);
    let kobisResult = kobis.boxOfficeResult;
    let kobisList = kobisResult.dailyBoxOfficeList;

    let posterList = [];

    for (let movie of kobisList) {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt.split("-").reduce((acc, cur) => acc + cur);

        let posters = await searchMoviePoster(movieNm, openDt);
        posterList.push(posterList[0]);
    }

    console.log(posterList);


    let outputPoster = `
        ${
            kobisList.map(idx => {
                `
                    <img src="${posterList[idx]}" style="width:200px">
                `
            }).join("")
        }
    `;

    let outputMovieNm = `
        ${
            kobisList.map(data => {
                `
                    <h3>${data.movieNm}</h3>
                `
            }).join("")
        }
    `;

    let outputRank = `
        ${
            kobisList.map(data => {
                `
                    <h4>박스오피스 ${data.rank}</h4>
                `
            }).join("")
        }
    `;

    document.querySelector('.test-poster').innerHTML = outputPoster;
    document.querySelector('.test-movieNm').innerHTML = outputMovieNm;
    document.querySelector('.test-movieRank').innerHTML = outputRank;
}