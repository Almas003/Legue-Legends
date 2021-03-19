import "App.css";
 import JSONDATA from 'data.json'

function   App(){
 return{
   <div className="App">
<input type="text" placeholder="Search..."/>
{JSONDATA.map{{val, key}=>{
  return <div> {val.name}
}}}
$(".langswitcher a").on("click",function(e){
    e.preventDefault();
    $(".langswitcher li").removeClass("active");
    $("html").attr("lang",$(this).data("lang"));
    $(this).parent().addClass("active");
  });
