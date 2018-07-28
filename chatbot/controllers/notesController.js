const NotesService = require('../services/notesService');

class NotesController{
  addNote(title, body , resolve){
    NotesService.addNote(title, body , (err, note) => {
      if(err) return resolve ("Something wrong with my pancil, I can't write down your note")
      resolve( `I wrote down your note by title : ${note.title}`)
    })
  }
 
  showNote(title , resolve){
    NotesService.getNote(title, (err, note) => {
      if(err) return  resolve('Hm. I guess, I lost my notebook at the party')
      resolve( `I found your note! \n Title : ${note.title} \n body: ${note.body}`)
    })  
  }

  deleteNote(title, resolve){
    NotesService.deleteNote(title, (err, note) => {
      if(err) return resolve( `What is dead may never die!`)
      resolve( `I killed note by title ${note.title}` )
    })
  }

  showNotelist(resolve){
    NotesService.getAllNotes( (err, notes) => {
      if(err) return resolve('Hm. I guess, I lost my notebook at the party')
      if(!notes.length) return resolve("It's empty! Create new note with command @bot save note title: 'title' body: 'body'")

      let response =  notes.reduce( (accum, current) => {
        return accum + current.title + '\n' + current.body + '\n'
      }, '' )

      resolve(response)
    })
  }
}

module.exports = new NotesController()