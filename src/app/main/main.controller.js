export class MainController {
  constructor (CameraService, SceneService, RendererService) {
    'ngInject';
    let camera = CameraService.getCamera();
    let scene = SceneService.getScene();
    let renderer = RendererService.getRenderer();
    let geometry = new THREE.CubeGeometry(200, 200, 200);
    let material = new THREE.MeshNormalMaterial();
    let mesh = new THREE.Mesh(geometry, material);

    camera.position.z = 500;
    scene.add(camera);

    scene.add(mesh);

    angular.element('body').append(renderer.domElement);

    function render() {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
    }

    RendererService.getRenderLoop()(render);

  }
}
