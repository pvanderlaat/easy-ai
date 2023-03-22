var spanishNouns = [`la abeja`, `el barco`, `el conejo`, `el dinosaurio`, `el elefante`, `la flor`, `el gato`, `el huevo`, `la isla`, `la jirafa`, `el koala`, `el libro`, `la muñeca`, `la nube`, `el ñu`, `el oso`, `el perro`, `el queso`, `la rana`, `la sopa`, `la taza`, `las uvas`, `la vaca`, `el wafle`, `el xilófono`, `el yoyo`, `el zorro`, `el hombre`, `la hermana`, `el cartero`, `el estudiante`, `el futbolista`, `el gato`, `el perro`, `el pájaro`, `el pez`, `la ardilla`, `la serpiente`, `el pan`, `el ordenador`, `el sofá`, `el libro`, `la mesa`, `la silla`, `la tienda`, `el centro comercial`, `la escuela`, `la iglesia`, `la casa`]
var spanishVerbs = [`registrar`, `abanderar`, `abrir`, `aburrir`, `acabar`, `aceptar`, `acordar`, `acostar`, `almorzar`, `amar`, `andar`, `apagar`, `aprender`, `asistir`, `ayudar`, `bailar`, `bajar`, `beber`, `buscar`, `caber`, `caer`, `cambiar`, `cantar`, `casar`, `cenar`, `cerrar`, `cocinar`, `coger`, `comenzar`, `comer`, `compartir`, `comprar`, `comprender`, `conducir`, `conocer`, `conseguir`, `construir`, `contar`, `corregir`, `correr`, `cortar`, `costar`, `crear`, `crecer`, `creer`, `cruzar`, `cubrir`, `dar`, `deber`, `decidir`, `decir`, `defender`, `dejar`, `desayunar`, `descubrir`, `desear`, `despedir`, `despertar`, `destruir`, `devolver`, `dirigir`, `divertir`, `doler`, `dormir`, `duchar`, `echar`, `elegir`, `empezar`, `encantar`, `encender`, `encontrar`, `entender`, `entrar`, `enviar`, `escoger`, `escribir`, `escuchar`, `esperar`, `estar`, `estudiar`, `exigir`, `explicar`, `ganar`, `gastar`, `gustar`, `haber`, `habilitar`, `habitar`, `habituar`, `hablar`, `hacer`, `hackear`, `halagar`, `hartar`, `helar`, `henchir`, `herir`, `hervir`, `hinchar`, `hospedar`, `hostigar`, `huir`, `incluir`, `ir`, `jugar`, `lavar`, `leer`, `levantar`, `limpiar`, `llamar`, `llenar`, `llegar`, `llevar`, `llorar`, `llover`, `mandar`, `manejar`, `mantener`, `medir`, `mentir`, `mirar`, `morir`, `mostrar`, `mover`, `nace`, `nadar`, `necesitar`, `obtener`, `ofrecer`, `oír`, `oler`, `olvidar`, `organizar`, `pagar`, `parar`, `parecer`, `pasar`, `pedir`, `pensar`, `perder`, `permitir`, `poder`, `poner`, `practicar`, `preferir`, `preguntar`, `preparar`, `prestar`, `probar`, `proteger`, `quedar`, `quejar`, `querer`, `quitar`, `recibir`, `recoger`, `recomendar`, `recordar`, `regresar`, `reír`, `repetir`, `resolver`, `rogar`, `romper`, `rezar`, `remar`, `saber`, `sacar`, `salir`, `secar`, `seguir`, `sentar`, `sentir`, `ser`, `servir`, `sofreír`, `soler`, `sonar`, `sonreír`, `subir`, `sugerir`, `sumergir`, `tener`, `terminar`, `tocar`, `tomar`, `trabajar`, `traducir`, `traer`, `tratar`, `usar`, `valer`, `velar`, `vender`, `venir`, `ver`, `vestir`, `viajar`, `visitar`, `vivir`, `volar`, `volver`, `violar`]
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

prompts = [['esta lista para']['me hizo']['le queda']['duerme']['llama mucho']['le gusta']['esta afuera y esta listo para']['esta intrado y esta listo para']['lo cree']['sigue']['esta intentando a']]