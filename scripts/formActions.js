const NACIONALIDADES_ACEPTADAS = [
    {key: 'AU', name: "Australia"},
    {key: 'BR', name: "Brasil"},
    {key: 'CA', name: "Canadá"},
    {key: 'CH', name: "Suiza"},
    {key: 'DE', name: "Alemania"},
    {key: 'DK', name: "Dinamarca"},
    {key: 'ES', name: "España"},
    {key: 'FI', name: "Finlandia"},
    {key: 'FR', name: "Francia"},
    {key: 'GB', name: "Reino Unido"},
    {key: 'IE', name: "Irlanda"},
    {key: 'IN', name: "India"},
    {key: 'IR', name: "Irán"},
    {key: 'MX', name: "México"},
    {key: 'NL', name: "Países Bajos"},
    {key: 'NO', name: "Noruega"},
    {key: 'NZ', name: "Nueva Zelanda"},
    {key: 'RS', name: "Serbia"},
    {key: 'TR', name: "Turquía"},
    {key: 'UA', name: "Ucrania"},
    {key: 'US', name: "Brasil"},
];

window.onload = function(){
    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");
    for(let input of inputs){
        input.onfocus = resaltarDesresaltar;

        input.addEventListener('blur', resaltarDesresaltar);
    }

    for(let select of selects) {
        select.onfocus = resaltar;
        select.addEventListener('blur', noResaltar);
    }

    llenarNacionalidad();
}

function llenarNacionalidad() {
    const nacionalidad = document.getElementById("nationality");

    for(let{key, name} of NACIONALIDADES_ACEPTADAS){
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

function resaltar(evento){
    evento.target.classList.add("selected");

    const label = document.querySelector(`label[for="${evento.target.id}"]`);
    if (label) {
        label.classList.add("selected-label");
    }
}

function noResaltar(evento){
    const clase = evento.target.classList.contains("selected");
    if(clase){
        evento.target.classList.remove("selected");
    }
    const label = document.querySelector(`label[for="${evento.target.id}"]`);
    if (label) {
        label.classList.remove("selected-label");
    }
}

function resaltarDesresaltar(evento){
    evento.target.classList.toggle("selected");
    const label = document.querySelector(`label[for="${evento.target.id}"]`);
    if (label) {
        label.classList.toggle("selected-label");
    }
}