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

| Parameter       | Type     | Description                                                        |
| :-------------- | :------- | :----------------------------------------------------------------- |
| `page`          | `number` | Which page of data do you want the API to get                      |
| `per_page`      | `number` | How many objects do you want per page                              |
| `abv_gt`        | `number` | ABV above provided value                                           |
| `brewed_before` | `date`   | Brewed before MM-YYYY                                              |
| `beer_name`     | `string` | This searches the API for the name of the desired beer in partials |

I used the API in conjunction with useState in order to change which information I would be receiving from the API. If the user wants to see an ABV above 6, I changed the API link to get that data.

### API Object Destructuring

The API returned an array of objects and I had to destructure that object so that I could flexibly use that information on separate cards with similar templates. I used a map function to go through the Beer array that I have obtained through the API

```typescript
const CardContainer = ({ beers }: CardContainerProps) => {
  return (
    <div className="card-container">
      {beers.map((beer, index) => (
        <BeerShowCard beer={beer} key={index} />
      ))}
    </div>
  );
};
```

After this, it goes to my BeerShowCard Element that destructures the object and shows the appropriate information for each beer.

```typescript
<img className="back__image" src={beer.image_url} alt="Beer" />
    <strong className="back__header">{beer.name}</strong>
```

## Optimizations

I relied on Pagination whilst running the API, rather than constant rerendering. The response time is far quicker with this method, rather than having to wait for elements to render.

## Code

I think the code I am most pleased with is the code is the code that adjusts the API link when the filters are pressed. Rather than using a lot of filters for API objects, I have changed the API call so that it responds to the features I have provided to the user:

```typescript
const getBeers = async () => {
  let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${itemsPerPage}`;

  urlFilters.ABV ? (url += "&abv_gt=6") : (url = url.replace("&abv_gt=6", ""));
  urlFilters.classic
    ? (url += "&brewed_before=01-2010")
    : (url = url.replace("&brewed_before=01-2010", ""));

  if (searchTerm) {
    url += `&beer_name=${searchTerm}`;
  }

  const res = await fetch(url);
  const data: Beer[] = await res.json();

  let filteredData = data;

  if (urlFilters.acid) {
    filteredData = filteredData.filter(
      (beer: Beer) => beer.ph <= highAcidityCondition
    );
  }

  setBeerDisplay(filteredData);
};
```

## Bugs

### Rendering

Not so much a bug as an issue I faced with my filters was having the elements render on the same page.

The API documentation states that there are in built filters for variables such as ABV and IBU, but there was not a filter for pH. This means that when I look for a beer with high acidity, the results are spread out across the pages because my filters go through selected information that the API provides.

### Reformatting

I had too many elements in my App and so I created a new element called HomePage which combined three other elements that I wanted displayed. I found this made the routing significantly easier as I could create stylings and formats outside of the main app.

However, this came with some issues when passing data through my react tree. I had to figure out where my states would be and how to pass that information throughout my React Application. This also came with some minor SCSS adjustments but that was shortly sorted.

### Final code in my App.tsx file

```typescript
function App() {
  const getSingleBeer = async (id: number) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?ids=${id}`);
    const data: Beer[] = await response.json();
    return data[0];
  };

  return (
    <HashRouter basename="/">
      <Routes>
        <Route
          path="/beers/:id/"
          element={<PresentationCard getSingleBeer={getSingleBeer} />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}
```

As you can see, this is much cleaner than it would have been, had I placed all the home screen elements in the App itself.

### How to improve

With all projects, it is crucial to have a clear structure. Although I thought I had that from the outset, I was mistaken later down the line. I think I would spend more time creating a detailed and structured plan so that I have to do less reformatting at the end. I would also implement routing fairly soon into the project so that I have a clear idea of where I want elements to be and how they work on the page.

I would also code with a test-first approach. Creating tests and then subsequently creating code that would adhere to the outcomes of those tests. As we learned react testing late into the project, this was not something I could have achieved for this project specifically.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://maxswaine.github.io/web-project-0)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxswaine)
