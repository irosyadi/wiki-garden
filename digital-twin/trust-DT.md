---
aliases: [Trustiness in Digital Twin, template, templates]
title: Trustiness in Digital Twin
date: 2022-10-16 15:33
tags: ['digital-twin']
---

## Trustiness in Digital Twin

It is therefore very important to be able

- to trust the predictions of the digital twin. This requirement means that there must also be
- trust in the data,
- trust in the model, and
- trust in the updating procedure.

### Trust in the Model

- Trust in the model requires verification and validation procedures.
- But there is a linked chain of models.
  - Solving such models in a fully coupled way is typically computationally expensive: because of different analyses in different locations, interpolation of the results which will introduce further errors, the existence of uncertainty means that validation (comparison with reality) needs to be treated as a statistical process.

### Trust in the Data

- Trust in data gathered by sensors can be partially addressed by associating metadata with the data. Metadata (“data about the data”) captures aspects of the measurement process that may affect the reliability and future usability of the data. For the metadata to be of the greatest possible use, standards for metadata need to be common across industries, because most types of sensor are used in multiple industries. Metadata also plays a key role in the use of curated and historical data. The structuring of metadata (“ontology”) has a strong effect on the ease of carrying out data searches, particularly for data sets with multiple levels of metadata.
- The details of the data and how they relate to the model should also be considered. The data set for a digital twin needs to go beyond what is required for definition of geometry, material properties, boundary conditions and loads, and beyond what is needed for model validation. The twin development process needs to identify a set of model parameters that are either poorly known or likely to change during manufacture or use, and the data needs to be sufficient to update these parameters.
- The low cost of sensors and the easy access to cloud storage has led to widespread collection of extremely large datasets. These sets frequently consist of data from multiple sensors of varying types gathered at short time intervals. The challenge with using such data sets in digital twins is to identify which measurements at which locations or times have the most effect on the parameters to be updated within the twin. [Data Reduction Techniques](../signal-processing/data-reduction.md) provide a way to address this challenge.

### Trust in Updating

- The best choice of process used to update the model depends on the size of the data being used to update the model, and the number of parameters that are available for updating. If only a small number of parameters are used than a simple optimisation approach may be appropriate. For larger numbers of parameters, data assimilation may be more suitable.

### References

- [wrightHowTellDifference2020](../zotero/wrightHowTellDifference2020.md)
