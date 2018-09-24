/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URL is defined and URL is not empty', function(){
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe('');
            });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Name is defined and Name is not empty', function(){
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name).not.toBe('');
            });
         });

    });

  /* TODO: Write a new test suite named "The menu" */

});

$(function() {

  describe('The menu', function() {
    let body = document.getElementsByTagName("BODY")[0];
    let menuBar = document.getElementsByClassName('slide-menu');
    let menuIcon = document.getElementsByClassName('menu-icon-link')[0];
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    it('is hidden by default',function(){
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    it('is visible after click and hidden when clicked again', function(){
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });
  });
});

/* TODO: Write a new test suite named "Initial Entries" */
$(function(){
  describe('Initial Entries',function() {

    let feed = document.getElementsByClassName('feed')[0];

    let entries = feed.children;

    beforeEach(function(done){

      loadFeed(0, done);

    });

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

     it('should load initial feed', function(done){
       expect(feed.childElementCount).toBeTruthy();

       for(entry of entries){
         expect(entry.querySelector('.entry')).toBeDefined();
       };

       done();

     });

   })
 });


/* TODO: Write a new test suite named "New Feed Selection" */

$(function(){
  describe('New Feed Selection',function() {
    let firstElement = '', secondElement = '';

    beforeEach(function(done){
      loadFeed(0,done)
      firstElement = document.getElementsByClassName('entry')[0];
      loadFeed(1,done)
      secondElement = document.getElementsByClassName('entry')[1];
    });

    it('should update content when a new feed is loaded',function(done){
      expect(firstElement === secondElement).toBe(false)
      done();
    });

  });
});

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
