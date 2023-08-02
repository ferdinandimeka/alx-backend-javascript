export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Evan',
    lastName: 'Imeka',
    age: 22,
    location: 'Lagos, Nigeria'
}

const student2: Student = {
    firstName: 'Star',
    lastName: 'Enyagborue',
    age: 5,
    location: 'Dublin, Ireland'
}

const studentList: Array<Student> = [
    student1,
    student2
];

const stylesheet = `
html {
    margin: 0;
    height: 100%;
}

body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10%;
    height: 80%;
}

table {
    border-collapse: collapse;
}

thead {
    font-weight: bold;
}

td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
}

td:hover {
    background: gainsbro;
}

td:nth-child(1) {
    text-align: center;
}
`

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 * @author Ferdinand Imeka <https://github.com/ferdinandimeka>
 */

export const displayStudents = (students: Array<Student>): void => {
    const tableHead = document.createElement('thead');
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    tableRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
    tableRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentElement('beforeend', tableRow);

    for (const student of students) {
        const bodyRow = document.createElement('tr')
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`)
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`)
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);

}

displayStudents(studentList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = stylesheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';