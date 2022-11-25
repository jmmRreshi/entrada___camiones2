const container = document.querySelector("table");

let htmlDivs = "";

for (let i = 0; i < 6; i++) {
    htmlDivs += ` <table id="datatable" class="datatable"> ${i}

    <thead class="datable__principal">
    <tbody class="tbody__secundario">
        <th>Plan de Carga:</th>
        <td rowspan="2" valign="bottom">aasd</td>
        <th>Domionio Tractor:</th>
        <td>asdasd</td>
        <th>Dominio Semi:</th>
        <td>asdasd</td>
        <th>Peso Entrada:</th>
        <td>asdasd</td>
        <th>Peso Salida:</th>
        <td>asdasd</td>
        <th>Peso Diferencia:</th>
        <td>asdsad</td>
    </tbody>
    </thead>

    <thead class="datable__principal">
    <tbody class="tbody__secundario">
        <th>Cliente:</th>
        <td>123</td>
        <th>Transporte:</th>
        <td>1231241</td>
        <th>Dni:</th>
        <td>123123</td>
        <th>Chofer:</th>
        <td>14124123</td>
        <th>Caminion:</th>
        <td>142134</td>
        <th>Año:</th>
        <td>123123</td>
        <th>Semi:</th>
        <td>412213</td>
        <th>Año:</th>
        <td>4123123</td>
    </tbody>
    </thead>

    <thead class="datable__principal">
    <tbody class="tbody__secundario">
        <th>Llegada porteria:</th>
        <td>4123123</td>
        <th>Ingreso Planta:</th>
        <td>4123123</td>
        <th>Pesada Ingreso:</th>
        <td>4123123</td>
        <th>Pesada Salida:</th>
        <td>4123123</td>
        <th>Pesada Diferencia:</th>
        <td>4123123</td>
        <th>Salida Planta:</th>
        <td></td>
    </tbody>
    </thead>`;
    container.innerHTML = htmlDivs;
}
