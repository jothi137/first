describe('homepage', function() {
  beforeEach(function() {
    browser.get('http://127.0.0.1:8020/first/index.html#/');
  });
  
  it('should bind the right message', function() {
    var actualMsg = "Everyone come and see how good I look!",
        msgElem = element(by.css('.msg'));  
    expect(msgElem.getText()).toEqual(actualMsg);
  });
  
  it('should display the right title', function() {
    var titleMsg = "Home Page",
        titleElem = element(by.css('h1'));  
    expect(titleElem.getText()).toEqual(titleMsg);
  });
  
});

describe('contactPage', function() {
  beforeEach(function() {
    browser.get('http://127.0.0.1:8020/first/index.html#/contact');
  });
  
  // afterEach(function () {
      // var spec = jasmine.getEnv().currentSpec;
      // var specName = spec.description.split(' ').join('_');
//       
      // if (spec.results().passed()) {
          // return;
      // }
//       
      // browser.takeScreenshot().then(function (png) {
          // var stream = fs.createWriteStream('first/screenshots/', + specname + '.png');
          // stream.write(new Buffer(png, 'base64'));
          // stream.end();
      // });
  // });
  
  it('should bind the right message', function() {
    var actualMsg = "Contact us!. This is just a demo.",
        msgElem = element(by.binding('message'));  
    expect(msgElem.getText()).toEqual(actualMsg);
  });
  
  it('should display the right title', function() {
    var titleMsg = "Contact Page",
        titleElem = element(by.css('h1'));  
    expect(titleElem.getText()).toEqual(titleMsg);
  });
  
  it("should display text on button click", function () {
      var myButton = element(by.css(".btn")), clickMsg = "Button was clicked!";
      
      myButton.click();
      
      expect(element(by.binding("clickMessage")).getText()).toEqual(clickMsg);
  });
  
});