let header = `
    <header class="container-fluid">
        <div class="row">
            <div class="col">
                <h1 class="text-center pb-4 pt-4 fs-1 ">Estadisticas Centro Medico Ñuñoa</h1>
            </div>
        </div>
    </header>
`;

document.write(header);

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

let dental = [
    {hora: '08:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

//Agregar código para el desafio 2 aquí

let CantAtenciones = `
    <section class="container pt-3 pb-3 text-center fs-4">
        <div class="row">
            <div class="col-12 col-xl-4">
                <div class="alert alert-warning" role="alert">
                    <p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>
                </div>
            </div>
            <div class="col-12 col-xl-4">
                <div class="alert alert-warning" role="alert">
                    <p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>
                </div>
            </div>
            <div class="col-12 col-xl-4">
                <div class="alert alert-warning" role="alert">
                    <p>Cantidad de atenciones para Dental: ${dental.length}</p>
                </div>
            </div>
        </div>
    </section>
`;

let atenciones = `
    <section class="container pt-3 pb-3 text-center fs-4">
        <div class="row">
            <div class="col-12">
                <div class="alert alert-success" role="alert">
                    <p>Primera atencion Radiologica: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>
                </div>
            </div>
            <div class="col-12">
                <div class="alert alert-success" role="alert">
                    <p>Primera atencion Traumatologia: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>
                </div>
            </div>
            <div class="col-12">
                <div class="alert alert-success" role="alert">
                    <p>Primera atencion Dental: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>
                </div>
            </div>
        </div>
    </section>
`;
    
document.write(CantAtenciones);
document.write(atenciones);

/******************************************************************************************************************************************************************************************************************************* */

//1. Agregar las siguientes horas al arreglo de Traumatología
traumatologia.push({hora: '09:00', especialista: 'RENÉ POBLETE',    paciente: 'ANA GELLONA',    rut: '13123329-7', prevision: 'ISAPRE'},
                   {hora: '09:30', especialista: 'MARIA SOLAR',     paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
                   {hora: '10:00', especialista: 'RAUL LOYOLA',     paciente: 'CARMEN ISLA',    rut: '10112348-3', prevision: 'ISAPRE'},
                   {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA',   rut: '13453234-1', prevision: 'ISAPRE'},
                   {hora: '12:00', especialista: 'MATIAS ARAVENA',  paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
);

let tbodyTrauma = "";

for(let i = 0; i < traumatologia.length; i++)
{
    tbodyTrauma +=`
        <tr>
            <th scope="row">${traumatologia[i].hora}</th>
            <td>${traumatologia[i].especialista}</td>
            <td>${traumatologia[i].paciente}</td>
            <td>${traumatologia[i].rut}</td>
            <td>${traumatologia[i].prevision}</td>
        </tr>
    `;
}

let tableTrauma = `
    <section class="container pt-3">
        <h2 class="text-center">Horas Medicas Traumatologia Actualizadas</h2>
        <div class="row">
            <div class="col">
                <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Hora</th>
                                <th scope="col">Especialista</th>
                                <th scope="col">Paciente</th>
                                <th scope="col">RUT</th>
                                <th scope="col">Previsión</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            ${tbodyTrauma};  
                        </tbody>
                </table>
            </div>
        </div>
    </section>
`;
    
document.write(tableTrauma);

/************************************************************************************************************************************************************************************************************ */

//2. Eliminar el primer y último elemento del arreglo de Radiología
radiologia.pop();
radiologia.shift();
console.log(radiologia);

let tbodyRadio = "";

for(let i = 0; i < radiologia.length; i++)
{
    tbodyRadio +=`
        <tr>
            <th scope="row">${radiologia[i].hora}</th>
            <td>${radiologia[i].especialista}</td>
            <td>${radiologia[i].paciente}</td>
            <td>${radiologia[i].rut}</td>
            <td>${radiologia[i].prevision}</td>
        </tr>
    `;
}

let tableRadio = `
    <section class="container pt-3">
        <h2 class="text-center">Horas Medicas Radiologia Se elimino la primera y ultima hora</h2>
        <div class="row">
            <div class="col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Hora</th>
                                <th scope="col">Especialista</th>
                                <th scope="col">Paciente</th>
                                <th scope="col">RUT</th>
                                <th scope="col">Previsión</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            ${tbodyRadio};  
                        </tbody>
                    </table>
            </div>
        </div>
    </section>
`;
    
document.write(tableRadio);

/****************************************************************************************************************************************************************************** */

//3. Imprimir en la página HTML, mediante document.write y/o las funciones 
//que estime conveniente, la lista de consultas médicas de Dental. 
//Sin embargo, debe hacerlo separando por un guión cada dato desplegado 
//y cada fila de información debe estar separada por un párrafo.

let parrafo = "";
for(let i = 0; i < dental.length; i++)
{
    let hora = dental[i].hora;
    let especialista = dental[i].especialista;
    let paciente = dental[i].paciente;
    let rut = dental[i].rut;
    let prevision = dental[i].prevision;

    parrafo += `
        <p>Hora: ${hora} - Especialidad: ${especialista} - Paciente: ${paciente} - RUT: ${rut} - Previsión: ${prevision}</p>
    `;
}

let listado = `
    <section class="container pt-3">
        <h2>Lista Consultas Medicas Dental</h2>
        <div class="row">
            <div class="col">
                <div class="alert alert-info" role="alert">
                    ${parrafo}  
                </div>
            </div>
        </div>
    </section>
`;

document.write(listado);

/**************************************************************************************************************************************************************** */

//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
//Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.

let consultasMedicas = radiologia.concat(traumatologia, dental);

let li = "";
for(let i = 0; i < consultasMedicas.length; i++)
{
    let pacientes = consultasMedicas[i].paciente;
   
    li +=`
        <li class="list-group-item">${i+1} - ${pacientes}</li>
    `;     
}

/****************************************************************************************************************************************************************** */

//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.
let lisIsapre = "";
let con = 0;

dental.forEach(function(isapre)
{
    if(isapre.prevision == "ISAPRE")
    {
        let nombre = isapre.paciente;
        let prevision = isapre.prevision;
        let paciente = `${nombre} - ${prevision}`;
        con++;

        lisIsapre +=`
            <li class="list-group-item">${con} - ${paciente}</li>
        `; 
    }
});

/***************************************************************************************************************************************************************************************** */

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de 
//Traumatología
let lisFonasa = "";
let cont = 0;

traumatologia.forEach(function(fonasa)
{
    if(fonasa.prevision == "FONASA")
    {
        let nombre = fonasa.paciente;
        let prevision = fonasa.prevision;
        let paciente = `${nombre} - ${prevision}`;
        cont++;

        lisFonasa +=`
            <li class="list-group-item">${cont} - ${paciente}</li>
        `; 
    }
});

let listPacientes = `
    <section class="container pt-3 pb-5">
        <h2 class="text-center pb-3">Estadisticas de Pacientes</h2>
        <div class="row">
            <div class="col-12 col-xl-4 pb-3">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Total Pacientes</li>
                    ${li}
                </ul>
            </div>
            <div class="col-12 col-xl-4 pb-3">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Pacientes Isapre Dental</li>
                    ${lisIsapre}
                </ul>
            </div>
            <div class="col-12 col-xl-4">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Pacientes Fonasa Traumatologia</li>
                    ${lisFonasa}
                </ul>
            </div>
        </div>
    </section>
`;

document.write(listPacientes);

document.write(
    `
        <footer class="container-fluid text-center">
            <div class="row">
                <div class="col">
                    <p class="pb-5 pt-5 fs-2">Derechos reservados JAOCAL - 2024</p>
                </div>
            </div>
        </footer>
    `
);