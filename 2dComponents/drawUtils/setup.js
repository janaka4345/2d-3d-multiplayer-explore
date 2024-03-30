
const canvasHeight = 600;
const canvasWidth = 600;
function setup(p5) {
    return () => {
        p5.createCanvas(canvasWidth, canvasHeight);
        // p5.background(255, 0, 0);

    };
}
export default setup;