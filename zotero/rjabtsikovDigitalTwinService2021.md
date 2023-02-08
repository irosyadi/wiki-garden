---
citekey: rjabtsikovDigitalTwinService2021  
title: "Digital Twin Service Unit for AC Motor Stator Inter-Turn Short Circuit Fault Detection"
year: 2021
tags: ['conferencePaper']
---

### Digital Twin Service Unit for AC Motor Stator Inter-Turn Short Circuit Fault Detection  

#### Type: conferencePaper

#### Bibliography
  
Rjabtsikov, V., Rassolkin, A., Asad, B., Vaimann, T., Kallaste, A., Kuts, V., Jegorov, S., Stepien, M., & Krawczyk, M. (2021). Digital Twin Service Unit for AC Motor Stator Inter-Turn Short Circuit Fault Detection. _2021 28th International Workshop on Electric Drives: Improving Reliability of Electric Drives (IWED)_, 1–5. [https://doi.org/10/gqk2k8](https://doi.org/10/gqk2k8)  
  

#### Zotero Web Link
[**Zotero Web**](http://zotero.org/users/242940/items/M3JI9TZU)  

#### Publisher Link
[**Publisher Link**](https://ieeexplore.ieee.org/document/9376328/)  

#### Local PDF Link
[Rjabtsikov_2021_Digital_Twin_Service_Unit_for_AC_Motor_Stator_Inter-Turn_Short_Circuit_Fault.pdf](file:///C:/Users/User/Zotero/storage/PYZVEHRI/Rjabtsikov_2021_Digital_Twin_Service_Unit_for_AC_Motor_Stator_Inter-Turn_Short_Circuit_Fault.pdf)  

#### Local Zotero Link
[**Open in Zotero Desktop**](zotero://select/library/items/M3JI9TZU)  

#### Abstract

A modern trend for industry digitalization brings new demands for the development and application of the modeling and simulation approach. It is already not enough to have only a virtual representation of the object and run it independently from the physical object. The Digital Twin (DT) aspect indicates a connection between the physical object and the corresponding virtual twin established by generating real-time data using sensors. The DT represents physical object operation throughout its life cycle, making it an essential tool for improving that object's reliability. In this paper, an application of the DT service unit for AC motor stator inter-turn short circuit fault detection is presented. According to real-time measurements, Linux Robot Operation System (ROS) simulates AC electrical machine-specific behavior in case of unbalanced stator currents and notify about possible fault appearance and propagation. Fault, such as discussed in the paper (AC machine stator inter-turn) is considered one of the most prevalent possible electrical motor failure.


#### Notes


#### Annotations
  
**Imported: 2022-12-14**

> “In this paper, an application of the DT service unit for AC motor stator inter-turn short circuit fault detection is presented.” Yellow Highlight [Page 1](zotero://open-pdf/library/items/PYZVEHRI?page=1)

> “According to real-time measurements, Linux Robot Operation System (ROS) simulates AC electrical machine-specific behavior in case of unbalanced stator currents and notify about possible fault appearance and propagation.” Yellow Highlight [Page 1](zotero://open-pdf/library/items/PYZVEHRI?page=1)

> “The developed DT's virtual entity consists of models’ set, spatial model, physical model, behavior model, rule model, etc.” Red Highlight [Page 3](zotero://open-pdf/library/items/PYZVEHRI?page=3)

> “The behavior model is the main focus of the current research paper; it is responsible for transfer data from the real physical entity, calculating motor parameters, and stream to the ROS topics available for models.” Yellow Highlight [Page 3](zotero://open-pdf/library/items/PYZVEHRI?page=3)

> “when measurement data from the motor windings come as an input current to ROS, it is being compared against the expected data, and if the received measurement on any of the winding exceeds the margins determined by the admitted error, a fault notification is filed. The measured data is being summed up and compared for a specific amount of time that is necessary to calculate an optimal error, therefore allowing the system to accurately tell if there is a fault in the windings of the motor.” Yellow Highlight [Page 3](zotero://open-pdf/library/items/PYZVEHRI?page=3)

> “The fault detection algorithm realized for DT is shown in Fig. 4. ROS gets connected to the real motor (for this article, recorded data of the motor was used to simulate the real input from the motor). The current data received from motors is being processed, converted to ROS messages, and is published in the ROS environment, as shown in Fig. 5.a. At the same time, the node listening to the currents topic starts receiving messages. The current values retrieved from these messages are processed as follows: a motor phase is chosen as the base phase. Relatively to this phase, we convert other phase currents to imaginary units. These imaginary units can be used to represent the percentage of load applied on the motor. As a rule of thumb, these values should be very close to one another, e.g., within the allowed margins (due to noises and imperfections). If one of the imaginary units exceeds the set margins, then a warning message is being published by ROS (used to notify the model) and is output in the terminal (shown in Fig. 5b). The published message can be used as an indicator in the 3D model or real test bench of a potential fault in the system.” Red Highlight [Page 3](zotero://open-pdf/library/items/PYZVEHRI?page=3)

> “In this research work, we have implemented inter-turn short circuit fault detection into the DT of the induction motor. A spatial model developed in Unity 3D was combined with ROS service that allows online condition monitoring.” Yellow Highlight [Page 4](zotero://open-pdf/library/items/PYZVEHRI?page=4)

> “Basically, the emulator was created from historical data and a physical/mathematical model of the induction motor.” Yellow Highlight [Page 4](zotero://open-pdf/library/items/PYZVEHRI?page=4)


%% Import Date: 2022-12-14T19:16:46.050+07:00 %%
