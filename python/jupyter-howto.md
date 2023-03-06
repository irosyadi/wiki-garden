---
aliases: [Jupyter Howto]
title: Jupyter Howto
date: 2023-01-10 08:16
tags: ['tag1', 'tag2']
---

## Jupyter Howto

### Display all line outputs in a cell

- Place this code in a Jupyter cell

```python
from IPython.core.interactiveshell import InteractiveShell

InteractiveShell.ast_node_interactivity = "all"
```

- Add `dislplay(variable)` for each variable you want to show. Import from `from IPython.display import display`
- For permanent effect (or when using Jupyter Lab), add following code to the file `C:\Users\USERNAME\.ipython\profile_default\ipython_config.py`:

```python
c.InteractiveShell.ast_node_interactivity = "all"
```

 or

```python
c = get_config()
c.InteractiveShell.ast_node_interactivity = "all"
```

### Debugging

```python
import pdb; 
pdb.set_trace()
```

or

```python
!pip install -Uqq ipdb
import ipdb
ipdb.set_trace()
```

with

1. l(ist) Show the current location in the file
2. h(elp) Show a list of commands, or find help on a specific command
3. q(uit) Quit the debugger and the program
4. d(own) \[count\] Move the current frame count (default one) levels down in the stack trace (to a newer frame).
5. u(p) \[count\] Move the current frame count (default one) levels up in the stack trace (to an older frame).
6. b(reak)
7. c(ontinue) Quit the debugger, continue in the program
8. n(ext) Go to the next step of the program
9. p(rint) Print variables
10. s(tep) Step into a subroutine
11. r(eturn) Return out of a subroutine
12. unt(il) \[lineno\]
13. j(ump) \[lineno\]

See:

- [Debugging in Google Colab notebook](https://zohaib.me/debugging-in-google-collab-notebook/)
- [Blog-Debugging.ipynb - Colaboratory](https://colab.research.google.com/drive/1rs2CH79vwVdK_JUpJuQaM_BMb1JL0bdg?usp=sharing)
- [01.06-Errors-and-Debugging.ipynb - Colaboratory](https://colab.research.google.com/github/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/01.06-Errors-and-Debugging.ipynb)
- [gotcha/ipdb: Integration of IPython pdb](https://github.com/gotcha/ipdb)

### References
