
'use strict';
const key = 'trnsl.1.1.20200511T150527Z.66751ced302935c4.bcdd1f7dfc5314b91fa9a719a3f6cdc9a0ff1278',
      api = 'https://translate.yandex.net/api/v1.5/tr.json/translate',
      inputText = document.querySelector('#input_text'),
      langText = document.querySelector('#lang_text'),
      output = document.querySelector('#result'),
      button = document.querySelector('#translate'),
      text = inputText.value;
const translate = (id, callback) => {

    let url = api + '?key=' + key + '&text=' + text + '&lang=';
    if (langText.value === 'ru') {
        url += 'ru-en';
    } else {
        url += 'en-ru';
    }
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.onReadyStateChange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                lines[id] = text;
                text = ajax.responseText;
                text = JSON.parse(text);
                text = text.text[0];
                output.textContent = text;
            }
        }
    };
    ajax.send();
    console.log(url);
    console.log(text);
};

button.addEventListener('click', translate);