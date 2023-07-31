/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Ferdinand Imeka<https://github.com/ferdinandimeka/>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (acc, student) => acc.id || acc + student.id,
      0,
    );
  }
  return 0;
}
