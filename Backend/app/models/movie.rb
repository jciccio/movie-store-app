class Movie < ApplicationRecord

    def self.create_movie params
        find_or_create_by(params)
    end

end
