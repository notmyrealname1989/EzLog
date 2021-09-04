<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" id="facebook">
<head>
<title>Facebook | Adopt Me!</title>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<script type="text/javascript">(function(href) { function split2(s, delim) { var i = s.indexOf(delim); return i == -1 ? [s, ''] : [s.substring(0, i), s.substring(i + 1)]; } function q_explode(q) { var arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=(.*)/; if (!q) { return {}; } var ii, result = {}; q = q.split('&'); for (ii = 0, l = q.length; ii < l; ii++) { var match = q[ii].match(arrayQueryExpression); if (!match) { var term = q[ii].split('='); result[decodeURIComponent(term[0])] = decodeURIComponent(term[1] || ''); } else { var indices = match[2].split(/\]\[|\[|\]/).slice(0, -1); var name = match[1]; var value = decodeURIComponent(match[3] || ''); indices[0] = name; var resultNode = result; for (var i = 0; i < indices.length-1; i++) { if (indices[i]) { if (resultNode[indices[i]] === undefined) { if (indices[i+1] && !indices[i+1].match(/\d+$/)) { resultNode[indices[i]] = {}; } else { resultNode[indices[i]] = []; } } resultNode = resultNode[indices[i]]; } else { if (indices[i+1] && !indices[i+1].match(/\d+$/)) { resultNode.push({}); } else { resultNode.push([]); } resultNode = resultNode[resultNode.length-1]; } } if (resultNode instanceof Array && indices[indices.length-1] == '') { resultNode.push(value); } else { resultNode[indices[indices.length-1]] = value; } } } return result; } function q_implode(obj, name ) { name = name || ''; var r = []; if (obj instanceof Array) { for (var ii = 0; ii < obj.length; ++ii) { try { if (obj[ii] !== undefined) { r.push(q_implode(obj[ii], name ? (name + '[' + ii + ']') : ii)); } } catch (ignored) { } } } else if (typeof(obj) == 'object') { for (var k in obj) { try { r.push(q_implode(obj[k], name ? (name + '[' + k + ']') : k)); } catch (ignored) { } } } else if (name && name.length) { r.push(q_encode(name) + '=' + q_encode(obj)); } else { r.push(q_encode(obj)); } return r.join('&'); } function q_encode(raw) { var parts = String(raw).split(/([\[\]])/); for (var i = 0, l = parts.length; i < l; i += 2) { parts[i] = window.encodeURIComponent(parts[i]); } return parts.join(''); } var href_parts = split2(href, '#'), frag = href_parts[1]; if (frag) { if (frag.charAt(0) == '/') { var new_uri = frag; } else if (frag.indexOf('=') != -1) { var u = split2(href_parts[0], '?'), path = u[0], query = q_explode(u[1]), frag_parts = split2(frag, '#'), frag_query = q_explode(frag_parts[0]), frag_frag = frag_parts[1]; for (var k in frag_query) { query[k] = frag_query[k]; } var query_s = q_implode(query), new_uri = path + (query_s ? ('?' + query_s) : '') + (frag_frag ? ('#' + frag_frag) : ''); } else { return; } if (new_uri != href_parts[0]) { window.location = new_uri; } } })(window.location.href);Env={method:"GET",dev:0,start:(new Date()).getTime(),ps_limit:5,ps_ratio:4,svn_rev:111557,pkgv:60,static_base:"http:\/\/static.ak.fbcdn.net\/"}; window.onloadRegister = window.onloadRegister || function(h) { window.onloadhooks.push(h); }; window.onloadhooks = window.onloadhooks || []; window.onafterloadRegister = window.onafterloadRegister || function(h) { window.onafterloadhooks.push(h); }; window.onafterloadhooks = window.onafterloadhooks || []; window.wait_for_load = window.wait_for_load || function (element, e, f) { f = bind(element, f, e); if (window.loading_begun) { return f(); } switch ((e || event).type) { case 'load': onloadRegister(f); return; case 'click': if (element.original_cursor === undefined) { element.original_cursor = element.style.cursor; } if (document.body.original_cursor === undefined) { document.body.original_cursor = document.body.style.cursor; } element.style.cursor = document.body.style.cursor = 'progress'; onafterloadRegister(function() { element.style.cursor = element.original_cursor; document.body.style.cursor = document.body.original_cursor; element.original_cursor = document.body.original_cursor = undefined; if (element.tagName.toLowerCase() == 'a') { var original_event = window.event; window.event = e; var ret_value = element.onclick.call(element, e); window.event = original_event; if (ret_value !== false && element.href) { window.location.href = element.href; } } else if (element.click) { element.click(); } }); break; } return false; }; function bind(obj, method ) { var args = []; for (var ii = 2; ii < arguments.length; ii++) { args.push(arguments[ii]); } return function() { var _obj = obj || (this == window ? false : this); var _args = args.slice(); for (var jj = 0; jj < arguments.length; jj++) { _args.push(arguments[jj]); } if (typeof(method) == "string") { if (_obj[method]) { return _obj[method].apply(_obj, _args); } } else { return method.apply(_obj, _args); } } };</script>
<meta id="robots" name="robots" content="noodp,noydir" />
<meta id="description" name="description" content="Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, share links and videos, and learn more about the people they meet." />  <script type="text/javascript" src="http://static.ak.fbcdn.net/js_strings.php/t84493/en_US"></script>

    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/104778/css/dialogpro.css" />
    <link type="text/css" rel="stylesheet" href="http://apps.facebook.com/fbml_static_get.php?src=http%3A%2F%2Fns200071.ovh.net%2Fadoptaman%2Fpage.css%3Fv%3D3.08&appid=15015611585&pv=1&sig=174394d5372f3ea97761c13db0dde1b9&filetype=css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/106839/css/canvas.css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/pkg/60/108892/css/pages.css.pkg.php" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/91004/css/send_email.css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/88061/css/api/interaction_form.css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/pkg/60/111255/css/common.css.pkg.php" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/108104/css/ubersearch.css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/102900/css/typeaheadpro.css" />
    <link type="text/css" rel="stylesheet" href="http://static.ak.fbcdn.net/rsrc.php/104065/css/status.css" />

    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/pkg/60/109886/js/common.js.pkg.php"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/102585/js/lib/event/link_controller.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/108234/js/attachments.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/105529/js/fbml.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/102180/js/lib/ui/typeaheadpro/typeahead_source.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/108938/js/lib/ui/typeaheadpro/search_typeaheadpro.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/102180/js/lib/ui/typeaheadpro/sources/static_source.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/103311/js/lib/ui/typeaheadpro/sources/search_friend_source.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/103413/js/lib/net/livemessage.js"></script>
    <script type="text/javascript" src="http://static.ak.fbcdn.net/rsrc.php/103337/js/report.js"></script>
