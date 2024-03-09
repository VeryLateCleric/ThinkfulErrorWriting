function getCarColor(car) {
    try {
        if (car && car.color) {
            return car.color;
        } else {
            throw new Error("Color undefined");
        }
    } catch (error) {
        return "Color unknown";
    }
}

//do not remove
module.exports = getCarColor;
