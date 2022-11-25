class DataTable {

    element;
    headers;
    items;
    copyItems;
    selected;
    pagination;
    numberOfEntries;
    headerButtons;

    constructor(selector, headerButtons) {
        this.element = document.querySelector(selector);

        this.headers = [];
        this.items = [];
        /* total = me va decir el numero de elemenos que tiene mi data table
           noItemsPerPage = es el numerode elementos que entran
           noPages = numero de paginas dividido entre el numero de elementos */
        this.pagination = {
            total: 0,
            noItemsPerPage: 0,
            noPages: 0,
            actual: 0,
            pinter: 0,
            diff: 0,
            lasPageBeforeDots: 0,
            norButtonsBeforeDots: 4
        };
        this.selected = [];

        this.numberOfEntries = 5; /* nuemro de paginas que muestra al principio*/
        this.headerButtons = headerButtons;
    }

    parse() {
        const headers = [...this.element.querySelector("thead tr").children];
        const trs = [...this.element.querySelector("tbody").children]; /* info de las filas*/

        headers.forEach(element => {
            this.headers.push(element.textContent);
        });

        console.log(this.headers);



        trs.forEach(tr => {
            const cells = [...tr.children];

            const item = {
                id: this.generateUUID(),/*genera los ID*/
                values: []
            };

            console.log(headers);

            cells.forEach(cell => {
                if (cell.children.length > 0) {
                    //const checkbox = [...cell.children][0].getAttribute("class");
                    const checkboxElementos = [...cell.children][0];//los hijos de la celda, trato de pegar los class con los checbox y de ahi se genera

                    const checkbox = checkboxElementos.getAttribute("class");

                    if (checkbox != null) {
                        item.values.push(`<input class="${checkbox}"></input>`);
                    }
                    else {
                        item.values.push(cell.textContent);
                    }
                }
                /* this.items.push(item)*/
            });

            this.items.push(item);

        });
        console.log(this.items);

        this.makeTable();
    }

    makeTable() {
        this.copyItems = [...this.items];

        this.initPagination(this.items.length, this.numberOfEntries);

        const container = document.createElement("div");
        container.id = this.element.id;
        this.element.innerHTML = "";
        this.element.replaceWith(container); //remplaza los elementos de los divs
        this.element = container;

        this.createHTML();
        this.renderHeaders();
        this.renderRows();
        this.renderPageButtons();
        this.renderSearch();
        this.renderSelectEntires();
    }

    initPagination(total, entries) { //inicio de pagina
        this.pagination.total = total;
        this.pagination.noItemsPerPage = entries;
        this.pagination.noPages = Math.ceil(this.pagination.total / this.pagination.noItemsPerPage);
        this.pagination.actual = 1;
        this.pagination.pointer = 0;
        this.pagination.diff = this.pagination.noItemsPerPage - (this.pagination.total % this.pagination.noItemsPerPage);

    }

    generateUUID() {
        return (Date.now() * Math.floor(Math.random() * 100000)).toString();
    }

    createHTML() {
        this.element.innerHTML = `<div class="datatable-container">
            <div class="header-tools">
                <div class="tools">
                    <ul id="header-buttons-container">
                    </ul>
                </div>
                 <div class="search">
                <input type="text" class="search-input">
            </div>
            </div>
            <table class="datatable">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div class="footer-tools">
                <div class="list-items">
                    Show
                    <select name="n-entries" id="n-enties" class="n-entries">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    entries
                </div>
                
                <div class="pages">
                </div>
            </div>
        </div>
        `;
    };
    renderHeaders() {
        this.element.querySelector("thead tr").innerHTML = '';

        this.headers.forEach(
            header => {
                this.element.querySelector("thead tr").innerHTML = `<tr>${header}</tr>`;
            }
        );
    };
    renderRows() {
        this.element.querySelector("tbody").innerHTML="";

        let i = 0;
        const {pointer, total} = this.pagination;
        const limit = this.pagination.actual * this.pagination.noItemsPerPage;

        for(i = pointer; i < limit; i++){
            if(i ==total) break;

            const{id, value} = this.copyItems[i];
            const checked = this.isChecked(id);

            let data = "";

            data += `<td class="table-checkbox">
            <input type="checbox" class"datatable-checbox" data-id="${id}" ${checked ? "checked": ""}/>
            </td>`;
        }
    };

    isChecked(){
        const items = this.selected;

        let res = false;

        if(items.length == 0 ) return false;

        items.forEach(item =>{
            if(item.id == id) res = true
        })
    }
    renderPageButtons() { };
    renderSearch() { };
    renderSelectEntires() { };

}