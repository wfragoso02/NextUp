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

marcusList = List.create!({profile: marcus})
nicolasList = List.create!({profile: nicolas})

marvel = Genre.create({name: "Marvel"})
dc = Genre.create({name: "DC"})
animation = Genre.create({name: "Animation"})
tv = Genre.create({name: "TV Shows" })
toprated = Genre.create({name: "Top-Rated"})




captain_marvel = Video.create!({title: 'Captain Marvel', year: 2019, rating: 'PG-13', description: "In 1995, on the Kree Empire's capital planet of Hala, Starforce member Vers suffers from amnesia and recurring nightmares involving an older woman. Yon-Rogg, her mentor and commander, trains her to control her abilities while the Supreme Intelligence, the artificial intelligence that rules the Kree, urges her to keep her emotions in check."})
captain_marvel.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/captain-maervel-image.jpg'), filename: 'Captain Marvel.jpg')
captain_marvel.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Marvel+Studios+Captain+Marvel+-+Official+Trailer.mp4'), filename: 'Captain Marveltrailer.mp4')
Category.create!(genre_id: marvel.id, video_id: captain_marvel.id)


spider_man_far_from_home = Video.create!({title: 'Spider Man: Far From Home', year: 2019, rating: 'PG-13', description: "In Mexico, Nick Fury and Maria Hill encounter a storm, which is revealed to be the Earth Elemental. A superpowered man, Quentin Beck, arrives to fight the creature. In New York City, the Midtown School of Science and Technology restarts its academic year to accommodate the students who were among those resurrected by Bruce Banner eight months earlier. The school organizes a two-week summer field trip to Europe. Peter Parker, while still distraught over the death of Tony Stark, plans to confess his growing feelings for classmate MJ. He attends a fundraiser for the homeless, coordinated by his Aunt May. There he disconnects a call from Fury and leaves after being posed questions about Stark."})
spider_man_far_from_home.image.attach(io: open('https://nextup-seed.s3.amazonaws.com/spider-man-far-from-home-poster-f.jpg'), filename: 'Spider Man: Far From Home.jpg')
spider_man_far_from_home.movie.attach(io: open('https://nextup-seed.s3.amazonaws.com/Spider-Man+Far+From+Home+Teaser+Trailer+1+(2019)++Movieclips+Trailers.mp4'), filename: 'Spider Man: Far From Home-trailer.mp4')
Category.create!(genre_id: marvel.id, video_id: spider_man_far_from_home.id)


thor_ragnarok = Video.create!({title: 'Thor: Ragnarok', year: 2017, rating: 'PG-13', description: "Two years after the battle of Sokovia, Thor is imprisoned by the fire demon Surtur, who reveals that Thor's father Odin is no longer on Asgard. He explains that the realm will soon be destroyed during the prophesied Ragnarök, once Surtur unites his crown with the Eternal Flame that burns in Odin's vault. Thor frees himself, defeats Surtur and takes his crown, believing he has prevented Ragnarök."})
thor_ragnarok.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/thor-image.jpg'), filename: 'Thor: Ragnarok.jpg')
thor_ragnarok.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Thor+Ragnarok+Official+Trailer.mp4'), filename: 'Thor: Ragnarok.mp4')
Category.create!(genre_id: marvel.id, video_id: thor_ragnarok.id)


avengers_end_game = Video.create!({title: 'Avengers: Endgame', year: 2019, rating: 'PG-13', description: 'After half of all life in the universe was killed due to the actions of Thanos in Avengers: Infinity War, the remaining Avengers and their allies must reassemble to revert those actions in one final stand'})
avengers_end_game.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/avengers-image.jpg'), filename: 'avengers.jpg')
avengers_end_game.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Marvel+Studios+Avengers+Endgame+-+Official+Trailer+copy.mp4'), filename: 'avengers-trailer.mp4')
Category.create!(genre_id: marvel.id, video_id: avengers_end_game.id)


