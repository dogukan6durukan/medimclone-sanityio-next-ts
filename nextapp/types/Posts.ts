export interface Schema {
    PublicPosts : {
      Posts: {  
        title: string
        description? : string
        slug: string;
        image: string
        publishedAt? : string
        body?: []
        category? : Category[]
        author : Author
      };
    }
  
  }


export interface Category {
    title : string
}  

export interface Author {
  authorImage : string
  name : string,
  followers? : string
  bio? : []
}



