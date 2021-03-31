var products = [
    {
        "text":"Тест на интоксикацию организма"
    },
    {
        "text":"Тест на возможное наличие вирусов"
    },
    {
        "text":"Тест иммунной системы"
    },
    {
        "text":"Тест системы органов дыхания"
    },
    {
        "text":"Тест на возможное наличие грибковой инфекции"
    },
    {
        "text":"Тест на наличие паразитов"
    },
    {
        "text":"Тест \"В порядке ли ваша печень?\""
    },
    {
        "text":"Тест \"Хорошая ли у вас память?\""
    },
    {
        "text":"Тест \"Риск развития диабета\""
    },
    {
        "text":"Тест \"Ваша кожа\""
    },
    {
        "text":"Тест на обезвоживание организма"
    },
    {
        "text":"Тест на закисление организма"
    },
    {
        "text":"Тест системы органов пищеварения"
    },
    {
        "text":"Тест сердечно-сосудистой системы"
    },
    {
        "text":"Тест системы органов кроветворения"
    },
    {
        "text":"Тест костно-мышечной системы"
    },
    {
        "text":"Тест центральной нервной системы"
    },
    {
        "text":"Тест периферической нервной системы"
    },
    {
        "text":"Тест лимфатической системы"
    },
    {
        "text":"Тест эндокринной системы"
    },
    {
        "text":"Тест выделительной системы"
    },
    {
        "text":"Тест состояния репродуктивной системы женщины"
    },
    {
        "text":"Тест состояния репродуктивной системы мужчины"
    }
];

function generateQuizes(){
    var num = 1;
    products.forEach(element => {
        toAppendString = "<div class=\"col\"><div class=\"card shadow-sm\"><img src=\"img/quiz/quiz" + num + ".jpg\" class='bg-placeholder-img card-img-top' width=\"100%\" height=\"225\""
          + "role=\"img\" aria-label=\"Quiz thumbnail\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><div class=\"card-body\"><p class=\"card-text\">" + element.text
          + "</p><div class=\"d-flex justify-content-between align-items-center\"><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Пройти тест</button>"
          + "</div></div></div></div></div>";
        $("#quiz_container").append(toAppendString);
        num++;
      });
}