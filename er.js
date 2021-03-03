var s = window.screen;
var width = q.width = window.innerWidth;
var height = q.height = window.innerHeight;
var letters = Array(256).join(1).split('');
// var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%^&*()*&^%";

var draw = function () {
    q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
    q.getContext('2d').fillRect(0, 0, width, height);
    q.getContext('2d').fillStyle = '#0F0';
    letters.map(function (y_pos, index) {
        text = Math.floor(Math.random() * 10);
        text = matrix[Math.floor(Math.random() * matrix.length)];
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        q.getContext('2d').font = "12px 'Monaco'";
        letters[index] = (y_pos > 0 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw, 30);
