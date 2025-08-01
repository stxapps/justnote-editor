const fs = require('fs');

const patchButtonView = () => {
  const fpath = 'node_modules/@ckeditor/ckeditor5-ui/dist/index.js';
  const matches = [
    '        template.on.mousedown = bind.to(evt => {',
    '            evt.preventDefault();',
    '        });',
  ];

  const text = fs.readFileSync(fpath, 'utf-8');
  const lines = text.split('\n');

  const outs = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (i === (2898 - 1) && line !== matches[0]) {
      outs.push(...matches);
      i = (2910 - 1);
      continue;
    }

    outs.push(line);
  }

  fs.writeFileSync(fpath, outs.join('\n'));
};

const patchDropdownUtils = () => {
  const fpath = 'node_modules/@ckeditor/ckeditor5-ui/dist/index.js';

  const match1 = '            childToFocus.focus();';
  const repmt1 = '';

  const match2 = '            dropdownView.buttonView.focus();';
  const repmt2 = '';

  const match3 = '        dropdownView.panelView.focus();';
  const repmt3 = '';

  const text = fs.readFileSync(fpath, 'utf-8');
  const lines = text.split('\n');

  const outs = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line === match1) {
      outs.push(repmt1);
      continue;
    }

    if (line === match2) {
      outs.push(repmt2);
      continue;
    }

    if (i > 10345 && line === match3) {
      outs.push(repmt3);
      continue;
    }

    outs.push(line);
  }

  fs.writeFileSync(fpath, outs.join('\n'));
};

const patchFontColorUi = () => {
  // Normally, dropdown will have close on execute (ckeditor-ui/dropdown/utils/closeDropdownOnExecute) e.g., alignment dropdown will close after execute
  // But color dropdown won't because color table is added to the dropdown and execute is on the color table instead!
  const fpath = 'node_modules/@ckeditor/ckeditor5-font/dist/index.js';

  const match1 = '                    editor.editing.view.focus();';
  const repmt1 = '                    dropdownView.isOpen = false;';

  const match2 = '                editor.editing.view.focus();';
  const repmt2 = '                dropdownView.isOpen = false;';

  const text = fs.readFileSync(fpath, 'utf-8');
  const lines = text.split('\n');

  const outs = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (i > 1200 && line === match1) {
      const nextLine = lines[i + 1];
      if (nextLine !== repmt1) {
        outs.push(line);
        outs.push(repmt1);
        continue;
      }
    }

    if (i > 1200 && i < 1350 && line === match2) {
      const nextLine = lines[i + 1];
      if (nextLine !== repmt2) {
        outs.push(line);
        outs.push(repmt2);
        continue;
      }
    }

    outs.push(line);
  }

  fs.writeFileSync(fpath, outs.join('\n'));
};

const patchClipboard = () => {
  const fpath = 'node_modules/@ckeditor/ckeditor5-clipboard/dist/index.js';

  const match1 = "        return '\\n\\n';";
  const repmt1 = "        return '\\n';";

  const match2 = "		 */ return '\\n\\n';";
  const repmt2 = "		 */ return '\\n';";

  const match3 = "    return '\\n\\n';";
  const repmt3 = "    return '\\n';";

  const match4 = "    .replace(/\\r?\\n\\r?\\n/g, '</p><p>')// Creates a line break for each single line break.";
  const repmt4 = "    .replace(/\\r?\\n\\r?\\n/g, '</p><p><br></p><p>')// Creates a line break for each single line break."

  const match5 = "    .replace(/\\r?\\n/g, '<br>')// Replace tabs with four spaces.";
  const repmt5 = "    .replace(/\\r?\\n/g, '</p><p>')// Replace tabs with four spaces.";

  const text = fs.readFileSync(fpath, 'utf-8');
  const lines = text.split('\n');

  const outs = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line === match1) {
      outs.push(repmt1);
      continue;
    }
    if (line === match2) {
      outs.push(repmt2);
      continue;
    }
    if (line === match3) {
      outs.push(repmt3);
      continue;
    }
    if (line === match4) {
      outs.push(repmt4);
      continue;
    }
    if (line === match5) {
      outs.push(repmt5);
      continue;
    }

    outs.push(line);
  }

  fs.writeFileSync(fpath, outs.join('\n'));
};

const patchImageUploadUi = () => {

  // Need to copy old image.svg in testckeditor5/@ckeditor/core-theme-icons-image.svg
  //   to ckeditor5/packages/ckeditor5-build-decoupled-document/node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg

  const fpath = 'node_modules/@ckeditor/ckeditor5-image/dist/index.js';

  const match1 = "            icon: IconImageUpload";
  const repmt1 = "            icon: IconImage";

  const text = fs.readFileSync(fpath, 'utf-8');
  const lines = text.split('\n');

  const outs = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line === match1) {
      outs.push(repmt1);
      continue;
    }

    outs.push(line);
  }

  fs.writeFileSync(fpath, outs.join('\n'));
};

patchButtonView();
patchDropdownUtils();
patchFontColorUi();
patchClipboard();
patchImageUploadUi();
