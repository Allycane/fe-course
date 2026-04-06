window.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector('#search_content');
    let btn = document.querySelector('#btnSearch');

    btn.addEventListener('click', () => {
        if (content.value.trim() === '') {
            alert(`검색할 내용을 입력해 주세요`)
            content.focus();
        } 
        else {
            // 검색 진행

        }
    })

    // createTable();
    filterMenu('all');

    let menuList = document.querySelectorAll('.filter-menu li a');
    menuList.forEach(menu => {
        menuList.forEach(menu => menu.id === 'all'?
            menuSelectColor(menu) : menuDefaultColor(menu)
        );

        menu.addEventListener('click', () => {
            menuList.forEach(menu => menuDefaultColor(menu));
            menuSelectColor(menu);
            filterMenu(menu.id);
        })
    })
}) // window event

function menuDefaultColor(menu) {
    menu.style.background = "rgb(137,137,135)";
    menu.style.borderLeft = `1px solid var(rgb(137,137,135))`;
    menu.style.borderBottom = `2px solid var(rgb(137,137,135))`;
}

function menuSelectColor(menu) {
    menu.style.background = "rgb(251, 67, 87)";
    menu.style.borderLeft = `1px solid var(rgb(251, 67, 87))`;
    menu.style.borderBottom = `2px solid var(rgb(251, 67, 87))`;
}

// filterMenu 함수 생성
async function filterMenu(type) {
    console.log(type);
    let filterList = null;
    if (type === 'all') {
        // createTable();
        filterList = await getJson();
    } else {
        filterList = await filterData(type);
    }
    createTable(filterList);


    // let output = 
    // `
    //     <table id="stable">
    //         <thead>
    //             <tr>
    //                 <th>번호</th>
    //                 <th>구분</th>
    //                 <th>제목</th>
    //                 <th>등록일</th>
    //                 <th>조회수</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //         ${
    //             filterList.map((data, idx) => 
    //                 `
    //                     <tr>
    //                         <td>${idx+1}</td>
    //                         <td>${data.type}</td>
    //                         <td><a href="#">${data.title}</a></td>
    //                         <td>${data.rdate}</td>
    //                         <td>${data.hits}</td>
    //                     </tr>
    //                 `
    //             ).join("")
    //         }
    //         </tbody>
    //         </tbody>
    //         <tfoot>
    //             <tr>
    //                 <td colspan="5">1 2 3 4 5></td>
    //             </tr>
    //         </tfoot>
    //     </table>
    // `;

    // document.querySelector('#stable')?.remove();
    // document.querySelector('#before-table').insertAdjacentHTML('afterEnd', output);
}

// filterData 함수 생성
async function filterData(type) {
    let data = await getJson();
    // console.log('data =>', data, typeof data);

    return data.filter(item => item.type === type);
    // 새로운 배열로 반환
}


// support.json JSON 데이터 가져오기

async function getJson() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function createTable(list) {
    // let list = await getJson();
    
    /* createTable 함수는 HTML table을 형성하는 함수로 남고,
    table을 형성하는 HTML 정보를 filterMenu 함수 쪽으로 넘김.
    
    filterMenu() 쪽에서는 'all'을 입력받으면 getJson 자체를 호출하고,
    다른 타입을 입력받을 경우 filterData() 에서 filter()를 통해 필터링된 데이터들만 출력되도록 하고, 해당 내용을 table로써 출력할 수 있음.
    
    마지막으로 DOM 객체가 형성될 때 실행하도록 선언했던 createTable을 filterMenu()로 대체하고, default 값을 'all'로 지정하여 고객센터 페이지에 접속했을 때 전체 메뉴가 기본적으로 표시되도록 할 수 있다.*/

    let output = 
    `
        <table id="stable">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
            ${
                list.map((data, idx) => 
                    `
                        <tr>
                            <td>${idx+1}</td>
                            <td>${data.type}</td>
                            <td><a href="#">${data.title}</a></td>
                            <td>${data.rdate}</td>
                            <td>${data.hits}</td>
                        </tr>
                    `
                ).join("")
            }
            </tbody>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">1 2 3 4 5></td>
                </tr>
            </tfoot>
        </table>
    `;

    document.querySelector('#stable')?.remove();
    document.querySelector('#before-table').insertAdjacentHTML('afterEnd', output);
}