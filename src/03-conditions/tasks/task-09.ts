/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

// 1. Declare all variables (Informasi Mesin)
const isPoweredOn: boolean = true;
const temperature: number = 95;
const hasHighVibration: boolean = false;
const productionSpeed: number = 92; // dalam persentase (%)

// Variabel untuk menyimpan status akhir mesin
let machineStatus: string = "";

// 2. Translate every business rule into conditional statements
// Lapisan 1: Pengecekan Daya (Power)
if (isPoweredOn === false) {
  
  machineStatus = "Machine Offline";
  
} else {
  
  // Mesin menyala, masuk ke pengecekan kondisi operasional
  // Lapisan 2: Pengecekan Suhu
  if (temperature > 90) {
    
    // Suhu di atas 90 derajat
    // Lapisan 3: Pengecekan Getaran (Vibration)
    if (hasHighVibration === true) {
      machineStatus = "Emergency Shutdown";
    } else {
      machineStatus = "Cooling Required";
    }
    
  } else {
    
    // Suhu aman (90 derajat atau ke bawah)
    // Lapisan 3: Pengecekan Kecepatan Produksi
    if (productionSpeed < 80) {
      machineStatus = "Performance Warning";
    } else {
      machineStatus = "Machine Operating Normally";
    }
    
  }
  
}

// 3. Display the final machine status
console.log("=== Laporan Status Mesin Pabrik ===");
console.log(`Menyala (Power)    : ${isPoweredOn ? "Ya" : "Tidak"}`);
console.log(`Suhu (Temperature) : ${temperature}°C`);
console.log(`Getaran Tinggi     : ${hasHighVibration ? "Ya" : "Tidak"}`);
console.log(`Kecepatan Produksi : ${productionSpeed}%`);
console.log(`-----------------------------------`);
console.log(`Status Sistem      : 🏭 ${machineStatus}`);