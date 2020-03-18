var marker = true;
var markerTwo = true;
function count() {
  marker = false;
}

// Мы вызываем функцию сразу, а когда прокрутка доходит до контрольной точки, вызываем анимацию
//                          Функция делает задержку куба для прелоадера и прокрутки
window.addEventListener("load", function(){  
  if(window.pageYOffset + $(window).outerHeight() < $(".end_block").offset().top + $(".end_block").outerHeight() + window.innerHeight * 0.5 && window.pageYOffset > $(".end_block").offset().top){
    setTimeout(() => {
      count();
    }, 1700); 
  }
});

window.addEventListener("scroll", function(){
  if(window.pageYOffset + window.innerHeight > $(".container").offset().top + $(".container").outerHeight())
    count();
});


function cube() {
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  
  const fov = 35;
  const aspect = 2;  // the canvas default
  const near = 0.3;
  const far = 180;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 8;
  camera.position.y = 7.5;
  camera.position.x = 7.5;
  
  const scene = new THREE.Scene();
  camera.lookAt(0,1.3,0);
  scene.background = new THREE.Color(0x17171b)
  
  const emptyUnit = new THREE.Object3D();
  scene.add(emptyUnit);

  {
    const color = 0xFFFFFF;
    const intensity = 2.4;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-4, 1, 2.5);
    scene.add(light);
  }
  
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const BigGeometry = new THREE.BoxGeometry( 1.3, 1.3, 1.3);
  
  var sphere;
  function makeInstance(geometry, color, x, y, z) {
    const material = new THREE.MeshPhongMaterial({color});
    material.flatShading = true;
    
    sphere = new THREE.Mesh(geometry, material);
    emptyUnit.add(sphere);
    
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    
    return sphere;
  }
  
  const cubes = [
    makeInstance(geometry, 0x424242,  0, 0, 0),
    makeInstance(geometry, 0x424242, -1, 0, 0),
    makeInstance(geometry, 0x424242,  1, 0, 0),
    makeInstance(geometry, 0x424242,  -1, 0, 1),
    makeInstance(geometry, 0x424242,  0, 0, 1),
    makeInstance(geometry, 0x424242,  1, 0, 1),
    makeInstance(geometry, 0x424242,  -1, 0, -1),
    makeInstance(geometry, 0x424242,  0, 0, -1),
    makeInstance(geometry, 0x424242,  1, 0, -1),
    makeInstance(BigGeometry, 0x424242,  0.2, 1.2, 0.2),
    makeInstance(geometry, 0x424242, -1, 1, 0),
    makeInstance(geometry, 0x424242,  -1, 1, 1),
    makeInstance(geometry, 0x424242,  -1, 1, -1),
    makeInstance(geometry, 0x424242,  0, 1, -1),
    makeInstance(geometry, 0x424242,  1, 1, -1),
    makeInstance(geometry, 0x424242, -1, 2, 0),
    makeInstance(geometry, 0x424242,  -1, 2, 1),
    makeInstance(geometry, 0x424242,  -1, 2, -1),
    makeInstance(geometry, 0x424242,  0, 2, -1),
    makeInstance(geometry, 0x424242,  1, 2, -1),
  ];
  
  function resizeRendererToDisplaySize(renderer) { // Убираем пиксельность 
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    } 
    return needResize;
  }
  
  function render(time) {
    time *= 0.001;  // convert time to seconds
    // scene.rotateY(.01);
    // cubes[4].position.x+=0.066
    if (resizeRendererToDisplaySize(renderer)) { // Делаем отзывчивость 
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    if(!marker){
      // emptyUnit.rotation.y+=0.01;
      if(markerTwo){
          gsap.to(cubes[2].position, {duration: 1.5, x:3, ease: "expo"});
          gsap.to(cubes[8].position, {duration: 1.5, x:3, ease: "expo"});
          gsap.to(cubes[14].position, {duration: 1.5, x:3, ease: "expo"});
          gsap.to(cubes[19].position, {duration: 1.5, x:3, ease: "expo"});
          markerTwo = false;
      }
    }
    renderer.render(scene, camera);
    
    requestAnimationFrame(render);
  }
    
  requestAnimationFrame(render);
  // gsap.from(emptyUnit.rotation, {duration: 1, y: 3});
  function hideCubes1(){
      gsap.to(cubes[2].position, {duration: 1, x:1, ease: "expo"});
      gsap.to(cubes[8].position, {duration: 1, x:1, ease: "expo"});
      gsap.to(cubes[14].position, {duration: 1, x:1, ease: "expo"});
      gsap.to(cubes[19].position, {duration: 1, x:1, ease: "expo"});
  }
  function hideCubes2(){
      gsap.to(cubes[11].position, {duration: 1, x:-1, ease: "expo"});
      gsap.to(cubes[15].position, {duration: 1, x:-1, ease: "expo"});
      gsap.to(cubes[16].position, {duration: 1, x:-1, ease: "expo"}); 
  }
  function hideCubes3(){
      gsap.to(cubes[18].position, {duration: 1, y: 2, z: -1, ease: "expo"});
      gsap.to(cubes[17].position, {duration: 1, y: 2, z:-1, ease: "expo"});
      gsap.to(cubes[12].position, {duration: 1, y: 1, z:-1, ease: "expo"});
  }
  function hideCubes4(){
      gsap.to(cubes[3].position, {duration: 1, y: 0, ease: "expo"});
      gsap.to(cubes[4].position, {duration: 1, y: 0, ease: "expo"});
      gsap.to(cubes[5].position, {duration: 1, y: 0, ease: "expo"});
  }
  function hideCubes5(){
      gsap.to(cubes[9].position, {duration: 1, x: .2, y: 1.2, z: .2, ease: "expo"});
      gsap.to(cubes[9].scale, {duration: 1, x: 1, y: 1, z: 1, ease: "expo"});
  }
  
  
  $(".cube_animation_1").on('click', function(e) {
      e.preventDefault();
      hideCubes2();
      hideCubes3();
      hideCubes4();
      hideCubes5();
      gsap.to(cubes[2].position, {duration: 1.5, x:3, ease: "expo"});
      gsap.to(cubes[8].position, {duration: 1.5, x:3, ease: "expo"});
      gsap.to(cubes[14].position, {duration: 1.5, x:3, ease: "expo"});
      gsap.to(cubes[19].position, {duration: 1.5, x:3, ease: "expo"});
  });
  $(".cube_animation_2").on('click', function(e) {
      e.preventDefault();
      hideCubes1();
      hideCubes3();
      hideCubes4();
      hideCubes5();
      gsap.to(cubes[11].position, {duration: 1.5, x:-2, ease: "expo"});
      gsap.to(cubes[15].position, {duration: 1.5, x:-2, ease: "expo"});
      gsap.to(cubes[16].position, {duration: 1.5, x:-3, ease: "expo"});
  });
  $(".cube_animation_3").on('click', function(e) {
      e.preventDefault();
      hideCubes1();
      hideCubes2();
      hideCubes4();
      hideCubes5();
      gsap.to(cubes[18].position, {duration: 1.5, y: 3.5, z:-2.5, ease: "expo"});
      gsap.to(cubes[17].position, {duration: 1.5, y: 3.5, z:-2.5, ease: "expo"});
      gsap.to(cubes[12].position, {duration: 1.5, y: 2.5, z:-2.5, ease: "expo"});
  });
  $(".cube_animation_4").on('click', function(e) {
      e.preventDefault();
      hideCubes1();
      hideCubes2();
      hideCubes3();
      hideCubes5();
      gsap.to(cubes[3].position, {duration: 1.5, y: -1, ease: "expo"});
      gsap.to(cubes[4].position, {duration: 1.5, y: -2, ease: "expo"});
      gsap.to(cubes[5].position, {duration: 1.5, y: -1, ease: "expo"});
  });
  $(".cube_animation_5").on('click', function(e) {
      e.preventDefault();
      hideCubes1();
      hideCubes2();
      hideCubes3();
      hideCubes4();
      gsap.to(cubes[9].position, {duration: 1.5, x: .499, y: 1.499, z: .499, ease: "expo"});
      gsap.to(cubes[9].scale, {duration: 1.5, x: 1.54, y: 1.54, z: 1.54, ease: "expo"});
  });
}
cube();