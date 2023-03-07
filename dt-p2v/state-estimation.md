---
aliases: [State Estimation in P2V]
title: State Estimation in P2V
date: 2022-12-05 10:28
tags: ['statistics']
---

## State Estimation in P2V

### State Estimation

- Consider $x_k$ is digital state vectors, $y_k$ is noisy measurement (observation) vector, $u_k$ is measured input vector, $\omega_k$ vector of process noise variable, $v_k$ is vector of measurement noise variable, $f(\cdot)$ is state transition function and $g(\cdot)$ measurement function.  
  - State transition: $x_k=f(x_{k-1},u_{k-1})+\omega_k$
  - Measurement: $y_k= g(x_k)+v_k$
- The state transition equation models the time evolution of the states as a dynamic system $f(\cdot)$, perturbed by noise $\omega_k$. The state transition equation can be rewritten as the transition probability density $p(x_k|x_{k-1})$.
- The measurement equation can be written as $p(y_k|x_k)$. Conditional density of measurement $y_k$ given the state $x_k$
- It can be represented as a hidden Markov model as below  
![](https://i.vgy.me/ouNe2B.png)
- The objective of the state estimation is to estimate (in recursive way) the hidden state ($x_k$) from the measurements ($y$). To estimate it, we compute the marginal conditional distribution of $x_k$ given all available measurements $y_{1:k}$
- The marginal conditional of the digital state can be denoted as $p(x_k|y_{1:k})$ and computed using Bayes theorem as
$$
p({x}_{k}|{y}_{1:k})=\frac{p({y}_{k}|{x}_{k})p({x}_{k}|{y}_{1:k-1})}{\int p({y}_{k}|{x}_{k})p({x}_{k}|{y}_{1:k-1})d{x}_{k}}, \propto p(y_k|x_k)p(x_k|y_{1:k})
$$

where $y_{1:k}$ are observation from $t_1$ to $t_k$, $\propto$ is proportional to, and $p(\cdot|\cdot)$ is a conditional probability density function.

See [Recursive Bayesian Estimation](bayesian-estimation.md).

### State Estimation Problems

- Filtering
  - estimate present (current) states
  - applications: fault diagnosis
- Prediction
  - estimate future states
  - Prediction methods are concerned with estimating future states using historical data.
  - Prediction is typically used for understanding future system state.
  - Prediction in digital twin is typically used for planning and control
  - applications: health forecasting, RUL predictions
- Smoothing:
  - estimate past states
  - Smoothing methods operate on previously collected data and generally reduce the size of the data in the process.
  - Smoothing was used to understand historical system state.

![State Estimation Problems](https://i.vgy.me/r2nwfw.png)

### Bayesian Filters

- Four recursive Bayesian filter as below  
![](https://i.vgy.me/nlSXeE.png)
- Applications of particle filters for state estimation in the digital twin context have been mostly limited to a small number of state dimensions (typically < 5)

### State Estimation vs Parameter Estimation

- Parameter estimation: estimating digital state variables that change very slowly or do not change with time.
- State estimation: estimating digital state variables that change rapidly with time

### References
