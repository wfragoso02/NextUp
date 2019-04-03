# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Profile.destroy_all
Genre.destroy_all
Video.destroy_all
List.destroy_all
ListItem.destroy_all


User.create!({email: 'faker@gmail.com', password: 'password'})
marcus = Profile.create!({name: 'Marcus', user_id: User.all.last.id, image_url: 'https://s3.amazonaws.com/nextup-seed/marcus.png'})
nicolas = Profile.create!({name: 'Nicolas', user_id: User.all.last.id ,image_url: 'https://s3.amazonaws.com/nextup-seed/nicolas.png'})
marvel = Video.create!({title: 'Avengers End Game', year: 2019, rating: 'PG-13', description: 'Greatest Film of All time'})
marvel.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/avenger_end_game.jpg'), filename: 'avengers.jpg')
marvel.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Marvel+Studios+Avengers+Endgame+-+Official+Trailer+copy.mp4'), filename: 'avengers-trailer.mp4')
dc = Video.create!({title: 'Justice League', year: 2018, rating: 'PG-13', description: 'Sucky Film'})
dc.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/justice_league.jpg'), filename: 'dc.jpg')
dc.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/JUSTICE+LEAGUE+-+Official+Heroes+Trailer.mp4'), filename: 'dc-trailer.mp4')

['Action','Movies','superHero','Ultimate Movies'].to_a.each do |alpha|
    alpha = Genre.create!({name: alpha})
    Category.create!(genre_id: alpha.id, video_id: marvel.id)
    Category.create!(genre_id: alpha.id, video_id: dc.id)
end
marcusList = List.create!({profile: marcus})
nicolasList = List.create!({profile: nicolas})
ListItem.create({list: marcusList, video: marvel })
ListItem.create({list: nicolasList, video: dc })
