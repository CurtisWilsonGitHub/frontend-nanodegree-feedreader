/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

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

    let body = document.getElementsByTagName("BODY")[0];
    let menuBar = document.getElementsByClassName('slide-menu');
    let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

    it('is hidden by default',function(){
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });


    it('is visible after click and hidden when clicked again', function(){
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

  });
});

$(function(){
  describe('Initial Entries',function() {

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
