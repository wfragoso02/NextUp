json.extract! video, :id, :title, :year, :description 
json.image_url url_for(video.image)

json.video_url url_for(video.movie)
