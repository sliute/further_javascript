function noteTest() {
  var note = new Note('Even more JavaScript than before!');

  if (note.content() !== 'Even more JavaScript than before!') {
    throw new Error('No cookies for you today!');
  } else {
    console.log('Note content function functions')
  }
}

noteTest();
