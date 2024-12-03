// eslint-disable-next-line
const supportsDocumentPiP = 'documentPictureInPicture' in window;

function hasDocumentPiP() {
  // eslint-disable-next-line
  return supportsDocumentPiP && !!documentPictureInPicture.window;
};

module.exports = hasDocumentPiP;
