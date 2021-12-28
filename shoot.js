AFRAME.registerComponent("bullets",{
    init:function(){
this.showBullet()
    },

    showBullet:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var bullet=document.createElement('a-entity')
                bullet.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1


                })
                bullet.setAttribute("material","color","black")

                var cam=document.querySelector("#camera-ring")
                pos=cam.getAttribute("position")
                

                bullet.setAttribute("position",{
                    x:pos.x,y:pos.y+1,z:pos.z-0.5
                })


                bullet.setAttribute("dynamic-body",{
                    shape:"sphere",
                    mass:0
                })
                // bullet.setAttribute("velocity",{
                //     x:0,y:0,z:-1
                

                var camera=document.querySelector("#camera").object3D
                //get camera direction
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)

                bullet.setAttribute("velocity",direction.multiplyScalar(-10))


                 var scene =document.querySelector("#scene")

                 //ading event listener -(collide ) to remove bullet

                 bullet.addEventListener("collide",this.removeBullet)
                 scene.appendChild(bullet)

                console.log(bullet)

                //cam.appendChild(bullet)
                // three.js to our aframe
                this.shootSound()

            }
        })
    

    },

    removeBullet:function(e){
        //checking the original target
        console.log(e.detail.target.el)

        //checking the other entity which bullet is touched
        console.log(e.detail.body.el)

        var element=e.detail.target.el

        var elementHit=e.detail.body.el
        if(elementHit.id.includes("box")){
            elementHit.setAttribute("material",{
                opacity:1,
                transparent:true

            })

            //create cannon effect
            var impulse = new CANNON.Vec3(-2, 2 ,1)
            var WorldPoint=new CANNON.Vec3().copy(
                element.getAttribute("position")

            )

            //applyingimpulse and point vector

            elementHit.body.applyImpulse(impulse,WorldPoint)

            element.removeEventListener("collide",this.shoot)

            //remove bullets from scene

            var scene=document.querySelector("#scene")
            scene.removeChild(element)


        }
    },

    shootSound:function(){
        var entity=document.querySelector("#sound1")
        entity.components.sound.playSound()


    },
})

