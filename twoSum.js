const twoSum = (nums, target) => {
  let myOBject = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (myOBject.hasOwnProperty(complement)) {
      return [myOBject[complement], i];
    }
    myOBject[nums[i]] = i;
  }
};
