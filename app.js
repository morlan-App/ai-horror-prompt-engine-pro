function generate(){

const type=document.getElementById("type").value
const location=document.getElementById("location").value
const time=document.getElementById("time").value
const creature=document.getElementById("creature").value

const prompt=`

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


OUTPUT 3
----------------
a distant ${creature} appears in darkness

camera slowly approaches
breathing becomes heavier


OUTPUT 4
----------------
the ${creature} moves closer

camera shaking
panic breathing


OUTPUT 5
----------------
the ${creature} rushes toward the camera

camera operator runs away

violent handheld shaking

video ends abruptly
`

document.getElementById("output").textContent=prompt

}
