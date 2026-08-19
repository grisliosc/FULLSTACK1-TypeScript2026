/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

// Student information
const finalScore: number = 90;
const attendance: number = 67;
const tuitionPaid: boolean = true;

// Check eligibility
const isEligible: boolean = finalScore >= 75 && attendance >= 90 && tuitionPaid === true;
const result = isEligible ? "Kamu anak Eligible" : "Kamu bukan anak Eligible"

console.log(`Apkah dia anak eligible? ${isEligible}`);
console.log(result);
