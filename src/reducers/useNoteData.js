import { useReducer } from "react";
import handelNoteData from "./HandelNoteStatus";

function useNoteData() {
  const initNotes = () => {
    const savedNotes = localStorage.getItem("theNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const [noteData, dispatch] = useReducer(handelNoteData, [], initNotes);

  return [noteData, dispatch];
}

export default useNoteData;
