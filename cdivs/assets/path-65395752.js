import{q}from"./main-13a88e06.js";/* empty css              */q.wnd.on("load",()=>{let isAuto=!0,isStroke=!1,useAdditive=!0,divider=q(".cdivs-bg").list[1].cdivsList[0],prev=localStorage.getItem("prev"),size=120,isDecor=!1,shapeTypesHTML="";Object.keys(CDivs.Path.shapes).forEach(e=>{shapeTypesHTML+=`<option value="${e}">${e}</option>`}),q("#shapeTypes, #openType").html(shapeTypesHTML),q("#shapeTypes").on("change",(e,t)=>{CDivs.groups.test=["test",t.value],refresh()}),q("#openType").on("change",(e,t)=>{let s=t.value;isDecor=Object.keys(CDivs.Path.shapes).some(r=>r[0]==="_"&&r===s),q("#pattern").val(CDivs.Path.shapes[t.value][0]||""),q("#path").val(CDivs.Path.shapes[t.value][1].replace(/\s([A-Z])/g,`
$1`)),q("#fnc").val(CDivs.Path.shapes[t.value][3]||""),refresh()}),q("#btnAuto").on("click",(e,t)=>{q("#auto").condCl("on",isAuto=!isAuto)}),q("#btnStroke").on("click",(e,t)=>{q("#stroke").condCl("on",isStroke=!isStroke),refresh()}),q("#btnAdditive").on("click",(e,t)=>{q("#additive").condCl("on",useAdditive=!useAdditive),refresh()}),q("#btnRefresh").on("click",(e,t)=>{refresh()}),q("#copy").on("click",()=>{let e=q("#pattern").val(),t=q("#path").val().replace(/\n/g," "),s=q("#fnc").val();window.navigator.clipboard.writeText(`'test': [
	'${e}',
	'${t}',
	0, ${s}
],`)}),q("#copyPath").on("click",()=>{let e=q("#path").val().replace(/\n/g," ");window.navigator.clipboard.writeText(e)}),q("#h80, #h100, #h120").on("click",(e,t)=>{size=+q(t).attr("id").slice(1),refresh()}),q("#path, #pattern, #fnc").on("input",(e,t)=>{isAuto&&refresh()});let refresh=()=>{let path=q("#path").val(),pattern=q("#pattern").val(),fnc="",hasError=!1;try{fnc=eval(q("#fnc").val())}catch(e){hasError=!0}q("#fnc").condCl("error",hasError),!hasError&&(CDivs.Path.cache.shapes.clear(),CDivs.Path.shapes[isDecor?"_test":"test"]=[pattern,path,0,fnc],localStorage.setItem("prev",JSON.stringify({path,pattern,isDecor,fnc:q("#fnc").val()})),q("canvas").css("height",size+"px"),CDivs.Path.cache.patterns.clear(),divider.setOptions({type:isDecor?"arc":"test",addType:useAdditive?"invert":!1,decor:isDecor?"test":"lines",stroke:isStroke?1:0,strength:1,size,dur:500}))};prev&&(prev=JSON.parse(prev),isDecor=prev.isDecor,q("#path").val(prev.path),q("#pattern").val(prev.pattern||""),q("#fnc").val(prev.fnc||"")),refresh()});
