'use strict'

const gElCanvas = document.querySelector('.canvas-picture')
const gCtx = gElCanvas.getContext('2d')

function onInit() {
    renderMeme()
}

function renderMeme() {
    var strHtml = ''
    var gallery = document.querySelector('.canvas picture') // all the pictures
    for (var i = 0; i < 18; i++) {
        strHtml += `<img src = "${gImgs[i].url}"`
    }
    imgs.forEach((imgs, idx) => {
        drawImg()
    });
    gallery.innerHTML = strHtml
}


function drawImg() {
    const elImg = document.querySelector('.picture')
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}