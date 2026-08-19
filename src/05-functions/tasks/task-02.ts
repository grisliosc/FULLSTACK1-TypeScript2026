/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

export {}; // Mencegah bentrok nama variabel dengan file tugas lain

// 1 & 2. Membuat fungsi showBonusStatus dengan parameter nama dan nilai
// Karena fungsi ini tidak menggunakan 'return', tipe data keluarannya adalah 'void'
function showBonusStatus(employeeName: string, performanceScore: number): void {
    
    // 3. Menampilkan status bonus langsung dari dalam fungsi
    if (performanceScore >= 85) {
        console.log(`Pegawai: ${employeeName} | Nilai: ${performanceScore} -> Bonus Approved ✅`);
    } else {
        console.log(`Pegawai: ${employeeName} | Nilai: ${performanceScore} -> Bonus Not Approved ❌`);
    }
    
}

console.log("=== Notifikasi Bonus HR Department ===");

// 4. Memanggil fungsi untuk setiap pegawai
showBonusStatus("John Cena", 92);
showBonusStatus("Undertaker", 76);
showBonusStatus("Rey Mysterio", 88);