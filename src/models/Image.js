



export class Image{
  constructor(data){
    this.title = data.description || data.alt_description
    this.fullUrl = data.urls?.raw
    this.regularUrl = data.urls?.regular
    this.smallUrl = data.urls?.small
    this.author = {name:data.user.name, picture: data.profile_image?.small}
    this.location = data.location ? data.location?.name : data.location || null
  }
}
