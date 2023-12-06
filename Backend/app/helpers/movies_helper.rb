module MoviesHelper

    def fetch_metadata(title)
        url = URI.parse("https://www.omdbapi.com/?apikey=d0ae2223&format=json&t="+@movie.title)
        metadata = Net::HTTP.get(URI.parse(url.to_s))
        JSON.parse(metadata) if metadata
    end

end
