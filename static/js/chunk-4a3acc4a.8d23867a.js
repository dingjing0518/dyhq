(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a3acc4a"],{"01d4":function(e,t,a){"use strict";var n=a("112d"),s=a.n(n);s.a},"112d":function(e,t,a){},3159:function(e,t,a){},"4bb9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carManager"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 在场轨迹表\n      ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.valueA,callback:function(t){e.valueA=t},expression:"valueA"}}),a("el-date-picker",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.valueB,callback:function(t){e.valueB=t},expression:"valueB"}}),a("el-button",{staticClass:"icon-search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.onsearch(1)}}},[e._v("查询")]),a("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"序号",width:"100px","class-name":"table"}}),a("el-table-column",{attrs:{prop:"ptCreatTime",label:"时间",align:"center","class-name":"table"}}),a("el-table-column",{attrs:{prop:"ptLincensePlateId",label:"车牌号",align:"center","class-name":"table"}}),a("el-table-column",{attrs:{prop:"jcName",label:"摄像机",align:"center","class-name":"table"}}),a("el-table-column",{attrs:{prop:"ptStatus",label:"轨迹信息",align:"center","class-name":"table"}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,"page-sizes":[50,100],total:e.totalRecords,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},s=[],r=(a("386d"),a("a15e"),{name:"carManager",data:function(){return{cur_page:1,pagesize:50,tableData:[],select_word:"",valueA:"",valueB:"",totalRecords:0,numberer:0,condition:0}},created:function(){this.getData()},methods:{refresh:function(){this.getData(),this.select_word=""},handleSizeChange:function(e){0==this.numberer?(this.pagesize=e,console.log(e),this.getData(1)):1==this.numberer?(this.pagesize=e,this.search(1)):(this.pagesize=e,this.onsearch(1))},handleCurrentChange:function(e){0==this.numberer?(this.cur_page=e,this.getData()):1==this.numberer?(this.cur_page=e,this.search(2)):(this.cur_page=e,this.onsearch(2))},handleSelectionChange:function(){},getData:function(e){1==e&&(this.cur_page=1),this.numberer=0;var t=new Date,a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();n<10&&(n="0"+n),s<10&&(s="0"+s);var r=a+"-"+n+"-"+s;this.valueA=r,this.valueB=r,console.log(window.localStorage.getItem("parkId"));var c=this;c.tableData.length=0,this.$axios({url:"jinshiPresenceTrack/selectPresenceTrackAll",method:"post",data:{pageNum:c.cur_page,pageSize:c.pagesize,parkId:window.localStorage.getItem("parkId")}}).then(function(e){c.tableData=[];for(var t=0;t<e.data.PresenceTrackData.length;t++){var a=new Date(e.data.PresenceTrackData[t].ptCreatTime),n=a.getFullYear()+"-",s=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",r=(a.getDate()<10?"0"+a.getDate():a.getDate())+" ",l=(a.getHours()<10?"0"+a.getHours():a.getHours())+":",o=(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":",i=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds(),u=n+s+r+l+o+i;e.data.PresenceTrackData[t].ptCreatTime=u}c.tableData=e.data.PresenceTrackData,c.totalRecords=e.data.PresenceTrackRecords}).catch(function(e){console.log(e)})},onsearch:function(e){1==e&&(this.cur_page=1),this.numberer=2;var t=this;console.log(window.localStorage.getItem("parkId")),this.$axios({url:"jinshiPresenceTrack/selectPresenceTrackByTime",method:"post",data:{keyWord:t.select_word,pageNum:t.cur_page,pageSize:t.pagesize,startTime:t.valueA,endTime:t.valueB,parkId:window.localStorage.getItem("parkId")}}).then(function(e){if(e.status<=200){t.tableData=[],console.log(e,"78789");for(var a=0;a<e.data.PresenceTrackData.length;a++){var n=new Date(e.data.PresenceTrackData[a].ptCreatTime),s=n.getFullYear()+"-",r=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",c=(n.getDate()<10?"0"+n.getDate():n.getDate())+" ",l=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",o=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",i=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds(),u=s+r+c+l+o+i;e.data.PresenceTrackData[a].ptCreatTime=u}t.tableData=e.data.PresenceTrackData,t.totalRecords=e.data.PresenceTrackRecords}}).catch(function(e){t.$message.error("查询失败: "+e),console.log(e)})}}}),c=r,l=(a("6205"),a("01d4"),a("2877")),o=Object(l["a"])(c,n,s,!1,null,"1e45c16e",null);t["default"]=o.exports},6205:function(e,t,a){"use strict";var n=a("3159"),s=a.n(n);s.a}}]);