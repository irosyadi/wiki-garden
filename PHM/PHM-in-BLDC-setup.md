---
aliases: [PHM in BLDC Setup]
title: PHM in BLDC Setup
date: 2022-07-28 19:40
tags: ['hardware', 'motor', 'BLDC', 'PHM']
---

# PHM in BLDC Setup

Setup 1: [Shifat. 2020. *An effective stator fault diagnosis framework of BLDC motor based on vibration and current signals*](zotero://select/items/1_4HXCFS5L)

![](https://i.imgur.com/Z8ykt58.png)

Setup: Generator-motor (G-M) setup is used to avoid complexity and ease in collecting data different motor operating conditions.  
Reason: G-M setup allows us to build, control and modify motor external parameters to smoothly. Some loads were connected with the generator in a delta configuration. Voltage produced at the generator indicates the efficiency of BLDC motor, which is also used as a parameter to categorize different health states.  
Sensor: Vibration data (NI 9234 IEPE module) with sampling rate 25.6 kHz. Line currents (NI 9246 module) with sampling rate 5 kHz.

Reference:  
Shifat, T. A., & Hur, J. W. (2020). An effective stator fault diagnosis framework of BLDC motor based on vibration and current signals. _IEEE Access_, _8_, 106968–106981. [https://doi.org/10.1109/ACCESS.2020.3000856](https://doi.org/10.1109/ACCESS.2020.3000856)  
Shifat, T. A., & Jang-Wook, H. (2020). Remaining useful life estimation of BLDC motor considering voltage degradation and attention-based neural network. _IEEE Access_, _8_(September), 168414–168428. [https://doi.org/10.1109/ACCESS.2020.3023335](https://doi.org/10.1109/ACCESS.2020.3023335)  
Shifat, T. A., & Hur, J.-W. (2021). ANN Assisted Multi Sensor Information Fusion for BLDC Motor Fault Diagnosis. _IEEE Access_, _9_, 9429–9441. [https://doi.org/10.1109/ACCESS.2021.3050243](https://doi.org/10.1109/ACCESS.2021.3050243)  
Shifat, T. A., & Hur, J. (2020). An Improved Stator Winding Short-circuit Fault Diagnosis using AdaBoost Algorithm. _2020 International Conference on Artificial Intelligence in Information and Communication (ICAIIC)_, 382–387. [https://doi.org/10.1109/ICAIIC48513.2020.9065081](https://doi.org/10.1109/ICAIIC48513.2020.9065081)

Setup 2: [Jafari. 2020. *A simple and efficient current-based method for interturn fault detection in BLDC motors*](zotero://select/items/1_B6GIWKQP)

![](https://i.imgur.com/a5t9GP6.png)

Setup: The test bench contains the BLDC motor, a driver board, a load, which comprises a dc motor and three rheostats, a power supply, current probes, and an oscilloscope. The connected load is a 12 V dc machine, operating as a generator coupled with the BLDC motor. Also, the terminal of the dc machine is connected to three rheostats to emulate different loading conditions.  
Fault creation: To create the fault with different severities, four wires are welded to different points of the coil turns. In real condition, the faulty turn resistance is negligible and the faults are emulated without any resistances.  
Data creation: To have a wide challenging dataset, the experiments were done with different input voltages and loads.  
Sensor: The permissible current of the rheostats is 2 A, current waveforms were gathered using a data logger with the sampling frequency of 5 kHz.

References:  
Jafari, A., Faiz, J., & Jarrahi, M. A. (2020). A simple and efficient current-based method for interturn fault detection in BLDC motors. _IEEE Transactions on Industrial Informatics_, _17_(4), 2707–2715. [https://doi.org/10.1109/TII.2020.3009867](https://doi.org/10.1109/TII.2020.3009867)

Setup 3: [Rajagopalan. 2006. *Detection of rotor faults in brushless DC motors operating under nonstationary conditions*](zotero://select/items/1_I3LDS6P5)

Setup: A 12-V 1-kW six-pole BLDCM with surface mount magnets is coupled to a dc generator that acts as a load.  
Sensor: Speed (1000 ppr optical encoder coupled to the dc generator). Hall effect sensors are used to sense the motor stator currents. One of the sensed phase currents is passed through the ATF. The filtered current as well as the raw input current is acquired using a 16-b data acquisition system.

![](https://i.imgur.com/M5NOR3V.png)

References:  
Rajagopalan, S., Aller, J. M., Restrepo, J. A., Habetler, T. G., & Harley, R. G. (2006). Detection of rotor faults in brushless DC motors operating under nonstationary conditions. _IEEE Transactions on Industry Applications_, _42_(6), 1464–1477. [https://doi.org/10.1109/TIA.2006.882613](https://doi.org/10.1109/TIA.2006.882613)
