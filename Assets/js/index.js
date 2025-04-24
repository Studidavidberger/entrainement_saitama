const btn_math = document.getElementById('btn_math');
const textarea2 = document.getElementById('textarea2');

const chk1 = document.getElementById('checkbox_01');
const chk2 = document.getElementById('checkbox_02');
const chk3 = document.getElementById('checkbox_03');
const chk4 = document.getElementById('checkbox_04');
const chk5 = document.getElementById('checkbox_05');

chk1.addEventListener('change', function () {
    textarea = document.getElementById('textarea').value;
    textarea2.value = "chk1";
    
    const getSHA256Hash = async (textarea) => {
        const textAsBuffer = new TextEncoder().encode(textarea);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        textarea2.value = hash;
        return hash;
    };
})

chk2.addEventListener('change', function () {
    textarea2.value = "chk2"
})