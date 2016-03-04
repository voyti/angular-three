export function RendererService($window) {
  'ngInject';
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize($window.innerWidth, $window.innerHeight);

  return {
    getRenderer: getRenderer,
    startRenderLoop: startRenderLoop
  };

  function getRenderer() {
    return renderer;
  }

  function startRenderLoop(renderFunction) {
    renderLoop(renderFunction);
  }

  function renderLoop(renderFunction) {
    requestAnimationFrame(_.partial(renderLoop, renderFunction));
    ((_.isFunction(renderFunction) &&  renderFunction) || angular.noop).call(this);
  }

}
