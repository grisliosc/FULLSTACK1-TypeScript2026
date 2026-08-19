/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

// Product information
const keyboardPrice: number = 850000;
const keyboardQty: number = 1;

const mousePrice: number = 275000;
const mouseQty: number = 2;

const mousePadPrice: number = 120000;
const mousePadQty: number = 1;

// Calculate subtotal
const subtotal: number = (keyboardPrice * keyboardQty) + (mousePrice * mouseQty) + (mousePadPrice * mousePadQty);

// Count total purchased items
let totalItems: number = 0;
totalItems += keyboardQty;
totalItems += mouseQty;
totalItems += mousePadQty;

// Determine discount eligibility
const discountThreshold: number = 1000000;
const discountRate: number = 0.10;
let discount: number = 0;

if (subtotal > discountThreshold) {
    discount = subtotal * discountRate;
}

// Calculate final payment
const finalPayment: number = subtotal - discount;

console.log("=== Shopping Cart Summary ===");
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Total items purchased: ${totalItems}`);
console.log(`Discount applied: Rp${discount}`);
console.log(`Final amount to be paid: Rp${finalPayment}`);
                