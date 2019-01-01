// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let tapButton = document.getElementById('tapButton');

let jquery = 'js/jquery3.3.1.min.js';
let myWork = 'js/steam_extend10.js';

tapButton.onclick = function(element) {
    
	chrome.tabs.executeScript(
        chrome.tabs[0],
        {file: jquery});
		
	chrome.tabs.executeScript(
        chrome.tabs[0],
        {file: myWork});
		
};

