const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var drops = [];

var maxDrops = 100;

var umbrella, umbrellaImage;

var TBImage1, TBImage2, TBImage3, TBImage4;

function preload(){
    
   umbrellaImage = loadImage("images/Walking Frame/walking_1.png");
   TBImage1 = loadImage("images/thunderbolt/1.png");
   TBImage2 = loadImage("images/thunderbolt/2.png");
   TBImage3 = loadImage("images/thunderbolt/3.png");
   TBImage4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
   createCanvas(400, 400); 
    
   engine = Engine.create();
   world = engine.world;

   for(var i = 0; i < maxDrops;i+=1){

      drops.push(new Drops(random(0, 400), random(0, 400)));
   }

   umbrella = new Umbrella(width/2, height - 127);
}

function draw(){
   background("black");

   Engine.update(engine);
   
   for (var k = 0; k < drops.length; k ++){

      drops[k].display();
      drops[k].update();
   }

   umbrella.display();

   if(frameCount % 12 === 0){

      var randomWeather = Math.round(random(1, 4));

      switch(randomWeather){

         case 1: image(TBImage1, width/2, height/2);
         break;

         case 2: image(TBImage2, width/2, height/2)
         break;

         case 3: image(TBImage3, width/2, height/2)
         break;

         case 4: image(TBImage4, width/2, height/2)
         break;

         default: break;
      }

      console.log(randomWeather);
   }
}   
