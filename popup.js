// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */

$( document ).ready(function() {
    $("#start-btn").click(function () {
        var rows = $("#row-num").val();
        var columns = $("#column-num").val();
        var row_number = Math.floor(Math.random() * parseInt(rows));
        var column_number = Math.floor(Math.random() * parseInt(columns));
        $("#result").text("The result is: row " + row_number + " and column " + column_number);
    });
});

