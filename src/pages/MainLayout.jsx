import { styles } from "../styles/mainlayout";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import useNoteData from "../reducers/useNoteData";

import { TheNotes } from "../reducers/NotesContext";
import folder from "../images/folder-open-outline.svg";

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
            <div>
              <img src={folder} alt="folder"></img>
              <p>Create New Note</p>
            </div>
          )}
        </section>
      </div>
    </TheNotes.Provider>
  );
}
export default MainLayout;
