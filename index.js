const chat = document.getElementById('chat');
const head_online_count = document.getElementById('head-online-count');
const head_online_label = document.getElementById('head-online-label');
const input = document.getElementById('input');

// const $u = localStorage.getItem('$u');
var userCache = JSON.parse(localStorage.getItem('userCache'));

document.addEventListener('keydown', (e) => {
    input.focus();
    if(e.key == 'Enter') {
        sendMsg(input.value);
        input.value = null;
    }
})

function reciMsg(msg) {
    const li_msg = document.createElement('li');
    li_msg.id = `msg_${hexaify(msg.u)}_${hexaify(msg.i)}`;
    const younot = msg.u == $u ? 'you' : 'not';
    li_msg.className = 'msg body ' + younot;
    li_msg.textContent = msg.m;
    chat.appendChild(li_msg);
    if(li_msg.previousElementSibling.id.substring(4,8) != hexaify(msg.u)) {
        const li_head = document.createElement('li');
        li_head.className = 'msg head ' + younot;
        li_head.id = `hed_${hexaify(msg.u)}_${hexaify(msg.i)}`;
        li_head.textContent = userCache[String(msg.u)];
        chat.insertBefore(li_head,li_msg);
    } 
}

document.querySelectorAll('.emoji-table td').forEach((elem) => {
    elem.addEventListener('click', () => {
        input.value += elem.textContent + ' ';
        input.focus();
        const len = input.value.length;
        input.setSelectionRange(len,len);
    });
});