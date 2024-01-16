/*
Given int array nums and int val, remove all instances of val in nums in-place.
Output the array, and return k, the int representing how many elements are still filled in the array (moved to the start of the array).
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    int removeElement(vector<int> &nums, int val)
    {
        int k = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] != val)
            {
                if (i != k)
                {
                    nums[k] = nums[i];
                }
                k++;
            }
        }
        return k;
    }
};
