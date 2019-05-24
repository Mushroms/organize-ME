import Realm from "realm";

// export const NOTELIST_SCHEMA = "NoteListSchema";
// export const NOTE_SCHEMA = "Note";
// export const Note = {
//   name: NOTE_SCHEMA,
//   primaryKey: "id",
//   properties: {
//     id: "int",
//     name: { type: "string", indexed: true },
//     done: { type: "bool", default: false }
//   }
// };
//
// export const NoteListSchema = {
//   name: NOTELIST_SCHEMA,
//   primaryKey: "id",
//   properties: {
//     id: "int",
//     name: "string",
//     note: { type: "list", objectType: NOTE_SCHEMA }
//   }
// };
//
// const databaseOptions = {
//   path: "organize-MEApp.realm",
//   scema: [Note, NoteListSchema]
// };
// export const insertNewNoteList = newNoteList =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           realm.create(NOTELIST_SCHEMA, newNoteList);
//           resolve(newNoteList);
//         });
//       })
//       .catch(error => reject(error));
//   });
//
// export const updateNoteList = NoteList =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           let updateNoteList = realm.objectForPrimaryKey(
//             NOTELIST_SCHEMA,
//             NoteList
//           );
//           updateNoteList.name = NoteList.name;
//           resolve();
//         });
//       })
//       .catch(error => reject(error));
//   });
//
// export const deleteNoteList = NoteListId =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions)
//       .then(realm => {
//         realm.write(() => {
//           let deleteNoteList = realm.objectForPrimaryKey(
//             NOTELIST_SCHEMA,
//             NoteListId
//           );
//           realm.delete(deleteNoteList);
//           resolve();
//         });
//       })
//       .catch(error => reject(error));
//   });
// export default new Realm(databaseOptions);
