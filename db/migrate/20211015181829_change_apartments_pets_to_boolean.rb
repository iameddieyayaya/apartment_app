class ChangeApartmentsPetsToBoolean < ActiveRecord::Migration[6.1]
  def change
    change_column :apartments, :pets, :boolean, using: "price::boolean"
  end
end
