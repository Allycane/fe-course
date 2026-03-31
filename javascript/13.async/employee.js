window.addEventListener('DOMContentLoaded', function() {
    show();
});

const data_url = 'http://127.0.0.1:5500/javascript/13.async/employee.json';

async function getJson() {
    let response = await fetch(data_url);
    return response.json();
}

async function show() {
    let jsonData = await getJson();

    let output = `
        <h1>${jsonData.title}</h1>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DEPARTMENT</th>
            </tr>
            ${
                jsonData.list.map((employee) =>
                    `
                    <tr>
                        <td>${parseInt(Math.random()*100000 + 1)}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.department}</td>
                    </tr>
                    `
                ).join("")
            }
        </table>

    `;
    document.querySelector('#content').innerHTML = output;
};
