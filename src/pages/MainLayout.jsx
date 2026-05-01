import { styles } from "../styles/mainlayout";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import useNoteData from "../reducers/useNoteData";

import { TheNotes } from "../reducers/NotesContext";

function MainLayout() {
  const [noteData, dispatch] = useNoteData();

  useEffect(() => {
    localStorage.setItem("theNotes", JSON.stringify(noteData));
  }, [noteData]);

  const [newNoteInputs, setNewNoteInputs] = useState(false);

  const showNoteInputs = (bol) => {
    setNewNoteInputs(bol);
  };

  return (
    <TheNotes.Provider value={noteData}>
      <div style={styles.mainLayout}>
        <aside>
          <Sidebar
            showNoteInputs={showNoteInputs}
            numNotes={noteData.length}
            noteData={noteData}
            dispatch={dispatch}
          />
        </aside>
        <section style={styles.section}>
          {newNoteInputs ? (
            <Content dispatch={dispatch} showNoteInputs={showNoteInputs} />
          ) : (
            "Create New Note"
          )}
        </section>
      </div>
    </TheNotes.Provider>
  );
}
export default MainLayout;
