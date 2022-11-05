---
aliases: [Physical to Virtual (P2V) Updating and Enhancement]
title: Physical to Virtual (P2V) Updating and Enhancement
date: 2022-10-31 20:58
tags: ['tag1', 'tag2']
---

# Physical to Virtual (P2V) Updating and Enhancement

- Measurement as input.
  - Physical measurement to update the digital model. Mainly for [Geometric Model](digital-twin/DT-modeling-geometric.md)
  - Physical system data as input for physics-based analysis/design. Mainly for [Physic-based Model](digital-twin/DT-modeling-physic.md).
- Probabilistic model updating
  - State estimation using Bayesian filters
    - methods:
      - Kalman filter
      - Extended Kalman filter
      - Unscented Kalman filter
      - Particle filter
    - problems:
      - filtering (present). Example: fault diagnosis
      - prediction (future). Example: remaining useful life (RUL)
      - smoothing
- ML model updating
- Fault diagnostics and failure prognostics
- Ontology-based reasoning

Measurement as input (straightforward P2V) problems

- It is only applicable to cases where digital states (e.g., position, mobility, traffic flow) can be directly updated using monitoring data.
- However, for many engineering problems, digital states cannot be directly updated and are affected by various uncertainty sources.
- A digital state often cannot be directly measured (or observed) but can be estimated through noisy measurements that depend on the digital state. The digital state of a physical system in operation changes over time and can be estimated as new information about the physical system becomes available.

## References
