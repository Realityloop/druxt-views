(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{416:function(e,t,i){"use strict";i.r(t);i(43),i(312);var r=i(319),n=(i(97),i(57)),s=i(350),u=i(313),a={name:"DruxtBlockViewsBlock",mixins:[i(409).a],fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResources({resource:"view--view",query:(new s.DrupalJsonApiParams).addFilter("drupal_internal__id",e.viewId).addFields("view--view",["id"])});case 2:i=t.sent,e.uuid=i[0].id;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{uuid:!1}},computed:{displayId:function(){return this.settings.id.match(/views_block\:(.*?)-(.*)/)[2]},propsData:function(){if(!this.uuid)return!1;this.settings.id.match(/views_block\:(.*?)-(.*)/);return{displayId:this.displayId,uuid:this.uuid,viewId:this.viewId}},viewId:function(){return this.settings.id.match(/views_block\:(.*?)-(.*)/)[1]}},methods:Object(r.a)({},Object(u.a)({getResources:"druxtRouter/getResources"}))},c=i(42),d=Object(c.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return this.$fetchState.pending?this._e():t("div",[t("DruxtView",this._b({},"DruxtView",this.propsData,!1))],1)}),[],!1,null,null,null);t.default=d.exports}}]);