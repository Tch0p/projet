radio.onReceivedNumber(function (receivedNumber) {
    if (pins.analogReadPin(AnalogPin.P1) <= 200) {
        if (pins.analogReadPin(AnalogPin.P2) <= 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
            pins.analogWritePin(AnalogPin.P0, 1023)
            basic.pause(2000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            pins.analogWritePin(AnalogPin.P0, 0)
        }
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P1) <= 200) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P0, 495)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P0, 0)
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
