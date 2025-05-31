function init() {
    if(!localStorage.getItem('$u')) localStorage.setItem('$u',Number(prompt('skib id')));
            if(!localStorage.getItem('$i')) localStorage.setItem('$i','0');
            if(!localStorage.getItem('userCache')) localStorage.setItem('userCache',JSON.stringify({
                '0': '#0000',
                '1': '#0001',
                '2': '#0002',
                '3': '#0003',
                '4': '#0004',
                '5': '#0005',
                '6': '#0006',
                '7': '#0007',
                '8': '#0008',
                '9': '#0009',
                '10': '#000A',
                '11': '#000B',
                '12': '#000C',
                '13': '#000D',
                '14': '#000E',
                '15': '#000F',
                '16': '#0010',
                '17': '#0011',
                '18': '#0012',
                '19': '#0013'
            }));
}

function testConvo() {
    document.getElementById('chat').innerHTML += '<li id="msg_0000_001c" class="msg body you">hi</li><li class="msg head not" id="hed_0001_001d">#0001</li><li id="msg_0001_001d" class="msg body not">hello!</li><li class="msg head you" id="hed_0000_0NaN">#0000</li><li id="msg_0000_0NaN" class="msg body you">lets gooooooo</li><li id="msg_0000_0NaN" class="msg body you">it works</li><li class="msg head not" id="hed_0001_0NaN">#0001</li><li id="msg_0001_0NaN" class="msg body not">LMFAOOO</li><li id="msg_0001_0NaN" class="msg body not">js god</li><li id="msg_0001_0NaN" class="msg body not">right?</li><li id="msg_0001_0NaN" class="msg body not">RIGHT??</li><li class="msg head you" id="hed_0000_001e">#0000</li><li id="msg_0000_001e" class="msg body you">yessir</li>';
}

testConvo();