
y_up={};y_up.browserName=navigator.appName;y_up.OSName=navigator.appVersion;y_up.nTracks=0;y_up.niTracks=0;y_up.noDupe=0;y_up.noDupeTimeout=0;y_up.cfgNoDupeTimeLimt=60000;y_up.cfgAlmostOver=5000;y_up.gsToken=0;y_up.lastSpaceId=0;y_up.logGuid="";y_up.stateCounts={};y_up.lastState="init";y_up.lastStateWhen=(new Date()).getTime();y_up.lastStateCounts={};y_up.playerDiv="player";y_up.nSeeks=0;y_up.nPlays=0;y_up.hasPluginPlayed=false;y_up.hasPluginBuffered=false;y_up.hasAlmostOver=false;y_up.lastInterrupted=0;y_up.done=1;y_up.panicTimeout=0;y_up.internalPlayheadInterval=0;y_up.physicalDetect=0;y_up.playerReady=false;y_up.detectCache={};y_up.newTech=false;y_up.bwm="U";y_up.vpMostLoaded=true;y_up.loaded={};y_up.activeSeq=false;y_up.internalVideoComplete=function(){};y_up.nac=function(){};y_up.ncc=function(){};y_up.trackInterval=0;y_up.beaconInterval=0;y_up.resizeTimeout=0;y_up.events=[];y_up.playlistUrl="";y_up.beginHandlers={};y_up.endHandlers={};y_up.firstBufferHandlers={};y_up.firstPlayHandlers={};y_up.seqInProgress=false;y_up.sequenceEndHandler=function(){};y_up.disconnectHandler=function(){};y_up.almostOver=function(){};y_up.pTrackPlayerName="playerAPI";y_up.id=0;y_up.eventId=0;y_up.channelId=0;y_up.tech=null;y_up.detect="cookie";y_up.kbps=0;y_up.detectKbps=300;y_up.latency=0;y_up.startTime=0;y_up.urlLoc="http://l.yimg.com/cosmos.bcst.yahoo.com/ver/265.0/player-2008-05-27-1021/";y_up.solutionsBase="http://cosmos.bcst.yahoo.com/ver/265.0/solutions/?";y_up.playlistBase="http://cosmos.bcst.yahoo.com/ver/265.0/process/getSequence.php?";y_up.rd="";try{y_up.rd=window.location.hostname;}catch(e){}
y_up.divType="relative";y_up.flvWMode="";y_up.vidW=320;y_up.vidH=200;y_up.debugMode=0;y_up.autoStart=1;y_up.savedVolume=66;y_up.muted=0;y_up.hostTime=0;y_up.want2watch=["Want to watch video?","Your system is currently unable<br>to play the selected video","Please visit the ","help page"," to find a solution.","Get Help Now"];y_up.initVariables=function(pVars)
{var settable=["urlLoc","playlistBase","solutionsBase","id","tech","detect","kbps","rd","vidW","vidH","autoStart","endClick","startTime","divType","flvWMode","debugMode","pTrackPlayerName","eventId","channelId","hostTime","want2watch"];y_up.logGuid=y_up.generateGuid();if(typeof pVars!=='object')
{pVars={};}
for(var x=0;x<settable.length;x++)
{var key=settable[x];if(typeof window['y_up_'+key]!=='undefined')
{y_up[key]=window['y_up_'+key];}
if(typeof pVars[key]!=='undefined')
{y_up[key]=pVars[key];}}
return;}
y_up.generateGuid=function()
{var guid="";for(var i=0;i<22;i++)
{guid+=Math.floor(Math.random()*0xF).toString(0xF);}
return guid;}
y_up.loadScript=function(pScriptUrl)
{var toLoad=pScriptUrl;var vidPlayerMost=true;if(vidPlayerMost)
{var mostFiles=['_FLV','_WMP','_api','_bw','_detect','_main','_pl'];var matchesAny=false;for(var x=0;x<mostFiles.length;x++)
{if(pScriptUrl.indexOf("vidPlayer_")>0&&pScriptUrl.indexOf(mostFiles[x])>0)
{matchesAny=true;break;}}
if(matchesAny)
{if(!y_up.vpMostLoaded)
{y_up.vpMostLoaded=true;toLoad=pScriptUrl.replace(/\/vidPlayer.*\.js/,"/vidPlayer_most.js");}
else
{return;}}}
var s=document.createElement('script');s.setAttribute('src',toLoad);s.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(s);return;}
y_up.loadAndCall=function(pNickname,pScriptUrl,pOnCompleteFunction)
{y_up.event("loadAndCall requested "+pNickname);if(!y_up.isLoaded(pNickname))
{if(typeof y_up.loaded[pNickname]==='undefined')
{y_up.loaded[pNickname]=[];}
y_up.loaded[pNickname].push(pOnCompleteFunction);y_up.loadScript(pScriptUrl);}
else
{pOnCompleteFunction();}
return;}
y_up.isLoaded=function(pTag)
{var loaded=(y_up.loaded[pTag]==='loaded');return loaded;}
y_up.notifyLoaded=function(pTag)
{if(typeof y_up.loaded[pTag]=="object")
{for(var x=0;x<y_up.loaded[pTag].length;x++)
{y_up.loaded[pTag][x]();}}
y_up.loaded[pTag]='loaded';y_up.event('notifyLoaded '+pTag);return;}
y_up.get=function(pObject,pPath)
{var toReturn=false;if(typeof pPath=="object"&&pPath.constructor==Array&&pPath.length==0)
{toReturn=pObject;}
else if(typeof pPath=="string")
{if(pObject&&pObject[pPath])
{toReturn=pObject[pPath];}}
else
{var head=pPath.shift();if(pObject&&pObject[head])
{toReturn=y_up.get(pObject[head],pPath);}
else
{toReturn=false;}}
return toReturn;}
y_up.event=function(pName)
{if(y_up.events.length>400)
{y_up.events.splice(1,200);}
y_up.events.push({name:pName,time:(new Date()).getTime()});}
y_up.eventsDump=function(pFilter)
{var lastTime=0;var firstTime=0;var s='';for(x=0;x<y_up.events.length;x++)
{var cur=y_up.events[x];var diff=cur['time']-lastTime;if(firstTime==0)
{s+=cur['name']+" @ "+diff+"ms\n<br>"}
else
{if(typeof pFilter!='string'||(typeof pFilter=='string'&&pFilter.length>0&&cur['name'].indexOf(pFilter)>=0))
{s+=(diff/1000)+"s ("+((cur['time']-firstTime)/1000)+"s total) + "+cur['name']+"\n<br>"}}
lastTime=cur['time'];if(firstTime==0)
{firstTime=cur['time'];}}
return s;}
y_up.lastHttp=function()
{var x=(y_up.events.length-1);while(x>=0&&!y_up.events[x]['name'].match(/http/))
{x=x-1;}
var toOpen=false;if(x>=0)
{toOpen=y_up.events[x]['name'].match(/http.*$/)[0];window.open(toOpen);}
return toOpen;}
y_up.takeUpSpace=function(pPlayerId,pW,pH)
{if(document.getElementById(pPlayerId))
{}
else
{var line='<div id='+pPlayerId+' style="position: '+y_up.divType+'; width:'+pW+'px; height:'+pH+'px; background: transparent;">';document.write(line);document.write('</div>');document.write(y_up.getWmpJScript());}}
y_up.getWmpJScript=function()
{var wmpScript="";wmpScript+='<script for="wmp" event="playStateChange(NewState)" language="jscript">\n';wmpScript+='try {'
wmpScript+='  if ( (y_up) && (y_up.tech == "wmp") && (!!y_up.player) && (typeof y_up.player.player_onPlayStateChange == "function") )\n'
wmpScript+='  { y_up.player.player_onPlayStateChange(NewState) }\n';wmpScript+='} catch (err) { }'
wmpScript+='</script>\n';return wmpScript;}
y_up.init=function(pUserVars,pReadyFunction)
{y_up.initVariables(pUserVars);y_up.takeUpSpace(y_up.playerDiv,y_up.vidW,y_up.vidH);y_up.internalPlayheadInterval=window.setInterval(y_up.internalPlayhead,1*1000);var preload={};if(y_up.detect!=0)
{preload['bw']=y_up.urlLoc+'src/vidPlayer_bw.js';}
preload['api']=y_up.urlLoc+'src/vidPlayer_api.js';preload['pl']=y_up.urlLoc+'src/vidPlayer_pl.js';var preloading=[];for(var f in preload)
{y_up.loadAndCall(f,preload[f],function(){});preloading.push(f);}
y_up.loadAndCall('detect',y_up.urlLoc+'src/vidPlayer_detect.js',y_up.fillDetectCache);y_up.loadAndCall('main',y_up.urlLoc+"src/vidPlayer_main.js",function(){if(y_up.autoStart)
{y_up.start(preloading,pReadyFunction);}
else
{if(typeof pReadyFunction==='function'||typeof pReadyFunction==='object')
{pReadyFunction();}}});}
y_up.fillDetectCache=function()
{y_up.event('d_s');y_up.detectCache['o']=y_up.clientDetect.os();y_up.detectCache['b']=y_up.clientDetect.browser();y_up.detectCache['p']=y_up.clientDetect.plugins();y_up.event('d_e');return y_up.detectCache;}
y_up.currentlyLoading=function()
{var waiting=[];for(var f in this.loaded)
{if(!this.isLoaded(f))
{waiting.push(f);}}
return waiting;}
y_up.setNotifyAdControlHandler=function(pFunction)
{y_up.nac=pFunction;return;}
y_up.setNotifyClientControlHandler=function(pFunction)
{y_up.ncc=pFunction;return;}
y_up.setItemFirstPlayHandler=function(pFunction,pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
y_up.firstPlayHandlers[pEvent]=pFunction;return;}
y_up.getItemFirstPlayHandler=function(pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
return y_up.firstPlayHandlers[pEvent];}
y_up.setItemFirstBufferHandler=function(pFunction,pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
y_up.firstBufferHandlers[pEvent]=pFunction;return;}
y_up.getItemFirstBufferHandler=function(pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
return y_up.firstBufferHandlers[pEvent];}
y_up.setItemBeginHandler=function(pFunction,pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
y_up.beginHandlers[pEvent]=pFunction;return;}
y_up.getItemBeginHandler=function(pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
return y_up.beginHandlers[pEvent];}
y_up.setItemEndHandler=function(pFunction,pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
y_up.endHandlers[pEvent]=pFunction;return;}
y_up.getItemEndHandler=function(pEvent)
{if(typeof pEvent=='undefined')
{pEvent='always';}
return y_up.endHandlers[pEvent];}
y_up.playHeadUpdateHandler=function()
{if(!y_up.playerReady){return;}
if(y_up.isPlaying()||y_up.playHeadSendAllEvents){var s=(y_up.getVideoState()!=='undefined')?y_up.getVideoState():'not available';var t=(y_up.getPlayheadTime()!=='undefined')?y_up.getPlayheadTime():0;y_up.playHeadUpdateEvent({state:s,playheadTime:t});}};y_up.setPlayheadUpdateHandler=function(pFunction,pInterval,pAllEvents)
{y_up.playHeadSendAllEvents=(typeof pAllEvents==='undefined')?false:pAllEvents;if(typeof window.y_up.playHeadInterval!=='undefined')
{window.clearInterval(y_up.playHeadInterval);}
y_up.playHeadUpdateEvent=pFunction;y_up.playHeadInterval=window.setInterval(y_up.playHeadUpdateHandler,pInterval);};y_up.getPlayheadUpdateHandler=function()
{return y_up.playHeadUpdateEvent;}
y_up.setVideoCompleteHandler=function(pFunction)
{return this.setSeqEndHandler(pFunction);};y_up.setSeqEndHandler=function(pFunction)
{this.sequenceEndHandler=pFunction;}
y_up.getSeqEndHandler=function()
{return this.sequenceEndHandler;}
y_up.setDisconnectHandler=function(pFunction)
{this.disconnectHandler=pFunction;}
y_up.getDisconnectHandler=function()
{return this.disconnectHandler;}
y_up.setAlmostOverHandler=function(pFunction)
{this.almostOver=pFunction;}
y_up.getAlmostOverHandler=function(pFunction)
{return this.almostOver;}
y_up.errorHtml=function(pOuterW,pOuterH,pLinkBase,pLinkParams)
{var link=pLinkBase;for(var x in pLinkParams)
{link+="&"+escape(x)+"="+escape(pLinkParams[x]);}
var errorBg=y_up.urlLoc+"errbg.jpg";var innerW=290;var innerH=218;var marginTop="";if(pOuterH-innerH>0)
{marginTop=" margin-top: "+Math.floor((pOuterH-innerH)/2)+"px !important;";}
var html="";html+="<div style='border: 1px solid black; width: "+pOuterW+"px !important; height: "+pOuterH+"px !important; background: #e6e6e6 !important;'>\n";html+="<div style='width: "+innerW+"px !important; height: "+innerH+"px !important; background: url("+errorBg+") !important; background-repeat: no-repeat !important; margin-left: auto !important; margin-right: auto !important; text-align: center !important; font-family: Arial, sans-serif !important; font-size: 12px !important; color: #484848 !important; padding-top: 10px !important;"+marginTop+"'>\n";html+="<b style='font-family: Arial, sans-serif !important; font-size: 16px !important; color: #3d4552 !important;'><img style='vertical-align: middle !important;' hspace='5' width='28' height='28' src='http://us.i1.yimg.com/us.yimg.com/i/nt/ic/ut/alt1/warn28_1.gif'>"+y_up.want2watch[0]+"</b>\n";html+="<p style='margin-top: 15px !important; color: #black !important;'>"+y_up.want2watch[1]+"</p>\n";html+="<p style='margin-bottom: 40px !important; color: #black !important;'>"+y_up.want2watch[2]+"<a href='"+link+"' style='color: blue !important; font-size: 12px !important;' target='_blank'>"+y_up.want2watch[3]+"</a><br>\n";html+=y_up.want2watch[4]+"</p>\n";html+="<h1><a href='"+link+"' style='color: blue !important; font-size: 24px !important;' target='_blank'>"+y_up.want2watch[5]+"</a></h1>\n";html+="</div>\n";html+="</div>\n";return html;}
y_up.internalPlayhead=function()
{try{if(!y_up.playerReady){return;}
if(y_up.isPlaying())
{var t=y_up.getPlayheadTime();var len=y_up.getVideoDuration();if(t>0&&len>0&&t>=(len-(y_up.cfgAlmostOver/1000))&&!y_up.hasAlmostOver)
{y_up.internalAlmostOver();}}}catch(e){}
return;}
y_up.internalAlmostOver=function()
{y_up.event("internalAlmostOver");y_up.almostOver();if('hybrid'==y_up.detect&&!y_up.physicalDetect&&y_up.getContentDuration()>5)
{var time=y_up.cfgAlmostOver;var remain=(y_up.getContentDuration()-y_up.getPlayheadTime())*1000;if(remain>(0.5*y_up.cfgAlmostOver)&&remain<(2*y_up.cfgAlmostOver))
{time=remain;}
y_up.physicalDetect=1;y_up.bandwidth.detect(function(pB,pL){y_up.detectKbps=pB;y_up.latency=pL;y_up.setPrefCookie({'bw':y_up.kbps,'dbw':y_up.detectKbps,'tech':y_up.streamOrder()});},time);}
return;}
y_up.event('zeroTime');y_up.event('vidPlayer.js loaded');if(typeof window['y_up_id']!=='undefined')
{y_up.init();}
y_FLVPlayer=function()
{var playState;var playTime=0;var playLength=0;var pctLoaded=0;var volumeLevel;var videoWidth;var videoHeight;var hasSetOnUnload;var SWF;var triggeredResize=false;this.controls=y_up.controls;this.controlsHeight=30;this.adActive=0;this.adMax=0;this.adRemaining=0;this.adActiveWhen=0;this.nowPlaying={};this.streamEndInt=null;this.streamEndTime=null;this.streamDuration=null;this.bufferBeginInt=null;this.playBeginInt=null;if(y_up.doInit){y_up.init();y_up.doInit=false;}
this.writePlayer=function(pItem)
{if(!this.canScript())
{y_up.playerAvailable();this.bufferBeginInt=window.setTimeout(function(){y_up.player.setPlayState('buffering');},5000);this.playBeginInt=window.setTimeout(function(){y_up.player.setPlayState('playing');},10000);y_up.get(pItem,['stream','duration']);this.streamDuration=0;if(pItem['stream']&&pItem['stream']['duration']&&pItem['stream']['duration']>0)
{if(y_up.isLive())
{}
else
{var duration=parseInt(pItem['stream']['duration'],10);this.streamDuration=duration;var bufferTime=duration*0.05;if(bufferTime>5){bufferTime=5;}
duration+=bufferTime+7;this.streamEndTime=(new Date()).getTime()+Math.round(duration*1000);this.streamEndInt=window.setTimeout(y_up.player.player_doStreamEnd,Math.round(duration*1000));}}}
try{this.playLength=pItem.stream.duration;}catch(e){}
this.nowPlaying=pItem;y_up.event('writePlayer begin FLV');if(document.getElementById('vidPlayer')!==null)
{try{document.getElementById('vidPlayer').vidVolume(0);}catch(e){}
if(typeof document.getElementById('vidPlayer')!=='undefined')
{try{document.getElementById('vidPlayer').die();}catch(e){}}}
var playerStr="<font face='verdana' size='-2' color='#555555'>";playerStr+=this.FlashTag(pItem['stream']['url'],y_up.vidW,y_up.vidH);videoWidth=videoHeight=null;document.getElementById('player').innerHTML=playerStr+"</font>";SWF=document.getElementById('vidPlayer');if(typeof window.onunload!='function'&&y_up.clientDetect.browser()['detected']=='msie'){hasSetOnUnload=true;window.onunload=function(){if(typeof document.getElementById('vidPlayer')!=='undefined'){try{document.getElementById('vidPlayer').die();}catch(e){};}};}else{hasSetOnUnload=false;}
y_up.event('writePlayer end FLV');};this.player_play=function()
{if(!y_up.playerReady){return;}
SWF.vidPlay();};this.player_stop=function()
{if(!y_up.playerReady){return;}
SWF.vidStop();};this.player_pause=function()
{if(!y_up.playerReady){return;}
SWF.vidPause();};this.player_seek=function(seconds)
{if(!y_up.playerReady){return 0;}
SWF.vidSeek(seconds);return seconds;};this.player_setVolume=function(level)
{if(!y_up.playerReady){return;}
var t=SWF.vidVolume(level);this.setVolumeLevel(level);};this.player_getVolume=function()
{if(!y_up.playerReady){return;}
return this.volumeLevel;};this.player_getPlayState=function()
{if(!y_up.playerReady){return;}
return this.playState;};this.player_getPlayLength=function()
{return this.playLength;};this.player_getPlayTime=function()
{if(!this.canScript())
{return this.fake_getPlayTime();}
var toReturn=0;this.playTime=this.numberize(this.playTime);if(!y_up.playerReady){return toReturn;}
toReturn=(this.playTime<=this.playLength)?this.playTime:this.playLength;return toReturn;};this.player_resize=function(w,h)
{if(!y_up.playerReady){return false;}
y_up.g('player').style.width=w+"px";y_up.g('flvtbl').width=w;y_up.g('flvtbl').style.width=w+"px";y_up.g('player').style.height=h+"px";y_up.g('flvtbl').height=h;y_up.g('flvtbl').style.height=h+"px";return;};this.player_getSize=function()
{if(!y_up.playerReady){return{width:null,height:null};}else{var pW=document.getElementById('player').style.width.split("px")[0];var pH=document.getElementById('player').style.height.split("px")[0];return{width:pW,height:pH};}};this.player_adControl=function()
{if(!y_up.playerReady){return 1;}else{if(!y_up.hasPluginPlayed)
{var t=(this.player_getPlayTime()!=='undefined')?this.player_getPlayTime():0;y_up.internalStateChange({state:'playing',playheadTime:t});y_up.internalStateChange({state:'paused',playheadTime:t});}
this.adActive=1;this.adMax=0;y_up.notifyAdControl();return SWF.adControl();}};this.player_adPlayheadTime=function()
{var toReturn=0;if(this.adRemaining>0&&this.adActive)
{if(this.adMax>0)
{toReturn=this.adMax-this.adRemaining;if(this.adActiveWhen>0)
{var since=(new Date()).getTime()-this.adActiveWhen;toReturn=toReturn+(since/1000);}}}
if(toReturn<0)
{toReturn=0;}
if(toReturn>this.adMax)
{toReturn=this.adMax;}
return toReturn;};this.player_adDuration=function()
{var toReturn=0;if(this.adRemaining>0&&this.adActive)
{if(this.adMax>0)
{toReturn=this.adMax;}}
if(toReturn<0)
{toReturn=0;}
if(toReturn>this.adMax)
{toReturn=this.adMax;}
return toReturn;};this.player_clientControl=function()
{if(!y_up.playerReady){return 0;}else{this.adActive=0;this.adActiveWhen=0;this.adMax=0;this.adRemaining=0;y_up.notifyClientControl();return SWF.clientControl();}};this.player_notifyAdBeaconed=function()
{var tk=y_up.get(this.nowPlaying,['token']);y_up.setGSToken(tk);}
this.player_notifyAdActive=function(pRemaining)
{var r=Number(pRemaining);this.adActiveWhen=(new Date()).getTime();if(r>0)
{if(r>this.adMax)
{this.adMax=r;}
this.adRemaining=r;}}
this.player_canInterrupt=function()
{if(!y_up.playerReady){return 1;}else{if(this.adActive||y_up.isAdvancedAd(this.nowPlaying))
{return 0;}
else
{return 1;}}};this.player_requestInterrupt=function()
{if(!y_up.playerReady){return 0;}else{return SWF.requestInterrupt();}};this.player_getStreamSize=function()
{if(typeof this.videoWidth==='undefined'){return{w:null,h:null};}
return{w:this.videoWidth,h:this.videoHeight};};this.FlashTag=function(pList,w,h)
{var width=(h===null)?320:w;var height=(w===null)?270:h;var swfFile=y_up.urlLoc+"swf/FLVVideo.swf";var isIE=navigator.appName.indexOf("Microsoft")!=-1;var wmode=y_up.flvWMode;var fVars='';fVars+='eventID='+y_up.startTime+'&controls='+y_up.controls+'&startTime='+y_up.startTime+'&debug='+y_up.debugMode+'&buffer=4&vidW='+y_up.vidW+'&vidH='+y_up.vidH+'';if(y_up.isAdvancedAd(this.nowPlaying))
{fVars+='&adFormat='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','metadata','ads','VID',0,'format']));fVars+='&adXML='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','metadata','ads','VID',0,'xml']));fVars+='&adQ='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','metadata','ads','VID',0,'q']));fVars+='&adSO='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','metadata','ads','VID',0,'so']));fVars+='&adBeacon='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','metadata','ads','VID',0,'burl']));fVars+='&clBitrate='+encodeURIComponent(y_up.effectiveKbps());if(y_up.get(this.nowPlaying,['stream','duration']))
{fVars+='&clDuration='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','duration']));}
else
{fVars+='&clDuration=60';}
fVars+='&clPG='+encodeURIComponent(y_up.get(this.nowPlaying,['stream','metadata','pg']));if(0==(""+pList).length)
{pList=y_up.urlLoc+"blank.xml?";}}
fVars+='&pList='+encodeURIComponent(pList);var flashTag='';flashTag+="<table id='flvtbl' width=\""+width+"\" height=\""+height+"\" cellpadding=\"0\" cellspacing=\"0\"><tr><td align=\"center\" valign=\"middle\">\n";if(isIE)
{flashTag+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="vidPlayer" width="'+width+'" height="'+height+'" align="middle">';flashTag+='<param name="allowScriptAccess" value="always" />';flashTag+='<param name="movie" value="'+swfFile+'" />';flashTag+='<param name="bgcolor" value="#000000" />';flashTag+='<param name="flashvars" value="'+fVars+'" />';flashTag+='<param name="quality" value="high" />';flashTag+='<param name="wmode" value="'+wmode+'" />';}else{flashTag+='<embed src="'+swfFile+'" ';flashTag+='quality="high" swLiveConnect=true allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" ';flashTag+='width="'+width+'" height="'+height+'" ';flashTag+='type="application/x-shockwave-flash" ';flashTag+='flashvars="'+fVars+'" ';flashTag+='name="vidPlayer" id="vidPlayer" wmode="'+wmode+'" bgcolor="#000000" ';flashTag+='pluginspage="http://www.macromedia.com/go/getflashplayer">';flashTag+='</embed>';}
flashTag+="</td></tr></table>\n";y_up.startTime=0;return flashTag;};this.setPlayState=function(state)
{this.playState=state;var t=(this.player_getPlayTime()!=='undefined')?this.player_getPlayTime():0;y_up.internalStateChange({state:this.playState,playheadTime:t});__flash_savedUnloadHandler=null;};this.setPercentLoaded=function(pPercent)
{this.pctLoaded=pPercent;return this.pctLoaded;};this.getPercentLoaded=function(pPercent)
{return this.pctLoaded;};this.fake_getPlayTime=function()
{var current=0;if(this.streamEndInt)
{var remaining=(this.streamEndTime-(new Date()).getTime())/1000;current=this.streamDuration-remaining;if(current<0)
{current=0;}
if(current>this.streamDuration)
{current=this.streamDuration;}}
return current;}
this.player_doStreamEnd=function()
{if(!this.canScript()){clearInterval(this.streamEndInt);}
if(typeof window.y_up.internalVideoComplete!=='undefined'){y_up.internalVideoComplete({playheadTime:this.player_getPlayTime()});}};this.setVideoTime=function(vidLength)
{this.playLength=vidLength;};this.setVolumeLevel=function(level)
{this.volumeLevel=level;};this.setPlayerTime=function(playerTime)
{this.playTime=Number(playerTime);return true;};this.setStreamDimensions=function(dimObj)
{this.videoWidth=dimObj.w;this.videoHeight=dimObj.h;};this.unLoadPlayer=function()
{if(!this.canScript())
{clearInterval(this.streamEndInt);this.streamEndInt=0;clearInterval(this.bufferBeginInt);this.bufferBeginInt=0;clearInterval(this.playBeginInt);this.playBeginInt=0;}
if(typeof document.getElementById('vidPlayer')!=='undefined'){try{document.getElementById('vidPlayer').die();}catch(e){};}
if(hasSetOnUnload){window.onunload=null;hasSetOnUnload=false;}
return true;};this.unLoadHtml=function()
{document.getElementById('player').innerHTML="";return true;};this.canScript=function()
{if(y_up.clientDetect.browser()['detected']!='opera')
{return true;}
else
{return false;}};this.numberize=function(p)
{var z=parseInt(p);if(isNaN(z))
{z=0;}
return z;}};y_up.notifyLoaded('flv');
y_WMPPlayer=function()
{this.canScript=function()
{return(typeof window.ActiveXObject==='function')}
var playState;var playTime;var playLength;var volumeLevel;var videoWidth;var videoHeight;var buttonState=(!this.canScript())?"x":"0";this.streamEndInt=null;this.streamEndTime=null;this.streamDuration=null;this.bufferBeginInt=null;this.playBeginInt=null;this.gdTimer=null;var y_up_playButton=new Image();y_up_playButton.src=y_up.urlLoc+"images/button_play_"+buttonState+".gif";y_up_playButton.playSource=y_up.urlLoc+"images/button_play_"+buttonState+".gif";y_up_playButton.pauseSource=y_up.urlLoc+"images/button_pause_"+buttonState+".gif";var y_up_muteButton=new Image();y_up_muteButton.src=y_up.urlLoc+"images/volume_"+buttonState+".gif";y_up_muteButton.muteSource=y_up.urlLoc+"images/mute_"+buttonState+".gif";y_up_muteButton.volSource=y_up.urlLoc+"images/volume_"+buttonState+".gif";this.t=0;if(y_up.doInit){y_up.init();y_up.doInit=false;}
this.writePlayer=function(pItem)
{y_up.event('writePlayer begin WMP');clearInterval(this.streamEndInt);clearInterval(this.bufferBeginInt);clearInterval(this.playBeginInt);if(typeof window.wmp!=='undefined'){y_up.g("wmp").controls.stop();y_up.g("wmp").URL=pItem['stream']['url'];y_up.g("wmp").controls.play();}else{var playerStr="";var pList=pItem['stream']['url'];playerStr+=this.WMPTag(pList,pItem);y_up.g('player').innerHTML=playerStr;if(y_up.id!==null){this.getDimensions();}}
if(!this.canScript()){y_up.playerAvailable();this.bufferBeginInt=window.setTimeout(function(){y_up.internalStateChange({state:'buffering',playheadTime:0})},5000);this.playBeginInt=window.setTimeout(function(){y_up.internalStateChange({state:'playing',playheadTime:0})},10000);y_up.get(pItem,['stream','duration']);if(pItem['stream']&&pItem['stream']['duration']&&pItem['stream']['duration']>0)
{if(y_up.isLive())
{}
else
{var duration=parseInt(pItem['stream']['duration'],10);this.streamDuration=duration;var bufferTime=duration*0.05;if(bufferTime>5){bufferTime=5;}
duration+=bufferTime+7;this.streamEndTime=(new Date()).getTime()+Math.round(duration*1000);this.streamEndInt=window.setTimeout(y_up.player.player_doStreamEnd,Math.round(duration*1000));}}}
y_up.event('writePlayer end WMP');};this.player_play=function()
{if(!this.canScript()){return 0;}
y_up.g("wmp").controls.play();return 1;};this.player_playVideo=function(pUrl)
{if(!this.canScript()){return 0;}
if(!y_up.g("wmp"))
{return;}
y_up.g("wmp").URL=pUrl;y_up.g("wmp").controls.play();};this.player_stop=function()
{if(!this.canScript()){return 0;}
if(!y_up.g('wmp')){return 0;}
if(!y_up.g('wmp').controls){return 0;}
y_up.g("wmp").controls.stop();};this.player_pause=function()
{if(!this.canScript()){this.unLoadPlayer();y_up.clearTracking(y_up.activeSeq.item());return 0;}
y_up.g("wmp").controls.pause();return 1;};this.player_playPause=function(img)
{if(!this.canScript()){return 0;}
if(y_up.g("wmp").playState!=3)
{if(img){img.src=y_up_playButton.pauseSource;}
return this.player_play();}
else
{if(img){img.src=y_up_playButton.playSource;}
return this.player_pause();}};this.player_seek=function(seconds)
{if(!this.canScript()){return 0;}
if(this.player_getPlayState()=="ready"){this.player_play();y_up.g("wmp").controls.currentPosition=seconds;}
y_up.g("wmp").controls.currentPosition=seconds;return seconds;};this.player_canFullScreen=function()
{return(typeof window.ActiveXObject==='function')?1:0;}
this.player_fullScreen=function()
{if(typeof window.ActiveXObject==='function')
{document.getElementById("wmp").fullScreen=true;return 1;}
else
{return 0;}}
this.player_setVolume=function(level)
{if(!this.canScript()){return 0;}
y_up.g("wmp").settings.volume=level;};this.player_getVolume=function()
{if(!this.canScript()){return 0;}
return y_up.g("wmp").settings.volume;};this.player_mute=function(img)
{if(!this.canScript()){return 0;}
if(y_up.g("wmp").settings.mute!==true){if(img){img.src=y_up_muteButton.muteSource;}
y_up.g("wmp").settings.mute=true;}
else{if(img){img.src=y_up_muteButton.volSource;}
y_up.g("wmp").settings.mute=false;}};this.player_onPlayStateChange=function(s)
{if(s==3&&!y_up.playerReady&&!y_up.hasPluginBuffered)
{y_up.playerAvailable();return;}
else
{if(!y_up.playerReady)
{y_up.playerAvailable();}
a=this.translatePlayState(s);if(y_up.playerReady)
{if(s!=1&&s!=8&&s!==0&&s!=10){y_up.internalStateChange({state:a,playheadTime:this.player_getPlayTime()});}else{y_up.internalStateChange({state:a,playheadTime:0});}}
if(s==8)
{this.player_doStreamEnd();}}};this.player_doStreamEnd=function()
{clearInterval(this.streamEndInt);if(typeof window.y_up.internalVideoComplete!=='undefined'){y_up.internalVideoComplete({playheadTime:0});}};this.onPlayerError=function()
{};this.translatePlayState=function(pState)
{var a="";switch(pState)
{case 0:a="undefined";break;case 1:a="stopped";break;case 2:a="paused";break;case 3:a="playing";break;case 4:a="seeking";break;case 5:a="seeking";break;case 6:a="buffering";break;case 7:a="waiting";break;case 8:a="media ended";break;case 9:a="preparing new media";break;case 10:a="ready";break;case 11:a="reconnecting";break;default:a="undefined";break;}
return a;}
this.player_getPlayState=function()
{if(!this.canScript()){return 0;}
if(typeof y_up.g('wmp')==='undefined'){return;}
var s=y_up.g("wmp").playState;var a=this.translatePlayState(s);return a;};this.player_resize=function(w,h)
{var toReturn=false;var embedH=h;if(typeof window.player!=='undefined')
{y_up.g('player').style.width=w+"px";y_up.g('player').style.height=h+"px";toReturn={'w':w,'h':h};}
if(typeof window.wmp!=='undefined')
{y_up.g('wmp').style.width=w+"px";y_up.g('wmp').style.height=embedH+"px";y_up.g('y_up_vidDiv').style.width=w+"px";y_up.g('y_up_vidDiv').style.height=embedH+"px";toReturn={'w':w,'h':h};}
return toReturn;};this.player_getSize=function()
{if(typeof window.player!=='undefined'){var pW=document.getElementById('player').style.width.split("px")[0];var pH=document.getElementById('player').style.height.split("px")[0];return{width:pW,height:pH};}else{return{width:null,height:null};}};this.playMuteWidth=function()
{return y_up.g('y_up_playButton').width+y_up.g('y_up_muteButton').width;}
this.player_getPlayLength=function()
{var duration=0;try{duration=y_up.activeSeq.item().stream.duration;}catch(e){}
if(y_up.canScript()&&typeof window.wmp.currentMedia!=='undefined')
{duration=y_up.g("wmp").currentMedia.duration;}
return parseInt(duration,10);};this.player_getPlayLengthString=function()
{if(!this.canScript()){return 0;}
return y_up.g("wmp").currentMedia.durationString;};this.fake_getPlayTime=function()
{var current=0;if(this.streamEndInt)
{var remaining=(this.streamEndTime-(new Date()).getTime())/1000;current=this.streamDuration-remaining;if(current<0)
{current=0;}
if(current>this.streamDuration)
{current=this.streamDuration;}}
return current;}
this.player_getPlayTime=function()
{if(!this.canScript())
{return this.fake_getPlayTime();}
var s=this.player_getPlayState();if(s=="ready"||s=="media ended"||s=="stopped"||s=="preparing new media"||!this.canScript()||typeof y_up.g('wmp')==='undefined'||typeof y_up.g('wmp').currentMedia==='undefined'||typeof y_up.g('wmp').currentMedia===null||typeof y_up.g('wmp').controls.currentPosition==='undefined'||typeof y_up.g('wmp').controls.currentPosition===null)
{return 0;}
var duration=(typeof y_up.g('wmp').currentMedia=='undefined'||typeof y_up.g('wmp').currentMedia===null)?0:y_up.g("wmp").currentMedia.duration;var position=(typeof y_up.g('wmp').controls=='undefined'||typeof y_up.g('wmp').controls.currentPosition=='undefined')?0:y_up.g("wmp").controls.currentPosition;var t=(position<=duration)?position:duration;return parseInt(t,10);};this.player_getPlayTimeString=function()
{if(!this.canScript()){return 0;}
return y_up.g("wmp").currentPositionString;};this.player_getStreamSize=function()
{this.videoWidth=(this.player_getMediaWidth()!==0)?this.player_getMediaWidth():this.videoWidth;this.videoHeight=(this.player_getMediaHeight()!==0)?this.player_getMediaHeight():this.videoHeight;return{w:this.videoWidth,h:this.videoHeight};};this.getDimensions=function()
{if(this.player_getMediaWidth()>0){this.videoWidth=this.player_getMediaWidth();this.videoHeight=this.player_getMediaHeight();}else{this.gdTimer=setTimeout("y_up.player.getDimensions()",500);}};this.player_getMediaWidth=function()
{if(!this.canScript()){return;}
if(typeof window.wmp.currentMedia!=='undefined'){return y_up.g("wmp").currentMedia.imageSourceWidth;}};this.player_getMediaHeight=function()
{if(!this.canScript()){return;}
if(typeof window.wmp.currentMedia!=='undefined'){return y_up.g("wmp").currentMedia.imageSourceHeight;}};this.ffHasNewPlugin=function()
{var hasNew=false;var hasOld=false;if(navigator.mimeTypes["application/x-ms-wmp"])
{hasNew=true;}
else if(navigator.mimeTypes["application/x-mplayer2"])
{hasOld=true;}
else
{}
return hasNew;}
this.lbpb=function(pContainerWH,pContentWH)
{try{if(!pContainerWH||!pContentWH||0==pContentWH.w||0==pContentWH.h||0==pContainerWH.w||0==pContainerWH.h)
{return pContainerWH;}}catch(e){return pContainerWH;}
var contentAspectRatio=pContentWH.w/pContentWH.h;var containerAspectRatio=pContainerWH.w/pContainerWH.h;var calcW=pContainerWH.w;var calcH=pContainerWH.h;if(contentAspectRatio>containerAspectRatio)
{calcW=Math.floor(pContainerWH.w);calcH=Math.floor(pContainerWH.w/contentAspectRatio);}
else
{calcW=Math.floor(pContainerWH.h*contentAspectRatio);calcH=Math.floor(pContainerWH.h);}
var toReturn={'w':calcW,'h':calcH};return toReturn;}
this.WMPTag=function(pList,pItem)
{var audio=y_up.get(pItem,['stream','audio']);var audioimg='';var audioimgw=1;var audioimgh=1;var uimode='none';var bgimg='';var plugW=y_up.vidW;var plugH=y_up.vidH;var audiodiv="";var audiodivclose="";if(Number(audio))
{audioimg=y_up.get(pItem,['stream','metadata','audio','img']);audioimgw=y_up.get(pItem,['stream','metadata','audio','w']);audioimgh=y_up.get(pItem,['stream','metadata','audio','h']);if(typeof audioimg=='string'&&audioimg.length>0)
{}
plugW=1;plugH=1;uimode='invisible';var wandh=this.lbpb({"w":y_up.vidW,"h":y_up.vidH},{"w":audioimgw,"h":audioimgh});var spacing="";if(wandh.h<y_up.vidH)
{spacing="vspace=\""+Math.floor((y_up.vidH-wandh.h)/2)+"\" "}
if(wandh.w<y_up.vidW)
{spacing+="hspace=\""+Math.floor((y_up.vidW-wandh.w)/2)+"\" "}
audiodiv="<div style='background-color:#000000; vertical-align: middle;'>";audiodiv+="<img src=\""+encodeURI(audioimg)+"\" width=\""+wandh.w+"\" height=\""+wandh.h+"\" "+spacing+">";audiodivclose="</div>";}
var wmpTag="";var id="wmp";var embedH=y_up.vidH;wmpTag+="<div id='y_up_vidDiv' style='background-color:#000000; width: "+y_up.vidW+"; height: "+embedH+"; "+bgimg+"'>";wmpTag+=audiodiv;wmpTag+="<OBJECT ID='"+id+"' CLASSID=CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6 TYPE='application/x-oleobject' width='"+plugW+"' height='"+plugH+"'>";wmpTag+="<PARAM NAME='url' VALUE='"+pList+"'>";wmpTag+="<PARAM NAME='AutoStart' VALUE='true'>";wmpTag+="<PARAM NAME='EnableContextMenu' VALUE='false'>";wmpTag+="<PARAM NAME='uiMode' VALUE='"+uimode+"'>";wmpTag+="<PARAM NAME='currentPosition' VALUE='"+y_up.startTime+"'>";wmpTag+="<PARAM NAME='stretchToFit' VALUE='true'>";wmpTag+="<PARAM NAME='Volume' VALUE='"+y_up.savedVolume+"'>";var embedType='application/x-mplayer2';if(y_up.clientDetect.browser()['detected']!='msie'&&this.ffHasNewPlugin())
{embedType='application/x-ms-wmp';}
wmpTag+="<embed id='"+id+"' name='"+id+"' type='"+embedType+"' pluginspage='http://www.microsoft.com/windows95/downloads/contents/wurecommended/s_wufeatured/mediaplayer/default.asp' src='"+pList+"' width='"+plugW+"' height='"+plugH+"' autostart='true' showcontrols='0' uiMode='"+uimode+"' stretchToFit='true' showstatusBar='0' ShowTracker='0' ShowPositionControls='0' EnableContextMenu='false' Volume='"+y_up.savedVolume+"'></embed>";wmpTag+="</OBJECT>";wmpTag+=audiodivclose;wmpTag+="</div>";y_up.startTime=0;return wmpTag;};this.unLoadPlayer=function()
{clearInterval(this.streamEndInt);this.streamEndInt=0;clearInterval(this.bufferBeginInt);this.bufferBeginInt=0;clearInterval(this.playBeginInt);this.playBeginInt=0;clearInterval(this.t);this.t=0;clearInterval(this.gdTimer);this.gdTimer=0;this.player_stop();document.getElementById('player').innerHTML="";return true;};};y_up.notifyLoaded('wmp');
y_up.playVideo=function(pId)
{var toReturn=0;if(0==y_up.autoStart)
{y_up.event("playVideo interrupted b/c autoStart == 0");y_up.autoStart=1;y_up.id=pId;y_up.start();}
else
{y_up.event('playVideo');var canInterrupt=0;try{if(y_up.isNodeId(pId)&&!y_up.done&&"S_AD"==y_up.activeSeq.item().type)
{canInterrupt=0;}
else
{canInterrupt=canInterrupt||y_up.done;canInterrupt=canInterrupt||y_up.player.player_canInterrupt();}}catch(e){canInterrupt=1;}
var type=y_up.itemType(pId);if(!canInterrupt&&"id"==type&&pId!=y_up.noDupe)
{y_up.queueVideo(pId);try{y_up.player.player_requestInterrupt();}catch(e){}}
else
{try{var toCall='playVideo_'+type;y_up.event('playVideo: '+toCall);toReturn=y_up[toCall](pId);}catch(e){}}}
return toReturn;};y_up.queueVideo=function(pId)
{y_up.toPlay=pId;return y_up.toPlay;};y_up.isItemPlayable=function(pItem)
{var stream=y_up.get(pItem,['stream']);var streamUrl=y_up.get(pItem,['stream','url']);var vid=y_up.get(pItem,['stream','metadata','ads','VID',0]);return(false!=streamUrl||(typeof stream=='string'&&stream.match(/^http/))||typeof vid=="object");}
y_up.getPlayerType=function()
{return y_up.getPlayerTech();};y_up.getPlayerTech=function()
{return y_up.tech;};y_up.play=function()
{if(!y_up.playerReady){return;}
return this.player.player_play();};y_up.pause=function()
{if(!y_up.playerReady)
{y_up.pauseCounter+=1;if(y_up.pauseCounter<=10)
{window.setTimeout(y_up.pause,1*1000);}
return 0;}
y_up.pauseCounter=0;if(this.player.player_getPlayState()!="paused"){this.player.player_pause();}
return y_up.getPlayheadTime();};y_up.playPause=function()
{if(!y_up.playerReady){return;}
var state=this.getVideoState();switch(state){case"playing":this.pause();return false;case"seeking":case"paused":this.play();return true;}};y_up.seek=function(seconds)
{if(!y_up.playerReady){return 0;}
y_up.nSeeks+=1;if(seconds<0)
{var toSeek=(this.getContentDuration()+seconds);return this.player.player_seek(toSeek);}
else
{return this.player.player_seek(seconds);}};y_up.fullScreen=function()
{if(!y_up.playerReady){return 0;}
try{return this.player.player_fullScreen();}catch(e){return 0;}};y_up.canFullScreen=function()
{if(!y_up.playerReady){return 0;}
try{return this.player.player_canFullScreen();}catch(e){return 0;}};y_up.getPlayheadTime=function()
{if(!y_up.playerReady){return;}
return this.player.player_getPlayTime();};y_up.getContentDuration=function()
{return this.getVideoDuration();};y_up.getVideoDuration=function()
{if(!y_up.playerReady){return;}
return this.player.player_getPlayLength();};y_up.getVideoBitrate=function()
{var bitrate=0;try{bitrate=y_up.activeSeq.item().stream.bitrate;}catch(e){}
return bitrate;};y_up.getAdDuration=function()
{var toReturn=0;try{toReturn=y_up.player.player_adDuration();}catch(e){}
return toReturn;}
y_up.getAdPlayheadTime=function()
{var toReturn=0;try{toReturn=y_up.player.player_adPlayheadTime();}catch(e){}
return toReturn;}
y_up.getPercentLoaded=function()
{var toReturn=-1;try{toReturn=this.player.getPercentLoaded();}catch(e){}
return toReturn;}
y_up.getVolume=function()
{if(!y_up.playerReady){return;}
return this.player.player_getVolume();};y_up.setVolume=function(pVol)
{y_up.savedVolume=pVol;if(!y_up.playerReady){return;}
y_up.player.player_setVolume(pVol);return true;};y_up.toggleMute=function()
{if(!y_up.playerReady){return;}
if(this.muted==0)
{this.muted=this.getVolume();this.setVolume(0);}
else
{this.setVolume(this.muted);this.muted=0;}
return this.getVolume();};y_up.setVideoSize=function(w,h)
{var toReturn=false;y_up.vidW=w;y_up.vidH=h;if(y_up.playerReady)
{try{toReturn=y_up.player.player_resize(w,h);}catch(e){}}
if(false==toReturn)
{y_up.resizeTimeout=window.setTimeout(function(){y_up.setVideoSize(y_up.vidW,y_up.vidH);},250)}
else
{y_up.resizeTimeout=0;}
return toReturn;};y_up.getVideoSize=function(w,h)
{if(!y_up.playerReady){return;}
var vSize=this.player.player_getSize();return{width:vSize.width,height:vSize.height};};y_up.getNativeVideoSize=function(w,h)
{return this.player.player_getStreamSize();};y_up.getCurrentVideoUrl=function()
{return this.playlistUrl;};y_up.getCurrentVideoID=function()
{return this.getCurrentVideoId();};y_up.getCurrentVideoId=function()
{return this.id;};y_up.getVideoState=function()
{return this.getPlayerState();};y_up.getPlayerState=function()
{if(!y_up.playerReady){return;}
return this.player.player_getPlayState();};y_up.isPlaying=function()
{if(!y_up.playerReady){return false;}
if(!y_up.canScript()){return true;}
var x=this.player.player_getPlayState();switch(x)
{case"playing":case"buffering":case"preparing new media":case"waiting":return true;default:return false;}};y_up.isLive=function()
{return(y_up.activeSeq.item()['stream']['live']==1);};y_up.setErrorHandler=function(funcName)
{errorHandlerEvent=funcName;return;};y_up.setStateChangeHandler=function(pFunction)
{this.stateChangeHandler=pFunction;return;};y_up.getStateChangeHandler=function(pFunction)
{return this.stateChangeHandler;};y_up.internalStateChange=function(pChange)
{y_up.event('stateChange '+pChange['state']+' @ '+pChange['playheadTime']);if(typeof y_up.stateCounts[y_up.lastState]==='undefined')
{y_up.stateCounts[y_up.lastState]=0;}
y_up.stateCounts[y_up.lastState]+=(new Date()).getTime()-y_up.lastStateWhen;y_up.lastState=pChange['state'];y_up.lastStateWhen=(new Date()).getTime();if(pChange['state']=='buffering')
{y_up.pluginBuffering();}
else if(pChange['state']=='playing')
{y_up.pluginPlaying();}
if(typeof y_up.stateChangeHandler==="function")
{y_up.stateChangeHandler(pChange);}
return;};y_up.getPlayheadUpdateHandler=function()
{return this.playHeadUpdateEvent;}
y_up.getLastSpaceid=function()
{return this.lastSpaceId;}
y_up.setChannelId=function(pChannelId)
{this.channelId=pChannelId;return this.channelId;}
y_up.changeTech=function(t)
{y_up.tech=t;if(y_up.playerReady){this.player.unLoadPlayer();delete this.player;}
y_up.playerReady=false;y_up.newTech=true;var newscript=document.createElement("script");newscript.type="text/javascript";switch(y_up.tech){case"wmp":newscript.src=y_up.urlLoc+'src/vidPlayer_WMP.js';break;case"flash":newscript.src=y_up.urlLoc+'src/vidPlayer_FLV.js';break;case"qt":newscript.src=y_up.urlLoc+'src/vidPlayer_QT.js';break;}
document.getElementsByTagName("head")[0].appendChild(newscript);};y_up.canScript=function()
{if(y_up.playerReady){return y_up.player.canScript();}}
y_up.getZeroTime=function()
{return y_up.events[0]['time'];}
y_up.notifyLoaded('api');
y_up.bandwidth={};y_up.bandwidth.minAccurateTime=400;y_up.bandwidth.graphics=[{img:'http://mediaframe.yahoo.com/scp_v3/detectomatic/i_49b.gif',bits:49*8},{img:'http://mediaframe.yahoo.com/scp_v3/detectomatic/i_11k.gif',bits:11200*8},{img:'http://mediaframe.yahoo.com/scp_v3/detectomatic/i_50k.gif',bits:51736*8}];y_up.bandwidth.detecting=0;y_up.bandwidth.detectStart=0;y_up.bandwidth.detectMaxTime=0;y_up.bandwidth.detectFinish=function(){};y_up.bandwidth.detections=[{durationMs:0,bits:0}];y_up.bandwidth.timeoutTimer=false;y_up.bandwidth.currentStart=0;y_up.bandwidth.currentImg=false;y_up.bandwidth.detect=function(pOnFinish,pTimeoutMs)
{y_up.event("bw_s");var yb=y_up.bandwidth;yb.detecting=1;yb.detectStart=(new Date()).getTime();yb.detectMaxTime=yb.detectStart+pTimeoutMs;yb.detectFinish=pOnFinish;yb.makeTimeout(pTimeoutMs);yb.currentImg=yb.makeDetector(0);};y_up.bandwidth.makeTimeout=function(pTimeoutMs)
{y_up.bandwidth.timeoutTimer=window.setTimeout(function(){if(y_up.bandwidth.detecting==1)
{y_up.bandwidth.done();}},pTimeoutMs);};y_up.bandwidth.done=function()
{var rate=y_up.bandwidth.currentRate();y_up.event("bw_e k: "+rate[0]+" l: "+rate[1]);y_up.bandwidth.detecting=0;window.clearTimeout(y_up.bandwidth.timeoutTimer);y_up.bandwidth.currentImg.onload=function(){};y_up.bandwidth.currentImg=false;y_up.bandwidth.detectFinish(rate[0],rate[1]);y_up.bandwidth.timeoutTimer=false;y_up.bandwidth.detectStart=0;y_up.bandwidth.detectMaxTime=0;y_up.bandwidth.detections=[{durationMs:0,bits:0}];y_up.bandwidth.currentStart=0;y_up.bandwidth.detectFinish=function(){};};y_up.bandwidth.makeDetector=function(pGraphic)
{var yb=y_up.bandwidth;yb.currentStart=(new Date()).getTime();var iSrc=yb.graphics[pGraphic]['img'];var iBits=yb.graphics[pGraphic]['bits'];document.bandwidth=document.createElement('img');document.bandwidth.src=iSrc+'?cb='+Math.floor(Math.random()*50000)+"&ct="+(new Date()).getTime();document.bandwidth.onload=function(){var yb=y_up.bandwidth;var durationMs=(new Date()).getTime()-yb.currentStart;yb.detections.push({bits:iBits,durationMs:durationMs});var timeRemaining=yb.detectMaxTime-(new Date()).getTime();if(pGraphic+1<yb.graphics.length&&(yb.currentRate()[0]==0||yb.probablyCanFinish(yb.currentRate()[0],yb.graphics[pGraphic+1]['bits'],timeRemaining)))
{yb.currentImg=yb.makeDetector(pGraphic+1);}
else
{yb.done();}};return document.bandwidth;};y_up.bandwidth.probablyCanFinish=function(pBitsPerSecond,pSizeBits,pTimeMs)
{var foo=(pBitsPerSecond>(pSizeBits/pTimeMs));return foo;}
y_up.bandwidth.currentRate=function()
{var yb=y_up.bandwidth;var rate=0;var totalBits=0;var totalMs=0;var rawMs=0;var latencyMs=0;for(var x=0;x<yb.detections.length;x++)
{if(yb.detections[x]['bits']>0&&yb.detections[x]['bits']<(2000*8))
{latencyMs=yb.detections[x]['durationMs'];}
else
{rawMs+=yb.detections[x]['durationMs'];if(yb.detections[x]['durationMs']>yb.minAccurateTime||x==(yb.detections.length-1))
{totalBits+=yb.detections[x]['bits'];if(yb.detections[x]['durationMs']>latencyMs)
{totalMs+=(yb.detections[x]['durationMs']-latencyMs);}
else
{latencyMs=yb.detections[x]['durationMs'];totalMs+=yb.detections[x]['durationMs'];}}}}
if(totalMs>0)
{rate=Math.round(totalBits/totalMs);}
return[rate,latencyMs];}
y_up.notifyLoaded('bw');
y_up.clientDetect={};y_up.clientDetect.os=function()
{var os="unknown";var osMaj=0;var osMin=0;var a=navigator.userAgent.split(";");for(var x=0;x<a.length;x++)
{if(a[x].indexOf("Windows NT")!=-1)
{var b=a[x].split(" ");for(var y=0;y<b.length;y++)
{if(!isNaN(parseFloat(b[y])))
{os="win";osMaj=parseInt(b[y],10);osMin=parseInt(b[y].split(".")[1],10);}}}
else if(a[x].indexOf("Mac OS X")!=-1)
{os="mac";osMaj=10;osMin=0;}
else if(a[x].indexOf("Linux")!=-1)
{os="linux";osMaj=0;osMin=0;}}
return{detected:os,ver:[osMaj,osMin]};}
y_up.clientDetect.browser=function()
{var br="unknown";var brMaj=0;var brMin=0;var a=navigator.userAgent.split(";");for(var x=0;x<a.length;x++)
{if(a[x].indexOf("Opera")!=-1)
{br="opera";var b=a[x].split(" ");if(a[x].indexOf("Opera 7")!=-1)
{for(var y=0;y<b.length;y++)
{if(!isNaN(parseInt(b[y],10)))
{brMaj=parseInt(b[y],10);brMin=parseInt(b[y].split(".")[1],10);}}}
else
{for(var y=0;y<b.length;y++)
{if(b[y].indexOf("Opera")!=-1)
{brMaj=parseInt(b[y].split("/")[1],10);brMin=parseInt(b[y].split("/")[1].split(".")[1],10);}}}}
else if(a[x].indexOf("MSIE")!=-1)
{var b=a[x].split(" ");for(var y=0;y<b.length;y++)
{if(!isNaN(parseFloat(b[y])))
{br="msie";brMaj=parseInt(b[y],10);brMin=parseInt(b[y].split(".")[1],10);}}}
else if(a[x].indexOf("Safari")!=-1)
{var b=a[x].split(" ");for(var y=0;y<b.length;y++)
{if(b[y].indexOf("Safari")!=-1)
{br="safari"
brMaj=parseInt(b[y].split("/")[1],10);brMin=parseInt(b[y].split("/")[1].split(".")[1],10);}}}
else if(a[x].indexOf("Firefox")!=-1)
{var interesting=a[x].match(/Firefox.*\/(\d+)\.(\d+).*$/);br="firefox";brMaj=parseInt(interesting[1],10);brMin=parseInt(interesting[2],10);}
else if(a[x].indexOf("Mozilla")!=-1)
{try{var b=a[x].split(" ")[0];var c=b.split("/");br="mozilla";brMaj=parseInt(c[1],10);brMin=parseInt(c[1].split(".")[1],10);}catch(e){}}}
return{detected:br,ver:[brMaj,brMin]};}
y_up.clientDetect.plugins=function()
{return{wmp:this.wmpVer(),flv:this.flvVer(),qt:this.qtVer(),f4m:this.f4mVer()}}
y_up.clientDetect.wmpVer=function()
{y_up.event('wmpVer begin');var wmp=false;var toReturn=false;for(var i=0;i<(navigator.plugins.length);i++)
{var plugin=navigator.plugins[i];if(plugin.name.indexOf("Windows Media")!=-1)
{wmp=true;wmpMaj=10;wmpMin=1000;}}
if(!wmp)
{var tp;var wmpMaj=0;var wmpMin=0;try{tp=new ActiveXObject("MediaPlayer.MediaPlayer.1");if(tp.FileName=="")
{wmp=true;wmpMaj=6;wmpMin=4;}}
catch(e){}
try{tp=new ActiveXObject("WMPlayer.OCX");if(tp.versionInfo)
{wmp=true;var temp=tp.versionInfo.split(".");wmpMaj=temp[0];for(var x=1;x<temp.length;x++)
{if(parseInt(temp[x])>0,10)
{wmpMin=parseInt(temp[x],10);}}}}
catch(e){}}
if(wmp)
{toReturn=[wmpMaj,wmpMin];}
y_up.event('wmpVer end');return toReturn;}
y_up.clientDetect.f4mVer=function()
{y_up.event('f4mVer begin');var f4m=false;var f4mMaj=false;var f4mMin=false;if(y_up.clientDetect.os()['detected']=='mac'&&navigator.plugins)
{for(var i=0;i<(navigator.plugins.length);i++)
{var plugin=navigator.plugins[i];if(plugin.name.indexOf("Flip4Mac")!=-1)
{for(var j=0;j<plugin.length;j++)
{if(plugin[j].type.indexOf("application/x-mplayer2")!=-1)
{f4m=true;var splitf4m=navigator.plugins[i].name.split(" ");for(var k=0;k<splitf4m.length;k++)
{if(splitf4m[k].indexOf(".")!=-1)
{var ver=splitf4m[k].split(".");f4mMaj=ver[0];f4mMin=ver[1];}}}}}}}
var toReturn=false
if(f4m)
{toReturn=[f4mMaj,f4mMin];}
y_up.event('f4mVer end');return toReturn;}
y_up.clientDetect.flvVer=function()
{y_up.event('flvVer begin');var flv=false;var flvMaj=0;var flvMin=0;var c5,c6,c7,c8,c9;try{c5=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.5");c6=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c7=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");c8=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.8");c9=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.9");}
catch(error){}
if(c5)
{flv=true;flvMaj=5;flvMin=0;}
if(c6)
{flv=true
flvMaj=6
flvMin=0}
if(c7)
{flv=true
flvMaj=7
flvMin=0}
if(c8)
{flv=true
flvMaj=8
flvMin=0}
if(c9)
{flv=true
flvMaj=9
flvMin=0}
if(navigator.plugins)
{if(navigator.plugins!=null&&navigator.plugins.length>0){var flashPlugin=navigator.plugins['Shockwave Flash'];var flashMaj=0;if(typeof flashPlugin=='object'){for(i=25;i>0;i--){if(flashPlugin.description.indexOf(i+'.')!=-1){flv=true;flvMaj=i;flvMin=flashPlugin.description.match(/\.(\d+)/)[1];break;}}}}}
var toReturn=false;if(flv)
{toReturn=[flvMaj,flvMin];}
y_up.event('flvVer end');return toReturn;}
y_up.clientDetect.qtVerMsie=function()
{y_up.event('qtVerMsie begin');var qt=false;var qtMaj=0;var qtMin=0;try{var tp=new ActiveXObject("QuickTimeCheckObject.QuickTimeCheck.1");y_up.event('qtVer IsQuickTimeAvailable begin');if(tp.IsQuickTimeAvailable(0))
{var qtverB16=parseInt(tp.QuickTimeVersion.toString(16),10);qtMaj=Math.floor(qtverB16/1e6);qtMin=Math.floor((qtverB16%1e6)/1e5);qt=true;}
y_up.event('qtVer IsQuickTimeAvailable end');}
catch(e)
{y_up.event('qtVer excepted?');var majors={5:7,4:6,3:6,2:5,1:5};for(var x in majors)
{try{var qtqt=new ActiveXObject("QuickTime.QuickTime."+x);qtMaj=majors[x];qtMin=0;qt=true;break;}catch(e){continue;}}}
var toReturn=false;if(qt)
{toReturn=[Math.floor(Number(qtMaj)),Math.floor(Number(qtMin))];}
y_up.event('qtVerMsie end');return toReturn;}
y_up.clientDetect.qtVer=function()
{y_up.event('qtVer begin');var tp;var qt=false;var qtMaj=0;var qtMin=0;if('msie'==y_up.clientDetect.browser()['detected'])
{qt=true;qtMaj=7;qtMin=1;}
else if(navigator.plugins)
{for(var i=0;i<navigator.plugins.length;i++)
{if(navigator.plugins[i].name.indexOf("QuickTime")>=0)
{for(var j=0;j<navigator.plugins[i].length;j++)
{if(navigator.plugins[i][j].type.indexOf("video/quicktime")!=-1)
{qt=true;var splitQuick=navigator.plugins[i].name.split(" ");for(var k=0;k<splitQuick.length;k++)
{if(!isNaN(parseFloat(splitQuick[k])))
{var ver=splitQuick[k].split(".");qtMaj=ver[0];qtMin=parseFloat(ver[1]+"."+ver[2]);}}}}}}}
var toReturn=false;if(qt)
{toReturn=[Math.floor(Number(qtMaj)),Math.floor(Number(qtMin))];}
y_up.event('qtVer end');return toReturn;}
y_up.notifyLoaded('detect');
y_up.playVideo_id=function(pId)
{y_up.event('pv_id '+pId);var vidChange=false;if(y_up.noDupe!=0&&y_up.noDupe==pId&&(y_up.noDupeTimeout>0&&(new Date()).getTime()<y_up.noDupeTimeout))
{y_up.event("noDupe prevention - "+pId);}
else
{y_up.id=pId;if('hybrid'==y_up.detect&&y_up.nPlays>0&&!y_up.goodQoS(y_up.getStateCounts())&&!y_up.physicalDetect&&y_up.effectiveKbps()>1)
{y_up.physicalDetect=1;y_up.bandwidth.detect(function(pB,pL){y_up.detectKbps=pB;y_up.latency=pL;y_up.setPrefCookie({'bw':y_up.kbps,'dbw':y_up.detectKbps,'tech':y_up.streamOrder()});y_up.playVideo(y_up.id);},5*1000);}
else
{y_up.playlist.fetch(y_up.id,y_up.streamOrder(),y_up.effectiveKbps(),function(pSeq){y_up.noDupe=pId;y_up.noDupeTimeout=((new Date()).getTime()+y_up.cfgNoDupeTimeLimt);y_up.playVideo(pSeq);});vidChange=true;}}
return vidChange;}
y_up.playVideo_sequence=function(pId)
{y_up.event('pv_seq '+pId);if(y_up.seqInProgress)
{var wasPlaying=y_up.activeSeq.item();y_up.catchSeq(pId,wasPlaying);}
else
{y_up.seqInProgress=true;y_up.catchSeq(pId);}}
y_up.playVideo_object=function(pId)
{y_up.event('pv_o '+pId);if(y_up.isItemPlayable(pId))
{y_up.lastInterrupted=false;if(!y_up.done)
{y_up.lastInterrupted=true;}
var item=y_up.limitSADLengths(pId);y_up.changeTechAndPlay(item)}
else
{var e=y_up.get(pId,['type']);y_up.notifyItemEnd(e,pId);}}
y_up.itemType=function(pItem)
{var type='unknown';if(y_up.isNodeId(pItem))
{type="id";}
else if(((pItem&&typeof pItem=='function')||typeof pItem=='object')&&pItem.constructor==Array)
{type="sequence";}
else if((pItem&&typeof pItem=='function')||typeof pItem=='object')
{type="object"}
return type;}
y_up.isNodeId=function(pId)
{var isId=false;var n=parseInt(pId,10);if(typeof n==='number'&&n>0)
{isId=true;}
else if(typeof pId=='string'&&pId.match(/v[0-9]+/))
{isId=true;}
return isId;}
y_up.effectiveKbps=function()
{var toReturn=y_up.detectKbps;if(toReturn>300)
{toReturn=300+Math.floor(0.75*(toReturn-300))}
if(y_up.kbps>0)
{toReturn=y_up.kbps;}
return toReturn;}
y_up.getStateCounts=function()
{var toReturn=y_up.stateCounts;if(typeof toReturn[y_up.lastState]=='undefined')
{toReturn[y_up.lastState]=0;}
toReturn[y_up.lastState]+=(new Date()).getTime()-y_up.lastStateWhen;return toReturn;}
y_up.goodQoS=function(pStateCounts)
{var acceptable=true;return acceptable;}
y_up.limitSADLengths=function(pItem)
{var d=y_up.get(pItem,['stream','duration']);if(pItem['type']=='S_AD'&&(d==0||d>300))
{if(!pItem['stream'])
{pItem['stream']={};}
pItem['stream']['duration']=45;}
return pItem;}
y_up.getBitrate=function()
{return y_up.kbps;}
y_up.changePlayerBitrate=function(pBitrate,pRestartStream)
{y_up.kbps=pBitrate;if(pRestartStream)
{y_up.noDupe=0;y_up.noDupeTimeout=0;y_up.playVideo(y_up.id);}
return y_up.kbps;}
y_up.bwCallBack=function(pKbps)
{y_up.detectKbps=pKbps;if(y_up.plLoaded)
{y_up.playlist.fetch(y_up.id,y_up.streamOrder(),y_up.effectiveKbps(),y_up.plCallBack);}};y_up.calculateStreamOrder=function(pOs,pBrowser,pPlugins)
{var preferredEnc=[];if(pOs['detected']=='win')
{if(pBrowser['detected']=='msie')
{var preferredEnc=['flv','wmv','mov'];}
else
{var preferredEnc=['flv','mov','wmv'];}}
else if(pOs['detected']=='mac')
{var preferredEnc=['flv','mov','wmv'];}
else
{var preferredEnc=['flv','wmv','mov'];}
var encOrder=[];if(pOs['detected']=='mac')
{var encHandlers={'flv':'flv','wmv':'f4m','mov':'qt'};}
else
{var encHandlers={'flv':'flv','wmv':'wmp','mov':'qt'};}
for(var x=0;x<preferredEnc.length;x++)
{var curEnc=preferredEnc[x];var curTech=encHandlers[curEnc];var curVer=pPlugins[curTech];if(y_up.pluginMeetsMinVer(curTech,curVer))
{encOrder.push(curEnc);}}
y_up.event('stream order calculated '+encOrder.join(','));return encOrder;}
y_up.pluginMeetsMinVer=function(pPlugin,pVer)
{var minVer={'flv':[8,0],'wmp':[9,0],'qt':[7,0],'f4m':[2,0]};if(pVer&&((pVer[0]==minVer[pPlugin][0]&&pVer[1]>=minVer[pPlugin][1])||pVer[0]>minVer[pPlugin][0]))
{return true;}
else
{return false;}}
y_up.msieCanPlayMov=function()
{var actualVer=y_up.clientDetect.qtVerMsie();return y_up.pluginMeetsMinVer('qt',actualVer);}
y_up.canPlay=function(pItem)
{var itemEncoding=y_up.normalizeEncoding(pItem['stream']['encoding']);if('msie'==y_up.clientDetect.browser()['detected']&&'mov'==itemEncoding)
{return y_up.msieCanPlayMov();}
else
{if(y_up.streamOrder().indexOf(itemEncoding)!=-1)
{return true;}
else
{return false;}}}
y_up.normalizeEncoding=function(pEncoding)
{var norm=pEncoding.toLowerCase();if('-wmp-wmv-'.indexOf('-'+norm+'-')>-1)
{norm='wmv';}
else if('-qt-qtv-quicktime-mov-'.indexOf('-'+norm+'-')>-1)
{norm='mov';}
else if('-fl-flv-flash-'.indexOf('-'+norm+'-')>-1)
{norm='flv';}
else
{norm='unknown';}
return norm;}
y_up.streamOrder=function()
{var ydc=y_up.detectCache;if(!ydc['o'])
{y_up.fillDetectCache();}
return y_up.calculateStreamOrder(ydc['o'],ydc['b'],ydc['p']).join(',');}
y_up.start=function(pNeedLoaded,pReadyFunction)
{y_up.event("start called");if(!pNeedLoaded)
{pNeedLoaded=y_up.currentlyLoading();}
for(var x=0;x<pNeedLoaded.length;x++)
{if(!y_up.isLoaded(pNeedLoaded[x]))
{window.setTimeout(function(){y_up.start(pNeedLoaded,pReadyFunction);},0.5*1000)
return;}}
y_up.event("start all preloaded");if(typeof pReadyFunction==='function'||typeof pReadyFunction==='object')
{pReadyFunction();}
if(y_up.detect!=0)
{var prefCookie=y_up.getPrefCookie();if(prefCookie['bw']>0)
{y_up.kbps=prefCookie['bw'];}
if(prefCookie['dbw']>0)
{y_up.detectKbps=prefCookie['dbw'];}
var sessCookie=y_up.getSessionCookie();y_up.gsToken=sessCookie['tk'];if(1==y_up.detect||(y_up.detect=="cookie"&&y_up.needBandwidthDetect(prefCookie)))
{if(1==y_up.detect)
{y_up.bwm="F";}
else
{y_up.bwm="B";}
y_up.physicalDetect=1;y_up.bandwidth.detect(function(pB,pL){y_up.detectKbps=pB;y_up.latency=pL;y_up.setPrefCookie({'bw':y_up.kbps,'dbw':y_up.detectKbps,'tech':y_up.streamOrder()});y_up.playVideo(y_up.id);},3000);}
else if(y_up.detect=="hybrid")
{y_up.bwm="H";if(prefCookie['bw']>0)
{y_up.kbps=prefCookie['bw'];}
if(prefCookie['dbw']>0)
{y_up.detectKbps=prefCookie['dbw'];}
y_up.playVideo(y_up.id);}
else
{y_up.bwm="N";y_up.playVideo(y_up.id);}}
else
{y_up.playVideo(y_up.id);}};y_up.needBandwidthDetect=function(pPrefs)
{var CFG_BANDWIDTH_GOOD_TIME=3600;var needDetect=0;if(pPrefs['set']==0||(pPrefs['bw']==0&&pPrefs['dbw']==0)||(pPrefs['set']+(3600*1000))<(new Date()).getTime())
{needDetect=1;}
return needDetect;}
y_up.getPrefCookie=function()
{var cooks=document.cookie.split(";");var toReturn={'bw':0,'dbw':0,'tech':'','set':0};var dta=[0,0,0,0];for(var x=0;x<cooks.length;x++)
{cooks[x]=cooks[x].replace(/^ /,"");if(cooks[x].indexOf("QMC=")==0)
{cooks[x]=cooks[x].replace(/^QMC=/,"");cooks[x]=unescape(cooks[x]);dta=cooks[x].split("|");}}
toReturn['bw']=parseInt(dta[0],10);toReturn['tech']=dta[1];toReturn['set']=dta[2];toReturn['dbw']=parseInt(dta[3],10);return toReturn;}
y_up.setPrefCookie=function(pHash)
{var name="QMC";var hourSeconds=3600;var expires=new Date(((new Date()).getTime()+(hourSeconds*24*1000)));var path="/";var secure=false;var bw=pHash['bw'];var tech=pHash['tech'];var set=(new Date().getTime());var dbw=pHash['dbw'];var value=bw+"|"+tech+"|"+set+"|"+dbw;var domain=location.hostname;if(!domain.length){domain=location.host;}
if(domain!=="www.yahoo.com"){var toSet=name+"="+escape(value)+
((expires)?"; expires="+expires.toGMTString():"")+
((path)?"; path="+path:"")+
((domain)?"; domain="+domain:"")+
((secure)?"; secure":"");document.cookie=toSet;}
return toSet;}
y_up.getSessionCookie=function(pHash)
{var cooks=document.cookie.split(";");var toReturn={'tk':0};for(var x=0;x<cooks.length;x++)
{cooks[x]=cooks[x].replace(/^ /,"");if(cooks[x].indexOf("QTK=")==0)
{cooks[x]=cooks[x].replace(/^QTK=/,"");toReturn['tk']=cooks[x];}}
return toReturn;}
y_up.setSessionCookie=function(pHash)
{var name="QTK";var hourSeconds=3600;var expires=false;var domain=location.hostname;var path="/";var secure=false;if(!domain.length){domain=location.host;}
var value=pHash['tk'];if(domain!=="www.yahoo.com"&&domain!=="movies.yahoo.com"){var toSet=name+"="+escape(value)+
((expires)?"; expires="+expires.toGMTString():"")+
((path)?"; path="+path:"")+
((domain)?"; domain="+domain:"")+
((secure)?"; secure":"");document.cookie=toSet;}
return toSet;}
y_up.streamFetcherItem={};y_up.streamFetcher=function(pStream)
{y_up.event('streamFetcher received');y_up.streamFetcherItem['stream']=pStream;y_up.playVideo(y_up.streamFetcherItem);}
y_up.isAdvancedAd=function(pItem)
{var x=y_up.get(pItem,['stream','metadata','ads','VID']);return(x!=false);};y_up.setGSToken=function(pTk)
{y_up.gsToken=pTk;y_up.setSessionCookie({'tk':y_up.gsToken});}
y_up.processItem=function(pItem)
{if(typeof pItem['token']=='string'&&!y_up.isAdvancedAd(pItem))
{y_up.setGSToken(y_up.get(pItem,['token']));}
else
{}
var lsid=y_up.get(pItem,['stream','metadata','spaceid']);if((typeof lsid=='string'&&lsid.length>0)||(typeof lsid=='number'&&lsid>=0))
{y_up.lastSpaceId=lsid;}
if(pItem['type'].substr(0,2)=='S_')
{if(pItem['stream']['encoding']=='wmv')
{pItem['stream']['encoding']='wmp';}
if(typeof pItem['stream']=='string')
{var s=pItem['stream'];s+="&";s=s.replace(new RegExp('callback=.*?&'),"");s+="&callback=y_up.streamFetcher";y_up.streamFetcherItem=pItem;y_up.event('streamFetcher call '+s);y_up.loadScript(s);}
else
{y_up.playVideo(pItem);}}
else if(pItem['type']=='NO_AD')
{y_up.track(pItem['beacon'],{});y_up.event("beacon tracking (NO_AD): "+pItem['beacon']);y_up.notifyItemEnd(pItem['type'],pItem);}
else
{y_up.notifyItemBegin(pItem['type'],pItem);y_up.notifyItemEnd(pItem['type'],pItem);}}
y_up.notifyItemBegin=function(pEvent,pItem)
{y_up.event('notifyItemBegin '+pEvent);if(typeof y_up.beginHandlers['always']!=='undefined')
{y_up.beginHandlers['always'](pItem);}
if(typeof y_up.beginHandlers[pEvent]!=='undefined')
{y_up.beginHandlers[pEvent](pItem);}
var lsid=y_up.get(pItem,['spaceid']);if((typeof lsid=='string'&&lsid.length>0)||(typeof lsid=='number'&&lsid>=0))
{y_up.lastSpaceId=lsid;}
return;}
y_up.clearTracking=function(pItem)
{if(y_up.get(pItem,['stream','metadata','itrack']))
{y_up.stopItracking();}
if(y_up.get(pItem,['stream','metadata','track']))
{y_up.stopTracking();}
if(y_up.get(pItem,['stream','metadata','beacon']))
{y_up.stopBeacon();}}
y_up.notifyItemEnd=function(pEvent,pItem)
{y_up.event('notifyItemEnd '+pEvent);if(pEvent!=false&&typeof y_up.endHandlers[pEvent]!=='undefined')
{y_up.endHandlers[pEvent](pItem);}
if(pEvent!=false&&typeof y_up.endHandlers['always']!=='undefined')
{y_up.endHandlers['always'](pItem);}
if(pItem['type']=='S_STREAM')
{y_up.noDupe=0;y_up.noDupeTimeout=0;}
y_up.clearTracking(pItem);if(y_up.toPlay)
{var toPlay=y_up.toPlay;y_up.done=1;y_up.toPlay=0;y_up.playVideo(toPlay);}
else
{var nextItem=y_up.activeSeq.next();if(typeof nextItem=="undefined"||nextItem==false)
{y_up.noDupe=0;y_up.noDupeTimeout=0;y_up.seqInProgress=false;y_up.event("calling sequenceEndHandler");y_up.sequenceEndHandler();}
else
{y_up.processItem(nextItem);y_up.notifyItemBegin(nextItem['type'],nextItem);}}}
y_up.catchSeq=function(pSeq,pEnding)
{y_up.activeSeq=y_up.makeSeq(pSeq);if(typeof pEnding=="undefined")
{y_up.notifyItemEnd(false,{});}
else
{y_up.notifyItemEnd(pEnding['type'],pEnding);}}
y_up.makeSeq=function(pSeq)
{var seqClass=function(pToRun)
{var seq=pToRun;var seqIndex=0;var current={};var self=this;var _next=function()
{if(seq&&seqIndex<seq.length)
{var toReturn=seq[seqIndex];seqIndex+=1;current=toReturn;return current;}
else
{current=false;return current;}}
var _item=function()
{return current;}
this.next=function()
{return _next();}
this.item=function()
{return _item();}};var z=new seqClass(pSeq);return(z);}
y_up.techHandler=function(pItem)
{var isMacintosh=y_up.clientDetect.os()['detected']=='mac';var encoding=y_up.normalizeEncoding(pItem['stream']['encoding']);var tech='unknown';if(encoding=='wmv')
{tech='wmp';}
if(encoding=='flv')
{tech='flv';}
if(encoding=='mov'||isMacintosh&&encoding=='wmv')
{tech='qt';}
return tech;}
y_up.techFactory=function(pItem,pCompleteFunction)
{var toReturn;var techToUse=y_up.techHandler(pItem);if(!this.canPlay(pItem))
{toReturn=function(){var link=y_up.solutionsBase;var errW=y_up.vidW;var errH=y_up.vidH;var html=y_up.errorHtml(errW,errH,link);document.getElementById('player').innerHTML=html;};}
else
{switch(techToUse)
{case'wmp':toReturn=function()
{var wmpWriterAndPlayer=(function(pItem,pOnDone)
{return function()
{y_up.player=new y_WMPPlayer();y_up.tech='wmp';y_up.internalVideoComplete=pOnDone;y_up.player.writePlayer(pItem);}})(pItem,pCompleteFunction);if(y_up.controls)
{y_up.loadAndCall('playhead',y_up.urlLoc+'src/vidPlayer_playhead.js',function(){y_up.loadAndCall('wmp',y_up.urlLoc+'src/vidPlayer_WMP.js',wmpWriterAndPlayer);});}
else
{y_up.loadAndCall('wmp',y_up.urlLoc+'src/vidPlayer_WMP.js',wmpWriterAndPlayer);}}
break;case'flv':toReturn=function()
{var flvWriterAndPlayer=(function(pItem,pOnDone)
{return function()
{y_up.player=new y_FLVPlayer();y_up.tech='flv';y_up.internalVideoComplete=pOnDone;y_up.player.writePlayer(pItem);}})(pItem,pCompleteFunction);y_up.loadAndCall('flv',y_up.urlLoc+'src/vidPlayer_FLV.js',flvWriterAndPlayer);}
break;case'qt':toReturn=function()
{var qtWriterAndPlayer=(function(pItem,pOnDone)
{return function()
{y_up.player=new y_QTPlayer();y_up.tech='qt';y_up.internalVideoComplete=pOnDone;y_up.player.writePlayer(pItem);}})(pItem,pCompleteFunction);if(y_up.controls)
{y_up.loadAndCall('playhead',y_up.urlLoc+'src/vidPlayer_playhead.js',function(){y_up.loadAndCall('qt',y_up.urlLoc+'src/vidPlayer_QT.js',qtWriterAndPlayer);});}
else
{y_up.loadAndCall('qt',y_up.urlLoc+'src/vidPlayer_QT.js',qtWriterAndPlayer);}}
break;default:alert("unknown tech: "+techToUse);break;}}
return toReturn;}
y_up.notifierFactory=function(pItem)
{var res=(function(cItem)
{return function()
{y_up.lastInterrupted=0;y_up.done=1;if("hybrid"==y_up.detect)
{y_up.stopPanic();}
y_up.notifyItemEnd(cItem['type'],cItem);};})(pItem);return res;}
y_up.resetPluginEvents=function()
{y_up.playerReady=false;y_up.hasPluginBuffered=false;y_up.hasPluginPlayed=false;y_up.hasAlmostOver=false;y_up.lastStateCounts={};for(var x in y_up.stateCounts)
{y_up.lastStateCounts[x]=y_up.stateCounts[x];}
y_up.stateCounts={};y_up.lastState="reset";y_up.lastStateWhen=(new Date()).getTime();y_up.nSeeks=0;}
y_up.playerAvailable=function()
{if(typeof window.y_griffin_cp!=='undefined'){y_griffin_cp.playerAvailable();}
if(y_up.playerReady){return;}
y_up.event("playerAvailable "+y_up.tech);y_up.playerReady=true;return('jsNotified');};y_up.pluginBuffering=function()
{if(y_up.hasPluginBuffered){return;}
y_up.playerAvailable();var always=y_up.getItemFirstBufferHandler();var currentType=y_up.getItemFirstBufferHandler(y_up.activeSeq.item()['type']);if(typeof always=='function')
{always(y_up.activeSeq.item());}
if(typeof currentType=='function')
{currentType(y_up.activeSeq.item());}
y_up.setVolume(y_up.savedVolume);y_up.event('firstBuffer');y_up.hasPluginBuffered=true;}
y_up.pluginPlaying=function()
{if(y_up.hasPluginPlayed){return;}
y_up.playerAvailable();y_up.pluginBuffering();y_up.event('firstPlay');y_up.done=0;y_up.stopPanic();y_up.nPlays+=1;y_up.hasPluginPlayed=true;if(y_up.activeSeq.item()['stream']['beacon']&&y_up.activeSeq.item()['stream']['beacon'].length>0)
{y_up.track(y_up.activeSeq.item()['stream']['beacon']);y_up.event("beacon tracking (pluginPlaying): "+y_up.activeSeq.item()['stream']['beacon']);}
var iTrackArray=y_up.get(y_up.activeSeq.item(),['stream','metadata','itrack']);if(iTrackArray)
{var iTrackUrl=y_up.get(iTrackArray,['url']);var iTrackInterval=y_up.get(iTrackArray,['interval']);if(typeof iTrackUrl=='string'&&Number(iTrackUrl.length))
{y_up.startItracking(iTrackUrl,iTrackInterval);}}
var trackArray=y_up.get(y_up.activeSeq.item(),['stream','metadata','track']);if(trackArray)
{var trackUrl=y_up.get(trackArray,['url']);var trackInterval=y_up.get(trackArray,['interval']);if(typeof trackUrl=='string'&&Number(trackUrl.length))
{y_up.startTracking(trackUrl,trackInterval);}}
var beaconArray=y_up.get(y_up.activeSeq.item(),['stream','metadata','beacon']);if(beaconArray)
{var beaconUrl=y_up.get(beaconArray,['url']);var beaconInterval=y_up.get(beaconArray,['interval']);if(typeof beaconUrl=='string'&&Number(beaconUrl.length))
{y_up.startBeacon(beaconUrl.replace(/{session_id}/,y_up.logGuid),beaconInterval);}}
var always=y_up.getItemFirstPlayHandler();var currentType=y_up.getItemFirstPlayHandler(y_up.activeSeq.item()['type']);if(typeof always=='function')
{always(y_up.activeSeq.item());}
if(typeof currentType=='function')
{currentType(y_up.activeSeq.item());}
y_up.pTrack();y_up.pTrack=function(){};}
y_up.changeTechAndPlay=function(pItem)
{y_up.resetPluginEvents();if("hybrid"==y_up.detect)
{y_up.startPanic(27*1000);}
if(typeof y_up.player=='undefined')
{var newPlayer=y_up.techFactory(pItem,y_up.notifierFactory(pItem));newPlayer();}
else
{y_up.player.unLoadPlayer();if(y_up.tech=='flv')
{window.setTimeout(function(){y_up.player.unLoadHtml();},0.5*1000);}
window.setTimeout(function(){var newPlayer=y_up.techFactory(pItem,y_up.notifierFactory(pItem));newPlayer();},1*1000);}};y_up.qCookie=function()
{var dta={};dta['je']=navigator.javaEnabled()?1:0;dta['p1']=0
dta['p5']=0
dta['r']=((y_up.detect==1)?Math.floor(y_up.kbps):0)
dta['pp']=0
dta['pr']=((y_up.detect==1)?dta['r']:0)
dta['ypmj']=0;dta['ypmi']=0;dta['wmmj']=y_up.clientDetect.wmpVer()?y_up.clientDetect.wmpVer()[0]:0;dta['wmmi']=y_up.clientDetect.wmpVer()?Math.floor(y_up.clientDetect.wmpVer()[1]/1000):0;dta['rnmj']=0;dta['rnmi']=0;dta['qtmj']=y_up.clientDetect.qtVer()?y_up.clientDetect.qtVer()[0]:0;dta['qtmi']=y_up.clientDetect.qtVer()?Math.floor(y_up.clientDetect.qtVer()[1]):0;dta['fpmj']=y_up.clientDetect.flvVer()?y_up.clientDetect.flvVer()[0]:0;dta['fpmi']=y_up.clientDetect.flvVer()?y_up.clientDetect.flvVer()[1]:0;dta['h']=window.screen.height;dta['w']=window.screen.width;dta['tz']=Math.floor((new Date().getTimezoneOffset())/60);dta['ct']=2;var url='http://dal-akhaninbsd.dallas.corp.yahoo.com/q.php?';return y_up.track(url,dta);}
y_up._findItem=function(pArray,pStart,pText)
{var pos=-1;if(pStart>=0&&pStart<pArray.length)
{for(var x=pStart;x<pArray.length;x++)
{if(0==pArray[x]['name'].indexOf(pText))
{pos=x;break;}}}
return pos;}
y_up._rFindItem=function(pArray,pStart,pText)
{var pos=-1;if(pStart>=0&&pStart<pArray.length)
{for(var x=pStart;x>=0;x--)
{if(0==pArray[x]['name'].indexOf(pText))
{pos=x;break;}}}
return pos;}
y_up._eventTimes=function(pArray,pStart,pE1,pE2)
{var e1pos=y_up._findItem(pArray,pStart,pE1);var e2pos=y_up._findItem(pArray,e1pos,pE2);var e1time=-1;var e2time=-1;if(e1pos>=0){e1time=pArray[e1pos]['time']};if(e2pos>=0){e2time=pArray[e2pos]['time']};var both=(e1pos!=-1&&e2pos!=-1);return[both,e1time,e2time];}
y_up.statsInit=function()
{var toReturn={"UC":[],"OS":[],"B":[],"B":[],"P":["F",-1,-1,"W",-1,-1,"Q",-1,-1,"4",-1,-1],"T":[],"BW":[],"H":[]};toReturn.UC[0]=Math.floor((new Date().getTimezoneOffset())/60);toReturn.OS[0]=y_up.clientDetect.os()['detected'][0].toUpperCase();toReturn.OS[1]=y_up.clientDetect.os()['ver'][0];toReturn.OS[2]=y_up.clientDetect.os()['ver'][1];toReturn.B[0]=y_up.clientDetect.browser()['detected'][0].toUpperCase();toReturn.B[1]=y_up.clientDetect.browser()['ver'][0];toReturn.B[2]=y_up.clientDetect.browser()['ver'][1];var bl={"msie":"I"};var b=y_up.clientDetect.browser()['detected'];if(typeof bl[b]!="undefined")
{toReturn.B[0]=bl[b];}
var p=y_up.clientDetect.plugins();if(p["flv"])
{toReturn.P[1]=p["flv"][0];toReturn.P[2]=p["flv"][1];}
if(p["wmv"])
{toReturn.P[4]=p["wmv"][0];toReturn.P[5]=p["wmv"][1];}
if(p["qt"])
{toReturn.P[7]=p["qt"][0];toReturn.P[8]=p["qt"][1];}
if(p["f4m"])
{toReturn.P[10]=p["f4m"][0];toReturn.P[11]=p["f4m"][1];}
var t=y_up._eventTimes(y_up.events,0,"d_s","d_e");if(t[0])
{toReturn.T[0]="t"+(t[1]-y_up.events[0]['time']);toReturn.T[1]="t"+(t[2]-y_up.events[0]['time']);}
var bw=y_up._eventTimes(y_up.events,0,"bw_s","bw_e");toReturn.BW[0]=y_up.bwm;toReturn.BW[1]=y_up.kbps;toReturn.BW[2]=y_up.latency;if(bw[0])
{toReturn.BW[3]="t"+(bw[1]-y_up.events[0]['time']);toReturn.BW[4]="t"+(bw[2]-y_up.events[0]['time']);}
return toReturn;}
y_up.stats=function()
{var data={};var bw=y_up._eventTimes(y_up.events,0,"bw_s","bw_e");data['bw_m']=y_up.detect;data['bw_s']=bw[1];data['bw_e']=bw[2];var d=y_up._eventTimes(y_up.events,0,"d_s","d_e");data['d_s']=d[1];data['d_e']=d[2];var start=y_up._rFindItem(y_up.events,(y_up.events.length-1),"pv_id");var pa=y_up._findItem(y_up.events,start,'playerAvailable');if(pa>0)
{data['pa']=y_up.events[pa]['time'];}
else
{data['pa']=-1;}
var fb=y_up._findItem(y_up.events,start,'firstBuffer');if(fb>0)
{data['fb']=y_up.events[fb]['time'];}
else
{data['fb']=-1;}
var fp=y_up._findItem(y_up.events,start,'firstPlay');if(fp>0)
{data['fp']=y_up.events[fp]['time'];}
else
{data['fp']=-1;}
return data;}
y_up.pTrackData=function()
{var eventsDiff=function(pE1,pE2)
{var e1pos=-1;var e2pos=-1;var toReturn="";for(var x=0;x<y_up.events.length;x++)
{var entry=y_up.events[x]['name'];if(entry.indexOf(pE1)==0)
{e1pos=x;}
if(entry.indexOf(pE2)==0)
{e2pos=x;}
if(e1pos>-1&&e2pos>-1)
{toReturn=Math.abs(y_up.events[e2pos]['time']-y_up.events[e1pos]['time']);break;}}
return toReturn;}
var dta={};dta['player']=y_up.pTrackPlayerName;dta['bandwidth']=y_up.effectiveKbps();dta['os']=y_up.clientDetect.os()['detected'];dta['browser']=y_up.clientDetect.browser()['detected'];dta['prefplayer']=y_up.streamOrder();dta['tech']=y_up.tech;dta['initialized']=eventsDiff('zeroTime','playlist fetch');dta['setmediasrc']=eventsDiff('zeroTime','writePlayer end');dta['cliprate']="";dta['clipenc']="";if(y_up.activeSeq&&y_up.activeSeq.item()&&y_up.activeSeq.item()['stream']&&y_up.activeSeq.item()['stream']['encoding'])
{dta['cliprate']=y_up.activeSeq.item()['stream']['bitrate'];dta['clipenc']=y_up.activeSeq.item()['stream']['encoding'];}
if(y_up.canScript())
{dta['mediaTime']=eventsDiff('zeroTime','playerAvailable');dta['buffercomplete']=eventsDiff('zeroTime','firstPlay');dta['timetostream']=eventsDiff('playlist fetch','firstPlay');}
else
{dta['mediaTime']="";dta['buffercomplete']="";dta['timetostream']="";}
dta['country']="";dta['nodeid']=y_up.id;if(window.location.toString().substr(0,4)=="http")
{dta['server']=window.location.toString().split("http://")[1].split("/")[0];}else{dta['server']="DEVTEST";}
return dta;}
y_up.pTrack=function()
{y_up.event("pTrack firing");var dta=y_up.pTrackData();var url="http://advision.webevents.yahoo.com/farnsworth/ptrack2.php?";return y_up.track(url,dta);}
y_up.iTrack=function(pUrl,pHash)
{y_up.niTracks+=1;var url=pUrl;for(var f in pHash)
{try{url+=escape(f)+'='+escape(pHash[f].join("|"))+'&';}catch(e){url+=escape(f)+'='+escape(pHash[f])+'&';}}
var ifn=y_up.niTracks%3;var z=document.getElementById('y_upTrackerI'+ifn);try
{z.src=url;}catch(e){z=document.createElement('iframe');z.id='y_upTrackerI'+ifn;z.width=1;z.height=1;z.src=url;z.style.position="absolute";z.style.top="-100px";z.style.left="-100px";document.getElementsByTagName('body')[0].appendChild(z);}
return url;}
y_up.startItracking=function(pUrl,pInterval)
{if(pUrl&&pUrl.length)
{y_up.event("iTracking beacon started url ("+pUrl+") interval ("+pInterval+")");if(Number(pInterval)>0)
{y_up.iTrackInterval=window.setInterval(function(){y_up.iTrack(pUrl);},pInterval*1000);}
else
{y_up.iTrack(pUrl);}}}
y_up.stopItracking=function()
{y_up.event("iTracking beacon complete");window.clearInterval(y_up.iTrackInterval);}
y_up.track=function(pUrl,pHash)
{y_up.nTracks+=1;var url=pUrl;for(var f in pHash)
{try{url+=escape(f)+'='+escape(pHash[f].join("|"))+'&';}catch(e){url+=escape(f)+'='+escape(pHash[f])+'&';}}
window['y_upTracker'+(y_up.nTracks%10)]=new Image();window['y_upTracker'+(y_up.nTracks%10)].src=url;return url;}
y_up.startTracking=function(pUrl,pInterval)
{if(pUrl&&pUrl.length)
{y_up.event("tracking beacon started url ("+pUrl+") interval ("+pInterval+")");if(Number(pInterval)>0)
{y_up.trackInterval=window.setInterval(function(){y_up.track(pUrl);},pInterval*1000);}
else
{y_up.track(pUrl);}}}
y_up.stopTracking=function()
{y_up.event("tracking beacon complete");window.clearInterval(y_up.trackInterval);}
y_up.startBeacon=function(pUrl,pInterval)
{if(pUrl&&pUrl.length&&pInterval)
{y_up.loadScript(pUrl+"&callback=y_up.beaconResult");y_up.event("stream beacon started url ("+pUrl+") interval ("+pInterval+")");if(Number(pInterval)>0){y_up.beaconInterval=window.setInterval(function(){y_up.loadScript(pUrl+"&callback=y_up.beaconResult");},pInterval*1000);}}}
y_up.beaconResult=function(pStatus)
{var toReturn=false;try
{if(Number(pStatus)==0)
{y_up.player.unLoadPlayer();if(y_up.tech=='flv')
{window.setTimeout(function(){y_up.player.unLoadHtml();},0.5*1000);}
window.setTimeout(function(){y_up.disconnectHandler({'id':'player'});},1*1000);toReturn=true;}}catch(e){}
return toReturn;}
y_up.stopBeacon=function()
{y_up.event("stream beacon complete");window.clearInterval(y_up.beaconInterval);y_up.beaconInterval=0;}
y_up.startPanic=function(pTimeLimit)
{y_up.event("panic - start monitoring");if(y_up.panicTimeout!=0)
{y_up.stopPanic();}
y_up.panicTimeout=window.setTimeout(y_up.panic,pTimeLimit);return;}
y_up.panic=function()
{y_up.event("panic - want to panic");var willChange=false;window.clearTimeout(y_up.panicTimeout);y_up.panicTimeout=0;if(y_up.effectiveKbps()>1)
{y_up.event("panic - actually panic");y_up.kbps=0;y_up.detectKbps=1;y_up.setPrefCookie({'bw':0,'dbw':0,'tech':y_up.streamOrder()});y_up.resetPluginEvents();y_up.noDupe=0;y_up.noDupeTimeout=0;y_up.playVideo(y_up.id);willChange=true;}
return willChange;}
y_up.stopPanic=function()
{y_up.event("panic - stop panic monitoring");if(y_up.panicTimeout!=0)
{window.clearTimeout(y_up.panicTimeout);y_up.panicTimeout=0;}
return;}
y_up.notifyAdControl=function(){y_up.nac();}
y_up.notifyClientControl=function(){y_up.ncc();}
y_up.g=function(pId)
{return document.getElementById(pId);};y_up.notifyLoaded('main');
y_up.playlist={};y_up.playlist.callback=function(){};y_up.playlist.fetch=function(pNodeId,pTechOrder,pBitRate,pCallback)
{var bitrate=Math.floor(pBitRate);if(bitrate<=0)
{bitrate=1;}
if(typeof pCallback=="function")
{this.callback=pCallback;}
if(pNodeId===null)
{this._receive(null);}
var playlistUrl=y_up.playlistBase;playlistUrl+='&node_id='+pNodeId;playlistUrl+='&tech='+pTechOrder;if(typeof y_up.lang!="undefined"&&y_up.lang!=null){playlistUrl+='&lang='+y_up.lang;}
playlistUrl+='&lg='+y_up.logGuid;playlistUrl+='&eventID='+y_up.eventId;playlistUrl+='&chid='+y_up.channelId;playlistUrl+='&s=';playlistUrl+='&output='+"json";playlistUrl+='&bw='+bitrate;playlistUrl+='&rd='+y_up.rd;playlistUrl+='&tk='+y_up.gsToken;playlistUrl+='&ptr='+y_up.pTrackPlayerName;playlistUrl+='&vidW='+y_up.vidW;playlistUrl+='&vidH='+y_up.vidH;playlistUrl+='&ck='+Math.round((Math.random()*90000)+9999);playlistUrl+='&callback=y_up.playlist._receive';y_up.event("playlist fetch "+playlistUrl);y_up.pTrack();y_up.loadScript(playlistUrl);return;};y_up.playlist._receive=function(pResponse)
{y_up.event('playlist._receive '+pResponse);if(pResponse)
{this.callback(pResponse);}
else
{this.callback(null);}}
y_up.plLoaded=true;y_up.notifyLoaded('pl');
