# Production Read Me

Welcome to [NextUp](http://nextup-app.herokuapp.com/#/), a pixel perfect clone of [Netflix](https://www.netflix.com/).

NextUp is a functionaln single page app that streams popular trailers for Movies and TV shows.  It gives users the ability to sign up/sign in, and create profiles, which are attached to a custimized 'My List'.  This list gives users the power to save videos for a later time to watch.  

# Technologies
### Nextup uses the following technologies: 
* Ruby as the backend language and Rails as the library.
* Javascript as the frontend language and React/Redux as the library.
* Postgresql as the database.

# Highlight Features
### Nextup has a custom video player that resembles Netflix. 
* Netflix: 
![alt text](https://github.com/wfragoso02/NextUp/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2011.55.09%20AM.png)
* Nextup
![alt text](https://github.com/wfragoso02/NextUp/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2011.55.23%20AM.png)

### AWS
Videos and photos are stored remotely using AWS's S3 buckets through associations, taking the weight off my app and placing the dependency on the cloud.




# Pending Features
* Facebock Auth
* CRUD for profiles
* show pages for genres
