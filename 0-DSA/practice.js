const evenNum = (arr, count = 0) => {
    if (count === arr.length) {
        return;
    }
    if (arr[count] % 2 == 0) {
        console.log("even")
    }

    evenNum(arr, count + 1)
}
// evenNum([1, 3, 4, 2])


const intersection = (arr1, arr2) => {
    let intersection = []
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                intersection.push(arr1[i])
            }
        }
    }
    return intersection
}
// console.log(intersection([1, 2, 3, 4, 5], [2, 4, 5, 6, 7]))

const union = (arr1, arr2) => {
    let union = [...arr1, ...arr2]
    let sort = union.sort((a, b) => {
        return a - b
    })
    return [... new Set(sort)]
}
// console.log(union([1, 22, 2, 3, 4, 5], [2, 52, 4, 5, 6, 7]))

const lengthOfStr = (str) => {
    let length = str.split('')
    return length.length
}

// console.log(lengthOfStr('muzammil'))

const reverseArray = (arr) => {
    reverse = []
    for (var i = arr.length - 1; i > -1; i--) {
        reverse.push(arr[i])
    }
    return reverse
}

// console.log(reverseArray([1, 2, 3, 4, 5, 6]))


function findHighestFrequencyString(arr) {
    // Create an empty object to store the frequency of each string
    const frequencyMap = {};

    // Iterate over the array to build the frequency map
    for (let str of arr) {
        // If the string is already in the map, increment its count
        // Otherwise, add it to the map with a count of 1
        if (frequencyMap[str]) {
            frequencyMap[str]++;
        } else {
            frequencyMap[str] = 1;
        }
    }

    // Initialize variables to store the string with the highest frequency
    let maxFrequency = 0;
    let maxFrequencyString = '';

    // Iterate over the frequency map to find the string with the highest frequency
    for (let str in frequencyMap) {
        if (frequencyMap[str] > maxFrequency) {
            maxFrequency = frequencyMap[str];
            maxFrequencyString = str;
        }
    }

    // Return the string with the highest frequency
    return maxFrequencyString;
}

// Example usage:
const arrayOfStrings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const highestFrequencyString = findHighestFrequencyString(arrayOfStrings);
console.log(highestFrequencyString); // Output: "apple"












//bubble sort

// let arr = [32, 1, 9, 6]


const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

// complexity of bubble sort On^2 (Worst Case)
// complexity of bubble sort On (Best Case)




// console.log(bubbleSort([32, 1, 9, 6,3,1,2,3,4,5,7,34,2,3,4,2,23,24]))
// console.log(bubbleSort([32, 1, 9, 6]))


// insertion selecting merge quick 


