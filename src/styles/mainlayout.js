export const styles = {
  mainLayout: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
  },

  sidebar: {
    // marginLeft: window.innerWidth < 768 ? "-320px" : "",
    width: "320px",
    height: "100vh",
    backgroundColor: "#fafafa",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
  },

  navbar: {
    width: "100%",
    height: "50px",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    fontWeight: "bold",
  },

  section: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  notesHeader: {
    padding: "10px 15px",
    fontSize: "14px",
    color: "#777",
    display: "flex",
    justifyContent: "space-between",
  },

  searchInput: {
    margin: "0 15px 10px",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  notesList: {
    flex: 1,
    overflowY: "auto",
    padding: "0 10px",
  },

  noteItem: {
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  noteTitle: {
    fontWeight: "bold",
    fontSize: "16px",
  },

  noteDesc: {
    fontSize: "14px",
    color: "#444",
  },

  noteTime: {
    fontSize: "12px",
    color: "#888",
  },

  newNoteBtn: {
    margin: "10px",
    padding: "12px",
    borderRadius: "10px",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    cursor: "pointer",
  },

  content: {
    color: "#999",
    fontSize: "16px",
    width: "80%",
    margin: "100px auto",
  },

  inputTitle: {
    width: "100%",
    outline: "none",
  },
  inputDesc: {
    width: "100%",
    outline: "none",
    height: "300px",
    marginTop: "5px",
  },
  editInput: {
    width: "95%",
    outline: "none",
    padding: "3px 8px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    margin: "1px 3px",
    boxSizing: "border-box",
    fontSize: "14px",
  },

  button: {
    borderRadius: "5px",
    padding: "3px 8px",
    marginRight: "5px",
  },
};
