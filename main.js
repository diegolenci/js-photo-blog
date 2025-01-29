
//ENDPOINT
fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(response => response.json())
.then(data => {

    console.log(data) //ARRAY DELLE 6 CARDS

    data.forEach(element => {
        console.log(element)
        document.querySelector('.container .row').innerHTML += 
    //STRUTTURA DELLE CARDS
    `
    <div class="col-6 col-sm-4">
        <div class="card">
            <img src="${element.url}">
            <h4 id="card-title" class="card-title">${element.title}</h4>
            <p id="card-text" class="card-text">${element.date}</p>
        </div>
    </div>
    `
    });

})
.catch(error => {
    console.error(error)
})