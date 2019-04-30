# MEJO 583 Spring 2019 Final Project

This seed repo will be updated with configuration changes as needed until the project is due.


#Colophon

As a senior multimedia major, I created this final project as a demonstration of some of the skills we have been learning in our advanced multimedia class. I always like to choose fun and personal topics for my projects, and like to play around with a very cartoon-y style. This project demonstrates some understanding of the basics of data visualization, using the tool High Charts, as well as some structuring tools such as Scroll Magic and React to format everything. To lint my code, I used ESLint and Eslint Config Google. To check my code was linted correctly to fit the class standards, I ran it through Circle CI.

I found all of my Simpsons data from TVMaze.com, from their API, which gave me a data file with cast information and the corresponding characters they play. Additionally, to find the number of appearances per character in the series, I took a look at their website show page for Simpsons characters, and then manually entered the appearances into my chart data (since it was not included in the API file I used earlier).

To get the data into the application, I did a series of programmatic data cleanup, pulling from the url into a data file, which I then manually cleaned up and pasted into my HighChart split packed bubble map. For the number of appearances for each character, I manually migrated each appearance count to my High Charts data (because it wasn't included in the API).

To structure the assignment, I used the extremely helpful React library. Alongside the React base, I used various components, such as HighchartsReact, a carousel called Responsive Slider from react-slick, and the React version of Scroll Magic. For styling, I mainly used flexbox and ScrollMagic (for natural slide wipes).

I’m using a 2015 MacBook, with VSCode for all code editing.

For the Simpsons svgs, I actually made them myself using Adobe Illustrator, looking at some Simpsons photos for reference. The photos that I used for the cast members were also retrieved from TVMaze.com's API. Additionally, I used font-awesome for an svg arrow for scrolling.

This app was deployed using Github Pages. It looks best viewed in full screen on a computer.




For additional resources I looked at:

For Node Fetch: https://www.npmjs.com/package/node-fetch
For Writing JSON to File: https://nodejs.org/api/fs.html

For High Chart 
https://github.com/highcharts/highcharts-react/issues/76 (KacperMadej and classmate)
https://www.highcharts.com/docs/chart-and-series-types/packed-bubble-charts 
https://jsfiddle.net/gvaartjes/0yrdsv2a/
https://www.highcharts.com/demo/packed-bubble-split

For getting High Chart to work, had Help from a friend, who cited KacperMadej's comment on here: 
https://github.com/highcharts/highcharts-react/issues/76

To alter colors on High Charts: 
https://stackoverflow.com/questions/7414287/how-do-you-change-the-colour-of-each-category-within-a-highcharts-column-chart (answered by Ricardo Alvaro Lohmann)

For background colors on High Charts:
https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/chart/plotbackgroundcolor-color/, https://api.highcharts.com/highcharts/chart.plotBackgroundColor?_ga=2.198567974.88012680.1556406587-1893010738.1556126262

For my data:
http://api.tvmaze.com/shows/83/cast
http://www.tvmaze.com/shows/83/the-simpsons/characters

For scrollmagic:
http://scrollmagic.io/examples/basic/going_horizontal.html, 
https://bitworking.github.io/react-scrollmagic/section-wipes2, 
https://bitworking.github.io/react-scrollmagic/section-wipes
https://www.npmjs.com/package/react-scrollmagic, 
https://greensock.com/docs/NPMUsage, 
https://scrollmagic.io/docs/debug.addIndicators.html#newScrollMagic.Controlleroptions, 
http://scrollmagic.io/docs/ScrollMagic.Controller.html
http://scrollmagic.io/examples/basic/section_wipes_natural.html
https://www.npmjs.com/package/gsap
https://www.npmjs.com/package/react-scrollmagic
https://github.com/bitworking/react-scrollmagic/blob/master/example/src/components/ScrollMagicExamples/SectionWipes.js
https://www.styled-components.com/

For a refresher on CSS Grid and flexbox:
https://css-tricks.com/snippets/css/complete-guide-grid/
https://envato.com/blog/css3-flexbox/
https://www.google.com/search?q=how+to+get+flex+to+go+to+next+line&oq=how+to+get+flex+to+go+to+next+line&aqs=chrome..69i57.6857j0j7&sourceid=chrome&ie=UTF-8

For a refresher on meta tags:
https://css-tricks.com/snippets/html/responsive-meta-tag/

Refresher for img format:
https://www.w3schools.com/html/html_images.asp

For refresher on viewport sizing:
https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/

For some color inspiration:
https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjTgPXJ9vLhAhXNZd8KHRW3BTwQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26cad%3Drja%26uact%3D8%26ved%3D2ahUKEwjTgPXJ9vLhAhXNZd8KHRW3BTwQjRx6BAgBEAU%26url%3Dhttps%253A%252F%252Fwww.imdb.com%252Ftitle%252Ftt0096697%252F%26psig%3DAOvVaw1HpWTHyl5onkh2eQiPiKmy%26ust%3D1556545654540310&psig=AOvVaw1HpWTHyl5onkh2eQiPiKmy&ust=1556545654540310
https://color.adobe.com/create

For fonts:
https://fonts.google.com/?category=Sans+Serif&selection.family=Gloria+Hallelujah|Indie+Flower|Permanent+Marker|Schoolbell|Varela+Round

May have used for Svgs:
https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i