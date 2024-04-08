/**
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
   The overall run time complexity should be O(log (m+n)).
 * Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.
    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = mergedArray.length;

    let left = 0;
    let right = len;
    let pivot = Math.round((left + right - 1)/ 2);
    
    if (len % 2 === 1) {
        return mergedArray[pivot];
    } else {
        let left = pivot;
        let right = pivot - 1;

        if (mergedArray[left] > 0 && mergedArray[right] > 0) {
            let sum = (mergedArray[left] + mergedArray[right]) / 2;
            return sum;
        }
        
        return 0;
    }
};

findMedianSortedArrays([1, 3], [2, 7]);
findMedianSortedArrays([1, 3], [2, 5, 6, 7]);