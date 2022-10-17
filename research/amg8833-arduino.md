---
aliases: [Read Thermal Sensor AMG883 using Arduino]
title: amg8833-arduino
date: 2022-10-04 11:05
tags: ['arduino']
---

# amg8833-arduino

## Read Thermal Sensor AMG883 using Arduino

- Install Melopero AMG8833 Library to Arduino

## Melopero_AMG8833 Library

This project uses the Melopero AMG8833 library: [https://github.com/melopero/Melopero_AMG8833](https://github.com/melopero/Melopero_AMG8833)  
Which handles the communication to and from the AMG8833 module. You can load this in the arduino IDE via the menu:

- **Sketch > Include Libray > Manage Libraries**
- Then **search** for **"AMG8833"**.  
    
- **Select** the **Melopero AMG8833** entry.
- Press **"Install".**

## VirtualPanel

The UI component used for this project is (my own) VirtualPanel. It is intended as a generic UI for Arduino experiments and prototyping so it can be used for much more than just this project. See the VirtualPanel documentation: [https://github.com/JaapDanielse/VirtualPanel/wiki](https://github.com/JaapDanielse/VirtualPanel/wiki)  

Because VirtualPanel is not "just" a library but contains an executable too and therefore it cannot be installed via the ide but must be installed manually:

- **Download** the **VirtualPanel** release zip from [https://github.com/JaapDanielse/VirtualPanel/releases](https://github.com/JaapDanielse/VirtualPanel/releases) (V1.5.1 or later).
- Open the zip and **add** the **VirtualPanel and ArduinoPort** folders **to** the **Documents\Arduino\libraries** folder.
- Add the VirtualPanelExe folder to the **Documents\Arduino** folder.

You can add VirtualPanel to start by right clicking and selecting "Pin to Start" then start from Start.  
Or start by double clicking the the VirtualPanel.exe file directly.

## Download the AMG8833_ThermalCamera sketch

- Download the AMG8833_ThermalCamera sketch from the GitHub release page:  
    [https://github.com/JaapDanielse/AMG8833-Thermal-Camera/releases](https://github.com/JaapDanielse/AMG8833-Thermal-Camera/releases)
- Unpack the zipfile

## References
