(this.webpackJsonpswitchdex=this.webpackJsonpswitchdex||[]).push([[27],{2161:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(52),a=t(10),c=function(e,n){var t=Object(a.useState)(e),c=Object(r.a)(t,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){l(e)}),n);return function(){clearTimeout(t)}}),[e]),o}},2162:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(329),a=t(10),c=t.n(a),o=t(181),l=t(328),i=t(11),u=t(7),s=t(457),m=t(2),b=t(2092);function d(){var e=Object(r.a)(["\n    cursor: pointer;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n    &:after {\n        background-color: ",";\n        content: '';\n        height: 26px;\n        margin-left: 17px;\n        margin-right: 17px;\n        width: 1px;\n    }\n    &:last-child:after {\n        display: none;\n    }\n"]);return f=function(){return e},e}Object(l.b)(f(),(function(e){return e.theme.componentsTheme.topbarSeparatorColor}));var p=Object(l.c)(b.a)(d()),g=function(){var e=Object(o.e)(u.Sb),n=Object(o.d)(),t=function(){n(Object(i.Ec)(m.q.Connecting))};return c.a.createElement(c.a.Fragment,null,function(){switch(e){case m.q.Locked:return c.a.createElement(b.a,{fontSize:b.c.Large,text:s.a.mmLocked,onClick:t,icon:b.b.Lock});case m.q.NotInstalled:return c.a.createElement(b.a,{fontSize:b.c.Large,text:s.a.mmNotInstalled,icon:b.b.Metamask});case m.q.Connect:return c.a.createElement(p,{className:"connect-wallet",onClick:t,fontSize:b.c.Large,text:"Connect Wallet",icon:b.b.Lock});case m.q.Connecting:return c.a.createElement(b.a,{fontSize:b.c.Large,text:"Connecting Wallet",icon:b.b.Lock});case m.q.Loading:return c.a.createElement(b.a,{fontSize:b.c.Large,text:s.a.mmLoading,icon:b.b.Wallet,onClick:t});case m.q.Error:return c.a.createElement(b.a,{fontSize:b.c.Large,text:s.a.mmWrongNetwork,onClick:t,icon:b.b.Warning});case m.q.Done:return null;default:return e}}())}},2433:function(e,n,t){"use strict";t.r(n);var r=t(329),a=t(10),c=t.n(a),o=t(328),l=t(269),i=t(2093),u=t(2090),s=t(2095),m=t(2086),b=t(2081),d=t(2185),f=t(5),p=t(0),g=t.n(p),O=t(52),j=t(9),v=t(181),h=t(94),x=t(1),E=t(450),y=t(11),k=t(7),S=t(13),B=t(132),w=t(30),T=function(e,n,t,r){var a=n.bestCaseQuoteInfo,c=e?a.makerAssetAmount:a.takerAssetAmount,o=e?a.takerAssetAmount:a.makerAssetAmount,l=new B.BigNumber(Object(w.e)(c,r.decimals,18)),i=new B.BigNumber(Object(w.e)(o,t.decimals,18));return l.div(i)},C=function(e,n){return n.minus(e).div(n).multipliedBy(100)},A=function(e,n,t){return t?e.multipliedBy(2).multipliedBy(n):e.multipliedBy(2).multipliedBy(new B.BigNumber(1).minus(n))},F=t(130),N=t(2),L=t(2088),q=t(2078),M=t(2083),_=t(2092),P=t(2161),D=t(2084),z=t(2162),Q=t(29),R=t(73),I=t(61),V=t(72),U=t(56);function W(){var e=Object(r.a)(["\n    color: ",";\n    background-color: ",";\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    margin-right: 3px;\n    background: ",";\n    animation: "," 1.3s linear infinite;\n\n    &:nth-child(2) {\n        animation-delay: -1.1s;\n    }\n\n    &:nth-child(3) {\n        animation-delay: -0.9s;\n    }\n"]);return W=function(){return e},e}function H(){var e=Object(r.a)(["\n    0%, 60%, 100% {\n        transform: initial;\n    }\n    30% {\n        transform: translateY(-15px);\n    }\n"]);return H=function(){return e},e}function $(){var e=Object(r.a)([""]);return $=function(){return e},e}function G(){var e=Object(r.a)(["\n    font-weight: 700;\n    display: flex;\n"]);return G=function(){return e},e}function J(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return J=function(){return e},e}function Y(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: space-around;\n"]);return Y=function(){return e},e}function Z(){var e=Object(r.a)(["\n    color: ",";\n    font-size: 14px;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0;\n"]);return Z=function(){return e},e}function K(){var e=Object(r.a)(["\n    margin-left: 5px;\n"]);return K=function(){return e},e}function X(){var e=Object(r.a)(["\n    &:hover {\n        cursor: pointer;\n        text-decoration: underline;\n    }\n"]);return X=function(){return e},e}function ee(){var e=Object(r.a)(["\n    font-feature-settings: 'tnum' 1;\n    font-weight: bold;\n"]);return ee=function(){return e},e}function ne(){var e=Object(r.a)(["\n    color: ",";\n    flex-shrink: 0;\n    font-feature-settings: 'tnum' 1;\n    font-size: 14px;\n    line-height: 1.2;\n    white-space: nowrap;\n"]);return ne=function(){return e},e}function te(){var e=Object(r.a)(["\n    align-items: center;\n    border-top: dashed 1px ",";\n    display: flex;\n    justify-content: space-between;\n    padding: 12px 0;\n    position: relative;\n    z-index: 1;\n\n    &:last-of-type {\n        margin-bottom: 20px;\n    }\n"]);return te=function(){return e},e}var re=o.c.div(te(),(function(e){return e.theme.componentsTheme.borderColor})),ae=o.c.div(ne(),(function(e){return e.theme.componentsTheme.textColorCommon})),ce=Object(o.c)(ae)(ee()),oe=Object(o.c)(ae)(X()),le=Object(o.c)(D.b)(K()),ie=o.c.label(Z(),(function(e){return e.color||e.theme.componentsTheme.textColorCommon})),ue=o.c.div(Y()),se=o.c.div(J()),me=Object(o.c)(ie)(G()),be=o.c.div($()),de=Object(o.d)(H()),fe=o.c.span(W(),(function(e){return e.theme.componentsTheme.textColorCommon}),(function(e){return e.theme.componentsTheme.textColorCommon}),(function(e){return e.theme.componentsTheme.textColorCommon}),de),pe=function(){return c.a.createElement(be,null,c.a.createElement(fe,null),c.a.createElement(fe,null),c.a.createElement(fe,null))},ge=function(e){function n(){var e,t;Object(Q.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(R.a)(this,(e=Object(I.a)(n)).call.apply(e,[this].concat(a)))).state={quoteBuyTokenAmount:x.rb,quoteSellTokenAmount:x.rb,baseBuyTokenAmount:x.rb,baseSellTokenAmount:x.rb,canOrderBeFilled:!0,maxAmount:x.rb,priceBuy:x.rb,priceSell:x.rb,geckoPrice:x.rb},t.componentDidUpdate=function(e){var n;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if((n=t.props).tokenAmount===e.tokenAmount&&n.sellQuote===e.sellQuote&&n.buyQuote===e.buyQuote&&n.quoteState===e.quoteState&&n.inventoryBalance===e.inventoryBalance){r.next=5;break}if(n.quoteState!==N.o.Done){r.next=5;break}return r.next=5,g.a.awrap(t._updateOrderDetailsState());case 5:case"end":return r.stop()}}))},t.componentDidMount=function(){return g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.awrap(t._updateOrderDetailsState());case 2:case"end":return e.stop()}}))},t.render=function(){var e=t._getCostStringForRender(!1),n=t._getCostStringForRender(!0),r=t._getCostLabelStringForRender(!1),a=t._getCostLabelStringForRender(!0),o=t._getBaseCostStringForRender(!1),l=t._getBaseCostStringForRender(!0),i=t._getBaseCostLabelStringForRender(!1),u=t._getBaseCostLabelStringForRender(!0),s=t._getMedianPriceStringForRender(!1),m=t._getMedianPriceStringForRender(!0),b=t._getPriceMarketRender();return c.a.createElement(c.a.Fragment,null,c.a.createElement(re,null,c.a.createElement(me,null,"Price by Coingecko:"),c.a.createElement(oe,{onClick:t._onTrackerPriceClick},b)),c.a.createElement(ue,null,c.a.createElement(se,null,c.a.createElement(re,null,c.a.createElement(me,null,"Best Bid:"),c.a.createElement(ce,null,m)),c.a.createElement(re,null,c.a.createElement(me,null,r,c.a.createElement(le,{description:"Sell value"})),c.a.createElement(ce,null,n)),c.a.createElement(re,null,c.a.createElement(me,null,i,c.a.createElement(le,{description:"Sell value"})),c.a.createElement(ce,null,l))),c.a.createElement(se,null,c.a.createElement(re,null,c.a.createElement(me,null,"Best Ask:"),c.a.createElement(ce,null,s)),c.a.createElement(re,null,c.a.createElement(me,null,a,c.a.createElement(le,{description:"Buy value"})),c.a.createElement(ce,null,e)),c.a.createElement(re,null,c.a.createElement(me,null,u,c.a.createElement(le,{description:"Buy value"})),c.a.createElement(ce,null,o)))))},t._updateOrderDetailsState=function(){var e,n,r,a,c,o,l,i,u,s,m,b,d,f,p,O,v,h,x;return g.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(e=t.props,n=e.sellQuote,r=e.buyQuote,a=e.baseToken,c=e.quoteToken,o=e.tokenPrices,l=e.inventoryBalance,i=new j.BigNumber(l).dividedBy(100),r&&n){g.next=5;break}return t.setState({canOrderBeFilled:!1}),g.abrupt("return");case 5:u=r.bestCaseQuoteInfo,s=T(!1,r,a,c),m=A(u.takerAssetAmount,i,!0),b=A(u.makerAssetAmount,i,!0),d=T(!0,n,a,c),f=n.bestCaseQuoteInfo,p=A(f.makerAssetAmount,i,!1),O=A(f.takerAssetAmount,i,!1),o&&(h=o.find((function(e){return e.c_id===c.c_id})),x=o.find((function(e){return e.c_id===a.c_id})),h&&x&&(v=x.price_usd.div(h.price_usd))),t.setState({quoteBuyTokenAmount:m,quoteSellTokenAmount:p,baseBuyTokenAmount:b,baseSellTokenAmount:O,canOrderBeFilled:!0,priceBuy:s,priceSell:d,geckoPrice:v});case 15:case"end":return g.stop()}}))},t._getCostStringForRender=function(e){var n,r=t.state.canOrderBeFilled,a=t.props,o=a.quoteToken,l=a.quoteState,i=a.tokenPrices;if(l===N.o.Loading)return c.a.createElement(pe,null);if(!r||l===N.o.Error)return"---";if(i){var u=i.find((function(e){return e.c_id===o.c_id}));u&&(n=u.price_usd)}var s=t.state,m=s.quoteBuyTokenAmount,b=s.quoteSellTokenAmount;if(e){var d=Object(w.e)(b,o.decimals),f=Object(w.e)(b,o.decimals,o.displayDecimals);if(n){var p=new j.BigNumber(d).multipliedBy(n);return"".concat(f," ").concat(Object(w.b)(o.symbol)," (").concat(p.toFixed(2)," $)")}return"".concat(f," ").concat(Object(w.b)(o.symbol))}var g=Object(w.e)(m,o.decimals),O=Object(w.e)(m,o.decimals,o.displayDecimals);if(n){var v=new j.BigNumber(g).multipliedBy(n);return"".concat(O," ").concat(Object(w.b)(o.symbol)," (").concat(v.toFixed(2)," $)")}return"".concat(O," ").concat(Object(w.b)(o.symbol))},t._getBaseCostStringForRender=function(e){var n,r=t.state.canOrderBeFilled,a=t.props,o=a.baseToken,l=a.quoteState,i=a.tokenPrices;if(l===N.o.Loading)return c.a.createElement(pe,null);if(!r||l===N.o.Error)return"---";if(i){var u=i.find((function(e){return e.c_id===o.c_id}));u&&(n=u.price_usd)}var s=t.state,m=s.baseBuyTokenAmount,b=s.baseSellTokenAmount;if(e){var d=Object(w.e)(b,o.decimals),f=Object(w.e)(b,o.decimals,o.displayDecimals);if(n){var p=new j.BigNumber(d).multipliedBy(n);return"".concat(f," ").concat(Object(w.b)(o.symbol)," (").concat(p.toFixed(2)," $)")}return"".concat(f," ").concat(Object(w.b)(o.symbol))}var g=Object(w.e)(m,o.decimals),O=Object(w.e)(m,o.decimals,o.displayDecimals);if(n){var v=new j.BigNumber(g).multipliedBy(n);return"".concat(O," ").concat(Object(w.b)(o.symbol)," (").concat(v.toFixed(2)," $)")}return"".concat(O," ").concat(Object(w.b)(o.symbol))},t._getMedianPriceStringForRender=function(e){var n=t.state,r=n.canOrderBeFilled,a=n.priceBuy,o=n.priceSell,l=e?o:a,i=t.props,u=i.tokenAmount,s=i.quoteToken,m=i.quoteState;if(m===N.o.Loading)return c.a.createElement(pe,null);if(!r||m===N.o.Error)return"---";if(u.eq(0))return"---";var b=l.toFormat(8);return"".concat(b," ").concat(Object(w.b)(s.symbol))},t._getCostLabelStringForRender=function(e){return t.props.qouteInUSD?e?"Quote Sell (USD)":"Quote Buy (USD)":e?"Quote Sell":"Quote Buy"},t._getBaseCostLabelStringForRender=function(e){return t.props.qouteInUSD?e?"Base Sell (USD)":"Base Buy (USD)":e?"Base Sell":"Base Buy"},t._getPriceMarketRender=function(){var e=t.props,n=e.quoteToken,r=e.quoteState,a=t.state.geckoPrice;return r===N.o.Error?"---":r===N.o.Loading?c.a.createElement(pe,null):a&&a.gt(0)?"".concat(a.toFormat(8)," ").concat(Object(w.b)(n.symbol)):"---"},t._onTrackerPriceClick=function(e){(0,t.props.onTrackerPriceClick)(t.state.geckoPrice)},t}return Object(V.a)(n,e),n}(c.a.Component),Oe=Object(v.c)((function(e){return{qouteInUSD:Object(k.mb)(e),tokenPrices:Object(k.Gb)(e),web3State:Object(k.Sb)(e)}}),(function(e){return{onFetchTakerAndMakerFee:function(n,t,r){return e(Object(U.f)(n,t,r,r))}}}))(ge);function je(){var e=Object(r.a)(["\n    margin-left: 5px;\n"]);return je=function(){return e},e}function ve(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return ve=function(){return e},e}function he(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: space-around;\n"]);return he=function(){return e},e}function xe(){var e=Object(r.a)(["\n    height: ",";\n    margin-bottom: 5px;\n    position: relative;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(r.a)(["\n    color: ",";\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 21px;\n    text-align: right;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(r.a)(["\n    display: flex;\n    position: absolute;\n    right: 14px;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 12;\n"]);return ye=function(){return e},e}function ke(){var e=Object(r.a)(["\n    background-color: ",";\n    border-radius: ",";\n    border: 1px solid ",";\n    color: ",";\n    font-feature-settings: 'tnum' 1;\n    font-size: 14px;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n"]);return ke=function(){return e},e}function Se(){var e=Object(r.a)(["\n    background-color: ",";\n    border-radius: ",";\n    border: 1px solid ",";\n    color: ",";\n    font-feature-settings: 'tnum' 1;\n    font-size: 14px;\n    height: 100%;\n    padding-left: 14px;\n    padding-right: 60px;\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n"]);return Se=function(){return e},e}function Be(){var e=Object(r.a)(["\n    height: ",";\n    margin-bottom: 5px;\n    position: relative;\n"]);return Be=function(){return e},e}function we(){var e=Object(r.a)(["\n    color: ",";\n    font-size: 11px;\n    font-weight: normal;\n    line-height: normal;\n    margin: 0;\n"]);return we=function(){return e},e}function Te(){var e=Object(r.a)(["\n    color: ",";\n    font-size: 13px;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0;\n"]);return Te=function(){return e},e}function Ce(){var e=Object(r.a)(["\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 5px;\n"]);return Ce=function(){return e},e}function Ae(){var e=Object(r.a)(["\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 5px;\n"]);return Ae=function(){return e},e}function Fe(){var e=Object(r.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n"]);return Ne=function(){return e},e}function Le(){var e=Object(r.a)(["\n    margin-bottom: ",";\n"]);return Le=function(){return e},e}var qe=Object(o.c)(M.a)(Le(),l.d.verticalSeparationSm),Me=o.c.div(Ne()),_e=o.c.div(Fe()),Pe=o.c.div(Ae()),De=o.c.div(Ce()),ze=o.c.label(Te(),(function(e){return e.color||e.theme.componentsTheme.textColorCommon})),Qe=o.c.label(we(),(function(e){return e.color||e.theme.componentsTheme.textColorCommon})),Re=o.c.div(Be(),l.d.fieldHeight),Ie=Object(o.c)(L.a)(Se(),(function(e){return e.theme.componentsTheme.textInputBackgroundColor}),l.d.borderRadius,(function(e){return e.theme.componentsTheme.textInputBorderColor}),(function(e){return e.theme.componentsTheme.textInputTextColor})),Ve=o.c.input(ke(),(function(e){return e.theme.componentsTheme.textInputBackgroundColor}),l.d.borderRadius,(function(e){return e.theme.componentsTheme.textInputBorderColor}),(function(e){return e.theme.componentsTheme.textInputTextColor})),Ue=o.c.div(ye()),We=o.c.span(Ee(),(function(e){return e.theme.componentsTheme.textInputTextColor})),He=o.c.div(xe(),l.d.fieldHeight),$e=o.c.div(he()),Ge=o.c.div(ve()),Je=Object(o.c)(D.b)(je()),Ye=function(e){return c.a.createElement(Ue,null,c.a.createElement(We,null,Object(w.b)(e.tokenSymbol)))},Ze=Object(v.c)((function(e){return{web3State:Object(k.Sb)(e),currencyPair:Object(k.r)(e),orderPriceSelected:Object(k.ib)(e),quoteTokenBalance:Object(k.ob)(e),baseTokenBalance:Object(k.k)(e),totalEthBalance:Object(k.Ib)(e)}}),(function(e){return{onSubmitLimitOrder:function(n,t,r,a){return e(Object(y.Kc)(n,t,r,a))},onSubmitMultipleLimitOrders:function(n,t,r,a,c,o){return e(Object(y.Oc)(n,t,r,a,c,o))},onFetchTakerAndMakerFee:function(n,t,r){return e(Object(y.H)(n,t,r))},onSetOrderSecondsExpirationTime:function(n){return e(Object(y.ic)(n))}}}))((function(e){var n=Object(a.useState)(N.o.NotLoaded),t=Object(O.a)(n,2),r=t[0],o=t[1],l=Object(a.useState)(),i=Object(O.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(),b=Object(O.a)(m,2),d=b[0],p=b[1],L=Object(a.useState)(),M=Object(O.a)(L,2),D=M[0],Q=M[1],R=Object(a.useState)(),I=Object(O.a)(R,2),V=I[0],U=I[1],W=Object(a.useState)(0),H=Object(O.a)(W,2),$=H[0],G=H[1],J=Object(a.useState)(300),Y=Object(O.a)(J,2),Z=Y[0],K=Y[1],X=Object(a.useState)(50),ee=Object(O.a)(X,2),ne=ee[0],te=ee[1],re=Object(a.useState)({btnMsg:null,cardMsg:null}),ae=Object(O.a)(re,2),ce=ae[0],oe=ae[1],le=Object(a.useState)(new j.BigNumber(0)),ie=Object(O.a)(le,2),ue=ie[0],se=ie[1],me=e.web3State,be=e.quoteTokenBalance,de=e.baseTokenBalance,fe=e.totalEthBalance,pe=Object(S.a)(),ge=Object(v.e)(k.hb),je=Object(v.e)(k.kb),ve=Object(v.e)(k.nb),he=Object(v.e)(k.j),xe=Object(v.e)(k.ab),Ee=Object(a.useState)(xe),ye=Object(O.a)(Ee,2),ke=(ye[0],ye[1],Object(v.d)()),Se=new URLSearchParams(Object(h.g)().search).get("baseToken"),Be=he.decimals;Object(a.useEffect)((function(){!function(){var e;g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(Se){n.next=2;break}return n.abrupt("return");case 2:if(Se.toLowerCase()!==he.symbol.toLowerCase()&&Se.toLowerCase()!==he.address.toLowerCase()){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,g.a.awrap(pe.findTokenOrFetchIt(Se));case 6:if(!(e=n.sent)){n.next=13;break}if(e!==he){n.next=12;break}return n.abrupt("return");case 12:ke(Object(y.Zb)({baseToken:e,quoteToken:ve}));case 13:case"end":return n.stop()}}))}()}),[Se,he]);var we=be&&Object(S.e)(be.token.symbol),Te=de&&Object(S.e)(de.token.symbol),Ce=we?Object(w.f)(fe||x.rb,18):Object(w.f)(be&&be.balance||x.rb,ve&&ve.decimals||18),Ae=Te?fe:de&&de.balance||x.rb,Fe=new j.BigNumber(1).div(new j.BigNumber(10).pow(8)),Ne=Object(w.h)(String(Fe),Be),Le=ue,Ue=null===Le||Le.isZero(),We=A(Object(w.f)(ue,he&&he.decimals||18).multipliedBy(D||x.rb),new j.BigNumber(ne).dividedBy(100),!1).gt(Ce),Ze=A(ue,new j.BigNumber(ne).dividedBy(100),!0).gt(Ae),Ke=Ue||!1,Xe=function(){e.onSetOrderSecondsExpirationTime(null)};Object(a.useEffect)((function(){ge&&ge.gt(0)&&(Q(ge),V&&G(C(ge,V).toNumber()))}),[ge]),Object(a.useEffect)((function(){je&&je.gt(0)&&(U(je),D&&G(C(je,D).toNumber()))}),[je]);var en=function(e){var n,t,r,a,c,l,i;return g.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(n={buyTokenAddress:he.address,sellTokenAddress:ve.address,buyAmount:e,sellAmount:void 0,from:void 0,isETHSell:Object(S.e)(ve.symbol)},t={buyTokenAddress:ve.address,sellTokenAddress:he.address,buyAmount:void 0,sellAmount:e,from:void 0,isETHSell:Object(S.e)(he.symbol)},me===N.q.Done){u.next=4;break}return u.abrupt("return");case 4:return u.prev=4,o(N.o.Loading),u.next=8,g.a.awrap(Object(E.a)());case 8:return r=u.sent,u.next=11,g.a.awrap(r.getSwapQuoteAsync(n));case 11:return a=u.sent,s(a),u.next=15,g.a.awrap(r.getSwapQuoteAsync(t));case 15:c=u.sent,p(c),l=T(!1,a,he,ve),i=T(!0,c,he,ve),Q(i),U(l),G(C(i,l).toNumber()),o(N.o.Done),u.next=28;break;case 25:u.prev=25,u.t0=u.catch(4),o(N.o.Error);case 28:case"end":return u.stop()}}),null,null,[[4,25]])},nn=Object(P.a)(ue,0);Object(a.useEffect)((function(){r===N.o.Error?(oe({cardMsg:"Error fetching quote",btnMsg:"Try again"}),setTimeout((function(){oe(Object(f.a)({},ce,{btnMsg:null}))}),2e3),setTimeout((function(){oe(Object(f.a)({},ce,{cardMsg:null}))}),4e3)):null!==ce.cardMsg&&oe({cardMsg:null,btnMsg:null})}),[r]),Object(a.useEffect)((function(){nn&&en(Le)}),[nn]),Object(a.useEffect)((function(){ue.isGreaterThan(0)&&en(Le)}),[he]);var tn=function(e){oe({btnMsg:"Error",cardMsg:e.message}),setTimeout((function(){oe(Object(f.a)({},ce,{btnMsg:null}))}),2e3),setTimeout((function(){oe(Object(f.a)({},ce,{cardMsg:null}))}),4e3)},rn=function(e){if(e){if(de){var n=Object(S.e)(de.token.symbol)?fe:de.balance,t=Object(w.e)(n,de.token.decimals,de.token.displayDecimals),r=Object(w.b)(de.token.symbol);return"Balance: ".concat(t,"  ").concat(r)}return null}if(be){var a=Object(S.e)(be.token.symbol)?fe:be.balance,c=Object(w.e)(a,be.token.decimals,be.token.displayDecimals),o=Object(w.b)(be.token.symbol);return"Balance: ".concat(c,"  ").concat(o)}return null},an=!he||he.listed;return c.a.createElement(c.a.Fragment,null,!an&&c.a.createElement(_.a,{fontSize:_.c.Large,text:"Token inserted by User. Please proceed with caution and do your own research!"}),c.a.createElement(qe,null,c.a.createElement(Me,null,c.a.createElement(ze,null,"Beta System: Manual Market Maker "),c.a.createElement(Pe,null,c.a.createElement(ze,null,"Insert Reference Base Amount"),c.a.createElement(q.a,{onClick:function(){en(ue)},variant:N.d.Primary}," ","\u27f3"," ")),c.a.createElement(Re,null,c.a.createElement(Ie,{decimals:Be,min:x.rb,onChange:function(e){se(e)},value:Le,step:Ne,placeholder:new j.BigNumber(0).toString(),valueFixedDecimals:8}),c.a.createElement(Ye,{tokenSymbol:he.symbol})),c.a.createElement(De,null,c.a.createElement(Qe,null,rn(!0)),c.a.createElement(Qe,null,rn(!1))),c.a.createElement(Pe,null,c.a.createElement(ze,null,"Buy Price per token")),c.a.createElement(He,null,c.a.createElement(Ie,{decimals:0,min:x.rb,onChange:function(e){Q(e),V&&G(C(e,V).toNumber())},value:D,step:new j.BigNumber(1).div(new j.BigNumber(10).pow(12)),placeholder:new j.BigNumber(1).div(new j.BigNumber(10).pow(10)).toString(),valueFixedDecimals:10}),c.a.createElement(Ye,{tokenSymbol:ve.symbol})),c.a.createElement(Pe,null,c.a.createElement(ze,null,"Sell Price per token")),c.a.createElement(He,null,c.a.createElement(Ie,{decimals:0,min:x.rb,onChange:function(e){U(e),D&&G(C(D,e).toNumber())},value:V,step:new j.BigNumber(1).div(new j.BigNumber(10).pow(12)),placeholder:new j.BigNumber(1).div(new j.BigNumber(10).pow(10)).toString(),valueFixedDecimals:10}),c.a.createElement(Ye,{tokenSymbol:ve.symbol})),c.a.createElement(z.a,null),c.a.createElement($e,null,c.a.createElement(Ge,null,c.a.createElement(Pe,null,c.a.createElement(ze,null,"Spread (%)"),c.a.createElement(Je,{description:"Lower spreads will be more likely to be fill"})),c.a.createElement(He,null,c.a.createElement(Ve,{type:"number",value:$,min:-100,step:1e-4,max:100,onChange:function(e){var n=new j.BigNumber(e.currentTarget.value);if(D&&V){var t=function(e,n,t){var r=t.dividedBy(100),a=e.minus(n.multipliedBy(new B.BigNumber(1).minus(r))).dividedBy(new B.BigNumber(2).minus(r));return[e.minus(a),n.plus(a)]}(D,V,n);Q(t[0]),U(t[1])}G(n.toNumber())}}))),c.a.createElement(Ge,null,c.a.createElement(Pe,null,c.a.createElement(ze,null,"Order Ratio between Bid and Ask (%)"),c.a.createElement(Je,{description:"Higher will represent a higher ask size, lower represent a higher bid size"})),c.a.createElement(He,null,c.a.createElement(Ve,{type:"number",value:ne,min:0,step:1,max:100,onChange:function(e){te(Number(e.currentTarget.value))}}))),c.a.createElement(Ge,null,c.a.createElement(Pe,null,c.a.createElement(ze,null,"Order Expire Time (Seconds): "),c.a.createElement(Je,{description:"Expire at: ".concat(new Date(Object(F.d)(new j.BigNumber(Z)).multipliedBy(1e3).toNumber()).toString())})),c.a.createElement(He,null,c.a.createElement(Ve,{type:"number",value:Z,min:20,step:1,onChange:function(e){K(Number(e.currentTarget.value))}})))),c.a.createElement(Oe,{tokenAmount:Le,baseToken:he,quoteToken:ve,buyQuote:u,sellQuote:d,quoteState:r,inventoryBalance:ne,onTrackerPriceClick:function(e){Q(e),U(e),G(0)}}),c.a.createElement(_e,null,c.a.createElement(q.a,{disabled:me!==N.q.Done||Ke||We,icon:ce.btnMsg?N.c.Warning:void 0,onClick:function(){var n,t,r,a;return g.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(n=ue,t=N.j.Buy,D){c.next=4;break}return c.abrupt("return");case 4:return e.onSetOrderSecondsExpirationTime(new j.BigNumber(Z)),c.next=7,g.a.awrap(e.onFetchTakerAndMakerFee(n,D,t));case 7:return r=c.sent,c.prev=8,a=A(n,new j.BigNumber(ne).dividedBy(100),!1),c.next=12,g.a.awrap(e.onSubmitLimitOrder(a,D,t,r));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(8),tn(c.t0);case 17:Xe();case 18:case"end":return c.stop()}}),null,null,[[8,14]])},variant:N.d.Buy},"Place Buy Limit Order"),c.a.createElement(q.a,{disabled:me!==N.q.Done||Ke||Ze,icon:ce.btnMsg?N.c.Warning:void 0,onClick:function(){var n,t,r,a;return g.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(n=ue,t=N.j.Sell,V){c.next=4;break}return c.abrupt("return");case 4:return c.next=6,g.a.awrap(e.onSetOrderSecondsExpirationTime(new j.BigNumber(Z)));case 6:return c.next=8,g.a.awrap(e.onFetchTakerAndMakerFee(n,V,t));case 8:return r=c.sent,c.prev=9,a=A(n,new j.BigNumber(ne).dividedBy(100),!0),c.next=13,g.a.awrap(e.onSubmitLimitOrder(a,V,t,r));case 13:c.next=18;break;case 15:c.prev=15,c.t0=c.catch(9),tn(c.t0);case 18:Xe();case 19:case"end":return c.stop()}}),null,null,[[9,15]])},variant:N.d.Sell},"Place Sell Limit Order")))),ce.cardMsg?c.a.createElement(_.a,{fontSize:_.c.Large,text:ce.cardMsg}):null)})),Ke=t(2079);function Xe(){var e=Object(r.a)(["\n    align-items: center;\n    display: flex;\n    margin: 10px;\n    flex-direction: column;\n    padding: 12px 0;\n    position: relative;\n    z-index: 1;\n    &:last-of-type {\n        margin-bottom: 20px;\n    }\n"]);return Xe=function(){return e},e}function en(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n"]);return en=function(){return e},e}function nn(){var e=Object(r.a)(["\n    color: ",";\n    font-size: 14px;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0;\n"]);return nn=function(){return e},e}function tn(){var e=Object(r.a)(["\n    height: 300px;\n    overflow: auto;\n    @media (max-width: ",") {\n        max-height: 300px;\n    }\n"]);return tn=function(){return e},e}var rn=Object(o.c)(Ke.a)(tn(),l.c.sm),an=o.c.label(nn(),(function(e){return e.color||e.theme.componentsTheme.textColorCommon})),cn=o.c.div(en()),on=o.c.div(Xe()),ln=[{label:"Protocol Fees",field:"protocolFeesCollected"},{label:"Weth Fees",field:"totalWethFeesCollected"},{label:"Total Orders",field:"totalOrders"},{label:"Total Buy Orders",field:"totalBuyOrders"},{label:"Total Sell Orders",field:"totalSellOrders"},{label:"Median Buy Price",field:"medianBuyPrice"},{label:"Median Sell Price",field:"medianSellPrice"},{label:"Total Buy Base Volume",field:"totalBuyBaseVolume"},{label:"Total Sell Base Volume",field:"totalSellBaseVolume"},{label:"Total Buy Quote Volume",field:"totalBuyQuoteVolume"},{label:"Total Sell Quote Volume",field:"totalSellQuoteVolume"},{label:"Total Quote Volume",field:"totalQuoteVolume"},{label:"Total Base Volume",field:"totalBaseVolume"}],un=function(){var e,n=Object(v.e)(k.t);return e=ln.map((function(e,t){return c.a.createElement(on,{key:t},c.a.createElement(an,null,e.label),c.a.createElement(an,null,n?n[e.field].toString():0))})),c.a.createElement(rn,{title:"Market Maker Stats"}," ",c.a.createElement(cn,null,e))},sn=t(2225),mn=t(2186);function bn(){var e=Object(r.a)(["\n    min-width: 200px;\n"]);return bn=function(){return e},e}function dn(){var e=Object(r.a)(["\n    max-height: 500px;\n"]);return dn=function(){return e},e}function fn(){var e=Object(r.a)(["\n    align-items: center;\n    justify-content: center;\n"]);return fn=function(){return e},e}function pn(){var e=Object(r.a)(["\n    margin-left: 0;\n    &:last-child {\n        margin-left: 0;\n    }\n    @media (max-width: ",") {\n        width: 100%;\n    }\n    @media (min-width: ",") {\n        max-width: 60%;\n    }\n"]);return pn=function(){return e},e}t.d(n,"default",(function(){return hn}));var gn=Object(o.c)(m.a)(pn(),l.c.sm,l.c.md),On=Object(o.c)(b.a)(fn()),jn=Object(o.c)(mn.a)(dn()),vn=Object(o.c)(d.a)(bn()),hn=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(On,null,c.a.createElement(gn,null,c.a.createElement(Ze,null)),c.a.createElement(sn.a,{defaultDepth:50}),c.a.createElement(vn,null),c.a.createElement(s.a,null),c.a.createElement(i.a,null),c.a.createElement(u.a,null)),c.a.createElement(b.a,null,c.a.createElement(gn,null,c.a.createElement(jn,null)),c.a.createElement(gn,null,c.a.createElement(un,null))))}}}]);