const pool = require("../database/");

async function buildClassificationList(selectedId = null) {
  const data = await pool.query("SELECT * FROM classification ORDER BY classification_name");
  
  let options = "";
  data.rows.forEach(row => {
    const selected = selectedId == row.classification_id ? "selected" : "";
    
    options += `<option value="${row.classification_id}" ${selected}>${row.classification_name}</option>`;
  });

  return `<select name="classification_id" id="classification_id" required>
            <option value="">Choose a Classification</option>
            ${options}
          </select>`;
}

module.exports = { buildClassificationList };