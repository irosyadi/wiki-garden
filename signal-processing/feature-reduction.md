---
aliases: [Feature Reduction]
title: Feature Reduction
date: 2023-02-13 08:36
tags: ['signal-processing']
---

## Feature Reduction

### Feature spaces

- Reduced number of features are not descriptive enough to characterize classes
- But too many features will blur the vision to the system
- Sometimes, increasing the number of features may not offer a subsequent addition of information
- Redundant, correlated and non-discriminant features will decrease data density.
- These are curse of dimensionality phenomenon and can lead overfitting

### Goal of feature reduction

- Avoid the "curse of dimensionality".
- Improve generalization.
- Decrease computational complexity.
- Reduce the number of needed observations.

### Feature reduction methods

- Selection: choosing a subset of all the features using an objective function. Advantage: The selected features maintain their physical meaning, Approaches relatively simple to configure, Direct information about the most significant features. Disadvantage: The reduction capabilities are not extremely high, The application should be in high-dimensional sets (more than 50 features).
  - Filters.
    - Each feature is independently evaluated, and a ranking between all the features is obtained. A threshold value is imposed to select the most valued features. The evaluation of each feature is performed considering only their individual descriptive capabilities.
    - Advantage: No learning algorithm, very efficient, fast execution, features generalization (selected features are individually significant), trend to large subsets
    - Disadvantage: Could get a non-useful feature
    - Methods: Kullback-Leibler Distance
  - Wrappers
    - Different feature subsets are evaluated repeatedly trough cross validation with a certain learning machine of interest. Wrapper techniques require a predetermined learning algorithm or evaluation function, and use the performance to evaluate and determine which features are selected.
    - Advantage: high accuracy, feature relation analysis
    - Disadvantage: the brute-force methods need great amount of computation (slow). Lack of features generalization.
    - Methods: Exponential, randomized, sequential algorithm.
- Extraction: extract some form of combination of all or a subset of features. The advantages: high-level feature extraction, feature fusion, feature compression. High capability of reduction. The reduction can be focused from different strategies.. The disadvantages: generated features are not understandable. The feature subsets loose its physical meaning. Approaches relatively complex to configure.
  - Linear
    - Linear projections of high dimensional data into a lower dimensional subspace
    - Advantage: good for feature reduction, good trade-off between performance and technique complexity.
    - Disadvantage: the data may not be linear combination the reduced feature, limited performance dealing with non linear dataset
    - Methods: PCA (Principal Component Analysis, minimizing reconstruction error), PLS (Partial Least Square), LDA (Linear Discriminant Analysis, maximize class separability), CCA, LSI, ICA (Independent Component Analysis, making features more independent), FDA(Fischer Discriminant Analysis) discriminative training (minimizing classification error), projection pursuit (retaining interesting direction), GDA (Generalized Discriminant Analysis)
  - Non-linear
    - Finding a q-dimensional set of points which are most consistent with a set of dissimilarities
    - Advantage: able to deal with non-linear dataset
    - Disadvantage: original data should be analyzed first in order to design properly the non-linear reduction
    - Methods: Kernels version (Kernel PCA, Kernel ICA), Manifold learning, Multidimensional scaling (MDS), Sammon's mapping, SOM (Self Organizing Map), Curvilinear Component Analysis (CCA)

### References

- [delgadoprietoContributionsElectromechanicalSystems2012](zotero://select/library/items/R77CWBLY) [link](https://upcommons.upc.edu/handle/2117/94712) [DOI](https://doi.org/)
