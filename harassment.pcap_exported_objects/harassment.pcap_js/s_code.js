/* SiteCatalyst code version: H.10.
Copyright 1997-2007 Omniture, Inc. More info available at
http://www.omniture.com */
/************************ ADDITIONAL FEATURES ************************
     Plugins
*/
/* Specify the Report Suite ID(s) to track here */
var s_account="cnn2global"
var s=s_gi(s_account)
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
s.linkInternalFilters="javascript:,cnn"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"
/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
	/* Add calls to plugins here */
	s.campaign=s.getQueryParam('pks');
	s.campaign=s.getQueryParam('cid');
	var url1=s.linkHandler('/time/','e');
	var url2=s.linkHandler('cnn.com/money/','e');
	var url3=s.linkHandler('/si/','e');
	var url4=s.linkHandler('/ew/','e');
	var url5=s.linkHandler('/lawyers/','e');
	var url6=s.linkHandler('/popsci/','e');
	var url7=s.linkHandler('/southernaccents/','e');
	var url8=s.linkHandler('/parenting/','e');
	var url9=s.linkHandler('/cookinglight/','e');
	var url10=s.linkHandler('/budgettravel/','e');
	var url11=s.linkHandler('/healthmag/','e');
	var url12=s.linkHandler('/cottageliving/','e');
	var url13=s.linkHandler('/sunset/','e');
	var url14=s.linkHandler('/southern/','e');
	var url15=s.linkHandler('/coastal/','e');
	var url16=s.linkHandler('/peoplemag/','e');
	var url17=s.linkHandler('/travelandleisure/','e');
	var url18=s.linkHandler('/international/','e');
	var url19=s.linkHandler('/intl/','e');
	var url20=s.linkHandler('/healthologyvid/','e');
	var url21=s.linkHandler('/careerbuilder/','e');
	var url22=s.linkHandler('/fortune/','e');
	var url23=s.linkHandler('/ewhome/','e');
	var url24=s.linkHandler('/ewpop/','e');
	var url25=s.linkHandler('/healthologycom/','e');
	var url26=s.linkHandler('/healthologynet/','e');
	var url27=s.linkHandler('/instyle/','e');
	var url28=s.linkHandler('/mayo/','e');
	var url29=s.linkHandler('/medpage/','e');
	var url30=s.linkHandler('/shc/','e');
	var url31=s.linkHandler('/cnnsi/','e');
	var url32=s.linkHandler('/sports/','e');
	var url33=s.linkHandler('/sportstonight/','e');
	var url34=s.linkHandler('/interactiveworld/','e');
	var url35=s.linkHandler('/cnet/','e');
	var url36=s.linkHandler('/cnnfn/','e');
	var url37=s.linkHandler('/people/','e');
	var url38=s.linkHandler('/newfrontier/','e');
	var url39=s.linkHandler('edition.cnn.com','e');
	var url40=s.linkHandler('money.cnn.com','e');
	var url41=s.linkHandler('sportsillustrated.cnn.com','e');
	var url42=s.linkHandler('topix.net','e');
	var url43=s.linkHandler('us.cnn.com/money/','e');
	var url44=s.linkHandler('edition.cnn.com/money/','e');
	var url45=s.linkHandler('www.cnn.com/money/','e');
	var url46=s.linkHandler('/arabic/','e');
	var url47=s.linkHandler('arabic.cnn.com/','e');
	
/* Set days since last visit */
s.prop13=s.getDaysSinceLastVisit();
s.eVar14 = s.prop13;
/* Set days since last visit on all pages if found */
s.prop13=s.getAndPersistValue(s.prop13,'s_dslv',0);	

/* Set visit num by month */
s.prop12=s.getVisitNum();
s.eVar13 = s.prop12;

/* Check for special branding */
if (typeof(cnnOmniBranding) != "undefined") {s.prop16=cnnOmniBranding;}

