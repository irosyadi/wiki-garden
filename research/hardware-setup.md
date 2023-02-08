---
aliases: [Hardware Setup]
title: Hardware Setup
date: 2022-08-20 13:53:20
tags: ['hardware']
---

# Hardware Setup

## Components:

1. Power Supply (PSU 24V 5A)
2. BLDC Controller (embedded in motor)
3. Current Sensor (ACS712)
4. Thermal Camera (AMG8833)
5. Accelerometer (ADXL345)
6. Flux Magnetic Sensor (HMC5883L)
7. Rotary Encoder (embedded in motor)
8. BLDC Motor (JGB37-3650)
9. DC Motor as Generator (Motor DC 775 24V)
10. Voltage Sensor
11. Load
12. DAQ (Arduino Mega)

## Flux Sensor

- Hall Effect Sensor 3144E

## Accelerometer

- ADXL345 (used)
- Alternative: MPU-6050

## Arduino DAQ

- Arduino
- Sensor Shield

## Thermal Camera

- HT-02 HT02 HTI Thermal Camera
	- Resolution: 60x60 pixel
	- Price: 2.750.000
	- Connection: SD Card
- Adafruit AMG 8833 (used)
	- Resolution: 8x8 pixel
	- Price: 863.000
	- Connection: Arduino, Raspberry Pi
	- [code-1](https://create.arduino.cc/projecthub/jdanielse/amg8833-thermal-camera-fc8478)
	- [code-2](https://learn.adafruit.com/adafruit-amg8833-8x8-thermal-camera-sensor/arduino-wiring-test)
- Waveshare MLX90640
	- Resolution: 32x24 pixel
	- Price: 2.457.500
- Omron Thermal Sensor D6T-44L-06 dan D6T-HARNESS-02
	- Price: 1.300.000
- FLIR One [FLIR ONE](https://www.flir.asia/flir-one/)
- Seek Thermal [Seek Thermal](https://www.thermal.com/compact-series.html)
- [UNI-T UTi260M](https://www.amazon.com/UNI-T-Resolution-Handheld-Durability-Rechargeable/dp/B0BC125VTQ)
- [InfiRay P2 Pro](https://www.aliexpress.com/item/1005004950256049.html)
- List [The 4 Best Smartphone Thermal Cameras of 2022](https://industrial-reviews.com/smartphone-thermal-camera/)

## Magnetic Sensor

- HMC5883LGY-273 MAGNETOMETER (used)
  - [code-1](https://github.com/adafruit/Adafruit_HMC5883_Unified)
  - [code-2](https://www.electronicwings.com/arduino/magnetometer-hmc5883l-interfacing-with-arduino-uno)

## Current Sensor

- Current Sensor ACS712 20A (used)
  - [code](https://www.engineersgarage.com/acs712-current-sensor-with-arduino/)

## DC Motor

- Motor DC 775 24V 8000RPM

## BLDC Motor

- JGB37-3650 Brushless DC Motor High Torque 88RPM 24V
  - [code-1](<https://wiki.dfrobot.com/FIT0441_Brushless_DC_Motor_with_Encoder_12V_159RPM>
  - [code-3](https://www.botnroll.com/en/dc-motor/3483-brushless-dc-motor-with-encoder-12v-159rpm.html)
- BLDC motor for drone
- BLDC motor for spindle ()
- BLDC motor for electric bike

Bought

- ACCELEROMETER ADXL 345 (error), ADXL by Grove (oke)
- [Grove - Piezo Vibration Sensor](https://wiki.seeedstudio.com/Grove-Piezo_Vibration_Sensor/) (PZT film sensor LDT0-028)
- [GY-25 MPU-6050 3-Axis Gyroscope Accelerometer](https://abudawud.wordpress.com/2018/06/01/mengenal-sensor-imu-gy25/)
  - [code-1](https://forum.arduino.cc/t/run-gy-25-in-arduino-ide-with-kalman-filter/565016)
  - [code-2](http://www.arduino.web.id/2019/03/membaca-data-imu-gy-25-dengan-arduino.html)
  - [code-3](https://abudawud.wordpress.com/2018/06/01/mengakses-data-sensor-gy25-dengan-arduino/)
  - [code4](https://abudawud.wordpress.com/2018/06/02/mengambil-heading-dari-sensor-imu-gy25-dengan-arduino/)
- Sensor Arus ACS712 20A
- GY-273 HMC5883L MODULE SENSOR MAGNETOMETER

Code:

- BLDC Motor Speed: BLDC3650_speedonly.ino
- Current: ACS72.ino
- Voltage: ReadAnalogVoltage.ino
- Magnetic: HMC5833L.ino
- Accelerometer: ADXL_Adafruit.ino, ADXL_demo_code.ino, ADXL.ino

![](https://i.imgur.com/UuSy4hM.png)

## Vibration Sensor Consideration

- [Choosing The Right Sensor for Vibration Analysis | by Amir Khademi | Medium](https://khademi.medium.com/choosing-the-right-sensor-for-vibration-analysis-95c751a8ccc8)
- [Choosing Vibration Sensors for Rotating Equipment | Dynapar](https://www.dynapar.com/technology/vibration-sensors/)
- [Vibration Sensors (2022 Buyer's Guide)](https://www.electromaker.io/blog/article/vibration-sensors-2022-buyers-guide)
