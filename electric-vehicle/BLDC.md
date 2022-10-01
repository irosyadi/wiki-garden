---
title: "BLDC Motor"
date: 2022-07-23 12:45
tags: ['motor', 'bldc']
---

For a three-phase bldc motor, a brushless dc motor with Hall sensors has eight wires: 3 three-phase motor wires, 3 Hall wires, and 2 Hall power wires. There are three Hall chips inside the brushless dc motor with Hall sensor. When the motor is working, the real-time position of the rotor can be displayed to the control board in the form of waveform. Based on the waveform, the position of the rotor and the rhythm to start the brushless dc motor will be determined by the control board.

The brushless DC motor without Hall sensor has only three wires, that is the phase wires of the [brushless DC motor](https://www.ato.com/brushless-dc-motors). The position of the Hall is determined by the control board through the back-induced electromotive force of the phase line of the brushless DC motor. There is a processing circuit with a comparator as the core on the control board, whose function is to determine the position of the rotor according to the back induced electromotive force.


Reference
- [What is BLDC Motor ? Why it is so popular in Electric Vehicles ?](https://motorplanetofficial.com/what-is-bldc-motor-why-it-is-so-popular-in-electric-vehicles/)
- [What are Brushless DC Motors](https://www.renesas.com/us/en/support/engineer-school/brushless-dc-motor-01-overview)
- [Controlling BLDC Motors](https://www.renesas.com/us/en/support/engineer-school/brushless-dc-motor-02-inverter-pmw)