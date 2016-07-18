class Tag < ActiveRecord::Base
  include Concerns::Elasticsearch

  has_and_belongs_to_many :projects
  belongs_to :tag_category

  delegate :name, to: :tag_category, prefix: 'category', allow_nil: true

  mapping do
    indexes :name, :type => 'string'
    indexes :category_name, :type => 'string'
  end

  def color
    tag_category.try(:color) || TagCategory.new.color
  end

  def text_color
    tag_category.try(:text_color) || TagCategory.new.text_color
  end

  def icon
    tag_category.try(:icon) || TagCategory.new.icon
  end
end
