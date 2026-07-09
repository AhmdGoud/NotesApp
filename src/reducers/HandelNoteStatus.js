const handelNoteData = (notes, action) => {
  const type = action.type;
  const { id, title, desc, time } = action.payload;

  if (type === "save") {
    const noteData = {
      id: Date.now(),
      title: title,
      desc: desc,
      time: time,
    };

    return [...notes, noteData];
  } else if (type === "remove") {
    const filtered = notes.filter((note) => {
      return note.id !== id;
    });

    return filtered;
  } else if (type === "edit") {
    const theNotes = notes.map((note) => {
      if (note.id === id) {
        note.title = title;
        note.desc = desc;
      }
      return note;
    });

    return theNotes;
  }
};
export default handelNoteData;
