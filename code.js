let work = false;
let personal = false;

let html = document.getElementById("html");
let name_i = document.querySelector("input#gret");

html.addEventListener("click", function() {

    localStorage.setItem("name", name_i.value);

});

function w() {

    work = true;
    personal = false;

}

function p() {

    personal = true;
    work = false;

}

function del_all(){

    localStorage.clear();
    let element_w = document.querySelectorAll('.work');
    let element_p = document.querySelectorAll('.personal');

    for (let i = 0; i < element_w.length; i++) {

        element_w[i].parentNode.removeChild(element_w[i]);

    }

    for (let j = 0; j < element_p.length; j++) {

        element_p[j].parentNode.removeChild(element_p[j]);

    }

}

function add() {

    let text = document.getElementById('value');
    let text_clear = text.value;
    text.value = "";
    let text_body = document.querySelector("div#text_body");
    let i = localStorage.length;
    let div_personal = document.querySelector("div#personal");
    let div_work = document.querySelector("div#work");

    if (text_clear === "") {

        text_body.classList.add("red");
        console.log("Нет задачи");

    }

    else if (text_clear != "") {

        text_body.classList.remove("red");

    }

    if (personal == true) {

        div_personal.classList.remove("red");
        div_work.classList.remove("red");
        console.log(`Сообщение '${text_clear}' направляется в личные задачи`);
        localStorage.setItem(`${i} p`, text_clear);
        let word = localStorage.getItem(`${i} p`);

        let div = document.querySelector("div#body");
        let message = document.createElement("div");
        message.id = `${i} p`;
        message.classList.add("personal");

        let meaning = document.createElement("div");
        meaning.classList.add("text");

        let label = document.createElement("label");
        label.classList.add("check_label_personal");

        let span = document.createElement("span");

        let check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("check");
        check.onclick = function () {

            if (check.checked == true) {
        
                input.classList.add("out");
                input.classList.remove("in");
        
            }
        
            else if (check.checked == false) {
        
                input.classList.add("in");
                input.classList.remove("out");
        
            }
        
        };

        let input = document.createElement("input");
        input.type = "text";
        input.value = word;
        input.id = `${i} p`;
        input.classList.add("readonly");
        input.readOnly = true;

        let html = document.getElementById("html");

        let edit = document.createElement("div");
        edit.classList.add("edit");
        let edit_button = document.createElement("input");
        edit_button.classList.add("edit_button");
        edit_button.type = "button";
        edit_button.value = "Редактировать";
        edit_button.onclick = function () {

            input.readOnly = false;
            input.focus();

        };

        input.onblur = function() {

            localStorage.setItem(`${i} p`, input.value);
            input.readOnly = true;

        };

        let del = document.createElement("div");
        del.classList.add("del");
        let del_button = document.createElement("input");
        del_button.classList.add("del_button");
        del_button.type = "button";
        del_button.value = "Удалить";
        del_button.onclick = function () { localStorage.removeItem(`${i} p`);

            document.getElementById(`${i} p`).remove();
        
        };
        //let message_text = document.createTextNode(word);

        edit.appendChild(edit_button);
        del.appendChild(del_button);
        label.appendChild(check);
        label.appendChild(span);
        message.appendChild(label);
        message.appendChild(meaning);
        message.appendChild(edit);
        message.appendChild(del);
        //input.appendChild(message_text)
        meaning.appendChild(input);
        div.appendChild(message);

    }

    else if (work == true) {

        div_personal.classList.remove("red");
        div_work.classList.remove("red");
        console.log(`Сообщение '${text_clear}' направляется в рабочие задачи`);
        localStorage.setItem(`${i} w`, text_clear);
        let word = localStorage.getItem(`${i} w`);

        let div = document.querySelector("div#body");
        let message = document.createElement("div");
        message.id = `${i} w`;
        message.classList.add("work");

        

        let meaning = document.createElement("div");
        meaning.classList.add("text");

        let label = document.createElement("label");
        label.classList.add("check_label_work");

        let span = document.createElement("span");

        let check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("check");
        check.onclick = function () {

            if (check.checked == true) {
        
                input.classList.add("out");
                input.classList.remove("in");
        
            }
        
            else if (check.checked == false) {
        
                input.classList.add("in");
                input.classList.remove("out");
        
            }
        
        };

        let input = document.createElement("input");
        input.type = "text";
        input.value = word;
        input.id = `${i} w`;
        input.classList.add("readonly");
        input.readOnly = true;

        let edit = document.createElement("div");
        edit.classList.add("edit");
        let edit_button = document.createElement("input");
        edit_button.classList.add("edit_button");
        edit_button.type = "button";
        edit_button.value = "Редактировать";
        edit_button.onclick = function () {

            input.readOnly = false;
            input.focus();

        };

        input.onblur = function() {

            localStorage.setItem(`${i} w`, input.value);
            input.readOnly = true;

        };

        let del = document.createElement("div");
        del.classList.add("del");
        let del_button = document.createElement("input");
        del_button.classList.add("del_button");
        del_button.type = "button";
        del_button.value = "Удалить";
        del_button.onclick = function () { localStorage.removeItem(`${i} w`);
        
            document.getElementById(`${i} w`).remove();
    
        };

        edit.appendChild(edit_button);
        del.appendChild(del_button);
        label.appendChild(check);
        label.appendChild(span);
        message.appendChild(label);
        message.appendChild(meaning);
        message.appendChild(edit);
        message.appendChild(del);
        meaning.appendChild(input);
        div.appendChild(message);

    }

    else if (work == false && personal == false) {

        console.log('Не выбрана категория');
        div_personal.classList.add("red");
        div_work.classList.add("red");

    }

}