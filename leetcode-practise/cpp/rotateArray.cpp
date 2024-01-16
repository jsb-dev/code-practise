/*
Given an int array nums, rotate the array to the right by k steps, where k is non-negative.
*/

#include <iostream>
#include <vector>
#include "../../../../../usr/include/c++/11/bits/algorithmfwd.h"

using namespace std;

class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        k %= nums.size();
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};
