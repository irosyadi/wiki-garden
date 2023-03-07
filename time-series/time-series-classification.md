---
aliases: [Time Series Classification]
title: Time Series Classification
date: 2023-02-09 21:03
tags: ['time-series']
---

## Time Series Classification

### Algorithms

- Feature Engineering
- Nearest-neighbor classification with dynamic time warping (DTW)
  - KNN with DTW
- Kernel methods
  - SVM with GK
- Shapelet-based algorithms
  - Shapelet Transform
  - Learning Shapelet
- Tree-based algorithms
  - Time series forest
  - Time series bag-of-features
  - Proximity forest
- Bag-of-words (dictionary-based) approaches
  - Approaches based on discretizing raw time series
    - Symbolic Aggregation approXimation (SAX)
    - Symbolic Aggregation approXimation in Vector Space Model (SAX-VSM)
  - Methods based on discretizing Fourier coefficients
    - Symbolic Fourier Approximation (SFA)
    - Bag-of-SFA-Symbols (BOSS), BOSSVS, RBOSS, SP-BOSS, Randomized BOSS
    - Temporal Dictionary Ensemble
    - Word Extraction for Time Series Classification (WEASEL), WEASEL+MUSE
- Imaging time series
  - Recurrence plot
  - Gramian angular field
  - Markov transition field
- Deep learning
  - Multilayer perceptron
  - Fully CNN
  - Residual Network
  - Encoder
  - Multi-channel CNN
  - Time CNN
  - InceptionTime
- Random convolutions
  - Random Convolutional Kernel Transform (ROCKET), MiniROCKET, MultiROCKET
- Ensemble models
  - Collective of Transformation-Based Ensembles (COTE), Flat-COTE, HIVE-COTE
  - Time Series Combination of Heterogeneous and Integrated Embedding Forest (TS-CHIEF)

### Deep Learning based Algorithms

- Generative Models: unsupervised training step that precedes the learning phase of the classifier, the goal is to find a good representation of time series prior to training a classifier
  - Auto Encoders: stacked denoising auto-encoders (SDAE), generative CNN-based, DBN, RNN auto encoder + classifier
  - Echo State Networks: traditional, kernel learning, meta learning
- Discriminative Models: a classifier (or regressor) that directly learns the mapping between the raw input of a time series (or its hand engineered features) and outputs a probability distribution over the class variables in a dataset
  - Feature Engineering:
    - image transform (Gramian fields, recurrence plots, Markov transition fields),
    - domain specific
  - End-to-end:
    - MLP,
    - CNN
    - FCN
    - Residual Network: Resnet
    - Hybrid

### References

- [faouziTimeSeriesClassification2022](../zotero/faouziTimeSeriesClassification2022.md)
- [ismailfawazDeepLearningTime2019](../zotero/ismailfawazDeepLearningTime2019.md) [hfawaz/dl-4-tsc: Deep Learning for Time Series Classification](https://github.com/hfawaz/dl-4-tsc)
- [hfawaz/ijcnn19ensemble: Deep Neural Network Ensembles for Time Series Classification](https://github.com/hfawaz/ijcnn19ensemble)
