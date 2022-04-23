import SQLite from 'react-native-sqlite-2';
import type {
  WebsqlDatabase,
  SQLTransaction,
  SQLResultSet,
  SQLError,
} from 'react-native-sqlite-2';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);

const testDb = () => {
  db.transaction((txn) => {
    txn.executeSql('DROP TABLE IF EXISTS Users', []);
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))',
      [],
    );
    txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
    txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
    txn.executeSql('SELECT * FROM `users`', [], (tx, res) => {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('item:', res.rows.item(i));
      }
    });
  });
};

const testDb2 = () => {
  db.transaction((txn) => {
    txn.executeSql('DROP TABLE IF EXISTS Users', []);
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Cities(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(60) NOT NULL, country VARCHAR(60) NOT NULL, place_id VARCHAR(27) NOT NULL, fav BOOLEAN DEFAULT false)',
      [],
    );
    // txn.executeSql('INSERT INTO Cities (name, country, place_id) VALUES (:name, :country, :place_id)', ['nora', 'aaa', '31w3123']);
    // txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
    // txn.executeSql('SELECT * FROM Cities', [], (tx, res) => {
    //   for (let i = 0; i < res.rows.length; ++i) {
    //     console.log('item:', res.rows.item(i));
    //   }
    // });
  });
};

const initDatabase = () => db.transaction((txn: SQLTransaction) => {
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS Cities(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(60) NOT NULL, country VARCHAR(60) NOT NULL, place_id VARCHAR(27) NOT NULL, fav BOOLEAN DEFAULT false);',
    [],
  );
});

const addCity = (name: string, country: string, placeId: string) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'INSERT INTO Cities (name, country, place_id) VALUES (:name, :country, :place_id)',
      [name, country, placeId],
    );
  });
};

const getCities = () => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'SELECT * FROM Cities',
      [],
      (tx: SQLTransaction, res: SQLResultSet) => {
        const queryResult = [];
        for (let i = 0; i < res.rows.length; i++) {
          queryResult.push(res.rows.item(i));
        }

        resolve(queryResult);
      },
    );
  });
});

export {
  testDb, testDb2, initDatabase, addCity, getCities,
};