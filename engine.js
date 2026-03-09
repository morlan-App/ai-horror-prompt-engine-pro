function createPrompt(type,location,time,creature){

const event=randomItem(horrorEvents)
const atmosphere=randomItem(atmospheres)

return `

OUTPUT 1
----------------
hyper realistic horror image

location: ${location}
time: ${time}

${atmosphere}

a terrifying ${creature} partially hidden in darkness

cinematic horror lighting
volumetric fog
ultra detailed textures

vertical composition
aspect ratio 9:16


OUTPUT 2
----------------
POV ${type} exploring ${location} at ${time}

${atmosphere}

natural handheld camera
slow cautious walking
camera scanning surroundings

ambient sound:
wind
distant echoes

${event}


OUTPUT 3
----------------
continuation scene

a distant ${creature} becomes visible

camera slowly moves closer
breathing becomes heavier

tension rising


OUTPUT 4
----------------
the ${creature} begins approaching

unnatural disturbing movement

camera operator slowly backs away

panic breathing
camera shaking increases


OUTPUT 5
----------------
climax scene

the ${creature} suddenly rushes toward the camera

terrifying face extremely close

camera operator turns and runs away

violent handheld shaking
heavy breathing
footsteps echo loudly

video ends abruptly

`

}
