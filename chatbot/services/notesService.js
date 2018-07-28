const NotesRepository = require('../repositories/notesRepository')

// репозитории потом заменить на реальные, а не заглушки, т.е. на базу

module.exports = {
  addNote: (title, body , callback) => {
    title = title.trim();
    body = body.trim();
    NotesRepository.saveNote( title, body , (err, note) => {
      callback(err, note)
    })
  },

  getNote: (title, callback) => {
    title = title.trim();
    NotesRepository.getNote(title, (err, note) => {
      callback(err, note)
    })
  },

  deleteNote: (title, callback) => {
    title = title.trim();
    NotesRepository.deleteNoteByTitle(title, (err, note) => {
      callback(err, note)
    })
  },
  
  getAllNotes: (callback) => {
    NotesRepository.getAll( (err, notes) => {
      callback(err, notes)
    })
  }
}