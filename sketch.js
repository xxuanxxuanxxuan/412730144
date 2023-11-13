var sound1
function preload(){
  sound1 = loadSound("27522873_MotionElements_travel-inspiring-upbeat_preview.mp3") //先把音樂檔載入到sound1程式碼中
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#faf3dd")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

var w=150
var s_w =100
var fc ,fc1

function draw() {
  background("#FFF4C1");
  rectMode(CENTER) //設定方框中心點為方框的座標點
  noFill()

  
  if(sound1.isPlaying()) 
{//音樂有播放時
  fc = map(analyzer.getLevel(),0,1,0,100)
  fc1 = map(analyzer.getLevel(),0,1,0,200)
}
else
 { //音樂沒有播放
   fc =  map(mouseX,0,width,0,100)
   fc1 =  map(mouseY,0,width,0,200)
 }

  for(var y=50;y<=height+w/2;y=y+w){ 
  for(var x=50;x<=width+w/2;x=x+w){
  //畫圓，設定框線顏色與線條粗細
  stroke("#842B00")
 strokeWeight(10)
 ellipse(x,y,w+fc)
 //畫方框，設定框線顏色與線條粗細
 stroke("#AE0000")
 strokeWeight(2)
 rect(x,50,w+fc1) //此行也需要修改
 //-----------------------
 //畫小圓，設定框線顏色與線條粗細
 stroke("#ffa69e")
 strokeWeight(2)
 ellipse(x+50,y+100,s_w+fc) //此行也需要修改
 }
}
}


//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}