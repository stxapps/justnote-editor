import {
  DecoupledEditor as DecoupledEditorBase,
  Essentials,
  Alignment,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  CKFinderUploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  BlockQuote,
  CKBox,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
  Indent,
  IndentBlock,
  Link,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  CloudServices
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default class DecoupledEditor extends DecoupledEditorBase {
  public static override builtinPlugins = [
    Essentials,
    Alignment,
    FontSize,
    FontFamily,
    FontColor,
    FontBackgroundColor,
    CKFinderUploadAdapter,
    Autoformat,
    Bold,
    Italic,
    Strikethrough,
    Underline,
    BlockQuote,
    CKBox,
    CKFinder,
    CloudServices,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Link,
    List,
    ListProperties,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    Table,
    TableToolbar,
    TextTransformation
  ];

  public static override defaultConfig = {
    toolbar: {
      items: [
        'undo', 'redo',
        '|', 'heading',
        '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
        '|', 'bold', 'italic', 'underline', 'strikethrough',
        '|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed',
        '|', 'alignment',
        '|', 'bulletedList', 'numberedList', 'outdent', 'indent'
      ]
    },
    image: {
      resizeUnit: 'px' as const,
      toolbar: [
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
        '|',
        'toggleImageCaption',
        'imageTextAlternative'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    language: 'en'
  };
}
