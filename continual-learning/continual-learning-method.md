---
aliases: [Continual Learning Methods]
title: Continual Learning Methods
date: 2023-08-06 08:52
tags: ['continual-learning']
---

## Continual Learning Methods

### Classification #1

- Model growing: Increase the model capacity for every new task
  - PNN: Progressive Neural Networks
    - Problems: The model grows linarly with the number of trained tasks, Need to know task labels during test
- Parameter isolation: Explicitly identify important parameters for each task
  - PackNet
- Regularization: Penalize (some) parameter variations
  - EWC: Elastic Weight Consolidation
- Knowledge distillation: Use the model in a previous training state as a teacher
  - LwF: Learning without Forgetting
- Rehearsal: Store old inputs and replay them to the model.
  - GEM: Gradient Episodic Memory
  - A-GEM: Average GEM

### Classification #2

- Replay-based
  - Rehearsal
    - iCaRL, SER, TEM
    - Experience Replay (**ER**; [Chaudhry et al., 2019 _arXiv_](https://arxiv.org/abs/1902.10486))
  - Pseudo rehearsal
    - PR, CCLUGM, LGM
    - Deep Generative Replay (**DGR**; [Shin et al., 2017 _NeurIPS_](https://proceedings.neurips.cc/paper/2017/hash/0efbe98067c6c73dba1250d2beaa81f9-Abstract.html))
  - Constrained
    - GEM, A-GEM, GSS
- Regularization-based
  - Prior-focused (parameter regularization)
    - R-EWC, MAS, Riemannian Walk
    - Elastic weight consolidation (**EWC**; [Kirkpatrick et al, 2017 _PNAS_](https://www.pnas.org/doi/10.1073/pnas.1611835114)), Synaptic Intelligence (**SI**; [Zenke et al., 2017 _ICML_](http://proceedings.mlr.press/v70/zenke17a))
  - Data-focused (a.k.a. Knowledge Distillation, Functional regularization)
    - LFL, EBLL, DMC
    - Learning without forgetting (**LwF**; [Li & Hoiem, 2017 _TPAMI_](https://ieeexplore.ieee.org/abstract/document/8107520)), Functional Regularization of the Memorable Past (**FROMP**; [Pan et al., 2020 _NeurIPS_](https://proceedings.neurips.cc/paper/2020/hash/2f3bbb9730639e9ea48f309d9a79ff01-Abstract.html))
- Parameter isolation
  - Fixed network
    - PackNet, PathNet, Piggyback, HAT
  - Dynamic architecture (a.k.a. Model Growing)
    - PNN, Expert Gate, RCL, DAN

### Classification #3

- _**Parameter regularization**_
    - Elastic weight consolidation (**EWC**; [Kirkpatrick et al, 2017 _PNAS_](https://www.pnas.org/doi/10.1073/pnas.1611835114))
    - Synaptic Intelligence (**SI**; [Zenke et al., 2017 _ICML_](http://proceedings.mlr.press/v70/zenke17a))
- _**Functional regularization**_
    - Learning without forgetting (**LwF**; [Li & Hoiem, 2017 _TPAMI_](https://ieeexplore.ieee.org/abstract/document/8107520))
    - Functional Regularization of the Memorable Past (**FROMP**; [Pan et al., 2020 _NeurIPS_](https://proceedings.neurips.cc/paper/2020/hash/2f3bbb9730639e9ea48f309d9a79ff01-Abstract.html))
- _**Replay**_
    - Deep Generative Replay (**DGR**; [Shin et al., 2017 _NeurIPS_](https://proceedings.neurips.cc/paper/2017/hash/0efbe98067c6c73dba1250d2beaa81f9-Abstract.html))
    - Experience Replay (**ER**; [Chaudhry et al., 2019 _arXiv_](https://arxiv.org/abs/1902.10486))
- _**Context-specific components**_
    - Separate Networks (**SepN**)
    - Context-dependent Gating (**XdG**; [Masse et al., 2018 _PNAS_](https://www.pnas.org/doi/abs/10.1073/pnas.1803839115))
- _**Template-based classification**_
    - Generative Classifier (**GenC**; [van de Ven et al., 2021 _CVPR-W_](https://openaccess.thecvf.com/content/CVPR2021W/CLVision/html/van_de_Ven_Class-Incremental_Learning_With_Generative_Classifiers_CVPRW_2021_paper.html))
    - Incremental Classifier and Representation Learning (**iCaRL**; [Rebuffi et al., 2017 _CVPR_](https://openaccess.thecvf.com/content_cvpr_2017/html/Rebuffi_iCaRL_Incremental_Classifier_CVPR_2017_paper.html))

![](https://github.com/GMvandeVen/continual-learning/raw/master/figures/strategies.png)
### Reference

[A Continual Learning Survey: Defying Forgetting in Classification Tasks](https://ieeexplore.ieee.org/abstract/document/9349197)

### More …

[continual-learning-type](continual-learning-type.md)
