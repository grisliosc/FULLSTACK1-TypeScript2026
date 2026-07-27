/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

//DEKLARASI
const friedRiceQty: number = 3;
const friedRicePrice: number = 18000;

const mineralWaterQty: number = 2;
const mineralWaterPrice: number = 5000;

const discount: number = 10000;

//NGITUNG BOS
const totalFriedRice: number = friedRiceQty * friedRicePrice;
const totalMineralWater: number = mineralWaterQty * mineralWaterPrice;
const totalBeforeDiscount: number = totalFriedRice + totalMineralWater;
const finalPayment: number = totalBeforeDiscount - discount;

console.log("=== Cafeteria Purchase Calculation ===");
