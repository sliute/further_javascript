(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.add = function(text) {
    var note = new Note(text)
    this.notes.push(note)
  };

  NoteList.prototype.showNotes = function() {
    return this.notes
  };

  exports.NoteList = NoteList;
  exports.NoteList.add = NoteList.add;
  exports.NoteList.showNotes = NoteList.showNotes;

})(this);
