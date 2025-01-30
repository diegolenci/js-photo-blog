
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
    <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card position-relative my-3">
            <img src="./img/pin.svg" class="position-absolute top-0 start-50 translate-middle">
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