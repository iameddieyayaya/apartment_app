# == Schema Information
#
# Table name: apartments
#
#  id         :bigint           not null, primary key
#  street     :string
#  city       :string
#  state      :string
#  manager    :string
#  email      :string
#  price      :string
#  bedrooms   :integer
#  bathrooms  :integer
#  pets       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Apartment < ApplicationRecord
    belongs_to :user

    def initialize(**params, user_id:)
      params.merge(user_id: user.id)
    end
end
