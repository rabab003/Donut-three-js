// base

const canvas = document.querySelector('canvas.webgl');


// scene
const scene = new THREE.Scene()



// GLTF LOADER
let donut = null;

const gtlfLoader = new THREE.GLTFLoader();

gtlfLoader.load(
    './assets/donut/scene.gltf',
    (gltf) => {
        donut = gltf.scene;
        donut.position.x = 1.5 
        donut.rotation.x = Math.PI * 0.2 
        donut.rotation.z =Math.PI * 0.15 

        const radius = 8.5
        donut.scale.set(radius, radius, radius)
        scene.add(donut)
})


// scroll
const transformDonut = [
    {
        rotationZ: 0.45,
        positionX:1.5
    }, {
        rotationZ: -0.45,
        positionX: -1.5
    },{
        rotationZ: 0.0314,
        positionX: 0
    }
]

let scrollY = window.scrollY 
let currenSection = 0

window.addEventListener('scroll', ()=>{
    scrollY = window.scrollY
    const newSection = Math.random(scrollY/ sizes.height)
    console.log(newSection)
})

// sizes
const sizes ={
    width: window.innerWidth,
}


// camera 
const camera = new THREE.perspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5 
scene.add(camera)

// light
const ambientLight = new THREE.ambientLight(0xfffff, 0.8)
scene.add(ambientLight)

const directionLight = new THREE.DirectionakKight(0xfffff, 1)
directionLight.position.set(1,2,0)

scene.add(directionLight)


// renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias :true,
    alpha:true,
})

renderer.setSize(sizes)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.render(screen, camera)


// animate

const Clock = new THREE.Clock()
let lastElapsedTime = 0 

const tick = () => {
    const elapsedTime = clock.getElapseTime()
    const deltaTime = elapsedTime - lastElapsedTime
    lastElapsedTime = elapsedTime

    if (!!donut){
        donut.position.y = Math.sin(elapsedTime * 0.5) * 0.1 - 0.1
    }

    lastElapsedTime= elapsedTime
    cube.rotation.y = Math.sin(elapsedTime)
    renderer.render(scene, camera)
}

tick()