---
aliases: [Paper Plan 01]
title: Paper Plan 01
date: 2023-03-01 11:59
tags: ['writing']
---

## Paper Plan 01

### Introduction

[gongFastAnomalyDiagnosis2022](zotero://select/library/items/GVWAJJMT) [link]() [DOI](https://doi.org/10.1109/TIE.2021.3135520)

- Multisensor
- Approached multi sensor as $t*l$ data
- 1D multilayer CNN, claim to be faster than 2D CNN

[udmaleMultiFaultBearingClassification2020](zotero://select/library/items/USAJQM4E) [link]() [DOI](https://doi.org/10.1109/JSEN.2019.2947026)

- multisensor
- using kurtogram, 2D CNN
- discrete different speed (600, 800, 1200, 1600 rpm), tackling the different speed situation using transfer learning
- 1200 data samples (type-1), 2048 samples CRWU (0.04s)

Here is chat-GPT answer for fast model adaptation

1. Use transfer learning: Transfer learning is a technique where you use a pre-trained model as a starting point for training on a new dataset. This can save a lot of time and computational resources since you don't have to train the model from scratch. Transfer learning works best when the new dataset is similar to the original dataset the model was trained on.
2. Fine-tune only the top layers: If you're using transfer learning, you can speed up the process by only fine-tuning the top layers of the pre-trained model. The lower layers, which are responsible for low-level feature extraction, can often be reused without modification.
3. Use a smaller model: If the new dataset is smaller or less complex than the original dataset, you may be able to use a smaller model architecture, which can train faster and require less computational resources.
4. Use data augmentation: Data augmentation is a technique where you create new training data by applying transformations to the existing data. This can help increase the size of the training set and improve the generalization ability of the model.
5. Use a faster optimizer: The optimizer is responsible for updating the weights of the model during training. Some optimizers, such as stochastic gradient descent with momentum (SGDM), can train faster than others, such as plain stochastic gradient descent (SGD).

The phenomenon is called data drifting (if training and evaluation have different statistics) and concept drifting (in non-stationary situation).  
Check [thelenComprehensiveReviewDigital2022](zotero://select/library/items/FXSERGFX) [link](http://arxiv.org/abs/2208.14197) [DOI](https://doi.org/10.48550/arXiv.2208.14197) on how to handle them.

How to monitor the drifting?

- to monitor an ML model’s test data for drift from the training data with statistic metric (e.g., Kullback–Leibler divergence or Jensen-Shannon divergence).
- to monitor the variation of model predictive quality over a time window, allowing trending model quality.
- to calculate mean error between the ML predictions and actual measurements in the recent past and tune the last fully-connected layer or the last few layers, in the case of a neural network.

How to update?

- tune the last fully-connected layer or the last few layers, in the case of a neural network.
- Q-learning
- errorand event-triggered mechanisms
- ML model updating can be formulated as a parameter estimation problem (Kalman Filter, Particle filter for updating the model parameter)

Another method: retraining ([zufleMachineLearningModel2021](zotero://select/library/items/KDGNEA53) [link]() [DOI](https://doi.org/10.1109/ICMLA52953.2021.00223), [zhangAutonomousModelUpdate2019](zotero://select/library/items/4U5XIMAH) [link]() [DOI](https://doi.org/10.1109/GLOBECOM38437.2019.9014036))

Another method: evolutionary ML ([telikaniEvolutionaryMachineLearning2022](zotero://select/library/items/UG3DMBG9) [link](https://dl.acm.org/doi/10.1145/3467477) [DOI](https://doi.org/10.1145/3467477)). Evolutionary algorithms perform parameter optimization.

### ML Model Uncertainties

Oh my god, this means we should go to this topic.

- Bayesian Machine Learning  
In Bayesian deep learning, the model parameters are treated as random variables and a prior distribution is placed over them. ([Discover the Power of Bayesian Deep Learning](https://towardsdatascience.com/primer-on-bayesian-deep-learning-d06e0601c2ae))
- Probabilistic Machine Learning  
Probabilistic deep learning, on the other hand, models the data-generating process as a probabilistic function.

### References
