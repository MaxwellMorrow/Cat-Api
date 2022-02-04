
let catDisplay = document.querySelector("#cat-display")
let kittneButton = document.querySelector("#next")


const url = "https://api.thecatapi.com/v1/images/search";
async function getKitten(){

    let response = await fetch(url, {
  headers: {
    "x-api-key": "87a695ac-1af8-44ed-870b-8fcea8ca21ff"
  }})
  let dataObject =  await response.json()

 console.log(dataObject)

 catDisplay.src = dataObject[0].url
}

kittneButton.addEventListener("click",getKitten)

getKitten()

