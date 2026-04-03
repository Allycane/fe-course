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

    createTable();
})

// support.json JSON 데이터 가져오기

async function getJson() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function createTable() {
    let list = await getJson();
    
    let output = 
    `
        <table>
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
    `;

    document.querySelector('#before-table').insertAdjacentHTML('afterEnd', output);
}
