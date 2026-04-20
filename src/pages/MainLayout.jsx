import { styles } from "../styles/mainlayout";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import useNoteData from "../components/useReducer";

function MainLayout() {
  const [noteData, dispatch] = useNoteData();

  useEffect(() => {
    setNumNotes(noteData.length);
    localStorage.setItem("theNotes", JSON.stringify(noteData));
  }, [noteData]);

  const [newNoteInputs, setNewNoteInputs] = useState(false);
  const [numNotes, setNumNotes] = useState(0);

  const showNoteInputs = () => {
    setNewNoteInputs(true);
  };

  return (
    <div style={styles.mainLayout}>
      <aside>
        <Sidebar
          handelNote={showNoteInputs}
          numNotes={numNotes}
          noteData={noteData}
          dispatch={dispatch}
        />
      </aside>
      <section style={styles.section}>
        {newNoteInputs ? <Content dispatch={dispatch} /> : "Create New Note"}
      </section>
    </div>
  );
}
export default MainLayout;
