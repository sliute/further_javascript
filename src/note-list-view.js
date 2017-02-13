(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    var listItems = ''
    this.noteList.notes.forEach(function(i) {
      listItems += '<li><div>' + i.content() + '</div></li>'
    })
    return '<ul>' + listItems + '</ul>';
  };

  exports.NoteListView = NoteListView;
  exports.NoteListView.returnHTML = NoteListView.returnHTML;

})(this);
