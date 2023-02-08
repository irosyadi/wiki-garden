---
aliases: [Tanvir Alam Shifat BLDC PHM Research]
title: Tanvir Alam Shifat BLDC PHM Research
date: 2022-08-05 10:16:50
tags: ['paper', 'review']
---

# Tanvir Alam Shifat BLDC PHM Research

Papers:  
An Improved Stator Winding Short-circuit Fault Diagnosis using AdaBoost Algorithm (2020)

- Sensor data: vibration (with piezoelectric accelerometer)
- Purpose: fault diagnosis
- Unit: Stator Winding Short-circuit
- Classification (labeled data): healthy, incipient failure, severe failure
- Classification methods: Random forest with AdaBoost (unsupervised)
- Data Processing: time domain, frequency domain, time-frequency domain
- CI: kurtosis (from time domain), entropy (from frequency domain)
- Suggestion: other classifiers (SVM, KNN, NV), increasing features

An Effective Stator Fault Diagnosis Framework of BLDC Motor Based on Vibration and Current Signals (2020)

- Sensor data: vibration and current signals
- Purpose: fault diagnosis
- Unit: Stator Winding Short-circuit
- Classification (labeled data): healthy, incipient failure (shorting two windings of the motor), severe failure
- Classification methods: comparing Fast Kurtogram (FK), Autogram, and MCSA
- Fast Kurtogram for vibration signals
- Autogram to inspect the fault frequency and its magnitude of vibration signals.
- MCSA using third harmonic of motor current to detect the fault using short-time Fourier transform (STFT) of motor current.
- STFT provides a better representation of current harmonics where the frequency is expressed as a function of time.
- MCSA is the most effective and in many cases the only way to diagnose stator-related faults at the incipient stage.
- Suggestion: diagnosis of several other motor faults such as rotor bar related faults, eccentricity faults, demagnetization faults etc.

Motor Vibration Analysis for the Fault Diagnosis in Non-stationary Operating Conditions (2020)

- Sensor data: vibration (with piezoelectric accelerometer)
- Purpose: fault diagnosis
- Unit: Stator Winding Short-circuit
- Classification (labeled data): healthy, faulty
- Feature extraction
	- Spectral (FFT, STFT)
	- Time: RMS, Variance, Skewness, Kurtosis, CF, SF,
	- Frequency: SER, Entropy

Remaining Useful Life Estimation of BLDC Motor Considering Voltage Degradation and Attention-Based Neural Network (2020)

- Sensor data: output voltage of the coupled generator
- Purpose: (a) fault monitoring (b) degradation estimation model to predict the RUL
- RUL algorithm: LSTM and Attention based LSTM
- Two types of stator faults: inter-turn fault (ITF) and winding short-circuit fault (WSC)
- Motor health degradation trend (generator voltage) is recorded for two types of stator-related faults. Once the necessary diagnostics information is obtained, collected data are filtered using the moving average technique to obtain an observable degradation trend.
- Fault detection sensor: coil temperature (2-wire thermocouple is used to measure the coil temperature adjacent to faulty coil), motor current, vibration, and output voltage.
- Motor vibration does not change during the incipient stage of failures
- The motor current (MCSA) is analyzed by determining frequency components using fast Fourier transform (FFT). Every 3rd harmonic of motor current (3rd, 6th, 9th . . ..) is observed to detect both types of faults.
- Later, LSTM architecture based on attention mechanism is used to estimate the RUL of motor for both types of faults.
- However, in the case of nonlinear degradation trends, attention-based LSTM has a better RUL prediction over the regular LSTM

