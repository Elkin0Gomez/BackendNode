const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

function generarDocumento(contrato) {
  const templatePath =
    "C:\\Users\\Usuario\\Documents\\CONTRATOSEJEMPLOS\\plantillaContrato.docx";
  const outputPath = `C:\\Users\\Usuario\\Documents\\CONTRATOSEJEMPLOS\\nuevoContrato_${contrato.nombre}.docx`;

  const content = fs.readFileSync(templatePath);
  const zip = new PizZip(content);
  const doc = new Docxtemplater();
  doc.loadZip(zip);

  const data = {
    "NOMBRE": contrato.nombre,
    "APELLIDO": contrato.apellido,
    "DOCUMENTO": contrato.documento,
    "FECHA_EXPEDICION": contrato.fechaExpedicion,
    "SUELDO": contrato.sueldo,
    "CARGO": contrato.cargo,
    "FECHA_INICIO": contrato.fechaInicio,
    "FECHA_FIN": contrato.fechaFin,
  };

  doc.setData(data);

  try {
    doc.render();
  } catch (error) {
    console.error("Error durante la renderización del documento:", error);
    console.error("Detalles de errores:", error.properties.errors);

    throw new Error("Error durante la renderización del documento");
  }

  const buf = doc.getZip().generate({ type: "nodebuffer" });
  fs.writeFileSync(outputPath, buf);

  console.log("Documento de Word generado correctamente:", outputPath);

  return outputPath;
}

module.exports = {
  generarDocumento: generarDocumento,
};

