class ConvertApartmentPriceToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :apartments, :price, :integer, using: 'price::integer'
  end
end
