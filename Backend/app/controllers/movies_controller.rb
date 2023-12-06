require 'net/http'

# Movies API
# We need to be able to create a movie given a title and retrieve a list of movies.
class MoviesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_movie, only: [:show, :update]
   
    # GET /movies
    # GET /movies.json
    def index
        @movies = Movie.all
        respond_to do |format|
            # format.html { redirect_to matches_url }
            format.json {render json:{success: true, movies: @movies}, status: 200}
        end
    end

    # POST /movies
    # POST /movies.json
    def create
        # We need to fetch the title as a param
        @movie = Movie.new()
        @movie.title = params["title"].downcase.titleize

        if params[:fetchMetadata]
            metadataObj = helpers.fetch_metadata(@movie.title) 
            image = metadataObj["Poster"]
            plot = metadataObj["Plot"]
        end
        
        result = Movie.create_movie(
            {
                title: @movie.title,
                image: image,
                sinopsis: plot
            }
        )
        respond_to do |format|
            format.json {render json:{success: true, message: "Movie created successfully", movie: @movie}, status: 200}
        end
    end

    # PATCH/PUT /movies/1
    # PATCH/PUT /movies/1.json
    def update
        # Used to update the likes counter.
        @movie[:likes] = @movie[:likes] + 1 
        respond_to do |format|
            if @movie.save
                format.json { render json:{success: true, movie: @movie}}
            else
                format.json { render json: @movie.errors, status: :unprocessable_entity }
            end
        end
    end

    def show
        # Not needed right now
    end

    # GET /movies/new
    def new
        @movie = Movie.new
    end

    # GET /movies/1/edit
    def edit
       # Not needed right now 
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_movie
        @movie = Movie.find(params[:id])
    end
  
    # Never trust parameters from the scary internet, only allow the white list through.
    def movie_params
        params.require(:movie).permit(:title, :likes, :id)
    end

end
