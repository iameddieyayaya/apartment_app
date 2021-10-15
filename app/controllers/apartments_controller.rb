class ApartmentsController < ApplicationController
  def create
    @user = current_user
    @apartment = Apartment.new(params, user_id: @user)

    respond_to do |format|
      if @apartment.save!
        format.json { render json: @apartment, status: :created }
      else
        puts @apartment.errors
        format.json { render json: @apartment.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def apartment_params
    params.require(:apartment)
      .permit(:street, :city, :state, :manager, :email, :user)
  end
end
