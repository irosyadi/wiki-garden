---
aliases: [Hilbert-Huang Transform]
title: Hilbert-Huang Transform
date: 2023-01-11 05:00
tags: ['tag1', 'tag2']
---

# Hilbert-Huang Transform

- The Hilbert Huang Transform (HHT) is designed to work well with non-stationary and nonlinear data,
- Non-stationary data can have means, variances, and covariances that change over time, and non-stationary behavior can be trends, cycles, random walks, or combinations of the three. 
- The HHT is useful for analyzing signals that have multiple causes happening in different time intervals, and it preserves the characteristics of varying frequency. 
- The HHT uses empirical mode decomposition (EMD) to decompose a signal into intrinsic mode functions (IMFs) with a trend, and applies Hilbert spectral analysis (HSA) to the IMFs to obtain instantaneous frequency data. 
- The HSA method is used to examine each IMF's instantaneous frequency as functions of time, and the final result is a frequency-time distribution of signal amplitude (or energy) called the Hilbert spectrum.
- Python libraries for Hilbert Huang Transform (HHT): NumPy, [SciPy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.hilbert.html),

## EMD Python Libraries

- [PyEMD](https://pyemd.readthedocs.io/en/latest/index.html) `pip install EMD-signal`, `from PyEMD import EMD`
  - EMD, EEMD, CEEMDAN, VMD
- [EMD](https://emd.readthedocs.io/en/stable/emd_tutorials/index.html#) `pip install emd`
  - EMD, EEMD, Hilbert-Huang
- [pytftb](https://github.com/scikit-signal/tftb) and [PyHHT](https://pyhht.readthedocs.io/en/latest/tutorials.html)
- [pyeemd](https://bitbucket.org/luukko/pyeemd/src/master/)
  - EMD, EEMD, CEEMDAN
- [mariogrune/MEMD-Python-: Python version of the Multivariate Empirical Mode Decomposition algorithm](https://github.com/mariogrune/MEMD-Python-)

## EMD algorithms

- EMD
- EEMD
- Complementary EEMD, complete EEMD, partly EEMD

## References

- [chendaichao/Hilbert-Huang-transform: A demo of using Hilbert-Huang Transform (HHT) for non-stationary and non-linear signal analysis.](https://github.com/chendaichao/Hilbert-Huang-transform)
- [EMD Tutorials — emd 0.5.4 documentation](https://emd.readthedocs.io/en/stable/emd_tutorials/index.html#)
- [Hilbert–Huang transform - Wikipedia](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Huang_transform)
- [Multidimensional empirical mode decomposition - Wikipedia](https://en.wikipedia.org/wiki/Multidimensional_empirical_mode_decomposition)
- [New insights and best practices for the successful use of Empirical Mode Decomposition, Iterative Filtering and derived algorithms | Scientific Reports](https://www.nature.com/articles/s41598-020-72193-2)
- [Empirical mode decomposition - MATLAB emd - MathWorks Italia](https://it.mathworks.com/help/signal/ref/emd.html)

Example

- [Eoin-S/hilbert-huang-transform: The Hilbert–Huang transform (HHT) is a way to decompose a signal into so-called intrinsic mode functions (IMF) along with a trend, and obtain instantaneous frequency data. It is designed to work well for data that is nonstationary and nonlinear.](https://github.com/Eoin-S/hilbert-huang-transform)
- [Time-frequency-Analysis-of-Scalp-EEG-withHilbert-Huang-Transform-and-Deep-Learning/HHT\_Study2.ipynb at main · sujatassinha/Time-frequency-Analysis-of-Scalp-EEG-withHilbert-Huang-Transform-and-Deep-Learning](https://github.com/sujatassinha/Time-frequency-Analysis-of-Scalp-EEG-withHilbert-Huang-Transform-and-Deep-Learning)
- [manila95/Signal-Processing: Processing Of A Seismic Signal Using Fourier Hilbert And Hilbert-Huang Transform in Python](https://github.com/manila95/Signal-Processing)
- [ShreyaSinha613/Time-to-failure-TTF-prognostics-approach-for-REBs: This project was one of the tasks given to us during Research Internship in IIIT Allahabad. Multiple degradation features are extracted in order to detect the degradation phenomenon of REBs and to track their time evolution.We have used ensemble empirical mode decomposition with adaptive noise and Hilbert Huang transform methods.The degradation feature reduction is constructed by analyzing their monotonic, robustness and correlation to fault the evolution of REBs.](https://github.com/ShreyaSinha613/Time-to-failure-TTF-prognostics-approach-for-REBs)
- [Eoin-S/hilbert-huang-transform: The Hilbert–Huang transform (HHT) is a way to decompose a signal into so-called intrinsic mode functions (IMF) along with a trend, and obtain instantaneous frequency data. It is designed to work well for data that is nonstationary and nonlinear.](https://github.com/Eoin-S/hilbert-huang-transform)
- [AJQuinn/emd\_hht\_tutorial: A tutorial for Time-Frequency estimation using Empirical Mode Decomposition and Hilbert-Huang Transform](https://github.com/AJQuinn/emd_hht_tutorial)
- [Instantaneous3D\_EEG\_SignalAnalysis/Notes at master · LetMeFly666/Instantaneous3D\_EEG\_SignalAnalysis](https://github.com/LetMeFly666/Instantaneous3D_EEG_SignalAnalysis)
- [chendaichao/Hilbert-Huang-transform: A demo of using Hilbert-Huang Transform (HHT) for non-stationary and non-linear signal analysis.](https://github.com/chendaichao/Hilbert-Huang-transform)

## IF alternative to EMD

- [File Exchange - MATLAB Central](https://it.mathworks.com/matlabcentral/fileexchange/?q=profileid:3095743)
- [Antonio Cicone - Software](http://people.disim.univaq.it/~antonio.cicone/Software.html)
- [New insights and best practices for the successful use of Empirical Mode Decomposition, Iterative Filtering and derived algorithms | Scientific Reports](https://www.nature.com/articles/s41598-020-72193-2#MOESM1)
