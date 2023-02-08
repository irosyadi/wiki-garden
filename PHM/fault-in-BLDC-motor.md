---
aliases: [Fault in BLDC Motor, alias]
title: Fault in BLDC Motor
date: 2022-08-04 03:46:42
tags: ['BLDC', 'fault-diagnostic']
---

# Fault in BLDC Motor

Faults in BLDC categories:

- mechanical faults (bearings and eccentricity),
- electrical faults (drive and winding failures)
- magnetic faults (demagnetization)

Mechanical Faults Almost 50% of all failures in BLDC motors are related to mechanical faults (Kudelina et al., 2020) [[kudelinaMainFaultsDiagnostic2020]]  
Diagnosis categories:

- Temperature measurement,
- Electromagnetic field monitoring,
- Radio-frequency emissions monitoring,
- Chemical analysis,
- Acoustic noise measurement,
- Motor-current signature analysis (MCSA),
- Noise and vibration monitoring,
- Model, artificial intelligence and neutral-network based techniques.

(Antonino-Daviu, 2020) proposed transient-based diagnosis

What causes a brushless RC motor to fail?

The first suspect on the lineup is good (or bad in this case) old vibrations. These are usually a result of physical instability stemming from several possible scenarios. Misaligned parts may cause the motor to sway unusually, resulting in the motor shaking.  
However, it is now clear that the main cause of failure in brushless RC motors is heat. As a matter of fact, it has been documented that over half of all insulating failures in motors are a result of excessive heat. For optimum performance, brushless engines must have an operational temperature of about 150-160oF. Any more than that, and your motor runs the risk of severe performance issues and eventual failure. Once temperatures get too high, the rotor magnets and the stator electromagnets within the motor are depleted of their ability to get the rotor moving optimally. Like vibrations, heat can be gained in a variety of ways. In most day-to-day scenarios, an increase in temperature will stem from high current and electrical load. As increasing levels of a current surge through the motor’s wiring, heat slowly builds up in the motor windings.  
The rotor magnets, because of their proximity to these windings, get heated up to a point where they start losing their magnetism. The winding themselves can also lose their protective enamel coating if things get too hot.  
Dust is another factor that may lead to a complete shut down in a brushless motor. While it is a rare occurrence, dust can and will wreak havoc on your motor if given the opportunity. Dust normally affects parts like bearings, which is a problem because the bearings’ gradual depletion could leave your rotor exposed to the magnets.

References:

Antonino-Daviu, J. (2020). Electrical monitoring under transient conditions: A new paradigm in electric motors predictive maintenance. _Applied Sciences (Switzerland)_, _10_(17). [https://doi.org/10/gqk2p8](https://doi.org/10/gqk2p8)  
Faiz, J., & Jafari, A. (2018). Interturn fault diagnosis in brushless direct current motors—A review. _2018 IEEE International Conference on Industrial Technology (ICIT)_, 437–444. [https://doi.org/10.1109/ICIT.2018.8352217](https://doi.org/10.1109/ICIT.2018.8352217)  
Kudelina, K., Asad, B., Vaimann, T., Rassõlkin, A., Kallaste, A., & Lukichev, D. V. (2020). _Main faults and diagnostic possibilities of BLDC Motors_. 1–6. [https://doi.org/10.1109/IWED48848.2020.9069553](https://doi.org/10.1109/IWED48848.2020.9069553)

- [antonino-daviuElectricalMonitoringTransient2020](../zotero/antonino-daviuElectricalMonitoringTransient2020.md)
- [kudelinaMainFaultsDiagnostic2020](../zotero/kudelinaMainFaultsDiagnostic2020.md)
