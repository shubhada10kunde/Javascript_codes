// Testing function : to run test cases for both given algorithm brute force and kadane's
function runTestCases(algorithmName, algorithmFunction, testCases) {
  console.log(`${algorithmName} Results:`);

  testCases.forEach(({ arr, expectedOutput }, index) => {
    // Executing the function with the provided input array
    const { maxSum, subarray } = algorithmFunction(arr);

    // comparing result with expected output
    const status = maxSum === expectedOutput ? "Passed" : "Failed";

    // printing the result
    console.log(
      `Test Case ${index + 1}: ${status} => Max Sum: ${maxSum}, Subarray: [${subarray}], Expected Sum: ${expectedOutput}`
    );
  });
  console.log("");
}

// ###################### Brute Force Approach ################################

// Brute Force Approach
function BruteForcemaxSubarraySum(arr) {
  // Initialize maxSum to a very smallest posible number
  let maximumSum = -10000;
  let start = 0, end = 0, maxLength = 0;

  // Looping through each starting index of the subarrays
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    // Looping through the ending index of the subarray
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      
      // if we have 2 subarrays whose sums are equal then Updating maximum sum and will choose the longest subarray
      if (
        currentSum > maximumSum ||
        (currentSum === maximumSum && j - i + 1 > maxLength)
      ) {
        maximumSum = currentSum; // updating maxSum
        start = i; // updating start index
        end = j; // updating end index
        maxLength = j - i + 1;
      }
    }
  }

    // Returning maxSum and its subarray
  return { maxSum: maximumSum, subarray: arr.slice(start, end + 1) };
}

// Complexity Analysis

/* Time and space complexity for Brute Force Approach:

- Time Complexity: O(n^2): due to the nested loops for all subarrays and Because we are traversing the array multiple times. Inner loop iterates over all possible ending indices for each starting index.
- Space Complexity: O(1): Because Only a few variables are used for computations and there is no extra space is used. Uses a few variables (maxSum and currentSum) to store results.
- Inefficient for large arrays. Efficient for small arrays */

//###################### Kadane's Algorithm ##############################

// Kadane's Algorithm
function KadanemaxSubarraySum(arr) {
  // Initializing variables with the first element of the array

  let currentSum = arr[0];
  let maximumSum = arr[0];
  let start = 0, end = 0, tempStart = 0,  maxLength = 1;
    

  // Traversing the array start from the second element
  for (let i = 1; i < arr.length; i++) {
     if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      tempStart = i; // updating the temporary start index
    } else {
      currentSum += arr[i];
    }

    // in case of 2 subarrays whose sums are equal then Updating maximum sum and will choose the longest subarray
    if (
      currentSum > maximumSum ||
      (currentSum === maximumSum && i - tempStart + 1 > maxLength)
    ) {
      maximumSum = currentSum; // updating maxSum
      start = tempStart; // updating start index
      end = i; // updating end index
      maxLength = i - tempStart + 1;
    }
  }

   // Returning both maxSum and its subarray
  return { maxSum: maximumSum, subarray: arr.slice(start, end + 1) };
}

// Complexity Analysis

/* Time and space complexity for Kadane's Algorithm:

- Time Complexity: O(n) since we are traversing the array only one time and performing a constant number of operations for each element. 
- Space Complexity: O(1): Because Only a few variables are used for computations and no additional space is required. Requires only two variables (currentSum and maxSum) to track the current subarray sum and global maximum sum. */

//#########################################################################

// Test cases
const testCases = [
  { arr: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expectedOutput: 6 }, // input array
  { arr: [1], expectedOutput: 1 },
  { arr: [-1, -2, -3, -4], expectedOutput: -1 }, // all negative numbers
  { arr: [2, 3, 4, 1, 5], expectedOutput: 15 }, // all positive numbers
  { arr: [5, 4, -1, 7, 8], expectedOutput: 23 }, // positive + negative numbers
  { arr: [5, -2, -1, 3, -4], expectedOutput: 5 }, // this will give 2 subarrays but will print longest one
  { arr: [0, -1, 0, -2, 0], expectedOutput: 0 },
  { arr: [8, -19, 5, -4, 20], expectedOutput: 21 },
  { arr: [0], expected: 0 },
];

// Running test cases
runTestCases("Brute Force", BruteForcemaxSubarraySum, testCases);
runTestCases("Kadane's Algorithm", KadanemaxSubarraySum, testCases);
