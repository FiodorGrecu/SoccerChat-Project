
"""This file is to help me group the games into rounds 
    in all of the leagues"""

# from all_rest_fixtures import all_rest_fixtures
from all_past_fixtures import all_past_fixtures
from pprint import pprint

# fix_list = all_rest_fixtures.get("response")
fix_list = all_past_fixtures.get("response")

output = []

last_round = None

for f in fix_list:
    current_round = f["league"]["round"]
    if not last_round == current_round:
        output.append({"round": f["league"]["round"], "games": []})
        print(f["league"]["round"])
    output[-1]["games"].append(f)
    last_round = f["league"]["round"]

    
# pprint(output)
pprint(last_round)
pprint(f)

example = [
    {"round": "Round 2",
     "games": 
        [
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"}
        ]}, 
    {"round": "Round 3",
     "games": 
        [
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"},
            {"game 1": "game data"}
        ]}]
pprint(example)