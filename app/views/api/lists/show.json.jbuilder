json.id @list.id
json.title @list.title
json.items @list.items do |item|
  json.id item.id
  json.body item.body
end