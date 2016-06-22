class Api::BenchesController < ApplicationController
  def index
    render json: Bench.all
  end

  def create
    render json: Bench.create!(bench_params)
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
