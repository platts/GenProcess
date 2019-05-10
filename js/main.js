var show = function (elem) {
	elem.classList.add("togg");
	elem.classList.add("yow");
};
var hide = function (elem) {
	elem.classList.remove("togg");
	elem.classList.remove("yow");
};
var toggle = function (elem) {

	// If the element is visible, hide it
	if ( elem.classList.contains('togg')) {
		hide(elem);
		return;
	}
		show(elem);
	// Otherwise, show it
	
};
// Listen for click events
document.addEventListener('click', function (event) {
	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('magic')) return;
	// Prevent default link behavior
	event.preventDefault();
	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;
	// Toggle the content
	toggle(content);

}, false);




var ckEditorID;
ckEditorID = 'ckeExample';
CKEDITOR.config.extraPlugins += ',image2,uploadimage,embed,autoembed,colorbutton';
CKEDITOR.config.embed_provider = '//ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}'; 
CKEDITOR.config.filebrowserUploadUrl = 'localhost:8080/dosomething';
CKEDITOR.replace(ckEditorID, {});

CKEDITOR.editorConfig = function(config) {
  config.toolbar = [{
    name: 'insert',
    items: ['Image', 'Timestamp']
  }];
};





