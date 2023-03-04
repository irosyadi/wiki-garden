---
aliases: [Inter-turn Short Circuit Fault]
title: Inter-turn Short Circuit Fault
date: 2022-12-23 08:26
tags: ['fault', 'motor']
---

# Inter-turn Short Circuit Fault

## Detection

- stator current (motor phase currents)
  - explanation: stator current harmonic, sudden boost in current
- stator voltage
  - explanation: stator voltage phase imbalance (voltage differences between the phases)
- mechanical output
  - vibration
    - explanation: ITSF disturbs the symmetry of the machine due to reverse magnetic flux, which results in vibrations and acoustic noise. If the severity of the ITSF is high, then this noise can be audible.
  - acoustic noise
- magnetic flux
  - explanation: in radial flux machines, ITSF causes asymmetry in magnetic flux distribution and leakage in axial flux.
  - explanation: shorted windings turn acts as an extra circuit loop coupled to flux linkages of its surrounding windings and represented as an additional phase
- parameter estimation
  - inductance
  - impedance
  - phase resistance
- torque ripple
- instantaneous power

## Fault Detection Diagram

![alttext](https://i.vgy.me/JOAH1Y.png)

## References

- [ullahComprehensiveReviewWinding2018](zotero/ullahComprehensiveReviewWinding2018.md)
