exports.ids=[6],exports.modules={MX9X:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"GoogleChartModule",function(){return GoogleChartModule});var common=__webpack_require__("ofXK"),core=__webpack_require__("fXoL");class GoogleChartServiceModule{}GoogleChartServiceModule.\u0275fac=function GoogleChartServiceModule_Factory(t){return new(t||GoogleChartServiceModule)},GoogleChartServiceModule.\u0275mod=core.Hc({type:GoogleChartServiceModule}),GoogleChartServiceModule.\u0275inj=core.Gc({imports:[[common.b]]});var router=__webpack_require__("tyNb");class GoogleChartService{constructor(){this.google=google}getGoogle(){return this.google}}GoogleChartService.\u0275fac=function GoogleChartService_Factory(t){return new(t||GoogleChartService)},GoogleChartService.\u0275prov=core.Fc({token:GoogleChartService,factory:GoogleChartService.\u0275fac,providedIn:GoogleChartServiceModule});var http=__webpack_require__("tk/3");const baseUrl="http://localhost:5000";class CrudService{constructor(http){this.http=http}getAllMetals(){return this.http.get(`${baseUrl}/metals`)}getCompanyPerformance(){return this.http.get(`${baseUrl}/companyPerformance`)}getFrameworkMarketshare(){return this.http.get(`${baseUrl}/frameworkMarketshare`)}getGaugeData(){return this.http.get(`${baseUrl}/gaugeData`)}getCountryData(){return this.http.get(`${baseUrl}/CountryData`)}createMetal(metal){return this.http.post(baseUrl,metal)}update(id,metal){return this.http.put(`${baseUrl}/${id}`,metal)}deleteMetal(id){return this.http.delete(`${baseUrl}/${id}`)}}CrudService.\u0275fac=function CrudService_Factory(t){return new(t||CrudService)(core.Tc(http.b))},CrudService.\u0275prov=core.Fc({token:CrudService,factory:CrudService.\u0275fac,providedIn:"root"});class LineChartComponent{constructor(gChartService,crudService){this.gChartService=gChartService,this.crudService=crudService,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["corechart","table"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const dbDataArr=[];this.crudService.getCompanyPerformance().subscribe(items=>{dbDataArr.push(...items);const tempDataArray=[];dbDataArr.forEach(item=>tempDataArray.push([item.year,item.sales,item.expenses]));const chartDataArr=[["Year","Sales","Expenses"],...tempDataArray],data=this.gLib.visualization.arrayToDataTable(chartDataArr);new this.gLib.visualization.LineChart(document.getElementById("divLineChart")).draw(data,{subtitle:"in millions of euro (EUR)",vAxis:{title:"Revenue (million euro)"},hAxis:{title:"Year"},width:350,height:300,curveType:"function",legend:{position:"bottom"}})})}}LineChartComponent.\u0275fac=function LineChartComponent_Factory(t){return new(t||LineChartComponent)(core.Jc(GoogleChartService),core.Jc(CrudService))},LineChartComponent.\u0275cmp=core.Dc({type:LineChartComponent,selectors:[["app-line-chart"]],decls:3,vars:0,consts:[[1,"title"],["id","divLineChart"]],template:function LineChartComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"h6",0),core.rd(1,"Yearly Company Performance (MM euro)"),core.Oc(),core.Kc(2,"div",1))},styles:["#divLineChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]});class PieChartComponent{constructor(gChartService,crudService){this.gChartService=gChartService,this.crudService=crudService,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["corechart"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const dbDataArr=[];this.crudService.getFrameworkMarketshare().subscribe(items=>{dbDataArr.push(...items);const chartDataArray=[];dbDataArr.forEach(item=>chartDataArray.push([item.framework,+item.share]));const chart=new this.gLib.visualization.PieChart(document.getElementById("divPieChart")),data=new this.gLib.visualization.DataTable;data.addColumn("string","Framework"),data.addColumn("number","%"),data.addRows([...chartDataArray]);chart.draw(data,{chartArea:{left:"3%",top:"3%",height:"94%",width:"94%"},is3D:!0,pieHole:.2,pieSliceTextStyle:{color:"white",margin:0,padding:0}})})}}PieChartComponent.\u0275fac=function PieChartComponent_Factory(t){return new(t||PieChartComponent)(core.Jc(GoogleChartService),core.Jc(CrudService))},PieChartComponent.\u0275cmp=core.Dc({type:PieChartComponent,selectors:[["app-pie-chart"]],decls:3,vars:0,consts:[[1,"title"],["id","divPieChart"]],template:function PieChartComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"h6",0),core.rd(1,"Top JS Framework Market Share"),core.Oc(),core.Kc(2,"div",1))},styles:["#divPieChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]});class GaugeChartComponent{constructor(gChartService,crudService){this.gChartService=gChartService,this.crudService=crudService,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["gauge"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const dbDataArr=[];this.crudService.getGaugeData().subscribe(items=>{dbDataArr.push(...items);const chartDataArray=[];dbDataArr.forEach(item=>chartDataArray.push([item.label,item.reading]));const data=this.gLib.visualization.arrayToDataTable([["Label","Value"],...chartDataArray]),options={width:400,height:110,redFrom:90,redTo:100,yellowFrom:75,yellowTo:90,minorTicks:5},chart=new this.gLib.visualization.Gauge(document.getElementById("divGaugeChart"));chart.draw(data,options),setInterval(()=>{data.setValue(0,1,40+Math.round(60*Math.random())),chart.draw(data,options)},13e3),setInterval(()=>{data.setValue(1,1,40+Math.round(60*Math.random())),chart.draw(data,options)},5e3),setInterval(()=>{data.setValue(2,1,60+Math.round(20*Math.random())),chart.draw(data,options)},26e3)})}}GaugeChartComponent.\u0275fac=function GaugeChartComponent_Factory(t){return new(t||GaugeChartComponent)(core.Jc(GoogleChartService),core.Jc(CrudService))},GaugeChartComponent.\u0275cmp=core.Dc({type:GaugeChartComponent,selectors:[["app-gauge-chart"]],decls:3,vars:0,consts:[[1,"title"],["id","divGaugeChart"]],template:function GaugeChartComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"h6",0),core.rd(1,"Gauges Displaying Data From Backend Postgres Database"),core.Oc(),core.Kc(2,"div",1))},styles:["#divGaugeChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]});class TableChartComponent{constructor(gChartService,crudService){this.gChartService=gChartService,this.crudService=crudService,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["table"]}),this.gLib.charts.setOnLoadCallback(this.drawTable.bind(this))}drawTable(){const dbDataArr=[];this.crudService.getCountryData().subscribe(items=>{dbDataArr.push(...items);const chartDataArray=[];dbDataArr.forEach(item=>chartDataArray.push([item.name,item.population,item.bordersmed]));const table=new this.gLib.visualization.Table(document.getElementById("divTableChart")),data=new this.gLib.visualization.DataTable;data.addColumn("string","Country"),data.addColumn("number","Pop. (MM)"),data.addColumn("boolean","Borders Med."),data.addRows([...chartDataArray]);const options={title:"Top Ten European Countries by Population",showRowNumber:!1,allowHtml:!0,cssClassNames:{tableCell:"cssTableCell"}};table.draw(data,options)})}}TableChartComponent.\u0275fac=function TableChartComponent_Factory(t){return new(t||TableChartComponent)(core.Jc(GoogleChartService),core.Jc(CrudService))},TableChartComponent.\u0275cmp=core.Dc({type:TableChartComponent,selectors:[["app-table-chart"]],decls:3,vars:0,consts:[[1,"title"],["id","divTableChart"]],template:function TableChartComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"h6",0),core.rd(1,"Top Ten European Countries by Population"),core.Oc(),core.Kc(2,"div",1))},styles:["#divTableChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;text-align:center}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}.cssTableCell[_ngcontent-%COMP%]{align-items:center}"]});class BarChartComponent{constructor(gChartService,crudService){this.gChartService=gChartService,this.crudService=crudService,this.gLib=this.gChartService.getGoogle(),this.gLib.charts.load("current",{packages:["corechart"]}),this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this))}drawChart(){const dbDataArr=[];this.crudService.getAllMetals().subscribe(items=>{dbDataArr.push(...items);const tempDataArray=[];dbDataArr.forEach(item=>tempDataArray.push([item.element,item.density,item.color,item.symbol]));const chartDataArr=[["Element","Density",{role:"style"},{role:"annotation"}],...tempDataArray],data=this.gLib.visualization.arrayToDataTable(chartDataArr);new this.gLib.visualization.DataView(data).setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);new this.gLib.visualization.BarChart(document.getElementById("divBarChart")).draw(data,{width:500,height:300,bar:{groupWidth:"95%"},legend:{position:"none"}})})}}BarChartComponent.\u0275fac=function BarChartComponent_Factory(t){return new(t||BarChartComponent)(core.Jc(GoogleChartService),core.Jc(CrudService))},BarChartComponent.\u0275cmp=core.Dc({type:BarChartComponent,selectors:[["app-bar-chart"]],decls:3,vars:0,consts:[[1,"title"],["id","divBarChart"]],template:function BarChartComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"h6",0),core.rd(1,"Density of Precious Metals, in g/cm^3"),core.Oc(),core.Kc(2,"div",1))},styles:["#divBarChart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}.title[_ngcontent-%COMP%]{text-align:center;color:#0d47a1}"]});class GoogleChartComponent{constructor(){}ngOnInit(){}}GoogleChartComponent.\u0275fac=function GoogleChartComponent_Factory(t){return new(t||GoogleChartComponent)},GoogleChartComponent.\u0275cmp=core.Dc({type:GoogleChartComponent,selectors:[["app-google-chart"]],decls:51,vars:0,consts:[["name","description","content","Shows google charts data"],[1,"main-div"],[1,"card","rounded"],[1,"card-header","bg-light"],["src","../../../../assets/svgs/chart.svg","alt","Book logo",1,"header-image","float-left"],[1,"card-title","text-dark"],[1,"card-subtitle","font-italic"],["id","accordion"],["id","headingOne",1,"bg-light","pb-0"],[1,"card-title","text-dark","pb-0"],["data-toggle","collapse","data-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"card-chart-btn","btn","btn-outline-dark"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"collapse","show"],[1,"card-body"],["id","headingTwo",1,"bg-light","pb-0"],["data-toggle","collapse","data-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"card-chart-btn","btn","btn-outline-dark"],["id","collapseTwo","aria-labelledby","headingTwo","data-parent","#accordion",1,"collapse","hide"],["id","headingThree",1,"bg-light","pb-0"],["data-toggle","collapse","data-target","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"card-chart-btn","btn","btn-outline-dark"],["id","collapseThree","aria-labelledby","headingThree","data-parent","#accordion",1,"collapse","hide"],["id","headingFour",1,"bg-light","pb-0"],["data-toggle","collapse","data-target","#collapseFour","aria-expanded","false","aria-controls","collapseFour",1,"card-chart-btn","btn","btn-outline-dark"],["id","collapseFour","aria-labelledby","headingFour","data-parent","#accordion",1,"collapse","hide"],["id","headingFive",1,"bg-light","pb-0"],["data-toggle","collapse","data-target","#collapseFive","aria-expanded","false","aria-controls","collapseFive",1,"card-chart-btn","btn","btn-outline-dark"],["id","collapseFive","aria-labelledby","headingFive","data-parent","#accordion",1,"collapse","hide"]],template:function GoogleChartComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"head"),core.Kc(1,"meta",0),core.Oc(),core.Pc(2,"div",1),core.Pc(3,"div",2),core.Pc(4,"div",3),core.Kc(5,"img",4),core.Pc(6,"h5",5),core.rd(7,"Google Charts"),core.Oc(),core.Pc(8,"h6",6),core.rd(9,"Data from POSTgreSQL"),core.Oc(),core.Oc(),core.Oc(),core.Pc(10,"div",7),core.Pc(11,"div",2),core.Pc(12,"div",8),core.Pc(13,"h5",9),core.Pc(14,"button",10),core.rd(15," Line Chart "),core.Oc(),core.Oc(),core.Oc(),core.Pc(16,"div",11),core.Pc(17,"div",12),core.Kc(18,"app-line-chart"),core.Oc(),core.Oc(),core.Oc(),core.Pc(19,"div",2),core.Pc(20,"div",13),core.Pc(21,"h5",9),core.Pc(22,"button",14),core.rd(23," Pie Chart "),core.Oc(),core.Oc(),core.Oc(),core.Pc(24,"div",15),core.Pc(25,"div",12),core.Kc(26,"app-pie-chart"),core.Oc(),core.Oc(),core.Oc(),core.Pc(27,"div",2),core.Pc(28,"div",16),core.Pc(29,"h5",9),core.Pc(30,"button",17),core.rd(31," Gauges "),core.Oc(),core.Oc(),core.Oc(),core.Pc(32,"div",18),core.Pc(33,"div",12),core.Kc(34,"app-gauge-chart"),core.Oc(),core.Oc(),core.Oc(),core.Pc(35,"div",2),core.Pc(36,"div",19),core.Pc(37,"h5",9),core.Pc(38,"button",20),core.rd(39," Table Chart "),core.Oc(),core.Oc(),core.Oc(),core.Pc(40,"div",21),core.Pc(41,"div",12),core.Kc(42,"app-table-chart"),core.Oc(),core.Oc(),core.Oc(),core.Pc(43,"div",2),core.Pc(44,"div",22),core.Pc(45,"h5",9),core.Pc(46,"button",23),core.rd(47," Bar Chart "),core.Oc(),core.Oc(),core.Oc(),core.Pc(48,"div",24),core.Pc(49,"div",12),core.Kc(50,"app-bar-chart"),core.Oc(),core.Oc(),core.Oc(),core.Oc(),core.Oc())},directives:[LineChartComponent,PieChartComponent,GaugeChartComponent,TableChartComponent,BarChartComponent],styles:[".main-div[_ngcontent-%COMP%]{justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{max-width:700px;margin:auto}.card-chart-btn[_ngcontent-%COMP%]{width:110px;text-align:left}.header-image[_ngcontent-%COMP%]{background-size:cover;width:48px;height:48px;margin-right:8px}"]});const routes=[{path:"",component:GoogleChartComponent}];class GoogleChartRoutingModule{}GoogleChartRoutingModule.\u0275fac=function GoogleChartRoutingModule_Factory(t){return new(t||GoogleChartRoutingModule)},GoogleChartRoutingModule.\u0275mod=core.Hc({type:GoogleChartRoutingModule}),GoogleChartRoutingModule.\u0275inj=core.Gc({imports:[[router.f.forChild(routes)],router.f]});class SvgDatabaseModule{}SvgDatabaseModule.\u0275fac=function SvgDatabaseModule_Factory(t){return new(t||SvgDatabaseModule)},SvgDatabaseModule.\u0275mod=core.Hc({type:SvgDatabaseModule}),SvgDatabaseModule.\u0275inj=core.Gc({});class SvgCaretrModule{}SvgCaretrModule.\u0275fac=function SvgCaretrModule_Factory(t){return new(t||SvgCaretrModule)},SvgCaretrModule.\u0275mod=core.Hc({type:SvgCaretrModule}),SvgCaretrModule.\u0275inj=core.Gc({});class GoogleChartModule{}GoogleChartModule.\u0275fac=function GoogleChartModule_Factory(t){return new(t||GoogleChartModule)},GoogleChartModule.\u0275mod=core.Hc({type:GoogleChartModule}),GoogleChartModule.\u0275inj=core.Gc({imports:[[common.b,GoogleChartServiceModule,GoogleChartRoutingModule,SvgDatabaseModule,SvgCaretrModule]]})}};