export default class Canvas {
  constructor(private canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement
  }

  public drawRotatedRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    radian: number = 0,
  ) {
    const ctx = this.getContext()
    ctx.save()
    ctx.beginPath()
    ctx.translate(x + width / 2, y + height / 2)
    ctx.rotate(radian)
    ctx.rect(-width / 2, -height / 2, width, height)

    ctx.fillStyle = color
    ctx.fill()
    ctx.restore()
  }

  public drawCircle(x: number, y: number, r: number, color: string) {
    const ctx = this.getContext()
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill()
  }

  public drawText(
    text: string,
    x: number,
    y: number,
    color: string,
    font: string = '10px arial',
  ) {
    const ctx = this.getContext()
    ctx.fillStyle = color
    ctx.font = font
    ctx.fillText(text, x, y)
  }

  public getContext() {
    return this.canvasElement.getContext('2d')!
  }

  public getWidth() {
    return this.canvasElement.width
  }

  public getHeight() {
    return this.canvasElement.height
  }
}
