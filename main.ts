basic.forever(function () {
    basic.showString("Hi")
    basic.showString("I ")
    basic.showString("Am")
    basic.showString("Chin")
    basic.showString("Yee")
    basic.showString("Heng")
    basic.showString("And")
    basic.showString("My ")
    basic.showString("Class")
    basic.showString("Number ")
    basic.showString("Is")
    basic.showLeds(`
        . # # # .
        # . . . #
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showString("Thanks ")
    basic.showString("For ")
    basic.showString("Watching ")
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
    radio.sendValue("Bye", 0)
})
