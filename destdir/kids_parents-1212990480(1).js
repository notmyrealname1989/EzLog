
YAHOO.Kids.Parents=function(){var val;var emailRegEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/;function trim(txt){return txt.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1");}
function isValidEmail(s){s=trim(s);if(s&&!emailRegEx.test(s)){return false;}
return true;}
return{isValidEmail:isValidEmail,init:function(){},toggleBar:function(){if(val==1){YAHOO.Kids.Parents.hideBar();}else{YAHOO.Kids.Parents.showBar();}},hideBar:function(){YAHOO.util.Dom.getElementsByClassName('choices')[0].style.display='none';YAHOO.util.Dom.getElementsByClassName('post')[0].style.backgroundPosition='-180px -360px';val=0;},showBar:function(){YAHOO.util.Dom.getElementsByClassName('choices')[0].style.display='block';YAHOO.util.Dom.getElementsByClassName('post')[0].style.backgroundPosition='-179px -399px';val=1;},validateEmails:function(to,from){var isOk=true;var emails=trim(YAHOO.util.Dom.get(to).value.replace(/;/g,","));if(emails===""){isOk=false;}else{emails=emails.split(",");for(var i=0;i<emails.length;i++){if(!isValidEmail(emails[i])){isOk=false;break;}}}
if(!isOk){YAHOO.util.Dom.get('err-to').innerHTML="There is a problem with one or more email addresses entered";}
else{YAHOO.util.Dom.get('err-to').innerHTML="";}
var frm=trim(YAHOO.util.Dom.get(from).value);if((frm==="")||!isValidEmail(frm)){YAHOO.util.Dom.get('err-from').innerHTML="There is a problem with the email address entered";isOk=false;}
else{YAHOO.util.Dom.get('err-from').innerHTML="";}
if(isOk===true){document.getElementById('email-frm').submit();}
return isOk;},validateComments:function(commentsBox){var isOk=true;var comments=YAHOO.util.Dom.get(commentsBox).value;if(!comments){if(YAHOO.util.Dom.get('blogpost-after-msg')){YAHOO.util.Dom.get('blogpost-after-msg').style.display='none';}
YAHOO.util.Dom.get('comment-error').innerHTML='Please enter comment to post';isOk=false;}
if(isOk===true){document.getElementById('post-cmt').submit();}
return isOk;}};}();YAHOO.util.Event.on('post','click',YAHOO.Kids.Parents.toggleBar);