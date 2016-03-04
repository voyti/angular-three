export function SceneService() {
  'ngInject';
  let scene = new THREE.Scene();

  function getScene() {
    return scene;
  }

  return {
    getScene: getScene
  };
}
