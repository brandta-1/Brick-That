
let pic = document.getElementById("image1");


const brick = new Image();
brick.src = 'brick.png';

//brick is 30x30 px

let c = document.createElement("canvas");
let img1 = new Image();

img1.src = pic.src;

const dim = (img,br) => [img.width/br.width , img.height/br.height];

$('.up-btn').on('click', async (event) => {

await fetch('/api/lego', {
    method: 'GET'
});


})

img1.onload = function () {
    pic.remove();
    w = img1.width;
    h = img1.height;

    c.width = w;
    c.height = h;
    ctx = c.getContext("2d");
    ctx.drawImage(img1, 0, 0);

    let pixelArr = ctx.getImageData(0, 0, w, h).data;
    let sample_size = 30;

    let backEndArray = [];

    for (let i = 0; i < h; i += sample_size) {
        for (let j = 0; j < w; j += sample_size) {
            let p = (j + (i * w)) * 4;
            
           
            ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
            ctx.fillRect(j, i, sample_size, sample_size);
        }
    }

    console.log(backEndArray);
    let img2 = new Image();
    img2.src = c.toDataURL("image/jpeg");
    document.body.appendChild(img2);
    document.body.appendChild(brick);

}




document.body.appendChild(brick);


