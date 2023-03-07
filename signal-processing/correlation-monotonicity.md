---
aliases: [Correlation Monotonicity]
title: Correlation Monotonicity
date: 2023-02-23 09:37
tags: ['statistics']
---

## Correlation Monotonicity

The main task of feature selection is to discard irrelevant and redundant features which do not provide sufficient fault signatures. It means that a good prognostic feature should be monotonically correlated with degradation process. Based on these principles, here, the correlation and monotonicity metrics are utilized to select the most sensitive features from the feature set.

The correlation metric measures a linear correlation between features and operating time and it is calculated by

$$
\mathrm{Corr}=\frac {\left| \sum_{t=1}^T (F_t-\tilde{F})(l_t-\tilde{l}) \right|} {\sqrt{\sum_{t=1}^T (F_t-\tilde{F})^2 \sum_{t=1}^T (l_t-\tilde{l})^2}}
$$

where $F_t$ and $l_t$ are the feature and time values of the t-th observation sample. $T$ is the length of the samples during the lifetime.

The monotonicity metric evaluates an increasing or decreasing trend of the features as follows

$$
\mathrm{Mon} = \left| {\frac{dF>0}{T-1}} - {\frac{dF<0}{T-1}} \right|
$$

where $dF$ is the differential of feature series, and $T$ is the length of the samples during the lifetime. 1. Mon =1 means that the feature is totally monotonic, otherwise it is oscillating. It can be seen that these two metrics of features are confined in the range \[0, 1\] and they are positively correlated with the performance of the candidate features, which makes them suitable as the feature selection metrics.

### References
