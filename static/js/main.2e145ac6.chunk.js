(this.webpackJsonpface=this.webpackJsonpface||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/brain.3639c502.jpg"},110:function(e,t,a){e.exports=a(373)},115:function(e,t,a){},116:function(e,t,a){},365:function(e,t,a){},366:function(e,t,a){},367:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),l=a(53),i=a.n(l),o=(a(115),a(101)),r=a.n(o),u=(a(116),a(102)),m=a.n(u),s=function(){return c.a.createElement("div",{className:"ma4 mt0"},c.a.createElement(r.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},c.a.createElement("div",{className:"Tilt-inner pa3"},c.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:m.a})," ")))},p=a(103),b=a.n(p),f=a(6),d=a(104),g=a(105),h=a(109),E=a(108),v=a(106),w=a.n(v),N=(a(365),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return c.a.createElement("div",null,c.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures."),c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"form center pa4 br3 shadow-5"},c.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),c.a.createElement("button",{className:"w-40 grow f4 link ph3 pv2 dib white bg-light-blue btn",onClick:a},"Detect"))))}),x=(a(366),function(e){var t=e.imageUrl,a=e.box;return c.a.createElement("div",{className:"center ma"},c.a.createElement("div",{className:"absolute mt2"},c.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),c.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),y=new w.a.App({apiKey:"0f68e4b17c4a49ad9ce1a1873f2911cf"}),C=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),c=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*c,rightCol:n-t.right_col*n,bottomRow:c-t.bottom_row*c}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),y.models.predict({id:"a403429f2ddf4b49b307e318f00e528b",version:"34ce21a40cc24b6b96ffee54aabff139"},e.state.input).then((function(t){e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state,t=e.imageUrl,a=e.box;return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),c.a.createElement(x,{box:a,imageUrl:t})))}}]),a}(n.Component),B=(a(367),{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}),S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b.a,{className:"particles",params:B}),c.a.createElement("div",null,c.a.createElement(s,null)),c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/"},c.a.createElement(C,null))))},_=a(54);a(372);i.a.render(c.a.createElement(_.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null))),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.2e145ac6.chunk.js.map