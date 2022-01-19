function TaskTwoSketch(p5) {
  let a = 0.0;
  let h = 0;
  let b = 0;
  let max = 2000;
  let off = 0;
  let xW = 150;
  let yW = 200;

  p5.setup = () => {
    p5.colorMode(p5.HSL, 360);
    p5.rectMode(p5.CENTER);
    p5.frameRate(30);
    if (p5.windowWidth < 500) {
      p5.createCanvas(300, 300);
      xW = 120;
      yW = 120;
    } else {
      p5.createCanvas(400, 600);
      xW = 150;
      yW = 250;
    }
  };

  function circy(x, y, phase, size, exist) {
    p5.push();
    let hueee = 0;
    if (p5.windowWidth < 500) {
      hueee = 83;
    } else {
      hueee = p5.map(p5.mouseY, 0, p5.height, 83, 0, true);
    }

    p5.fill(hueee, 360, b);
    let x1 = xW * p5.cos(a + phase + exist * (p5.PI / 2));
    let y1 = yW * p5.sin(a + phase + exist * (p5.PI / 2));
    p5.circle(
      x1 * p5.sin(a + phase * 10 * p5.sin(a / 4) * (p5.PI / 2)),
      y1 * p5.sin(a + phase * 10 * p5.sin(a / 4) * (p5.PI / 3)),
      8
    );
    b = b + 360 / max;
    p5.pop();
  }

  p5.draw = () => {
    p5.randomSeed(150);
    p5.background(0);
    let inc = p5.TWO_PI / 200.0;

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    // p5.rotate(p5.map(p5.mouseX, -p5.width, p5.windowWidth, 0, p5.PI, true));
    p5.noStroke();

    for (let j = 1; j <= max; j++) {
      circy(0, 0, (j * p5.PI) / max, 60 * j, 40, j);
    }

    if (b > 100) {
      b = 360 / max;
    }
    if (h > 360) {
      h = 0;
    }
    h += 0.5;
    p5.pop();

    if (p5.windowWidth < 500) {
      off = 0;
    } else {
      off = p5.map(p5.mouseX, 0, p5.windowWidth, 0, inc, true);
    }

    a += inc / 6 + off;
  };
}

export default TaskTwoSketch;
