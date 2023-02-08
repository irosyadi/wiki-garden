---
aliases: [Modeling in Digital Twin]
title: Modeling in Digital Twin
date: 2022-07-28 14:53
tags: ['modeling', 'digital-twin']
---

# Modeling in Digital Twin

## Background

Digital twins can use any sort of model that is a sufficiently accurate representation of the physical object that is being twinned. In an ideal world, where computation would be instantaneous and accuracy would be perfect, digital twins would use models derived directly from physics that took all phenomena likely to affect the quantities being measured and updated into account. For instance, a digital twin of a machine tool would be able to simulate the thermal and mechanical processes involved in milling of metal in real time and update knowledge about tool wear based on real-time measurements of part temperature and shape, so that plant maintenance could become more proactive and efficient. ([wrightHowTellDifference2020](../zotero/wrightHowTellDifference2020.md))

## Requirements of the Model

- Can be sufficiently accurate representation of the physical object that is being twinned
- do not require high-speed computation, because the time frame over which the twin is to be updated is hours rather than seconds
- can use local models of key parts of a structure or an object rather than considering the complete system. These models can be defined to include the region directly affected by the parameter to be updated and little else of the surrounding structure, replacing parts of the computational domain with appropriate boundary conditions or lumped element approximations instead
- where the problem cannot easily be reduced to a sub-model, a high accuracy physics-based model can be used to generate a set of reliable results within the known operating parameter envelope of the physical object, and a surrogate model or metamodel can be constructed based on those results. The [[surrogate-model]] will be less accurate than the physics-based model, but if the level of accuracy is known, and ideally re-evaluated for cases where the operating parameters are approaching the edge of their envelope, then the loss in accuracy can be taken into account when making decisions based on the digital twin.
- Be possible to construct a purely data-driven model to sit at the heart of a digital twin. This approach is often not advisable for several reasons. The most obvious is that a data driven model is only reliable within the region of input parameter space from which the data used to construct the model was taken. Using data-driven models for extrapolation without imposing any constraints based on physical knowledge is a dangerous approach.  
([wrightHowTellDifference2020](../zotero/wrightHowTellDifference2020.md))

In general, a model for a digital twin should be:

- Sufficiently physics-based that updating parameters within the model based on measurement data is a meaningful thing to do,
- Sufficiently accurate that the updated parameter values will be useful for the application of interest, and
- Sufficiently quick to run that decisions about the application can be made within the required timescale.  
([wrightHowTellDifference2020](../zotero/wrightHowTellDifference2020.md))

## List of Models

List modeling in Digital Twin according to [qiEnablingTechnologiesTools2021](qiEnablingTechnologiesTools2021.md):

- [Geometric Model](DT-modeling-geometric.md)
- [Physical Model](DT-modeling-physic.md)
- [Behavioral Model](DT-modeling-system.md)
- [State Modeling](DT-modeling-system.md)
- [Rule Model](DT-modeling-system.md)

List modeling in Digital Twin according to [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md)

- [Geometric Modeling](DT-modeling-geometric.md)
- [Physics-based Modeling](DT-modeling-physic.md)
- [Data-driven Modeling](DT-modeling-data-driven.md)
- [Physic-informed ML Modeling](DT-modeling-physic-informed-ML.md)
- [System Modeling](DT-modeling-system.md)

## Recommended models

- Geometric model: solid modeling
- Physical model: finite element analysis, computational fluid dynamics
- Behavioral model: finite state machines
- Rule model: XML-based representation and ontology representation

## Trend in modeling

- multi-objective and full-performance
- combined with the historical usage, maintenance, and upgrade data, various DT models

## Notes:

- Mathematical model is not a digital twin modeling since it cannot be updated

## References:

- [qiEnablingTechnologiesTools2021](../zotero/qiEnablingTechnologiesTools2021.md)
- [wrightHowTellDifference2020](../zotero/wrightHowTellDifference2020.md)
- [thelenComprehensiveReviewDigital2022](../zotero/thelenComprehensiveReviewDigital2022.md)
