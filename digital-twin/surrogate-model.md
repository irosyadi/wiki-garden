---
aliases: [Surrogate Model, template, templates]
title: Surrogate Model
date: 2022-10-16 15:46
tags: ['modeling']
---

## Surrogate Model

Where the problem cannot easily be reduced to a sub-model, a high accuracy physics-based model can be used to generate a set of reliable results within the known operating parameter envelope of the physical object, and a surrogate model or metamodel can be constructed based on those results.  
A surrogate model is a simplified model, typically data-driven rather than physics-based, that runs more quickly than a full physics-based model and so can be used to generate updated parameter estimates and associated uncertainties more quickly.  
The surrogate model will be less accurate than the physics-based model, but if the level of accuracy is known, and ideally re-evaluated for cases where the operating parameters are approaching the edge of their envelope, then the loss in accuracy can be taken into account when making decisions based on the digital twin.  
In many cases, the computational expense associated with these large multi-physics models of complex systems means that real-time updating, which may be required for effective process control, is not possible. Similarly, as was noted above, the computational expense can make a complete uncertainty evaluation too time-consuming.  
For these situations, replacing the computationally expensive model with an approximate model that is quicker to run can make these challenges easier to address. Such a model is known as a surrogate model or a metamodel.  
One technique for surrogate model development that has been successful across a range of applications is Gaussian process modelling, also known as kriging.

  - This technique requires the user to have a set of results of the full model at a set of known values of the input quantities, called the training set.
  - The technique constructs a model that interpolates the results at these points using a correlation function that effectively assumes that similar input quantity values will lead to similar model results, so that the closer together two points are in the input quantity space, the more strongly correlated they are.
  - This approach is quite general, provided the model is broadly continuous, and a variety of correlation functions have been developed for different purposes.
  - Another advantage is that when the surrogate model is evaluated at a set of input values where the full model result is unknown, it returns both an estimate of the model result for those values and an estimate of the error associated with that estimate. The error estimate means that it is easy to identify regions of the input space where knowing the model result would add most benefit by reducing error the most, so the surrogate model can be developed iteratively.

### Digital Twin vs Surrogate Model

Digital Twin:

1. Definition: A digital twin is a virtual replica or representation of a physical object, process, or system. It is created using real-time data and simulation models to mimic the behavior, characteristics, and performance of the physical counterpart.
2. Purpose: The primary purpose of a digital twin is to monitor, analyze, and optimize the performance of the physical object or system. It allows for real-time monitoring, predictive maintenance, and simulation-based testing and analysis.
3. Data Integration: Digital twins are connected to the physical object or system through sensors and IoT devices, which provide real-time data for analysis and comparison with the digital representation.
4. Real-time Updates: Digital twins continuously receive and update data from the physical object or system, ensuring that the virtual representation remains accurate and up-to-date.

Surrogate Model:

1. Definition: A surrogate model, also known as an emulator or metamodel, is a simplified mathematical or statistical model that approximates the behavior of a complex system or process. It is typically built using historical or experimental data.
2. Purpose: Surrogate models are used when the real system is difficult, expensive, or time-consuming to simulate or analyze directly. They serve as a substitute for the actual system, providing fast and efficient predictions or optimization.
3. Training and Validation: Surrogate models are trained using available data from the real system, and their accuracy is validated against the actual system's responses. They are then used to make predictions or perform optimization tasks.
4. Simplification: Surrogate models often involve simplifications or abstractions of the real system, focusing only on the most relevant variables or factors that influence the system's behavior.
5. Computational Efficiency: Surrogate models are computationally efficient, as they are typically faster to evaluate compared to running simulations or experiments on the real system.

In summary, a digital twin is a virtual replica of a physical object or system that is continuously updated with real-time data, while a surrogate model is a simplified mathematical or statistical model that approximates the behavior of a complex system. Digital twins are used for monitoring, analyzing, and optimizing the physical system, while surrogate models are used as substitutes when the real system is difficult to simulate or analyze directly.

### References

- [wrightHowTellDifference2020](zotero/wrightHowTellDifference2020.md)
