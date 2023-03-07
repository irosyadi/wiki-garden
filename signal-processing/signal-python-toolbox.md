---
aliases: [Python Signal Processing Toolbox]
title: Python Signal Processing Toolbox
date: 2023-01-11 04:52
tags: ['python', 'signal-processing']
---

## Python Signal Processing Toolbox

- HHT, EMD [emd 0.5.4 documentation](https://emd.readthedocs.io/en/stable/index.html)
- FT, Signal Processing [Signal Processing (scipy.signal) — SciPy v1.10.0 Manual](https://docs.scipy.org/doc/scipy/tutorial/signal.html) [SciPy Cookbook — SciPy Cookbook documentation](https://scipy-cookbook.readthedocs.io/index.html)
- PyHHT [pyhht 0.0.1 documentation](https://pyhht.readthedocs.io/en/latest/index.html)
- Wavelets [PyWavelets Documentation](https://pywavelets.readthedocs.io/en/latest/)

The Hilbert Huang Transform (HHT) is a time-frequency analysis method that can be used to decompose signals into intrinsic mode functions (IMFs). In Python, there are several libraries that can be used to implement the HHT, including:

1. PyHHT: This is a Python library that provides an implementation of the HHT using the empirical mode decomposition (EMD) and the Hilbert transform. It provides a simple and intuitive interface for generating IMFs from signals. Python libraries to make Hilbert Huang Transform include the PyHHT module, which is a Python module based on NumPy and SciPy which implements the HHT. The main HHT algorithm is implemented in torchHHT/hht.py and torchHHT/visualization.py provides functions to plot the extracted IMFs and the resulting Hilbert spectrum. Additionally, the function hilbert_from_scratch returns a complex sequence; the real components are the original signal and the complex components are the Hilbert transform. If you want just the Hilbert Transform, use np.imag on the returned array.
2. PyEMD: This is a Python library that provides an implementation of the EMD algorithm, which can be used as a building block for the HHT. It provides a flexible and efficient implementation of the EMD algorithm that can be used to decompose signals into IMFs. The Empirical Mode Decomposition (EMD) package also contains Python code for the 1D Hilbert-Huang transform of a signal
3. SciPy: This is a Python library for scientific computing that provides a set of tools for signal processing, including the HHT. The SciPy library provides an implementation of the HHT using the EMD and the Hilbert transform.

### Python Data Pre Processing

1. Pandas: This is a popular library for data analysis and manipulation, and provides a powerful set of tools for handling time-series data. We can use this for descriptive statistics (mean, kurtosis, skew)
2. Numpy: This library provides support for array-based computations, which can be useful for time-series data pre-processing tasks such as normalization and resampling.  
3. Scipy: This library provides support for scientific computing, including optimization, interpolation, and signal processing, which can be useful for time-series data pre-processing tasks such as smoothing and resampling. We can use this for descriptive statistics (mean, kurtosis, skew)
4. Statsmodels: This library provides a suite of tools for statistical modeling, including time-series analysis, and can be used for tasks such as decomposing and filtering.
5. Scikit-learn: This library provides a range of machine learning algorithms, including time-series forecasting and feature extraction, which can be useful for time-series data pre-processing tasks such as feature engineering and scaling.

### Python Data Analysis

- [tsfresh](https://github.com/blue-yonder/tsfresh)
- [prophet](https://github.com/facebook/prophet)
- [darts](https://github.com/unit8co/darts)
- [atspy](https://github.com/firmai/atspy)
- [kats](https://github.com/facebookresearch/Kats)
- greykite
- autots
- [GluonTS](https://ts.gluon.ai/stable/)
