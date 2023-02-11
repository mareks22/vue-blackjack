(function(){"use strict";var e={628:function(e,t,s){var a=s(963),n=s(907),r=s(252),i=s(577);const l={key:1,class:"start-btn d-flex justify-content-center"},o=(0,r._)("div",{class:"d-flex justify-content-center"},null,-1),c={class:"d-flex modal-text justify-content-center"},d={key:0},u={key:0,class:"score d-flex align-items-center"},h={class:"total text-center"},m=(0,r._)("div",{class:"text"},"DEALER",-1),k={class:"dealer-cards d-flex justify-content-center"},f={class:"buttons text-center"},p=["disabled"],b=["disabled"],w={key:2,class:"score d-flex align-items-center"},g={class:"total text-center"},v=(0,r._)("div",{class:"text"},"PLAYER",-1),B={class:"player-cards d-flex justify-content-center"};function y(e,t,s,a,n,y){const C=(0,r.up)("BetModal"),D=(0,r.up)("BetStatus"),M=(0,r.up)("MDBModal"),_=(0,r.up)("MDBCol"),T=(0,r.up)("MDBRow"),x=(0,r.up)("GameCard"),j=(0,r.up)("MDBContainer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n.showBetModal?((0,r.wg)(),(0,r.j4)(C,{key:0,onOnDeal:y.deal,onNewGame:t[0]||(t[0]=e=>y.firstGame())},null,8,["onOnDeal"])):(0,r.kq)("",!0),(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[n.gameStarted&&!n.showBetModal?((0,r.wg)(),(0,r.j4)(D,{key:0})):(0,r.kq)("",!0),n.gameStarted?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("button",{id:"start",onClick:t[1]||(t[1]=e=>y.firstGame())},"START GAME")])),o,(0,r.Wm)(T,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(M,{centered:"",id:"winningModal",tabindex:"-1",labelledby:"winningModalLabel",modelValue:a.winningModal,"onUpdate:modelValue":t[2]||(t[2]=e=>a.winningModal=e),class:"winningModal",onHidden:t[3]||(t[3]=e=>y.showModal())},{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r._)("h2",null,(0,i.zw)(n.message.toUpperCase()),1),"player"==n.winner?((0,r.wg)(),(0,r.iD)("h1",d,"$"+(0,i.zw)(n.betAmount),1)):(0,r.kq)("",!0)])])),_:1},8,["modelValue"]),n.gameStarted?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",h,(0,i.zw)(y.currentValueDealer()),1),m])):(0,r.kq)("",!0)])),_:1})])),_:1}),(0,r._)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.dealerCards,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"card-deck"},[(0,r.Wm)(x,{suit:e.suit,value:e.value,secondCardDealer:e.secondCardDealer,class:(0,i.C_)({cardback:e.secondCardDealer})},null,8,["suit","value","secondCardDealer","class"])])))),128))]),(0,r._)("div",f,[n.gameStarted&&!n.winner?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"game-btn",onClick:t[4]||(t[4]=e=>y.onHit()),disabled:n.disableButton}," HIT ",8,p)):(0,r.kq)("",!0),n.gameStarted&&!n.winner?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"game-btn",onClick:t[5]||(t[5]=e=>y.onStand()),disabled:n.disableButton}," STAND ",8,b)):(0,r.kq)("",!0)]),n.gameStarted?((0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("div",g,(0,i.zw)(y.currentValuePlayer()),1),v])):(0,r.kq)("",!0),(0,r._)("div",B,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.playerCards,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"card-deck"},[(0,r.Wm)(x,{suit:e.suit,value:e.value},null,8,["suit","value"])])))),128))])])),_:1})],64)}var C=s(802),D=s(262);const M={class:"card-deck d-flex justify-content-between"},_={key:0,class:"text-start h3 justify-content-start"},T={class:"d-flex justify-content-center"},x={key:1,class:"text-end h3 d-flex align-items-end justify-content-end"};function j(e,t,s,a,n,l){const o=(0,r.up)("Icon");return(0,r.wg)(),(0,r.iD)("div",M,[s.secondCardDealer?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",_,(0,i.zw)(s.value),1)),(0,r._)("div",T,[s.secondCardDealer?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(o,{key:0,icon:l.getIcon(s.suit),class:"icon d-flex align-items-center"},null,8,["icon"]))]),s.secondCardDealer?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",x,(0,i.zw)(s.value),1))])}var W=s(542),$={components:{Icon:W.JO},props:["value","suit","secondCardDealer"],methods:{getIcon(e){return"spades"===e?"fxemoji:blackspadesuit":"diamonds"===e?"fxemoji:blackdiamondsuit":"clubs"===e?"fxemoji:blackclubsuit":"hearts"===e?"fxemoji:blackheartsuit":void 0}},data(){return{suits:["spades","diamonds","clubs","hearts"],values:["A","2","3","4","5","6","7","8","9","10","J","Q","K"]}}},A=s(744);const S=(0,A.Z)($,[["render",j],["__scopeId","data-v-609f8910"]]);var O=S;const E=e=>((0,r.dD)("data-v-b11d5c46"),e=e(),(0,r.Cn)(),e),P={class:"bet-modal"},R={class:"bet-modal-content"},V={key:0},q={class:"total-bet"},z={class:"fishes"},G={class:"buttons"},L=["disabled"],H=E((()=>(0,r._)("p",null,"YOU LOST ALL THE MONEY :C",-1))),I=E((()=>(0,r._)("button",{id:"start"},"NEW GAME",-1))),Y=[H,I];function J(e,t,s,a,n,l){const o=(0,r.up)("FishPoker");return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",R,[l.canPlay?((0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("div",q,[(0,r._)("p",null,"AMOUNT LEFT: $"+(0,i.zw)(l.totalBank),1),(0,r._)("p",null,"YOUR BET: $"+(0,i.zw)(n.totalBet),1)]),(0,r._)("div",z,[(0,r.Wm)(o,{class:"fish",value:1,onClick:t[0]||(t[0]=e=>l.addToTotal(1))}),(0,r.Wm)(o,{class:"fish",value:5,onClick:t[1]||(t[1]=e=>l.addToTotal(5))}),(0,r.Wm)(o,{class:"fish",value:25,onClick:t[2]||(t[2]=e=>l.addToTotal(25))}),(0,r.Wm)(o,{class:"fish",value:100,onClick:t[3]||(t[3]=e=>l.addToTotal(100))})]),(0,r._)("div",G,[(0,r._)("button",{class:"game-btn reset_btn",onClick:t[4]||(t[4]=e=>l.resetBet())},"RESET"),(0,r._)("button",{class:"game-btn deal_btn",disabled:0==n.totalBet,onClick:t[5]||(t[5]=t=>e.$emit("onDeal",n.totalBet))}," DEAL ",8,L)])])):(0,r.kq)("",!0),l.canPlay?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:1,class:"total-bet",onClick:t[6]||(t[6]=t=>e.$emit("newGame"))},Y))])])}function N(e,t,s,a,n,l){return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["fish",[n.fishClass,n.disabledClass]])},(0,i.zw)(s.value),3)}var U={props:["value"],data(){return{fishClass:"",disabledClass:""}},computed:{totalBank(){return this.$store.getters.totalBank}},watch:{totalBank(e){e-this.value<0?this.disabledClass="fish-disables":this.disabledClass=""}},methods:{getClass(){switch(this.value){case 1:this.fishClass="one";break;case 5:this.fishClass="five";break;case 25:this.fishClass="twofive";break;case 100:this.fishClass="hundred";break}}},mounted(){this.getClass()}};const Z=(0,A.Z)(U,[["render",N],["__scopeId","data-v-3bf3b627"]]);var F=Z,K={components:{FishPoker:F},computed:{totalBank(){return this.$store.getters.totalBank},canPlay(){return!(this.totalBank<1&&0==this.totalBet)}},data(){return{totalBet:0,currentTotal:0}},methods:{addToTotal(e){this.totalBet+=e,this.$store.commit("bet",e),this.$store.commit("setBet",this.totalBet)},resetBet(){this.$store.commit("restoreBet",this.currentTotal),this.totalBet=0}},mounted(){this.currentTotal=this.$store.getters.totalBank}};const Q=(0,A.Z)(K,[["render",J],["__scopeId","data-v-b11d5c46"]]);var X=Q;const ee={class:"status-card"},te={class:"current"},se={class:"bet"};function ae(e,t,s,a,n,l){return(0,r.wg)(),(0,r.iD)("div",ee,[(0,r._)("p",te,"$"+(0,i.zw)(l.totalBank),1),(0,r._)("p",se,"Current bet: $"+(0,i.zw)(l.currentBet),1)])}var ne={data(){return{}},computed:{totalBank(){return this.$store.getters.totalBank},currentBet(){return this.$store.getters.currentBet}}};const re=(0,A.Z)(ne,[["render",ae],["__scopeId","data-v-8c1cd938"]]);var ie=re,le={name:"BlackJack",components:{MDBCol:C.MDBCol,MDBRow:C.MDBRow,MDBContainer:C.MDBContainer,GameCard:O,MDBModal:C.MDBModal,BetModal:X,BetStatus:ie},data(){return{deck:[],playerCards:[],dealerCards:[],gameStarted:!1,hasAce:!1,showBetModal:!1,acesCount:0,disableButton:!1,betAmount:0,message:"",winner:""}},computed:{totalBank(){return this.$store.getters.totalBank},currentBet(){return this.$store.getters.currentBet}},mounted(){this.createDeck(),this.shuffleDeck(this.deck)},methods:{firstGame(){this.reset(),this.createDeck(),this.shuffleDeck(this.deck),this.gameStarted=!1,this.$store.commit("restoreBank"),this.showBetModal=!0},newGame(){this.deck.length>=26&&(this.createDeck(),this.shuffleDeck(this.deck)),this.reset(),this.reducedValueAce=0,this.gameStarted=!0,this.playerCards.push(this.deck.pop()),this.dealerCards.push(this.deck.pop()),this.playerCards.push(this.deck.pop()),this.dealerCards.push(this.deck.pop()),this.dealerCards.forEach(((e,t)=>{e.secondCardDealer=1===t})),this.getWinner()},reset(){this.playerCards=[],this.dealerCards=[],this.winner="",this.hasAce=!1,this.disableButton=!1},deal(){this.betAmount=this.currentBet,this.showBetModal=!1,this.newGame()},sleep(e){return new Promise((t=>{setTimeout((()=>{t()}),e)}))},async getDealerCards(){this.dealerCards[1].secondCardDealer=!1;let e=0;e=this.currentValueDealer();while(e<17)await this.sleep(500),this.dealerCards.push(this.deck.pop()),e=this.currentValueDealer()},onStand(){this.getDealerCards(),setTimeout((()=>{this.getWinner(),this.winningModal=!0}),1500),this.disableButton=!0},checkAces(){let e=0;this.playerCards.forEach((t=>{"A"===t.value&&(this.hasAce=!0,e++,this.acesCount=e)}))},getWinner(){let e=0,t=0;if(e=this.currentValuePlayer(),t=this.currentValueDealer(),e>21&&(this.message="Round Lost!",this.winner="dealer",this.$store.commit("incrementDealer")),this.playerCards.length<3&&21===e&&21!=t?(this.message="Round Won, BlackJack!",this.winner="player",this.winningModal=!0,this.$store.commit("incrementPlayer"),this.$store.commit({type:"win",pot:this.currentBet,bj:!0}),this.betAmount*=2.5):this.playerCards.length<3&&21===e&&21===t&&(this.message="Round Tie",this.winner="tie",this.$store.commit({type:"win",pot:this.currentBet,tie:!0}),this.winningModal=!0),!0!==this.dealerCards[1].secondCardDealer)return t>21&&(this.message="Round Won",this.winner="player",this.$store.commit("incrementPlayer"),this.$store.commit({type:"win",pot:this.currentBet}),this.betAmount*=2),t<=21&&(t>e?(this.message="Round Lost",this.winner="dealer",this.$store.commit("incrementDealer")):t<e?(this.message="Round Won",this.winner="player",this.$store.commit({type:"win",pot:this.currentBet}),this.betAmount*=2):t<=21&&t>=17&&(this.message="Round Tie",this.$store.commit({type:"win",pot:this.currentBet,tie:!0}),this.winner="tie")),""!=this.winner&&this.$store.commit("setBet",0),this.winner},onHit(){this.playerCards.push(this.deck.pop()),this.getWinner(),this.winner&&(this.winningModal=!0)},showModal(){this.showBetModal=!0},currentValuePlayer(){let e=0;this.checkAces();let t=!0;return this.playerCards.forEach((t=>{e=this.cardValues(t)+e})),e>21&&this.hasAce&&t&&(e-=10,t=!1),e},currentValueDealer(){let e=0;return this.dealerCards.forEach((t=>{t.secondCardDealer||(e=this.cardValues(t)+e)})),e},cardValues(e){let t=0;switch(e.value){case"2":t=2;break;case"3":t=3;break;case"4":t=4;break;case"5":t=5;break;case"6":t=6;break;case"7":t=7;break;case"8":t=8;break;case"9":t=9;break;case"10":t=10;break;case"J":t=10;break;case"Q":t=10;break;case"K":t=10;break;case"A":t=11;break}return t},createDeck(){this.suits.forEach((e=>{this.values.forEach((t=>{let s={value:t,suit:e};this.deck.push(s)}))}))},shuffleDeck(e){for(let t=0;t<1e3;t++){let t=Math.floor(Math.random()*e.length),s=Math.floor(Math.random()*e.length),a=e[t];e[t]=e[s],e[s]=a}}},setup(){const e=(0,D.iH)(!1);return{winningModal:e}}};const oe=(0,A.Z)(le,[["render",y]]);var ce=oe;const de=(0,n.MT)({state(){return{playerWins:0,dealerWins:0,totalBank:1500,currentBet:0}},mutations:{incrementPlayer(e){e.playerWins++},incrementDealer(e){e.dealerWins++},bet(e,t){e.totalBank-=t,e.currentBet=t},win(e,t){t.tie?e.totalBank+=t.pot:t.bj?e.totalBank+=2.5*t.pot:e.totalBank+=2*t.pot},setBet(e,t){e.currentBet=t},restoreBet(e,t){e.totalBank=t},restoreBank(e){e.totalBank=1500,e.playerWins=0,e.dealerWins=0,e.currentBet=0}},getters:{totalBank:e=>e.totalBank,playerWins:e=>e.playerWins,dealerWins:e=>e.dealerWins,currentBet:e=>e.currentBet}});(0,a.ri)(ce).use(de).mount("#app")}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,r){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],r=e[d][2];for(var l=!0,o=0;o<a.length;o++)(!1&r||i>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[o])}))?a.splice(o--,1):(l=!1,r<i&&(i=r));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,i=a[0],l=a[1],o=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(o)var d=o(s)}for(t&&t(a);c<i.length;c++)r=i[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},a=self["webpackChunkvue_blackjack"]=self["webpackChunkvue_blackjack"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(628)}));a=s.O(a)})();
//# sourceMappingURL=app.9588ba83.js.map