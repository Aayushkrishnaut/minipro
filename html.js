function fetchData(pageNo){

URL = `https://reqres.in/api/users? ${pageNo}`

fetch(URL)
    .then(res => res.json())
    .then(result => {
        let output = "";
        for (let i = 0; i < result.data.length; i++) {
            const user = result.data[i];
            output += `<tr>
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td><img src="${user.avatar}" alt="${user.first_name} ${user.last_name}"></td>
            </tr>`;
        }
        console.table(result.data);
        document.getElementById("records").innerHTML = output;
    })
    .catch(error => console.error('Error fetching data:', error));
}
