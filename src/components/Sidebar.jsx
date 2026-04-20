import { styles } from "../styles/mainlayout";
import Navbar from "./Navbar";
import NoteItem from "./NoteItem";

const Sidebar = ({ handelNote, noteData, numNotes, dispatch }) => {
  return (
    <div style={styles.sidebar} className="sidebar">
      <Navbar />

      <div style={styles.notesHeader}>
        <span>ALL NOTES</span>
        <span>{numNotes} notes</span>
      </div>

      <input style={styles.searchInput} placeholder="Search notes..." />

      <div style={styles.notesList}>
        {noteData?.map((note) => {
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

      <div style={styles.newNoteBtn} onClick={() => handelNote()}>
        + New note
      </div>
    </div>
  );
};
export default Sidebar;
