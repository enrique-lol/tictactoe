




# TOKEN='9e7e80f6239809394bb1bf0d95357b8c' OLDPW='55' NEWPW='65' sh curl-scripts/change-password.sh



curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
  }
}'
