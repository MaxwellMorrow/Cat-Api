// selects cat image and button 
let catDisplay = document.querySelector("#cat-display")
let nextButton = document.querySelector("#next")

// url of the API 
const url = "https://api.thecatapi.com/v1/images/search";


// fetch function 
async function getKitten(){

    let response = await fetch(url, {
        // this is an API key not sure if its working or not. 
  headers: {
    "x-api-key": "87a695ac-1af8-44ed-870b-8fcea8ca21ff"
  }})

//   convert json into object we can use 
  let dataObject =  await response.json()

// console loggin to check looks like it returns an array of objects 
 console.log(dataObject)
 
//  accessing first index of the array of objects and replacing our img url with object url 
 catDisplay.src = dataObject[0].url
}
// runs getKitten on click 
nextButton.addEventListener("click",getKitten)

getKitten()

