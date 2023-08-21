import sharp from 'sharp';

//import sharp, { CreateOptions } from 'sharp';

export function resizeJpeg(width: number, height: number, outputPath: string): Promise<void> {
  const createOptions: CreateOptions = {
    width,
    height,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 128 },
  };

  return sharp({ create: createOptions })
    .toFormat('jpeg')
    .toFile(outputPath);
}


//tetsnjknknjk
