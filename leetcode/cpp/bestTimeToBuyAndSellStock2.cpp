/*
Given an int array prices, where prices[i] is the price on ith day.
Limited to one stock at a time, find and return the maximum profit you can achieve.
Buying and selling on the same day is permitted.
*/

#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int profit = 0;
        for (int i = 0; i < prices.size() - 1; i++)
        {
            if (prices[i] < prices[i + 1])
            {
                profit += prices[i + 1] - prices[i];
            }
        }
        return profit;
    }
};