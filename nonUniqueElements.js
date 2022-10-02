/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
 
  let nums = new Map();

  for (let num of data) {
    if (nums.has(num)) {
      let num_repeats = nums.get(num);
      nums.set(num, num_repeats + 1);    
    } else {
      nums.set(num, 1);
    }
  }
  
  let nonunique = []
  for (let num of data) {
    if (nums.get(num) > 1) {
      nonunique.push(num);
    }
  }
  return nonunique;
}
