posts = [
  {title: 'Post Başlık 1', detail: 'Post Detay 1'},
  {title: 'Post Başlık 2', detail: 'Post Detay 2'},
  {title: 'Post Başlık 3', detail: 'Post Detay 3'},
  {title: 'Post Başlık 4', detail: 'Post Detay 4'},
  {title: 'Post Başlık 5', detail: 'Post Detay 5'}
]

function PostListele(){
  posts.map(post => {
    console.log(post);
  })
}

function PostEkle(newPost){
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    reject('Bir hata var!');
  })

  return promise;
}

PostEkle({title: 'Post Başlık 99', detail: 'Post Detay 99'})
  .then(() => {
    PostListele();
  }).catch((error) => {
    console.log(error);
  })

async function addAndShow(){
  try{
    await PostEkle({title: 'Post Başlık 72', detail: 'Post Detay 72'});
    PostListele();
  }catch(error){
    console.log(error);
  }
}

addAndShow();