let dragablesItems = document.querySelectorAll(".draggable");
let currentItem;
const moveItem = (x, y, elt) => {
  elt.style.left = `${x - elt.offsetWidth / 2}px`;
  elt.style.top = `${y - elt.offsetHeight / 2}px`;
  return null;
};

//Event function

const handleMove = (e) => {
  console.log(e.target);
  moveItem(e.pageX, e.pageY, currentItem);
};

//Manual Drag & Drop

dragablesItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    return false;
  });
  item.addEventListener("mousedown", () => {
    currentItem = item;
    document.addEventListener("mousemove", handleMove);
  });

  item.addEventListener("mouseup", () => {
    currentItem = null;
    document.removeEventListener("mousemove", handleMove);
    item.removeEventListener("mouseup", handleMove);
  });
});
