import {
  DecoupledEditor as DecoupledEditorBase,
  Essentials,
  Paragraph,
  Bold, Italic, Underline, Strikethrough, Superscript, Subscript,
  List, TodoList,
  FontSize, FontColor, FontBackgroundColor,
  Autoformat,
  TextTransformation,
  RemoveFormat,
  Indent, IndentBlock,
  Alignment,
  Link, AutoLink,
  Image, ImageStyle, ImageResize, ImageToolbar, ImageUpload,
  Table, TableToolbar,
  MediaEmbed,
  FindAndReplace,
} from 'ckeditor5';
import ImageUploadAdapter from './objecturluploadadapter';

import 'ckeditor5/ckeditor5.css';

export default class DecoupledEditor extends DecoupledEditorBase {

  public static override builtinPlugins = [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Superscript,
    Subscript,
    List,
    TodoList,
    FontSize,
    FontColor,
    FontBackgroundColor,
    Autoformat,
    TextTransformation,
    RemoveFormat,
    Indent,
    IndentBlock,
    Alignment,
    Link,
    AutoLink,
    Image,
    ImageStyle,
    ImageResize,
    ImageToolbar,
    ImageUpload,
    ImageUploadAdapter,
    Table,
    TableToolbar,
    MediaEmbed,
    FindAndReplace,
  ];

  public static override defaultConfig = {
    toolbar: {
      items: [
        'bold',
        'underline',
        'fontsize',
        'fontColor',
        'fontBackgroundColor',
        'alignment',
        'strikethrough',
        'italic',
        'RemoveFormat',
        '|',
        'uploadImage',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'outdent',
        'indent',
        '|',
        'undo',
        'redo',
      ]
    },
    image: {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
      ]
    },
    language: 'en'
  };
}
