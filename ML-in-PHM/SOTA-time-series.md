---
aliases: [SOTA (State of the Art) in Time Series]
title: SOTA (State of the Art) in Time Series
date: 2023-01-12 17:50
tags: ['tag1', 'tag2']
---

# SOTA (State of the Art) in Time Series

## Time Series Classification

### Irregularly Sampled

- GRU-D
- IP-NETS, Interpolation-Prediction Networks, for Irregularly Sampled Time Series
- Transformer
- m-TAND, Multi-Time Attention Networks, for Irregularly Sampled Time Series

### Regularly Sampled

- MALSTM-FCN, Multivariate LSTM-Fully Convolutional network
- FCN-SNLST (FCN-LS2T)
- GP-based, Gaussian Process (GP-LSTM, GP-GRU, GP-Conv1D)

### References of Models

- MALSTM-FCN, [Multivariate LSTM-FCNs for Time Series Classification](https://arxiv.org/abs/1801.04503v2), [houshd/MLSTM-FCN: Multivariate LSTM Fully Convolutional Networks for Time Series Classification](https://github.com/houshd/MLSTM-FCN)
- FCN-SNLST, [Seq2Tens: An Efficient Representation of Sequences by Low-Rank Tensor Projections](https://arxiv.org/abs/2006.07027v2) [tgcsaba/seq2tens: Seq2Tens: An efficient representation of sequences by low-rank tensor projections](https://github.com/tgcsaba/seq2tens)
- GP-based, [Bayesian Learning from Sequential Data using Gaussian Processes with Signature Covariances](https://arxiv.org/abs/1906.08215v2), [tgcsaba/GPSig: Bayesian Learning from Sequential Data using Gaussian Processes with Signature Covariances](https://github.com/tgcsaba/GPSig)

## Time Series Forecasting

### Univariate

- NLinear
- FiLM. Frequency improved Legendre Memory Model
- SCINet

### Multivariate

- DLinear
- Query Selector
- Yformer
- Informer
- NLinear
- FiLM
- SCINet

### References of Model

- FiLM [FiLM: Frequency improved Legendre Memory Model for Long-term Time Series Forecasting](https://arxiv.org/abs/2205.08897) [tianzhou2011/FiLM](https://github.com/tianzhou2011/FiLM/)
- SCINet [SCINet: Time Series Modeling and Forecasting with Sample Convolution and Interaction | OpenReview](https://openreview.net/forum?id=AyajSjTAzmg) [cure-lab/SCINet: The GitHub repository for the paper: “Time Series is a Special Sequence: Forecasting with Sample Convolution and Interaction“. (NeurIPS 2022)](https://github.com/cure-lab/SCINet)
- LTSF-Linear (DLinear, NLinear) [Are Transformers Effective for Time Series Forecasting?](https://arxiv.org/abs/2205.13504v3) [cure-lab/LTSF-Linear: This is the official implementation for AAAI-23 paper "Are Transformers Effective for Time Series Forecasting?"](https://github.com/cure-lab/LTSF-Linear)
- FEDformer
- Autoformer
- Informer
- Yformer

## Library of Timeseries Classification and Forecasting

- [timeseriesAI/tsai: Time series Timeseries Deep Learning Machine Learning Pytorch fastai | State-of-the-art Deep Learning library for Time Series and Sequences in Pytorch / fastai](https://github.com/timeseriesAI/tsai) [tsai](https://timeseriesai.github.io/tsai/) mainly for classification
  - RNN (LSTM, GRU)
  - FCN
  - LSTM-FCN, GRU-FCN, MLSTM-FCN
- [microsoft/EdgeML: This repository provides code for machine learning algorithms for edge devices developed at Microsoft Research India.](https://github.com/Microsoft/EdgeML) mainly for classification for edge devices
- [darts](https://unit8co.github.io/darts/) for forecasting and anomaly detection
  - Classic (ARIMA, VARIMA, BATS, Kalman, Random Forest)
  - RNN (GRU, LSTM)
  - TCN
  - Dlinear, Nlinear
- [eural Forecast](https://nixtla.github.io/neuralforecast/) mainly for forecasting
  - RNN (LSTM)
  - TCN
  - Autoformer, Informer

## SOTA in other Area

- OpenScience’s Bloom (opensource, 175B params),
- Google’s T5 (opensource, 11B)
- Riffusion,
- VALL-E,
- Point-E
- [ChatGPT is not all you need. A State of the Art Review of large Generative AI models](https://arxiv.org/abs/2301.04655)
