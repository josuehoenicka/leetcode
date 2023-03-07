// You can see the challenge prompt at the following link below:
// https://leetcode.com/problems/add-two-numbers/

function addTwoNumbers(l1, l2) {
    let result = new ListNode(0);
    let current = result;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
        }
        if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        current.next = new ListNode(sum);
        current = current.next;
    }

    return result.next;
}  
