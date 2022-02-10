---
title: Calculating Placing Probabilities on Win Odds
date: '2022-02-10T00:00:00.000Z'
description: 'asjdfkjflk'
---

- good runner has 5% chance of winning, then every other runner has (1 - 5%) / (num runners - 1) probability of winning
- good runners probability of placing 2nd | not placing 1st
- probability good runner winning: P(X=1)
- probability of every other runner winning: (1 - P(X=Win)) / #runners - 1
- Therefore: P(X=2 | X != 1) = P(X=1) / (1 - probability of another runner winning)
- P(X=2) = P(X=2 | X != 1) \* P(X != 1)
- General case: P(X=k | X != (1..k-1)) = P(X=1) / (1 - k \* probability of another runner winning)
- P(X=k) = P(k | X != (1..k-1)) \* P(X != (1..k-1))

---

For a good runner A beating any runner other than B

```python
print('hello')
```
