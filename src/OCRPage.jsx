// pages/ocr.js

import { useState } from "react";
import Tesseract from "tesseract.js";

function OCRPage() {
  const [ocrResult, setOCRResult] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const {
        data: { text },
      } = await Tesseract.recognize(file, "eng+hin"); // Specify "eng+hin" for English and Hindi
      setOCRResult(text);
    }
  };

  return (
    <div>
      <h1>OCR with Tesseract.js</h1>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <div>
        <h2>OCR Result:</h2>
        <pre>{ocrResult}</pre>
      </div>
    </div>
  );
}

export default OCRPage;