black_panther = Video.create!({title: 'Black Panther', year: 2018, rating: 'PG-13', description: "Thousands of years ago, five African tribes war over a meteorite containing vibranium. One warrior ingests a 'heart-shaped herb' affected by the metal and gains superhuman abilities, becoming the first 'Black Panther'. He unites all but the Jabari Tribe to form the nation of Wakanda. Over centuries, the Wakandans use the vibranium to develop advanced technology and isolate themselves from the world by posing as a Third World country. In 1992, Wakanda's King T'Chaka visits his brother N'Jobu, who is working undercover in Oakland, California. T'Chaka accuses N'Jobu of assisting black-market arms dealer Ulysses Klaue with stealing vibranium from Wakanda. N'Jobu's partner reveals he is Zuri, another undercover Wakandan, and confirms T'Chaka's suspicions."})
black_panther.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/panther-image.jpg'), filename: 'Black Panther.jpg')
black_panther.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/+Black+Panther+-+Official+Trailer.mp4'), filename: 'Black Panther-trailer.mp4')
Category.create!(genre_id: marvel.id, video_id: black_panther.id)


justice_league_dc = Video.create!({title: 'Justice League', year: 2018, rating: 'PG-13', description: "Thousands of years ago, Steppenwolf and his legions of Parademons attempted to take over Earth with the combined energies of three Mother Boxes. They were foiled by a unified army that includes the Olympian Gods, Amazons, Atlanteans, mankind, and a Green Lantern. After repelling Steppenwolf's army, the Mother Boxes were separated and hidden in locations on the planet. In the present, mankind is in mourning over Superman for two years, whose death triggers the Mother Boxes to reactivate and Steppenwolf's return to Earth. In an effort to regain favor with his master Darkseid, Steppenwolf aims to gather the boxes to form 'The Unity', which will destroy Earth's ecology and terraform it in the image of Steppenwolf's homeworld."})
justice_league_dc.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/justice-league-image.jpg'), filename: 'dc.jpg')
justice_league_dc.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/JUSTICE+LEAGUE+-+Official+Heroes+Trailer.mp4'), filename: 'dc-trailer.mp4')
Category.create!(genre_id: dc.id, video_id: justice_league_dc.id)


shazam = Video.create!({title: 'Shazam!', year: 2019, rating: 'PG-13', description: "In 1974 Upstate New York, while playing with his Magic 8-Ball, a young Thaddeus Sivana is magically transported to the Rock of Eternity, where he meets the wizard Shazam, who introduces him to the mystical statues containing the spirits of the Seven Deadly Sins: Pride, Greed, Lust, Envy, Gluttony, Wrath, and Sloth. The last of a council of seven, Shazam spent centuries searching for a new champion. Put to a test to see if he is pure of heart, Sivana attempts to touch the Eye of Envy, failing the test. When he is transported back to the car, he causes a scene when he tries to go back, causing his father to be injured."})
shazam.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/shazam-image.jpg'), filename: 'Shazam.jpg')
shazam.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/SHAZAM!+-+Official+Teaser+Trailer+%5BHD%5D.mp4'), filename: 'Shazam-trailer.mp4')
Category.create!(genre_id: dc.id, video_id: shazam.id)


suicide_squad = Video.create!({title: 'Suicide Squad', year: 2017, rating: 'PG-13', description: "In the one-year aftermath of Superman's death, intelligence officer Amanda Waller convinces Washington D.C. officials to allow her to assemble Task Force X, a team of dangerous criminals imprisoned at Belle Reve Special Security Barracks. The team consists of elite hitman Floyd Lawton, former psychiatrist Harleen Quinzel, pyrokinetic ex-gangster Chato Santana, opportunistic thief George 'Digger' Harkness, genetic mutant Waylon Jones, and specialized assassin Christopher Weiss. They are placed under command of Colonel Rick Flag to be used as disposable assets in high-risk missions for the United States government. A nanite bomb is implanted in the neck of each team member, designed to detonate should the member rebel or try to escape."})
suicide_squad.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/suicide-squad-image.jpg'), filename: 'Suicide Squad.jpg')
suicide_squad.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/SUICIDE+SQUAD+2+2019+++Movie+Teaser+Trailer.mp4'), filename: 'Suicide Squad-trailer.mp4')
Category.create!(genre_id: dc.id, video_id: suicide_squad.id)


