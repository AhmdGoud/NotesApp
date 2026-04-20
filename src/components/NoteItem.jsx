import { styles } from "../styles/mainlayout";

const NoteItem = ({ title, desc, dispatch, id }) => {
  function remove() {
    dispatch({
      type: "remove",
      payload: { id: id },
    });
  }
  return (
    <div style={styles.noteItem}>
      <div>
        <div style={styles.noteTitle}>{title}</div>
        <div style={styles.noteDesc}>{desc}</div>
      </div>
      <div>
        <div style={{ fontSize: "20px" }}>🖍</div>
        <div style={{ fontSize: "20px" }} onClick={() => remove()}>
          🗑
        </div>
      </div>
    </div>
  );
};
export default NoteItem;
