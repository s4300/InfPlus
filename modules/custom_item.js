var fakeData = JSON.parse(localStorage.getItem("infinite-craft-data"));
var newItemName = prompt("Item Name");
var newItemEmoji = prompt("Item Emoji");
if (newItemName && newItemEmoji) {
    fakeData["elements"].append({"text": newItemName,"emoji": newItemEmoji,"discovered": false});
};
localStorage.setItem("infinite-craft-data", fakeData);
history.go(0);
