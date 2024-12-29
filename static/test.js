
// Rotating 3D Shield
const shieldCanvas = document.getElementById('logo-3d');
const shieldRenderer = new THREE.WebGLRenderer({ canvas: shieldCanvas, alpha: true });
const shieldScene = new THREE.Scene();
const shieldCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
shieldCamera.position.z = 2;

const shieldGeometry = new THREE.IcosahedronGeometry(1, 1);
const shieldMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500, wireframe: true });
const shieldMesh = new THREE.Mesh(shieldGeometry, shieldMaterial);
shieldScene.add(shieldMesh);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
shieldScene.add(light);

// Variables to handle mouse interaction and movement
let mouseX = 0, mouseY = 0;
let shieldPosition = new THREE.Vector3(0, 0, 0);
let attractionStrength = 0.05;  // Controls how strongly the shield is attracted to the mouse

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Map mouse position to -1 to 1
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Map mouse position to -1 to 1
});

// Update the shield's movement and position
function updateShieldPosition() {
    const targetPosition = new THREE.Vector3(mouseX * 3, mouseY * 3, 0);  // Target position near mouse pointer
    shieldPosition.lerp(targetPosition, attractionStrength);  // Smoothly move towards the target position
    shieldMesh.position.copy(shieldPosition);  // Apply the updated position to the shield
}

// Adjust the renderer size on window resize
window.addEventListener('resize', () => {
    shieldRenderer.setSize(window.innerWidth, window.innerHeight);
    shieldCamera.aspect = window.innerWidth / window.innerHeight;
    shieldCamera.updateProjectionMatrix();
});

// Function to animate the shield's rotation and dynamic movement
function animateShield() {
    shieldMesh.rotation.x += 0.01; // Rotation around X-axis
    shieldMesh.rotation.y += 0.01; // Rotation around Y-axis

    updateShieldPosition(); // Update position to follow mouse

    shieldRenderer.render(shieldScene, shieldCamera);
    requestAnimationFrame(animateShield); // Repeat the animation
}

animateShield();