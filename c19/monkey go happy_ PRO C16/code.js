var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","6d2f8a12-7f58-49a9-988d-4d63b9dd5adf"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"BLUSAmst9Io.QiFPSBbviWL6fU9Q8g5H","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"5XX02QIjPFVDXoZo2xF4ViwMR86105Uy","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"8ZPVn163_tdOaxJtwHZRawqlBUQHrSMu","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"6d2f8a12-7f58-49a9-988d-4d63b9dd5adf":{"name":"jungle-min-min.jpg_1","sourceUrl":"assets/v3/animations/vNd4iSJfnRRr2uDi9vbmEnS6ZOiPbHFZfe0HZl18Gtw/6d2f8a12-7f58-49a9-988d-4d63b9dd5adf.png","frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":4,"version":"M_4vjqL7XOnc.UE6thCEeVjvXcUjr8Y6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/v3/animations/vNd4iSJfnRRr2uDi9vbmEnS6ZOiPbHFZfe0HZl18Gtw/6d2f8a12-7f58-49a9-988d-4d63b9dd5adf.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var theme=createSprite(200,200,10,10);
theme.setAnimation("jungle-min-min.jpg_1");
theme.velocityX=-2;
theme.x=theme.width/2;
theme.scale=1;


var monkey = createSprite(200, 200);
monkey.setAnimation("monkey");
monkey.scale=0.1;

var ground = createSprite(7, 369,900,10);
ground.velocityX=-2;




bananagroup=createGroup();

obstaclegroup=createGroup();

var survivaltime=0;


ground.x=ground.width/2;



function draw() {
  background(255);
 
  
  fill("red");
  textSize(18);
  
  if(theme.x<0){
    
    theme.x=theme.width/2;
  }
  
 
  
  survivaltime =survivaltime+ Math.round(World.frameRate/60);
  text("survivaltime:"+survivaltime,259,19);
  
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  ground.x=ground.width/2;
  monkey.collide(ground);
  
  
  
  banana();
  obstacle();
    
drawSprites();
    
}

function banana(){
  if(World.frameCount%80===0){
    var banana=createSprite(400,320,40,10);
    banana.y=randomNumber(120,200);
    banana.setAnimation("Banana");
    banana.scale=0.05;
    banana.velocityX=-2;
    banana.lifetime=200;
    bananagroup.add(banana);
  }
}

function obstacle() {
  
  if (World.frameCount%300===0) {
    var obstacle = createSprite(400, 365,10,40);
    obstacle.x=randomNumber(396,397);
    obstacle.setAnimation("Stone");
    obstacle.scale=0.09;
    obstacle.velocityX=-2;
    obstacle.lifetime=200;
    obstaclegroup.add(obstacle);
    
  }
  
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
