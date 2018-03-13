document.addEventListener("DOMContentLoaded", function() {
  // Load library
  var gui = require("nw.gui");

  // Reference to window
  var win = gui.Window.get();

  // Create menu container
  var Menu = new gui.Menu({
    type: "menubar"
  });

  //initialize default mac menu
  Menu.createMacBuiltin("WidgetArea");

  // Get the root menu from the default mac menu
  var rootMenu = Menu.items[0].submenu;

  // Remove About Node-Webkit
  rootMenu.removeAt(0);

  // Append Menu to Window
  gui.Window.get().menu = Menu;
});