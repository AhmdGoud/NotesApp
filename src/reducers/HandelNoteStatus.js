const handelNoteData = (notes, action) => {
  const type = action.type;

  if (type === "save") {
    const { title, desc } = action.payload;

    const noteData = {
      id: Date.now(),
      title: title,
      desc: desc,
    };

    return [...notes, noteData];
  } else if (type === "remove") {
    const { id } = action.payload;

    const filtered = notes.filter((note) => {
      return note.id !== id;
    });

    return filtered;
  } else if (type === "edit") {
    const { id, title, desc } = action.payload;

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
