// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'steamcommunity.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


let jquery = 'js/jquery3.3.1.min.js';
let myWork = 'js/steam_extend10.js';

chrome.commands.onCommand.addListener(function(command) {

	if("cmd_update" === command){
		
		chrome.tabs.executeScript(
			chrome.tabs[0],
			{file: jquery});		
		chrome.tabs.executeScript(
			chrome.tabs[0],
        {file: myWork});		
	}
});