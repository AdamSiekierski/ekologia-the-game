(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,i){"use strict";i.r(t);var a=i(167),n=i.n(a),o=i(0),c=i.n(o),r=i(150),l=i(34),s=i.n(l),A=i(7),u=i.n(A),b=i(155),d=i.n(b),y=(i(157),i(197)),p=i(151),m=i(198),h=i.n(m),w=Object(r.b)(h.a).withConfig({displayName:"gameWrapper__StyledBackgroundImage",componentId:"sc-1crgpcg-0"})(["height:100vh !important;display:block !important;"]),g=Object(r.b)(function(e){return c.a.createElement(p.b,{query:"1658434096",render:function(t){return c.a.createElement(w,{fixed:t.image.childImageSharp.fixed},e.children)},data:y})}).withConfig({displayName:"gameWrapper__StyledGameWrapper",componentId:"sc-1crgpcg-1"})(["width:5750px;height:100vh;"]),f=i(210),k=i(211),z=i.n(k),E=Object(r.b)(z.a).withConfig({displayName:"styledSquare__StyledSquare",componentId:"sc-1r396t7-0"})(["display:block !important;position:absolute !important;top:",";left:",";z-index:-10;"],function(e){return e.y},function(e){return e.x}),v=function(e){return c.a.createElement(p.b,{query:"1710702729",render:function(t){return c.a.createElement(E,{fixed:t.defaultSquare.childImageSharp.fixed,x:e.x,y:e.y})},data:f})},x=i(212),S=function(e){return c.a.createElement(p.b,{query:"248831565",render:function(t){return c.a.createElement(E,{fixed:t.backSquare.childImageSharp.fixed,x:e.x,y:e.y})},data:x})},C=i(213),I=function(e){return c.a.createElement(p.b,{query:"2512107158",render:function(t){return c.a.createElement(E,{fixed:t.questionSquare.childImageSharp.fixed,x:e.x,y:e.y})},data:C})},j=function(e){switch(e.type){case"question":return c.a.createElement(I,{x:e.x,y:e.y});case"back":return c.a.createElement(S,{x:e.x,y:e.y});default:return c.a.createElement(v,{x:e.x,y:e.y})}},N=r.b.div.withConfig({displayName:"windowTemplate__WindowWrapper",componentId:"y0k03v-0"})(["position:absolute;background-color:#a57934;border:1px solid #824601;border-radius:2px;z-index:10;"]),L=r.b.div.withConfig({displayName:"windowTemplate__TitleBar",componentId:"y0k03v-1"})(["width:100%;padding:2px;line-height:1;background-color:#935712;text-align:center;font-size:1.2em;"]),M=r.b.div.withConfig({displayName:"windowTemplate__Content",componentId:"y0k03v-2"})(["width:100%;font-size:1.6em;"]),q=function(e){return c.a.createElement(N,{className:e.className},c.a.createElement(L,null,e.title),c.a.createElement(M,null,e.children))},B=i(214),R=Object(r.b)(q).withConfig({displayName:"question__StyledWindow",componentId:"sc-1rw1o30-0"})(["opacity:0.95;"]),U=r.b.div.withConfig({displayName:"question__WindowWrapper",componentId:"sc-1rw1o30-1"})(["position:fixed;width:100vw;height:100vh;background-color:rgba(25,25,25,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:11;"]),T=r.b.div.withConfig({displayName:"question__QuestionWrapper",componentId:"sc-1rw1o30-2"})(["padding:5px;width:25vw;text-align:center;"]),G=r.b.button.withConfig({displayName:"question__QuestionAnswer",componentId:"sc-1rw1o30-3"})(["outline:none;font-size:0.8em;margin:2px;border:none;background-color:",";padding:3px;width:90%;"],function(e){return e.color}),Q=function(e){function t(t){var i;return(i=e.call(this,t)||this).show=i.show.bind(s()(i)),i.verifyAnswer=i.verifyAnswer.bind(s()(i)),i.state={questionNumber:null,isVisible:!1,player:null,colorA:"#E2BC52",colorB:"#E2BC52",colorC:"#E2BC52"},i}u()(t,e);var i=t.prototype;return i.show=function(e){this.setState({questionNumber:d.a.int(0,B.length-1),isVisible:!0,player:e})},i.verifyAnswer=function(e){var t=this;switch(e){case"a":this.setState({colorA:e===B[this.state.questionNumber].valid?"#228B22":"#B22222"});break;case"b":this.setState({colorB:e===B[this.state.questionNumber].valid?"#228B22":"#B22222"});break;case"c":this.setState({colorC:e===B[this.state.questionNumber].valid?"#228B22":"#B22222"})}setTimeout(function(){e===B[t.state.questionNumber].valid?(t.setState({isVisible:!1,questionNumber:null}),t.props.correctAnswerHandler()):(t.setState({isVisible:!1,questionNumber:null}),t.props.wrongAnswerHandler()),t.setState({colorA:"#E2BC52",colorB:"#E2BC52",colorC:"#E2BC52"})},2e3)},i.render=function(){var e=this;return this.state.isVisible?c.a.createElement(U,null,c.a.createElement(R,{title:"Pytanie dla gracza "+this.state.player},c.a.createElement(T,null,c.a.createElement("h3",null,B[this.state.questionNumber].question),c.a.createElement(G,{type:"button",onClick:function(){return e.verifyAnswer("a")},color:this.state.colorA},"A: ",B[this.state.questionNumber].a),c.a.createElement(G,{type:"button",onClick:function(){return e.verifyAnswer("b")},color:this.state.colorB},"B: ",B[this.state.questionNumber].b),c.a.createElement(G,{type:"button",onClick:function(){return e.verifyAnswer("c")},color:this.state.colorC},"C: ",B[this.state.questionNumber].c)))):null},t}(c.a.Component),W=i(163),Y=i.n(W),V=c.a.createContext({}),J=[{type:"default",y:"5vh"},{type:"default",y:"10vh"},{type:"default",y:"15vh"},{type:"default",y:"23vh"},{type:"question",y:"21vh"},{type:"default",y:"23vh"},{type:"back",y:"30vh"},{type:"default",y:"25vh"},{type:"default",y:"20vh"},{type:"question",y:"20vh"},{type:"default",y:"20vh"},{type:"back",y:"20vh"},{type:"default",y:"25vh"},{type:"default",y:"30vh"},{type:"question",y:"32vh"},{type:"default",y:"34vh"},{type:"question",y:"35vh"},{type:"default",y:"45vh"},{type:"default",y:"55vh"},{type:"question",y:"65vh"},{type:"default",y:"60vh"},{type:"back",y:"45vh"},{type:"default",y:"30vh"},{type:"question",y:"15vh"},{type:"question",y:"5vh"},{type:"default",y:"5vh"},{type:"default",y:"5vh"},{type:"question",y:"5vh"},{type:"default",y:"5vh"},{type:"back",y:"5vh"},{type:"question",y:"10vh"},{type:"default",y:"15vh"},{type:"back",y:"20vh"},{type:"default",y:"25vh"},{type:"question",y:"27vh"},{type:"default",y:"25vh"},{type:"default",y:"30vh"},{type:"question",y:"35vh"},{type:"default",y:"45vh"},{type:"question",y:"55vh"},{type:"default",y:"50vh"},{type:"back",y:"45vh"},{type:"default",y:"45vh"},{type:"default",y:"40vh"},{type:"question",y:"35vh"},{type:"default",y:"35vh"},{type:"default",y:"40vh"},{type:"back",y:"45vh"},{type:"question",y:"50vh"},{type:"default",y:"43vh"}],O=r.b.img.withConfig({displayName:"player1__StyledPlayerImage",componentId:"nusw9k-0"})(["z-index:10;transform:translate(25px,-10px) scale(0.7);"]),Z=r.b.div.withConfig({displayName:"player1__PlayerWrapper",componentId:"nusw9k-1"})(["position:absolute;width:100px;justify-content:center;display:flex;top:",";left:","px;transition:all 0.3s ease-in-out;"],function(e){return e.top},function(e){return e.left}),D=function(e){function t(t){var i;return(i=e.call(this,t)||this).question=c.a.createRef(),i.handleLocationChange=i.handleLocationChange.bind(s()(i)),i.correctQuestionAnswer=i.correctQuestionAnswer.bind(s()(i)),i.wrongQuestionAnswer=i.wrongQuestionAnswer.bind(s()(i)),i}u()(t,e);var i=t.prototype;return i.handleLocationChange=function(e){var t=this;switch(J[e.player1Location].type){case"question":this.question.current.show(1);break;case"back":setTimeout(function(){return t.props.back(d.a.int(2,4))},1e3);break;default:this.props.continue()}},i.correctQuestionAnswer=function(){this.props.continue()},i.wrongQuestionAnswer=function(){this.props.back(3)},i.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(V.Consumer,null,function(e){return c.a.createElement(Z,{top:J[e.player1Location].y,left:100*e.player1Location+14*e.player1Location},c.a.createElement(O,{src:Y.a,alt:"player1"}))}),c.a.createElement(Q,{ref:this.question,correctAnswerHandler:this.correctQuestionAnswer,wrongAnswerHandler:this.wrongQuestionAnswer}))},t}(c.a.Component),P=i(164),K=i.n(P),X=r.b.img.withConfig({displayName:"player2__StyledPlayerImage",componentId:"ro33ky-0"})(["z-index:10;transform:translate(-15px,-10px) scale(0.7);"]),H=r.b.div.withConfig({displayName:"player2__PlayerWrapper",componentId:"ro33ky-1"})(["position:absolute;width:100px;justify-content:center;display:flex;top:",";left:","px;transition:all 0.3s ease-in-out;"],function(e){return e.top},function(e){return e.left}),F=function(e){function t(t){var i;return(i=e.call(this,t)||this).question=c.a.createRef(),i.handleLocationChange=i.handleLocationChange.bind(s()(i)),i.correctQuestionAnswer=i.correctQuestionAnswer.bind(s()(i)),i.wrongQuestionAnswer=i.wrongQuestionAnswer.bind(s()(i)),i}u()(t,e);var i=t.prototype;return i.handleLocationChange=function(e){var t=this;switch(J[e.player2Location].type){case"question":this.question.current.show(2);break;case"back":setTimeout(function(){return t.props.back(d.a.int(2,4))},1e3);break;default:this.props.continue()}},i.correctQuestionAnswer=function(){this.props.continue()},i.wrongQuestionAnswer=function(){this.props.back(3)},i.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(V.Consumer,null,function(e){return c.a.createElement(H,{top:J[e.player2Location].y,left:100*e.player2Location+14*e.player2Location},c.a.createElement(X,{src:K.a,alt:"player2"}))}),c.a.createElement(Q,{ref:this.question,correctAnswerHandler:this.correctQuestionAnswer,wrongAnswerHandler:this.wrongQuestionAnswer}))},t}(c.a.Component),_=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this;return c.a.createElement(V.Consumer,null,function(t){return c.a.createElement("button",{onClick:t.makeAPlayerMove,disabled:t.playerTurn!==e.props.player||!t.isReadyForNext,type:"button"},"Losuj")})},t}(c.a.Component),$=Object(r.b)(q).withConfig({displayName:"playersStatus__StyledWindow",componentId:"sc-1yscioh-0"})(["bottom:0;left:50%;transform:translateX(-50%);position:fixed;width:40vw;opacity:0.9;"]),ee=r.b.div.withConfig({displayName:"playersStatus__PlayerStatusHalf",componentId:"sc-1yscioh-1"})(["width:50%;height:100%;display:inline-block;padding:5px;",";text-align:center;table{tr{td{text-align:center;border:none;width:50%;height:20px;}}}"],function(e){return e.left?"border-right: 1px solid #824601":"border-left: 1px solid #824601"}),te=r.b.img.withConfig({displayName:"playersStatus__PlayerImage",componentId:"sc-1yscioh-2"})(["height:2em;margin:0;"]),ie=function(){return c.a.createElement(V.Consumer,null,function(e){return c.a.createElement($,{title:"Gracze"},c.a.createElement(ee,{left:!0},"Gracz 1",c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Wygląd"),c.a.createElement("td",null,c.a.createElement(te,{src:Y.a}))),c.a.createElement("tr",null,c.a.createElement("td",null,"Lokalizacja"),c.a.createElement("td",null,e.player1Location+1)),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:2},"Maszyna losująca:",c.a.createElement("br",null),c.a.createElement(_,{player:1})))))),c.a.createElement(ee,{right:!0},"Gracz 2",c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Wygląd"),c.a.createElement("td",null,c.a.createElement(te,{src:K.a}))),c.a.createElement("tr",null,c.a.createElement("td",null,"Lokalizacja"),c.a.createElement("td",null,e.player2Location+1)),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:2},"Maszyna losująca:",c.a.createElement("br",null),c.a.createElement(_,{player:2})))))))})},ae=r.b.div.withConfig({displayName:"winnerScreen__WinnerScreenWrapper",componentId:"vgxtiu-0"})(["position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#824601;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:15;animation:fadein 0.5s;opacity:0.95;@keyframes fadein{from{opacity:0;}to{opacity:0.95;}}"]),ne=Object(r.b)(function(e){return c.a.createElement(p.a,e)}).withConfig({displayName:"winnerScreen__StyledLink",componentId:"vgxtiu-1"})(["display:block;outline:none;font-size:1.4em;margin-top:10px;border:none;background-color:#E2BC52;padding:3px;width:400px;text-decoration:none;color:black;text-align:center;:hover{background-color:#D09A30;}"]),oe=function(e){return c.a.createElement(ae,null,c.a.createElement("h1",null,"Wygrana"),c.a.createElement("h3",null,"Wygrał gracz ",e.player,". Gratulacje!"),c.a.createElement(ne,{to:"/"}," Wróć do ekranu głównego "),c.a.createElement(ne,{onClick:function(){return window.location.reload()}}," Zagraj jeszcze raz "))},ce=function(e){function t(t){var i;return(i=e.call(this,t)||this).playerOne=c.a.createRef(),i.playerTwo=c.a.createRef(),i.continue=i.continue.bind(s()(i)),i.goBack=i.goBack.bind(s()(i)),i.state={playerTurn:1,player1Location:0,player2Location:0,isReadyForNext:!0,winner:null,makeAPlayerMove:function(){var e=d.a.int(1,3);i.setState({isReadyForNext:!1}),setTimeout(function(){switch(i.state.playerTurn){case 1:i.setState(function(t){var i=t.player1Location+e;return i<=49?{player1Location:i}:{}},function(){i.playerOne.current.handleLocationChange(i.state)});break;case 2:i.setState(function(t){var i=t.player2Location+e;return i<=49?{player2Location:i}:{}},function(){i.playerTwo.current.handleLocationChange(i.state)})}},1e3)}},i}u()(t,e);var i=t.prototype;return i.continue=function(){var e=this;49===this.state.player1Location?setTimeout(function(){return e.setState({winner:1})},1e3):49===this.state.player2Location?setTimeout(function(){return e.setState({winner:2})},1e3):this.setState(function(e){return{isReadyForNext:!0,playerTurn:1===e.playerTurn?2:1}})},i.goBack=function(e,t){var i=this;switch(e){case 1:this.setState(function(e){return{player1Location:e.player1Location-t}},function(){i.playerOne.current.handleLocationChange(i.state)});break;case 2:this.setState(function(e){return{player2Location:e.player2Location-t}},function(){i.playerTwo.current.handleLocationChange(i.state)})}},i.render=function(){var e=this;return c.a.createElement(V.Provider,{value:this.state},c.a.createElement(g,null,c.a.createElement(D,{ref:this.playerOne,continue:this.continue,back:function(t){return e.goBack(1,t)}}),c.a.createElement(F,{ref:this.playerTwo,continue:this.continue,back:function(t){return e.goBack(2,t)}}),J.map(function(e,t){return c.a.createElement(j,{x:100*t+14*t+"px",y:e.y,key:t,type:e.type})}),c.a.createElement(ie,null)),this.state.winner&&c.a.createElement(oe,{player:this.state.winner}))},t}(c.a.Component),re=i(161);function le(){var e=n()(["\n  *, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return le=function(){return e},e}var se=Object(r.a)(le());t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(re.a,null),c.a.createElement(se,null),c.a.createElement(ce,null))}},151:function(e,t,i){"use strict";i.d(t,"b",function(){return A});var a=i(0),n=i.n(a),o=i(4),c=i.n(o),r=i(33),l=i.n(r);i.d(t,"a",function(){return l.a});i(154);var s=n.a.createContext({}),A=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};A.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,i){var a;e.exports=(a=i(160))&&a.default||a},160:function(e,t,i){"use strict";i.r(t);i(35);var a=i(0),n=i.n(a),o=i(4),c=i.n(o),r=i(56),l=i(2),s=function(e){var t=e.location,i=l.default.getResourcesForPathnameSync(t.pathname);return i?n.a.createElement(r.a,Object.assign({location:t,pageResources:i},i.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,i){"use strict";var a=i(0),n=i.n(a),o=i(165),c=i(162),r=i.n(c);t.a=function(){return n.a.createElement(o.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Ekologia the Game"),n.a.createElement("meta",{name:"author",content:"Adam Siekierski"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:r.a}))}},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACZFBMVEUAAAAAbicAcCoAbigAaykAbiYAbScAbygAbycAhS4AbSYAayUAcSkAbiQAbCcAcyEAbSgAdSAAdCEAbSUAYCgAeiMAbyYAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAcSgAbicAbicAbicAbicAbicAbicAbicAbicAbicAbyYAbicAbicAbicAbicAbicAbicAbicAbicAbSkAbicAbicAbicAbigAbigAbicAbicAbSYAbicAbicAbycAbicAbicAbicAbigAbicAbicAbicAbicAbicAbicAbicAbSgAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbicAbif///9upG+AAAAAynRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUkLy0rKSclIQgPhN7n5eTj4eLAWkBeURIEh/zbUI3rngxF7/dhg/34ZrOyVe0HWalXFxbGmwI/7Pl5U/YwA5TMGhHQgCrd+mN84B69FVZkaQFlw+ZPG2fo1CAuDh8iCViTDX8BpPVKTvRywbWOAq14YPPWN/4+ASOJGQMBt7YBr5gENoWVAjkxXU1HFLAGgtOIkb+5vL60bJo86qNfCqruzrhcSEzy0VJ3pxA7oa50SSzLKj74ewAAAAFiS0dEy4SzBnAAAAAHdElNRQfjBRMOJjLX30sjAAACYUlEQVQ4y32Sd1sTQRDG9zUSEVusd4JCIJQgAoKglARQRJEIBiEIBHIGsEYEIUGihlixixURKxbsHVTsvdynMne75IL6MP/c3Mxv3ym7hDADx88ODZszNzw8QgvyryEyShcdExunj5+XMD8xKflvBgtSUkXZFqalLxJTF2eMJMYgM4vmsw3GHN8nNw8jCGQsoXlxaf4yKhSKAs7PqLA8m+azMtMZuaIwaqUfQJGJhVcVl6ymXqq51F8FWFNGo/HlsFQwdm2lIoCqvGqpNdE6FqiplfM2IbDNIFSus4tidR3IsER9Fcs3rBeEDXkbSzbVVERvhhpc4Ra7Ps6h3wpVY5HEaLc1SQeat4NraZUEKp3OCBfv4tp2VLdLg8JdL0vuHBe4meBdLbs9YlYH1ATePTKgq0FAS8l77VJwXwNI5H421oGDylhVnfRmcg6NJ4c9NH/k6DFlMVw7O6UrJ53UO2490XFS5ZfoambhFHJK3pBoOo0zZ/1AMAQzJc6RuvNygSQEDWdDurtD4L5AgR5ysfeSSdd0uUC52islbkzA1WgpX3uNTLxu7LvR18vzfJfLdXOSiiDsVuNtbZu2X2qhdDKB847HEeNwxMTGxjnuTtHAcq/s/oOHjx57TfRGgSfsNfrs6VQNnj2n/ovEbPOANDkaTAowDYMvmf8q7fVQK+TX8CY3AMj3DP+U9nTQ1aF1SAHUVr9c/9tBOtp0vHuvKER8YH7uRy54BltswSe9jQEaJNAats9flOuFhfcOGAwG4asP0H7L+W78IfxMxkzyX8Ov370goxhmeZ2jAr6CxQHAHxrKUVfc1MGwAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1LTE5VDE0OjM4OjUwKzAyOjAwhS8+0gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0xOVQxNDozODo1MCswMjowMPRyhm4AAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABkCAYAAADQff26AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDUtMTJUMTY6MTM6MDcrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA1LTEyVDIyOjEwOjM2KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA1LTEyVDIyOjEwOjM2KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0MDBiYzAyLWFj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"},181:function(e,t){},197:function(e){e.exports={data:{image:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQY0w3OXUvCYBjG8X2CInRqmgeVtjQksm26x21mJVG+bc82N1RCDII6DaQsom/+7zm6L+6D33Vp9dEPtacvjPE39dEvrdkrPRljh2v129IYf9KYbOnEAj/cpyPPENEp3lzHSQu4qbpJHhEX8bICmiM33GcfmMEbIpH48aNCQ5rTd87HO4X+IaRLkBoMkxqdsIKflekp0IzytKMS3aSKFZURaQktWHjEmxf8pcUgrfIgj3Fme1xOJ2rZDlP26cuKglLc+I5OYuCtclwr8Co8wp5XcBeHWFIVJDqaWJ5wEa5w1zeEizqDoIYT6XRlk3ZmMUxzOLKLoXAxv8VLDlRJC1NlO8tjZjr2Usd9LmKphf/1s4yW9Lt0/gAAAABJRU5ErkJggg==",width:5750,height:1080,src:"/EkologiaTheGame/static/38c907a40e477114faf4ef64b32c8ba9/474b9/bg.png",srcSet:"/EkologiaTheGame/static/38c907a40e477114faf4ef64b32c8ba9/474b9/bg.png 1x"}}}}}},210:function(e){e.exports={data:{defaultSquare:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVQ4y7WTTU8TURSG77Aw4TdoAgRQWRjo1Ji4Y6kB28EFvwRnrIQFK8JfcGHSD6FgTFQIn200YaNbo8GondrSxp24UGNI71zfc786xYLdOMmbc+b2nue+58wtY3hyfoICW/ZHZJ7X7+c9tCcXJFg2mJDvlMsnqxP6wS5SAfJC4DqITsFXylPUa2Yf3rtA/QkLQn4Bhf3YeIDCJmIFCqV8N8RaldYQhx/61yzcQNlyMGJbfuSP9yEv6SKxPp8UxQdJsXZKtIY9Ifa+B+iSdqdcGxg5w2KJIFQENxGKWoi8ECS0XA73MhYzSXkgaj4DOmChed03tUnOJCxwT5BH5BIyUR5i88BtUcQ+OmRMz70v/gEODEDDKIoYQGiA3QMQ7eM4qI73iyz2pWi4TWpBttku7Crzm+liNSO7GorfKboOlaKaHe9o82xFsX0tMAbbDhUwVPOTQxc9ygCp5n8CMUMD1NeiJ6D+KH8Dc/fk30o7lHetF5h1SCY6Zvj4vnJY1EB5Lc6BxmBRQeWdDoWYdz48m6puLt0U2TnbcvSv2VHLqzDxdu1W9PXV3TawUZ5xjkpepb6bFusL1zmg0iEV6BiX/Y3A757cFkdlj0MK2Hw5I2O4nRoG+LC6dUc8XbxBl5uvZJIRxtGhlYyKcMYJhprvtb30JDG+vZ5lrLqTsk6RD8Jpo7aTEhiB+PhiurueT4lPG9Oivu9xaNLUf9lNtxOAHA0dgv1DnMyhH9CvU/oJ/W6UvWPj7PjNLKsZGE6wUOSObn8AugpdPkNXoFHjzMBqex77A/8yzeDlf0LDAAAAAElFTkSuQmCC",width:100,height:100,src:"/EkologiaTheGame/static/4cb7767d711fce007bf15507ee78d8e8/fc368/square-default.png",srcSet:"/EkologiaTheGame/static/4cb7767d711fce007bf15507ee78d8e8/fc368/square-default.png 1x"}}}}}},212:function(e){e.exports={data:{backSquare:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyElEQVQ4y31Tz08TQRTe5WDi36AJEFDEQ1vaxsQbRwwIrQf+ADEx8SARZWtBD56kHjyrCTXd/kBKTPwVBYRo4kWvRoNR29pCTbyIBzXGsPP83uzMbostm7zM+2be+9733swaBj7bGuDFSFm90s8qvNfHMXZiwMgkQhKzL7+McvjA2+QE+LlE2MRq5izXsryqPR0H3ILUCnlE8PchYT+SX8HqsBKSyli1VYBLWHtS5/rMzCWXPD0ddAlSiV6v5bQV7ECVNZVExdkI3ZuJ0OIu4z0mR+x7OxE6qNS5qjUZK2MyTQJCgbMdJDpswI6tfDZZCLHY+wzSTo80q/pWbVYU2V97ekCkJvopfTEk8pfDBEzAApgU3lHnztKVaL/i6PAGyzPjNqUyl0zcngww1mTUgPW5YOU5K1xD/gHvImz3BuvF2ahXmZOlEssn+w+jOBdYSMquuj3CO5MBfg4lPkCww5Ub2vTJmjGTCdUVz7rLI/xWHDJRuXzz7FG6dT7gNCoBplaYiUAi1MqX5hMiwFRvTCqcnwpyO5SeCtGNM/3UDmtCnmOTQgRyy2We4fyFoDN3Wt4eFZJhxtQOq7YlYZNC9VuV+dGissPBcxOukgLa2wPLWau32dwyK1R/AM9QcDIrucvKkNQCC2DBOO8+ep+QaNb88GC48uT6ccK/yfLlk+BgnqvC1IClMoxKFCDi7eKQ+PrylE+4tR43N9dipdrKGBWvRh2QCp3IqzZ9swoLLvpu6QQh19laj7mE9RdxuZafjfaAeKPy9CTdv3ZshwddSEZYicgnw+7a4C/MRBwmQ86P6urYIHN8fz1uGJXlUU8p/C5U26oujxJGQB8fjbS2h8P06fEI1Z7HHNigzv+yMuY7IDIVaffmemwDldFG/Cfs9y77BfuDFre1su0340ZVk6GCRwrfVO13wo7ADrexPtghrUyTVVdjxj9FD8WVspUe/wAAAABJRU5ErkJggg==",width:100,height:100,src:"/EkologiaTheGame/static/316f68138e4cb9074113ff3ecb2c8c9b/fc368/square-back.png",srcSet:"/EkologiaTheGame/static/316f68138e4cb9074113ff3ecb2c8c9b/fc368/square-back.png 1x"}}}}}},213:function(e){e.exports={data:{questionSquare:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC00lEQVQ4y32Ty09TQRTG77Aw4W/QBAgobWKhD2PijqUG7MMFWx8sfUW0t1TiwhCCuDWaQLTa0gLFmPiKAkI0YaNbo8GobW1p405cKDGGueN35s7c9kZKky/3zOP8zndmpoaBX8YM0MeYNLtkPKPGu/1oTyYRMNIJvxxTLH9pFdCCM0kJCQlmd8772K2zB9ntcz6WjgdYNhFkNK/3YbwD1PQ7IMR7AGtF0hpUQ0IBKpIwJpVoDt/OadPHsJdpQ3abiS6n5ZTZ24IqKypJLIyGxPzVuvJKFANURN5HgPYpd7ZrDSNnBNMQAC2sbd8Y8vKxk918/LSHp4b9HPMcBfl8MiQLIucroG0OdEb1jU2tiEsK9hcwa3LIK6Yu9FgAibuXegXg1v3LfpGDe+zfpi6QQwW86txbnAvA4lrW3miRO/pSMs3lRoISksJ44oxHoICVU3vIcdYMVsDYazTcFB1ujVpALCtLkF3AEc2hfemWiiigmEvKvI7GN0XPoSAPG+ejHP4Hy8QDAmcp7g1LoHYoTSBurzu0gcW8PD8JFNkGdxpGZzp9sUc0rGsg5ewO3Ak2BViuoRh1sjMQZ6iBquU6zGwKa+4QDujvpBzKd+ZyRxchn8uIC+Y4JBOuM8RG6VC9QedStMPxU3QRftetK5iVtWO3QyFG2afH/aXnE0dE+opzKXZ1iNzpAq41tDwHE+/zR63vb07UgdXVGNtYiRYqSxGxcO0QB1Q/G4tavokzpH+Lhug1An94eExsrEY5ZANrr2PyW3wZ7gR4vfTiuHh0/TA9bj6bDFn03h7EkYzvbDJo5UiI4YwTDDk/y8uRPmL8eDtoGKXFsOMUcTucVsuLYYEjEJ+fDkh9eTbgxFJP+uVc5VWUQ306/9tSpB4AxBS0A/bXUZlDv6AtjLeqUjHSb+gPxpva2ea7QaOsYajgQBEz1X4b5IEONFE3tF8707DyctT4ByIkyNUV6lsPAAAAAElFTkSuQmCC",width:100,height:100,src:"/EkologiaTheGame/static/bfd20c0d5a817c65614efab1ac7ffe27/fc368/square-question.png",srcSet:"/EkologiaTheGame/static/bfd20c0d5a817c65614efab1ac7ffe27/fc368/square-question.png 1x"}}}}}},214:function(e){e.exports=[{question:"Kto to roślinożerca?",a:"Zwierzę jedzące tylko rośliny",b:"Zwierzę jedzące tylko mięso",c:"Gatunek żaby",valid:"a"},{question:"Co robi pancernik gdy widzi zagrożenie?",a:"Zwija się w kulę",b:"Ucieka jak najdalej",c:"Udaje martwego",valid:"a"},{question:"Jak nazywamy proces odzysku materiałów ze śmieci?",a:"Segregacja",b:"Recykling",c:"Powtórna obróbka",valid:"b"},{question:"Czym jest kwaśny deszcz?",a:"Nazwa substancji chemicznej",b:"Kąpiel w Kapuśniaku",c:"Rodzaj opadów atmosferycznych",valid:"c"},{question:"Co to śmiertelność w populacji?",a:"Stosunek osobników umierających do rodzących się",b:"Osobniki ubywające na skutek śmierci",c:"Średnia wieku w którym umierają osobniki",valid:"b"},{question:"Co to rozrodczość w populacji?",a:"Stosunek osobników rodzących się do umierających",b:"Wiek w którym większość osobników uzyskało potomstwo",c:"Osobniki przybywające w wyniku rozrodu",valid:"c"},{question:"Czym jest imigracja w populacji?",a:"Wędrówka osobników",b:"Osobniki przybywające z innych populacji",c:"Osobniki odchodzące do innych populacji",valid:"b"},{question:"Co to emigracja w populacji?",a:"Osobniki odchodzące do innych populacji",b:"Wędrówka osobników",c:"Osobniki przybywające z innych populacji",valid:"a"},{question:"Czym jest nisza ekologiczna?",a:"Inaczej zakres tolerancji ekologicznej",b:"Wszystkie wymagania organizmu względem środowiska ",c:"Region na którym istnieje dany ekosystem",valid:"b"},{question:"Zależność, w której oba gatunki są stratne to:",a:"Konkurencja",b:"Komensalizm",c:"Mutualizm",valid:"a"},{question:"Protisty wchodzą w skład:",a:"Biotopu",b:"Siedliska",c:"Biocenozy",valid:"c"},{question:"Łańcuch spalania to…",a:"Łańcuch pokarmowy, którego pierwszym ogniwem są producenci",b:"Łańcuch pokarmowy, w którym musi znaleźć się destruent.",c:"Łańcuch pokarmowy, w którym nie uczestniczy producent",valid:"a"},{question:"Który z wymienionych rodzajów struktur przestrzennych jest niepoprawny?",a:"Rozmieszczenie losowe",b:"Rozmieszczenie stadowe",c:"Rozmieszczenie równomierne",valid:"b"},{question:"Co to jest siedlisko?",a:"Obszar zamieszkiwany przez dany organizm",b:"Obszar o żyznej glebie",c:"Obszar niezdatny do życia",valid:"a"},{question:"Co to jest sukcesja?",a:"Prawidłowe rozwijanie się gleby",b:"Proces stopniowych zmian ekosystemu",c:"Nadmierna wycinka drzew",valid:"a"},{question:"Który z wymienionych ekosystemów jest błędny?",a:"Ekosystem naturalny",b:"Ekosystem sztuczny",c:"Ekosystem miejski",valid:"c"},{question:"Co to jest ekosystem?",a:"Ekologiczny system operacyjny",b:"Zbiór elementów ożywionych i nieożywionych, które wzajemnie na siebie wpływają",c:"Dziedzina naukowa",valid:"b"},{question:"Co to protokooperacja?",a:"Współzależność między dwoma gatunkami, która przynosi korzyści obu stronom, ale nie jest konieczna do ich przeżycia",b:"Ścisły związek między dwoma gatunkami, który przynosi korzyści obu stronom i jest konieczny do ich przeżycia",c:"Związek, w którym jedna strona zyskuje a druga traci",valid:"a"},{question:"Który z wymienionych pasożytów zalicza się do pasożytów zewnętrznych?",a:"Owsiki",b:"Tasiemiec",c:"Pchły",valid:"c"},{question:"Jak mak broni się przed zjedzeniem?",a:"Upodabnia się do pokrzywy",b:"Wytwarza związki chemiczne o odstraszającym zapachu",c:"Wytwarza kolce",valid:"b"},{question:"Które z wymienionych organizmów łączy mutualizm obligatoryjny",a:"Koźlarz i brzoza",b:"Koza i owca",c:"Rekin i podnawki",valid:"a"},{question:"Co to jest biocenoza?",a:"Zbiór elementów nieożywionych, które budują ekosystem",b:"Zbiór elementów ożywionych, które budują ekosystem",c:"Odmienność genetyczna wśród zwierząt",valid:"b"},{question:"Czy organizm potrafi przetrwać bez wody?",a:"Tak",b:"Nie",c:"Są wyjątki",valid:"b"},{question:"Co to jest Ekologia?",a:"Segregowanie śmieci",b:"Komunikacja za pomocą słuchu",c:"Nauka zajmująca się badaniem powiązań między różnymi gatunkami organizmów, a także powiązaniami organizmów ze środowiskiem, które zamieszkują",valid:"c"},{question:"Umięśnione kończyny dolne służą do...",a:"Szybkiego poruszania się",b:"Dalekich skoków",c:"Odpowiedzi A i B są poprawne",valid:"c"},{question:"Czym jest selekcja naturalna?",a:"Mechanizm ewolucji prowadzący do zmian w populacji zwiększających ich przystosowanie do warunków środowiskowych.",b:"Wybieranie tylko produktów eko podczas zakupów",c:"Żadna z powyższych odpowiedzi nie jest poprawna",valid:"a"}]}}]);
//# sourceMappingURL=component---src-pages-game-js-e87bf1d53a3d46d2569b.js.map