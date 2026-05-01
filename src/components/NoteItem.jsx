import { styles } from "../styles/mainlayout";
import { useContext, useState } from "react";
import { TheNotes } from "../reducers/NotesContext";
import "../styles/mainlayout.css";

const NoteItem = ({ title, desc, dispatch, id }) => {
  const notes = useContext(TheNotes);
  const [noteToEdit, setNoteToEdit] = useState({});
  const [showEdits, setShowEdits] = useState(false);

  function remove() {
    dispatch({
      type: "remove",
      payload: { id: id },
    });
  }

  function edit() {
    const noteToEdit = notes.find((note) => {
      return note.id === id;
    });

    setNoteToEdit(noteToEdit);
    setShowEdits(true);
  }

  function saveEdits() {
    dispatch({
      type: "edit",
      payload: {
        id: id,
        title: noteToEdit.title,
        desc: noteToEdit.desc,
      },
    });

    setNoteToEdit({});
  }

  return (
    <>
      <div style={styles.noteItem} className="noteItem">
        <div>
          <div style={styles.noteTitle}>{title}</div>
          <div style={styles.noteDesc}>{desc}</div>
        </div>
        <div>
          <div style={{ fontSize: "20px" }} onClick={() => edit()}>
            🖍
          </div>
          <div style={{ fontSize: "20px" }} onClick={() => remove()}>
            🗑
          </div>
        </div>
      </div>

      <div style={{ ...styles.noteItem, display: showEdits ? "flex" : "none" }}>
        <div>
          <input
            className="edits"
            style={styles.editInput}
            value={noteToEdit.title || ""}
            onChange={(e) =>
              setNoteToEdit((prev) => ({ ...prev, title: e.target.value }))
            }
          ></input>
          <textarea
            className="edits"
            style={styles.editInput}
            value={noteToEdit.desc || ""}
            onChange={(e) =>
              setNoteToEdit((prev) => ({ ...prev, desc: e.target.value }))
            }
          ></textarea>
        </div>
        <div>
          <button className="saveEdits" onClick={() => saveEdits()}>
            Save
          </button>
          <button className="undo" onClick={() => setShowEdits(false)}>
            Undo
          </button>
        </div>
      </div>
    </>
  );
};
export default NoteItem;
