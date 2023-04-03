---
aliases: [Iterative Filtering]
title: Iterative Filtering
date: 2023-03-12 07:28
tags: ['signal']
---

## Iterative Filtering

Iterative Filtering (IF) and Empirical Mode Decomposition (EMD) are both signal processing techniques used to decompose a signal into its underlying components or modes. However, there are some differences between these two methods.

1. Principle:

EMD is based on the assumption that any complicated signal can be represented as a sum of intrinsic mode functions (IMFs), each with a different frequency and timescale. The decomposition of the signal into these IMFs is done through a sifting process, in which the signal is repeatedly decomposed into its local mean and local oscillatory component until a set of IMFs is obtained.

IF, on the other hand, is based on the assumption that the signal can be decomposed into a small number of modes that can be estimated iteratively. It uses a recursive filtering approach to estimate the modes of the signal.

1. Adaptiveness:

EMD is an adaptive method, meaning that it is designed to adapt to the local features of the signal. It decomposes the signal into a set of IMFs that capture the local behavior of the signal at different scales.

IF is also an adaptive method, but it is less flexible than EMD. It decomposes the signal into a small number of modes that are estimated iteratively, but it does not adapt to the local features of the signal as well as EMD.

1. Computational complexity:

EMD can be computationally expensive, especially for signals with a large number of data points. The sifting process used in EMD involves many iterations, and each iteration requires a lot of computational resources.

IF, on the other hand, is less computationally expensive than EMD, as it uses a recursive filtering approach that is less intensive than the sifting process used in EMD.

1. Noise robustness:

EMD is generally less robust to noise than IF. The sifting process used in EMD can be sensitive to noise, which can lead to the generation of spurious modes or IMFs.

IF is more robust to noise than EMD, as it uses a recursive filtering approach that can suppress noise.

In summary, while both IF and EMD are useful methods for signal decomposition, they differ in their underlying principles, adaptiveness, computational complexity, and noise robustness.

## References

- [Antonio Cicone on Iterative Filtering](http://people.disim.univaq.it/~antonio.cicone/Software.html)
  - (_[ciconeNumericalAnalysisIterative2018](zotero://select/library/items/APR73NIY)_, [link](http://arxiv.org/abs/1802.01359), [DOI](https://doi.org/10.48550/arXiv.1802.01359), [zolib](https://www.zotero.org/irosyadi/items/APR73NIY)) FIF (Fast Iterative Filtering)
  - (_[ciconeMultivariateFastIterative2021](zotero://select/library/items/PJVX438Y)_, [link](http://arxiv.org/abs/1902.04860), [DOI](https://doi.org/10.48550/arXiv.1902.04860), [zolib](https://www.zotero.org/irosyadi/items/PJVX438Y)) MvFIF (Multivariate Fast Iterative Filtering)
  - (_[barbeTimefrequencyRepresentationNonstationary2021](zotero://select/library/items/CE3J4YBF)_, [link](http://arxiv.org/abs/2011.14209), [DOI](https://doi.org/10.48550/arXiv.2011.14209), [zolib](https://www.zotero.org/irosyadi/items/CE3J4YBF)) IMFogram
- [EmanuelePapini/FIF](https://github.com/EmanuelePapini/FIF) Iterative Filtering ported to Python (FIF, MvFIF, IMFogram)
- (_[stalloneNewInsightsBest2020](zotero://select/library/items/77N8W6PK)_, [link](https://www.nature.com/articles/s41598-020-72193-2), [DOI](https://doi.org/10.1038/s41598-020-72193-2), [zolib](https://www.zotero.org/irosyadi/items/77N8W6PK)) EMD and IF comparison
