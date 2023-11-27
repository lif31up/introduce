export default function Indicating(id:string):void{
  let target:HTMLElement|null = document.getElementById(id);
  if(target === null) return;
  target.style.transition = "outline 1s ease-in-out"
  target.style.outline = "solid white 2px";
  setTimeout(():void=>{
    if(target === null) return;
    target.style.outline = "solid transparent 2px";
  },1500);

  return;
}