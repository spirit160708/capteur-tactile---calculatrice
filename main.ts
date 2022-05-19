let nombre_1 = 0
let nombre2 = 0
input.onButtonPressed(Button.A, function () {
    nombre_1 += 1
    basic.showNumber(nombre_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    nombre_1 = 0
    nombre2 = 0
})
input.onButtonPressed(Button.B, function () {
    nombre2 += 1
    basic.showNumber(nombre2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(nombre_1 + nombre2)
})
basic.forever(function () {
	
})
