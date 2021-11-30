radio.setGroup(79)
basic.forever(function () {
    radio.sendValue("R", envirobit.getRed())
    radio.sendValue("V", envirobit.getGreen())
    radio.sendValue("B", envirobit.getBlue())
})