wonder_woman = Video.create!({title: 'Wonder Woman', year: 2017, rating: 'PG-13', description: "In present-day Paris, Diana receives a photographic plate from Wayne Enterprises of herself and four men taken during World War I, prompting her to recall her past. The daughter of Queen Hippolyta, Diana is raised on the hidden island of Themyscira, home to the Amazonian women warriors created by Zeus to protect mankind. Hippolyta explains the Amazonian history to Diana, including how Ares became jealous of humanity and orchestrated its destruction. When the other gods attempted to stop him, Ares killed all but Zeus, who used the last of his power to wound Ares and force his retreat. Before dying, Zeus left the Amazons the island and a weapon, the 'Godkiller', to prepare them for Ares's return."})
wonder_woman.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/nder-woman-image.jpg'), filename: 'Wonder Woman.jpg')
wonder_woman.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/WONDER+WOMAN+-+Official+Trailer+%5BHD%5D.mp4'), filename: 'Wonder Woman-trailer.mp4')
Category.create!(genre_id: dc.id, video_id: wonder_woman.id)

watchmen = Video.create!({title: 'Watchmen', year: 2009, rating: 'PG-13', description: 'Using an alternative timeline and applying multiverse theory, the story exists in a nearly identical, but separate America, while slightly mimicking both historically significant time periods. Initially starting in 1939, during the fading Interwar Period, a team of costumed crime fighters called the Minutemen formed in response to a rise in costumed gangs and criminals; this creation and timeline occurring prior to, and similarly covering the 1960s Vietnam War Era through mid-1980s Cold War Era America, saw the rise of the "Watchmen" team formed decades later'})
watchmen.image.attach(io: open('https://nextup-seed.s3.amazonaws.com/watchmen-hbo.jpg'), filename: 'Watchmen.jpg')
watchmen.movie.attach(io: open('https://nextup-seed.s3.amazonaws.com/Watchmen+(2009)+Official+Trailer+-+Zac+Snyder+Superhero+Movie+HD.mp4'), filename: 'Watchmen.mp4')
Category.create!(genre_id: dc.id, video_id: watchmen.id)

frozen_2 = Video.create!({title: 'Frozen 2', year: 2019, rating: 'PG', description: 'Elsa the Snow Queen and her sister embark on an adventure far away from the kingdom of Arendelle.'})
frozen_2.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/frozen-image.png'), filename: 'Frozen 2.jpg')
frozen_2.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/FROZEN+2+Trailer+(2019).mp4'), filename: 'Frozen 2-trailer.mp4')
Category.create!(genre_id: animation.id, video_id: frozen_2.id)


train_your_dragon = Video.create!({title: 'How to Train Your Dragon: The Hidden World', year: 2019, rating: 'PG', description: "One year after the events of the previous film, Hiccup, Toothless and their fellow dragon-riders continue to rescue captured dragons in order to bring them to Berk and its bustling dragon and human utopia. Their efforts have resulted in the island becoming overpopulated with dragons. In a response to the overcrowding, Hiccup desires to find the 'Hidden World', a safe haven for dragons spoken of by his late father Stoick. Meanwhile, a white female Fury, held captive by warlords, is given to infamous dragon hunter Grimmel the Grisly as bait for him to capture Toothless for the warlords' use as an alpha."})
train_your_dragon.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/how-to-train-image.jpg'), filename: 'How to Train Your Dragon: The Hidden World.jpg')
train_your_dragon.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/HOW+TO+TRAIN+YOUR+DRAGON+3+Trailer+2+(2019).mp4'), filename: 'How to Train Your Dragon: The Hidden World-trailer.mp4')
Category.create!(genre_id: animation.id, video_id: train_your_dragon.id)


