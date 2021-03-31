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

function loadQuizBody(id){
    var quizClass = "#quiz" + id + "_body";
    $(quizClass).load("./quiz/" + id + ".html");
}

function generateQuizes(){
    var num = 1;
    products.forEach(element => {
        toAppendString = "<div class=\"col\" id=\"quiz" + num + "\"><div class=\"card shadow-sm\"><img src=\"img/quiz/quiz"
        + num + ".jpg\" class='bg-placeholder-img card-img-top' width=\"100%\" height=\"225\""
        + "role=\"img\" aria-label=\"Quiz thumbnail\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\">"
        + "<div class=\"card-body\"><p class=\"card-text\">" + element.text
        + "</p><div class=\"d-flex justify-content-between align-items-center\"><div class=\"btn-group\">"
        + "<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-bs-toggle=\"modal\" data-bs-target=\"#quiz_modal" + num
        + "\">Пройти тест</button></div></div></div></div></div>"
        + "<div class=\"modal fade\" id=\"quiz_modal" + num + "\" tabindex=\"-1\" aria-labelledby=\"conceptModalLabel\" style=\"display: none;\" aria-hidden=\"true\">"
        + "<div class=\"modal-dialog modal-xl modal-dialog-scrollable\"><div class=\"modal-content\">"
        + "<div class=\"modal-header\"><h5 class=\"modal-title\" id=\"quiz" + num + "ModalLabel\">" + element.text + "</h5>"
        + "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div>"
        + "<div class=\"modal-body\" id=\"quiz" + num + "_body\"> +</div><div class=\"modal-footer\"></div></div></div></div>";
        $("#quiz_container").append(toAppendString);
        loadQuizBody(num);
        num++;
      });

}