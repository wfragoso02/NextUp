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


User.create!({email: 'faker@gmail.com', password: 'password'})
Profile.create!({name: 'Marcus', user_id: User.all.last.id, image_url: 'marcus.png'})
Profile.create!({name: 'Nicolas', user_id: User.all.last.id ,image_url: 'nicolas.png'})
('A'..'z').to_a.each do |alpha|
    Genre.create!({name: alpha})
end
