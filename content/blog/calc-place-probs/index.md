---
title: Calculating Placing Probabilities on Win Odds
date: '2022-02-10T00:00:00.000Z'
description: 'Using '
---

Using a horse's win probability to determine the probability of a horse placing in each position

An example
1. Let us imagine a horse who has odds 2.5 to win a race. Therefore the horse has an implied probability of 40% to win ($\frac{1}{2.5}$)
2. If this horse has a 40% chance of winning, then all other horses combined have an $\frac{1 - 0.4}{\text{no of horses - 1}}$
- good runner has 5% chance of winning, then every other runner has (1 - 5%) / (num runners - 1) probability of winning
- good runners probability of placing 2nd | not placing 1st
- probability good runner winning: P(X=1)
- probability of every other runner winning: (1 - P(X=Win)) / #runners - 1
- Therefore: P(X=2 | X != 1) = P(X=1) / (1 - probability of another runner winning)
- P(X=2) = P(X=2 | X != 1) \* P(X != 1)
- General case: P(X=k | X != (1..k-1)) = P(X=1) / (1 - k \* probability of another runner winning)
- P(X=k) = P(k | X != (1..k-1)) \* P(X != (1..k-1))

$A = B$
$$
    \theta
$$
---

For a good runner A beating any runner other than B

```python
print('hello')
```
