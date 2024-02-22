function LoadExternalJS(src) {
  fetch(src)
    .then((response) => response.text())
    .then((text) => {
      eval(text);
    });
};

const InfPlusLoaded = true;
if (InfPlusLoaded) {
  // start
  var ModuleEle = document.createElement("select");
  var InfPlusIdle = true;
  document.getElementsByClassName("sidebar-inner")[0].prepend(ModuleEle);
  ModuleEle.outerHTML = `
  <h1 style="text-align:center;">InfPlus</h1>
  <select id="moduleEnabler" style="width:100%;" onchange="InfPlusModuleChanger()">
      <option value="select">Select a module</option>
      <option value="custom_item">Custom Item</option>
  </select>`;
  function InfPlusModuleChanger() {
    var ModuleEnabler = document.getElementById("moduleEnabler");
    console.log(ModuleEnabler.value);
    if (InfPlusIdle == true) {
      InfPlusIdle = false;
      if (ModuleEnabler.value != "select") {
        LoadExternalJS(`https://raw.githubusercontent.com/s4300/InfPlus/main/modules/${ModuleEnabler.value}.js`);
      };
      ModuleEnabler.value = "select";
      InfPlusIdle = true;
    };
  };
};
