(function(exports) {

  function Note(text) {
    this.text = text;
  }

  Note.prototype.content = function() {
    return this.text;
  };

  exports.Note = Note;
  exports.Note.content = Note.content;

})(this);


// function Note(text) {
//   this.text = text;
// }
//
// Note.prototype.content = function() {
//   return this.text;
// };
