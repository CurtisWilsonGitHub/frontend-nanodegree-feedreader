/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

/* Test to check RSS feeds are being loaded
 *
 * Test looks at the array allFeeds and make sure it exist and has elements.
 * Then it looks into each element and make sure that both the URL and Name of
 * the feed exist and has a value.
 */

    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

     it('URL is defined and URL is not empty', function(){
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
        });
     });

     it('Name is defined and Name is not empty', function(){
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
        });
      });

   });
});

$(function() {

  describe('The menu', function() {

    /*
     *  Test To Check Menu Functionality
     *
     *  First the test checks to see if the body tag has the class
     *  'menu-hidden'. Then the test simulates a click on the element
     *   with the class 'menu-icon-link', then it checks to see if the
     *   body tag has the class 'menu-hidden'; this process is repeated.
     */

    let body = $('body')
    let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

    it('is hidden by default',function(){
      expect(body.hasClass('menu-hidden')).toBe(true);
    });


    it('is visible after click and hidden when clicked again', function(){
      menuIcon.click();
      expect(body.hasClass('menu-hidden')).toBe(false);
      menuIcon.click();
      expect(body.hasClass('menu-hidden')).toBe(true);
    });

  });
});

$(function(){
  describe('Initial Entries',function() {

/* Test to see if application loads initial feed entries
 *
 * The test is Asynchronous, so 'beforeEach' is used to contact API server.
 * After the first feed is loaded, the test sees if the element with the class
 * 'feed' has child elements (the applications adds child 'entry' elements
 * after making api request) and make sure they are defined.
 */

    let feed = document.getElementsByClassName('feed')[0];
    let entries = feed.children;

    beforeEach(function(done){
      loadFeed(0, done);
    });

     it('should load initial feed', function(done){
       expect(feed.childElementCount).toBeTruthy();

       for(entry of entries){
         expect(entry.querySelector('.entry')).toBeDefined();
       };

       done();

     });

   })
 });


$(function(){

  /* Test to see if new feeds are being added to application
   *
   * This test loads the first and second feed into the variables firstElement
   * and secondElement. It then checks to see if they're the same (meaning that
   * the api didn't provide the next expected feed).
   */
   
  describe('New Feed Selection',function() {
    let firstElement = '', secondElement = '';

    beforeEach(function(done){
      loadFeed(0,done)
      firstElement = document.getElementsByClassName('entry')[0];
      loadFeed(1,done)
      secondElement = document.getElementsByClassName('entry')[1];
      done();
    });

    it('should update content when a new feed is loaded',function(done){
      expect(firstElement === secondElement).toBe(false)
      done();
    });

  });
});
