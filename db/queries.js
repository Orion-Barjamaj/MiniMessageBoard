const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messageBoard ORDER BY datetime::timestamp DESC");
    return rows;
}

async function insertMessage(username, message, date) {
    const query = `
        INSERT INTO messageBoard (username, message, dateTime) 
        VALUES ($1, $2, $3)
    `;
    
    try {
        await pool.query(query, [username, message, date]);
        console.log("Message inserted successfully!");
    } catch (error) {
        console.error("Error inserting message:", error);
    }
}

async function getMessageById(id) {
    const query = 'SELECT * FROM messageBoard WHERE id = $1';
    try {
      const result = await pool.query(query, [id]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching message by ID:', error);
      throw error; 
    }
  }
  
module.exports = {
    getAllMessages,
    insertMessage,
    getMessageById
};