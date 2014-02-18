module.exports = function(app){

	//search phrases
	var searchPhrases = require('../app/controllers/searchPhrases');
	app.get('/searchphrases', searchPhrases.index);
	app.get('/searchphrases/create', searchPhrases.create);

	//search phrases api route
	var searchPhrasesApi = require('../app/controllers/api/searchPhrases');
	app.get('/api/searchphrases', searchPhrasesApi.list);
	app.post('/api/searchphrases', searchPhrasesApi.add);

};