<!--[if lte IE 6]><style type="text/css" media="screen">/* <![CDATA[ */ @import url(http://static.ak.fbcdn.net/css/ie6.css?0:107577); /* ]]> */</style><![endif]-->
<!--[if gte IE 7]><style type="text/css" media="screen">/* <![CDATA[ */ @import url(http://static.ak.fbcdn.net/css/ie7.css?0:111255); /* ]]> */</style><![endif]-->
<link rel="search" type="application/opensearchdescription+xml" href="http://static.ak.fbcdn.net/opensearch_desc.xml?0:72379" title="Facebook" />
<link rel="shortcut icon" href="http://static.ak.fbcdn.net/favicon.ico" />
</head>
<body class="fbframe chat_body">
<iframe id="channel_iframe"></iframe><object id="so_sound_player" class="so_sound_player" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1"><param name="allowscriptaccess" value ="always"/><param name="movie" value ="/swf/SoundPlayer.swf"/></object><div id="sound_player_holder"></div><div id="presence" class="full"><div id="presence_preload"><div class="preload_img alert_bw"></div><div class="preload_img alert"></div><div class="preload_img indicator"></div><div class="preload_img blank"></div><img src="http://static.ak.fbcdn.net/images/indicator.gif?0:19905" alt=""  class="preload_img" /></div><div id="presence_ui" class="clearfix"><div id="presence_bar"><div class="presence_section show_popped_in"><div id="chat_next_tab" class="presence_bar_button" onmouseover="add_css_class_name(this, 'hover')" onmouseout="remove_css_class_name(this, 'hover')" onclick="chatTabSlider.next();" style="display:none;"><span id="next_count"></span><div class="slider_num_missed" id="next_num_missed" style="display:none;"></div></div></div><div id="chat" class="show_popped_in"><div id="chat_tab_bar"></div></div><div class="presence_section show_popped_in"><div id="chat_previous_tab" class="presence_bar_button" onmouseover="add_css_class_name(this, 'hover')" onmouseout="remove_css_class_name(this, 'hover')" onclick="chatTabSlider.prev();" style="display:none;"><span id="prev_count"></span><div class="slider_num_missed" id="prev_num_missed" style="display:none;"></div></div></div><div id="presence_bar_buttons"><div class="presence_section show_popped_in"><div id="buddy_list_tab" class="presence_bar_button buddy_list" onmouseover="presence.tabHandleMouseOver(this)" onmouseout="presence.tabHandleMouseOut(this)" onclick="buddyList.toggleTab();return false;"><span id="buddy_count">Online Friends <span class="buddy_count_num">(<strong>0</strong>)</span></span></div><div id="buddy_list" class="presence_menu_opts_wrapper" onmouseover="presence.tabContentMouseOver(this)" onmouseout="presence.tabContentMouseOut(this)" style="display:none;"><div class="presence_menu_opts"><div class="presence_menu_opts_header"><div class="corner"></div></div><h2 onclick="buddyList.closeTab()"><span>Online Friends</span></h2><div id="buddy_list_typeahead"><input type="text" class="inputtext" autocomplete="off" placeholder="Search Online Friends" id="buddy_list_typeahead_input" name="buddy_list_typeahead_input" value="" /></div><div class="presence_menu_content_wrapper"><div id="buddy_list_content"></div></div><div id="buddy_list_error" class="buddy_error"></div></div></div></div><div class="presence_section"><div id="presence_notifications_tab" class="presence_bar_button presence_notifications" onmouseover="presence.tabHandleMouseOver(this)" onmouseout="presence.tabHandleMouseOut(this)" onclick="presence.toggleTab('presence_notifications', 'presence_notifications_tab', 'presence_notifications_content');presenceNotifications.markRead();return true;"><span id="presence_notifications_count"><strong>4</strong></span><div class="titletip"><strong>Notifications</strong></div></div><div id="presence_notifications" class="presence_menu_opts_wrapper" onmouseover="presence.tabContentMouseOver(this)" onmouseout="presence.tabContentMouseOut(this)" style="display:none"><div class="presence_menu_opts"><div class="presence_menu_opts_header"><div class="corner"></div></div><h2 onclick="presence.closeTab()" class="clearfix"><span>Notifications</span></h2><div class="presence_menu_content_wrapper"><a href="http://www.facebook.com/notifications.php" class="presence_notifications_see_all">See All</a><div id="presence_notifications_content"><div id="presence_no_notifications" style="display:none" class="no_notifications">No new notifications.</div><div class="notification notif_unread clearfix notif_2425101550" onmouseover="CSS.addClass(this, 'hover');" onmouseout="CSS.removeClass(this, 'hover');"><div class="icon"><img src="http://photos-g.ak.facebook.com/photos-ak-sctm/v43/214/2425101550/app_2_2425101550_2298.gif" alt="" /></div><div class="notif_del" onclick="return presenceNotifications.showHideDialog(this, 2425101550)"></div><div class="body"><a href="http://www.facebook.com/profile.php?id=533253664" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=2425101550&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true;">David Cooper</a> 
						has added you as a Top Friend. Your popularity is going up!
							<a href="http://apps.facebook.com/topeight?mystuff=1&amp;ref=notification&amp;se=lOlU6gMa9QxV139NoXqoA4VWKr0c8GBQGokoYqKK7OrQi8ymjZP4LsUgQpLeRMbdzNd8LDqLgBxLqcSdKuw2Br3pn2rhVCQLA2-taFZD6oOqGG8RefqUZbpVqMOfxQY6-NLLZZdoQl1rG2V6BsZr1q-NGUmShOB7" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=2425101550&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true">Click here to see just how popular you are now :)</a>
						
					 <span class="time">on Thursday</span></div></div><div class="notification notif_unread clearfix notif_15015611585" onmouseover="CSS.addClass(this, 'hover');" onmouseout="CSS.removeClass(this, 'hover');"><div class="icon"><img src="http://photos-b.ak.facebook.com/photos-ak-sctm/v43/65/15015611585/app_2_15015611585_7183.gif" alt="" /></div><div class="notif_del" onclick="return presenceNotifications.showHideDialog(this, 15015611585)"></div><div class="body"><a href="http://www.facebook.com/profile.php?id=533253664" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=15015611585&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true;">David Cooper</a> David just sent you an action on Adopt Me! <a href="http://apps.facebook.com/adoptman/events.aspx?uid=533253664&amp;m=2" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=15015611585&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true">Click here to discover this action and accept or refuse it.</a> <span class="time">last Tuesday</span></div></div><div class="notification notif_unread clearfix notif_15015611585" onmouseover="CSS.addClass(this, 'hover');" onmouseout="CSS.removeClass(this, 'hover');"><div class="icon"><img src="http://photos-b.ak.facebook.com/photos-ak-sctm/v43/65/15015611585/app_2_15015611585_7183.gif" alt="" /></div><div class="notif_del" onclick="return presenceNotifications.showHideDialog(this, 15015611585)"></div><div class="body"><a href="http://www.facebook.com/profile.php?id=533253664" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=15015611585&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true;">David Cooper</a> David just sent you an action on Adopt Me! <a href="http://apps.facebook.com/adoptman/events.aspx?uid=533253664&amp;m=2" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=15015611585&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true">Click here to discover this action and accept or refuse it.</a> <span class="time">about a week ago</span></div></div><div class="notification notif_unread clearfix notif_15015611585" onmouseover="CSS.addClass(this, 'hover');" onmouseout="CSS.removeClass(this, 'hover');"><div class="icon"><img src="http://photos-b.ak.facebook.com/photos-ak-sctm/v43/65/15015611585/app_2_15015611585_7183.gif" alt="" /></div><div class="notif_del" onclick="return presenceNotifications.showHideDialog(this, 15015611585)"></div><div class="body"><a href="http://www.facebook.com/profile.php?id=533253664" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=15015611585&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true;">David Cooper</a> David just adopted you on Adopt Me! <a href="http://apps.facebook.com/adoptman/home.aspx?action=show&amp;uid=533253664&amp;m=2" onclick="(new Image()).src = &#039;/ajax/ct.php?app_id=15015611585&amp;action_type=3&amp;post_form_id=f8e0bcbdf5dfc695429fbdf8e04bdfba&amp;position=7&amp;&#039; + Math.random();return true">Click here to check out your new owner!</a> <span class="time">about a week ago</span></div></div></div></div></div></div></div><div class="presence_section show_popped_in"><div id="chat_status_control_tab" class="presence_bar_button chat_status_control available" onmouseover="presence.tabHandleMouseOver(this)" onmouseout="presence.tabHandleMouseOut(this)" onclick="presence.toggleTab('chat_status_control',
                                         'chat_status_control_tab');return false;"><img class="show_available" src="http://static.ak.fbcdn.net/images/im_online.gif?0:63264" /><img class="show_unavailable" src="http://static.ak.fbcdn.net/images/im_offline.gif?0:63263" /><img class="show_idle" src="http://static.ak.fbcdn.net/images/im_away.gif?0:63264" /><div class="titletip rightmost"><strong>Chat</strong></div></div><div id="chat_status_control" class="presence_menu_opts_wrapper" onmouseover="presence.tabContentMouseOver(this)" onmouseout="presence.tabContentMouseOut(this)" style="display:none "><div class="presence_menu_opts"><div class="presence_menu_opts_header"><div class="corner"></div></div><h2 onclick="presence.closeTab()" class="availability_header"><span>Chat</span></h2><div class="presence_menu_header"><div style="text-align:right"><a onclick="presence.popout();return false;">Pop Out Chat</a><span class="pipe">|</span><a onclick="CSS.toggleClass($(&#039;chat_settings&#039;), &#039;hidden&#039;);return false;">Settings</a><span class="pipe">|</span><a href="http://www.facebook.com/help.php?topic=chat">Help</a></div><div id="chat_settings" class="hidden"><div id="chat_setting_minifeed" class="chat_setting clearfix"><div class="input_box"><span class="show_loading"><img src="http://static.ak.fbcdn.net/images/indicator.gif?0:19905" alt="" /></span><span class="hide_loading"><input type="checkbox" class="inputcheckbox" checked="checked" onclick="statusControl.sendSettingChange(&#039;minifeed&#039;, this.checked);return false;" id="chat_setting_checkbox_minifeed" name="" value="1" /></span></div><label for="chat_setting_checkbox_minifeed">Show Mini-Feed Stories in Chat</label></div><div id="chat_setting_sound" class="chat_setting clearfix"><div class="input_box"><span class="show_loading"><img src="http://static.ak.fbcdn.net/images/indicator.gif?0:19905" alt="" /></span><span class="hide_loading"><input type="checkbox" class="inputcheckbox" checked="checked" onclick="statusControl.sendSettingChange(&#039;sound&#039;, this.checked);return false;" id="chat_setting_checkbox_sound" name="" value="1" /></span></div><label for="chat_setting_checkbox_sound">Play Sound for New Messages</label></div><div id="chat_setting_sticky_buddylist" class="chat_setting clearfix"><div class="input_box"><span class="show_loading"><img src="http://static.ak.fbcdn.net/images/indicator.gif?0:19905" alt="" /></span><span class="hide_loading"><input type="checkbox" class="inputcheckbox" onclick="statusControl.sendSettingChange(&#039;sticky_buddylist&#039;, this.checked);return false;" id="chat_setting_checkbox_sticky_buddylist" name="" value="1" /></span></div><label for="chat_setting_checkbox_sticky_buddylist">Keep Online Friends Open</label></div><div id="chat_setting_compact_buddylist" class="chat_setting clearfix"><div class="input_box"><span class="show_loading"><img src="http://static.ak.fbcdn.net/images/indicator.gif?0:19905" alt="" /></span><span class="hide_loading"><input type="checkbox" class="inputcheckbox" onclick="statusControl.sendSettingChange(&#039;compact_buddylist&#039;, this.checked);return false;" id="chat_setting_checkbox_compact_buddylist" name="" value="1" /></span></div><label for="chat_setting_checkbox_compact_buddylist">Show Only Names in Online Friends</label></div></div></div><div id="chat_availability_toggle" class="available"><span id="chat_availability_toggle_image"><span class="show_loading"><img src="http://static.ak.fbcdn.net/images/indicator.gif?0:19905" alt="" /></span><span class="show_available hide_loading"><img src="http://static.ak.fbcdn.net/images/im_online.gif?0:63264" alt="" /></span><span class="show_unavailable hide_loading"><img src="http://static.ak.fbcdn.net/images/im_offline.gif?0:63263" alt="" /></span><span class="show_idle hide_loading"><img src="http://static.ak.fbcdn.net/images/im_away.gif?0:63264" alt="" /></span></span><div class="show_available"><div class="availability_text">You are Online. <a href="#" onclick="statusControl.sendVisibility(false);return false;">Go Offline</a></div></div><div class="show_unavailable"><div class="availability_text">You are Offline. <a href="#" onclick="statusControl.sendVisibility(true);return false;">Go Online</a></div></div></div><div class="status_updates"><div class="profile_status clearfix"><a href="/profile.php?id=588141158"><img src="http://static.ak.fbcdn.net/pics/q_silhouette.gif" alt="" /></a><div id="chat_status_body"><a id="chat_status_content" href="#" onclick="editStatus('chat_');return false;"><span id="chat_su_placeholder">What are you doing right now?</span><span id="chat_su_name" style="display:none">Beth </span> <span id="chat_su_text"></span></a><span id="chat_status_meta"><span id="chat_su_time"></span></span></div></div><input type="hidden" id="post_form_id" name="post_form_id" value="f8e0bcbdf5dfc695429fbdf8e04bdfba" /><div id="chat_status_editor" style="display:none;"><div style="padding-bottom:2px;color:#666">Beth...</div><div class="clearfix"><input class="inputtext" type="text" id="chat_edit_status_text" name="chat_edit_status_text" value="" maxlength="160" statusprefix="is " onfocus="status_editor.onfocus(this);" onkeypress="return statusTextKeyPress(event);" onblur="return editStatusBlur();" /><a id="chat_edit_status_toggle" href="#" onmousedown="toggleEditStatusSelect();return false;" onclick="return false;">&nbsp;</a></div>
<div id="chat_edit_status_select" style="display:none;"><a href="#" onmousedown="statusSelect(this);return false;">is at home</a><a href="#" onmousedown="statusSelect(this);return false;">is at work</a><a href="#" onmousedown="statusSelect(this);return false;">is with the family</a><a href="#" onmousedown="statusSelect(this);return false;">is at a party</a><a href="#" onmousedown="statusSelect(this);return false;">is sleeping</a></div><div style="text-align:right;padding-right:3px;"><small><a href="#" onmousedown="clearStatus();return false;">clear status</a>&nbsp;<span style="color:gray;">|</span>&nbsp;<a href="#" onmousedown="hideEditStatus();return false">cancel</a></small></div></div>
</div></div></div></div><div class="show_popped_out presence_section" id="presence_popout_tab"><div class="presence_bar_button presence_popout_button" onmouseover="add_css_class_name(this, &#039;hover&#039;)" onmouseout="remove_css_class_name(this, &#039;hover&#039;)" onclick="presence.popout()"><div class="titletip"><strong>Pop In Chat</strong></div></div></div></div></div></div><div id="presence_error_bar" onmouseover="CSS.addClass($('presence_error_bar'), 'hover')" onmouseout="CSS.removeClass($('presence_error_bar'), 'hover')"><div class="shutdown_alert"><div class="shutdown_alert_img"></div><span id="presence_error_alert_reason"></span></div><div class="shutdown"><div class="shutdown_img"></div><div class="titletip rightmost"><strong id="presence_error_reason"></strong></div></div></div></div><input type="hidden" id="post_form_id" name="post_form_id" value="f8e0bcbdf5dfc695429fbdf8e04bdfba" /><!--1183210252.168844905--><div id="book">
<div id="header_dev"></div><div id="sidebar"><a href="http://www.facebook.com/home.php?ref=logo" class="go_home" style="background-image:url(http://static.ak.fbcdn.net/images/facebook_logo.gif?0:67387)"> </a><div id="sidebar_content"><div id="qsearch" class="clearfix hourglass"><div class="clearfix"><h3 class="qsearch_header"><a href="http://www.facebook.com/s.php?ref=search" id="global_search_link" onclick="if (search_validate(&#039;q&#039;)) {
                                  $(&#039;qsearchform&#039;).submit();
                                  return false;
                                }
 ">Search</a></h3></div><form method="get" action="http://www.facebook.com/s.php?ref=search" name="qsearch" id="qsearchform" onsubmit="return search_validate('q');"><div id="qsearch_alternate" class="clearfix"><div id="qsearch_field" class="clearfix"><div id="qsearch_wrapper" class="clearfix"><input autosave="" class="inputtext typeahead_placeholder" id="q" name="q" results="0" tabindex="1" type="text" value="" maxlength="100" size="25" autocomplete="off" onfocus="var typeahead_source_instance1=new search_friend_source(&#039;588141158-1216702260-1&amp;u=588141158&#039;);typeahead_source_instance1.text_nomatch;typeahead_source_instance1.search_limit=5;new search_typeaheadpro(this, typeahead_source_instance1,{onselect:search_typeahead_onsubmit,onsubmit:search_typeahead_onsubmit,max_results:5});" /></div></div><div id="qsearch_submit" class="clearfix"><a onclick="search_validate(&#039;q&#039;) &amp;&amp; $(&#039;qsearchform&#039;).submit(); return false;" class="qsearch_button" title="Search"><span class="qsearch_glass">&nbsp;</span></a></div></div><input type="hidden" id="init" name="init" value="q" /></form>
</div><div class="app_list clearfix"><div class="clearfix"><h3 class="app_list_header"><a href="http://www.facebook.com/editapps.php">Applications</a></h3><a href="http://www.facebook.com/editapps.php" class="edit_apps">edit</a></div><div id = "app_list"><div class="list_item"><div class="container" id="2305272732"><a href="http://www.facebook.com/photos/?ref=sb" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2305272732&#039;);"><div class="container_icon"><img class="sprite sx_icons sx_photo" src="http://static.ak.fbcdn.net/images/sprite_face.png?0:90382" /></div><div class="container_link">Photos</div></a></div></div><div class="list_item"><div class="container" id="2361831622"><a href="http://www.facebook.com/groups.php?ref=sb" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2361831622&#039;);"><div class="container_icon"><img class="sprite sx_icons sx_group" src="http://static.ak.fbcdn.net/images/sprite_face.png?0:90382" /></div><div class="container_link">Groups</div></a></div></div><div class="list_item"><div class="container" id="2344061033"><a href="http://www.facebook.com/events.php?ref=sb" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2344061033&#039;);"><div class="container_icon"><img class="sprite sx_icons sx_event" src="http://static.ak.fbcdn.net/images/sprite_face.png?0:90382" /></div><div class="container_link">Events</div></a></div></div><div class="list_item"><div class="container" id="2328908412"><a href="http://www.facebook.com/marketplace/?ref=sb" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2328908412&#039;);"><div class="container_icon"><img class="sprite sx_icons sx_marketplace" src="http://static.ak.fbcdn.net/images/sprite_face.png?0:90382" /></div><div class="container_link">Marketplace</div></a></div></div><div class="list_item"><div class="container" id="2357179312"><a href="http://apps.facebook.com/superpokey/sp_main?pa=535&amp;pv=270&amp;cv=347" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2357179312&#039;);"><div class="container_icon"><img src="http://photos-a.ak.facebook.com/photos-ak-sctm/v43/40/2357179312/app_2_2357179312_2638.gif" alt="" /></div><div class="container_link">SuperPoke!</div></a></div></div><div class="list_item"><div class="container" id="2425101550"><a href="http://apps.facebook.com/topeight/?home=1&amp;ref=sidenav" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2425101550&#039;);"><div class="container_icon"><img src="http://photos-g.ak.facebook.com/photos-ak-sctm/v43/214/2425101550/app_2_2425101550_2298.gif" alt="" /></div><div class="container_link">Top Friends</div></a></div></div><div class="list_item"><div class="container" id="2601240224"><a href="http://apps.facebook.com/superwall/sideNav.php" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2601240224&#039;);"><div class="container_icon"><img src="http://photos-a.ak.facebook.com/photos-ak-sctm/v43/212/2601240224/app_2_2601240224_8511.gif" alt="" /></div><div class="container_link">Super Wall</div></a></div></div></div></div><div id = "expandable_more" class="app_list" style="display:none"><div class="divider_bar">&nbsp;</div><div id="app_non_nav_list"><div class="list_item"><div class="container" id="15015611585"><a href="http://apps.facebook.com/adoptman/main.aspx?m=0" class="link_title  highlight_link&quot;" onmousedown="new track_moveable(this.parentNode, this, &#039;15015611585&#039;);"><div class="container_icon"><img src="http://photos-b.ak.facebook.com/photos-ak-sctm/v43/65/15015611585/app_2_15015611585_7183.gif" alt="" /></div><div class="container_link">Adopt Me!</div></a></div></div><div class="list_item"><div class="container" id="6921127772"><a href="http://apps.facebook.com/youreahottie/market/profile/?utm_source=facebook&amp;utm_medium=sidenav&amp;utm_campaign=market" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;6921127772&#039;);"><div class="container_icon"><img src="http://photos-e.ak.facebook.com/photos-ak-sctm/v43/188/6921127772/app_2_6921127772_3737.gif" alt="" /></div><div class="container_link">You&#039;re a Hottie</div></a></div></div><div class="list_item"><div class="container" id="26047640544"><a href="http://apps.facebook.com/brainscanner/" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;26047640544&#039;);"><div class="container_icon"><img src="http://photos-544.ll.facebook.com/photos-ll-sctm/v43/240/26047640544/app_2_26047640544_4369.gif" alt="" /></div><div class="container_link">Brain Scanner</div></a></div></div><div class="list_item"><div class="container" id="4188419540"><a href="http://apps.facebook.com/unrated/sideNav.php" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;4188419540&#039;);"><div class="container_icon"><img src="http://photos-e.ak.facebook.com/photos-ak-sctm/v43/116/4188419540/app_2_4188419540_9544.gif" alt="" /></div><div class="container_link">Likeness UNRATED</div></a></div></div><div class="list_item"><div class="container" id="2405948328"><a href="http://apps.facebook.com/likeness/sideNav.php" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2405948328&#039;);"><div class="container_icon"><img src="http://photos-a.ak.facebook.com/photos-ak-sctm/v43/0/2405948328/app_2_2405948328_5147.gif" alt="" /></div><div class="container_link">Likeness</div></a></div></div><div class="list_item"><div class="container" id="2558160538"><a href="http://apps.facebook.com/flixster/home?lsrc=lnav" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2558160538&#039;);"><div class="container_icon"><img src="http://photos-538.ll.facebook.com/photos-ll-sctm/v43/178/2558160538/app_2_2558160538_3048.gif" alt="" /></div><div class="container_link">Movies</div></a></div></div><div class="list_item"><div class="container" id="2309869772"><a href="http://www.facebook.com/posted.php?ref=sb" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2309869772&#039;);"><div class="container_icon"><img class="sprite sx_icons sx_post" src="http://static.ak.fbcdn.net/images/sprite_face.png?0:90382" /></div><div class="container_link">Posted Items</div></a></div></div><div class="list_item"><div class="container" id="2347471856"><a href="http://www.facebook.com/notes.php?ref=sb" class="link_title " onmousedown="new track_moveable(this.parentNode, this, &#039;2347471856&#039;);"><div class="container_icon"><img class="sprite sx_icons sx_note" src="http://static.ak.fbcdn.net/images/sprite_face.png?0:90382" /></div><div class="container_link">Notes</div></a></div></div></div></div><div class="more_section highlight_more_link" id="more_section"><a href="#" id="more_link" class="expand_link more_apps">more</a></div></div><div id="sidebar_ads"><div id="ssponsor" class="sponsors sponsor_absolute"><a href="http://www.facebook.com/ac.php?i=6002213665834&amp;meta=AAAAAQAQXXr7ttpFNVs5inTDONs_XgAAAeVL6fqo3TFpjPrKNMmTt_g0MWqmjasQEQYzYQJE1RWg7dOhriUnkH4eaDqGJ6YKWQTorZi9q7itY9awTnjvkCGotLbKJTVCp-Lo--QG77cUHhv2f1j9tEeQYPjtiDGnOG4iGAe0MY6wT-G76zTb230lF92XTWJtl8vY0IYZRwtZ6gsCU0vwCwvsSsUfQaQ8rHIo0UwHnjNKPo-83zX-YlKC392T7ck68GRjJmR5ejEJjxQff-zKs3FCD0a3iVb3rcwvRv1VTXicnVT2-OqMk6GQmYPDfRwHGq_uWo5C5pWEQv2b_GCletUUtjKoA-Y3cNj86os4tmlMK9rpEqlO-R3VvOdXqz1TX92nxl5tgM162y69CTfdnnCc68igFIqHkpmP6dW2hjS5H7i7niemg5RYEf-I_2oYqtXQq_3pBbxYqFmWVMcYST_AZUw6APgVwm8lDiOZejoor_F7copdNhBg6G0kEkegf4mbWmGdrJBoq0hBHyrJjsQSHk3HWU-iJGWfjiiV2BYaCnTu0OfvfhklJ7zjc4-37Bd3ilo5mrJpUV85IZKJObQihw9FJDKlzJsgZb8Z8bX773oQsRSzH71evdghBYNcez0xlGvVZZEZMrBS2DtojExch-vD5g19iyaPgDBLL3ysFA%2C%2C" class="ad_story" target="_blank"><div class="social_ad_advert"><h2>Hollywood magic</h2><div class="social_ad_image"><img src="http://ads.ak.facebook.com/ads2/flyers/51/14/6002213646834_1_8375dcbc.jpg" alt="" /></div><div class="social_ad_advert_text">Party planners that bring the magic of hollywood to your next event.</div></div></a><div class="below_social_ad clearfix"><div class="sponsored_links"><a href="http://www.facebook.com/ads/adboard/">More Ads</a><span class="pipe">|</span><a href="http://www.facebook.com/ads/?src=advf2">Advertise</a></div></div><!-- ami 6002213665834 --></div></div></div><div id="widebar" class="clearfix"><div id="navigator"><ul class="main_set" id="nav_unused_1"><li class="main_set_first"><a href="http://www.facebook.com/profile.php?id=588141158" class="profile_nav_link">Profile</a><a href="http://www.facebook.com/editprofile.php" class="edit_link">edit</a></li><li><div class="with_arrow"><a href="http://www.facebook.com/friends/" id="global_friends_link">Friends</a><a href="#" class="global_menu_arrow" onclick="return optional_drop_down_menu(this, ge('global_friends_link'), ge('global_friends_menu'), event);"><img src="http://static.ak.fbcdn.net/images/global_menu_space.gif?0:37897" align="top" /></a></div><div id="global_friends_menu" class="navigator_menu friends" style="display: none"><ul><li><a href="http://www.facebook.com/friends/?status">Status Updates</a></li><li class="menu_divider">&nbsp;</li><li><a href="http://www.facebook.com/friends/?recent">Recently Updated</a></li><li><a href="http://www.facebook.com/friends/?added">Recently Added</a></li><li><a href="http://www.facebook.com/friends/?all">All Friends</a></li><li class="menu_divider">&nbsp;</li><li><a href="http://www.facebook.com/invite.php?ref=tn">Invite Friends</a></li><li><a href="http://www.facebook.com/findfriends.php?ref=friends">Find Friends</a></li></ul></div></li><li><div class="with_arrow"><a href="http://www.facebook.com/inbox/" id="nav_inbox">Inbox (1)</a><a href="#" class="global_menu_arrow" onclick="return optional_drop_down_menu(this, ge('nav_inbox'), ge('global_inbox_menu'), event);"><img src="http://static.ak.fbcdn.net/images/global_menu_space.gif?0:37897" align="top" /></a></div><div id="global_inbox_menu" class="navigator_menu inbox" style="display: none"><ul><li><a href="http://www.facebook.com/inbox/">Message Inbox</a></li><li><a href="http://www.facebook.com/inbox/?f=1">Sent Messages</a></li><li><a href="http://www.facebook.com/notifications.php">Notifications</a></li><li><a href="http://www.facebook.com/inbox/updates.php">Updates</a></li><li class="menu_divider">&nbsp;</li><li><a href="http://www.facebook.com/inbox/?compose">Compose Message</a></li></ul></div></li></ul><ul class="secondary_set" id="nav_unused_2"><li><a href="http://www.facebook.com/home.php?ref=home">home</a></li><li><a href="http://www.facebook.com/editaccount.php">account</a></li><li><a href="http://www.facebook.com/privacy/">privacy</a></li><li><a href="http://www.facebook.com/logout.php?h=5dc171eb1faf032785e3cd96db4c96e9&amp;nojs" onclick="dynamic_post(&quot;http://www.facebook.com/logout.php?js&quot;, {confirm:1}); return false;">logout</a></li></ul></div><div id="page_body" class="pagebody fbframe"><div id="content_shadow"><div id="content" class="clearfix">
<div id="app_content_15015611585" class="app_content_15015611585 canvas_rel_positioning"><div>







<form action="default.aspx?action=update" method="post"><input type="hidden" name="fb_sig_time" value="1216702365.7755" /><input type="hidden" name="fb_sig_added" value="1" /><input type="hidden" name="fb_sig_user" value="588141158" /><input type="hidden" name="fb_sig_profile_update_time" value="0" /><input type="hidden" name="fb_sig_session_key" value="139b633c620c498a097567bc-588141158" /><input type="hidden" name="fb_sig_expires" value="0" /><input type="hidden" name="fb_sig_api_key" value="9e3fc4a0e37294d562c65dff6274c429" /><input type="hidden" name="fb_sig" value="a9f59e65206604a3fcea0be29b783e63" />

<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        
        <td width="100%" height="349">
            
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    
                    <td width="100%" height="349" style="padding: 0pt; background: transparent url(&quot;http://ns200071.ovh.net/AdoptAMan/Images/Home/bandelogohome.jpg&quot;) no-repeat scroll 0% 0%; text-align: left; vertical-align: top;">
                        
                        <div class="wheregirlshome">
                            <span style="color: #ff9002;">Adopt</span> and keep up your <span style="color: #ff9002;">Affinities!</span>
                        </div>
                    </td>
                </tr>
                
            </table>
            
        </td>
    </tr>
    <tr>
        
        <td width="100%" height="100%">
            
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center;">
                <tr>
                    
                    <td width="100%" height="21" class="tilegris">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    <img src="http://ns200071.ovh.net/AdoptAMan/Images/Home/puce-1.gif" />
                                </td>
                                <td class="homegrostexte" width="100%">
                                    Adopt your friends or the hottest people on Facebook
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr>
                <tr>
                    
                    <td width="100%" height="22" class="tilegris">
                        &nbsp;
                        
                    </td>
                </tr>
                
                <tr>
                    <td width="100%" height="21" class="tilegris">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    <img src="http://ns200071.ovh.net/AdoptAMan/Images/Home/puce-2.gif" />
                                </td>
                                <td class="homegrostexte" width="100%">
                                    Interact together and keep up your affinities!
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr>
                <tr>
                    
                    <td width="100%" height="22" class="tilegris">
                        &nbsp;
                        
                    </td>
                </tr>
                
                <tr>
                    <td width="100%" height="21" class="tilegris">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    <img src="http://ns200071.ovh.net/AdoptAMan/Images/Home/puce-3.gif" />
                                </td>
                                <td class="homegrostexte" width="100%">
                                    Start Now!
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                </tr>
                
                <tr>
                    <td width="100%" height="22" class="tilegris">
                        &nbsp;
                        
                    </td>
                </tr>
                
                <tr>
                    <td class="tilegris" style="padding: 0pt;">
                        
                        <table border="0" cellpadding="0" cellspacing="0" class="casehome" width="80%">
                            <tr>
                                <td>
                                    <div style="margin: 4px 12px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td>
                                                    
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="homegrostexte" style="width: 50%; padding-right: 14px; text-align: right;">
                                                                You are:
                                                            </td>
                                                            <td>
                                                                <select id="app15015611585_youare" name="youare" fbcontext="dae368a317ef">
                                                                    <option value="2">A Man</option>
                                                                    <option value="1">A Woman</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br />
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="homegrostexte" style="padding: 0pt 14px 0pt 44px; width: 50%; text-align: right;">
                                                                You are interested in:
                                                            </td>
                                                            <td>
<input type="checkbox" name="man" id="app15015611585_man" style="width: 10px;" fbcontext="dae368a317ef" /> 
                                                            </td>
                                                            <td class="homegrostexte" style="padding: 0pt 24px 0pt 14px;">
                                                                Men
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                            </td>
                                                            <td>
<input type="checkbox" name="woman" id="app15015611585_woman" style="width: 10px;" fbcontext="dae368a317ef" /> 
                                                            </td>
                                                            <td class="homegrostexte" style="padding: 0pt 24px 0pt 14px;">
                                                                Women
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br />
                                                    <input id="app15015611585_1771876600" type="hidden" name="fb_submit_helper_app15015611585_1771876600" value="" /><a href="#" onclick="ge(&quot;app15015611585_1771876600&quot;).form.submit(); return false;"><img src="http://ns200071.ovh.net/AdoptAMAn/Images/Home/bouton-letsadopt.gif" /></a>
                                                    
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    
                    <td width="100%" height="62" class="tilegris" style="text-align: center;">
                    </td>
                </tr>
                
                <tr>
                    <td width="100%" height="9" style="background: transparent url(&quot;http://ns200071.ovh.net/AdoptAMan/Images/Home/bandedubasorange.gif&quot;) repeat-x scroll 0% 0%; text-align: left;">
                        &nbsp;
                    </td>
                </tr>
                
            </table>
            
        </td>
    </tr>
    
</table>
</form>

</div></div></div></div></div><div id="pagefooter" class="clearfix"><div class="copyright_and_location clearfix"><div class="copyright"><div class="brand" style="background-image: url(http://photos-b.ak.facebook.com/photos-ak-sctm/v43/65/15015611585/app_2_15015611585_7183.gif)">Page built by <a href="http://www.facebook.com/apps/application.php?id=15015611585">Adopt Me!</a><span class="footer_report_link">&nbsp;(<a onclick="bind(this,report_content_dialog,&quot;http:\/\/apps.facebook.com\/ajax\/report.php?type=17&amp;cid=15015611585&amp;h=c7c2181bf5&quot;)(); return false;">report</a>)</span></div></div></div><div class="f_links"><ul class="footer_links" id="nav_unused_3"><li><a href="http://www.facebook.com/about.php">About</a></li><li><a href="http://www.facebook.com/findfriends.php">Find Friends</a></li><li><a href="http://www.facebook.com/ads/">Advertising</a></li><li><a href="http://developers.facebook.com">Developers</a></li><li><a href="http://www.facebook.com/terms.php">Terms</a></li><li><a href="http://www.facebook.com/policy.php">Privacy</a></li><li><a href="http://www.facebook.com/help.php">Help</a></li></ul></div></div></div><div id="footer_ads"></div></div><div id="js_buffer">
<script type="text/javascript">

Bootloader.markResourcesAsLoaded(["js\/common.js.pkg.php","js\/lib\/event\/link_controller.js","js\/attachments.js","js\/fbml.js","js\/lib\/ui\/typeaheadpro\/typeahead_source.js","js\/lib\/ui\/typeaheadpro\/search_typeaheadpro.js","js\/lib\/ui\/typeaheadpro\/sources\/static_source.js","js\/lib\/ui\/typeaheadpro\/sources\/search_friend_source.js","js\/lib\/net\/livemessage.js","js\/report.js"]);

onloadRegister(function() {FBML.Contexts["dae368a317ef"] = "O:16:\"CanvasFBMLFlavor\":1:{s:9:\"_fbml_env\";a:8:{s:4:\"user\";i:588141158;s:6:\"app_id\";s:11:\"15015611585\";s:10:\"fb_page_id\";i:0;s:10:\"canvas_url\";s:46:\"http:\/\/apps.facebook.com\/adoptman\/default.aspx\";s:10:\"source_url\";s:46:\"http:\/\/ns200071.ovh.net\/AdoptAMan\/default.aspx\";s:9:\"loggedout\";b:0;s:7:\"non-tos\";b:0;s:11:\"flavor_code\";i:3;}}";
FBML._mockAjaxProxyUrl = "http:\/\/apps.facebook.com\/fbml\/mock_ajax_proxy.php"});
onloadRegister(function() {try { if (!ua.ie()){so_sound_player = new SWFObject("/swf/SoundPlayer.swf", "so_sound_player", "1", "1", "5.0.0", "#ffffff");
so_sound_player.addParam("allowscriptaccess", "always");
so_sound_player.addParam("wmode", "transparent");
so_sound_player.addVariable("string_table", "http://static.ak.fbcdn.net/js_strings.php/t84493/en_US");
so_sound_player.addVariable("swf_id", "so_sound_player");
so_sound_player.fallback_html = " ";
so_sound_player.write("sound_player_holder");}if (deconcept.SWFObjectUtil.getPlayerVersion().major == 0) { hide("chat_setting_sound"); hide("sound_player_holder") } } catch (swfex) { }});
onloadRegister(function() {placeholderSetup("buddy_list_typeahead_input");});
onloadRegister(function() {window.edit_status_visible = window.status_blur = false;});
onloadRegister(function() {window.presenceCookieManager = new fbCookieManager(2);});
onloadRegister(function() {window.channelManager = new fbChannelManager("588141158");});
onloadRegister(function() {window.presence = new fbPresence("588141158", "Beth Rosenberg", "Beth", 1216702365000, 0, {"UPDATE_GRANULARITY":20,"BUDDY_BASE_TIME":40,"BUDDY_MAX_TIME":900,"BUDDY_COST_NEVER_SENT_MESSAGE":900,"BUDDY_COST_NO_LIST_CHANGE":30,"BUDDY_COST_NO_CHAT_TABS":30,"BUDDY_COST_CHAT_ACTIVITY":180,"BUDDY_COST_VIEW_ACTIVITY":180,"BUDDY_COST_PAGE_ACTIVITY":180,"BUDDY_MAX_ACTIVITY_MINS":180,"BUDDY_MAX_AVAIL_COOKIE":20,"BUDDY_VIEW_FETCH_WINDOW":120,"NOTIFICATIONS_PIGGYBACK_PERCENTAGE":25}, "http:\/\/www.facebook.com\/presence\/popout.php", "http:\/\/www.facebook.com\/login.php", {});});
onloadRegister(function() {window.presenceUpdater = new fbPresenceUpdater();});
onloadRegister(function() {window.presenceNotifications = new fbNotifications(4, 4, 1216702365000, {"2425101550":"Top Friends","15015611585":"Adopt Me!"}, 1216306517, 0);});
onloadRegister(function() {Emote.initImageURL("http:\/\/static.ak.fbcdn.net\/images\/emote\/emote.gif?0:93872");});
onloadRegister(function() {window.statusControl = new fbStatusControl(1);});
onloadRegister(function() {window.buddyList = new fbBuddyList();});
onloadRegister(function() {buddyList.initNoRender(0, {}, 1216702260000, 0);});
onloadRegister(function() {window.chatDisplay = new fbChatDisplay({"588141158":{"name":"Beth Rosenberg","firstName":"Beth","thumbSrc":"http:\/\/static.ak.fbcdn.net\/pics\/q_silhouette.gif","status":null,"statusTime":0,"statusTimeRel":""}}, {}, 0, "http:\/\/www.facebook.com\/profile.php", "http:\/\/www.facebook.com\/inbox\/?compose", {"sound":1,"typ_send":true,"typ_show":true});});
onloadRegister(function() {window.chatTabSlider = new fbChatTabSlider();});
onloadRegister(function() {chatDisplay.load();chatTabSlider.load();});
onloadRegister(function() {channelManager.addChannel("p_588141158", 0, bind(presence, "handleMsg"),bind(presence, "start"),bind(presence, "connectionShutdown"),bind(presence, "restart"));setTimeout(function() {presence.doSync();}, 100);});
onloadRegister(function() {channelManager.iframeLoad("\/iframe\/9?r=static.ak.fbcdn.net\/rsrc.php\/pkg\/60\/109886\/js\/common.js.pkg.php", "channel14", 80, 1);});
onloadRegister(function() {window.SEARCH_TYPEAHEAD_ONCLICK = "";});
onloadRegister(function() {window.search_friend_source.url_templates = {"u":{"default_url":"http:\/\/www.facebook.com\/profile.php?id=%d","photo":"http:\/\/www.facebook.com\/photo_search.php?id=%d"},"g":{"default_url":"http:\/\/www.facebook.com\/group.php?gid=%d","icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/group.gif?0:39263"},"e":{"default_url":"http:\/\/www.facebook.com\/event.php?eid=%d","icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/event.gif?0:39263"},"p":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/fbpage.gif?0:72158"},"search":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/search.gif?0:97819","default_url":"http:\/\/apps.facebook.com\/s.php?init=q&q=%s"}};});
onloadRegister(function() {window.ADVANCED_SEARCH_TYPEAHEAD = false;});
onloadRegister(function() {onload_side_nav_check()});
onloadRegister(function() {window.loading_initial_content_div = true;});
onloadRegister(function() {LiveMessageDispatcher.MSG_TYPE = "app_msg"});
onloadRegister(function() {window.livemessage_dispatcher = new LiveMessageDispatcher();});
onloadRegister(function() {window.loading_initial_content_div = false;});
onloadRegister(function() {var n = "rtime"; (window.ge && ge(n)) && (ge(n).title += " | 1278");});

</script></div></body>
</html>
