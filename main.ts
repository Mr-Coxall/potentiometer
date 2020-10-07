// Created by: Mr. Coxall
// Created on: Oct 2020
// 
// This program shows the value of a Potentiometer.
let resistance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    resistance = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(resistance)
})
