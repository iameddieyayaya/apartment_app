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
require 'rails_helper'

RSpec.describe Apartment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
