function noteListTest() {
  var noteList = new NoteList();
  var text1 = 'This is the first note'
  var text2 = 'This is the second note'

  noteList.add(text1);
  noteList.add(text2);

  if ((noteList.showNotes()[0].content() !== 'This is the first note') ||
     (noteList.showNotes()[1].content() !== 'This is the second note')) {
  throw new Error ('Note list kaput');
  } else {
    console.log('Note List function functions')
  }
}

noteListTest();
