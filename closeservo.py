#!/usr/bin/env python
import RPi.GPIO as gpio 
import time 
 
# Servo-GPIO (PWM-GPIO 18, Pin 12) 
servopin = 04
 
# GPIO initialisieren 
gpio.setmode(gpio.BCM) 
gpio.setup(servopin, gpio.OUT) 
 
# PWM-Frequenz auf 50 Hz setzen 
servo = gpio.PWM(servopin, 50) 
 
# PWM starten, Servo auf 0 Grad 
servo.start(0) 

servo.ChangeDutyCycle(10)
time.sleep(0.41)
servo.ChangeDutyCycle(0)


