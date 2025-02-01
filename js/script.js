// base

const canvas = document.querySelector('canvas.webgl');


// scene
const scene = new THREE.Scene()

// test cube
const cubeGeometry = new THREE.BoxGeometry(1,1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({
    color : 0xff0000
})

const cube = new THREE.Mesh(
    cubeGeometry, cubeMaterial
)

scene.add(cube)
// sizes
const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
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

renderer.setSize(size)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.render(screen, camera)


// animate

const Clock = new THREE.Clock()
let lastElap = 