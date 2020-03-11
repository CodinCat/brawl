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
    radian: number = 0,
  ) {
    const ctx = this.getContext()
    ctx.save()
    ctx.beginPath()
    ctx.translate(
      (x + width / 2) * this.gridSize,
      (y + height / 2) * this.gridSize,
    )
    ctx.rotate(radian)
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

  public drawCircle(x: number, y: number, r: number, color: string) {
    const ctx = this.getContext()
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(
      x * this.gridSize,
      y * this.gridSize,
      r * this.gridSize,
      0,
      2 * Math.PI,
    )
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
    ctx.fillText(text, x * this.gridSize, y * this.gridSize)
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
