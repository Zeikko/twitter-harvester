var mongoose = require('mongoose'),
SearchPhrase = mongoose.model('SearchPhrase');

exports.list = function(request, response){
	SearchPhrase.find(function(err, searchPhrases){
		response.json(searchPhrases);
	});
};

exports.add = function(request, response){
	SearchPhrase.find({
		phrase: request.body.phrase
	}, function(err, searchPhrase) {
		if(!searchPhrase.length){
			var newSearchPhrase = new SearchPhrase({
				phrase: request.body.phrase
			});
			newSearchPhrase.save();
		}
		response.send(200);
	});
};