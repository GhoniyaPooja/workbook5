"use strict";
let imageFiles = [
    {
      id: "1",
      path: "https://placehold.co/300x300",
      description: "placeholder 1",
    },
    {
      id: "2",
      path: "https://placehold.co/300x300",
      description: "placeholder 2",
    },
    {
      id: "3",
      path: "https://placehold.co/300x300",
      description: "placeholder 3",
    },
    {
      id: "4",
      path: "https://placehold.co/300x300",
      description: "placeholder 4",
    },
    {
      id: "5",
      path: "https://placehold.co/300x300",
      description: "placeholder 5",
    },
    {
      id: "6",
      path: "https://placehold.co/300x300",
      description: "placeholder 6",
    },
    {
      id: "7",
      path: "https://placehold.co/300x300",
      description: "placeholder 7",
    },
    {
      id: "8",
      path: "https://placehold.co/300x300",
      description: "placeholder 8",
    },
    {
      id: "9",
      path: "https://placehold.co/300x300",
      description: "placeholder 9",
    },
    {
      id: "10",
      path: "https://placehold.co/300x300",
      description: "placeholder 10",
    },
  ];

window.onload = function () {
  // HTML element variables
let imageFileDropdown = document.querySelector("#imageFileDropdown");
let addImageButton = document.querySelector("#addImageButton");
let clearImagesButton = document.querySelector("#clearImagesButton");
let imageContainerDiv = document.querySelector("#imageContainerDiv");
  //functions dropdown
function loadImageFileDropdown() {
    for (const imageFile of imageFiles) {
        let option = document.createElement("option");
        option.value = imageFile.id;
        option.innerText = imageFile.description;
        imageFileDropdown.appendChild(option);
    }
}
//function add image
function addImage() {
    let id = imageFileDropdown.value;
    let imageFile = imageFiles.find((imageFile) => imageFile.id == id);
    let image = document.createElement("img");
    image.src = imageFile.path;
    image.alt = imageFile.description;
    imageContainerDiv.appendChild(image);
}
//function clear image
function clearImage() {
    imageContainerDiv.innerHTML = "";
}
  //event handling
addImageButton.onclik = addImage;
clearImagesButton.onclick = clearImage;
  //initial loading
  loadImageFileDropdown();

};