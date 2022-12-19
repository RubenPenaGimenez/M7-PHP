function getUsersByID(idUser) {
    let url = "http://localhost:1337/api/clientes/" + idUser;
    fetch(url).then((response) => {
        return response.json();
    })
        .then((data) => {
            let users = data;
            document.getElementById("inicSes").innerHTML = users.data.attributes.Correo;
        })
        .catch(function (error) {
            console.log(error);
        });
}

getUsersByID(43);