
const canvasHeight = 600;
const canvasWidth = 600;
function setup(p5) {
    return () => {
        p5.createCanvas(canvasWidth, canvasHeight);
    };
}
export default setup;