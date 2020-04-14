 class Filters {
   constructor(canvas, ctx) {
     this.canvas = canvas
     this.ctx = ctx

   }
   darkenFilter(amount = 30) {
     const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height)
     console.log(canvasData.data[0])
     for (let i = 0; i < canvasData.data.length; i += 4) {
       canvasData.data[i] -= amount;
       canvasData.data[i + 1] -= amount;
       canvasData.data[i + 2] -= amount;
     }
     this.ctx.putImageData(canvasData, 0, 0)
   }

   lightenFilter(amount = 30) {
     const canvasData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
     for (let i = 0; i < canvasData.data.length; i += 4) {
       canvasData.data[i] += amount;
       canvasData.data[i + 1] += amount;
       canvasData.data[i + 2] += amount;
     }
     this.ctx.putImageData(canvasData, 0, 0);
   }
 }