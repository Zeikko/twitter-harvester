// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SearchPhraseSchema = new Schema({
  phrase: String
});

SearchPhraseSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('SearchPhrase', SearchPhraseSchema);