![](https://i.imgur.com/FUZekuz.png)

EEMD assisted supervised learning for the fault diagnosis of BLDC motor using vibration signal (2020)

- Sensor data: vibration (with piezoelectric accelerometer)
- Purpose: fault classification
- Unit: Stator Winding Short-circuit
- Classification (labeled data): healthy, incipient failure, severe failure (based on threshold of current, temperature and voltage)
- Methods: vibration signals ⭢ EEMD ⭢ IMF (5 IMF's) ⭢ CI Extraction ⭢ Dimension Reduction (PCA) ⭢ Classification (KNN)
- Signal processing: EEMD and CWT for the detection and localization of anomalies in the signal. Acquired signals are decomposed using ensemble empirical mode decomposition (EEMD) and the appropriate intrinsic mode function (IMF) is selected based on the similarity index.
- Extracted IMFs were cross correlated with the corresponding vibration signal to find the best matching IMFs of each health states. ⭢ IMF-1 is the best
- Selected IMF is analyzed in time-frequency domain by using continuous wavelet transform (CWT) for better localization of fault frequencies.
- CWT is used for fault detection and classification of fault types from motor vibration samples.
- Several statistical features that indicate the health state of the motor are also extracted to diagnose different fault states.
- Feature dimensions were reduced using principal component analysis (PCA) technique and classified using a supervised machine learning technique named k-nearest neighbor (KNN).
- IMF provides a better intuition of the fault characteristics in different fault states over the raw sensor data.
- Finding the best IMF through cross correlation preserves the original signal’s characteristics and hence, conserving the fault characteristics too.
- Frequency spectrum shows the presence of different fault frequencies in different fault states. However, it lacks presenting the time varying frequency components of the signal.
- Several time-frequency representations approaches are available in literature, but most of them are affected by the time-frequency trade-off uncertainty. That is, to get a good time resolution, frequency components should be compromised and vice-versa. (??)
- Wavelet analysis overcomes this issue by introducing a mother wavelet. In CWT, we can control the output by modifying scaling and translation parameters. CWT has effectively captured fault related information from early fault building stage to severe failure stage of motor.
- Wavelet analysis was used to capture the fault-related information of abruptly changing frequencies in different states of health and signals were represented in the time-frequency domain using CWT. ⭢ CWT is for automatic classification of health condition.
- After the detection of faults using FFT and CWT, several statistical features (what features) that function as condition indicator have been extracted.
- All the features were reduced to two-dimensional feature using principal component analysis (PCA). Features extracted from IMF-1 present largely distinguishable aspects for all three health states.
- Suggestion: This diagnostics framework can be further extended to detect and diagnose other motor faults, such as rotor-related faults and eccentricity-related faults.

![](https://i.imgur.com/18vU7Gh.png)

ANN Assisted Multi Sensor Information Fusion for BLDC Motor Fault Diagnosis (2021)

- Robust fault diagnosis framework based on multi-sensor data fusion that will detect and classify BLDC motor faults at the incipient stage.
- Main aim of this paper is early fault detection of BLDC motor for both mechanical and electrical faults at the same time.
- Mechanical fault: A crack is made on the rotor body to produce a mechanical fault
- Electrical fault: two adjacent windings are shorted together to produce an electrical fault.
- Data input: motor current, vibration  
- Motor current is used to FDI of a stator related fault named winding short-circuit (WSC).
- Current. Third harmonics of motor currents are analyzed to detect irregularity in the stator coil operation. Frequencies of these harmonics as well as the amplitude are also determined to understand the fault magnitude.
- Vibration signals are analyzed to detect rotor related fault called crack rotor fault (CRF).
- Vibration. For the vibration signals, signals are decomposed into IMFs using CEEMD technique. CEEMD allows us to find the hidden fault characteristics which is a difficult task to find by directly analyzing the raw vibration signals. After CEEMD decomposition, several features are extracted from the best-fit IMF in time-domain and frequency-domain.
- Primary concern of this study is to merge mechanical and electrical fault features by combining fault characteristics from vibration and current signals, respectively.
- Most appropriate features from the current and vibration signals are chosen based on the monotonicity score. Selected features are further reduced to a 2-D feature space using the principal component analysis (PCA) method.
- In this study, we have investigated both the stator and rotor faults at the same time.
- A rotor fault is introduced by creating a circular crack with a diameter of 3.2 mm and depth 1.6mm.
- Rotor crack fault (CRF).
- On the other hand, different types of short circuits such as: inter-turn, coil-to-ground, coil-to-coil, etc. are the most frequent faults that take place in the stator. For stator fault, a winding short circuit is created by joining phase A and phase C. Stator winding short-circuit (WSC).
- presence of third harmonics in the motor current spectra is considered as an irregular stator operation

![](https://i.imgur.com/3wV9lMT.png)

A Data Driven RUL Estimation Framework of Electric Motor Using Deep Electrical Feature Learning from Current Harmonics and Apparent Power (2021)

- Sensor data: phase currents (IA, IB, IC) and output apparent power (Q) of a coupled generator.
- Purpose: RUL Estimation
- RUL data fusion: Kalman Filter
- Algorithm: A biLSTM neural network model with attention layer

![](https://i.imgur.com/Gp9ZkLP.png)

Other notes:

- Several parameters are considered to find the health state thresholds such asstator coil temperature, noise and vibration, efficiency, motor, output voltage, rotating speed etc.
- Several SOH techniques:
	- Spectral Analysis (Fourier Transform, Short Time Fourier Transform (STFT), Wavelet Transform (WT) etc.)
	- Time domain: Root Mean Square (RMS), Standard Deviation (STD), Kurtosis, Skewness, Crest Factor (CF)
	- Frequency domain: Root Variance Frequency (RVF), Symbol Error Rate (SER), Entropy etc.
- Generator’s output voltage is necessarily a three-phase AC voltage. To convert this AC into equivalent DC voltage, we have used an average value rectifier (AVR) with a smoothing capacitor to get rid of the ripple effect.

References:
