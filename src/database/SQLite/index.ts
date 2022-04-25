import SQLite from 'react-native-sqlite-2';
import type {
  WebsqlDatabase,
  SQLTransaction,
  SQLResultSet,
  SQLError,
} from 'react-native-sqlite-2';

import Api from '../../services/Api';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);

const initDatabase = () => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Cities(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(60) NOT NULL, country VARCHAR(60) NOT NULL, place_id VARCHAR(27) NOT NULL, lat TEXT NOT NULL, lon TEXT NOT NULL, fav BOOLEAN DEFAULT false);',
      [],
    );

    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Config(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, unit INTEGER NOT NULL DEFAULT 0);',
      [],
    );
    txn.executeSql('INSERT INTO Config (unit) VALUES (:unit)', [0]);

    resolve(true);
  });
});

const addCity = (name: string, country: string, placeId: string) => new Promise((resolve, reject) => {
  Api.googleDetails(placeId).then((response) => {
    const { geometry: { location: { lat, lng } } } = response;
    db.transaction((txn: SQLTransaction) => {
      txn.executeSql(
        'INSERT INTO Cities (name, country, place_id, lat, lon) VALUES (:name, :country, :place_id, :lat, :lon)',
        [name, country, placeId, lat, lng],
        (tx: SQLTransaction, res: SQLResultSet) => {
          resolve(res);
        },
      );
    });
  });
});

const updateCityFav = (id: number, fav: boolean) => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'UPDATE Cities SET fav = :fav WHERE id = :id',
      [fav, id],
      (tx: SQLTransaction, res: SQLResultSet) => {
        resolve(res);
      },
    );
  });
});

const deleteCity = (id: number) => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'DELETE FROM Cities WHERE id = :id',
      [id],
      (tx: SQLTransaction, res: SQLResultSet) => {
        resolve(res);
      },
    );
  });
});

const getCities = () => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'SELECT * FROM Cities ORDER BY fav DESC',
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

const updateConfig = (unit: number) => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'UPDATE Config SET unit = :unit WHERE id = 1',
      [unit],
      (tx: SQLTransaction, res: SQLResultSet) => {
        resolve(res);
      },
    );
  });
});

const getConfig = () => new Promise((resolve, reject) => {
  db.transaction((txn: SQLTransaction) => {
    txn.executeSql(
      'SELECT * FROM Config',
      [],
      (tx: SQLTransaction, res: SQLResultSet) => {
        resolve(res.rows.item(0));
      },
    );
  });
});

export {
  initDatabase, addCity, updateCityFav, deleteCity, getCities, updateConfig, getConfig,
};
