(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8145],{8145:(t,n,e)=>{"use strict";e.r(n),e.d(n,{CustomerPageModule:()=>h});var i=e(8583),o=e(665),r=e(3083),c=e(3318),s=e(4762),a=e(639),d=e(5901),g=e(3071),u=e(5970);function m(t,n){if(1&t){const t=a.EpF();a.TgZ(0,"ion-card",6),a.NdJ("click",function(){const n=a.CHM(t).$implicit;return a.oxw().select(n)}),a.TgZ(1,"ion-card-header"),a.TgZ(2,"ion-card-title"),a.TgZ(3,"ion-text"),a._uU(4),a.qZA(),a.TgZ(5,"ion-text"),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"ion-avatar"),a._UZ(8,"img",7),a.qZA(),a.qZA(),a.TgZ(9,"ion-card-content"),a.TgZ(10,"ion-card-subtitle",8),a.TgZ(11,"span"),a._uU(12,"Mostly Prefer: "),a.qZA(),a._uU(13),a.qZA(),a.TgZ(14,"ion-text"),a._uU(15),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=n.$implicit;a.xp6(4),a.hij(" ",t.first_name," "),a.xp6(2),a.hij(" ",t.last_name," "),a.xp6(2),a.Q6J("src","data:image/png;base64,"+t.image_name,a.LSH),a.xp6(5),a.hij(" ",t.service," "),a.xp6(2),a.Oqu(t.message)}}const l=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.tokenStorage=t,this.userService=n,this.alertService=e,this.router=i}ngOnInit(){this.getUserData(),this.getUsers()}getUserData(){let t=this.tokenStorage.DecodeToken();this.name=t.username,this.id=t.user_id}getUsers(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.userService.getUsers(this.id).subscribe(t=>{this.customers=t.customer})})}Search(t){""==(t=t.toLowerCase())&&this.getUsers();let n=this.customers;this.customers=[],n.forEach(n=>{-1!=(n.first_name+" "+n.last_name).toLowerCase().indexOf(t)&&this.customers.push(n)})}onClear(){this.getUsers()}select(t){this.router.navigate(["/profile"]),this.userService.addCusomerToStorage(JSON.stringify(t))}add(){this.router.navigateByUrl("/add-customer",{state:{id:this.id}})}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(d.i),a.Y36(g.K),a.Y36(u.c),a.Y36(c.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-customer"]],decls:13,vars:1,consts:[["slot","start"],[1,"content"],[1,"grid"],[3,"click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add",3,"click"],[3,"click"],[3,"src"],[1,"main-content"]],template:function(t,n){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"div",1),a.TgZ(5,"ion-title"),a._uU(6,"Customer"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"ion-content"),a.TgZ(8,"div",2),a.YNc(9,m,16,5,"ion-card",3),a.qZA(),a.TgZ(10,"ion-fab",4),a.TgZ(11,"ion-fab-button"),a.TgZ(12,"ion-icon",5),a.NdJ("click",function(){return n.add()}),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(9),a.Q6J("ngForOf",n.customers))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,i.sg,r.IJ,r.W4,r.gu,r.PM,r.Zi,r.gZ,r.yW,r.BJ,r.FN,r.tO],styles:["ion-searchbar[_ngcontent-%COMP%]{width:50%;color:#bfb8ff}.content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.grid[_ngcontent-%COMP%]{margin:1rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:1.5rem}.grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{display:flex;flex-direction:column}.grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.grid[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:.5rem}.grid[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}ion-title[_ngcontent-%COMP%]{color:#1000aa}@media (max-width: 450px){.content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0 .8rem;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}@media (max-width: 350px){.content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0 .4rem}}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[c.Bz.forChild(l)],c.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,o.u5,r.Pc,f]]}),t})()}}]);