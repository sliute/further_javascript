function noteListViewTest() {
  var noteList = new NoteList();
  var text1 = 'This is the first note'
  var text2 = 'This is the second note'

  noteList.add(text1);
  noteList.add(text2);

  var noteListView = new NoteListView(noteList)

  if (noteListView.returnHTML() !== '<ul><li><div>This is the first note</div></li><li><div>This is the second note</div></li></ul>') {
  throw new Error ('Note list view malfunctions!');
  } else {
    console.log('Note list view works just fine.')
  }
}

noteListViewTest();
