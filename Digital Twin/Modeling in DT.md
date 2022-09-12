---
title: "Modeling in Digital Twin"
date: 2022-07-28 14:53
tags: ['modeling', 'digital-twin']
---

List modeling in Digital Twin according to [Qi. 2021. *Enabling technologies and tools for digital twin*](zotero://select/items/1_B689L444):

- Geometric model: describes a physical entity in terms of its geometric shapes, embodiment, and appearance. The geometric model includes geometric information as well as topological information. Geometric modeling includes wireframe modeling, surface modeling, and solid modeling.
- [[Physical Modeling in DT|Physical Modeling]]: describes accuracy information, material information, and assembly information. Feature modeling includes interactive feature definition, automatic feature recognition, and feature-based design.
- Behavioral model describes various behaviors of a physical entity to fulfill functions, respond to changes, interact with others, adjust internal operations, maintain health, etc.  These models can be developed based on finite state machines, Markov chains, and ontology-based modeling methods, etc. 
- State modeling includes state diagram and activity diagram. Dynamics modeling deals with rigid body motion, elastic system motion, high-speed rotating body motion, and fluid motion.
- Rule model describes the rules extracted from historical data, expert knowledge, and predefined logic. The rules equip the virtual model with an ability to reason, judge, evaluate, optimize, and predict. Rule modeling involves rule extraction, rule description, rule association, and rule evolution. Rule extraction involves both symbolic methods (e.g., decision tree and rough set theory) and connectionist methods (e.g., neural network). 

Recommended models
- Geometric model: solid modeling
- Physical model: finite element analysis
- Behavioral model: finite state machines
- Rule model: XML-based representation and ontology representation

Trend modeling:
- multi-objective and full-performance
- combined with the historical usage, maintenance, and upgrade data, various DT models


## Bibliography:
Qi, Q., Tao, F., Hu, T., Anwer, N., Liu, A., Wei, Y., Wang, L., & Nee, A. Y. C. (2021). Enabling technologies and tools for digital twin. _Journal of Manufacturing Systems_, _58_(October), 3–21. [https://doi.org/10.1016/j.jmsy.2019.10.001](https://doi.org/10.1016/j.jmsy.2019.10.001)