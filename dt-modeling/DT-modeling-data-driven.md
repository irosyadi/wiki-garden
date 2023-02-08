---
aliases: [Data-driven Modeling in Digital Twin]
title: Data-driven Modeling in Digital Twin
date: 2022-10-31 09:58
tags: ['tag1', 'tag2']
---

# Data-driven Modeling in Digital Twin

## According to [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md)

- Statistical models
  - Statistical models for dynamic system identification (P2V). Models: time-based (AR, ARMA, ARIMA, SSI), non-linear (NARX, NARMAX), frequency (FDD)  
  - Statistical methods for degradation modeling in predictive maintenance (V2P). Models: single failure (Markov models, semi-Markov models, Wiener process, Poisson process, inverse Gaussian process, Gamma process, accelerated life testing (ALT) model), multiple failures (multiphase stochastic process, piece-wise Markov process, copula functions, system-level ALT), Bayesian model updating methods with Markov chain. (see: [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md))
- Machine Learning models
    - Conventional ML: feed-forward NN, SVM, random forests, Gaussian process regression
        - For system identification, combined with statistical methods (GP-NARX, NARX-net)
    - Deep learning model
       - For surrogate modeling. Algorithm: LSTM, CNN-LSTM
       - For system identification
         - DL is used to learn the input-output relationship directly. Algorithm: LSTM
         - DL is used to learn the state-space model of a system. Algorithm: autoencoder

## Data-driven modeling: reasons

- the underlying physics is too complicated or is not fully understood
- the physics is understood and can be modeled using available software, but the simulation is too computationally expensive or time-consuming to be useful in a digital twin

## Data-driven modeling: classes

- Data-driven models for degradation modeling
- Data-driven surrogate models. Surrogate modeling is typically constructed and optimized using computer simulation data for any type of physical simulation at any timescale.
- Data-driven models for dynamic system identification using sensor measurement. System identification mainly uses online sensor monitoring data and/or offline experimental data collected to tune the specific model’s parameter(s).

![](https://i.vgy.me/B7jA3o.png)

## Data-driven modeling: issues

- Model selection
- Uncertainty quantity (UQ) of ML models
- Data collection
