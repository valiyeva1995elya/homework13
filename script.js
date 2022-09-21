let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
function nowTime(){   
    console.log(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`)
}
nowTime();

function time (){
  let a = +prompt("Введите секунды")
  if(s + a >= 60){
    let n = Math.floor((s + a) / 60);
    let p = Math.floor((m + n) / 60);
    console.log(`${((p + h) % 24).toString().padStart(2, "0")}:${((n + m) % 60).toString().padStart(2, "0")}:${((a + s) % 60).toString().padStart(2, "0")}`)
  }else console.log(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${(s + a).toString().padStart(2, "0")}`)
}
time()
function time2(){
  let a = +prompt("Введите минуты")
  if(m + a >= 60){
    let r= Math.floor((m + a) / 60);    
    console.log(`${((h + r) % 24).toString().padStart(2, "0")}:${((m + a) % 60).toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`)
  }else console.log(`${h.toString().padStart(2, "0")}:${(m + a).toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`)
}
time2()
function time3(){
  let a = +prompt("Введите часы")
  if(h + a >= 24){
    console.log(`${((h + a) % 24).toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
  }else console.log(`${(h + a).toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`)
}
time3()


let num = Math.round(Math.random() * 100)
while (a = prompt("Введите число")){
  if (a > num){
    alert("меньше");
  }else if (a < num){
    alert("больше");
  }else if (a == num){
    alert("поздравляю!");
    break;
  }
}