/* Check for query strings */
s.eVar9 = cnnQueryParam('iref');
s.prop14 = cnnQueryParam('pc');
s.eVar15 = s.prop14;
s.prop15 = cnnQueryParam('eref');
s.eVar16 = s.prop15;
s.eVar24 = cnnQueryParam('pks');
s.eVar24 = cnnQueryParam('cid');
if (s.pageName == "CNN Home Page") {
if (cnnQueryParam('refresh') == "1") {s.eVar9 = "AutoRefresh";}}
s.prop17 = s.eVar9;

/* Calculate time of day */
if (typeof(cnnCurrMin) != "undefined") {
var cnnOmniMint = '00';
if (cnnCurrMin>15&&cnnCurrMin<30) {
cnnOmniMint='15';
} if (cnnCurrMin>30&&cnnCurrMin<45) {
cnnOmniMint='30';
} if (cnnCurrMin>45&&cnnCurrMin<60) {
cnnOmniMint='45';
}}
if (typeof(cnnCurrHour) != "undefined") {
if (cnnCurrHour<10) {
var cnnOmniHour = '0' + cnnCurrHour;s.prop20=cnnOmniHour;} 
else {cnnOmniHour = cnnCurrHour;s.prop20=cnnOmniHour;}} 
if (typeof(cnnCurrHour) != "undefined"){var cnnOmniTime = cnnOmniHour + ":" + cnnOmniMint;}
if (typeof(cnnOmniTime) != "undefined") {
s.prop9=cnnOmniTime;
} else {
s.prop9="";}
if (typeof(cnnCurrDay) != "undefined") {s.prop10=cnnCurrDay;} else {s.prop10="";}

/* Check flash version */
if (typeof(CNN_FlashDetect) != "undefined") {
s.prop18 = parseInt(CNN_FlashDetect.prototype.getVersion());}

}
s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
 * Script to check duplicate sphere tracking clicks
 */
var cnnProdMore = 0;
function cnnImpressionCheck() {
if (cnnProdMore>0){} else
{
cnnProdMore = cnnProdMore + 1;
var s=s_gi(s_account);s.linkTrackVars='events,products';s.linkTrackEvents='event1';s.events='event1';s.products=';Sphere:From the blogs;;;event1=1;evar23='+ cnnSectionName;void(s.tl(this,'o','Sphere Blogs Impression'));}
}

/*
 * Script to check for products
 */

function ProductCheck(arr){
	var returnStr = '';
	var cnnProductEvent = '';
	for (var i = 0; i < arr.length; i++)
	{
			if (typeof(cnnSectionName) == "undefined")
			{
				returnStr += ";"+arr[i]+";;;event1=1;"
				cnnProductEvent = "event1";
				if(i != arr.length-1)
				{
				returnStr += ',';
				}
			} else 
			{
				returnStr += ";"+arr[i]+";;;event1=1;evar23="+cnnSectionName;
				cnnProductEvent = "event1";
				if(i != arr.length-1)
				{
				returnStr += ',';
				}
			}
	}
	s.products = returnStr;
	s.events = cnnProductEvent;
}

if (typeof(cnnProducts) != "undefined")
{
ProductCheck(cnnProducts);
} else {}

/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: CNN QueryParam 1.0  - return query string parameter(s)
 */
function cnnQueryParam(param) {
	var cnnQueryString = window.location.search.substring(1);
	var returnValue = '';
	var keyValPairs = cnnQueryString.split('&');
    if(!keyValPairs) { keyValPairs = new Array();  
    	keyValPairs[keyValPairs.length]=cnnQueryString}
    		for(var counter=0;counter<keyValPairs.length;counter++) {
				var keyVal = keyValPairs[counter].split('=');
					if(keyVal[0]==param) {
						returnValue = keyVal[1];
						break; 
					}
			}
    return returnValue;
}


/*
 * Plugin: linkHandler 0.5 - identify and report custom links
 */
