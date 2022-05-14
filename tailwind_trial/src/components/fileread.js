const { PDFNet } = require('@pdftron/pdfnet-node');
const ExtractText = async() => {
    const doc = await PDFNet.PDFDoc.createFromFilePath('test.pdf');
    await doc.initSecurityHandler();
    const page = await doc.getPage(1);
    const txt = await PDFNet.TextExtractor.create();
    const rect = new PDFNet.Rect(0,0,612,794);
    txt.begin(page,rect);
    const text = await txt.getAsText();
    console.log(text);
}
export default ExtractText;