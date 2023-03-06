---
aliases: []
date: 2022-10-18 13:37
tags: ['arduino']
---

# Arduino Sampling Rate


MPU6050 Sampling Rate: 8kHz Gyrometer 1kHz Accelerometer
I2C Speed: Given you use 400kHz I2C speed, the highest data rate to read all values is theoretically 2.61kHz, 2.96kHz if you omit the temperature reading (15 bytes must be transmitted, needing 9 clocks each). That's a theoretical maximum that is practically never reached.  
If you read only the gyro values (as the accelerometer values aren't that fast anyway) you may reach about 7kHz. 400 / 17 / 9 = 2.61. To read out all values you need to transfer 17 bytes over the I2C bus if you use sequential read and transmitting one byte needs 9 clock cycles (8 bits and the acknowledge signal).
If you want regular times for sampling, don't use delay, use micros, otherwise you'll be at the vaguaries  
of how long your code takes to run, not just the ticking of the clock. millis() is not suitable for this, note, as it has a lot of jitter.

```
unsigned long target = 0L ;  
void loop() 
{   
  if (micros() - target >= 5000)  // sample when time comes   
  {     
    int x,y,z;     
    adxl.readAccel(&x, &y, &z);     ....     
    target += 5000 ;  // prepare for next sample   
    } 
}
```


You haven't said what accelerometer, so don't know what the actual fastest sample rate is.
If you are reading at high rates and try to print lots to serial for each sample, serial will slow  
you down, even at 115200 baud you can't output that much per millisecond.

Reference:
[where do i set my sampling frequency - Using Arduino / Sensors - Arduino Forum](https://forum.arduino.cc/t/where-do-i-set-my-sampling-frequency/481219/3)
[Understand the sampling rate of the MPU-6050 - Using Arduino / Programming Questions - Arduino Forum](https://forum.arduino.cc/t/understand-the-sampling-rate-of-the-mpu-6050/502129)
[How can I increase the sample rate - Using Arduino / Project Guidance - Arduino Forum](https://forum.arduino.cc/t/how-can-i-increase-the-sample-rate/978239)
[MPU6050 Arduino High-Frequency Accelerometer and Gyroscope Data Saver — Maker Portal](https://makersportal.com/blog/2019/8/17/arduino-mpu6050-high-frequency-accelerometer-and-gyroscope-data-saver#:~:text=The%20gyroscope%20and%20accelerometer%20can,full%20datasheet%20for%20MPU6050%20here).)