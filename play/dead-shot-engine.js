// DEAD SHOT Engine - Bug fixes + Visual overhaul
const DS={
GROUND_OFF:130,WORLD_W:1800,CANNON_X:160,
MIN_ANGLE:-Math.PI*0.92,MAX_ANGLE:-0.08,
BALL_TIMEOUT:5000,

LEVELS:[
{id:1,world:1,name:"Beachhead",balls:3,projTypes:['iron'],enemies:[{x:700,y:0,type:'skeleton'}],structures:[{m:'wood',x:670,y:0,w:100,h:15},{m:'wood',x:650,y:0,w:15,h:60,stack:0},{m:'wood',x:720,y:0,w:15,h:60,stack:0}],stars:[1500,3000,5000]},
{id:2,world:1,name:"Palm Cove",balls:3,projTypes:['iron'],enemies:[{x:650,y:0,type:'skeleton'},{x:750,y:0,type:'skeleton'}],structures:[{m:'wood',x:650,y:0,w:15,h:60,stack:0},{m:'wood',x:750,y:0,w:15,h:60,stack:0},{m:'wood',x:700,y:0,w:120,h:15,ontop:60}],stars:[2000,4000,6000]},
{id:3,world:1,name:"Tidal Fort",balls:4,projTypes:['iron'],enemies:[{x:580,y:0,type:'skeleton'},{x:700,y:0,type:'skeleton'},{x:820,y:0,type:'skeleton'}],structures:[{m:'wood',x:580,y:0,w:15,h:60,stack:0},{m:'wood',x:700,y:0,w:15,h:60,stack:0},{m:'wood',x:820,y:0,w:15,h:60,stack:0},{m:'wood',x:640,y:0,w:120,h:15,ontop:60},{m:'wood',x:760,y:0,w:120,h:15,ontop:60}],stars:[3000,5000,8000]},
{id:4,world:1,name:"Bomb Bay",balls:4,projTypes:['iron','bomb'],enemies:[{x:640,y:0,type:'skeleton'},{x:760,y:0,type:'skeleton'},{x:700,y:0,type:'skeleton',ontop:80}],structures:[{m:'wood',x:640,y:0,w:15,h:80,stack:0},{m:'wood',x:760,y:0,w:15,h:80,stack:0},{m:'wood',x:700,y:0,w:140,h:15,ontop:80},{m:'wood',x:620,y:0,w:160,h:20,stack:0}],special:{bomb:2},stars:[4000,7000,10000]},
{id:5,world:2,name:"Dock Battle",balls:4,projTypes:['iron','bomb'],enemies:[{x:650,y:0,type:'captain'},{x:800,y:0,type:'captain'}],structures:[{m:'stone',x:650,y:0,w:20,h:80,stack:0},{m:'stone',x:800,y:0,w:20,h:80,stack:0},{m:'wood',x:725,y:0,w:180,h:15,ontop:80},{m:'wood',x:725,y:0,w:15,h:50,stack:0}],special:{bomb:1},stars:[5000,8000,12000]},
{id:6,world:2,name:"Pier Assault",balls:5,projTypes:['iron','bomb','chain'],enemies:[{x:610,y:0,type:'skeleton'},{x:710,y:0,type:'skeleton'},{x:810,y:0,type:'captain'}],structures:[{m:'stone',x:610,y:0,w:20,h:70,stack:0},{m:'stone',x:810,y:0,w:20,h:70,stack:0},{m:'wood',x:710,y:0,w:220,h:15,ontop:70},{m:'wood',x:660,y:0,w:15,h:50,stack:0},{m:'wood',x:760,y:0,w:15,h:50,stack:0}],special:{bomb:1,chain:1},stars:[5000,9000,14000]},
{id:7,world:2,name:"Rum Runner",balls:5,projTypes:['iron','bomb','grog'],enemies:[{x:630,y:0,type:'skeleton'},{x:730,y:0,type:'captain'},{x:830,y:0,type:'skeleton'}],structures:[{m:'wood',x:630,y:0,w:15,h:70,stack:0},{m:'wood',x:730,y:0,w:15,h:70,stack:0},{m:'wood',x:830,y:0,w:15,h:70,stack:0},{m:'wood',x:680,y:0,w:120,h:15,ontop:70},{m:'wood',x:780,y:0,w:120,h:15,ontop:70}],special:{bomb:1,grog:2},stars:[6000,10000,15000]},
{id:8,world:2,name:"Cannon Duel",balls:5,projTypes:['iron','bomb','chain'],enemies:[{x:670,y:0,type:'cannoneer'},{x:770,y:0,type:'skeleton'},{x:770,y:0,type:'skeleton',ontop:80}],structures:[{m:'stone',x:670,y:0,w:20,h:80,stack:0},{m:'stone',x:770,y:0,w:20,h:80,stack:0},{m:'wood',x:720,y:0,w:120,h:15,ontop:80},{m:'stone',x:720,y:0,w:120,h:20,stack:0}],special:{bomb:1,chain:2},stars:[7000,12000,18000]},
{id:9,world:3,name:"Skull Gate",balls:5,projTypes:['iron','bomb','chain','grog'],enemies:[{x:650,y:0,type:'captain'},{x:750,y:0,type:'captain'},{x:700,y:0,type:'skeleton',ontop:100}],structures:[{m:'stone',x:650,y:0,w:20,h:100,stack:0},{m:'stone',x:750,y:0,w:20,h:100,stack:0},{m:'stone',x:700,y:0,w:120,h:20,ontop:100},{m:'wood',x:670,y:0,w:15,h:50,stack:0},{m:'wood',x:730,y:0,w:15,h:50,stack:0}],special:{bomb:1,chain:1,grog:1},stars:[8000,14000,20000]},
{id:10,world:3,name:"Lava Moat",balls:6,projTypes:['iron','bomb','chain','grog'],enemies:[{x:610,y:0,type:'captain'},{x:710,y:0,type:'cannoneer'},{x:810,y:0,type:'captain'},{x:710,y:0,type:'skeleton',ontop:110}],structures:[{m:'stone',x:610,y:0,w:20,h:110,stack:0},{m:'stone',x:810,y:0,w:20,h:110,stack:0},{m:'stone',x:710,y:0,w:220,h:20,ontop:110},{m:'wood',x:660,y:0,w:120,h:15,ontop:55},{m:'wood',x:760,y:0,w:120,h:15,ontop:55}],special:{bomb:2,chain:1,grog:1},stars:[10000,16000,24000]},
{id:11,world:3,name:"Ghost Bay",balls:6,projTypes:['iron','bomb','chain','grog'],enemies:[{x:630,y:0,type:'skeleton'},{x:730,y:0,type:'captain'},{x:830,y:0,type:'skeleton'},{x:730,y:0,type:'cannoneer',ontop:120}],structures:[{m:'stone',x:630,y:0,w:25,h:120,stack:0},{m:'stone',x:830,y:0,w:25,h:120,stack:0},{m:'stone',x:730,y:0,w:220,h:20,ontop:120},{m:'stone',x:730,y:0,w:20,h:60,stack:0},{m:'wood',x:680,y:0,w:120,h:15,ontop:60},{m:'wood',x:780,y:0,w:120,h:15,ontop:60}],special:{bomb:2,chain:2,grog:1},stars:[12000,20000,28000]},
{id:12,world:3,name:"Kraken's Lair",balls:7,projTypes:['iron','bomb','chain','grog'],enemies:[{x:610,y:0,type:'captain'},{x:710,y:0,type:'cannoneer'},{x:810,y:0,type:'captain'},{x:660,y:0,type:'skeleton',ontop:130},{x:760,y:0,type:'skeleton',ontop:130}],structures:[{m:'stone',x:610,y:0,w:25,h:130,stack:0},{m:'stone',x:810,y:0,w:25,h:130,stack:0},{m:'stone',x:710,y:0,w:220,h:25,ontop:130},{m:'stone',x:660,y:0,w:20,h:60,stack:0},{m:'stone',x:760,y:0,w:20,h:60,stack:0},{m:'wood',x:710,y:0,w:120,h:15,ontop:60},{m:'wood',x:610,y:0,w:80,h:15,ontop:60},{m:'wood',x:810,y:0,w:80,h:15,ontop:60}],special:{bomb:3,chain:2,grog:2},stars:[15000,25000,35000]}
],

// Audio
audioCtx:null,
initAudio(){if(!this.audioCtx)this.audioCtx=new(window.AudioContext||window.webkitAudioContext)()},
playSound(type){
if(!this.audioCtx)return;
try{
const o=this.audioCtx.createOscillator(),g=this.audioCtx.createGain();
o.connect(g);g.connect(this.audioCtx.destination);
const t=this.audioCtx.currentTime;
if(type==='fire'){o.type='sawtooth';o.frequency.setValueAtTime(80,t);o.frequency.exponentialRampToValueAtTime(20,t+.4);g.gain.setValueAtTime(.3,t);g.gain.exponentialRampToValueAtTime(.001,t+.4);o.start(t);o.stop(t+.4)}
else if(type==='hit'){o.type='sine';o.frequency.setValueAtTime(120,t);g.gain.setValueAtTime(.2,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.start(t);o.stop(t+.3)}
else if(type==='explode'){o.type='sawtooth';o.frequency.setValueAtTime(60,t);g.gain.setValueAtTime(.4,t);g.gain.exponentialRampToValueAtTime(.001,t+.8);o.start(t);o.stop(t+.8)}
else if(type==='kill'){o.type='sine';o.frequency.setValueAtTime(440,t);o.frequency.setValueAtTime(660,t+.08);o.frequency.setValueAtTime(880,t+.16);g.gain.setValueAtTime(.15,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.start(t);o.stop(t+.3)}
else if(type==='star'){o.type='sine';o.frequency.setValueAtTime(880,t);o.frequency.exponentialRampToValueAtTime(1760,t+.3);g.gain.setValueAtTime(.15,t);g.gain.exponentialRampToValueAtTime(.001,t+.4);o.start(t);o.stop(t+.4)}
else if(type==='click'){o.type='sine';o.frequency.setValueAtTime(600,t);g.gain.setValueAtTime(.1,t);g.gain.exponentialRampToValueAtTime(.001,t+.05);o.start(t);o.stop(t+.05)}
else if(type==='woodcrack'){const buf=this.audioCtx.createBuffer(1,this.audioCtx.sampleRate*.2,this.audioCtx.sampleRate);const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.exp(-i/d.length*5);const s=this.audioCtx.createBufferSource();s.buffer=buf;const f=this.audioCtx.createBiquadFilter();f.type='bandpass';f.frequency.value=1400;f.Q.value=2;s.connect(f);f.connect(g);g.gain.setValueAtTime(.2,t);g.gain.exponentialRampToValueAtTime(.001,t+.2);s.start(t);s.stop(t+.2)}
}catch(e){}
},

// Decorations per world
genDecorations(wld,groundY){
const d=[];
if(wld===1){
d.push({type:'palm',x:60,h:70,s:0.9});
d.push({type:'palm',x:320,h:80,s:1});
d.push({type:'palm',x:480,h:65,s:0.8});
d.push({type:'barrel',x:240});
d.push({type:'crate',x:400});
d.push({type:'barrel',x:550});
}else if(wld===2){
d.push({type:'crate',x:80});
d.push({type:'barrel',x:200});
d.push({type:'anchor',x:350});
d.push({type:'crate',x:500});
d.push({type:'barrel',x:420});
}else{
d.push({type:'torch',x:100});
d.push({type:'skull_rock',x:300});
d.push({type:'torch',x:450});
d.push({type:'crate',x:550});
}
return d;
},

// Draw decorations
drawDeco(ctx,deco,groundY,t){
deco.forEach(d=>{
ctx.save();
if(d.type==='palm'){
const bx=d.x,by=groundY;
ctx.fillStyle='#6d4c21';
ctx.beginPath();ctx.moveTo(bx-6,by);ctx.lineTo(bx+6,by);
ctx.quadraticCurveTo(bx+8,by-d.h*0.5,bx+3,by-d.h);
ctx.quadraticCurveTo(bx-2,by-d.h,bx-3,by-d.h);
ctx.quadraticCurveTo(bx-8,by-d.h*0.5,bx-6,by);
ctx.fill();
for(let i=0;i<6;i++){
const a=-Math.PI/2+(i-2.5)*0.55+Math.sin(t*0.0015+i)*0.04;
ctx.save();ctx.translate(bx,by-d.h);ctx.rotate(a);
ctx.fillStyle=i%2?'#2e7d32':'#388e3c';
ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(15,-8,35+Math.random()*5,-3);ctx.quadraticCurveTo(15,5,0,0);ctx.fill();
ctx.restore();
}
}else if(d.type==='barrel'){
ctx.fillStyle='#5d3a1a';
ctx.fillRect(d.x-10,groundY-18,20,18);
ctx.strokeStyle='#8B6914';ctx.lineWidth=1.5;
ctx.strokeRect(d.x-10,groundY-18,20,18);
ctx.strokeStyle='#a07830';
ctx.beginPath();ctx.moveTo(d.x-10,groundY-14);ctx.lineTo(d.x+10,groundY-14);ctx.stroke();
ctx.beginPath();ctx.moveTo(d.x-10,groundY-6);ctx.lineTo(d.x+10,groundY-6);ctx.stroke();
}else if(d.type==='crate'){
ctx.fillStyle='#7a5a30';ctx.fillRect(d.x-12,groundY-14,24,14);
ctx.strokeStyle='#5a3a1a';ctx.lineWidth=1.5;ctx.strokeRect(d.x-12,groundY-14,24,14);
ctx.beginPath();ctx.moveTo(d.x-12,groundY-14);ctx.lineTo(d.x+12,groundY);ctx.moveTo(d.x+12,groundY-14);ctx.lineTo(d.x-12,groundY);ctx.stroke();
}else if(d.type==='anchor'){
ctx.strokeStyle='#555';ctx.lineWidth=3;
ctx.beginPath();ctx.moveTo(d.x,groundY-25);ctx.lineTo(d.x,groundY-5);ctx.stroke();
ctx.beginPath();ctx.arc(d.x,groundY-5,8,0,Math.PI);ctx.stroke();
ctx.beginPath();ctx.moveTo(d.x-10,groundY-20);ctx.lineTo(d.x+10,groundY-20);ctx.stroke();
ctx.fillStyle='#555';ctx.beginPath();ctx.arc(d.x,groundY-25,3,0,Math.PI*2);ctx.fill();
}else if(d.type==='torch'){
ctx.fillStyle='#5a3a1a';ctx.fillRect(d.x-3,groundY-30,6,30);
const flicker=Math.sin(t*0.01)*3;
ctx.fillStyle='#ff6600';ctx.beginPath();ctx.arc(d.x,groundY-33,6+flicker*0.3,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#ffaa00';ctx.beginPath();ctx.arc(d.x,groundY-35,3,0,Math.PI*2);ctx.fill();
}else if(d.type==='skull_rock'){
ctx.fillStyle='#3a3a3a';
ctx.beginPath();ctx.moveTo(d.x-15,groundY);ctx.quadraticCurveTo(d.x,groundY-25,d.x+15,groundY);ctx.fill();
ctx.fillStyle='#222';ctx.beginPath();ctx.arc(d.x-4,groundY-12,2,0,Math.PI*2);ctx.arc(d.x+4,groundY-12,2,0,Math.PI*2);ctx.fill();
}
ctx.restore();
});
},

// Background rendering
drawBG(bgCtx,w,h,groundY,wld,waveOff,t){
const sky=bgCtx.createLinearGradient(0,0,0,h);
if(wld===1){sky.addColorStop(0,'#0d47a1');sky.addColorStop(0.3,'#1976d2');sky.addColorStop(0.5,'#42a5f5');sky.addColorStop(0.65,'#90caf9');sky.addColorStop(0.78,'#e1f5fe');sky.addColorStop(0.85,'#fff8e1');sky.addColorStop(1,'#d7ccc8')}
else if(wld===2){sky.addColorStop(0,'#1a0a2e');sky.addColorStop(0.25,'#4a148c');sky.addColorStop(0.45,'#b71c1c');sky.addColorStop(0.6,'#e65100');sky.addColorStop(0.75,'#ff8f00');sky.addColorStop(0.85,'#ffcc02');sky.addColorStop(1,'#5d4037')}
else{sky.addColorStop(0,'#050510');sky.addColorStop(0.3,'#0d0d2b');sky.addColorStop(0.5,'#1a0a2e');sky.addColorStop(0.7,'#2d1040');sky.addColorStop(0.85,'#1a0505');sky.addColorStop(1,'#1a0a00')}
bgCtx.fillStyle=sky;bgCtx.fillRect(0,0,w,h);

// Stars (world 3)
if(wld===3){
for(let i=0;i<60;i++){
const sx=(Math.sin(i*127.1)*0.5+0.5)*w,sy=(Math.sin(i*311.7)*0.3+0.1)*h;
const br=0.3+Math.sin(t*0.002+i*2.1)*0.4;
bgCtx.fillStyle=`rgba(255,255,255,${Math.max(0,br)})`;
bgCtx.beginPath();bgCtx.arc(sx,sy,0.5+Math.sin(i)*0.8,0,Math.PI*2);bgCtx.fill();
}}

// Sun/Moon
if(wld===1){
const sx=w*0.78,sy=h*0.18;
bgCtx.fillStyle='rgba(255,200,50,0.08)';bgCtx.beginPath();bgCtx.arc(sx,sy,90,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='rgba(255,210,80,0.15)';bgCtx.beginPath();bgCtx.arc(sx,sy,55,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='#ffd54f';bgCtx.beginPath();bgCtx.arc(sx,sy,32,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='#ffecb3';bgCtx.beginPath();bgCtx.arc(sx,sy,18,0,Math.PI*2);bgCtx.fill();
// Rays
bgCtx.strokeStyle='rgba(255,200,50,0.06)';bgCtx.lineWidth=2;
for(let i=0;i<12;i++){const a=i*Math.PI/6+t*0.0003;bgCtx.beginPath();bgCtx.moveTo(sx+Math.cos(a)*40,sy+Math.sin(a)*40);bgCtx.lineTo(sx+Math.cos(a)*100,sy+Math.sin(a)*100);bgCtx.stroke()}
}else if(wld===2){
const sx=w*0.5,sy=h*0.55;
bgCtx.fillStyle='rgba(255,100,0,0.1)';bgCtx.beginPath();bgCtx.arc(sx,sy,80,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='rgba(255,140,0,0.2)';bgCtx.beginPath();bgCtx.arc(sx,sy,50,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='#ff6d00';bgCtx.beginPath();bgCtx.arc(sx,sy,30,0,Math.PI*2);bgCtx.fill();
}else{
const mx=w*0.2,my=h*0.12;
bgCtx.fillStyle='rgba(200,200,220,0.05)';bgCtx.beginPath();bgCtx.arc(mx,my,40,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='#cfd8dc';bgCtx.beginPath();bgCtx.arc(mx,my,22,0,Math.PI*2);bgCtx.fill();
bgCtx.fillStyle='#0d0d2b';bgCtx.beginPath();bgCtx.arc(mx+8,my-3,18,0,Math.PI*2);bgCtx.fill();
}

// Mountains
const mY=h*0.72;
bgCtx.fillStyle=wld===1?'#2e7d32':wld===2?'#3e2723':'#1a0a2e';
bgCtx.beginPath();bgCtx.moveTo(0,mY+20);
bgCtx.lineTo(w*0.05,mY);bgCtx.lineTo(w*0.12,mY-15);bgCtx.lineTo(w*0.2,mY+5);bgCtx.lineTo(w*0.3,mY-10);bgCtx.lineTo(w*0.4,mY+10);
bgCtx.lineTo(w*0.5,mY-5);bgCtx.lineTo(w*0.6,mY+15);bgCtx.lineTo(w*0.7,mY-20);bgCtx.lineTo(w*0.8,mY);bgCtx.lineTo(w*0.9,mY-12);bgCtx.lineTo(w,mY+10);
bgCtx.lineTo(w,mY+30);bgCtx.lineTo(0,mY+30);bgCtx.fill();

// Distant ocean strip (between mountains and ground)
const oTop=mY+15;
if(oTop<groundY){
const og=bgCtx.createLinearGradient(0,oTop,0,groundY+20);
if(wld===1){og.addColorStop(0,'#0288d1');og.addColorStop(1,'#01579b')}
else if(wld===2){og.addColorStop(0,'#4e342e');og.addColorStop(1,'#3e2723')}
else{og.addColorStop(0,'#1a0025');og.addColorStop(1,'#0a0010')}
bgCtx.fillStyle=og;
bgCtx.beginPath();bgCtx.moveTo(0,oTop);
for(let x=0;x<=w;x+=8)bgCtx.lineTo(x,oTop+Math.sin(x*0.012+waveOff)*4+Math.sin(x*0.025+waveOff*1.3)*2);
bgCtx.lineTo(w,groundY+20);bgCtx.lineTo(0,groundY+20);bgCtx.fill();
// Wave foam
bgCtx.strokeStyle='rgba(255,255,255,0.08)';bgCtx.lineWidth=1;
for(let r=0;r<3;r++){bgCtx.beginPath();const wy=oTop+10+r*((groundY-oTop)/4);
for(let x=0;x<=w;x+=5)bgCtx.lineTo(x,wy+Math.sin(x*0.018+waveOff+r*2)*3);bgCtx.stroke()}
}

// Clouds
bgCtx.fillStyle=wld===3?'rgba(80,40,100,0.25)':wld===2?'rgba(50,20,20,0.3)':'rgba(255,255,255,0.35)';
const cloudSeeds=[{x:0.08,y:0.08,s:1},{x:0.35,y:0.12,s:0.8},{x:0.62,y:0.06,s:1.1},{x:0.88,y:0.14,s:0.7}];
cloudSeeds.forEach((c,i)=>{
const cx=((c.x*w+t*0.008*(i%2?1:-0.7)+i*200)%(w+200))-100;
const cy=c.y*h;const s=c.s;
bgCtx.beginPath();
bgCtx.arc(cx,cy,18*s,0,Math.PI*2);bgCtx.arc(cx+16*s,cy-6*s,14*s,0,Math.PI*2);
bgCtx.arc(cx+30*s,cy-2*s,16*s,0,Math.PI*2);bgCtx.arc(cx+44*s,cy+2*s,12*s,0,Math.PI*2);
bgCtx.fill();
});

// Atmospheric haze at horizon
const haze=bgCtx.createLinearGradient(0,groundY-40,0,groundY+5);
if(wld===1){haze.addColorStop(0,'rgba(255,248,225,0)');haze.addColorStop(1,'rgba(255,248,225,0.3)')}
else if(wld===2){haze.addColorStop(0,'rgba(255,140,0,0)');haze.addColorStop(1,'rgba(255,140,0,0.15)')}
else{haze.addColorStop(0,'rgba(26,5,5,0)');haze.addColorStop(1,'rgba(26,5,5,0.4)')}
bgCtx.fillStyle=haze;bgCtx.fillRect(0,groundY-40,w,45);
},

// Draw cannon
drawCannon(ctx,cx,cy,angle,hasBalls,isDrag){
ctx.save();ctx.translate(cx,cy);
// Carriage
ctx.fillStyle='#5a3a1a';
ctx.beginPath();ctx.moveTo(-22,-5);ctx.lineTo(22,-5);ctx.lineTo(18,10);ctx.lineTo(-18,10);ctx.closePath();ctx.fill();
ctx.strokeStyle='#3a2010';ctx.lineWidth=1.5;ctx.stroke();
// Wheels
[-16,16].forEach(wx=>{
ctx.save();ctx.translate(wx,12);
ctx.fillStyle='#3a2a10';ctx.beginPath();ctx.arc(0,0,10,0,Math.PI*2);ctx.fill();
ctx.strokeStyle='#2a1a05';ctx.lineWidth=2;ctx.stroke();
ctx.strokeStyle='#6d4c21';ctx.lineWidth=1.5;
for(let i=0;i<4;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(Math.cos(a)*-7,Math.sin(a)*-7);ctx.lineTo(Math.cos(a)*7,Math.sin(a)*7);ctx.stroke()}
ctx.fillStyle='#8B6914';ctx.beginPath();ctx.arc(0,0,2.5,0,Math.PI*2);ctx.fill();
ctx.restore();
});
// Barrel
ctx.save();ctx.rotate(angle);
const bg=ctx.createLinearGradient(0,-11,0,11);bg.addColorStop(0,'#4a4a4a');bg.addColorStop(0.4,'#666');bg.addColorStop(0.6,'#555');bg.addColorStop(1,'#333');
ctx.fillStyle=bg;
ctx.beginPath();ctx.moveTo(5,-8);ctx.lineTo(50,-10);ctx.lineTo(55,-12);ctx.lineTo(58,-12);ctx.lineTo(58,12);ctx.lineTo(55,12);ctx.lineTo(50,10);ctx.lineTo(5,8);ctx.closePath();ctx.fill();
ctx.strokeStyle='#2a2a2a';ctx.lineWidth=1.5;ctx.stroke();
// Metal bands
ctx.fillStyle='#8B6914';[14,28,42].forEach(bx=>ctx.fillRect(bx,-11,3,22));
// Muzzle
ctx.fillStyle='#111';ctx.beginPath();ctx.ellipse(57,0,3,9,0,0,Math.PI*2);ctx.fill();
ctx.restore();
ctx.restore();
},

// Draw enemy
drawEnemy(ctx,body){
ctx.save();ctx.translate(body.position.x,body.position.y);
const r=18;const bob=Math.sin(Date.now()*0.003+body.position.x)*1.5;
ctx.translate(0,bob);
// Head
ctx.fillStyle='#e8d5b7';ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();
ctx.strokeStyle='#8d6e4a';ctx.lineWidth=2;ctx.stroke();
// Eye sockets
ctx.fillStyle='#1a1a1a';
ctx.beginPath();ctx.ellipse(-5,-4,4.5,5,0,0,Math.PI*2);ctx.fill();
ctx.beginPath();ctx.ellipse(5,-4,4.5,5,0,0,Math.PI*2);ctx.fill();
// Eye glow
ctx.fillStyle='rgba(255,50,50,0.6)';
ctx.beginPath();ctx.arc(-5,-4,2,0,Math.PI*2);ctx.fill();
ctx.beginPath();ctx.arc(5,-4,2,0,Math.PI*2);ctx.fill();
// Teeth
ctx.strokeStyle='#1a1a1a';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(-7,5);for(let i=0;i<5;i++){ctx.lineTo(-5+i*2.5,i%2?8:5)}ctx.stroke();
// Nose
ctx.fillStyle='#1a1a1a';ctx.beginPath();ctx.moveTo(-1,0);ctx.lineTo(1,0);ctx.lineTo(0,3);ctx.fill();
// Hat by type
if(body.enemyType==='captain'){
ctx.fillStyle='#1a1a1a';ctx.fillRect(-14,-r-3,28,6);
ctx.fillStyle='#222';ctx.beginPath();ctx.moveTo(-10,-r-3);ctx.lineTo(0,-r-16);ctx.lineTo(10,-r-3);ctx.fill();
ctx.fillStyle='#FFD700';ctx.beginPath();ctx.arc(0,-r-8,4,0,Math.PI*2);ctx.fill();
}else if(body.enemyType==='cannoneer'){
ctx.fillStyle='#8B0000';ctx.fillRect(-12,-r-4,24,6);
ctx.fillStyle='#6a0000';ctx.beginPath();ctx.moveTo(-12,-r-4);ctx.lineTo(-14,-r-4);ctx.lineTo(-12,-r+2);ctx.fill();
ctx.fillStyle='#FFD700';ctx.font='8px serif';ctx.textAlign='center';ctx.fillText('☠',0,-r-8);
}else{
ctx.fillStyle='#444';ctx.fillRect(-11,-r-3,22,5);
ctx.fillStyle='#555';ctx.beginPath();ctx.moveTo(-6,-r-3);ctx.lineTo(0,-r-10);ctx.lineTo(6,-r-3);ctx.fill();
}
// Damage
if(body.hp<body.maxHp){
ctx.strokeStyle='rgba(180,0,0,0.6)';ctx.lineWidth=1.5;
const cracks=body.maxHp-body.hp;
for(let c=0;c<cracks;c++){
ctx.beginPath();ctx.moveTo(-r*0.4+c*5,-r*0.3);ctx.lineTo(r*0.2+c*3,r*0.4);ctx.stroke();
}}
ctx.restore();
},

// Draw structure
drawStruct(ctx,body){
ctx.save();ctx.translate(body.position.x,body.position.y);ctx.rotate(body.angle);
const v=body.vertices;
ctx.beginPath();ctx.moveTo(v[0].x-body.position.x,v[0].y-body.position.y);
for(let i=1;i<v.length;i++)ctx.lineTo(v[i].x-body.position.x,v[i].y-body.position.y);
ctx.closePath();
if(body.material==='stone'){
const sg=ctx.createLinearGradient(-10,-10,10,10);
sg.addColorStop(0,body.hp<body.maxHp?'#606060':'#808080');
sg.addColorStop(1,body.hp<body.maxHp?'#505050':'#6a6a6a');
ctx.fillStyle=sg;ctx.fill();
ctx.strokeStyle='#404040';ctx.lineWidth=2;ctx.stroke();
// Brick pattern
ctx.strokeStyle='rgba(0,0,0,0.15)';ctx.lineWidth=0.5;
const hw=20,hh=20;
for(let dy=-hh;dy<hh;dy+=8){ctx.beginPath();ctx.moveTo(-hw,dy);ctx.lineTo(hw,dy);ctx.stroke()}
for(let dx=-hw;dx<hw;dx+=12){ctx.beginPath();ctx.moveTo(dx,-hh);ctx.lineTo(dx,hh);ctx.stroke()}
}else{
const wg=ctx.createLinearGradient(-10,-10,10,10);
wg.addColorStop(0,body.hp<body.maxHp?'#7a5a30':'#a0783c');
wg.addColorStop(1,body.hp<body.maxHp?'#604020':'#8B6914');
ctx.fillStyle=wg;ctx.fill();
ctx.strokeStyle='#4a2a0a';ctx.lineWidth=2;ctx.stroke();
// Wood grain
ctx.strokeStyle='rgba(90,50,10,0.2)';ctx.lineWidth=0.5;
for(let dy=-15;dy<15;dy+=4){ctx.beginPath();ctx.moveTo(-20,dy+Math.sin(dy)*1);ctx.lineTo(20,dy+Math.sin(dy+5)*1);ctx.stroke()}
}
if(body.hp<body.maxHp){
ctx.strokeStyle='rgba(0,0,0,0.5)';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(-6,-6);ctx.lineTo(4,5);ctx.moveTo(3,-4);ctx.lineTo(-5,5);ctx.stroke();
}
ctx.restore();
}
};
