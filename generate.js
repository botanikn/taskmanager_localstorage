

    for (let i = 0; i < localStorage.length; i++) {
        
        let index = localStorage.key(i);

        if (index == "name") {

            let name_i = document.querySelector("input#gret");
            let loc_name = localStorage.getItem(index);
            name_i.value = loc_name;

        }

        else {
            let word = localStorage.getItem(index);

            let div = document.querySelector("div#body");
            let message = document.createElement("div");
            message.id = index;

            let meaning = document.createElement("div");
            meaning.classList.add("text");

            let label = document.createElement("label");

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

            if (index[2] == 'w') {

                message.classList.add("work");
                label.classList.add("check_label_work");

            }

            else if (index[2] == 'p') {

                message.classList.add("personal");
                label.classList.add("check_label_personal");

            }

            let input = document.createElement("input");
            input.type = "text";
            input.value = word;
            input.id = index;
            input.classList.add("readonly");
            input.readOnly = true;

            let html = document.getElementById("html");

            let edit = document.createElement("div");
            edit.classList.add("edit")
            let edit_button = document.createElement("input");
            edit_button.classList.add("edit_button")
            edit_button.type = "button";
            edit_button.value = "Редактировать";
            edit_button.onclick = function () {

                input.readOnly = false;
                input.focus();


            };


            input.onblur = function() {

                localStorage.setItem(index, input.value);
                input.readOnly = true;

            };

            let del = document.createElement("div");
            del.classList.add("del")
            let del_button = document.createElement("input");
            del_button.classList.add("del_button")
            del_button.type = "button";
            del_button.value = "Удалить";
            del_button.onclick = function () { localStorage.removeItem(index);

                document.getElementById(index).remove();

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
    }
