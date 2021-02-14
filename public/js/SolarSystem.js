/********************************************************************
 * Author  : Ali PIÇAKCI
 * ******************************************************************
 * Güneş Sistemimiz:)
 *********************************************************************/

class Planet {
    constructor(ctx, p = {}) {
        this.ctx = ctx
        this.r = p.r
        this.theta = 0
        this.radius = p.radius
        this.name = p.name
        this.sp = p.sp
        this.color = p.color
    }

    setCenter(centerX, centerY) {
        this.centerX = centerX
        this.centerY = centerY
    }

    update() {
        this.theta += this.sp
        if (this.theta > Math.PI * 2) {
            this.theta = 0
        }
    }

    draw() {
        let x = this.r * Math.cos(this.theta) + this.centerX
        let y = this.r * Math.sin(this.theta) + this.centerY
   
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color

        this.ctx.arc(x, y,this.radius , 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.strokeStyle = '#9e9e9e38'
        this.ctx.beginPath()
        this.ctx.arc(this.centerX,this.centerY, this.r, 0, 2 * Math.PI)
        this.ctx.stroke()
        

        this.update()
    }

}

class SolarSytem {

    constructor(w, h, ctx) {
        this.w = w
        this.h = h
        this.ctx = ctx
        this.centerX = w / 2
        this.centerY = h / 2
        this.sunImage = new Image(0, 0)
        this.sunImage.src = './asset/sun.jpeg'
        this.planets = []

    }

    addPlanet(p) {
        const planet = new Planet(this.ctx, p)
        planet.setCenter(this.centerX, this.centerY)
        this.planets.push(planet)
    }


    draw() {
        this.sunDraw()

        this.planets.forEach(planet => {
            planet.draw()
        })
    }


    sunDraw() {
        const ctx = this.ctx
        ctx.drawImage(this.sunImage, this.centerX -12, this.centerY - 12, 25, 25)

    }
}