# DataTable.js

## Overview

DataTable.js is a script file for creating dynamic data tables. It allows you to easily create and manipulate data tables in your web applications or games.

## Features

- Create dynamic data tables in your web applications.
- Add and delete rows from the table.
- Retrieve individual cells or rows from the table.
- Clear the table and reinitialize it with new headers.
- Provides a simple and reusable way to work with data tables in your projects.

## Installation

You can use DataTable.js in your project by including the script in your HTML file.

```html
<script src="DataTable.js"></script>
```

## Usage

To create a new data table, you can use the `DataTable` constructor.

```javascript
const table = new DataTable('yourTableId', ['Header1', 'Header2', 'Header3']);
```
-`yourTableId` is the ID of the HTML table element where you want to create the DataTable.
-`['Header1', 'Header2', 'Header3']` is an array of header names for your table.

You can also create a table without headers by passing an empty array as the second argument.

```javascript
const table = new DataTable('yourTableId', []);
```

### Adding Rows

To add a new row to the table, you can use the `addRow` method.

```javascript
const rowData = {
  Header1: 'Value1',
  Header2: 'Value2',
  Header3: 'Value3',
};
table.addRow(rowData);
```

-`rowData` is an object containing the data for the new row. The keys of the object should match the header names of the table.

### Deleting Rows

To delete a row from the table, you can use the `deleteRow` method.

```javascript
table.deleteRow(0); // Deletes the first row (index 0)
```

### Clearing the Table

To clear the table, you can use the `clear` method.

```javascript
table.clear();
```

### Getting Rows and Cells

To get a row or cell from the table, you can use the `getRow` and `getCell` methods.

```javascript
const row = table.getRow(0); // Get the first row.
const cell = table.getCell(0, 1); // Get the cell at row 1, column 2.
```