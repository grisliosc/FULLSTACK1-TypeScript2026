/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string;
  employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    isPresent: boolean;
};

const attendances: Attendance[] = [
  {
    employeeId: "SVT009",
    employeeName: "Kim Mingyu",
    date: "2026-07-05",
    checkInTime: "08:00",
    checkOutTime: "17:00",
    totalWorkingHours: 9,
    isPresent: true
  },
  
  {
    employeeId: "SVT010",
    employeeName: "Chwe Vernon",
    date: "2026-07-05",
    checkInTime: "08:30",
    checkOutTime: "17:30",
    totalWorkingHours: 9,
    isPresent: true
  },

  {
    employeeId: "SVT011",
    employeeName: "Lee Jeno",
    date: "2026-12-12",
    checkInTime: "-",
    checkOutTime: "-",
    totalWorkingHours: 0,
    isPresent: false
    }

]

attendances.forEach((record, index) => {
  console.log(`\nData Kehadiran Karyawan ke-${index + 1}`);
  console.log(`ID Karyawan : ${record.employeeId}`);
  console.log(`Nama        : ${record.employeeName}`);
  console.log(`Tanggal     : ${record.date}`);
  console.log(`Status      : ${record.isPresent ? "Hadir" : "Tidak Hadir / Absen"}`);
  
  /* Menampilkan detail waktu hanya jika karyawan hadir*/
  if (record.isPresent) {
    console.log(`Check-in    : ${record.checkInTime}`);
    console.log(`Check-out   : ${record.checkOutTime}`);
    console.log(`Total Jam   : ${record.totalWorkingHours} jam`);
  }
})
