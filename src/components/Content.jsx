import { useState } from "react";
import { styles } from "../styles/mainlayout";

const Content = ({ dispatch, showNoteInputs }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [showTag, setShowTag] = useState(false);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

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
          time: Date.now(),
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

      {/* start tags */}
      <div style={{ display: "flex", gap: "5px" }}>
        <div style={styles.tags}>
          {tags.map((t) => {
            return <span key={t.id}>{t.tag}</span>;
          })}
        </div>
        {showTag && (
          <span>
            <input
              value={tag}
              style={{ ...styles.inputTitle, width: "100px" }}
              onChange={(e) => setTag(e.target.value)}
            ></input>
            <button
              onClick={() => {
                setTags((prev) => [...prev, { tag: tag, id: Date.now() }]);
                setTag("");
                setShowTag(false);
              }}
            >
              +
            </button>
          </span>
        )}
        <button style={styles.button} onClick={() => setShowTag(true)}>
          addTag
        </button>
      </div>
      {/* end tags */}

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
