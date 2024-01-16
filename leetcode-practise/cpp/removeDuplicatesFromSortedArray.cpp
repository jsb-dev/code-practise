/*
Given asc. sorted int array nums, remove duplicates in-place.
Values in nums should not be rearranged.
Return k, the number of unique elements in nums.
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int k = 0;
        for (int i = 1; i < nums.size(); i++)
        {
            if (nums[i] != nums[k])
            {
                k++;
                nums[k] = nums[i];
            }
        }
        return k + 1;
    }
};