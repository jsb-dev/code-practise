/*
Given an int array nums, and initial positioning at nums first index, the value at nums[i] represents the maximum jump length at that position.
Return true if you can reach the last index, false otherwise.
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    bool canJump(vector<int> &nums)
    {
        int maxReach = 0;
        int size = nums.size();
        for (int i = 0; i < size; i++)
        {
            if (i > maxReach)
            {
                return false;
            }
            maxReach = max(maxReach, i + nums[i]);
            if (maxReach >= size - 1)
            {
                return true;
            }
        }
        return false;
    }
};
