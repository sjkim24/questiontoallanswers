class Comment < ActiveRecord::Base

  validates :body, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :lyric,
    class_name: "Lyric",
    foreign_key: :lyric_id,
    primary_key: :id

end
