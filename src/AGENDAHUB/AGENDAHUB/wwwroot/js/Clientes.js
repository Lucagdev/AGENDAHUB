﻿$(document).ready(function () {
    new DataTable('#tabelaClientes', {
        "language": {
            "url": "/lib/dataTable_PT_BR.json"
        },
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
    });
});
