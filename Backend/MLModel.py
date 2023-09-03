import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import io

path="/Users/ujjwalsinha/Downloads/archive/Clean_Dataset.csv"

flightSet=pd.read_csv(path)
flightSet.head()

flightSet=flightSet.drop(columns='flight',axis=1)
flightSet.head()

flightSet['hrs'] = flightSet['duration'].astype(int)
flightSet['minutes'] = ((flightSet['duration']-flightSet['hrs'])*100)
flightSet.head(2)

flightSet.drop('duration', axis=1, inplace=True)
flightSet.head(2)

airline=flightSet['airline']
airline=pd.get_dummies(airline,drop_first=True)
airline.head()

source_city=flightSet[ ['source_city' ]]
source_city=pd.get_dummies(source_city, drop_first=True)
source_city.head()

destination_city=flightSet[ ['destination_city' ]]
destination_city=pd.get_dummies(destination_city, drop_first=True)
destination_city.head()

flightSet.replace({'zero':0, 'one':1 , 'two':2 , 'two_or_more':3},inplace=True)
flightSet.head()

flightSet.replace({'Early_Morning':0, 'Morning':1 , 'Afternoon':2 , 'Evening':3 , 'Night':4 , 'Late_Night':5},inplace=True)
flightSet.head()

flightSet.replace({'Economy':0, 'Business':1 },inplace=True)
flightSet.head()

flightSet=pd.concat([flightSet, airline , source_city , destination_city ],axis=1)
flightSet.head()

flightSet=flightSet.drop(columns=['airline' , 'source_city' , 'destination_city'],axis=1)
flightSet.head()




x=flightSet.drop(columns='price',axis=1)
y=flightSet['price']

from sklearn.model_selection import train_test_split as tts
x_train,x_test,y_train,y_test=tts(x,y,test_size=0.2, random_state=42)

from sklearn.ensemble import RandomForestRegressor
rfr=RandomForestRegressor()
rfr.fit(x_train,y_train)

pred=rfr.predict(x_test)

rfr.score(x_train,y_train)
rfr.score(x_test,y_test)


from sklearn import metrics
print('MAE:', metrics.mean_absolute_error(y_test, pred))
print('MSE:', metrics.mean_squared_error(y_test, pred))
print('RMSE:', np.sqrt(metrics.mean_absolute_error(y_test, pred)))

#HYPERPARAMTER TUNING
from sklearn.model_selection import RandomizedSearchCV

n_estimators= [int(x) for x in np.linspace(100,2000,10)]
max_depth= [int(x) for x in np.linspace(100,2000,10)]
min_samples_split=[2,4,6,8,10,12,14]
min_samples_leaf=[1,3,5,7,8,10]
max_features=['sqrt', 'log2' , 'auto',None]

random_search={
    'n_estimators' : n_estimators,
    'max_depth' : max_depth,
    'min_samples_split' : min_samples_split,
    'min_samples_leaf' : min_samples_leaf,
    'max_features' : max_features
}

random_search

rfr_random = RandomizedSearchCV(estimator=rfr , param_distributions=random_search, n_iter=2 , cv=2 , verbose=2 , random_state=42 , n_jobs=1)

rfr_random.fit(x_train,y_train)

rfr_random.best_params_

prediction=rfr_random.predict(x_test)

print('MAE:', metrics.mean_absolute_error(y_test, pred))
print('MSE:', metrics.mean_squared_error(y_test, pred))
print('RMSE:', np.sqrt(metrics.mean_absolute_error(y_test, pred)))

import pickle
file=open('Inter-IIT-PS.pkl','wb')
pickle.dump(rfr_random,file)

with open('Inter-IIT-PS.pkl', 'rb') as file:
   modf = pickle.load(file)
   
   predicted_data=modf.predict(x_test)








