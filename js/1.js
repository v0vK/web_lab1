var styles = {};
//styles.cursor = 'pointer'; //чтобы видно было что это наш элемент, меняем курсор
styles.width = '32px'; //размеры элемента
styles.height = '32px';
var elementId = 'img';   // id элемента, в котором будет анимация
var imgName= 'img/dwarf/dwarf_forward_strip.png'; // имя файла спрайта

var img = document.createElement('img'); 

function spriteAnimation(elementId, imgName, styles) {
		var offset = 0;
		var element = document.getElementById(elementId);
		element.style.cursor     = styles.cursor;
		element.style.width      = styles.width;
		element.style.height     = styles.height;
		var i = 0;
		interval = setInterval(function() 
		{ //запускаем интервал
			if (offset < img.width) { //для смены позиции изображения
				i++; // если дошли до конца спрайта
			} else {
				i = 0; // то возвращаемся к началу
			}
		offset = 32 * i; //сдвиг по слайду
		element.style.background = "url('" + imgName + "') " + offset + "px 50%"; 
	
//меняем позиционирование спрайта
		} , 1000/5) //24 кадра в секунду
		
		img.src = imgName; //даем имя нашего спрайта
}

kinput.onkeydown = press;

var lastTime = Date.now();

function press(e) {
	if (typeof(interval) != "undefined") 
		clearInterval(interval);
	
	if (e.keyCode==37)
	{
		spriteAnimation('dwarf', 'img/dwarf/dwarf_left_strip.png', styles);
		imgName = 'img/dwarf/dwarf_left_strip.png';
	}
	if (e.keyCode==38)
	{
		spriteAnimation('dwarf', 'img/dwarf/dwarf_back_strip.png', styles);
		imgName = 'img/dwarf/dwarf_back_strip.png';
	}
	if (e.keyCode==39)
	{
		spriteAnimation('dwarf', 'img/dwarf/dwarf_right_strip.png', styles);
		imgName = 'img/dwarf/dwarf_right_strip.png';
	}
	if (e.keyCode==40)
	{
		spriteAnimation('dwarf', 'img/dwarf/dwarf_forward_strip.png', styles);
		imgName = 'img/dwarf/dwarf_forward_strip.png';
	}
}