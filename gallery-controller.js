'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    var strHtml = ''
    const imgEl = document.querySelector('.gallery')
    for (var i = 0; i < 18; i++) {
strHtml += `<img src="${gImgs[i].url}" onclick="onImgSelect('${gImgs[i].url}', '${gImgs[i].id}')">`;    }
    imgEl.innerHTML = strHtml
}


function onImgSelect(imgUrl, picId) {
    var galleryEl = document.querySelector('.gallery')
    galleryEl.style.display = 'none'
    const canvasEl = document.querySelector('.container-canvas')
    canvasEl.classList.remove('hidden')
    setImage(imgUrl)
    setPicId(picId)
}