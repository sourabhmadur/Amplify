import csv
import requests
import pandas as pd
import json

csv_filename = './us_state_vaccinations.csv'

url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv'

json_template = {
  "type": "line",
  "data": {
      "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      "datasets": [{
          "label": "Percentage of People Fully Vaccinated",
          "data": [12, 19, 3, 5, 2, 3],
          "backgroundColor": [
              "rgba(255, 99, 132, 0.2)",
          ],
          "borderColor": "rgba(255, 99, 132, 0.7)",

          "borderWidth": 3
      }]
  },
  "options": {
      
      "scales": {
          "x": {
              "type": "timeseries"
          },
          "yAxes": [{
              "ticks": {
                  "beginAtZero": True
              }
          }]
      }
  }
}


response = requests.get(url)

if response.status_code == 200:
    with open(csv_filename, 'wb') as file:
        for chunk in response:
            file.write(chunk)
            
df = pd.read_csv('./us_state_vaccinations.csv')

grouped_by_state = df.groupby('location')


for state in grouped_by_state['location']:
    state = state[0]
    
    state_df = grouped_by_state.get_group(state)
    state_df = state_df[state_df['people_fully_vaccinated_per_hundred'].notna()]
    
    state_json = json_template
    state_json['data']['labels'] = state_df['date'].tolist()
    state_json['data']['datasets'][0]['data'] = state_df['people_fully_vaccinated_per_hundred'].tolist()
    
    with open(state + '.json', 'w') as state_json_file:
        state_json_file.write(json.dumps(state_json, indent=4))