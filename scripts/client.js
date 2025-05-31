const sock = io();

// const $u = Number(localStorage.$u);
const $u = Number(prompt('usermae'));

function sendMsg(msg) {
    var _msg = {};
    _msg.u = $u;
    _msg.i = hexaify(Number(localStorage.$i++));
    _msg.m = msg;
    sock.emit('chat general', _msg);
}

sock.on('chat general', (msg) => {
    reciMsg(msg);
});

function hexaify(n) {
    n = Number(n);
    return n.toString(16).padStart(4,'0');
}