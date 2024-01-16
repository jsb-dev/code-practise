/*
Given an int array ciations where citations[i] = number of citations for ith paper, return the researcher's h-index.
H-index: The maximum value of h such that at least h papers have h citations.
*/

#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

class Solution
{
public:
    int hIndex(vector<int> &citations)
    {
        sort(citations.rbegin(), citations.rend());
        int h = 0;
        for (int i = 0; i < citations.size(); ++i)
        {
            if (citations[i] >= i + 1)
            {
                h = i + 1;
            }
            else
            {
                break;
            }
        }
        return h;
    }
};
