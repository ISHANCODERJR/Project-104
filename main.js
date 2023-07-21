Webcam.set({
    height : 350,
    weight : 350,
    image_format : '.png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function snapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data_uri+'"/>';

});
}

console.log('ml5 version' , ml5.verson);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model/json' , modelLoaded);