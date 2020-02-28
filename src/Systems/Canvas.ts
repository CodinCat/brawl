export default class Canvas {
  constructor(
    private canvasElement: HTMLCanvasElement,
    private gridSize: number,
  ) {
    this.canvasElement = canvasElement
    this.gridSize = gridSize
  }

  public drawRotatedRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    degrees: number = 0,
  ) {
    const ctx = this.getContext()
    ctx.save()
    ctx.beginPath()
    ctx.translate(
      (x + width / 2) * this.gridSize,
      (y + height / 2) * this.gridSize,
    )
    ctx.rotate((degrees * Math.PI) / 180)
    ctx.rect(
      (-width / 2) * this.gridSize,
      (-height / 2) * this.gridSize,
      width * this.gridSize,
      height * this.gridSize,
    )

    ctx.fillStyle = color
    ctx.fill()
    ctx.restore()
  }

  public drawText(
    text: string,
    x: number,
    y: number,
    color: string,
    font: string,
  ) {
    const ctx = this.getContext()
    ctx.fillStyle = color
    ctx.font = font
    ctx.fillText(text, x, y)
  }

  public getCanvas() {
    return this.canvasElement
  }

  public getContext() {
    return this.canvasElement.getContext('2d')!
  }

  public getGriddedWidth() {
    return this.getWidth() / this.gridSize
  }

  public getGriddedHeight() {
    return this.getHeight() / this.gridSize
  }

  public getWidth() {
    return this.canvasElement.width
  }

  public getHeight() {
    return this.canvasElement.height
  }
}
