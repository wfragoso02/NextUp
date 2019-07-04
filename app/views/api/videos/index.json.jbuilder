@videos.each do |video| 
    json.set! video.id  do
        json.extract! video, :id, :title, :year, :description, :rating, :like, :dislike
        json.image_url url_for(video.image) 
        json.video_url url_for(video.movie)
    end
end