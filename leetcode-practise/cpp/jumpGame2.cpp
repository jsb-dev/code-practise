/*
Given a 0-index int array nums of length n, initial positioning at nums[0].
Each element nums[i] represents the max possible jump j from that index where 0 <= j <= nums[i] and i + j < n.
Return the minimum number of jumps to reach nums[n - 1].
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    int jump(vector<int> &nums)
    {
        int n = nums.size();
        if (n == 1)
            return 0;

        int maxReach = 0, jumps = 0, i = 0;

        while (i < n)
        {
            jumps++;
            int currMax = maxReach;
            for (; i <= currMax && i < n; i++)
            {
                maxReach = max(maxReach, i + nums[i]);
                if (maxReach >= n - 1)
                    return jumps;
            }
            if (currMax == maxReach)
                break;
        }

        return jumps;
    }
};
