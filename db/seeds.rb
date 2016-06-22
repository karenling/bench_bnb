# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

[
  { description: 'Upper Islais Creek', lat: '37.744456', lng: '-122.445908' },
  { description: 'Lower Pacific Heights', lat: '37.789157', lng: '-122.426693' },
  { description: 'Colma, CA', lat: '37.680614', lng: '-122.456887' },
  { description: 'Pacific Heights', lat: '37.789157', lng: '-122.437673' },
  { description: 'Paradise Valley', lat: '37.666709', lng: '-122.401988' }
].each do |bench|
  Bench.create(bench)
end
