
# Punk API React Project

Hi, welcome to my React API project. In this project, I have created a functional webpage where you are able to filter and look through Brewdog's extensive catalogue of beers. 

## 🛠 Skills
React, TypeScript, Javascript, HTML, SCSS


## API Use

#### Get access to all beers:

```http
  GET https://api.punkapi.com/v2/beers
```


#### Get access to beers with a high ABV & brewed before 2010

```http
  GET https://api.punkapi.com/v2/beers?page=1&per_page=25&abv_gt=6&brewed_before=01-2010
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`page`|`number`| Which page of data do you want the API to get|
|`per_page`| `number`| How many objects do you want per page|
| `abv_gt`      | `number` | ABV above provided value |
|`brewed_before`|`date`| Brewed before MM-YYYY|
|`beer_name`|`string`| This searches the API for the name of the desired beer in partials|

I used the API in conjunction with useState in order to change which information I would be receiving from the API. If the user wants to see an ABV above 6, I changed the API link to get that data.


## Optimizations

I relied on Pagination whilst running the API, rather than constant rerendering. The response time is far quicker with this method, rather than having to wait for elements to render. 



## Bugs
Not so much a bug as an issue I faced with my filters was having the elements render on the same page. 

The API documentation states that there are in built filters for variables such as ABV and IBU, but there was not a filter for pH. This means that when I look for a beer with high acidity, the results are spread out across the pages because my filters go through selected information that the API provides.
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://maxswaine.github.io/web-project-0)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxswaine)


