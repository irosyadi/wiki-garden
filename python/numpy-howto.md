---
aliases: [Numpy Howto]
title: Numpy Howto
date: 2023-01-10 01:31
tags: ['tag1', 'tag2']
---

## Numpy Howto

### numpy.arrange

```python
numpy.arange([_start_, ]_stop_, [_step_, ]_dtype=None_, _*_, _like=None_)
```

Return evenly spaced values within a given interval.  
When using a non-integer step, such as 0.1, it is often better to use [`numpy.linspace`](https://numpy.org/doc/stable/reference/generated/numpy.linspace.html#numpy.linspace "numpy.linspace").

```python
>>> np.arange(3)
array([0, 1, 2])
>>> np.arange(3.0)
array([ 0.,  1.,  2.])
>>> np.arange(3,7)
array([3, 4, 5, 6])
>>> np.arange(3,7,2)
array([3, 5])
```

### numpy.repeat

```
numpy.repeat(_a_, _repeats_, _axis=None_)
```

Repeat elements of an array.

```python
>>> np.repeat(3, 4)
array([3, 3, 3, 3])
>>> x = np.array([[1,2],[3,4]])
>>> np.repeat(x, 2)
array([1, 1, 2, 2, 3, 3, 4, 4])
>>> np.repeat(x, 3, axis=1)
array([[1, 1, 1, 2, 2, 2],
       [3, 3, 3, 4, 4, 4]])
>>> np.repeat(x, [1, 2], axis=0)
array([[1, 2],
       [3, 4],
       [3, 4]])
```

### numpy.concatenate

```python
numpy.concatenate(_(a1_, _a2_, _...)_, _axis=0_, _out=None_, _dtype=None_, _casting="same_kind"_)
```

```python
>>> a = np.array([[1, 2], [3, 4]])
>>> b = np.array([[5, 6]])
>>> np.concatenate((a, b), axis=0)
array([[1, 2],
       [3, 4],
       [5, 6]])
>>> np.concatenate((a, b.T), axis=1)
array([[1, 2, 5],
       [3, 4, 6]])
>>> np.concatenate((a, b), axis=None)
array([1, 2, 3, 4, 5, 6])
```

### References
