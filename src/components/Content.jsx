import { useState } from "react";
import { styles } from "../styles/mainlayout";

const Content = ({ dispatch, showNoteInputs }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function undo() {
    setTitle("");
    setDesc("");
  }

  function save() {
    if (title && desc) {
      dispatch({
        type: "save",
        payload: {
          title: title,
          desc: desc,
        },
      });

      showNoteInputs(false);

      undo();
    } else {
      alert("Required Input");
    }
  }

  return (
    <div style={styles.content}>
      <div>
        <input
          placeholder="Tilte"
          value={title}
          style={styles.inputTitle}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={desc}
          style={styles.inputDesc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button style={styles.button} onClick={() => undo()}>
          Undo
        </button>
        <button style={styles.button} onClick={() => save()}>
          Save
        </button>
      </div>
    </div>
  );
};
export default Content;
