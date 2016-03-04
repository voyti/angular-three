export function CameraService($window) {
  'ngInject';
  let camera = new THREE.PerspectiveCamera(50, $window.innerWidth / $window.innerHeight, 1, 10000);

  function getCamera() {
    return camera;
  }

  return {
    getCamera: getCamera
  };
}
