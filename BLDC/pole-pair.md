---
---

**Poles pair adalah** jumlah kutub magnet. Jumlah total magnet yang ada di dalam motor BLDC adalah selalu genap atau kelipatan 2.

**Jumlah Stator winding adalah** jumlah slot lilitan kumparan pada stator motor BLDC. Jumlah stator umumnya ganjil dan kelipatan 3, meski ada pula untuk beberapa yang genap atau tidak kelipatan 3.

Dataset PMSM, pole=4, f=60, speed 3000, polepair=2

[(PDF) Line Current Spectrum Analysis as a Technique to Diagnose the Demagnetization Fault in Permanent Magnet Synchronous Motor](https://www.researchgate.net/publication/344461763_Line_Current_Spectrum_Analysis_as_a_Technique_to_Diagnose_the_Demagnetization_Fault_in_Permanent_Magnet_Synchronous_Motor)

$$
fdem=[1\pm \frac{k}{P}]f_s
$$

where $f_s$ the power frequency, P poles pairs, k is positive integer

[(PDF) Fault detection of eccentricity and bearing damage in a PMSM by means of wavelet transforms decomposition of the stator current](https://www.researchgate.net/publication/4334974_Fault_detection_of_eccentricity_and_bearing_damage_in_a_PMSM_by_means_of_wavelet_transforms_decomposition_of_the_stator_current)

$$
f_{el}=|f_s\pm k\cdot f_r|
$$

## **Motor Poles vs. Pole Pairs**

The magnets lining the rotor each have their own north and south end, with just one of those ends facing and interacting with the stator. There are an equal number of north and south magnets facing out from the rotor, and each set of N and S magnets is referred to as a ‘pole pair’.

For each pole pair in the motor there are two poles, so if the motor has 8 poles / magnets, there are 4 pole pairs. For this same reason, you will almost always have an even pole number (2, 4, 6, 8, etc.), as each magnet needs an opposite pole.

Ex.

- 2 pole motor → 1 north magnet and 1 south magnet → 1 pole pair
- 8 pole motor → 4 north magnets and 4 south magnets → 4 pole pairs

$$
N_s =\frac{120f_s}{p}=\frac{60f}{pp}
$$

$f_s$ frequency of power supply, p number of poles, pp is number of pole pair

[How to Calculate Motor Poles & Motor Kv - Tyto Robotics](https://www.tytorobotics.com/blogs/articles/how-to-calculate-motor-poles-and-brushless-motor-kv)

The relationship between the number of pole pairs and the speed of a Brushless DC (BLDC) motor is inversely proportional. 

In a BLDC motor, the number of pole pairs refers to the number of magnetic poles on the rotor. Each pole pair consists of a north and south pole. The stator, on the other hand, has a fixed number of windings that create magnetic fields.

The speed of a BLDC motor is determined by the frequency of the electrical signals applied to the windings. When the windings are energized, they create a rotating magnetic field that interacts with the magnetic field of the rotor, causing it to rotate.

The relationship between the number of pole pairs and the speed can be described by the following equation:

Speed (in revolutions per minute, RPM) = (120 * Frequency) / Number of Pole Pairs

From this equation, it can be observed that as the number of pole pairs increases, the speed of the motor decreases, and vice versa. This is because a higher number of pole pairs means that the motor has more magnetic poles to interact with, resulting in a slower rotational speed. Conversely, a lower number of pole pairs allows for a higher rotational speed.

