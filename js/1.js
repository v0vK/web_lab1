var styles = {};
//styles.cursor = 'pointer'; //����� ����� ���� ��� ��� ��� �������, ������ ������
styles.width = '32px'; //������� ��������
styles.height = '32px';
var elementId = 'img';   // id ��������, � ������� ����� ��������
var imgName= 'img/dwarf/dwarf_forward_strip.png'; // ��� ����� �������

var img = document.createElement('img'); 

function spriteAnimation(elementId, imgName, styles) {
		var offset = 0;
		var element = document.getElementById(elementId);
		element.style.cursor     = styles.cursor;
		element.style.width      = styles.width;
		element.style.height     = styles.height;
		var i = 0;
		interval = setInterval(function() 
		{ //��������� ��������
			if (offset < img.width) { //��� ����� ������� �����������
				i++; // ���� ����� �� ����� �������
			} else {
				i = 0; // �� ������������ � ������
			}
		offset = 32 * i; //����� �� ������
		element.style.background = "url('" + imgName + "') " + offset + "px 50%"; 
	
//������ ���������������� �������
		} , 1000/5) //24 ����� � �������
		
		img.src = imgName; //���� ��� ������ �������
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