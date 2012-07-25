/**
Провайдер AnyBalance (http://any-balance-providers.googlecode.com)

Мережа магазинів біля дому «Фора»
Сайт Сільпо: http://fora.ua/
Особистий кабінет: http://fora.ua/club_postiynih_pokuptsiv/osobistiy_kabinet/
*/

function main(){
	var prefs = AnyBalance.getPreferences();
	var pass = prefs.pass;
	var login = prefs.login;
	if (!prefs.login || prefs.login == '')
		throw new AnyBalance.Error ('Введите № карты');
	if (!prefs.pass || prefs.pass == '')
		throw new AnyBalance.Error ('Введите пароль');
	var html = AnyBalance.requestPost('http://fora.ua/club_postiynih_pokuptsiv/osobistiy_kabinet/', {
			login: prefs.login,
			pass: prefs.pass
		}, 
		{"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11"}
	);
	if (html){
		var result = {success: true};
		if (AnyBalance.isAvailable('baly')) {
			var matches = html.match(/<div id="balliNow">(\d+?)<\/div>/i);
			if (matches) {
				result.baly = parseFloat(matches[1]);
			} else {
				throw new AnyBalance.Error("Не удалось проверить балы");
			}
		}
		if (AnyBalance.isAvailable('bonus')) {
			var matches = html.match(/<div class="dostupniBonus">Доступний для витрат бонус:<\/div>\s*<div class='cur-bonusItem'>([\d\.,]+) грн - до/i);
			if (matches) {
				result.bonus = parseFloat(matches[1]);
			} else {
				throw new AnyBalance.Error("Не удалось проверить бонусы");
			}
		}
		AnyBalance.setResult(result);
	} else {
		throw new AnyBalance.Error('Не удалось получить данные');
	}
}
