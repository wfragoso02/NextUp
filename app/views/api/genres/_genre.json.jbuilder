json.extract! genre, :id, :name, :video_ids
json.videos do 
    genre.videos.each do |video| 
        json.set! video.id  do
            json.extract! video, :id, :title, :year, :description, :rating, :review
            json.image_url url_for(video.image) 
            json.video_url url_for(video.movie)
        end
    end
end