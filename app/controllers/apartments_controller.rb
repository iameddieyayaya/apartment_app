class ApartmentsController < ApplicationController
  def create
    if user_signed_in?
      if apartment = current_user.apartments.create(apartment_params)
        render json: @apartment, status: :created
      else
        render json: @apartment.errors, status: :unprocessable_entity
      end
    else
      render json: {}, status: :forbidden
    end
  end

  private

  def apartment_params
    params.require(:apartment)
      .permit(:street, :city, :state, :manager, :email)
  end
end
