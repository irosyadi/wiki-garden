---
aliases: [Battery Equivalent Circuit]
title: Battery Equivalent Circuit
date: 2022-12-29 08:13
tags: ['tag1', 'tag2']
---

# Battery Equivalent Circuit

- PNGV
- GNL

## Battery Modeling

- ECM Equivalent Circuit Model
- Physics Electrochemical
- DDM Data driven model

## SoC Estimation

- Direct Calculation
  - Look up Table
  - Coulomb Counting
- Electrochemical
  - Pseudo-2D
  - Single Particle Model (SPM)
- Circuit principle (equivalent circuit model, ECM)
  - Open circuit voltage (OCV)
  - Internal Resistance (Rint, IR)
  - n-RC (nth-RC)
  - Ampere counting method (Ampere-hour integral, Ah counting)
  - Coulomb counting (CC)
  - Thevenin
  - EMF method
  - Equivalent Circuit Model, ECM (EchM)
- Filter methods
  - KF
  - EKF
  - EEKF
  - CKF (cubature KF)
  - ACKF (adaptive cubature KF)
  - UKF
  - Particle filter
  - Adaptive extended H-infinity filter (AEHF)
  - H∞
- Data driven methods
  - ANN
  - Relevance Vector Machines (RVM)
  - SVM
  - GA
  - SVR

## SoH Estimation

- Direct measurement
  - Discharge test
  - 1-C
  - Charge test
  - Quiescent voltage measurement
  - Internal resistance
  - Electrochemical Impedance spectroscopy
  - Chemical analysis
  - Coulomb-counting
  - Open circuit voltage (OCV)
- Model-based
  - Detecting (change of measured variables)
  - Load-based (observing the effects of loads)
  - Electrochemical
  - Equivalent circuit model
- Filter
  - Kalman filter
  - Least squares method
- Data driven
  - fuzzy logic
  - State-vector machine
  - ANN
  - Particle Swarm Optimization

## Battery Estimation Variable

- State of Charge (SoC)
- State of Health (SoH)

## Battery Management System

- monitoring of voltage, current, and temperature
- battery performance optimization
- failure prediction and prevention
- collection of battery data
- analysis of battery data
- lifetime prognostics
- evaluation and optimization

## References
