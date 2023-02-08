---
aliases: [Physical Modeling in Digital Twin]
title: Physical Modeling in Digital Twin
date: 2022-07-28 13:19
tags: ['modeling', 'digital-twin']
---

# Physical Modeling in Digital Twin

## Definition

Physical modeling: modeling using mathematical model (differential equation) to be solved using numerical methods.  
Physical modeling:  

- differential equation
- block diagram

## Stacks

### Differential Equation

### Block diagram

- Simulink (MATLAB)
- Xcos (Scilab)
- Modelica

## According to [qiEnablingTechnologiesTools2021](../zotero/qiEnablingTechnologiesTools2021.md)

Physical modeling: describes accuracy information, material information, and assembly information. Feature modeling includes interactive feature definition, automatic feature recognition, and feature-based design.

## According to [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md)

- Solid body structural analysis using Finite Element Analysis (FEA). Software: Ansys Mechanical, Abaqus FEA, Altair HyperMesh.
- Thermal and fluid flow analysis using Computational Fluid Dynamics (CFD). Software: Ansys Fluent, Autodesk CFD, SimScale. Free software: OpenFOAM, Stanford University's Unstructured (SU2) package.
- Kinematic and dynamic analysis using multi-body dynamics (MBD). Software: MATLAB and Simulink Simscape Multibody, MSC ADAMS, RecurDyn. Free software: MBDyn.
- Hybrid Multiphysics simulations. Software: COMSOL Multiphysics, MSC Nastran. Free software: Advanced Simulation Library (ASL) and Chrono.

### Physics based Modeling: Fidelity

- Level of fidelity (higher >> lower)
  - Fluid Dynamics: CFD >> Eddy Simulation and Navier-Stokes equation
  - Battery modeling: 3D Doyle-fuller Newman (DFN) >> 2+1D DFN >> DFN >> single particle model
- Balance between accuracy and computational cost
  - High fidelity physics modeling is still only an approximation
  - Need to quantify and compensate bias of the model (see [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md))
  - high-fidelity models contain larger numbers of parameters that need to be calibrated offline, and during online deployment, a subset of the parameters need to be further tuned

## Other Examples of Physic-based Modeling
- Empirical Performance Model (Rassolkin et al., 2022) [link](zotero://select/library/items/F2NM5RDP)
- [link]()
- [link](zotero://select/library/items/F2NM5RDP)

