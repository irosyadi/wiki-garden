---
aliases: [Demagnetization]
title: Demagnetization
date: 2022-12-23 07:46
tags: ['motor', 'fault']
---

## Demagnetization

### Notes

- also called Irreversible Demagnetization Fault (IDF)

### Causes

- overheating
- overload
- reverse magnetic field due to ITSF
- severe flux-weakening
- physical damage
- open circuit fault
- aging

### Effects

- decrease the back electromotive force (BEMF) of the motor
- disturbs the symmetry of the air-gap flux density
- disturbs stator phase current and voltage
- disturbs generated electromagnetic torque
- increases the acoustic noise and vibrations
- draws a higher current for the constant load and speed compared to a healthy machine
- raises the temperature of the stator winding
- more flux drops under IDF in the PMSM.

### Detection

- stator current
  - explanation: almost every fault disturbs the symmetry of magnetic flux in the PMSM, which results in torque and speed variations in the motor. These variations are reflected in the stator current.
- stator voltage
  - explanation: the reduction in magnetic flux due to demagnetization has an extremely large impact on motor BEMF and can be a fault indicator.
- mechanical output
  - explanation: Vibration analysis in PM motor health monitoring is a non-intrusive technique which is widely used for fault detection and similar to signal analysis, several commercial applications and industries utilize it. The machine current and voltage signal analysis methods are sensitive to electrical failures and vibration analysis is sensitive to mechanical failures. Partial demagnetization causes asymmetric and unbalanced radial forces, which result in huge vibration and audible noise. To analyze the pattern of this vibration, a piezoelectric vibration sensor needs to be installed on the motor stator. In case of severe noise, acoustic noise-based analysis can be utilized as an additional approach.
- parameter estimation
- magnetic signals
  - explanation: Investigation of asymmetry in magnetic flux distribution caused by partial or uniform demagnetization is the primary step in the IDF diagnosis process. Generally, the precise measurement of magnetic flux is only possible by direct measurement using a Gaussmeter and/or Hall Effect sensor. However, the direct measurement approach is unable to measure the magnetic flux online and in many cases, the machine needs to be dismantled. To overcome these issues, some indirect motor model-based techniques are proposed. Search coil-based measurement is another direct and online flux measurement method. In this method, an additional coil is inserted in the specific location according to fault type.
- Torque Ripple Based Detection Techniques
  - explanation: The effect of a demagnetization fault is directly reflected in the torque profile of the machine. The direct analysis of the torque requires an expensive torque sensor, which is mostly not present in motor control drive systems.

### Fault Detection Diagram

![demagnetization detection](https://i.vgy.me/dKs7V7.png)

### References

- [kudelinaMainFaultsDiagnostic2020](zotero/kudelinaMainFaultsDiagnostic2020.md)
- [ullahComprehensiveReviewWinding2018](../zotero/ullahComprehensiveReviewWinding2018.md)
