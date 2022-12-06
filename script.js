let editorIsExpanded = true;
let previewIsExpanded = true;

const editor = document.getElementById('editor-ex');
const preview = document.getElementById('preview-ex');

let btnEditor = document.getElementById('btn-editor');
let btnPreview = document.getElementById('btn-preview');

window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault();
      // Place your code here
      console.log('CTRL + S');
      preview.src = preview.src;
    }
  });

function resetPreview(){
    preview.src = preview.src;
}

function editorAF(){
    if(editorIsExpanded === true && previewIsExpanded == true){
        editorIsExpanded = false;
        editor.id = 'editor';
        preview.id = 'preview-full';

        btnPreview.disabled = true;
    } else{
        editorIsExpanded = true;
        editor.id = 'editor-ex';
        preview.id = 'preview-ex';

        btnPreview.disabled = false;
    }
}

function previewAF(){
    if(previewIsExpanded === true && editorIsExpanded === true){
        previewIsExpanded = false;
        preview.id = 'preview';
        editor.id = 'editor-full';

        btnEditor.disabled = true;
    } else{
        previewIsExpanded = true;
        preview.id = 'preview-ex';
        editor.id = 'editor-ex';

        btnEditor.disabled = false;
    }
}