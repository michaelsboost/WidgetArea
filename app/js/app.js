// Global Variables
var loader = $("[data-action=loadimage]"),
    holder = document.querySelector("[data-call=holder]"),
    imageLoaderSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDE1MDAgMTUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuOTMxMTIsMCwwLDMuMjk4MSw1NjAuNjIxLC0yNzAuMzU0KSI+CiAgICAgICAgPHJlY3QgeD0iLTE5MS4yNjUiIHk9IjgxLjk3MyIgd2lkdGg9IjUxMS43NDkiIGhlaWdodD0iNDU0LjgwOCIgc3R5bGU9ImZpbGw6cmdiKDIzOCwyMzgsMjM4KTsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUxOTksMCwwLDEuMjUxOTksLTE4OS40OTgsLTE4OC45OTQpIj4KICAgICAgICA8cGF0aCBkPSJNOTgyLjY2OSw5NjMuMjE5TDUyMS4zMzEsOTYzLjIxOUM0OTkuNjIzLDk2My4yMTkgNDgxLjk5OSw5NDUuNTk1IDQ4MS45OTksOTIzLjg4N0w0ODEuOTk5LDU3Ni4xMTNDNDgxLjk5OSw1NTQuNDA1IDQ5OS42MjMsNTM2Ljc4MSA1MjEuMzMxLDUzNi43ODFMOTgyLjY2OSw1MzYuNzgxQzEwMDQuMzgsNTM2Ljc4MSAxMDIyLDU1NC40MDUgMTAyMiw1NzYuMTEzTDEwMjIsOTIzLjg4N0MxMDIyLDk0NS41OTUgMTAwNC4zOCw5NjMuMjE5IDk4Mi42NjksOTYzLjIxOVpNOTY1LjIyNiw1NjUuNzE3TDUzOC43NzQsNTY1LjcxN0M1MjcuNjYxLDU2NS43MTggNTE4LjY0MSw1NzQuNzM5IDUxOC42NDEsNTg1Ljg1TDUxOC42NDEsOTE0LjE1QzUxOC42NDEsOTI1LjI2MiA1MjcuNjYyLDkzNC4yODMgNTM4Ljc3NCw5MzQuMjgzTDk2NS4yMjYsOTM0LjI4M0M5NzYuMzM4LDkzNC4yODMgOTg1LjM1OSw5MjUuMjYyIDk4NS4zNTksOTE0LjE1TDk4NS4zNTksNTg1Ljg1Qzk4NS4zNTksNTc0LjczOSA5NzYuMzM5LDU2NS43MTggOTY1LjIyNiw1NjUuNzE3Wk05NTAuMTQ0LDg5Mi4wNzdMNTU1LjU3Niw4OTIuMDc3TDU1NS41NzYsODM5LjA3OEw2NDcuMTU4LDc1MEw2OTIuMzQ3LDc5NC40NDhMODM0LjU4OSw2NTAuNzQ4TDk1MC4xNDQsNzY3LjMwMUw5NTAuMTQ0LDg5Mi4wNzdaTTYxMC4xMTcsNjA0Ljg5MUM2NDAuMjIsNjA0Ljg5MSA2NjQuNjU5LDYyOS4zMyA2NjQuNjU5LDY1OS40MzNDNjY0LjY1OSw2ODkuNTM1IDY0MC4yMiw3MTMuOTc0IDYxMC4xMTcsNzEzLjk3NEM1ODAuMDE1LDcxMy45NzQgNTU1LjU3Niw2ODkuNTM1IDU1NS41NzYsNjU5LjQzM0M1NTUuNTc2LDYyOS4zMyA1ODAuMDE1LDYwNC44OTEgNjEwLjExNyw2MDQuODkxWiIgc3R5bGU9ImZpbGw6cmdiKDE5MCwxOTAsMTkwKTsiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
    imageHoverSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDE1MDAgMTUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuOTMxMTIsMCwwLDMuMjk4MSw1NjAuNjIxLC0yNzAuMzU0KSI+CiAgICAgICAgPHJlY3QgeD0iLTE5MS4yNjUiIHk9IjgxLjk3MyIgd2lkdGg9IjUxMS43NDkiIGhlaWdodD0iNDU0LjgwOCIgc3R5bGU9ImZpbGw6cmdiKDIzOCwyMzgsMjM4KTsiLz4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik02NTAuNTEsOTcyLjk3Mkw1NTYuMjM5LDk3Mi45NzJDNDc2LjgwOSw5NjcuNTc2IDQxMy45Niw5MDEuMzUgNDEzLjk2LDgyMC41NjFDNDEzLjk2LDc1My4yNCA0NTcuNiw2OTYuMDMyIDUxOC4xMDksNjc1LjcwN0M1MzIuNzQ4LDYyNi4zMjUgNTc4LjQ5Niw1OTAuMjU4IDYzMi42MDIsNTkwLjI1OEM2NDQuNDA1LDU5MC4yNTggNjU1LjgxMSw1OTEuOTc1IDY2Ni41ODMsNTk1LjE3MkM3MDIuMTUzLDU1My40ODEgNzU1LjA2Nyw1MjcuMDI4IDgxNC4xMTIsNTI3LjAyOEM5MDcuMTE5LDUyNy4wMjggOTg0LjkxNyw1OTIuNjY1IDEwMDMuNjcsNjgwLjEwNUMxMDU0Ljk2LDcwNi43MTIgMTA5My4xNCw3NjguOTk1IDEwOTAuMDQsODIyLjAzNEMxMDgzLjM4LDkzNS44MDkgOTg4LjU1MSw5NzIuMzc1IDk0Ny44MzcsOTcyLjk3Mkw4NzcuOTY2LDk3Mi45NzJMODc3Ljk2Niw5MDYuOTAzTDk0Ni40NjksOTA2LjkwM0w5NDYuNDY5LDkwNi4zMDVDOTkxLjM1MSw5MDEuMTczIDEwMjYuMjQsODYzLjYyNiAxMDI2LjI0LDgxOC4xMzJDMTAyNi4yNCw3NzIuNjA0IDk5MS4yOTgsNzM1LjAzNCA5NDYuMzY4LDcyOS45NDhDOTQ2LjQzNSw3MjguMjI4IDk0Ni40NjksNzI2LjQ5OSA5NDYuNDY5LDcyNC43NjJDOTQ2LjQ2OSw2NTEuNzExIDg4Ni4xNDYsNTkyLjQwMyA4MTEuODQ1LDU5Mi40MDNDNzU1LjYzNCw1OTIuNDAzIDcwNy40MjMsNjI2LjM0NyA2ODcuMjgsNjc0LjUwNkM2NzUuNjIzLDY2My41OTQgNjU5Ljg1Miw2NTYuODkyIDY0Mi41MDEsNjU2Ljg5MkM2MDYuNjQ3LDY1Ni44OTIgNTc3LjUzOCw2ODUuNTExIDU3Ny41MzgsNzIwLjc2MkM1NzcuNTM4LDcyMy44MjQgNTc3Ljc1OCw3MjYuODM2IDU3OC4xODMsNzI5Ljc4NEM1NzUuMjcxLDcyOS41MDUgNTcyLjMxOSw3MjkuMzYyIDU2OS4zMzMsNzI5LjM2MkM1MTkuNTAxLDcyOS4zNjIgNDc5LjA0NCw3NjkuMTM4IDQ3OS4wNDQsODE4LjEzMkM0NzkuMDQ0LDg2My43NzggNTE0LjE2MSw5MDEuNDIzIDU1OS4yNTksOTA2LjM1NUw1NTkuMjU5LDkwNi45MDNMNjUwLjYwNSw5MDYuOTAzTDY1MC41MSw5NzIuOTcyWiIgc3R5bGU9ImZpbGw6cmdiKDE5MCwxOTAsMTkwKTsiLz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMDExMTUsMCwwLDEuMDEyMjksLTkuMjUwOCwtMTEuOTU0OSkiPgogICAgICAgIDxwYXRoIGQ9Ik04MjkuNjUyLDg0OS4zNTVMODg1LjQzOCw4NDguOTIxTDc2NS4wOTYsNzI5LjAxOEw2NDQuNjU5LDg0OS44NDRMNzAwLjQ5NCw4NDkuMzU1TDcwMC40OTQsOTcyLjk3Mkw4MjkuNjUyLDk3Mi45NzJMODI5LjY1Miw4NDkuMzU1WiIgc3R5bGU9ImZpbGw6cmdiKDE5MCwxOTAsMTkwKTsiLz4KICAgIDwvZz4KPC9zdmc+Cg==";

