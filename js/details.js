$(document).ready(function() {

    renderPageValue(kindOfPizzaObject(parseString(location.search)))


    function renderPageValue(object) {
        $('#pizza-name').text([object['name']]);
        $('#pizza-price').text([object['price'] + ' грн.']);
        $('#pizza-image').attr('src', '../images/pizza/' + object['image']);
        for (let i = 0; i < object['ingredients'].length; i++){
            let $li = $('<li>' + object['ingredients'][i] + '</li>');
            $('#pizza-ingredients').append($li);
        }
    }




    function kindOfPizzaObject(code) {
        let kindsProperties = {
          'margarita': ['Маргарита', 195, ['Сыр Моцарелла', 'Помидоры', 'Базилик зелёный', 'Оpeгaнo', 'Тoмaтный coуc'], 'margarita.jpg'],
          'gavayskaya': ['Гавайская', 230, ['Вeтчинa', 'Мoцapeллa', 'aнaнac', 'Оpeгaнo', 'Тoмaтный coуc', 'Пoмидop', 'пapмeзaн'], 'gavayskaya.jpg'],
          'ciziliyskaya': ['Сицилийская', 240, ['Анчоусы', 'Лук репчатый', 'Помидоры', 'Пармезан', 'Грюйер', 'Орегано', 'Чеснок'], 'ciziliyskaya.jpg'],
          'dyabolla': ['Дьябола', 220, ['Моцарелла', 'Сулугуни', 'Шампиньоны', 'Салями', 'Помидоры', 'Перец Чилли', 'Паприка'], 'dyabolla.jpg'],
          'four_cheases': ['Четыре сыра', 240, ['Моцарелла', 'Пapмeзaн', 'Дopблю', 'Эммeнтaль', 'opeгaнo', 'Бaзилик', 'тoмaтный coуc'], 'four_cheases.jpg'],
          'moreproducty': ['С морепродуктами', 270, ['Кoльцa кaльмapoв', 'Оливки зеленые', 'Пapмeзaн', 'Мoцapeллa', 'Зeлeный лук'], 'moreproducty.jpg'],
          'neopolitinskaya': ['Неополитанская', 255, ['Моцарелла', 'Маслины', 'Томатный соус', 'Помидоры черри', 'Базилик', 'Оpeгaнo', 'Тимьян'], 'neopolitinskaya.jpg'],
          'caprichioza': ['Капричоза', 275, ['Ветчина', 'Салями', 'шампиньоны', 'Моцарелла', 'Пармезан', 'артишоки', 'спаржа', 'Оливки'], 'caprichioza.jpg'],
          'four_seasons': ['Четыре сезона', 285, ['Оливки зеленые', 'Грибы', 'Моцарелла', 'Артишок', 'Ветчина', 'Орегано', 'Пармезан'], 'four_seasons.jpg'],
          'firmennaya': ['Фирменная', 310, ['Бекон', 'Ветчина', 'Курица гриль', 'Салями', 'Перец болгарский', 'Моцарелла', 'Шампиньоны'], 'firmennaya.jpg'],
          '': ['Собрать пиццу', 450, ['Бекон', 'Ветчина', 'Курица гриль', 'Салями', 'Перец болгарский', 'Моцарелла', 'Шампиньоны',
                        'Оливки', 'Грибы', 'Пармезан', 'артишоки', 'спаржа', 'Кoльцa кaльмapoв', 'Дopблю', 'Эммeнтaль', 'opeгaнo', 'Бaзилик',
                        'Маслины', 'Томатный соус',], 'firmennaya.jpg']
        }
        let pizza = {
            'name': kindsProperties[code][0],
            'price': kindsProperties[code][1],
            'ingredients': kindsProperties[code][2],
            'image': kindsProperties[code][3],
        }
        return pizza
    }


    function parseString(string) {
        return string.slice(string.indexOf("=") + 1, string.length)
    }






    $('.ingredients ul').click(function(e){
        let $li = $(e.target);
        if ($li.hasClass('delete')) {
            let pricePizza = parseInt($('.to-buy .price').text()),
                priceIngredient = 15,
                newPrice = pricePizza + priceIngredient + " грн.";
            $li.removeClass('delete');
            $('.to-buy .price').text([newPrice]);
        } else {
            let pricePizza = parseInt($('.to-buy .price').text()),
                priceIngredient = 15,
                newPrice = pricePizza - priceIngredient + " грн.";
            $li.addClass('delete');
            $('.to-buy .price').text([newPrice]);
        }
    })
})