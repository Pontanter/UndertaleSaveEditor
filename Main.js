/* 🍕 */
const print = console.log;
const newEle = (typ,par,props) => {
    par = par || document.body;
    let ele = document.createElement(typ);
    par.appendChild(ele);
    for (let prop in props) {
        ele[prop] = props[prop];
    }
    return ele;
}
const modifyStyle = (ele, style) => {
    for (let prop in style) {
        ele.style[prop] = style[prop];
    }
}
const background = newEle('div', document.body, {
    id: 'background'
});
const main = newEle('div', document.body, {
    id: 'main'
});
const title = newEle('h1', main, {
    id: 'title',
    innerText: 'Undertale Save Editor'
});
const sec1 = newEle('div', main, {
    id: 'section1'
});
const sec2 = newEle('div', main, {
    id: 'section2'
});
const sec3 = newEle('div', main, {
    id: 'section3'
});
const sec1title = newEle('h2', sec1, {
    id: 'section1title',
    innerText: 'Positioning'
});
const sec2title = newEle('h2', sec2, {
    id: 'section2title',
    innerText: 'Character misc'
});
const sec3title = newEle('h2', sec3, {
    id: 'section3title',
    innerText: 'Character stats'
});
const roomIdName = newEle('p', sec1, {
    id: 'roomIdName',
    innerText: 'Room ID;'
});
const roomId = newEle('select', sec1, {
    id: 'roomId',
    type: ''
});
const roomDefault = newEle('option', roomId, {
    value: 'room_intromenu',
    innerText: 'Select Room',
    disabled: 'disabled',
    selected: 'selected'
});
modifyStyle(document.body, {
    backgroundColor: '#0d1117',
    margin: '0',
    padding: '0',
    fontFamily: 'monospace',
    lineHeight: '1.5em',
    color: '#c9d1d9',
    textAlign: 'center',
    userSelect: 'none'
});
modifyStyle(background, {
    zIndex: '-1',
    backgroundImage: 'url(api/img/Background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: '75%'
});
modifyStyle(main, {
    width: '95%',
    height: '95%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '12px',
    backgroundColor: '#2e3440',
    opacity: '75%',
    fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
});
modifyStyle(title, {
    position: 'absolute',
    width: '100%',
    height: '10%',
    fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
    top: '0',
    textAlign: 'center'
});
modifyStyle(roomId, {
    fontFamily: 'monospace',
    fontSize: 'clamp(.75rem, 1.75vw, 1.75rem)',
    textAlign: 'center',
    color: '#c9d1d9',
    backgroundColor: '#2e3440',
    top: '0',
    borderRadius: '12px',
    border: '1px dashed #c9d1d9',
    margin: '0',
    padding: '0',
    width: '100%'
})
const sectionStyle = {
    width: '30%',
    height: '90%',
    top: '100%',
    transform: 'translateY(-100%)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#111',
    opacity: '75%',
    borderRadius: '12px',
    margin: '0 3.3333%',
    userSelect: 'text'
}
const secTitleStyle = {
    fontSize: 'clamp(.75rem, 1.75vw, 1.75rem)',
    userSelect: 'none'
}
modifyStyle(sec1, sectionStyle);
modifyStyle(sec2, sectionStyle);
modifyStyle(sec3, sectionStyle);
modifyStyle(sec1title, secTitleStyle);
modifyStyle(sec2title, secTitleStyle);
modifyStyle(sec3title, secTitleStyle);
(async () => {
    let res = await fetch('api/data/rooms.json');
    let rooms = await res.json();
    rooms = rooms.rooms; /* 💀👍 */
    for (let room of rooms) {
        newEle('option', roomId, {
            value: room.id,
            innerText: room.id // room.displayname
        });
    }
})();