

# @classmethod
#     def game_by_fixture_id(cls, fixture_id):

#         # a fixture id example 592195
#         url = f"https://api-football-v1.p.rapidapi.com/fixtures/id/{fixture_id}"
#         headers = {
#             'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
#             'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
#             }

#         response = requests.request("GET", url, headers=headers)
#         data = response.json()
#         pprint(data)

#  @classmethod
#     def game_by_id(cls, game_id):
#         url = f"https://rapidapi.p.rapidapi.com/v2/fixtures/id/{game_id}"
#         querystring = {"timezone":"Europe/London"}
#         headers = {
#             'x-rapidapi-host': "api-football-v1.p.rapidapi.com",
#             'x-rapidapi-key': "804b1594a5msh69900911a788156p125a69jsna7c589797665"
#             }
#         response = requests.request("GET", url, headers=headers, params=querystring)
#         data = response.json()
#         pprint(data)

# if __name__=='__main__':


#  @classmethod
#     def lookup_logo(cls, team_id):
#         # url = "https://api-football-v1.p.rapidapi.com/v2/teams/team/34"
#         url = f'https://api-football-v1.p.rapidapi.com/v2/teams/team/{team_id}'
#         headers = {
#             'x-rapidapi-key': "2c640065a3mshc7ce40d93c5d938p11e165jsndda02dd29bc5",
#             'x-rapidapi-host': "api-football-v1.p.rapidapi.com"
#             }

#         response = requests.request("GET", url, headers=headers)
#         data = response.json()
#         logo = data['api']['teams'][0]['logo']
#         pprint(logo)