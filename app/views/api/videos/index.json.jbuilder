@videos.each do |video| 
    json.set! video.id  do
        json.extract! video, :id, :title, :year, :description, :rating, :like, :dislike
        hash = {}
        video.video_ratings.each do |video_rating|
            hash[video_rating.profile_id] = video_rating
        end
        json.video_ratings hash
        json.image_url url_for(video.image) 
        json.video_url url_for(video.movie)
    end
end