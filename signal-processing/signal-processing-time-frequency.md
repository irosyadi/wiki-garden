---
aliases: [Signal Processing in the Time-Frequency Domain]
title: Signal Processing in the Time-Frequency Domain
date: 2022-09-30 03:58
tags: ['signal']
---

# Signal Processing in the Time-Frequency Domain

- Time-Frequency Linear Transformation. Advantage: similar to classical spectral methods in concept and strategy.
  - Short-Time-Fourier Transform (STFT)
    - Advantage: Allow easy comparison along the TFR (time-frequency representation).
    - Disadvantage: The width of the window is fixed during the whole analysis.
  - CWT: Continuous Wavelet Transform
    - Advantage: Minimize the redundancy and omitted information.
    - Disadvantage: Non-adaptive nature. High dependent of wavelet selection.
  - DWT: Discrete Wavelet Transform
  - UDWT: Undecimated Discrete Wavelet Transform
- Bilinear (or Quadratic) Transformation: Advantage: It can be analyzed the energy distribution of the considered signal.
  - WVD: Wigner Ville Distribution
    - Advantage: Basic time-frequency distribution.
    - Disadvantage: High cross-terms affectation.
  - PWVD: Pseudo Wigner-Ville
    - Advantage: Allows smooth cross-terms in frequency axes.
    - Disadvantage: Cross-terms affectation.
  - SPWVD: Smoothing Pseudo Wigner-Ville
    - Advantage: Allows smooth cross-terms in frequency axes.
    - Disadvantage: Reduce the cross-terms effects instead removing the original causes.
  - CWD: Choi-Williams Distribution
    - Advantage: Good trade-off between resolution and cross-term suppression.
    - It is necessary a configuration/analysis stage to obtain good results.
  - BJD: Bon-Jordan Distribution
    - Advantage: Marginal properties imposition in time and frequency.
    - Disadvantage: High cross-terms affectation.
  - ZAMD: Zao-Athlas Mark Distribution
    - Advantage: Smooth variant in frequency of BJD. High-resolution.
    - Disadvantage: Cross-terms affectation.
- Signal Decomposition. Advantage: Time-frequency information obtained from a different point of view.
  - HHT: Hilbert–Huang Transform
    - HHT
      - Advantage: It is a self-adaptive to he signal processing method.
      - Disadvantage: The number of IMFs cannot be controlled and this flexibility is lost.
    - EMD
    - EEMD
  - WPT: Wavelet Packet Transform
    - WPT
      - Advantage: IMF may have variable frequency contents depending of local signal properties.
      - Disadvantage: Performance of WPT depends on choice of wavelet, its similarity to analyzed signal.

## Advantage

- Algorithms able to represent how the frequency contents vary with time.
- Non-stationary conditions can be analyzed.

## Disadvantage

- In general, algorithms not so much validated industrially.
- High computational costs.
