import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotationToolbarSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'customStampItems', 'customStampSettings', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'formFieldCollections', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'inkAnnotationSettings', 'interactionMode', 'isCommandPanelOpen', 'isExtractText', 'isFormFieldsDocument', 'isSignatureEditable', 'isThumbnailViewOpen', 'lineSettings', 'locale', 'measurementSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'stampItemSettings', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseover', 'annotationMove', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
const modelProps = [];
/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
let PdfViewerComponent = class PdfViewerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new PdfViewer({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    deleteAnnotations() {
        return this.ej2Instances.deleteAnnotations();
    }
    download() {
        return this.ej2Instances.download();
    }
    exportAnnotations() {
        return this.ej2Instances.exportAnnotations();
    }
    exportAnnotationsAsObject() {
        return this.ej2Instances.exportAnnotationsAsObject();
    }
    exportFormFields(path) {
        return this.ej2Instances.exportFormFields(path);
    }
    exportFormFieldsAsObject() {
        return this.ej2Instances.exportFormFieldsAsObject();
    }
    importAnnotations(importData) {
        return this.ej2Instances.importAnnotations(importData);
    }
    importFormFields(formFields) {
        return this.ej2Instances.importFormFields(formFields);
    }
    load(document, password) {
        return this.ej2Instances.load(document, password);
    }
    redo() {
        return this.ej2Instances.redo();
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    retrieveFormFields() {
        return this.ej2Instances.retrieveFormFields();
    }
    saveAsBlob() {
        return this.ej2Instances.saveAsBlob();
    }
    setJsonData(jsonData) {
        return this.ej2Instances.setJsonData(jsonData);
    }
    undo() {
        return this.ej2Instances.undo();
    }
    unload() {
        return this.ej2Instances.unload();
    }
    updateFormFields(formFields) {
        return this.ej2Instances.updateFormFields(formFields);
    }
    updateViewerContainer() {
        return this.ej2Instances.updateViewerContainer();
    }
};
PdfViewerComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], PdfViewerComponent);
const PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install(Vue) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);
    }
};

export { PdfViewerComponent, PdfViewerPlugin };
export * from '@syncfusion/ej2-pdfviewer';
//# sourceMappingURL=ej2-vue-pdfviewer.es2015.js.map
