json.extract! video, :id, :title, :year, :description, :rating
hash = {}
video.video_ratings.each do |video_rating|
    hash[video_rating.profile_id] = video_rating
end
json.image_url url_for(video.image) 
json.video_url url_for(video.movie)
