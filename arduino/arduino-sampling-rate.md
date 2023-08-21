---
title: Arduino Sampling Rate
date: 2022-10-18 13:37
tags: ['arduino']
---

## Arduino Sampling Rate

## Analog Read ADC Sampling Rates

- Maximum 9.6 kHz (normal) 104 µs which is a default sampling time of the analogRead() function of Arduino.
- Maximum 15.4 kHz (raising clock)

Ref:

- [Arduino ADC analogRead() Analog Input](https://deepbluembedded.com/arduino-adc-analogread-analog-input/)
- [Arduino ADC: Everything you Must Know about the Built-In ADC](https://www.best-microcontroller-projects.com/arduino-adc.html)
- [arduino uno - How do I know the sampling frequency? - Arduino Stack Exchange](https://arduino.stackexchange.com/questions/699/how-do-i-know-the-sampling-frequency/701#701)

## Current Sensor Sampling Rate

- ACS712 current sensor is current to voltage converter. Whatever waveform current passing on high side has, ACS712 simply replicate that waveform as voltage at its output pin on low side. Data sheet says max bandwidth is 80 kHz, but to have current measurements accurate, you have to sample at least up to 20-th harmonic. For measurement of 50 Hz grid frequency, we need no less than 2 kHz sampling rate.
- [RobTillaart/ACS712: Arduino library for ACS Current Sensor - 5A, 20A, 30A](https://github.com/RobTillaart/ACS712)
- [ACS712 Hall Effect Current Sensor | Mbed](https://os.mbed.com/users/mikeb/notebook/acs712-hall-effect-current-sensor/#:~:text=The%20ACS712%20outputs%20an%20analog,maximum%20sampling%20rate%20of%20200kHz.) 25kHz
- [AC Current Measurement with ACS712 Sensor Module and Arduino](https://microcontrollerslab.com/ac-current-measurement-acs712-arduino/)
- [Measure AC current by interfacing ACS712 sensor with Arduino – Circuit Schools](https://www.circuitschools.com/measure-ac-current-by-interfacing-acs712-sensor-with-arduino/)
- <https://www.best-microcontroller-projects.com/acs712.html>
- Specifically ACS712 has 0A at 2.5V and maximum current at 0.5V and 4.5V, so you don't have much to do with it with digital input.

## Vibration Sensor Sampling Rate

- MPU6050 Sampling Rate: 8kHz Gyrometer 1kHz Accelerometer  
- I2C Speed: Given you use 400kHz I2C speed, the highest data rate to read all values is theoretically 2.61kHz, 2.96kHz if you omit the temperature reading (15 bytes must be transmitted, needing 9 clocks each). That's a theoretical maximum that is practically never reached.  
- If you read only the gyro values (as the accelerometer values aren't that fast anyway) you may reach about 7kHz. 400 / 17 / 9 = 2.61. To read out all values you need to transfer 17 bytes over the I2C bus if you use sequential read and transmitting one byte needs 9 clock cycles (8 bits and the acknowledge signal).  
- If you want regular times for sampling, don't use delay, use micros, otherwise you'll be at the vagaries of how long your code takes to run, not just the ticking of the clock. millis() is not suitable for this, note, as it has a lot of jitter.

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

## Piezo MEAS Sampling Rates

- [Piezo Vibration Sensor - Large with Mass - SEN-09197 - SparkFun Electronics](https://www.sparkfun.com/products/9197)
- [Gravity\_\_Flexible\_Piezo\_Film\_Vibration\_Sensor\_SKU\_\_SEN0209-DFRobot](https://wiki.dfrobot.com/Gravity__Flexible_Piezo_Film_Vibration_Sensor_SKU__SEN0209)
- [sensor - Arduino piezo vibration measurement circuit - Electrical Engineering Stack Exchange](https://electronics.stackexchange.com/questions/216274/arduino-piezo-vibration-measurement-circuit)
- [Sensors | Free Full-Text | Development of a Low-Cost System for the Accurate Measurement of Structural Vibrations](https://www.mdpi.com/1424-8220/21/18/6191)MPU9250

## ADXL

- The ADXL345 sensor passband is from 0.5 Hz to 1.6 kHz (with sampling frequencies from 0.10 to 3200 Hz, respectively).
- Normal setup maximum is 400 Hz
- The sensor has three axes of measurements, X Y Z, and pins that can be used either as I2C or SPI digital interfacing. You can set the sensitivity level to either +-2g, +-4g, +-8g or +-16g.
- The ADXL345 is a small, thin, ultralow power, 3-axis accelerometer with high resolution (13-bit) measurement at up to ±16 g. Digital output data is formatted as 16-bit twos complement and is accessible through either a SPI (3or 4-wire) or I2C digital interface. The ADXL345 is well suited for mobile device applications. It measures the static acceleration of gravity in tilt-sensing applications, as well as dynamic acceleration resulting from motion or shock. Its high resolution (3.9 mg/LSB) enables measurement of inclination changes less than 1.0°
- The ADXL345 features 4 sensitivity ranges from +/2G to +/16G. And it supports output data rates ranging from 10Hz to 3200Hz.
- Per the ADXL345 datasheet, register 0x2C set the device bandwidth and output rate (well, the lower 4 bits). Also per the datasheet, the default output rate is only 100hz.
- I2C most likely your max data rate is 400Khz. Trying to get more then the idealized data rate of 400kHz will be tough. Use SPI if the need for speed exists.
- On the other hand, with a sensor using the SPI interface your data rate from the sensor goes way up. Now you've got a chance of getting the desired output rate, the rest will be up to the efficiency of the MCU and the coder. Want it real fast use an ESP32. Put the sensor read chores on one core and the sensor processing on another core. Using the dual core scheme, I've got SPI reading of over a 1000 samples per second. Want it even faster bypass the Arduino ESP32 core and use the ESP32 SPI API, [SPI Master Driver - ESP32 - — ESP-IDF Programming Guide latest documentation (espressif.com) 4](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/spi_master.html) and freeRTOS. freeRTOS is the built in OS of the ESP32. Now to find some who can code for the ESP32 SPI API.
- SPI is inherently faster because it uses push-pull output whereas I2C uses open drain with pullups. The low to high transition on an open drain bus is slow and is the reason for the limited baudrate. With the right hardware SPI can be very fast indeed.
- Well the ADXL345 datasheet recommends using SPI at 2MHz (5MHz max) or faster for the 3200Hz output rate , so if you use a 4MHz SPI clock I'd think you'd be fine, especially reading only the two Z registers and not all six. Further, the ADXL345 has a FIFO buffer so you can check the status register (to see how many reads you need to do) and then do a burst of repeated reads of the Z registers (with 5uS between) to drain the FIFO. The FIFO will store up to 30-ish samples as you process the data and send it to SD etc.
- The ADXL345 data sheet says the fastest sampling rate using fast i2c is 800Hz. SPI is needed to get faster sampling rates--up to 3200Hz. It looks like the `Adafruit_ADXL345` library only supports i2c. And it's deprecated. The Adafruit Blinka library supports SPI, but you'll have to roll your own ADXL345 interface.
- [ADXL345 Hookup Guide - SparkFun Learn](https://learn.sparkfun.com/tutorials/adxl345-hookup-guide/all)
- [accelerometer-vibration-arduino](../research/accelerometer-vibration-arduino.md)
- [GitHub - gabriel-ns/Simple\_ADXL345\_Arduino: This is a simple library to use ADXL345 accelerometer with Arduino, supporting I2C and SPI communication](https://github.com/gabriel-ns/Simple_ADXL345_Arduino)
- [nagimov/adxl345spi: ADXL345 three-axis accelerometer reader (SPI interface)](https://github.com/nagimov/adxl345spi) claimed to get 3200 Hz
- [(PDF) Development of vibration spectrum analyzer using the Raspberry Pi microcomputer and 3-axis digital MEMS accelerometer ADXL345](https://www.researchgate.net/publication/317293600_Development_of_vibration_spectrum_analyzer_using_the_Raspberry_Pi_microcomputer_and_3-axis_digital_MEMS_accelerometer_ADXL345) get 500 Hz
- [Analysis and control of the motor vibration using arduino and machine learning model](https://sci-hub.ee/https://doi.org/10.1016/j.matpr.2020.11.261)

## Sampling setting code

```c
#define PERIOD 2000  // period in us, to get 500 Hz 
unsigned long last_us = 0L 

void loop () 
{   
 if (micros () - last_us > PERIOD)   
 {     
  last_us += PERIOD ;
  sample () ;
 } 
} 

void sample () 
{   
 // do the sampling here 
   
 // read the analog in value:  
sensorValue = analogRead(analogInPin);  
  // print the results to the serial monitor:  
Serial.println(sensorValue);
}
```

Set with 115200 baud to get maximum sampling 5ksps with 2byte

### Sampling for ADXL

```
//Add the SPI library so we can communicate with the ADXL345 sensor
#include <SPI.h>

//Assign the Chip Select signal to pin 10.
int CS=10;

//This is a list of some of the registers available on the ADXL345.
//To learn more about these and the rest of the registers on the ADXL345, read the datasheet!
char POWER_CTL = 0x2D;	//Power Control Register
char DATA_FORMAT = 0x31;
char DATAX0 = 0x32;	//X-Axis Data 0
char DATAX1 = 0x33;	//X-Axis Data 1
char DATAY0 = 0x34;	//Y-Axis Data 0
char DATAY1 = 0x35;	//Y-Axis Data 1
char DATAZ0 = 0x36;	//Z-Axis Data 0
char DATAZ1 = 0x37;	//Z-Axis Data 1

//This buffer will hold values read from the ADXL345 registers.
char values[10];
//These variables will be used to hold the x,y and z axis accelerometer values.
int x,y,z;

void setup(){ 
  //Initiate an SPI communication instance.
  SPI.begin();
  //Configure the SPI connection for the ADXL345.
  SPI.setDataMode(SPI_MODE3);
  
 
  //Create a serial connection to display the data on the terminal.
  Serial.begin(19200);
  

  
  //Set up the Chip Select pin to be an output from the Arduino.
  pinMode(CS, OUTPUT);
  //Before communication starts, the Chip Select pin needs to be set high.
  digitalWrite(CS, HIGH);
  
  //Put the ADXL345 into +/4G range by writing the value 0x01 to the DATA_FORMAT register.
  writeRegister(DATA_FORMAT, 0x01);
  //Put the ADXL345 into Measurement Mode by writing 0x08 to the POWER_CTL register.
  writeRegister(POWER_CTL, 0x08);  //Measurement mode  
}

void loop(){
  //Reading 6 bytes of data starting at register DATAX0 will retrieve the x,y and z acceleration values from the ADXL345.
  //The results of the read operation will get stored to the values[] buffer.
  readRegister(DATAX0, 6, values);

  //The ADXL345 gives 10-bit acceleration values, but they are stored as bytes (8-bits). To get the full value, two bytes must be combined for each axis.
  //The X value is stored in values[0] and values[1].
//  x = ((int)values[1]<<8)|(int)values[0];
//  //The Y value is stored in values[2] and values[3].
//  y = ((int)values[3]<<8)|(int)values[2];
//  //The Z value is stored in values[4] and values[5].
  z = ((int)values[5]<<8)|(int)values[4];
  //Print the results to the terminal.
  Serial.print(micros());
  Serial.print(",");
//  Serial.print(x, DEC);
//  Serial.print(',');
//  Serial.print(y, DEC);
//  Serial.print(',');
  Serial.println(z, DEC);      
}

//This function will write a value to a register on the ADXL345.
//Parameters:
//  char registerAddress - The register to write a value to
//  char value - The value to be written to the specified register.
void writeRegister(char registerAddress, char value){
  //Set Chip Select pin low to signal the beginning of an SPI packet.
  digitalWrite(CS, LOW);
  //Transfer the register address over SPI.
  SPI.transfer(registerAddress);
  //Transfer the desired register value over SPI.
  SPI.transfer(value);
  //Set the Chip Select pin high to signal the end of an SPI packet.
  digitalWrite(CS, HIGH);
}

//This function will read a certain number of registers starting from a specified address and store their values in a buffer.
//Parameters:
//  char registerAddress - The register addresse to start the read sequence from.
//  int numBytes - The number of registers that should be read.
//  char * values - A pointer to a buffer where the results of the operation should be stored.
void readRegister(char registerAddress, int numBytes, char * values){
  //Since we're performing a read operation, the most significant bit of the register address should be set.
  char address = 0x80 | registerAddress;
  //If we're doing a multi-byte read, bit 6 needs to be set as well.
  if(numBytes > 1)address = address | 0x40;
  
  //Set the Chip select pin low to start an SPI packet.
  digitalWrite(CS, LOW);
  //Transfer the starting register address that needs to be read.
  SPI.transfer(address);
  //Continue to read registers until we've read the number specified, storing the results to the input buffer.
  for(int i=0; i<numBytes; i++){
    values[i] = SPI.transfer(0x00);
  }
  //Set the Chips Select pin high to end the SPI packet.
  digitalWrite(CS, HIGH);
}
```

Set the sampling rate  `adxl.setRate(3200);`

```
#include<Wire.h> // Wire library, used for I2C communication

/*------------CONSTANTS---------------------------*/
const int SENSITIVITY_DIVISOR_2G = 256;
const int SENSITIVITY_DIVISOR_4G = 128;
const int SENSITIVITY_DIVISOR_8G = 64;
const int SENSITIVITY_DIVISOR_16G = 32;
const int DATARATE_25_HZ = 8;
const int DATARATE_50_HZ = 9;
const int DATARATE_100_HZ = 10;
const int DATARATE_200_HZ = 11;
const int DATARATE_400_HZ = 12;
const int DATARATE_800_HZ = 13;

const int ADXL345 = 0x53; // I2C address of the ADXL345
/*------------CONSTANTS---------------------------*/

/*------------PROGRAM VARIABLES-------------------*/

float AccX, AccY, AccZ; // outputs
float gravity = 9.81;
unsigned long previousMicros = 0L;

/*------------PROGRAM VARIABLES-------------------*/

/*------------SETTINGS----------------------------*/

uint8_t sensitivityRange= 2; //Must be equal to 2,4,8 or 16
int sensitivityDivisor = SENSITIVITY_DIVISOR_2G; // change this to change sensitivity_divisor
int dataRate = DATARATE_800_HZ; // 
int arduinoSamplingRate = 600; // MUST BE LESSER THAN dataRate (in Hz)

/*------------SETTINGS----------------------------*/

float samplingIntervalfloat= (1000000/arduinoSamplingRate); //float variable for intermediate calculation
int samplingInterval = (int)samplingIntervalfloat;


void setup() {
  Serial.begin(250000); // Initiate serial communication for printing the results on the Serial monitor
  Serial.println(samplingInterval);
  delay(2000);
  Wire.begin(); // Initialize communication
  Wire.setClock(400000L); // Set Clock Speed
  
  // Set ADXL345 in measuring mode
  Wire.beginTransmission(ADXL345); // Start communication with the ADXL345
  Wire.write(0x2D); // Talk to the register 0x2D (POWER_CTL register)
  Wire.write(8); // (8dec -> 0000 1000 binary) Bit D3 High for measuring enable 
  Wire.endTransmission();

  // Set ADXL345 data rate
  Wire.beginTransmission(ADXL345); // Start communication with the ADXL345
  Wire.write(0x2C); // Talk to the register 0x2C (BW_RATE register)
  Wire.write(dataRate); // (13 -> 800 Hz, 12 -> 400 Hz, 11 -> 200 Hz, 10 -> 100 Hz)
  Wire.endTransmission();

  //Set ADXL345 Sensitivity Range
  setRangeSetting(sensitivityRange);
}

void loop() {

  unsigned long currentMicros = micros();
  if (currentMicros - previousMicros >= samplingInterval) {
    // save the last time you blinked the LED
    previousMicros = currentMicros;
    
  // === Read accelerometer data === //
  Wire.beginTransmission(ADXL345);
  Wire.write(0x32); // Start with register 0x32 (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(ADXL345, 6, true); // Read 6 registers total, each axis value is stored in 2 registers
  AccX = ( Wire.read()| Wire.read() << 8); // X-axis value
  AccX = (AccX / sensitivityDivisor) * gravity; //For a range of +-2g, we need to divide the raw values by 256, according to the datasheet
  AccY = ( Wire.read()| Wire.read() << 8); // Y-axis value
  AccY = (AccY / sensitivityDivisor) * gravity;
  AccZ = ( Wire.read()| Wire.read() << 8); // Z-axis value
  AccZ = (AccZ / sensitivityDivisor) * gravity;
  Serial.print(AccX);
  Serial.print(", ");
  Serial.print(AccY);
  Serial.print(", ");
  Serial.println(AccZ);
  } //if
}


/* ---------------------------------HELPER FUNCTIONS---------------------------------------*/
void setRangeSetting(int val) {
  byte _s;
  byte _b;

  switch (val) {
    case 2:
      _s = B00000000;
      break;
    case 4:
      _s = B00000001;
      break;
    case 8:
      _s = B00000010;
      break;
    case 16:
      _s = B00000011;
      break;
    default:
      _s = B00000000;
  }
  readFromI2C(0x31, 1, &_b);
  _s |= (_b & B11101100);
  
  Wire.beginTransmission(ADXL345);
  Wire.write(0x31);
  Wire.write(_s);
  Wire.endTransmission();
}

void readFromI2C(byte address, int num, byte _buff[]) {
  Wire.beginTransmission(ADXL345);
  Wire.write(address);
  Wire.endTransmission(); 

//  Wire.beginTransmission(ADXL345_DEVICE);
// Wire.reqeustFrom contains the beginTransmission and endTransmission in it. 
  Wire.requestFrom(ADXL345, num);  // Request 6 Bytes

  int i = 0;
  while(Wire.available())
  {
    _buff[i] = Wire.read();       // Receive Byte
    i++;
  }
  if(i != num){
    Serial.println("Error");
  }

}
/* ---------------------------------HELPER FUNCTIONS---------------------------------------*/
```

Code up to 1600. not to use the Adafruit library due to the software serial implementation and use hardware SPI. I am able to datalog from two ADXL345 sensors simultaneously at 1600Hz and write the data to an SD card. The key is using the built in FIFO in the ADXL chip.  
[ADXL345 SPI Data Transfer Rate Issue - adafruit industries](https://forums.adafruit.com/viewtopic.php?t=90461)

```
#include <SPI.h>
#include <SD.h>

#define ledPin 2
#define buttonPin 5
#define sdCS 10
#define sensor1Int A1
uint8_t sensors[] = {A0,A2};

File dataFile;
String rawFileName;

uint8_t vals[448];
uint16_t counter;
uint16_t overrunCount = 0;

uint8_t tracker = 0;
bool collectData = 0;

uint32_t debounceTime = 0;
uint16_t debounceDelay = 300;

SPISettings settingsA(4000000, MSBFIRST, SPI_MODE3); 

#define DevID        0x00 //Device ID Register
#define BW_RATE      0x2C //Data Rate Register
#define POWER_CTL    0x2D //Power Control Register
#define INT_ENABLE   0x2E //Interrupt enable
#define INT_MAP      0x2F //Interrupt mapping
#define INT_SOURCE   0x30 //Interrupt source
#define DATA_FORMAT  0x31 //G Range Register
#define DATAX0       0x32	//X-Axis Data 0
#define FIFO_CONTROL 0x38 //Determines FIFO mode
#define FIFO_STATUS  0x39 //Amount of data in FIFO

void setup(){ 
  SPI.begin();
  Serial.begin(115200);
  
  if (!SD.begin(sdCS)) {
    Serial.println(F("Card failed"));
    while (1) {}
  }
  
  pinMode(4, OUTPUT);
  pinMode(6, OUTPUT);
  digitalWrite(4, HIGH);
  digitalWrite(6, LOW);
  
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(sensor1Int, INPUT);

  for (int i=0;i<=1;i++) {
    pinMode(sensors[i], OUTPUT);
    digitalWrite(sensors[i], HIGH);
  }
  
  for (int i=0;i<=1;i++) {
    writeRegister(POWER_CTL, 0x08, sensors[i]);         //Put the ADXL345 into Measurement Mode by writing 0x08 to the POWER_CTL register.
    writeRegister(BW_RATE, 0b00001110, sensors[i]);     //Put the ADXL345 data sampling range
    writeRegister(DATA_FORMAT, 0b00001011, sensors[i]);  //Set the ADXL345 data range

    writeRegister(INT_ENABLE, 0b00000010, sensors[i]);    //Enable the watermark interrupt
    writeRegister(INT_MAP, 0x00, sensors[i]);             //Map all interrupts to INT1
    writeRegister(FIFO_CONTROL, 0b01000001, sensors[i]);  //Set FIFO mode and watermark interrup level
    
    printDeviceID(sensors[i]);
    printDataRange(sensors[i]);
    printDataRate(sensors[i]);
    printFIFO_CONTROL(sensors[i]);
  }

  File file = SD.open("/");
  printDirectory(file, 0);
  file.close();

  Serial.println(F("Inputs: 'list', remove:filename, run, or print:filename"));
}

void loop(){ 
  // Access and modify data
  if (Serial.available() > 0) {
    String input = "";
    while (Serial.available() > 0) {
      input += char(Serial.read());
      delay(50);
    }
    Serial.print(F("The input was: ")); Serial.println(input);
    if (input == "list") {
      File file = SD.open("/");
      printDirectory(file, 0);
      file.close();
    }
    else if (input.substring(0,5) == "print") {
      Serial.print(F("Printing: ")); Serial.println(input.substring(6));
      printFiles(input.substring(6));
      Serial.print(F("Ready for next input "));
    }
    else if (input.substring(0,6) == "remove") {
      Serial.print(F("Removing: ")); Serial.println(input.substring(7));
      removeFile(input.substring(7));
      Serial.print(F("Ready for next input "));
    }
    else if (input == "run") {
      collectData = 1;
      rawFileName = "raw" + String(fileCount(SD.open("/"), 0)) + ".txt";
      Serial.print(F("Start file: ")); Serial.println(rawFileName);
      dataFile = SD.open(rawFileName, O_CREAT | O_WRITE | O_APPEND);
      digitalWrite(ledPin, HIGH);
      overrunCount = 0;
    }
    else Serial.println(F("Incorrect input"));
  }
  
  // Toggle data collection mode
  if (digitalRead(buttonPin) && ((millis()-debounceTime) > debounceDelay)) {
    debounceTime = millis();
    collectData = !collectData;
    if (collectData) {
      rawFileName = "raw" + String(fileCount(SD.open("/"), 0)) + ".txt";
      Serial.print(F("Start file: ")); Serial.println(rawFileName);
      dataFile = SD.open(rawFileName, O_CREAT | O_WRITE | O_APPEND);
      overrunCount = 0;
    }
    else {
      dataFile.close();
      Serial.println(F("End of data"));
    }
    digitalWrite(ledPin, collectData);
  }

  if (collectData && digitalRead(sensor1Int)) {
    uint8_t watermark = printFIFO_STATUS(sensors[0]);
    if (overrunActive(sensors[0]) | overrunActive(sensors[1])) overrunCount++;
    counter = 0;
    for (int i=0;i<watermark;i++) {
      vals[counter] = 0;
      vals[counter + 1] = i;
      counter += 2;
      for (int j=0;j<=1;j++) {
        readAllVals(sensors[j]);
      }
    }
    dataFile.write(vals,watermark*14);
  }
}

uint8_t writeRegister(uint8_t registerAddress, uint8_t value, uint8_t csPin){
  SPI.beginTransaction(settingsA);
  digitalWrite(csPin, LOW);
  delayMicroseconds(5);
  SPI.transfer(registerAddress);
  uint8_t reply = SPI.transfer(value);
  digitalWrite(csPin, HIGH);
  SPI.endTransaction();
  return reply;
}

uint8_t readRegister(uint8_t registerAddress, uint8_t csPin){
  registerAddress |= 0x80; // Perform read operation
  return writeRegister(registerAddress, 0xFF, csPin);
}

void readAllVals(uint8_t pin) {
  uint8_t registerAddress = DATAX0;
  registerAddress |= 0x80; // Perform read operation
  registerAddress |= 0x40; // Perform multibyte read operation
  SPI.beginTransaction(settingsA);
  digitalWrite(pin, LOW);
  delayMicroseconds(5);
  SPI.transfer(registerAddress);
  for(int j=0;j<6;j++) {
    vals[counter] = SPI.transfer(0xFF);
    counter++;
  }
  digitalWrite(pin, HIGH);
  SPI.endTransaction();
}

void printDeviceID(uint8_t csPin) {
  Serial.print(F("Device ID: "));
  Serial.println(readRegister(DevID,csPin),HEX);
}

void printDataRange(uint8_t csPin) {
  Serial.print(F("Data range: "));
  switch (readRegister(DATA_FORMAT,csPin)&0x03) {
    case 2:
      Serial.println(F("+/-8g"));
      break;
    case 3:
      Serial.println(F("+/-16g"));
      break;
  }
}

void printDataRate(uint8_t csPin) {
  Serial.print(F("Data rate is: "));
  switch (readRegister(BW_RATE, csPin)) {
    case 10:
      Serial.println(F("100Hz"));
      break;
    case 11:
      Serial.println(F("200Hz"));
      break;
    case 12:
      Serial.println(F("400Hz"));
      break;
    case 13:
      Serial.println(F("800Hz"));
      break;
    case 14: 
      Serial.println(F("1600Hz"));
      break;
  }
}

uint8_t overrunActive(uint32_t csPin) {
  return readRegister(INT_SOURCE,csPin)&0x01;
}

void printFIFO_CONTROL(uint8_t csPin) {
  Serial.print(F("Watermark set to : " ));
  Serial.print(readRegister(FIFO_CONTROL,csPin)&0b00111111);
  Serial.println(F("-levels"));
}

uint8_t printFIFO_STATUS(uint8_t csPin) {
  return readRegister(FIFO_STATUS,csPin);
}

uint8_t fileCount(File dir, int numTabs) {
  uint8_t fCounter = 0;
  dir.rewindDirectory();
  while (1) {
    File entry =  dir.openNextFile();
    if (! entry) {
      return fCounter - 2;
      break;
    }
    entry.close();
    fCounter++;
  }
}

void printDirectory(File dir, int numTabs) {
  dir.rewindDirectory();
  while (1) {
    File entry =  dir.openNextFile();
    if (! entry) break;
    Serial.print(entry.name());
    Serial.print("\t\t");
    Serial.println(entry.size(), DEC);
    entry.close();
  }
}

void printFiles(String filename) {
  File myFile = SD.open(filename);
  if (myFile) {
    uint8_t index = 0;
    uint16_t fCounter = 1;
    String data = String(fCounter) + ",";
    while (myFile.available()) {
      uint8_t firstByte = myFile.read();
      uint8_t secondByte = myFile.read();
      if (index != 0) {
        data += String((float)((int)secondByte<<8|firstByte)*.004);
      }
      else {
        data += String(secondByte);
      }
      if (index < 6) {
        data+=",";
        index++;
      }
      else {
        Serial.println(data);
        fCounter++;
        data = String(fCounter) + ",";
        index = 0;
      }
    }
    Serial.println("\n");
    myFile.close();
  }
  else {
    Serial.println(F("No such file"));
  }
}

void removeFile(String filename) {
  if (!SD.remove(filename)) Serial.println(F("No such file"));
  File file = SD.open("/");
  printDirectory(file, 0);
  file.close();
}

void printlast6() {
  uint8_t water1 = vals[counter-8];
  uint8_t water2 = vals[counter-7];
  
  uint8_t byte1 = vals[counter-6];
  uint8_t byte2 = vals[counter-5];
  uint8_t byte3 = vals[counter-4];
  uint8_t byte4 = vals[counter-3];
  uint8_t byte5 = vals[counter-2];
  uint8_t byte6 = vals[counter-1];

  String water = String(((int)water1<<8|water2));
  String xreading = String((float)((int)byte2<<8|byte1)*.004);
  String yreading = String((float)((int)byte4<<8|byte3)*.004);
  String zreading = String((float)((int)byte6<<8|byte5)*.004);
  Serial.println(water + "," + xreading + "," + yreading + "," + zreading);
}
```

[Speed up SPI and sensor reading - Using Arduino / Project Guidance - Arduino Forum](https://forum.arduino.cc/t/speed-up-spi-and-sensor-reading/354156/13)
