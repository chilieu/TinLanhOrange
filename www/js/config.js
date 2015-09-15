
// define constants
var config_module = angular.module('TinLanhOrange.config', []);
var config_data = {
	'GENERAL_CONFIG': {
		'APP_NAME': 'Tin Lanh Orange - Youtube Channel',
		'APP_VERSION': '1.0',
		'FIRST_URL': 'http://www.tinlanhorange.com',
		'API_URL': 'http://web-s7.com/test.php',
		'CHANNELID': 'UCd8tHv1A1VsTL7WS9yQ3eGg'
	}
}

angular.forEach(config_data,function(key,value) {
  config_module.constant(value,key);
});