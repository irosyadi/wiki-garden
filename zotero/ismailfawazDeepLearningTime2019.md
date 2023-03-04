---
citekey: ismailfawazDeepLearningTime2019  
title: "Deep learning for time series classification: a review"
year: 2019
tags: ['journalArticle']
---

### Deep learning for time series classification: a review  

#### Type: journalArticle

#### Bibliography
  
Ismail Fawaz, H., Forestier, G., Weber, J., Idoumghar, L., & Muller, P.-A. (2019). Deep learning for time series classification: A review. _Data Mining and Knowledge Discovery_, _33_(4), 917–963. [https://doi.org/10.1007/s10618-019-00619-1](https://doi.org/10.1007/s10618-019-00619-1)  
  

#### Zotero Web Link
[**Zotero Web**](http://zotero.org/users/242940/items/24RCCFGG)  

#### Publisher Link
[**Publisher Link**](https://doi.org/10.1007/s10618-019-00619-1)  

#### Local PDF Link
[Fawaz_2019_Deep_learning_for_time_series_classification.pdf](file:///C:/Users/User/Zotero/storage/W7EQ7CQ5/Fawaz_2019_Deep_learning_for_time_series_classification.pdf)  

#### Local Zotero Link
[**Open in Zotero Desktop**](zotero://select/library/items/24RCCFGG)  

#### Abstract

Time Series Classification (TSC) is an important and challenging problem in data mining. With the increase of time series data availability, hundreds of TSC algorithms have been proposed. Among these methods, only a few have considered Deep Neural Networks (DNNs) to perform this task. This is surprising as deep learning has seen very successful applications in the last years. DNNs have indeed revolutionized the field of computer vision especially with the advent of novel deeper architectures such as Residual and Convolutional Neural Networks. Apart from images, sequential data such as text and audio can also be processed with DNNs to reach state-of-the-art performance for document classification and speech recognition. In this article, we study the current state-of-the-art performance of deep learning algorithms for TSC by presenting an empirical study of the most recent DNN architectures for TSC. We give an overview of the most successful deep learning applications in various time series domains under a unified taxonomy of DNNs for TSC. We also provide an open source deep learning framework to the TSC community where we implemented each of the compared approaches and evaluated them on a univariate TSC benchmark (the UCR/UEA archive) and 12 multivariate time series datasets. By training 8730 deep learning models on 97 time series datasets, we propose the most exhaustive study of DNNs for TSC to date.


#### Notes
  
Comment: Accepted at Data Mining and Knowledge Discovery

**Contents**

-   [Abstract](zotero://open-pdf/0_WHLDIM2Q/1)
-   [1 Introduction](zotero://open-pdf/0_WHLDIM2Q/1)
-   [2 Background](zotero://open-pdf/0_WHLDIM2Q/5)
    -   [2.1 Time series classification](zotero://open-pdf/0_WHLDIM2Q/5)
    -   [2.2 Deep learning for time series classification](zotero://open-pdf/0_WHLDIM2Q/5)
        -   [2.2.1 Multi layer perceptrons](zotero://open-pdf/0_WHLDIM2Q/6)
        -   [2.2.2 Convolutional neural networks](zotero://open-pdf/0_WHLDIM2Q/8)
        -   [2.2.3 Echo state networks](zotero://open-pdf/0_WHLDIM2Q/10)
    -   [2.3 Generative or discriminative approaches](zotero://open-pdf/0_WHLDIM2Q/12)
        -   [2.3.1 Generative models](zotero://open-pdf/0_WHLDIM2Q/12)
        -   [2.3.2 Discriminative models](zotero://open-pdf/0_WHLDIM2Q/13)
-   [3 Approaches](zotero://open-pdf/0_WHLDIM2Q/15)
    -   [3.1 Why discriminative end-to-end approaches ?](zotero://open-pdf/0_WHLDIM2Q/15)
    -   [3.2 Compared approaches](zotero://open-pdf/0_WHLDIM2Q/16)
        -   [3.2.1 Multi layer perceptron](zotero://open-pdf/0_WHLDIM2Q/16)
        -   [3.2.2 Fully convolutional neural network](zotero://open-pdf/0_WHLDIM2Q/16)
        -   [3.2.3 Residual network](zotero://open-pdf/0_WHLDIM2Q/17)
        -   [3.2.4 Encoder](zotero://open-pdf/0_WHLDIM2Q/18)
        -   [3.2.5 Multi-scale convolutional neural network](zotero://open-pdf/0_WHLDIM2Q/19)
        -   [3.2.6 Time Le-Net](zotero://open-pdf/0_WHLDIM2Q/20)
        -   [3.2.7 Multi channel deep convolutional neural network](zotero://open-pdf/0_WHLDIM2Q/21)
        -   [3.2.8 Time convolutional neural network](zotero://open-pdf/0_WHLDIM2Q/21)
        -   [3.2.9 Time warping invariant echo state network](zotero://open-pdf/0_WHLDIM2Q/22)
    -   [3.3 Hyperparameters](zotero://open-pdf/0_WHLDIM2Q/22)
-   [4 Experimental setup](zotero://open-pdf/0_WHLDIM2Q/23)
    -   [4.1 Datasets](zotero://open-pdf/0_WHLDIM2Q/23)
        -   [4.1.1 Univariate archive](zotero://open-pdf/0_WHLDIM2Q/23)
        -   [4.1.2 Multivariate archive](zotero://open-pdf/0_WHLDIM2Q/24)
    -   [4.2 Experiments](zotero://open-pdf/0_WHLDIM2Q/25)
-   [5 Results](zotero://open-pdf/0_WHLDIM2Q/25)
    -   [5.1 Results for univariate time series](zotero://open-pdf/0_WHLDIM2Q/25)
    -   [5.2 Comparing with state-of-the-art approaches](zotero://open-pdf/0_WHLDIM2Q/27)
        -   [5.2.1 The need of a fair comparison](zotero://open-pdf/0_WHLDIM2Q/29)
    -   [5.3 Results for multivariate time series](zotero://open-pdf/0_WHLDIM2Q/29)
    -   [5.4 What can the dataset's characteristics tell us about the best architecture?](zotero://open-pdf/0_WHLDIM2Q/30)
    -   [5.5 Effect of random initializations](zotero://open-pdf/0_WHLDIM2Q/32)
-   [6 Visualization](zotero://open-pdf/0_WHLDIM2Q/33)
    -   [6.1 Class activation map](zotero://open-pdf/0_WHLDIM2Q/34)
        -   [6.1.1 GunPoint dataset](zotero://open-pdf/0_WHLDIM2Q/35)
        -   [6.1.2 Meat dataset](zotero://open-pdf/0_WHLDIM2Q/36)
    -   [6.2 Multi-dimensional scaling](zotero://open-pdf/0_WHLDIM2Q/37)
-   [7 Conclusion](zotero://open-pdf/0_WHLDIM2Q/40)
-   [Acknowledgements](zotero://open-pdf/0_WHLDIM2Q/42)
-   [References](zotero://open-pdf/0_WHLDIM2Q/42)


#### Annotations


%% Import Date: 2023-02-10T03:19:53.274+07:00 %%
