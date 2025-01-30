
//ENDPOINT
fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(response => response.json())
.then(data => {

    console.log(data) //ARRAY DELLE 6 CARDS

    let arrayPosts = []

    data.forEach(element => {
        console.log(element)
        document.querySelector('.container .row').innerHTML += 
    //STRUTTURA DELLE CARDS
    `
    <div class="col-sm-12 col-md-6 col-lg-4 posts">
        <div class="card position-relative my-3">
            <img src="./img/pin.svg" class="position-absolute top-0 start-50 translate-middle">
            <img src="${element.url}">
            <h4 id="card-title" class="card-title">${element.title}</h4>
            <p id="card-text" class="card-text">${element.date}</p>
        </div>
    </div>
    `
    arrayPosts = document.querySelectorAll('.posts')

    });
    const zoom = document.getElementById('zoom')

    console.log(arrayPosts)
    //AL CLICK DELLA CARD SI APRE LA FOTO
    arrayPosts.forEach(element =>{
        element.addEventListener('click', function(){
            zoom.classList.remove("d-none")
        })
    })

})
.catch(error => {
    console.error(error)
})