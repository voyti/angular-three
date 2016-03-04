export function RendererService($window) {
  'ngInject';
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize($window.innerWidth, $window.innerHeight);

  return {
    getRenderer: getRenderer,
    getRenderLoop: getRenderLoop
  };

  function getRenderer() {
    return renderer;
  }

  function getRenderLoop() {
    return renderLoop;
  }

  function renderLoop(renderFunction) {
    requestAnimationFrame(_.partial(renderLoop, renderFunction));
    ((_.isFunction(renderFunction) &&  renderFunction) || angular.noop).call(this);
  }

}
