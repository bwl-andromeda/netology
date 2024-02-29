const editor = document.getElementById('editor');
const savedText = localStorage.getItem('textEditorContent');
if (savedText) {
    editor.value = savedText;
}
editor.addEventListener('input', function() {
    localStorage.setItem('textEditorContent', editor.value);
});