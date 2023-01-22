export class RGBGenerator {
  public generateRGB = (): number[] => {
    const resultR = Math.floor(Math.random() * (0 - 255 + 1)) + 255
    const resultG = Math.floor(Math.random() * (0 - 255 + 1)) + 255
    const resultB = Math.floor(Math.random() * (0 - 255 + 1)) + 255
    return [resultR, resultG, resultB]
  }
}