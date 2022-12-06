// variáveis de links
let editorInput = document.getElementById('inputEditor');
let previewInput = document.getElementById('inputPreview');
let editorLink;
let previewLink;

// secões da home e app
let home = document.getElementById('home');
let app = document.getElementById('app-none');

// booleanos para saber se o editor ou o preview está expandido
let editorIsExpanded = false;
let previewIsExpanded = false; 

// informações do iframe
const editor = document.getElementById('editor-ex');
const preview = document.getElementById('preview-ex');

// butões
let btnEditor = document.getElementById('btn-editor');
let btnPreview = document.getElementById('btn-preview');
let btnSplit = document.getElementById('btn-split-none');

function abrirEditor(){
    home.id = 'home-none';
    app.id = 'app';

    // recebendo links
    editorLink = editorInput.value;
    previewLink = previewInput.value;

    // setando links
    editor.src = editorLink;
    preview.src = previewLink;
}

function resetPreview(){
    preview.src = preview.src;
}

function editorAF(){
    editor.id = 'editor-full';
    preview.id = 'preview';

    btnEditor.id = 'btn-editor-none';
    btnPreview.id = 'btn-preview';
    btnSplit.id = 'btn-split';

    btnEditor.disabled = true;
    btnPreview.disabled = false;
    btnSplit.disabled = false;
}

function previewAF(){
    editor.id = 'editor';
    preview.id = 'preview-full';

    btnPreview.id = 'btn-preview-none';
    btnSplit.id = 'btn-split';
    btnEditor.id = 'btn-editor';

    btnEditor.disabled = false;
    btnPreview.disabled = true;
    btnSplit.disabled = false;

    resetPreview();
}

function splitScreen(){
    editor.id = 'editor-ex';
    preview.id = 'preview-ex';

    btnEditor.id = 'btn-editor';
    btnPreview.id = 'btn-preview';
    btnSplit.id = 'btn-split-none';

    btnEditor.disabled = false;
    btnPreview.disabled = false;
    btnSplit.disabled = true;
}