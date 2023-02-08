---
aliases: [Scipy Howto]
title: Scipy Howto
date: 2023-01-11 11:04
tags: ['tag1', 'tag2']
---

# Scipy Howto

Scipy, as many other large packages, doesn't import all modules automatically. If we want to use the subpackages of scipy, then we need to import them directly.

However, some scipy subpackages load other scipy subpackages, so for example importing scipy.stats also imports a large number of the other packages. But I never rely on this to have the subpackage available in the namespace.

In many packages that use scipy, the preferred pattern is to import the subpackages to have them available by their names, for example:

```python
>>> from scipy import stats, optimize, interpolate
```

## Spectrogram vs STFT

**Tl;dr**: If I write it with the ouput given by the SciPy documentation: `Sxx = Zxx ** 2`. Spectogram is STFT².

**Explanation**: Spectrogram and Short Time Fourier Transform are two different object, yet they are really close together.

> The short-time Fourier transform (STFT), is a Fourier-related transform used to determine the sinusoidal frequency and phase content of local sections of a signal as it changes over time. In practice, the procedure for computing STFTs is to divide a longer time signal into **shorter segments of equal length** and then compute the Fourier transform separately on each shorter segment. This reveals the Fourier spectrum on each shorter segment. One then usually plots the changing spectra as a function of time. [Wikipedia](https://en.wikipedia.org/wiki/Short-time_Fourier_transform)

On the other hand,

> A spectrogram is a visual representation of the spectrum of frequencies of a signal as it varies with time. [Wikipedia](https://en.wikipedia.org/wiki/Spectrogram)

The spectrogram basically cuts your signal in small windows, and display a range of colors showing the intensity of this or that specific frequency. Exactly as the STFT. In fact it's using the STFT.

**Now, for the difference**, by definition, the spectrogram is squared magnitude of the short-time Fourier transform (STFT) of the signal `s(t)`:

`spectrogram(t, w) = |STFT(t, w)|^2`

The example shown at the bottom of the `scipy.signal.stft` page shows:

```python
>>> plt.pcolormesh(t, f, np.abs(Zxx), vmin=0, vmax=amp)
```

It's working and you can see a color scale. But it's a linear one, because of the `abs` operation.

In reality, to get the real spectrogram, one should write:

```python
>>> plt.pcolormesh(t, f, Zxx ** 2, vmin=0, vmax=amp)
```

## References
