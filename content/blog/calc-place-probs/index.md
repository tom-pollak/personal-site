---
title: Calculating Placing Probabilities on Win Odds
date: '2022-02-10T00:00:00.000Z'
description: 'Determining the probability of a horse placing 4th using win odds'
---

Using a group of horse's win probabilities to determine the probability of a horse placing in a single position. This can be useful for comparing the odds for the race in different markets, where there could be potential for +EV bets in undervalued markets. Although the strategy is complete, I have yet to backtest it in any real markets so far.

For any such horse in a race, the probability they will place in position $k$ is as follows:

$$
	P(X=k) = P(X = k\ |\ X \neq (1..k-1)) \times P(X \neq (1..k-1))
$$

The algorithm to solve this recursively tries every combination of horse positions, the variable `neg_prob` to track the total probability left for all the horses in solution, and `cur_adj_factor`  keeps track of the probability of the solution actually happening.

To calculate the final horse probability for a given position, you must sum together every solution in which the horse finishes in that position.

The algorithm has a time complexity of $P(h,n) = O\left(\frac{h!}{(h - n)!}\right)$ Where $h$ is the number of horses and $n$ is the number of places you want to calculate up to where $n \leq h$.

```python
def calc_places_prob(
	horses,
	cur_neg_prob=1,
	cur_adj_factor=1,
	included_r=None,
	recursion_level=0,
):
	if included_r is None:
		included_r = []
	recursion_level += 1
	for horse, probabilities in horses.items():
		prob = probabilities[0] # The horse's original probability
		if horse in included_r: # A horse can only be in a solution once
			continue

		if recursion_level > 1:
			horses[horse][recursion_level - 1] += prob * cur_adj_factor

		if recursion_level < RELEVANT_PLACES:
			neg_prob = cur_neg_prob - prob
			adj_factor = cur_adj_factor * prob / neg_prob
			included_r.append(horse)
			horses = calc_places_prob(horses, neg_prob, adj_factor, included_r, recursion_level)
			included_r.remove(horse)
	return horses
```


Check out the whole project: [tom-pollak/each-way-matcher](https://github.com/tom-pollak/each-way-matcher)