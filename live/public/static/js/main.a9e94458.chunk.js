(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){"use strict";a.d(t,"a",function(){return n});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},14:function(e,t,a){"use strict";var n=a(2),i=a(3),r=a(5),s=a(4),c=a(6),o=a(0),m=a.n(o),l=a(1),u=a(7),d=a.n(u),h=a(12),b=a.n(h),p=function(){return m.a.createElement("div",{className:"row"},m.a.createElement("h2",{className:"mx-auto"},"SitStandCounter"))},T=function(e){return e<10?"0".concat(e):"".concat(e)},v=function(e){return m.a.createElement("div",{className:"row"},m.a.createElement("h2",{className:"mx-auto"},"".concat(T(e.currentTime.get("minutes")),":").concat(T(e.currentTime.get("seconds")))))},f=0,g=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(s.a)(t).call(this))).getButton=e.getButton.bind(Object(l.a)(Object(l.a)(e))),e}return Object(c.a)(t,e),Object(i.a)(t,[{key:"getButton",value:function(){return this.props.timerState===f?m.a.createElement("button",{className:"btn btn-success mx-auto",onClick:this.props.startTimer},"Start"):1===this.props.timerState?m.a.createElement("button",{className:"btn btn-danger mx-auto",onClick:this.props.stopTimer},"Stop"):2===this.props.timerState?m.a.createElement("button",{className:"btn btn-info mx-auto",onClick:this.props.stopTimer},"Reset"):void 0}},{key:"render",value:function(){return m.a.createElement("div",{className:"row"},this.getButton())}}]),t}(o.Component),j=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(s.a)(t).call(this))).handleChange=e.handleChange.bind(Object(l.a)(Object(l.a)(e))),e}return Object(c.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=this.props.baseTime;"minutes"===e.target.id&&t.subtract(t.get("minutes"),"minutes").add(parseInt(e.target.value,10),"minutes"),"seconds"===e.target.id&&t.subtract(t.get("seconds"),"seconds").add(parseInt(e.target.value,10),"seconds"),this.props.setBaseTime(t)}},{key:"render",value:function(){return m.a.createElement("div",{className:"row"},m.a.createElement("h2",{className:"text-primary"},"Set Timer Option"),m.a.createElement("div",{className:"row control-row"},m.a.createElement("div",{className:"form-inline"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("label",{htmlFor:"minutes"},"Minutes")),m.a.createElement("div",{className:"col-sm-9"},m.a.createElement("input",{id:"minutes",className:"form-control",type:"range",min:"0",max:"60",defaultValue:this.props.baseTime.get("minutes"),onChange:this.handleChange})))),m.a.createElement("div",{className:"row control-row"},m.a.createElement("div",{className:"form-inline"},m.a.createElement("div",{className:"col-sm-3"},m.a.createElement("label",{htmlFor:"seconds"},"Seconds")),m.a.createElement("div",{className:"col-sm-9"},m.a.createElement("input",{id:"seconds",className:"form-control",type:"range",min:"0",max:"59",defaultValue:this.props.baseTime.get("seconds"),onChange:this.handleChange})))))}}]),t}(o.Component),O=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(s.a)(t).call(this))).state={currentTime:d.a.duration(20,"minutes"),baseTime:d.a.duration(20,"minutes"),timerState:f,timer:null},e.setBaseTime=e.setBaseTime.bind(Object(l.a)(Object(l.a)(e))),e.startTimer=e.startTimer.bind(Object(l.a)(Object(l.a)(e))),e.stopTimer=e.stopTimer.bind(Object(l.a)(Object(l.a)(e))),e.reduceTimer=e.reduceTimer.bind(Object(l.a)(Object(l.a)(e))),e}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("time")&&this.setState({currentTime:d.a.duration(localStorage.getItem("time")),baseTime:d.a.duration(localStorage.getItem("time"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("time",t.baseTime)}},{key:"setBaseTime",value:function(e){this.setState({baseTime:e,currentTime:e})}},{key:"startTimer",value:function(){this.setState({timerState:1,timer:setInterval(this.reduceTimer,1e3)})}},{key:"stopTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),this.setState({timerState:f,timer:null,currentTime:d.a.duration(this.state.baseTime)})}},{key:"reduceTimer",value:function(){if(0!==this.state.currentTime.get("minutes")||0!==this.state.currentTime.get("seconds")){var e=d.a.duration(this.state.currentTime);e.subtract(1,"second"),this.setState({currentTime:e})}else this.completeTimer()}},{key:"completeTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),this.setState({timerState:2,timer:null}),b.a.create("Time to change the table",{body:"Time to stand or sit",timeout:4e4})}},{key:"render",value:function(){return m.a.createElement("div",{className:"container-fluid"},m.a.createElement(p,null),m.a.createElement(v,{currentTime:this.state.currentTime}),m.a.createElement(g,{startTimer:this.startTimer,stopTimer:this.stopTimer,timerState:this.state.timerState}),1!==this.state.timerState&&m.a.createElement(j,{baseTime:this.state.baseTime,setBaseTime:this.setBaseTime}))}}]),t}(o.Component),E=(a(24),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"card app-content mx-auto"},m.a.createElement("div",{className:"card-body"},m.a.createElement(O,null)))}}]),t}(o.Component));t.a=E},15:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t),function(e){var t=a(0),n=a.n(t),i=a(11),r=a.n(i),s=(a(21),a(14)),c=a(13);a(26);e.jQuery=a(10),a(28),r.a.render(n.a.createElement(s.a,null),document.getElementById("root")),c.a()}.call(this,a(8))},21:function(e,t,a){},24:function(e,t,a){}},[[15,2,1]]]);
//# sourceMappingURL=main.a9e94458.chunk.js.map