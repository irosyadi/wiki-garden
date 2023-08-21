---
aliases: [Decision Level Fusion]
title: Decision Level Fusion
date: 2023-08-06 04:35
tags: ['fusion']
---

## Decision Level Fusion

In data fusion, decision level fusion is a method of combining data from multiple sources at the decision-making stage. It involves taking the outputs or decisions from each source and combining them to make a final decision.

The process of decision level fusion typically includes three steps:

1. Decision generation: Each source generates its own decision or output based on the data it has collected or analyzed. This could be in the form of classifications, rankings, probabilities, etc.
2. Decision combination: The decisions from each source are combined using various fusion techniques. These techniques can range from simple majority voting to more complex algorithms that take into account the reliability or quality of each source's decision.
3. Decision refinement: The combined decision is further refined or improved if necessary. This could involve adjusting weights assigned to different sources based on their performance or resolving conflicts between conflicting decisions.

Decision level fusion is often used in applications where multiple sources provide complementary information and combining them can lead to a more accurate or robust decision. This could include areas such as surveillance systems, sensor networks, medical diagnosis, and financial analysis.

### Methods of Decision Level Fusion

- Identity based
  - Dempster-Shafer evidence theory (_[jiangNewEngineFault2017](zotero://select/library/items/EJX4SEP4)_, [link](https://www.mdpi.com/2076-3417/7/3/280), [DOI](https://doi.org/10.3390/app7030280))
  - Maximum a priori (MAP)
  - Maximum likelihood
  - Z numbers
  - D numbers
  - Voting methods
  - Bayesian Belief fusion
  - Multi agent fusion
  - Decision Templates
- Knowledge based
  - Syntax rule
  - Neural Network
  - Fuzzy logic and set

![decision fusion](https://i.vgy.me/MRxpmi.jpg)

On the basis of the fusion type, these techniques are of two types:

- **Voting-based:** In the voting-based decision fusion techniques, majority voting is the most popular and is widely used. Some of the other techniques include weighted voting in which a weight to each classifier is attached and then decision fusion is performed. Borda count is another technique in which the sums of reverse ranks are calculated to perform decision fusion. Other voting techniques are probability-based, such as fuzzy rules, Naïve-Bayes, Dempster-Shafer theory, and so forth.
- **Divide and conquer:** In this decision fusion technique, the dataset is divided into subsets of equal sizes, and then the classification is performed followed by decision fusion on the results of those smaller dataset classifications. These divide and conquer methods include the concepts of bagging and boosting.
  - Bagging
  - Boosting
  - Stacking

Reference: [Multiple Classifier Systems  —  a brief introduction | luisfredgs](https://medium.com/luisfredgs/multiple-classifier-systems-a-brief-introduction-71238d9c794f)

### Decision Level Examples

- Example 1st is proposed by [2](https://ieeexplore.ieee.org/document/9096721/), who fuse a set of state-of-the-art CNN classifiers, namely VGG-16, SqueezeNet, and DenseNet, for remote sensing scene classification.(_[alosaimiFusionCNNEnsemble2020](zotero://select/library/items/NEUX3N2K)_, [link](), [DOI](https://doi.org/10.1109/ICCAIS48893.2020.9096721), [zolib](https://www.zotero.org/irosyadi/items/NEUX3N2K)) If at least two models agree on a class prediction, then we take that class as the final prediction. However, if they don’t agree then we choose the prediction that has the highest confidence value.
- Another example is proposed by [3](https://ieeexplore.ieee.org/document/8577603) and [4](https://ieeexplore.ieee.org/document/8740526/), who use a decision-level fusion method based on CNNs and Bayesian inference for the same task.
- A third example is proposed by [5](https://link.springer.com/article/10.1007/s10922-021-09639-z), who use a Bayesian fusion method to combine the results of three deep learning methods, namely 1D-CNN, deep belief network (DBN), and multi-layer perceptron (MLP), for network traffic classification. (_[izadiNetworkTrafficClassification2022](zotero://select/library/items/8AV8EUZ7)_, [link](https://doi.org/10.1007/s10922-021-09639-z), [DOI](https://doi.org/10.1007/s10922-021-09639-z), [zolib](https://www.zotero.org/irosyadi/items/8AV8EUZ7)) using Bayesian data fusion upon confusion matrices.
- VWDT: (_[miMultipleClassifierFusion2016](zotero://select/library/items/56Q6MV2Y)_, [link](https://www.hindawi.com/journals/sp/2016/3943859/), [DOI](https://doi.org/10.1155/2016/3943859), [zolib](https://www.zotero.org/irosyadi/items/56Q6MV2Y))

### Pusion: Python Library for Decision Fusion

- [pusion – Decision Fusion Framework — pusion - Decision Fusion Framework documentation](https://ipvs-as.github.io/pusion/build/html/index.html)
- Utility-based methods (low evidence resolution):
  - Borda Count ([BC](https://ipvs-as.github.io/pusion/build/html/pusion.core.borda_count_combiner.html#bc-cref))
  - Cosine Similarity ([COS](https://ipvs-as.github.io/pusion/build/html/pusion.core.cosine_similarity_combiner.html#cos-cref))
  - Macro Majority Vote ([MAMV](https://ipvs-as.github.io/pusion/build/html/pusion.core.macro_majority_vote_combiner.html#mamv-cref))
  - Micro Majority Vote ([MIMV](https://ipvs-as.github.io/pusion/build/html/pusion.core.micro_majority_vote_combiner.html#mimv-cref))
  - Simple Average ([AVG](https://ipvs-as.github.io/pusion/build/html/pusion.core.simple_average_combiner.html#avg-cref))  
- Evidence-based methods (medium evidence resolution):
  - Naive Bayes ([NB](https://ipvs-as.github.io/pusion/build/html/pusion.core.naive_bayes_combiner.html#nb-cref))
  - Weighted Voting ([WV](https://ipvs-as.github.io/pusion/build/html/pusion.core.weighted_voting_combiner.html#wv-cref))  
- Trainable methods (highest evidence resolution):
  - Behaviour Knowledge Space ([BKS](https://ipvs-as.github.io/pusion/build/html/pusion.core.behaviour_knowledge_space_combiner.html#bks-cref))
  - Decision Templates ([DT](https://ipvs-as.github.io/pusion/build/html/pusion.core.decision_templates_combiner.html#dt-cref))
  - k Nearest Neighbors ([KNN](https://ipvs-as.github.io/pusion/build/html/pusion.core.k_nearest_neighbors_combiner.html#knn-cref))
  - Dempster Shafer ([DS](https://ipvs-as.github.io/pusion/build/html/pusion.core.dempster_shafer_combiner.html#ds-cref))
  - Maximum Likelihood ([MLE](https://ipvs-as.github.io/pusion/build/html/pusion.core.maximum_likelihood_combiner.html#mle-cref))
  - Neural Network ([NN](https://ipvs-as.github.io/pusion/build/html/pusion.core.neural_network_combiner.html#nn-cref))
