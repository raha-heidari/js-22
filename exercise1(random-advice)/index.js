const API = "https://api.adviceslip.com/advice"

const advice = document.querySelector(".advice")
const p = document.querySelector(".para")
const button = document.querySelector(".bi")

async function apiFetch(){
    advice.textContent = "Loading"
    try{
        const res = await fetch(API)
        const data = await res.json() 

        advice.textContent = `ADVICE #${data.slip.id}`
        p.textContent = `"${data.slip.advice}"`
       
    } catch (er){
      advice.textContent = "Failed. please try again."
    }
}

button.addEventListener("click", apiFetch)

apiFetch()