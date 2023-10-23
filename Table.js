/**
 * @file Table.js
 * @brief Script file for creating dynamic data tables
 * @version 0.1
 * @date 2023-10-24
 */

class DataTable {
    /**
     * @brief Constructor for DataTable class
     * @param {string} tableId The id of the table
     * @param {string[]} headerArray The array of headers
     * @returns {DataTable} The DataTable object
     */
    constructor(tableId, headerArray) {
        this.table = document.getElementById(tableId);

        // thead
        this.table.innerHTML += '<thead></thead>';
        this.head = this.table.querySelector('thead');
        this.head.innerHTML += '<tr></tr>';

        // tbody
        this.table.innerHTML += '<tbody></tbody>';
        this.body = this.table.querySelector('tbody');

        this.headerArray = headerArray;
        this.createTableHeaders();
    }
    createTableHeaders() {
        const head = this.table.querySelector('thead');
        head.innerHTML = `<tr></tr>`;
        this.headerArray.forEach((header) => {
            head.rows[0].innerHTML += `<th>${header}</th>`;
        });
    }
    addheader(cell) {
        const head = this.table.querySelector('thead');
        head.rows[0].innerHTML += `<th>${cell}</th>`;
    }
    addRow(dataRow) {
        const row = this.body.insertRow(-1);
        this.headerArray.forEach((header, index) => {
            row.insertCell(index).innerHTML = dataRow[header] || '';
        });
    }
    clear() {
        while (this.table.rows.length > 0) {
            this.table.deleteRow(0);
        }
        this.createTableHeaders();
    }
    deleteRow(index) {
        index++;
        this.table.deleteRow(index);
    }
    getRow(index) {
        index++;
        return this.table.rows[index];
    }
    getCell(rowIndex, cellIndex) {
        return this.getRow(rowIndex).cells[cellIndex];
    }
}