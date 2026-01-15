var xhr = new XMLHttpRequest();
var url = './health_article.json';
//to prepare a GET request to the specified URL
xhr.open('GET', url, true);
//to inform the XMR object that the expected response from the server should be in JSON format
xhr.responseType = 'json';
//to define what happens when the data is succesfully loaded
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');
//to iterate health data to fetch on the front page using loops
  articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
//to create html elements dynamically
var articleDiv = document.createElement('div');
//to populate the html elements with corresponding content from the fetched JSON data
articleDiv.classList.add('article');
//to attach the elements to the articlesDiv to display each article's details on the webpage
articleDiv.appendChild(title);
//to send the XMR to fetch the data from the specified URL
xhr.send();