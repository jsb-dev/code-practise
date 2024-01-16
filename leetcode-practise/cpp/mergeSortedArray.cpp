/*
Given two asc. sorted integer arrays nums1, nums2, and twoints, m and n, representing the number of elements in nums1 and nums2 respectively.
Merge the arrays into a single asc. sorted array.
The output should be stored in nums1. Ignore the last three elements of nums1 as they are 0, meant to be replaced by the remaining intsd of nums2.
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        int idx1 = m - 1;
        int idx2 = n - 1;
        int mergeIdx = m + n - 1;

        while (idx2 >= 0)
        {
            if (idx1 >= 0 && nums1[idx1] > nums2[idx2])
            {
                nums1[mergeIdx] = nums1[idx1];
                idx1--;
            }
            else
            {
                nums1[mergeIdx] = nums2[idx2];
                idx2--;
            }
            mergeIdx--;
        }
    }
};
