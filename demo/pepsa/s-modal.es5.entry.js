pepsa.loadBundle("s-modal",["exports"],function(e){var l=window.pepsa.h,t=function(){function e(){var e=this;this.closeModalHandler=function(){e.modalEl.style.display="none"}}return e.prototype.open=function(){this.modalEl.style.display="block"},e.prototype.render=function(){return l("div",null,l("div",{class:"dv001",onClick:this.closeModalHandler}),l("div",{class:"dv002"},l("div",{class:"dv003"},l("p",{class:"p001"},this.mtitle),l("p",{class:"p002",onClick:this.closeModalHandler},"close")),l("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"s-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{modalEl:{elementRef:!0},mtitle:{type:String,attr:"mtitle"},open:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"s-modal{display:none}s-modal .dv001{width:100%;height:100%;background-color:rgba(0,0,0,.3);z-index:100;position:fixed;left:0;top:0}s-modal .dv002{font:1em sans-serif;border:1px solid #ccc;-webkit-box-shadow:1px 1px 1px #ccc;box-shadow:1px 1px 1px #ccc;background-color:#fff;position:fixed;top:30%;width:350px;left:calc(50% - 175px);z-index:200;padding:15px}s-modal .dv002 .dv003{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:5px 0 15px 0}s-modal .dv002 .dv003 .p001{color:#000;font-size:1.5em;font-weight:700;margin-top:0;margin-bottom:0}s-modal .dv002 .dv003 .p002{color:rgba(255,0,0,.7);margin-left:auto;margin-top:0;margin-bottom:0;cursor:pointer}"},enumerable:!0,configurable:!0}),e}();e.SModal=t,Object.defineProperty(e,"__esModule",{value:!0})});