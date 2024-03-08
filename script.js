const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

const socket = io("http://localhost:3000"); // Replace with your server's URL

socket.on("code-update", (data) => {
  editor.setValue(data.code);
});

editor.getSession().on("change", () => {
  const code = editor.getValue();
  socket.emit("code-update", { code });
});