spiderman = Video.create!({title: 'Spider-Man: Into the Spider-Verse', year: 2019, rating: 'PG', description: "Teenager Miles Morales struggles to live up to the expectations of his father, police officer Jefferson Davis, who sees Spider-Man as a menace. When Miles's uncle Aaron Davis takes him to an abandoned subway station to paint graffiti, Miles is bitten by a radioactive spider and gains spider-like abilities."})
spiderman.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/spiderman-image.jpg'), filename: 'Spider-Man: Into the Spider-Verse.jpg')
spiderman.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/SPIDER-MAN+INTO+THE+SPIDER-VERSE+-+Official+Trailer+2+(HD).mp4'), filename: 'Spider-Man: Into the Spider-Versetrailer.mp4')
Category.create!(genre_id: animation.id, video_id: spiderman.id)


toy_story = Video.create!({title: 'Toy Story 4', year: 2019, rating: 'PG', description: "Some years after Andy gave his toys to Bonnie, Woody, Buzz, and the rest of Andy's toys have enjoyed their time with Bonnie. However, they are faced with a problem when Bonnie creates a new toy from arts and crafts, named Forky; Forky suffers from an existential crisis about being a toy, which the others try to help him understand how to be a toy. As Bonnie and her family go on a road trip, Forky escapes and Woody goes to save him, becoming separated from the group near a small town. As Buzz and the others try to help find Woody, Woody finds Bo Peep among other toys in the town's antique shop, and she gives him a new outlook on what being a toy is really about."})
toy_story.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/toy-story-4-image.jpg'), filename: 'Toy Story 4.jpg')
toy_story.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Toy+Story+4++Official+Trailer.mp4'), filename: 'Toy Story 4-trailer.mp4')
Category.create!(genre_id: animation.id, video_id: toy_story.id)


coco = Video.create!({title: 'Coco', year: 2019, rating: 'PG', description: "In Santa Cecilia, Mexico, 12-year-old Miguel dreams of becoming a musician, even though his family strictly forbids it. His great-great-grandmother Imelda was married to a man who left her and their 3-year-old daughter Coco to pursue a career in music, and when he never returned, Imelda banished music from her family's life and started a shoemaking business."})
coco.image.attach(io: open('https://nextup-seed.s3.amazonaws.com/coco.jpg'), filename: 'Coco.jpg')
coco.movie.attach(io: open('https://nextup-seed.s3.amazonaws.com/Coco+Trailer+(2017)++Find+Your+Voice++Movieclips+Trailers.mp4'), filename: 'Coco-trailer.mp4')
Category.create!(genre_id: animation.id, video_id: coco.id)


power = Video.create!({title: 'Power', year: 2019, rating: 'R', description: "James 'Ghost' St. Patrick, a wealthy New York night club owner who has it all, catering to the city's elite and dreaming big, lives a double life as a drug kingpin. ... He wants to build an empire, turn the club into a Fortune 500 business, but there's just one problem: Ghost is living a double life"})
power.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/power-image.jpg'), filename: 'Power.jpg')
power.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Power++Season+5+Official+Trailer++STARZ.mp4'), filename: 'Power-trailer.mp4')
Category.create!(genre_id: tv.id, video_id: power.id)


