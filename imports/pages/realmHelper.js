const Realm = require("realm");

const NoteListSchema = {
  name: "NoteList",
  primaryKey: "id",
  properties: {
    id: { type: "int", default: 0 },
    name: "string",
    date: "string"
  }
};

const databaseOptions = {
  path: "organazeME.realm",
  schema: [NoteListSchema],
  schemaVersion: 0
};

let RealmHelper = {
  addNoteList: (dateString, newName) => {
    Realm.open(databaseOptions).then(realm => {
      const AllNotes = realm.objects("NoteList");
      const notesByDate = AllNotes.filtered("date == $0", dateString);
      const firstNodeByDate = notesByDate[0];
      let shouldWeUpdate = false;
      let lastId = realm.objects("NoteList").max("id");
      if (!lastId) {
        lastId = 0;
      }

      noteId = lastId + 1;

      if (firstNodeByDate && firstNodeByDate !== null) {
        shouldWeUpdate = true;
        noteId = firstNodeByDate.id;
      }

      realm.write(() => {
        realm.create(
          "NoteList",
          {
            id: noteId,
            name: newName,
            date: dateString
          },
          shouldWeUpdate
        );
      });
    });
  },

  readFromRealm: (selectedDate, callback) => {
    Realm.open(databaseOptions).then(realm => {
      let allNotes = realm.objects("NoteList");
      let NoteListByDate = allNotes.filtered("date == $0", selectedDate);
      let noteMessage = "";
      if (NoteListByDate[0]) {
        noteMessage = NoteListByDate[0].name;
      }

      callback(noteMessage);
    });
  },

  findDateInArray: (allDatesArray, callback) => {
    Realm.open(databaseOptions).then(realm => {
      let allNotes = realm.objects("NoteList");
      const notesInArray = [];

      var filtered = allNotes.filtered(
        allDatesArray.map(date => 'date == "' + date + '"').join(" OR ")
      );
      callback(Array.from(filtered));
    });
  },

  deleteNoteList: selectedDate => {
    Realm.open(databaseOptions).then(realm => {
      const allNotes = realm.objects("NoteList");
      const noteByDate = allNotes.filtered("date == $0", selectedDate)[0];

      if (noteByDate) {
        realm.write(() => {
          realm.delete(noteByDate);
        });
      }
    });
  }
};

export default RealmHelper;