s.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");
/*
 * Utility Function: p_gh
 */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");


/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Plugin: Days since last Visit 1.0.H
 */
s.getDaysSinceLastVisit=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),c='s_lastvisit',day=24*"
+"60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);if(!cval){s.c_w(c,"
+"ct,e);return 'First page view or cookies not supported';}else{var d"
+"=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);return 'More t"
+"han 30 days';}if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);return 'More "
+"than 7 days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return 'Less tha"
+"n 7 days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 day';}}els"
+"e return '';}"
);


/*                                                                  
 * Plugin: Visit Number By Month 2.0 - Return the user visit number 
 */
s.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}"
);

/*
 * Function - read combined cookies v 0.2
 */
s.c_rr=s.c_r;
s.c_r=new Function("k",""
+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+"urn v;");
/*
 * Function - write combined cookies v 0.2
 */
s.c_wr=s.c_w;
s.c_w=new Function("k","v","e",""
+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");


/* WARNING: Changing the visitor namespace will cause drastic changes
to how your visitor data is collected.  Changes should only be made
when instructed to do so by your account manager.*/
s.trackingServerSecure="smetrics.cnn.com"
s.visitorNamespace="cnn"
s.trackingServer="metrics.cnn.com"
s.dc=122

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_objectID;function s_c2fe(f){var x='',s=0,e,a,b,c;while(1){e=
f.indexOf('"',s);b=f.indexOf('\\',s);c=f.indexOf("\n",s);if(e<0||(b>=
0&&b<e))e=b;if(e<0||(c>=0&&c<e))e=c;if(e>=0){x+=(e>s?f.substring(s,e):
'')+(e==c?'\\n':'\\'+f.substring(e,e+1));s=e+1}else return x
+f.substring(s)}return f}function s_c2fa(f){var s=f.indexOf('(')+1,e=
f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')
a+='","';else if(("\n\r\t ").indexOf(c)<0)a+=c;s++}return a?'"'+a+'"':
a}function s_c2f(cc){cc=''+cc;var fc='var f=new Function(',s=
cc.indexOf(';',cc.indexOf('{')),e=cc.lastIndexOf('}'),o,a,d,q,c,f,h,x
fc+=s_c2fa(cc)+',"var s=new Object;';c=cc.substring(s+1,e);s=
c.indexOf('function');while(s>=0){d=1;q='';x=0;f=c.substring(s);a=
s_c2fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(
q){if(h==q&&!x)q='';if(h=='\\')x=x?0:1;else x=0}else{if(h=='"'||h=="'"
)q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)
+'new Function('+(a?a+',':'')+'"'+s_c2fe(c.substring(o+1,e))+'")'
+c.substring(e+1);s=c.indexOf('function')}fc+=s_c2fe(c)+';return s");'
eval(fc);return f}function s_gi(un,pg,ss){var c="function s_c(un,pg,s"
+"s){var s=this;s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s."
+"wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.w"
+"d.s_c_in++;s.m=function(m){return (''+m).indexOf('{')<0};s.fl=funct"
+"ion(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)r"
+"eturn o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.i"
+"ndexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for"
+"(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1"
+"))<0)return 0;return 1};s.rep=function(x,o,n){var i=x.indexOf(o);wh"
+"ile(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.index"
+"Of(o,i+n.length)}return x};s.ape=function(x){var s=this,h='01234567"
+"89ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x='"
+"'+x;if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.subs"
+"tring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=parseInt(n/16);l++}y+='%u'+e}else if(c="
+"='+')y+='%2B';else y+=escape(c)}x=y}else{x=x?s.rep(escape(''+x),'+'"
+",'%2B'):x;if(x&&c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i"
+"=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substri"
+"ng(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substri"
+"ng(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;"
+"return x?unescape(s.rep(''+x,'+',' ')):x};s.pt=function(x,d,f,a){va"
+"r s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.s"
+"ubstring(0,y);r=s.m(f)?s[f](t,a):f(t,a);if(r)return r;z+=y+d.length"
+";t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=funct"
+"ion(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.subst"
+"ring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=functi"
+"on(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')"
+"+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf"
+"',f);return s.fsg};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s."
+"num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.locat"
+"ion.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeri"
+"ods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');"
+"if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s"
+".pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function"
+"(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'="
+"'),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length"
+",e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var"
+" s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCa"
+"se():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60"
+");if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'"
+"){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSI"
+"ON'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');ret"
+"urn s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+"
+"e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<"
+"l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new"
+" Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f"
+"}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){va"
+"r s=this,r;if(s.apv>=5&&(!s.isopera||s.apv>=7))eval('try{r=s.m(f)?s"
+"[f](a):f(a)}catch(e){r=s.m(t)?s[t](e):t(e)}');else{if(s.ismac&&s.u."
+"indexOf('MSIE 4')>=0)r=s.m(b)?s[b](a):b(a);else{s.eh(s.wd,'onerror'"
+",0,o);r=s.m(f)?s[f](a):f(a);s.eh(s.wd,'onerror',1)}}return r};s.gtf"
+"set=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e',"
+"'var s=s_c_il['+s._in+'];s.eh(window,\"onerror\",1);s.etfs=1;var c="
+"s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a)"
+"{return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.locat"
+"ion;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;r"
+"eturn s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if("
+"!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s."
+"gtfsoe,'gtfsfb')}return s.tfs};s.mr=function(sess,q,ta){var s=this,"
+"dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,ns=s.visitorN"
+"amespace,unc=s.rep(s.fun,'_','-'),imn='s_i_'+s.fun,im,b,e,rs='http'"
+"+(s.ssl?'s':'')+'://'+(t1?(s.ssl&&t2?t2:t1):((ns?ns:(s.ssl?'102':un"
+"c))+'.'+(s.dc?s.dc:112)+'.2o7.net'))+'/b/ss/'+s.un+'/1/H.10-pdvu-2/"
+"'+sess+'?[AQB]&ndh=1'+(q?q:'')+(s.q?s.q:'')+'&[AQE]';if(s.isie&&!s."
+"ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(s.d.i"
+"mages&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){im="
+"s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.src=rs;if(rs.indexOf('&p"
+"e=')>=0&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))"
+"){b=e=new Date;while(e.getTime()-b.getTime()<500)e=new Date}return "
+"''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt="
+"\"\">'};s.gg=function(v){var s=this;return s.wd['s_'+v]};s.glf=func"
+"tion(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s"
+".gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',',"
+"'glf',0)};s.gv=function(v){var s=this;return s['vpm_'+v]?s['vpv_'+v"
+"]:(s[v]?s[v]:'')};s.havf=function(t,a){var s=this,b=t.substring(0,4"
+"),x=t.substring(4),n=parseInt(x),k='g_'+t,m='vpm_'+t,q=t,v=s.linkTr"
+"ackVars,e=s.linkTrackEvents;s[k]=s.gv(t);if(s.lnk||s.eo){v=v?v+','+"
+"s.vl_l:'';if(v&&!s.pt(v,',','isf',t))s[k]='';if(t=='events'&&e)s[k]"
+"=s.fs(s[k],e)}s[m]=0;if(t=='visitorID')q='vid';else if(t=='pageURL'"
+"){q='g';s[k]=s.fl(s[k],255)}else if(t=='referrer'){q='r';s[k]=s.fl("
+"s[k],255)}else if(t=='vmk')q='vmt';else if(t=='charSet'){q='ce';if("
+"s[k]&&s[k].toUpperCase()=='AUTO')s[k]='ISO8859-1';else if(s[k]&&s.e"
+"m==2)s[k]='UTF-8'}else if(t=='visitorNamespace')q='ns';else if(t=='"
+"cookieDomainPeriods')q='cdp';else if(t=='cookieLifetime')q='cl';els"
+"e if(t=='variableProvider')q='vvp';else if(t=='currencyCode')q='cc'"
+";else if(t=='channel')q='ch';else if(t=='transactionID')q='xact';el"
+"se if(t=='campaign')q='v0';else if(s.num(x)){if(b=='prop')q='c'+n;e"
+"lse if(b=='eVar')q='v'+n;else if(b=='hier'){q='h'+n;s[k]=s.fl(s[k],"
+"255)}}if(s[k]&&t!='linkName'&&t!='linkType')s.qav+='&'+q+'='+s.ape("
+"s[k]);return ''};s.hav=function(){var s=this;s.qav='';s.pt(s.vl_t,'"
+",','havf',0);return s.qav};s.lnf=function(t,h){t=t?t.toLowerCase():"
+"'';h=h?h.toLowerCase():'';var te=t.indexOf('=');if(t&&te>0&&h.index"
+"Of(t.substring(te+1))>=0)return t.substring(0,te);return ''};s.ln=f"
+"unction(h){var s=this,n=s.linkNames;if(n)return s.pt(n,',','lnf',h)"
+";return ''};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLow"
+"erCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&"
+"&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.lte"
+"f=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&"
+"&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft"
+"=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkIntern"
+"alFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s"
+".trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.tr"
+"ackExternalLinks&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif"
+"||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function("
+"'e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(th"
+"is);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Fun"
+"ction('e','var s=s_c_il['+s._in+'],f;if(s.d&&s.d.all&&s.d.all.cppXY"
+"ctnr)return;s.eo=e.srcElement?e.srcElement:e.target;eval(\"try{if(s"
+".eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catc"
+"h(f){}\");s.eo=0');s.ot=function(o){var a=o.type,b=o.tagName;return"
+" (a&&a.toUpperCase?a:b&&b.toUpperCase?b:o.href?'A':'').toUpperCase("
+")};s.oid=function(o){var s=this,t=s.ot(o),p=o.protocol,c=o.onclick,"
+"n='',x=0;if(!o.s_oid){if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.to"
+"LowerCase().indexOf('javascript')<0))n=o.href;else if(c){n=s.rep(s."
+"rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x="
+"2}else if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x=3}else if"
+"(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}re"
+"turn o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>"
+"=0?','+t.substring(0,e)+',':'';return u&&u.indexOf(','+un+',')>=0?s"
+".epa(t.substring(e+1)):''};s.rq=function(un){var s=this,c=un.indexO"
+"f(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);retu"
+"rn s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf("
+"'='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.su"
+"bstring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this"
+";s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r"
+"(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&',"
+"'sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)s.sqq[s.squ[x]]"
+"+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&s.sqq[x]&&(x==q||"
+"c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};"
+"s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,"
+"\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++"
+"){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\""
+"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh"
+"(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s"
+".apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b."
+"attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.a"
+"ddEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl"
+")}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamp"
+"lingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.ge"
+"tYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c"
+"_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=fun"
+"ction(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=func"
+"tion(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t."
+"substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return "
+"n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection"
+",l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un.toLowerCas"
+"e();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l="
+"l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un"
+"=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=fun"
+"ction(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+"
+"',').indexOf(un)<0)s.oun+=','+un;s.uns()};s.t=function(){var s=this"
+",trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*1"
+"0000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/108000"
+"00)%10+sed,yr=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y"
+"r<1900?yr+1900:yr)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.get"
+"Seconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tfs=s.gtfs(),t"
+"a='',q='',qs='';s.gl(s.vl_g);s.uns();if(!s.q){var tl=tfs.location,a"
+",o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',"
+"0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j=\"1.1"
+"\";if(j.match){j=\"1.2\";if(tm.setUTCDate){j=\"1.3\";if(s.isie&&s.i"
+"smac&&s.apv>=5)j=\"1.4\";if(pn.toPrecision){j=\"1.5\";a=new Array;i"
+"f(a.forEach){j=\"1.6\";i=0;o=new Object;eval(\"try{i=new Iterator(o"
+")}catch(e){}\");if(i&&i.next)j=\"1.7\"}}}}}if(s.apv>=4)x=screen.wid"
+"th+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaE"
+"nabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidt"
+"h;bh=s.wd.innerHeight;}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>="
+"4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw="
+"s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight"
+";if(!s.ismac&&s.b){eval(\"try{s.b.addBehavior('#default#homePage');"
+"hp=s.b.isHomePage(tl)?'Y':'N'}catch(e){}\");eval(\"try{s.b.addBehav"
+"ior('#default#clientCaps');ct=s.b.connectionType}catch(e){}\")}}}el"
+"se r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,"
+"100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.q=(x?'&s='+s.ape(x):'')+(c"
+"?'&c='+s.ape(c):'')+(j?'&j='+j:'')+(v?'&v='+v:'')+(k?'&k='+k:'')+(b"
+"w?'&bw='+bw:'')+(bh?'&bh='+bh:'')+(ct?'&ct='+s.ape(ct):'')+(hp?'&hp"
+"='+hp:'')+(p?'&p='+s.ape(p):'')}if(s.usePlugins)s.doPlugins(s);var "
+"l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l;i"
+"f(!s.referrer)s.referrer=r;if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if"
+"(!o)return '';var p=s.gv('pageName'),w=1,t=s.ot(o),n=s.oid(o),x=o.s"
+"_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parent"
+"Element?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s."
+"oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_g"
+"s(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return"
+" ''}ta=n?o.target:1;h=o.href?o.href:'';i=h.indexOf('?');h=s.linkLea"
+"veQueryString||i<0?h:h.substring(0,i);l=s.linkName?s.linkName:s.ln("
+"h);t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&"
+"pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?"
+"'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s."
+"gv('pageURL');w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n="
+"s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+("
+"w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot="
+"'+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';if(s.p_r)s.p_r()"
+";var code='';if(trk&&s.vs(sed))code=s.mr(sess,(vt?'&t='+s.ape(vt):'"
+"')+s.hav()+q+(qs?qs:s.rq(s.un)),ta);s.sq(trk?'':qs);s.lnk=s.eo=s.li"
+"nkName=s.linkType=s.wd.s_objectID=s.ppu='';if(s.pg)s.wd.s_lnk=s.wd."
+"s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.tl=function("
+"o,t,n){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t()};s."
+"ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d="
+"document;s.b=s.d.body;s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.ind"
+"exOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexO"
+"f('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)"
+"apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn"
+"=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>"
+"=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv"
+"=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else "
+"if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=par"
+"seFloat(v);s.em=0;if(String.fromCharCode){i=escape(String.fromCharC"
+"ode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa"
+"(un);s.vl_l='visitorID,vmk,ppu,charSet,visitorNamespace,cookieDomai"
+"nPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode,purc"
+"haseID';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,tr"
+"ansactionID,campaign,state,zip,events,products,linkName,linkType';f"
+"or(var n=1;n<51;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n;s.vl_g=s."
+"vl_t+',trackDownloadLinks,trackExternalLinks,trackInlineStats,linkL"
+"eaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInter"
+"nalFilters,linkNames';s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()}",
l=window.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf(
'MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(l)for(i=0;i<l.length;i++){
s=l[i];if(s.oun==un)return s;else if(s.fs(s.oun,un)){s.sa(un);return s
}}if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}
else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a
>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){eval(c);return new
s_c(un,pg,ss)}else s=s_c2f(c);return s(un,pg,ss)}function s_co(o){
var s=s_gi("^",1,1);return s.co(o)}function s_gs(un){var s=s_gi(un,1,1
);return s.t()}function s_dc(un){var s=s_gi(un,1);return s.t()}
