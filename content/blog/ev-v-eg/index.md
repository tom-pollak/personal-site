---
title: Expected Value vs Expected Growth
date: '2022-02-23T00:00:00.000Z'
---

> If you wager your entire bankroll every time you place a bet, your bankroll will eventually be 0.

## Expected Value

> Expected value is the average amount we receive if we repeat a bet an infinite number of times.

$$
 E[X] = \sum\limits_i x_i P(x_i)
$$

Where:

- $x_i$ - the percentage of stake won or lost from outcome $i$
- $P(x_i)$ - the probability of that outcome.

For a typical sports bet, $x_i$ can be found with the equation:

$$
 x_i = \frac{S(O_i - 1)}{B_0}
$$

Where:

- $S$ - stake
- $O_i$ - decimal odds of outcome $i$
- $B_0$ - initial bankroll before bet

This calculates the relative increase in our bankroll from each possible outcome. For a
losing scenario, $x_i = -\frac{S}{B_0}$ as we just lose our stake.

### Using EV

This can be used as a performance metric for a bet – if one bet has an expected value of
5% and another 10% we would tend to prefer the latter to the former. However, this
ignores relative likelihoods on the different outcomes.

> E.g. If a bet has a 0.0000001% likelihood but pays out 11,000,000% the expected value
> is 10%, but this is not an attractive bet for most people. You certainly wouldn't
> expect a 10% return on your investment.

So we need a system dependent on the player's current bankroll.

## Enter Expected Growth

The fundamental issue is that, while expected value calculates the long-term value of
infinitely repeating a bet, in any real scenario we can only bet once, and only get one
outcome.

This is the problem with the previous example, as despite being positive EV, you could
only bet fractions of a penny if you have any hope to be paid out before your bankroll
hits 0. So while you have an expected value of 10%, the _expected outcome_ is that you
lose the wager almost every time.

We can formalize this:

$$
 E[G] =  - 1 + \prod\limits_i (1 + x_i)^{P(x_i)}
$$

This is expected growth, and it uses the expected outcomes of an event rather than the
value. For any given case, expected growth will be less than the expected value. This
lends itself to the idea of a finite bankroll, so that no matter how positive EV a bet
is, betting too much can cause your bankroll to shrink.

> If you wager your entire bankroll every time you place a bet, your bankroll will eventually be 0.

Let us take this as an example for $EG$, any outcome that causes you to lose your entire
bankroll ($x_i = -1$) will imply $EG = -1$, no matter the probability of that event
occurring. This is because if something is possible, it will happen eventually and stop
the entire system.

Applying the concept to a sports bet, we can calculate the expected bankroll after a
single bet:

$$
 B^* = B_0 \times \prod\limits_i \left(1 + \frac{S(O_i -1)}{B_0} \right)^{P(x_i)}
$$

Take me to **[Part 2!](../3-way-kelly/)**
