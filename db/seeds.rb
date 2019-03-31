# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all
Genre.destroy_all
Video.destroy_all


User.create!({email: 'faker@gmail.com', password: 'password'})
Profile.create!({name: 'Marcus', user_id: User.all.last.id, image_url: '/assets/marcus.png'})
Profile.create!({name: 'Nicolas', user_id: User.all.last.id ,image_url: '/assets/nicolas.png'})
marvel = Video.create!({title: 'Avengers End Game', year: 2019, rating: 'PG-13', description: 'Greatest Film of All time'})
marvel.image.attach(io: File.open('/Users/wellingtonfragoso/Desktop/avenger_end_game.jpg'), filename: 'avengers.jpg')
dc = Video.create!({title: 'Justice League', year: 2018, rating: 'PG-13', description: 'Sucky Film'})
dc.image.attach(io: File.open('/Users/wellingtonfragoso/Desktop/justice_league.jpg'), filename: 'dc.jpg')

('A'..'z').to_a.each do |alpha|
    alpha = Genre.create!({name: alpha})
    Category.create!(genre_id: alpha.id, video_id: marvel.id)
    Category.create!(genre_id: alpha.id, video_id: dc.id)
end
