const accessKey="hM6q9EjWE_ZMJJpPYTL6e0P_9zm4F7TxTcz_YcQEn9Q"

const formElement = document.querySelector("form")
const inputElement = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;


async function searchImages(){
    inputData = inputElement.value;
    // console.log(inputData)
    const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
    // console.log(results.urls.small)
    if (page === 1 ){
        searchResults.innerHTML = ""
    }
    // console.log(data)
    results.map((result)=>{
        // console.log(result.urls.small)
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)
    })
    page++
    if(page>1){
        showMore.style.display = "block"
    }
}
// searchImages()
formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages()
})
showMore.addEventListener("click",(event)=>{
    searchImages()
})
// const searchBtn = document.querySelector('#search-button')