class Api::BenchesController < ApplicationController
  def index
    render json: Bench.in_bounds(params[:bounds])
  end

  def create
    render json: Bench.create!(bench_params)
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
