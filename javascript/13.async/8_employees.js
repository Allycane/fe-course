window.addEventListener('DOMContentLoaded', function() {
    showEmployees();
})

// 1. JSON 데이터 가져오기
const url = `http://127.0.0.1:5500/javascript/13.async/employee.json`;
const getJson = async() => {
    let response = await fetch(url);
    return response.json();
};

// 2. HTML에 출력
const showEmployees = async() => {
    let jsonData = await getJson();
    console.log(jsonData);

    let output = `
        <h2>${jsonData.title}</h2>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DEPARTMENT</th>
            </tr>
            ${
                jsonData.list.map((employee, idx) => 
                    `
                        <tr>
                            <td>${idx+1}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.department}</td>
                        </tr>
                    `    
                ).join("")
            }
        </table>
        ${jsonData}
    `;

    document.querySelector('#content').innerHTML = output;
}