$(document).ready(function() {
  // Load library
  var gui = require("nw.gui");

  // Reference to window
  var win = gui.Window.get();
  
  // Set placeholder image as Base64;
  holder.src = imageLoaderSVG;

  // Trigger Load Image
  $("[data-trigger=load]").click(function() {
    $("[data-action=loadimage]").trigger("click");
  });

  // Load Image As Base64
  function displayPreview(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var imgUrl = e.target.result;
      holder.src = imgUrl;
    };
    
    reader.readAsDataURL(file);

    // Is the image a GIF animation?
    var img = file.type;
    img = img.toString();
    if (img === "image/gif") {
      // 1s Should Be Long Enough TO Display GIF Animations
      setTimeout(function() {
        newImage();
      }, 1000);
    } else {
      newImage();
    }
  }

  // Display New Image In A New Window
  function newImage() {
    // Create a new window and get it
    var new_win = gui.Window.open("about:blank;", {
      position: "center",
      width: holder.width,
      height: holder.height,
      toolbar: false,
      frame: false,
      focus: true,
      transparent: true
    });

    // Pin New Window
    new_win.setAlwaysOnTop(true);

    // And listen to new window's focus event
    new_win.on('loaded', function() {
      // Detect if Width is Larger Than Height for Responsive Resizing
      if (holder.width >= holder.height) {
        new_win.window.document.body.innerHTML = "<style>html,body,img{-webkit-user-select: none;-webkit-app-region: drag;}body{padding:0;margin:0;overflow:hidden;background:rgba(0,0,0,0);}</style><img src='"+ holder.src +"' width='100%'>";
      } else {
        new_win.window.document.body.innerHTML = "<style>html,body,img{-webkit-user-select: none;-webkit-app-region: drag;}body{padding:0;margin:0;overflow:hidden;background:rgba(0,0,0,0);}</style><img src='"+ holder.src +"' height='100%'>";
      }

      // Reset image after load
      holder.src = imageLoaderSVG;
    });
  }
  
  // Drag and drop image load
  holder.ondragover = function() {
    this.src = imageHoverSVG;
    return false;
  }
  holder.ondragend = function() {
    this.src = imageLoaderSVG;
    return false;
  }
  holder.ondrop = function(e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    displayPreview(file);
  }

  // Show zip loader when image has been loaded
  loader.on("change", function(evt) {
    var file = evt.target.files[0];
    displayPreview(file);
  });
});