import fs from 'fs';

/**
 * Reads the data from a CSV file and prints a report.
 * @param {string} datapath the path to the CSV file
 * @author Ferdinand Imeka <https://github.com/ferdinandimeka>
 * @returns {Promise<string>} The report as a string: {firstname: String, lastname: String, age: Number}[]
*/
const readDatabase = (datapath) => new Promise((resolve, reject) => {
    if (!datapath) {
        reject(new Error('Cannot load the database'));
    }
    if (datapath) {
        fs.readFile(datapath, (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'));
        }
        if (data) {
            const fileLines = data.toString('utf-8').trim().split('\n');
            const studentGroups = {};
            const dbFieldNames = fileLines[0].split(',');
            const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1,
            );
    
            for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(
                0,
                studentRecord.length - 1,
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
                studentGroups[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
                propName,
                studentPropValues[idx],
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
            }
    
            const totalStudents = Object.values(studentGroups).reduce(
            (pre, cur) => (pre || []).length + cur.length,
            );
            console.log(`Number of students: ${totalStudents}`);
            for (const [field, group] of Object.entries(studentGroups)) {
            const studentNames = group.map((student) => student.firstname).join(', ');
            console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
            }
            resolve(true);
        }
        });
    }
});

export default readDatabase;
module.exports = readDatabase;