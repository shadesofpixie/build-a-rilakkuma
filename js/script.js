let draggableContainer = document.querySelector(".side-panel");
let dragablesItems = document.querySelectorAll(".draggable");
let currentItem;
const moveItem = (x, y, elt) => {
  elt.style.left = `${x - elt.offsetWidth / 2}px`;
  elt.style.top = `${y - elt.offsetHeight / 2}px`;
  return null;
};

//Event function

const handleMove = (e) => {
  moveItem(e.pageX, e.pageY, currentItem);
};

const handleMouseOver = (e) => {
  if (currentItem) {
    currentItem.style.position = "static";
    draggableContainer.removeEventListener("mouseover", handleMouseOver, true);
  }
};

//Manual Drag & Drop

dragablesItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    return false;
  });
  item.addEventListener("mousedown", () => {
    currentItem = item;
    item.style.position = "absolute";
    document.addEventListener("mousemove", handleMove);
  });

  item.addEventListener("mouseup", () => {
    draggableContainer.addEventListener("mouseover", handleMouseOver, true);
    currentItem = null;
    document.removeEventListener("mousemove", handleMove);
    item.removeEventListener("mouseup", handleMove);
  });
});
