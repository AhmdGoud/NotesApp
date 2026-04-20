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
  }
};
export default handelNoteData;
