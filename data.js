const locations=[

"abandoned graveyard",
"haunted forest",
"abandoned hospital",
"old mental asylum",
"deserted village",
"abandoned school",
"underground tunnel",
"abandoned subway",
"dark cave",
"haunted mansion",
"abandoned prison",
"foggy swamp",
"deserted highway",
"abandoned church"

]

const creatures=[

"crawling ghost woman",
"tall shadow figure",
"faceless child spirit",
"rotting nun",
"distorted humanoid",
"long limbed forest creature",
"black eyed child",
"pale crawling entity",
"broken neck ghost",
"floating dark specter"

]

function randomItem(arr){
return arr[Math.floor(Math.random()*arr.length)]
}
