---
title: Calculating Placing Probabilities on Win Odds
summary: Determining the probability of a horse placing 4th for extra places
layout: post
---

Using a group of horse's win probabilities to determine the probability of a horse placing in a single position. This can be useful for comparing the odds for the race in different markets, where there could be potential for +EV bets in undervalued markets. Although the strategy is complete, I have yet to backtest it in any real markets so far.

For any such horse in a race, the probability they will place in position $k$ is as follows:

$$
	P(X=k) = P(X = k\ |\ X \neq (1..k-1)) \times P(X \neq (1..k-1))
$$

The algorithm to solve this recursively tries every combination of horse positions, the variable `neg_prob` to track the total probability left for all the horses in solution, and `cur_adj_factor` keeps track of the probability of the solution actually happening.

To calculate the final horse probability for a given position, you must sum together every solution in which the horse finishes in that position.

The algorithm has a time complexity of $P(h,n) = O\left(\frac{h!}{(h - n)!}\right)$ Where $h$ is the number of horses and $n$ is the number of places you want to calculate up to where $n \leq h$.

<script src="https://gist.github.com/tom-pollak/818f2d1dd21575bc7924bc44feb1d50d.js"></script>

Check out the whole project: [tom-pollak/each-way-matcher](https://github.com/tom-pollak/each-way-matcher)
