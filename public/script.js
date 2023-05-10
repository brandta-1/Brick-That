const input = document.getElementById("image_input")
let imagesArray = [];
let c = document.getElementById("canvas_id");

async function loadImages(arg) {
    let img1 = new Image();
    img1.src = arg;

    //function argument will be a URL, draws image given URL to the canvas
    img1.onload = function () {
        w = img1.width;
        h = img1.height;

        c.width = w;
        c.height = h;
        ctx = c.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img1, 0, 0);
    }
}

async function displayImages() {

    const brick = new Image();
    brick.src = 'brick.png';

    //promised based way of just saying brick onload
    await brick.decode();

    //brick is 30x30 px

    let img1 = new Image();

    img1.src = URL.createObjectURL(input.files[0]);

    //TODO implement lazy nearest neighbor or do a difficult proper algo with edge detection

    img1.onload = function () {
        w = img1.width;
        h = img1.height;

        c.width = w;
        c.height = h;
        ctx = c.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img1, 0, 0);

        let pixelArr;
        pixelArr = ctx.getImageData(0, 0, w, h).data;

        let br = 30;

        for (let i = 0; i < w; i += br) {
            for (let j = 0; j < h; j += br) {

                let p = (i + (j * w)) * 4;

                ctx.drawImage(brick, 0, 0, br, br, i, j, br, br)

                const currRGBA = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + ", .75)"
                ctx.fillStyle = currRGBA;
                ctx.fillRect(i, j, br, br);
            }
        }
    }
    $('.save-btn').attr('disabled', false)
}

$('.save-btn').on('click', async (event) => {

    const theCanvas = document.getElementById("canvas_id")

    // 2048*2048 resolution limit
    if (theCanvas.width * theCanvas.height <= Math.pow(2048, 2)) {

        const lego_url = theCanvas.toDataURL()

        await fetch('/api/lego', {
            method: 'POST',
            body: JSON.stringify({ lego_url }),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        $('.save-btn').attr('disabled', true)
    } else {
        alert("Images can only be saved if they are 2048x2048 or smaller")
    }
})

$('.get-btn').on('click', async () => {

    let response = await fetch('/api/lego/saved')
    let data = await response.json();
    console.log(data);
    loadImages(data)
})

if (input) {
    input.addEventListener("change", displayImages)
}
