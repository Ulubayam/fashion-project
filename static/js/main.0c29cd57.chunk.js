(this["webpackJsonpcimri-project"]=this["webpackJsonpcimri-project"]||[]).push([[0],{41:function(t,n,e){t.exports=e(68)},46:function(t,n,e){},68:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(34),i=e.n(o),c=(e(46),e(1)),l=e(2);function u(){var t=Object(c.a)(["\n  font-size: 18pt;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: lighter;\n  line-height: 40px;\n  text-align: center;\n  padding-top: 25px;\n"]);return u=function(){return t},t}function s(){var t=Object(c.a)(["\n  font-size: 24px;\n  width: 100%;\n  height: 100px;\n  background: white;\n  line-height: 1px;\n  -webkit-box-shadow: 2px 3px 5px rgba(57, 63, 72, 0.3);\n  -moz-box-shadow: 2px 3px 5px rgba(57, 63, 72, 0.3);\n  box-shadow: 3px 7px 5px rgba(57, 63, 72, 0.3);\n"]);return s=function(){return t},t}function p(){var t=Object(c.a)(["\n  width: 100%;\n  margin: 0 auto;\n"]);return p=function(){return t},t}var f=l.a.div(p()),d=l.a.header(s()),m=l.a.h1(u());var h=function(){return a.a.createElement(f,null,a.a.createElement(d,null,a.a.createElement(m,null,"Woman")))},v=e(6),b=e(9),g=e(10),x=e(12),E=e(11),O=e(13);function j(){var t=Object(c.a)(["\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 20px;\n"]);return j=function(){return t},t}var w=l.a.div(j()),k=function(t){function n(t){var e;return Object(b.a)(this,n),(e=Object(x.a)(this,Object(E.a)(n).call(this,t))).filterProducts=function(t){e.setState({activeFilter:t,reset:!1})},e.changeOrder=function(t){e.setState({order:t,reset:!1})},e.resetFilter=function(){e.setState((function(t){return{reset:!t.reset,activeFilter:"",order:""}}))},e.state={activeFilter:"",order:"",reset:!1},e}return Object(O.a)(n,t),Object(g.a)(n,[{key:"componentDidMount",value:function(){document.title="Home"}},{key:"componentWillUnmount",value:function(){document.title="Detail"}},{key:"render",value:function(){return a.a.createElement(w,null,a.a.createElement(G,{order:this.changeOrder}),a.a.createElement(K,{onFilterProducts:this.filterProducts,activeFilter:this.state.activeFilter,resetFilter:this.resetFilter}),a.a.createElement(Pt,{activeFilter:this.state.activeFilter,order:this.state.order,reset:this.state.reset}))}}]),n}(a.a.Component),y=e(17),F=e.n(y);function H(){var t=Object(c.a)(["\n  font-weight: 500;\n  display: block;\n  margin-bottom: 18px;\n  text-transform: uppercase;\n  color: #363636;\n  text-decoration: none;\n  transition: 0.3s;\n"]);return H=function(){return t},t}function D(){var t=Object(c.a)(["\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #ccc;\n  margin-bottom: 18px;\n"]);return D=function(){return t},t}function z(){var t=Object(c.a)(["\n  padding: 5px;\n"]);return z=function(){return t},t}function P(){var t=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f0f0;\n"]);return P=function(){return t},t}function S(){var t=Object(c.a)(["\n  width: 100%;\n"]);return S=function(){return t},t}function A(){var t=Object(c.a)(["\n  width: 380px;\n  position: relative;\n  box-shadow: 0 2px 7px #dfdfdf;\n  margin: 50px auto;\n  background: #fafafa;\n"]);return A=function(){return t},t}var C=l.a.div(A()),N=l.a.img(S()),W=l.a.div(P()),_=l.a.div(z()),M=l.a.span(D()),U=l.a.h4(H()),B=function(t){function n(t){var e;return Object(b.a)(this,n),(e=Object(x.a)(this,Object(E.a)(n).call(this,t))).getProduct=function(){var t="/product/"+e.props.match.params.id;F.a.get("".concat("https://cimri.free.beeceptor.com").concat(t),{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({productDetail:t.data[0].products})}))},e.state={productDetail:{}},e}return Object(O.a)(n,t),Object(g.a)(n,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){var t=this.state.productDetail,n=t.imageUrl,e=t.content,r=t.price;return a.a.createElement(C,null,a.a.createElement(W,null,a.a.createElement(N,{src:n})),a.a.createElement(_,null,a.a.createElement(M,null,"Woman"),a.a.createElement(U,null,"$",r),a.a.createElement("p",null,e)))}}]),n}(a.a.Component);var L=function(){return a.a.createElement(v.c,null,a.a.createElement(v.a,{exact:!0,path:"/",component:k}),a.a.createElement(v.a,{exact:!0,path:"/detail/:id",component:B}))};function T(){var t=Object(c.a)(["\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  border: 0;\n  border-bottom: 2px solid currentcolor;\n  border-radius: 0;\n  background-color: #ececec;\n  line-height: 20pt;\n  font-size: 14pt;\n  margin-top: 10px;\n  &:focus,\n  &:active {\n    outline: 0;\n    border-bottom-color: #ff6008;\n  }\n"]);return T=function(){return t},t}function $(){var t=Object(c.a)(["\n  list-style: none;\n  display: inline-block;\n  font-size: 18pt;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: lighter;\n  margin-left: 25px;\n"]);return $=function(){return t},t}function I(){var t=Object(c.a)(["\n  float: right;\n"]);return I=function(){return t},t}var J=l.a.ul(I()),R=l.a.li($()),q=l.a.select(T()),G=function(t){function n(){var t,e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(x.a)(this,(t=Object(E.a)(n)).call.apply(t,[this].concat(a)))).handleChange=function(t){e.props.order(t.target.value)},e}return Object(O.a)(n,t),Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement(J,null,a.a.createElement(R,null,"Sort By"),a.a.createElement(R,null,a.a.createElement(q,{onChange:this.handleChange,placeholder:"Sort"},a.a.createElement("option",{value:""},"Select Option"),a.a.createElement("option",{value:"high"},"High to Low price"),a.a.createElement("option",{value:"low"},"Low to High price"))))}}]),n}(a.a.Component);var K=function(t){return a.a.createElement("div",null,a.a.createElement(yt,{onFilterProducts:t.onFilterProducts,activeFilter:t.activeFilter,resetFilter:t.resetFilter}))},Q=e(18);function V(){var t=Object(c.a)(["\n  position: relative;\n  padding-top: 20px;\n  display: inline-block;\n"]);return V=function(){return t},t}function X(){var t=Object(c.a)(["\n  position: absolute;\n  right: -20px;\n  top: 10px;\n  background: cornflowerblue;\n  text-align: center;\n  color: white;\n  padding: 5px 10px;\n  font-size: 20px;\n"]);return X=function(){return t},t}function Y(){var t=Object(c.a)(["\n  position: absolute;\n  left: -20px;\n  top: 10px;\n  background: #ff6008;\n  text-align: center;\n  color: white;\n  padding: 5px 10px;\n  font-size: 20px;\n"]);return Y=function(){return t},t}function Z(){var t=Object(c.a)(["\n  padding: 0 20px 0px;\n  font-size: 14pt;\n  line-height: 30pt;\n  color: black;\n"]);return Z=function(){return t},t}function tt(){var t=Object(c.a)(["\n  padding: 0 20px 20px;\n  font-size: 16pt;\n  line-height: 25pt;\n  color: black;\n"]);return tt=function(){return t},t}function nt(){var t=Object(c.a)(["\n  max-width: 100%;\n"]);return nt=function(){return t},t}function et(){var t=Object(c.a)(["\n  width: 263pt;\n  max-height: 390pt;\n  flex: 0 0 200px;\n  margin: 50px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\n"]);return et=function(){return t},t}var rt=l.a.article(et()),at=l.a.img(nt()),ot=l.a.div(tt()),it=l.a.div(Z()),ct=l.a.span(Y()),lt=l.a.span(X()),ut=l.a.div(V());var st=function(t){var n=t.products,e=n.id,r=n.imageUrl,o=n.name,i=n.price,c=n.badges;return a.a.createElement(rt,null,a.a.createElement(Q.b,{to:{pathname:"/detail/".concat(e),products:t},style:{textDecoration:"none"}},a.a.createElement(ut,null,c.map((function(t){return"discount"===t?a.a.createElement(lt,null,"Discount"):a.a.createElement(ct,null,"New")})),a.a.createElement(at,{src:r})),a.a.createElement(ot,null,o),a.a.createElement(it,null," $",i)))};function pt(){var t=Object(c.a)(["\n  border-top: 1px solid gray;\n"]);return pt=function(){return t},t}function ft(){var t=Object(c.a)(["\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 12pt;\n  line-height: 40pt;\n  letter-spacing: 1pt;\n  float: left;\n"]);return ft=function(){return t},t}function dt(){var t=Object(c.a)(["\n  float: left;\n  list-style-type: none;\n  padding: 0px 20px;\n  background-color: #ececec;\n"]);return dt=function(){return t},t}function mt(){var t=Object(c.a)(["\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  font-size: 12pt;\n  line-height: 40pt;\n  letter-spacing: 1pt;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  color: #ff6008;\n  margin-left: 100pt;\n"]);return mt=function(){return t},t}function ht(){var t=Object(c.a)(["\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  color: black;\n  font-size: 12pt;\n  letter-spacing: 1pt;\n  :hover {\n    color: #ff6008;\n  }\n  :active {\n    color: #ff6008;\n  }\n"]);return ht=function(){return t},t}function vt(){var t=Object(c.a)(["\n  display: flex;\n  margin-top: 10px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  flex-direction: column;\n  padding: 10px 0px;\n  :first-child {\n    border-top: none;\n  }\n"]);return vt=function(){return t},t}function bt(){var t=Object(c.a)(["\n  float: left;\n"]);return bt=function(){return t},t}var gt=l.a.aside(bt()),xt=l.a.li(vt()),Et=l.a.button(ht()),Ot=l.a.button(mt()),jt=l.a.ul(dt()),wt=l.a.span(ft()),kt=l.a.hr(pt());var yt=function(t){return a.a.createElement(gt,null,a.a.createElement(wt,null,"FILTERS"),a.a.createElement(Ot,{onClick:function(n){n.preventDefault(),t.resetFilter()}},"RESET"),a.a.createElement(kt,null),a.a.createElement(jt,null,a.a.createElement(xt,null,a.a.createElement(Et,{onClick:function(n){n.preventDefault(),t.onFilterProducts("new")},style:{textAlign:"left"}},"> New")),a.a.createElement(xt,null,a.a.createElement(Et,{onClick:function(n){n.preventDefault(),t.onFilterProducts("discount")}},"> Discount"))))};function Ft(){var t=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n"]);return Ft=function(){return t},t}function Ht(){var t=Object(c.a)(["\n  float: right;\n  width: 75%;\n  margin-top: 20px;\n"]);return Ht=function(){return t},t}var Dt=l.a.section(Ht()),zt=l.a.main(Ft()),Pt=function(t){function n(t){var e;return Object(b.a)(this,n),(e=Object(x.a)(this,Object(E.a)(n).call(this,t))).getProducts=function(){F.a.get("".concat("https://cimri.free.beeceptor.com").concat("/products"),{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){var n=t.data;e.setState({_products:n,products:n})}))},e.filterProducts=function(){var t=e.state._products.filter((function(t){return t.products.badges.includes(e.props.activeFilter)}));e.setState({products:t})},e.state={_products:[],products:[]},e}return Object(O.a)(n,t),Object(g.a)(n,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"componentDidUpdate",value:function(t){var n=this;t.activeFilter!==this.props.activeFilter&&this.filterProducts(),t.reset!==this.props.reset&&this.setState({products:this.state._products}),t.order!==this.props.order&&this.setState({products:this.state._products.sort((function(t,e){return n.compare(t.products.price,e.products.price)}))})}},{key:"compare",value:function(t,n){var e=0;return t<n&&(e=-1),t>n&&(e=1),e*("high"===this.props.order?-1:1)}},{key:"render",value:function(){return a.a.createElement(Dt,null,a.a.createElement(zt,null,this.state.products.map((function(t){return a.a.createElement(st,Object.assign({},t,{key:Math.random()}))}))))}}]),n}(a.a.Component);var St=function(){return a.a.createElement("div",null,a.a.createElement(h,null),a.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Q.a,null,a.a.createElement(St,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.0c29cd57.chunk.js.map