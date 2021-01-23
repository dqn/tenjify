import fs from "fs";
import { createCanvas, loadImage } from "canvas";

const aaWidth = 30;

export async function tenjify(src: string | Buffer) {
  const image = await loadImage(src);
  const canvasHeight = (aaWidth / image.width) * image.height;
  const canvas = createCanvas(aaWidth, canvasHeight);

  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, aaWidth, canvasHeight);

  const out = fs.createWriteStream(`./a.png`);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
}
