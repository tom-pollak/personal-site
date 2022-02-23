---
title: Expected Value vs Expected Growth
date: '2022-02-23T00:00:00.000Z'
description: 'What is expected growth and how is different from expected value?'
---

> If you bet your entire bankroll every time you place a bet, your bankroll will eventually be 0

# Expected Value

> Expected value is the amount we would receive if we repeat the exact same bet an (infinite?) number of times.

$$E[X] = \sum\limits_i x_i P(x_i)$$ 

- Where $x_i$ is the percentage won or lost from the given outcome, and $P(x_i)$ is the probability of that outcome.

For a typical sports bet, the value of $x_i$ can be found with the equation:

$$x_i = \frac{S(O_i - 1)}{B_0}$$

- Where $S$ is the stake, $O_i$ is the decimal odds of that outcome and $B_0$ being the initial bankroll

This calculates the relative increase in our bankroll from each possible outcome. For a losing scenario, $x_i = -S$ as we just lose our stake.

## Using EV

This can be used as a performance metric for a bet – if one bet has an expected value of 5% and another 10% we would tend to prefer the latter to the former. However, this ignores relative likelihoods on the different outcomes.

> E.g. If a bet has a 0.0000001% likelihood but pays out 11,000,000% the expected value is 10%, but this is not an attractive bet for most people.

So we need a system dependent on the player's current bankroll.

# Enter Expected Growth

The fundamental issue with long shot bets is that, despite being positive EV, you'll lose before your entire bankroll before you could ever hope to be paid out. So while you have an expected value of 10%, the _expected outcome_ is that you lose the wager almost every time.

However, there is a way:

$$E[G] =  - 1 + \prod\limits_i (1 + x_i)^{P(x_i)}$$

This is expected growth, it uses the expected outcomes of an event rather than the value. For any given case, expected growth will be less than the expected value. This also lends itself to the idea of a finite bankroll so that no matter how positive EV a bet is, betting too much can cause your bankroll to shrink.

For instance, any outcome that causes you to lose your entire bankroll ($x_i = -1$) will cause the expected growth to become -1 no matter the probability of that event occurring. This is because if something is possible, eventually it will happen and stop the entire system.

So for any bet, we can expect an outcome bankroll of:

$$B^* = B_0 \times \prod\limits_i \left(1 + \frac{S(O_i -1)}{B_0} \right)^{P(x_i)}$$

