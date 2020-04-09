(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),s=(t(14),t(6)),l=t(5),u=t(1),i=t(2),m=t(4),p=t(3),d=(t(15),function(e){var n=e.totalCounters;return console.log("NavBar - Rendered"),r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Number of active Counters:",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},n)))}),v=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,n){console.log("prevProps",e),console.log("prevState",n)}},{key:"componentWillUnmount",value:function(){console.log("Conuter - unnmount")}},{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),r.a.createElement("div",null,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment"),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2"},"Decrement"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),b=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){console.log("Counters - Rendered");var e=this.props,n=e.onReset,t=e.onDelete,a=e.onIncrement,o=e.onDecrement,c=e.counters;return r.a.createElement("div",null,r.a.createElement("button",{onClick:n,className:"btn btn-primary btn-sm m-2"},"Reset All"),c.map((function(e){return r.a.createElement(v,{key:e.id,onDelete:t,onIncrement:a,onDecrement:o,counter:e})})))}}]),t}(a.Component),f=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){var e;return Object(u.a)(this,t),(e=n.call(this)).state={counters:[{id:1,value:1},{id:2,value:0},{id:3,value:0},{id:4,value:5}]},e.handleIncrement=function(n){var t=Object(l.a)(e.state.counters),a=t.indexOf(n);t[a]=Object(s.a)({},n),t[a].value++,e.setState({counters:t})},e.handleDecrement=function(n){var t=Object(l.a)(e.state.counters),a=t.indexOf(n);t[a]=Object(s.a)({},n),t[a].value--,e.setState({counters:t})},e.handleReset=function(){var n=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:n})},e.handleDelete=function(n){var t=e.state.counters.filter((function(e){return e.id!==n}));e.setState({counters:t})},console.log("App - Constructor"),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("App - mounted")}},{key:"render",value:function(){return console.log("App - rendered"),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}," ")," ",r.a.createElement("main",{className:"container"},r.a.createElement(b,{onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,counters:this.state.counters,onDelete:this.handleDelete}," ")," ")," ")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(16);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e3a45391.chunk.js.map