import { useEffect, useState } from "react";
import { styles } from "../styles/mainlayout";
import Navbar from "./Navbar";
import NoteItem from "./NoteItem";

const Sidebar = ({ showNoteInputs, noteData, numNotes, dispatch }) => {
  const [searched, setSearched] = useState(noteData);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearched(noteData);
  }, [noteData]);

  function handelSearchNotes(value) {
    const result = noteData.filter((note) => {
      return note.title.toLowerCase().includes(value);
    });

    setSearched(result);
  }

  return (
    <div style={styles.sidebar} className="sidebar">
      <Navbar />

      <div style={styles.notesHeader}>
        <span>ALL NOTES</span>
        <span>{numNotes} notes</span>
      </div>

      <input
        style={styles.searchInput}
        placeholder="Search notes..."
        value={searchInput}
        onChange={(e) => {
          const value = e.target.value;
          setSearchInput(value);
          handelSearchNotes(value);
        }}
      />

      <div style={styles.notesList}>
        {searched?.map((note) => {
          return (
            <NoteItem
              key={note.id}
              title={note.title}
              desc={note.desc}
              dispatch={dispatch}
              id={note.id}
            />
          );
        })}
      </div>

      <div style={styles.newNoteBtn} onClick={() => showNoteInputs(true)}>
        + New note
      </div>
    </div>
  );
};
export default Sidebar;
