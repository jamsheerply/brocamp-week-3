var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }
];
for(let i=0;i<library.length;i++){
  let book=library[i];
  if(book.readingStatus){
    console.log(`already read:${book.title} by ${book.author}|n`)
  }else{
    console.log(`you still need to read :${book.title} by ${book.author}\n`)
  }
}