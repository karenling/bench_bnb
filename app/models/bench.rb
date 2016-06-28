class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    north_east = bounds['northEast']
    south_west = bounds['southWest']
    Bench.where('lat < ? AND lat > ? AND lng < ? AND lng > ?',
                north_east['lat'],
                south_west['lat'],
                north_east['lng'],
                south_west['lng'])
  end
end
