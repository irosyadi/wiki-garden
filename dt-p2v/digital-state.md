---
aliases: [Digital State in Digital Twin]
title: Digital State in Digital Twin
date: 2022-12-05 10:33
tags: ['tag1', 'tag2']
---

## Digital State in Digital Twin

- In digital twin, digital system should be updated with a time-varying state called digital state
- Digital state: a set of digital state variables that characterize the digital model(s) in a digital twin
- The physical state (e.g. structural state) could be different with digital state (e.g. structural health parameter)
  - The physical state space should allow capturing variation in the physical system’s state
  - The physical state could have high complexity and dimensions, while the digital state space should be designed to be simple enough to make the online estimation of the digital state feasible and tractable.
- A digital state often cannot be directly measured (or observed) but can be estimated through noisy measurements.
- The digital state of a physical system in operation changes over time and can be estimated as new information about the physical system becomes available.
- The time evolution of the digital state can be modeled as a dynamic system perturbed by a certain process noise.

### References

- [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md)
