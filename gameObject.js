

AFRAME.registerComponent("fences",{
    init:function(){

        posX=-20

        posZ=85

        for(var i=0; i<=10;i++){

        var Wf1=document.createElement('a-entity')
        var Wf2=document.createElement('a-entity')
        var Wf3=document.createElement('a-entity')
        var Wf4=document.createElement('a-entity')

        posX=posX+5
        posY=2.5
        posZ=posZ-10

        var scale={x:6,y:6,z:6}

        Wf1.setAttribute("id","Wf1"+i)
        Wf2.setAttribute("id","Wf2"+i)
        Wf3.setAttribute("id","Wf3"+i)
        Wf4.setAttribute("id","Wf4"+i)

        Wf1.setAttribute("position",{x:posX,y:posY,z:-35})
        Wf2.setAttribute("position",{x:posX,y:posY,z:-25})
        Wf3.setAttribute("position",{x:-30,y:posY,z:posZ})
        Wf4.setAttribute("position",{x:-50,y:posY,z:posZ})


        Wf1.setAttribute("scale",scale)
        Wf2.setAttribute("scale",scale)
        Wf3.setAttribute("scale",scale)
        Wf4.setAttribute("scale",scale)

        // Wf1.setAttribute("rotation",{x:0,y:90,z:0})
        // Wf2.setAttribute("rotation",{x:0,y:90,z:0})
        Wf3.setAttribute("rotation",{x:0,y:90,z:0})
        Wf4.setAttribute("rotation",{x:0,y:90,z:0})

        Wf1.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
        Wf2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
        Wf3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
        Wf4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")

        Wf1.setAttribute("static-body",{})
        Wf2.setAttribute("static-body",{})
        Wf3.setAttribute("static-body",{})
        Wf4.setAttribute("static-body",{})

        var scene1=document.querySelector("#scene")
        scene1.appendChild(Wf1)
        scene1.appendChild(Wf2)
        scene1.appendChild(Wf3)
        scene1.appendChild(Wf4)

    }
}


})

AFRAME.registerComponent("boxes",{
    schema:{
        height:{type:"number",default:2},
        depth:{type:"number",default:2},
        width:{type:"number",default:2}
    },

    init:function(){
        //xposition[]
        px=[22.86, -17.35, -12.81, 0.44, -30.18, -25.89, 15.61, 29.68, 11.95, -15.40, -14.09, 34.76, 2.29, 21.77, 1.57, 34.72, 12.04, -10.90, 6.48, 15.66];
        pz=[54.56, -4.71, 14.91, 56.74, 41.13, 50.76, 57.84, 7.02, -5.24, -26.82, 27.59, -35.78, 34.52, 31.32, -9.22, 26.72, 48.90, 27.24, 9.94, 54.29 ];

        for(var i =0;i<20; i++){

            var box=document.createElement("a-entity")
            //assigning position

            posx=px[i]
            posz=pz[i]
            posy=2.2
            position={x:posx,y:posy,z:posz}

            //setting the attribute to element
            box.setAttribute("position",position)
            box.setAttribute("id","box"+i)
            box.setAttribute("geometry",{
                primitive:"box",
                height:this.data.height,
                depth:this.data.depth,
                width:this.data.width

            })

            box.setAttribute("static-body",{})
            box.setAttribute("material",{src:"./images/boxtexture1.jpg",repeat:"1 1 1"})

            var scene1=document.querySelector("#scene")
            scene1.appendChild(box)
            





        }


    }



})