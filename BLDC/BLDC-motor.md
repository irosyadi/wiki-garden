---
aliases: [BLDC Motor]
title: BLDC Motor
date: 2022-07-23 12:45
tags: ['motor', 'BLDC']
---

## BLDC Motor

For a three-phase bldc motor, a brushless dc motor with Hall sensors has eight wires: 3 three-phase motor wires, 3 Hall wires, and 2 Hall power wires. There are three Hall chips inside the brushless dc motor with Hall sensor. When the motor is working, the real-time position of the rotor can be displayed to the control board in the form of waveform. Based on the waveform, the position of the rotor and the rhythm to start the brushless dc motor will be determined by the control board.

The brushless DC motor without Hall sensor has only three wires, that is the phase wires of the [brushless DC motor](https://www.ato.com/brushless-dc-motors). The position of the Hall is determined by the control board through the back-induced electromotive force of the phase line of the brushless DC motor. There is a processing circuit with a comparator as the core on the control board, whose function is to determine the position of the rotor according to the back induced electromotive force.

Reference

- [What is BLDC Motor ? Why it is so popular in Electric Vehicles ?](https://motorplanetofficial.com/what-is-bldc-motor-why-it-is-so-popular-in-electric-vehicles/)
- [What are Brushless DC Motors](https://www.renesas.com/us/en/support/engineer-school/brushless-dc-motor-01-overview)
- [Controlling BLDC Motors](https://www.renesas.com/us/en/support/engineer-school/brushless-dc-motor-02-inverter-pmw)
- [MATLAB Motor Control, Part 1: An Introduction to Brushless DC Motors - YouTube](https://www.youtube.com/watch?v=gNpoTPzEkco)
- [mathworks/Design-motor-controllers-with-Simscape-Electrical: This repository contains MATLAB and Simulink files used in the "How to design motor controllers using Simscape Electrical" videos.](https://github.com/mathworks/Design-motor-controllers-with-Simscape-Electrical)

### Speed Voltage

Speed of the brushless DC motor depends on the same parameters as in a brushed DC motor. The speed is directly proportional to the voltage that is applied to the phases (e.g A,B,C incase of a 3 phase motor). The speed of the bldc motor is inversely proportional to the torque on the rotor shaft when it is set up for constant power. . The current flowing through the windings is directly proportional to the torque. Hence in a simple way, the speed of the brushless motor increases in with increase in voltage OR decrease in the winding current (assuming one of these parameters as a constant).

The applied voltage here refers to the "average" voltage of the phases. This in turn is dictated by the width of the PWM pulses applied to the FETs (in case of a bridge driver) that drive the phases.

The magnetic field strength is directly proportional to current, so the torque is proportional to current. So at a very basic level, the speed is whatever results in enough mechanical resistance to ballance the torque. However, that is not useful in most cases since it's not obvious what the current is.

For a stalled motor, the current is the applied voltage divided by the resistance of whatever windings are switched in. However, as the motor spins it also acts like a generator. The voltage the generator produces is proportional to speed, and apposes the external applied voltage. At some speed this equals the external voltage, in which case the effective voltage driving the motor is zero and the motor current is zero. That also means the torque is zero, so a unloaded motor can't spin that fast since there is always some friction. What happens is that the motor spins at a little lower speed. The amount it spins slower is just enough to leave a little effective voltage on the motor, which is the amount to create just enough current to create the torque to ballance the small friction in the system.

This is why the speed of a unloaded motor doesn't just increase until it flies apart. The unloaded speed is pretty much proportional to the external voltage, and is just below the speed at which the motor internally generates that voltage. This also explains why a fast spinning motor draws less current than a stalled motor at the same external voltage. For the stalled motor, current is applied voltage divided by resistance. For the spinning motor, current is applied voltage minus the generator voltage divided by the resistance.

Now to your question about a brushless DC motor. The only difference is that the windings are not automatically switched in and out according to the rotation angle of the motor. If you switch them optimally as the brush system in a brushed DC motor is intended to do, then you get the same thing. In that case the unloaded current will be even lower since there is no friction from the brushes to overcome. That allows less current to drive the motor at a particular speed, which will be closer to where the generator voltage matches the external applied voltage.

PWM works fine for driving the coils. After a few 100 Hz or so for most motors, the windings only "see" the average applied voltage, not the individual pulses. The mechanical system can't respond anywhere near that fast. However, these windings make magnetic fields which apply force. There is a little bit of force on every turn of wire. While the motor may operate fine at a few 100 Hz PWM, individual turns of the winding can be a little loose and vibrate at that frequency. This is not good for two reasons. First, the mechanical motion of the wires can eventually cause insulation to rub off, although that's rather a long shot. Second, and this is quite real, the small mechanical vibrations become sound that can be rather annoying. Motor windings are therefore commonly driven with PWM just above the audible range, like 25-30 kHz.

[Position and Speed Control of Brushless DC Motors Using Sensorless Techniques and Application Trends - PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3231115/)  
[Will increasing voltage on brushless DC motor increase torque, if speed is kept constant? - Robotics Stack Exchange](https://robotics.stackexchange.com/questions/24434/will-increasing-voltage-on-brushless-dc-motor-increase-torque-if-speed-is-kept)

![Motor Operating Point](https://i.stack.imgur.com/5xioH.jpg)

  - [Jkongmotor](https://www.jkongmotors.com/products-detail-111715)
    - Phase 3, Poles 8, Rated Voltage 24 VDC, Rated Speed 4000 rmpm, Rated Torque 0.0625 N.m, Rated Current 1.8 A, Rated Power 26 W, Peak Torque 0.19 N.m, Peak Current 5.4 A, Back EMF 4.1 V/Krpm, Torque Constant 0.039 N.m/A, Rotor Inertia 24 g.cm²  
![JK 42BLS01](https://img001.video2b.com/905/file_01627867388467.jpg?x-oss-process=image/resize,m_lfit,w_1549/format,webp/quality,80)