new_girl = Video.create!({title: 'New Girl', year: 2019, rating: 'TV-MA', description: "Jessica 'Jess' Day (Zooey Deschanel) is a bubbly teacher in her early 30s who comes home to find her boyfriend, Spencer, with another woman and leaves him immediately to look for elsewhere to live. After answering an ad for a new roommate on Craigslist, she finds herself moving into a loft in Los Angeles with three men around the same age as her: Nick, Schmidt, and Coach. After the pilot episode, Winston, a former roommate and Nick's childhood friend, replaces Coach, who had vacated the apartment to live with his girlfriend. Cece, Jess's childhood best friend and a successful fashion model, frequently visits Jess and the guys."})
new_girl.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/new-girl-image.jpg'), filename: 'New Girl.jpg')
new_girl.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/NEW+GIRL+Season+7+Trailer+(2018)+Zooey+Deschanel+TV+Show+HD.mp4'), filename: 'New Girl-trailer.mp4')
Category.create!(genre_id: tv.id, video_id: new_girl.id)


the_good_doctor = Video.create!({title: 'The Good Doctor', year: 2019, rating: 'TV-MA', description: "The series follows Shaun Murphy, a young autistic surgeon with savant syndrome from the mid-size city of Casper, Wyoming, where he had a troubled childhood. He relocates to San Jose, California, to work at the prestigious San Jose St. Bonaventure Hospital."})
the_good_doctor.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/the-good-doctor-image.jpg'), filename: 'The Good Doctor.jpg')
the_good_doctor.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/THE+GOOD+DOCTOR+Official+Trailer+(HD)+Freddie+Highmore+ABC+Drama.mp4'), filename: 'The Good Doctor-trailer.mp4')
Category.create!(genre_id: tv.id, video_id: the_good_doctor.id)


got = Video.create!({title: 'Game of Thrones', year: 2019, rating: 'TV-MA', description: "Game of Thrones is roughly based on the storylines of A Song of Ice and Fire, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series chronicles the violent dynastic struggles among the realm's noble families for the Iron Throne, while other families fight for independence from it."})
got.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/game-of-thrones-image.jpg'), filename: 'Game of Thrones.jpg')
got.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Game+of+Thrones++Season+8++Official+Trailer+(HBO).mp4'), filename: 'Game of Thrones-trailer.mp4')
Category.create!(genre_id: tv.id, video_id: got.id)


lucifer = Video.create!({title: 'Lucifer', year: 2019, rating: 'TV-MA', description: 'The series focuses on Lucifer Morningstar, the Devil, who is bored and unhappy as the Lord of Hell. He resigns his throne in defiance to his father (God) and abandons his kingdom for Los Angeles, where he ends up running his nightclub "Lux". He becomes involved in a murder case with Detective Chloe Decker, and is subsequently invited to be a consultant to the LAPD. Throughout the series, several celestial and demonic threats come to L.A.; at the same time, Lucifer and Chloe fall in love.'})
lucifer.image.attach(io: open('https://nextup-seed.s3.amazonaws.com/Webp.net-resizeimage.png'), filename: 'Lucifer.jpg')
lucifer.movie.attach(io: open('https://nextup-seed.s3.amazonaws.com/Official+Trailer++Season+1++LUCIFER.mp4'), filename: 'Lucifer-trailer.mp4')
Category.create!(genre_id: tv.id, video_id: lucifer.id)


beautiful_boy = Video.create!({title: 'Beautiful Boy', year: 2018, rating: 'R', description: "New York Times writer David Sheff discovers his teenage son Nicholas is missing, and two days later, he reappears in their home. Seeing obvious signs of drug use, David takes Nic to a rehab clinic. Progress is made, and Nic requests to be transferred to a halfway house, where there is less security, and free time is given outside of a facility, to which David and Nic's doctors agree. Days later, however, Nic does not return home, and David finds him in the streets."})
beautiful_boy.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/beautiful-boy-image.jpg'), filename: 'Beautiful Boy.jpg')
beautiful_boy.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Beautiful+Boy+Trailer+1+(2018)++Movieclips+Trailers.mp4'), filename: 'Beautiful Boy-trailer.mp4')
Category.create!(genre_id: toprated.id, video_id: beautiful_boy.id)


