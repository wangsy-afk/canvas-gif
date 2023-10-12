import { fabric } from "fabric";
import { fabricGif } from "./fabricGif";

async function init() {
  const canvas = new fabric.Canvas("canvas");
  canvas.setDimensions({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const gif1 = await fabricGif(
    "https://media.giphy.com/media/HufOeXwDOInlK/giphy.gif",
    200,
    200
  );
  gif1.set({ top: 50, left: 50 });
  canvas.add(gif1);

  const gif2 = await fabricGif(
    "https://media.giphy.com/media/11ZSwQNWba4YF2/giphy.gif",
    200,
    200
  );
  gif2.set({ top: 50, left: 300 });
  canvas.add(gif2);

  const gif3 = await fabricGif(
    "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",
    200,
    200
  );
  gif3.set({ top: 300, left: 50 });
  canvas.add(gif3);

  const gif4 = await fabricGif(
    "https://media.giphy.com/media/11RwocOdukxqN2/giphy.gif",
    200,
    200
  );
  gif4.set({ top: 350, left: 270 });
  canvas.add(gif4);

  fabric.util.requestAnimFrame(function render() {
    canvas.renderAll();
    fabric.util.requestAnimFrame(render);
  });
}

init();
