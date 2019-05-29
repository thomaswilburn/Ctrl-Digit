browser.commands.onCommand.addListener(async function(cmd) {
  var [ _, index ] = cmd.match(/tab-(.)/);
  var tab;
  if (index == "9") {
    tab = (await browser.tabs.query({ currentWindow: true })).pop();
  } else {
    index -= 1;
    [ tab ] = await browser.tabs.query({ currentWindow: true, index });
  }
  await browser.tabs.update(tab.id, { active: true });
});