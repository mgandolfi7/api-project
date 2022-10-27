document.querySelector("button").addEventListener("click", apiRequest) 

async function apiRequest() {
    const personName = document.querySelector("input").value
    try {
        const response = await fetch(`https://simple-family-api.herokuapp.com/api${personName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector("h2").innerText = data.birthName
    } catch(error) {
        console.log(error)
    }

}