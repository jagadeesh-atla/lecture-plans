import fetchPDF from "../../utils/fetchPDF";
const base =
  "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/";

export default async function handler(req, res) {
  const { id } = req.query;

  const [one, two] = id.split("-");

  const data = await fetchPDF(base + `${one}/${two}.pdf`);

  if (data === null) {
    return res.redirect("/");
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `inline; filename="${two}.pdf"`);

  res.send(Buffer.from(data));
}
