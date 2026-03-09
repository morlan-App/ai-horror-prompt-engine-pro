function buildPrompt(type,location,time,creature){

return `

OUTPUT 1
----------------
hyper realistic horror image

location: ${location}
time: ${time}

a terrifying ${creature} hidden in darkness

cinematic lighting
volumetric fog
extreme detail
vertical 9:16


OUTPUT 2
----------------
POV ${type} exploring ${location} at ${time}

natural handheld camera
slow walking
camera scanning surroundings
uneasy atmosphere


OUTPUT 3
----------------
a distant ${creature} appears

camera slowly approaches
breathing becomes heavier
tension increases


OUTPUT 4
----------------
the ${creature} moves closer

unnatural disturbing movement
camera shaking
panic breathing


OUTPUT 5
----------------
the ${creature} suddenly rushes forward

terrifying face extremely close

camera operator runs away

violent handheld shaking

video ends abruptly

`

}

function generatePrompt(){

const type=document.getElementById("type").value
const location=document.getElementById("location").value
const time=document.getElementById("time").value
const creature=document.getElementById("creature").value

document.getElementById("output").textContent=
buildPrompt(type,location,time,creature)

}

function generateRandom(){

document.getElementById("location").value=randomItem(locations)

document.getElementById("creature").value=randomItem(creatures)

document.getElementById("time").value="midnight"

}

function generateBatch(){

let result=""

for(let i=0;i<10;i++){

result+=buildPrompt(

"POV vlog",

randomItem(locations),

"midnight",

randomItem(creatures)

)

result+="\n\n----------------------\n\n"

}

document.getElementById("output").textContent=result

  }
function generatePrompt(){

const type=document.getElementById("type").value
const location=document.getElementById("location").value
const time=document.getElementById("time").value
const creature=document.getElementById("creature").value

document.getElementById("output").textContent=
createPrompt(type,location,time,creature)

}

function randomScenario(){

document.getElementById("location").value=randomItem(locations)
document.getElementById("creature").value=randomItem(creatures)
document.getElementById("time").value="midnight"

}

function generateBatch(){

let result=""

for(let i=0;i<20;i++){

result+=createPrompt(
"POV vlog",
randomItem(locations),
"midnight",
randomItem(creatures)
)

result+="\n\n===========================\n\n"

}

document.getElementById("output").textContent=result

}
