/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc:107194:/html/js/pages.js                                               */
/*      Machine:  10.16.139.102                                                               */
/*    Generated:  July 21st 2008 8:54:33 PM PDT                                               */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */


function fbpage_show_viewer_settings_dialog(fbpage_id,title){var dialog=new pop_dialog();var src='/ajax/pages/viewer_settings.php?id='+fbpage_id;var button=tx("pg01");dialog.show_form_ajax(title,src,button,true);return false;}
function fbpage_set_fan_status(elem,fbpage_id,action_is_add,reload){var handler=function(asyncResponse){_fbpage_show_change_status_feedback(elem,asyncResponse.getPayload());};var data={'fbpage_id':fbpage_id,'add':action_is_add,'reload':reload};new AsyncRequest().setURI('/ajax/pages/fan_status.php').setData(data).setHandler(handler).send();return false;}
function fbpage_set_favorite_status(elem,fbpage_id,action_is_add){var handler=function(){_fbpage_show_change_status_feedback(elem,this.getUserData());};var data={'fbpage_id':fbpage_id,'add':action_is_add};var async=new AsyncRequest().setMethod('POST').setURI('/ajax/pages/favorite_status.php').setData(data);new Dialog().setAsync(async).setCloseHandler(handler).show();return false;}
function _fbpage_show_change_status_feedback(elem,data){if(!data){return;}
if(data.reload){window.location.reload();}else if(data.feedback){var newElem=document.createElement('span');newElem.innerHTML=data.feedback;newElem.className='fan_status_inactive';elem.parentNode.replaceChild(newElem,elem);var handler=function(){if(data.can_repeat_action){newElem.parentNode.replaceChild(elem,newElem);}}
animation(newElem).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(handler).go();}}
function fbpage_verification_reason_dialog(){var dialog=new pop_dialog();dialog.show_message(tx('pg03'),tx('pg04'));return false;}
var fbpage_related_pages={slide_to_chunk:function(chunk_number){var related_pages_slider=$('related_pages_slider');var chunk_width=parseInt(related_pages_slider.parentNode.style.width,10);animation(related_pages_slider).to('marginLeft',-1*chunk_width*chunk_number).duration(600).ondone(fbpage_related_pages._set_chunk_indicator.bind(this,chunk_number)).go();related_pages_slider._current_chunk_number=chunk_number;},slide:function(delta){var chunk_number=fbpage_related_pages.get_current_chunk_number()+delta;chunk_number=Math.max(0,chunk_number);chunk_number=Math.min(chunk_number,fbpage_related_pages.get_chunk_count()-1);fbpage_related_pages.slide_to_chunk(chunk_number);},_set_chunk_indicator:function(chunk_number){var chunk_icon_spans=$('related_pages_chunk_indicator').childNodes;for(var i=0;i<chunk_icon_spans.length;++i){var on=i==chunk_number;chunk_icon_spans[i].className='related_pages_chunk_'+(on?'on':'off');}
var chunk_count=fbpage_related_pages.get_chunk_count();$('related_pages_scroll_left').style.visibility=(chunk_number==0)?'hidden':'visible';$('related_pages_scroll_right').style.visibility=(chunk_number==chunk_count-1)?'hidden':'visible';},get_current_chunk_number:function(){return $('related_pages_slider')._current_chunk_number||0;},get_chunk_count:function(){return $('related_pages_chunk_indicator').childNodes.length;}};
if(window.Bootloader){Bootloader.done(1);}