if(typeof yam=='undefined'){yam={};}
yam.config=(function(){var _config={debug:false},_mix=function(to,from){for(var p in from){to[p]=from[p];}
return to;};return function(){var settings={};if(arguments.length==2&&typeof arguments[0]==='string'){var key=arguments[0],val=arguments[1];settings[key]=val;}else if(arguments.length==1&&typeof arguments[0]==='object'){settings=arguments[0];}
if(settings&&typeof settings==='object'){_config=_mix(_config,settings);}
return _mix({},_config);}})();yam.treatment=function(experiment){var user=yam.currentUser;if(user){if(user.treatments&&experiment in user.treatments){return user.treatments[experiment];}else{yam.warn('yam.treatment: '+experiment+' was not found in treatments.  '+'Is this an old experiment?');}}else{yam.warn('yam.treatment: yam.currentUser returned undefined');}};yam.config({"cdnAssetHost":"https://c64.assets-yammer.com","staticProxy":"https://i.embed.ly/?key=4d90b544096f11e084894040444cdc60&url=","assetHost":"https://assets.yammer.com","version":"v0.6.5.1-131-g44fcd8f","baseURI":"https://www.yammer.com"});if(!(yam.plaform&&yam.platform.bootstrap)){(function(){yam.platform={};yam.platform.bootstrap=new(function(){var head,_srcScript,_deferredInvocations=[],_basePkg,_pkgMap={},_lazyInFlight=0,_phases={UNINITIALIZED:1,INITIALIZED:2,BASE_PKG_LOADED:3,LOADED:4},_phase=_phases.UNINITIALIZED;var _appendTag=function(name,attrs){var elem=document.createElement(name);if(attrs){for(var p in attrs){elem[p]=attrs[p];}}
if(!head){head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;}
head.insertBefore(elem,head.firstChild);return elem;},_loadScript=function(path,defer){var opts={type:'text/javascript',src:path};if(defer){opts.defer=true;}
_appendTag('script',opts);},_loadStyle=function(path){_appendTag('link',{type:'text/css',rel:'stylesheet',href:path});},_loadBase=function(){_loadScript(yam.config().cdnAssetHost+'/platform/'+this.codeVersion+'/'+
_basePkg,true);},_lazyLoad=function(){var inv,lazyPkgs,pkg,host=yam.config().cdnAssetHost;var _deferredMethods=[];for(var i=0,ii=_deferredInvocations.length;i<ii;i++){_deferredMethods[i]=_deferredInvocations[i];}
for(var i=0,ii=_deferredMethods.length;i<ii;i++){inv=_deferredMethods[i][0],lazyPkgs=_pkgMap[inv];if(lazyPkgs&&lazyPkgs.length){for(j=0,jj=lazyPkgs.length;j<jj;j++){pkg=lazyPkgs[j];if(/\.css$/.test(pkg)){_loadStyle(host+'/platform/'+this.codeVersion+'/'+
pkg);}
else{_lazyInFlight++;_loadScript(host+'/platform/'+this.codeVersion+'/'+
pkg,true);}}}
else{var deferred=_deferredMethods[i];_deferredInvocations.splice(i,1);_invokeDeferred.call(this,deferred);}}},_handlePkg=function(pkg){if(/\.js$/.test(pkg)){_lazyInFlight--;if(!_lazyInFlight){_phase=_phases.LOADED;var _deferredInvocation;while(_deferredInvocation=_deferredInvocations.shift()){_invokeDeferred.call(this,_deferredInvocation);}}}},_invokeDeferred=function(opts){var inv,methodArr,methodItem,method,args,base=window,config=yam.config();if(!config.appId){throw new Error('app ID is required to use the Yammer API.');}
inv=opts;methodArr=inv[0].split('.');args=inv[1];while((methodItem=methodArr.shift())){method=base[methodItem];if(methodArr.length){base=method;}}
if(typeof method=='function'){method.apply(base,args);}};this.loaderVersion=1;this.codeVersion=null;this.init=function(){_loadScript(yam.config().assetHost+'/platform/'+(yam.config().embedInitFile||'init.js')+'?v='+
this.loaderVersion+'&b='+(new Date()).getTime());};this.loaded=function(msg){var pkg=msg.pkg,data=msg.data;switch(pkg){case'init':_phase=_phases.INITIALIZED;this.codeVersion=data.codeVersion;_pkgMap=data.pkgMap;_basePkg=data.basePkg;_loadBase.call(this);break;case _basePkg:_phase=_phases.BASE_PKG_LOADED;_lazyLoad.call(this);break;default:_handlePkg.call(this,pkg);}};this.defer=function(name,overwrite){var self=this,arr=name.split('.'),item,base=window,overwrite=overwrite||false;while((item=arr.shift())){if(item&&(typeof base[item]=='undefined'||(overwrite&&!arr.length))){if(!arr.length){if(!overwrite)
base[item]=function(){_deferredInvocations.push([name,arguments]);self.defer(name,true);if(_phase>=_phases.BASE_PKG_LOADED)
_lazyLoad.call(self);};else
base[item]=function(){_deferredInvocations.push([name,arguments]);};}
else{base[item]={};}}
base=base[item];}};})();var scripts=document.getElementsByTagName('script'),baseURI=yam.config().baseURI,dataAttrList,dataAttrConfig={},attr,val,repl=/([A-Z]+)/g,environment,deferredMethods;yam.config({authMethod:'oauth2',xdrHostname:baseURI,translationEnabled:false});_srcScript=scripts[scripts.length-1];dataAttrList=['assetHost','cdnAssetHost','appId'];for(var i=0,ii=dataAttrList.length;i<ii;i++){attr=dataAttrList[i];val=_srcScript.getAttribute('data-'+
attr.replace(repl,'-'+'$1'.toLowerCase()));if(val){dataAttrConfig[attr]=val;}}
yam.config(dataAttrConfig);environment=_srcScript.getAttribute('data-environment')||'production';if(environment=='production'){deferredMethods=['yam.getLoginStatus','yam.login','yam.connect.loginButton','yam.connect.embedFeed','yam.connect.actionButton'];for(var i=0,ii=deferredMethods.length;i<ii;i++){yam.platform.bootstrap.defer(deferredMethods[i]);}
yam.platform.bootstrap.init();}})();}