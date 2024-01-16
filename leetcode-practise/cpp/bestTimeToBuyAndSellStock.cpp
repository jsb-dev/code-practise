/*
Given an array prices where prices[i] is price of a stock on the ith day.
Return the maximum profit you can achieve from choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
If no profit, return 0.
*/

#include <iostream>
#include <vector>
#include "../../../../../usr/include/c++/11/bits/algorithmfwd.h"
#include <climits>

using namespace std;

class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int maxProfit = 0;
        int minPrice = INT_MAX;

        for (int price : prices)
        {
            minPrice = min(minPrice, price);
            maxProfit = max(maxProfit, price - minPrice);
        }

        return maxProfit;
    }
};
