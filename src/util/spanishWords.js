var spanishNouns = [`la abeja`, `el barco`, `el conejo`, `el dinosaurio`, `el elefante`, `la flor`, `el gato`, `el huevo`, `la isla`, `la jirafa`, `el koala`, `el libro`, `la muñeca`, `la nube`, `el ñu`, `el oso`, `el perro`, `el queso`, `la rana`, `la sopa`, `la taza`, `las uvas`, `la vaca`, `el wafle`, `el xilófono`, `el yoyo`, `el zorro`, `el hombre`, `la hermana`, `el cartero`, `el estudiante`, `el futbolista`, `el gato`, `el perro`, `el pájaro`, `el pez`, `la ardilla`, `la serpiente`, `el pan`, `el ordenador`, `el sofá`, `el libro`, `la mesa`, `la silla`, `la tienda`, `el centro comercial`, `la escuela`, `la iglesia`, `la casa`]
var spanishVerbs = [`registrando`, `abanderar`, `abriendo`, , `acabar`, `aceptar`, `acordar`, `acostando`, `almorzando`, `amar`, `caminando`,'corriendo',  `aprendiendo`, `asistando`, `ayudando`, `bailando`, `bebiendo`, `buscando`, `cambiando`, `cantando`,  `cerrar`, `cocinando`, `cogiendo`, `comiendo`,  `comprentiendo`, `comprender`, `conducir`, `conociendo`, `conseguindo`, `construiendo`, `costando`, `creciendo`, `cruzando`, `cubriendo`,  `defendiendo`, `desayunando`, `descubriendo`,  `despertando`, `destruiendo`, `durmiendo`, `duchando`, `echando`, `encontrando`,  `escribiendo`,  `esperando`, `estudiando`,  `hablando`, `hacer`, `hackear`, `halagar`, `hartar`, `helar`, `henchir`, `herir`, `hervir`, `hinchar`, `hospedar`, `hostigar`, `huir`, `incluir`, `ir`, `jugando`, `lavando`, `leyendo`, `levantar`, `limpiando`, `llamamndo`, `llorando`, `manejando`, `nadando`, `pasando`, `perdiendo`, `practicando`, `protegiendo`, `quedar`, `quejar`, `querer`, `quitar`, `recibir`, `recoger`,`reíendo`, `rompiendo`, `saliendo`,  `sentando`,`sonando`, `sonreíendo`,  `tocando`, `tomando`, `trabajando`, `vendeiendo`, `vestiendo`, `viajando`, `visitando`, `viviendo`, `volando`]
var spanishAdj = [`lindo`, `feo`, `feliz`, `triste`, `alto`, `bajo`, `grande`, `pequeño`, `simple`, `complicado`, `divertido`, `aburrido`, `rico`, `pobre`, `delicioso`, `repugnante`, `inteligente`, `tonto`, `nuevo`, `viejo`, `abierto`, `cerrado`, `cansado`, `despierto`, `caluroso`, `frío`, `caro`, `barato`, `rápido`, `lento`, `loco`, `tranquilo`, `fuerte`, `débil`, `enfermo`, `sano`, `dulce`, `salado`, `limpio`, `sucio`, `seco`, `mojado`, `injusto`, `justo`, `vacío`, `lleno`, `delgado`, `gordo`, `bueno`, `malo`]

function getNouns(numCards){
    var nounReturn = []
    for (let i = 0; i < numCards; i++){
        var tempNoun = spanishNouns[Math.floor(Math.random()*spanishNouns.length)]
        nounReturn.push(tempNoun)
    }
    return nounReturn
}

function getVerbs(numCards){
    var verbReturn = []
    for (let i = 0; i < numCards; i++){
        var tempVerb = spanishVerbs[Math.floor(Math.random()*spanishVerbs.length)]
        verbReturn.push(tempVerb)
    }
    return verbReturn
}

function getAdj(numCards){
    var adjReturn = []
    for (let i = 0; i < numCards; i++){
        var tempAdj = spanishAdj[Math.floor(Math.random()*spanishAdj.length)]
        adjReturn.push(tempAdj)
    }
    return adjReturn
}

prompts = [['esta lista para']['me hizo']['le queda']['duerme']['llama mucho']['le gusta']['esta afuera y esta listo para']['esta intrado y esta listo para']['sigue']['esta intentando a']]