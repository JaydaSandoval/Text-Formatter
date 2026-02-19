//Text Formatter
const input = document.getElementById("inputTextarea");
const output = document.getElementById("outputText");
const countChar = document.getElementById("charCount");

function uppercase(){
    const text = input.value;
    const upperText = text.trim().toUpperCase();
    let html = '';
    html+=`
        <p>${upperText}</p>
    `;
    output.innerHTML = html;
};

function lowercase(){
    const text = input.value;
    const lowerText = text.trim().toLowerCase();
    let html = '';
     html +=`
    <p>${lowerText}</p>
    `;
    output.innerHTML = html;
};

function capitalized(){
    const text = input.value;
    let words = text.split(" ");
    const capitalizedText = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    let finalString = capitalizedText.join(" ");
    let html = '';
    html+=`
    <p>${finalString}</p>
    `;
    output.innerHTML = html;
};

function remove(){
    const text = input.value;
    const removeExtra = text.trim();
    let html='';
    html += `
    <p>${removeExtra}</p>
    `;
    output.innerHTML = html;
};

function replace(){
    const text = input.value;
    let replace = prompt("Enter the old word: ");
    let newWord = prompt("Enter the new word: ");
    let result= text.replace(replace, newWord);
    let html='';
    html += `
    <p>${result}</p>
    `;
    output.innerHTML = html;
};

function count(){
    const text = input.value;
    let charLength = text.length;
    let html = '';
    html+= `
    <p>The Character Count is: ${charLength}</p>`;
    countChar.innerHTML = html;
};