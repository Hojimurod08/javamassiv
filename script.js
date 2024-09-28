const object = {};

let isStop = true; 

const waitCommand = function (byuruq) {
    if (byuruq === 'stop') {
        isStop = false;
    } else if (byuruq.startsWith('add')) { 
        const soz = byuruq.split(' ')[1]; 
        if (soz) {
            object[soz] = true; 
            console.log(`So'z "${soz}" qo'shildi!`, object);
        }
    } else if (byuruq.startsWith('del')) { 
        const soz = byuruq.split(' ')[1]; 
        if (soz && object[soz]) {
            delete object[soz]; 
            console.log(`So'z "${soz}" o'chirildi!`, object); 
        } 
    } 
}

while (isStop) {
    let byuruq = prompt("Byuruq kirit: add,(malumot qo'shadi) del, (malumotni o'chiradi) toxtastish uchun (stop,) vergul va joy tashlab yoz.");
    
    if (byuruq === null) { 
        alert("Dastur tugatildi.");
        break; 
    }
    
    waitCommand(byuruq); 
}
