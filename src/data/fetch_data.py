import csv
import requests
import pandas as pd
import json
from datetime import datetime
from fbprophet import Prophet

def get_forecast_df(state_df):
    state_df = state_df[state_df['people_fully_vaccinated_per_hundred'].notna()]
    state_df=state_df[['date', 'people_fully_vaccinated_per_hundred']]
    past_dates_len=state_df.shape[0]
    state_df.columns=['ds','y']

    #predict
    m = Prophet()   
    m.fit(state_df)
    future = m.make_future_dataframe(periods=250)
    forecast = m.predict(future)


    #data formatting
    forecast.rename(columns = {"ds": "date", "yhat": "prediction"}, inplace = True)
    is_past = pd.Series([True]*past_dates_len + [False]*(forecast.shape[0]-past_dates_len))

    forecast["is_past"]=is_past
    forecast = forecast[["date", "prediction","is_past"]]
    forecast['past_series'] = forecast.apply (lambda row: row['prediction'] if row['is_past'] else "null", axis=1)
    forecast['future_series'] = forecast.apply (lambda row: row['prediction'] if not row['is_past'] else "null", axis=1)
    
    forecast['herd_series']=pd.Series([65]*forecast.shape[0])
    
    forecast=forecast[forecast['prediction']<=100]
    
    return forecast


def get_herd_immunity_date(forecast):
    for ind,row in forecast.iterrows():
    #     if row['people_fully_vaccinated_per_hundred']>=65:
        if(row['future_series']!='null'):
            if(int(row['future_series']))>=65:
                return str(row['date']).split(' ')[0]


csv_filename = './us_state_vaccinations.csv'

url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv'

json_template = {
  "type": "line",
  "data": {
      "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      "datasets": [{
          "label": "Percentage of People currently vaccinated",
          "data": [12, 19, 3, 5, 2, 3],
          "backgroundColor": [
              "rgba(255, 99, 132, 0.2)",
          ],
          "borderColor": "rgba(255, 99, 132, 0.7)",

          "borderWidth": 3
      },{
          "label": "Prediction",
          "data": [12, 19, 3, 5, 2, 3],
          "backgroundColor": [
              "rgba(64, 128, 0, 0.2)",
          ],
          "borderColor": "rgba(64, 128, 0, 0.7)",

          "borderWidth": 1,
          "pointRadius" : 3,
          "pointStyle" : "dash",
          "showLine": True
      },
          {
          "label": "Herd immunity Level",
          "data": [12, 19, 3, 5, 2, 3],
          "backgroundColor": [
                     "rgba(0, 230, 230, 0.2)"
                ],
            "borderColor":  "rgba(0, 230, 230, 0.7)",
            "borderWidth": 2,
            "showLine": False,
            "pointRadius" : 2,
            "pointStyle" : "dash"
      }
      ]
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

# Get CSV Data
response = requests.get(url)

if response.status_code == 200:
    with open(csv_filename, 'wb') as file:
        for chunk in response:
            file.write(chunk)
            

# Convert to DataFrame
df = pd.read_csv('./us_state_vaccinations.csv')


# Get States List as JSON
# states_list = list(set(df[df['location'].notna()]['location'].tolist()))

states_list=[]
    

# Get state-wise stats as JSONs
grouped_by_state = df.groupby('location')

for state in grouped_by_state['location']:
    try:
        state = state[0]
        state_df = grouped_by_state.get_group(state)


        forecast=get_forecast_df(state_df)


        state_json = json_template



        state_json['data']['labels'] = [datetime.strptime(str(s), '%Y-%m-%d').strftime('%b %d') for s in forecast.date.dt.strftime('%Y-%m-%d').tolist()]

        state_json['data']['datasets'][0]['data'] = forecast['past_series'].tolist()

        state_json['data']['datasets'][1]['data'] = forecast['future_series'].tolist()

        state_json['data']['datasets'][2]['data'] = forecast['herd_series'].tolist()


        with open(state + '.json', 'w') as state_json_file:
            state_json_file.write(json.dumps(state_json, indent=4))

        herd_immunity_date_json = {"date" : get_herd_immunity_date(forecast)}

        with open(state + '_herd_immunity_date.json', 'w') as herd_json_file:
            herd_json_file.write(json.dumps(herd_immunity_date_json, indent=4))
          
          
        states_list.append(state)
        print(state)
        
        
    except:
        print("failed to process state"+state)

        
with open('states_list.json', 'w') as state_list_file:
            state_list_file.write(json.dumps(states_list, indent=4))        
        
    