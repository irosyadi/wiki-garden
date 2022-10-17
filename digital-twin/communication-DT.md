---
aliases: [Communication in Digital Twin]
title: Communication in Digital Twin
date: 2022-07-28 14:16
tags: ['communication', 'digital-twin']
---

# Communication in Digital Twin

## List of Communication Protocol

- MQTT,
- CoAP,
- MTConnect,
- OPC* UA

## Examples

### Example 1

Communication stack in [Tang. 2022. *Design of power lithium battery management system based on digital twin*](zotero://select/items/1_YTSXBP5Q):

- Physical to virtual: local database through UART (universal asynchronous receiver transmitter), which are pre-processed into twin data. Python on the host computer is used to read from the physical twin, preliminary process and to write to the Sql server database.
- Data storage: the voltage, current and SoC data are stored in a Sqlserver database and managed by sql server management studio (SSMS).
- The database communicate and interact with Matlab and Unity3D in real time.
- Image: [image](https://ars.els-cdn.com/content/image/1-s2.0-S2352152X21013542-gr7_lrg.jpg)

### Example 2

Communication stack in [Hinchy. 2019. *Using open-source microcontrollers to enable digital twin communication for smart manufacturing*](zotero://select/items/1_6JVZJMCG):  
[(image)](https://i.imgur.com/WVh3zzK.png)

- Physical to virtual: sensors relay data to the microcontroller which processes the data and send actions to the actuators. The Raspberry Pi microcontroller was established as an OPC UA server and is used to transmit data from the microcontroller to the OPC UA client on an MS Windows PC. These data were stored in a database and used to predict related values.

## Bibliography

Tang, H., Wu, Y., Cai, Y., Wang, F., Lin, Z., & Pei, Y. (2022). Design of power lithium battery management system based on digital twin. _Journal of Energy Storage_, _47_, 103679. [https://doi.org/10.1016/j.est.2021.103679](https://doi.org/10.1016/j.est.2021.103679)  
Hinchy, E. P., O’Dowd, N. P., & McCarthy, C. T. (2019). Using open-source microcontrollers to enable digital twin communication for smart manufacturing. _Procedia Manufacturing_, _38_, 1213–1219. [https://doi.org/10.1016/j.promfg.2020.01.212](https://doi.org/10.1016/j.promfg.2020.01.212)
