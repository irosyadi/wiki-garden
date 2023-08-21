---
aliases: [Types of Continual Learning]
title: Types of Continual Learning
date: 2023-08-06 08:46
tags: ['continual-learning']
---

## Types of Continual Learning

- **Task-incremental learning**. The model learns a new task at a time, while retaining knowledge of previously learned tasks.
- **Domain-incremental learning**. The model learns to perform a task in a new domain, while retaining knowledge of how to perform the task in other domains.
- **Class-incremental learning**. The model learns to classify new classes of data, while retaining knowledge of how to classify existing classes of data.

### Visualization of the types

![IL-Class](https://i.vgy.me/OrF7VR.png)  
![IL-Class](https://i.vgy.me/CAmxJ0.png)  
![](https://github.com/GMvandeVen/continual-learning/raw/master/figures/splitMNIST_schematic.png)

### References

- [Three types of incremental learning | Nature Machine Intelligence](https://www.nature.com/articles/s42256-022-00568-3)  
- [[1904.07734] Three scenarios for continual learning](https://arxiv.org/abs/1904.07734)
- [GMvandeVen/continual-learning: PyTorch implementation of various methods for continual learning (XdG, EWC, SI, LwF, FROMP, DGR, BI-R, ER, A-GEM, iCaRL, Generative Classifier) in three different scenarios.](https://github.com/GMvandeVen/continual-learning)
- [continual-learning/NeurIPS\_tutorial.md at master · GMvandeVen/continual-learning](https://github.com/GMvandeVen/continual-learning/blob/master/NeurIPS_tutorial.md)


## Online Continual Learning vs Offline (Batch) Continual Learning

- Conventional CL assumes that new data arrive one task at a time, and the data distribution for each task is stationary [9]. Thus, a model can be trained in an offline manner, namely multiple epochs over the current task with repeat shuffle. However, this setting requires storing all data from the current task for training, which may not be feasible due to privacy issues or resource limitations.
- Online Continual Learning, where data arrive one tiny batch at a time and previously seen batches from the current or the previous tasks are not accessible. Therefore, a model is required to efficiently learn from a single pass over the online data stream where the model may experience new classes (Online Class Incremental, OCI) or data nonstationarity, including new background, blur, noise, illumination, and occlusion, etc.(Online Domain Incremental, ODI).  
  - In this work, we revisited continual learning but proposed to focus on the more realistic setting where examples are seen only once, memory is finite, and the learner is also provided with (potentially structured) task descriptors.
  - We studied the problem of efficient Lifelong Learning (LLL) in the case where the learner can only do a single pass over the input data stream.
  - While different settings have been investigated of how new data are being received and learned, we focus on the challenging scenario of learning from an online stream of data with new classes being introduced at unknown points in time and where memory and compute constraints are applied on the learner.
- In general, in Online CL the stream is a sequence of samples, and each sample is exposed only once to the strategy, similar to the standard online learning setting.  
- In Batch CL, the stream is a sequence of large batches (or datasets), and the model can have an arbitrary number of epochs over it.  
- **In Avalanche**, a stream is always a sequence of experiences. So in the case of online CL, the experience size is very small (usually 1, 10 or 64) and each experience contains only few samples, and in the batch CL setting the experiences usually contain a dataset. Obviously the online CL setting is more challenging because you don't even have a locally i.i.d access to the dataset and you need to update the model with incoming samples (or small mini-batches) instead of incoming datasets. Experience in avalanche can be batch or task.