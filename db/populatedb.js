const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messageBoard (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    dateTime TEXT,
    username VARCHAR ( 255 )
    );
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: "postgres://koyeb-adm:GFNrz8CnUP0x@ep-bold-flower-a2u9c5q2.eu-central-1.pg.koyeb.app/koyebdb",
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}
  
main();