wolf_of_wall_street = Video.create!({title: 'The Wolf of Wall Street', year: 2013, rating: 'R', description: "In 1987, Jordan Belfort procures a job as a Wall Street stockbroker for L.F. Rothschild, employed under Mark Hanna, who quickly entices him with the careless sex and drugs fueled stockbroker culture and passes on his idea that a stockbroker's only goal is to make money for himself. Jordan soon finds his career terminated following Black Monday and takes a job at a boiler room brokerage firm on Long Island that specializes in penny stocks. Thanks to his aggressive pitching style and the high commissions, Jordan makes a small fortune."})
wolf_of_wall_street.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/wolf-on-wallstreet.jpg'), filename: 'The Wolf of Wall Street.jpg')
wolf_of_wall_street.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/The+Wolf+of+Wall+Street+Official+Trailer.mp4'), filename: 'The Wolf of Wall Street-trailer.mp4')
Category.create!(genre_id: toprated.id, video_id: wolf_of_wall_street.id)


a_start_is_born = Video.create!({title: 'A Star Is Born', year: 2018, rating: 'R', description: "Jackson 'Jack' Maine, a famous country music singer privately battling an alcohol and drug addiction, plays a concert in California. His main support is Bobby, his manager and older half-brother. After the show, Jack visits a drag bar where he witnesses a performance by Ally, a waitress and singer-songwriter. Jack is amazed by her performance, and they spend the night talking to each other, where Ally discloses to him the troubles she has faced in pursuing a professional music career."})
a_start_is_born.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/a-star-is-born.jpg'), filename: 'A Star Is Born.jpg')
a_start_is_born.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/A+STAR+IS+BORN+-+Official+Trailer+1.mp4'), filename: 'A Star Is Born-trailer.mp4')
Category.create!(genre_id: toprated.id, video_id: a_start_is_born.id)


hobbs_shaw = Video.create!({title: 'Hobbs & Shaw', year: 2019, rating: 'R', description: "Two years after the events of The Fate of the Furious, federal agent Luke Hobbs and former-British military turned mercenary Deckard Shaw must join forces in order to stop a new threat emerging from Brixton, a cyber-genetically enhanced international terrorist."})
hobbs_shaw.image.attach(io: open('https://s3.amazonaws.com/nextup-seed/hobbs-and-shaw-image.jpg'), filename: 'Hobbs & Shaw.jpg')
hobbs_shaw.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Fast++Furious+Presents+Hobbs++Shaw++Official+Trailer++MTV+Movies.mp4'), filename: 'Hobbs & Shaw-trailer.mp4')
Category.create!(genre_id: toprated.id, video_id: hobbs_shaw.id)


equilizer = Video.create!({title: 'THE EQUALIZER 2', year: 2018, rating: 'R', description: "Former Marine and Defense Intelligence Agency (DIA) operative Robert McCall now lives in a diverse apartment complex in Roxbury, Boston. He is working as a Lyft driver and assists the less fortunate with the help of his close friend and former CIA colleague, Susan Plummer. McCall travels to Istanbul to retrieve a Boston bookstore owner's daughter, kidnapped by her father. He also helps Sam Rubinstein, an elderly Holocaust survivor who is looking for a painting of his sister; the siblings were separated in the Nazi death camps and the painting had been auctioned off. After discovering the apartment's courtyard has been vandalised, McCall accepts an offer from Miles Whittaker, a young resident with an artistic but troubled background, to repaint the walls. McCall later rescues Miles, who had been lured away by a local gang."})
equilizer.image.attach(io: open('https://nextup-seed.s3.amazonaws.com/equilizer.jpg'), filename: 'Equilizer 2.jpg')
equilizer.movie.attach(io: open('https://nextup-seed.s3.amazonaws.com/THE+EQUALIZER+2+-+Official+Trailer+(HD).mp4'), filename: 'Equilizer 2-trailer.mp4')
Category.create!(genre_id: toprated.id, video_id: equilizer.id)



ListItem.create({list: marcusList, video: avengers_end_game })
ListItem.create({list: nicolasList, video: black_panther })
