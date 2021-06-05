(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{X0V1:function(t,e,a){"use strict";a.r(e),a.d(e,"NasaModule",function(){return C});var n=a("ofXK"),i=a("fXoL"),r=a("jhN1");let s=(()=>{let t=class{constructor(t){this.sanitizer=t}transform(t,e){switch(e){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error(`SafePipe unable to bypass security for invalid type: ${e}`)}}};return t.\u0275fac=function(e){return new(e||t)(i.Ib(r.c))},t.\u0275pipe=i.Hb({name:"safe",type:t,pure:!0}),t})(),c=(()=>{let t=class{};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({}),t})();var o=a("tyNb"),b=a("z6cu"),p=a("AytR"),d=a("IzEk"),g=a("JIr8"),l=a("tk/3");const f=p.a.NASA_KEY;let u=(()=>{class t{constructor(t){this.http=t}getNasaImage(){return this.http.get(`https://api.nasa.gov/planetary/apod?&api_key=${f}&hd=true`).pipe(Object(d.a)(1),Object(g.a)(t=>Object(b.a)("Problem fetching apod from NASA API, error: ",t)))}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(l.a))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=a("Ap5K");let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-svg-copyright"]],decls:2,vars:0,consts:[["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","copyright","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"svg-inline--fa","fa-copyright","fa-w-16"],["fill","currentColor","d","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"]],template:function(t,e){1&t&&(i.Xb(),i.Ob(0,"svg",0),i.Jb(1,"path",1),i.Nb())},styles:["svg[_ngcontent-%COMP%]{width:20px;height:20px;fill:#fff;background:inherit;background-color:inherit;padding-bottom:4px}img[_ngcontent-%COMP%]{width:inherit;height:inherit}"]}),t})();function y(t,e){if(1&t&&i.Jb(0,"img",18),2&t){const t=i.Yb(2);i.cc("src",t.nasaImgObj.hdurl,i.mc)}}function O(t,e){if(1&t&&(i.Jb(0,"iframe",21),i.Zb(1,"safe")),2&t){const t=i.Yb(3);i.cc("src",i.bc(1,1,t.nasaImgObj.url,"resourceUrl"),i.lc)}}function v(t,e){if(1&t&&(i.Ob(0,"div",19),i.oc(1,O,2,4,"iframe",20),i.Nb()),2&t){const t=i.Yb(2);i.yb(1),i.cc("ngIf","video"===t.nasaImgObj.media_type)}}function w(t,e){if(1&t&&(i.Ob(0,"div",15),i.Ob(1,"p",16),i.Jb(2,"app-svg-copyright"),i.qc(3),i.Nb(),i.Nb()),2&t){const t=i.Yb(2);i.yb(3),i.sc(" ",t.nasaImgObj.copyright," ")}}function I(t,e){if(1&t&&(i.Ob(0,"div",2),i.Ob(1,"div",3),i.Ob(2,"div",4),i.Jb(3,"img",5),i.Ob(4,"h6",6),i.qc(5,"Today's Image:"),i.Nb(),i.Ob(6,"h5",7),i.qc(7),i.Nb(),i.Nb(),i.Ob(8,"div",8),i.oc(9,y,1,1,"img",9),i.oc(10,v,2,1,"div",10),i.Ob(11,"p",11),i.Jb(12,"i",12),i.qc(13),i.Nb(),i.Ob(14,"div",13),i.Ob(15,"div",14),i.Ob(16,"div",15),i.Ob(17,"p",16),i.Jb(18,"app-svg-calender"),i.qc(19),i.Zb(20,"date"),i.Nb(),i.Nb(),i.oc(21,w,4,1,"div",17),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t){const t=i.Yb();i.yb(7),i.sc(" ",t.nasaImgObj.title," "),i.yb(2),i.cc("ngIf","image"===t.nasaImgObj.media_type),i.yb(1),i.cc("ngIf","video"===t.nasaImgObj.media_type),i.yb(3),i.sc("",t.nasaImgObj.explanation," "),i.yb(6),i.sc(" ",i.ac(20,6,t.nasaImgObj.date)," "),i.yb(2),i.cc("ngIf",t.nasaImgObj.copyright)}}const N=[{path:"",component:(()=>{class t{constructor(t){this.nasaApi=t,this.title="ngNasaApi"}ngOnInit(){this.nasaApi.getNasaImage().subscribe(t=>{this.nasaImgObj=t})}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(u))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-nasa"]],decls:3,vars:1,consts:[["name","description","content","Shows Nasa api data"],["class","main-div",4,"ngIf"],[1,"main-div"],[1,"card","rounded"],[1,"card-header","bg-light"],["src","../../../../assets/params/images/logo/nasa-image.png","alt","Nasa logo",1,"header-image","float-left"],[1,"card-title","text-dark"],[1,"card-subtitle","font-italic"],[1,"card-body"],["class","card-img-top","alt","Card image",3,"src",4,"ngIf"],["id","video",4,"ngIf"],[1,"card-text"],[1,"far","fa-sticky-note","pr-1","text-info"],[1,"actions"],[1,"d-flex","justify-content-around"],[1,"p-2"],[1,"mb-0"],["class","p-2",4,"ngIf"],["alt","Card image",1,"card-img-top",3,"src"],["id","video"],["width","560","height","315","frameborder","0","allowfullscreen","",3,"src",4,"ngIf"],["width","560","height","315","frameborder","0","allowfullscreen","",3,"src"]],template:function(t,e){1&t&&(i.Ob(0,"head"),i.Jb(1,"meta",0),i.Nb(),i.oc(2,I,22,8,"div",1)),2&t&&(i.yb(2),i.cc("ngIf",e.nasaImgObj))},directives:[n.m,m.a,h],pipes:[n.e,s],styles:[".main-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{max-width:800px}.card-subtitle[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]{padding-left:60px}.card-text[_ngcontent-%COMP%]{margin:16px 0}.header-image[_ngcontent-%COMP%]{width:48px;height:48px}#video[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"]}),t})()}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[o.f.forChild(N)],o.f]}),t})();var x=a("cp3H");let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[n.b,j,c,x.a]]}),t})()}}]);