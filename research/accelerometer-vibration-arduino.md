---
title: 
date: 2023-05-20 16:07
tags: ['tag']
---

## Accelerometer Arduino

The ADXL335 board has a 50 Hz low pass filter. Did you remove the capacitors to sampling frequencies over 50 Hz?. The high frequencies are gradually smoothed out. The higher the frequency the greater the amplitude is underestimated. There are formulas for calculating the initial amplitude. TO GET MORE ACCURACY, YOU CAN CONNECT A DIGITAL ACCELEROMETER BMA180 accelerometer.

ADXL335 accelerometer module with ANALOG (NOT digital) output: Bandwidths can be selected to suit the application, with a range of 0.5 Hz to 1600 Hz for the x and y-axes, and a range of 0.5 Hz to 550 Hz for the z-axis.  
**MMA7361 accelerometer module with ANALOG (NOT digital) output**:  
An accelerometer with digital output can be used (BMA180, ADXL345, MPU6050, LSM9DS1)  
SW-420 Vibration Sensor, SW-18020p, # PiicoDev 3-Axis Accelerometer LIS3DH

The ADXL345 features 4 sensitivity ranges from +/- 2G to +/- 16G. And it supports output data rates ranging from 10Hz to 3200Hz. [bref](https://pdfs.semanticscholar.org/b4a4/b1fb1a9ef365a354d67e7eae8a0c9f49dbcc.pdf)

The MPU-6050s accelerometer is capable of a sample rate up to 1 KHz, provided your code is fast enough.  
Accordingly to the sample theorem, that means you can measure frequencies up to 500Hz.

By investigating the performance of several MEMS vibration sensors, it was demonstrated that the ADXL335 and ADXL345 accelerometers could detect all the faulty cases based on the raw acceleration data.

[Useful Mobile Apps](https://usefulmobileapps.com/)

[Piezo Vibration Sensor Hookup Guide - SparkFun Learn](https://learn.sparkfun.com/tutorials/piezo-vibration-sensor-hookup-guide/all) [Analysis and control of the motor vibration using arduino and machine learning model - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S2214785320388702?via%3Dihub) [Raspberry Pi Vibration Analysis Experiment With a Free-Free Bar — Maker Portal](https://makersportal.com/blog/2019/2/26/raspberry-pi-vibration-analysis-experiment-with-free-free-bar) [Motor Vibration Analysis - Blog - Experimenting with Vibration Sensors - element14 Community](https://community.element14.com/challenges-projects/design-challenges/experimenting-with-vibration-sensors/b/blog/posts/motor-vibration-analysis)

[An Investigation of the Reliability of Different Types of Sensors in the Real-Time Vibration-Based Anomaly Inspection in Drone - PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9413359/)

## References

- [Piezo Vibration Sensor Hookup Guide - SparkFun Learn](https://learn.sparkfun.com/tutorials/piezo-vibration-sensor-hookup-guide/all) # Piezo Vibration
- [MMA8452Q Accelerometer Breakout Hookup Guide - SparkFun Learn](https://learn.sparkfun.com/tutorials/mma8452q-accelerometer-breakout-hookup-guide)
- [LSM9DS0 3D Accelerometer Gyroscope Magnetometer I2C Mini Module](https://store.ncd.io/product/lsm9ds0-3d-accelerometer-gyroscope-magnetometer-i2c-mini-module/)
- There are two kinds of MEMS accelerometers: piezoelectric and capacitive. For this task, an ADXL 335 accelerometer was used in the analog instrument. The bandwidth is between 0.5 Hz and 1600 Hz for the X and Y axes and 0.5 Hz to 500 Hz for the Z axis.
- SW420 Vibration Sensor
- ADXL345 Accelerometer
- ADXL335 Accelerometer
- ADXL377 Accelerometer
- MPU 6050
- ADXL335 and ADXL345 accelerometers could detect all the faulty cases based on the raw acceleration data. The SW420 vibration sensor is unable to detect a minor crack in the drone arm, whereas the ADXL377 accelerometer can only detect 50% broken propeller. The ADXL335 accelerometer is chosen over the ADXL345 accelerometer because it is easier to integrate eight ADXL335 accelerometers with Arduino DUE compared to the ADXL345 accelerometer.
- [(PDF) Development of vibration spectrum analyzer using the Raspberry Pi microcomputer and 3-axis digital MEMS accelerometer ADXL345](https://www.researchgate.net/publication/317293600_Development_of_vibration_spectrum_analyzer_using_the_Raspberry_Pi_microcomputer_and_3-axis_digital_MEMS_accelerometer_ADXL345)
- [Analysis and control of the motor vibration using arduino and machine learning model - ScienceDirect](file:///C:/Users/User/Zotero/storage/9AMBXKX4/S2214785320388702.html)
- [Overview | Analog Inputs for Raspberry Pi Using the MCP3008 | Adafruit Learning System](https://learn.adafruit.com/reading-a-analog-in-and-controlling-audio-volume-with-the-raspberry-pi)
- ADXL Datasampling [Atmega328 and ADXL335 - is the right choice for vibration analysis? - Arduino Stack Exchange](https://arduino.stackexchange.com/questions/80993/atmega328-and-adxl335-is-the-right-choice-for-vibration-analysis)
- [nagimov/adxl345spi: ADXL345 three-axis accelerometer reader (SPI interface)](https://github.com/nagimov/adxl345spi)
- [Regarding sampling rate of ADXL345 - Raspberry Pi Forums](https://forums.raspberrypi.com/viewtopic.php?t=254552)
- [where do i set my sampling frequency - Using Arduino / Sensors - Arduino Forum](https://forum.arduino.cc/t/where-do-i-set-my-sampling-frequency/481219/2)

<https://how2electronics.com/interfacing-adxl345-accelerometer-with-arduino/> ADXL plus 3D animation
