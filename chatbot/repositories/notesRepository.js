var _ = require('lodash');

const notes = {}

module.exports  = {
  saveNote: (title, body, cb) => {
    if(notes[title]) return  cb(new Error('Note with this title already exist'))

    notes[title] = {
      title: title,
      body: body
    } 
    cb( null , notes[title] )
  },

  getNote: (title, cb) => {
    if(!notes[title]) return cb(new Error('Note with this title does not exist'))
    cb(null , notes[title])
  },

  deleteNoteByTitle: (title , cb) => {
     if(!notes[title]) return cb(new Error('Note with this title does not exist'))
     let note = notes[title]
     delete notes[title];
     return cb(null, note)
  },

  getAll : (cb) => {
    cb( null, _.values(notes) )
  }
}