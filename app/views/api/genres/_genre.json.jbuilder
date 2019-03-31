json.extract! genre, :id, :name, :video_ids
json.videos do 
    genre.videos.each do |video| 
        json.set! video.id  do
            json.extract! video, :id, :title, :year, :description
            json.image_url url_for(video.image) 
        end
    end
end