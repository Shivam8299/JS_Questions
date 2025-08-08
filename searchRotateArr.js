function searchRotatedArray(nums, target) {
    let res = nums.find(item => (item === target))
    if (res) {
        return res
    }
    else {
        return -1
    }
}

console.log(searchRotatedArray([1,2,3,4,5,6],7))