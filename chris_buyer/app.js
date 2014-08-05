(function(){
  var cliqueApp = angular.module('clique',[]);
  
  cliqueApp.controller('BuyerController', function($scope){
    // we will store all of our form data in this object
    $scope.formData = {
    		To: '',
    		From: '',
        Amount: '',
    		Code: '',
    		Occasion: '',
    		Date: '',
    		CreditCardNumber: '',
    		ExpireMonth: '',
    		ExpireYear: '',
    		ExpireCVV: '',
    		PhoneNumber: '',
    		Email: '',
        Icon: '',
        UniqueLink: ''
    };
    
    // function to process the form
    $scope.processForm = function() {
      alert('awesome!');  
    };
  });
  
  cliqueApp.controller('AmountController', function($scope){
    this.prices = [2,25,50,75,100,250,500];
    // this.amount = '';
    
    this.set = function(newAmount){
      // this.amount = newAmount;
      $scope.formData.Amount = newAmount;
    };
    
    this.is = function(checkAmount){
      return $scope.formData.Amount == checkAmount; // boolean
    }
  });
  
  // cliqueApp.controller('CodeController', function(){
    // this.click = function(event){
      // var elem = $(event.currentTarget);
    	// if(elem.val() == 'Code') {
    		// elem.prop('value','');
    		// $('#clique_code span.inputlabel').html('Code');
    	// }
    // };
  // });
  
  cliqueApp.controller('OccasionController', function($scope){
    this.charCount = 80;
    this.left_column = [
      {
        name: 'birthday',
        images: {
          normal: '../public/demo23_files/occasion_bday.png',
          selected: '../public/demo23_files/occasion_bday_selected.png'
        },
        alt: 'Birthday',
        text: 'Variety is the spice of life. So I’m giving you the gift of choice!'
      },
      {
        name: 'anniversary',
        images: {
          normal: '../public/demo23_files/occasion_anniversary.png',
          selected: '../public/demo23_files/occasion_anniversary_selected.png'
        },
        alt: 'Anniversary',
        text: 'You remind me of time itself for you are my Past, Present, Future, and Forever. I love you. Happy Anniversary.'
      },
      {
        name: 'love',
        images: {
          normal: '../public/demo23_files/occasion_love.png',
          selected: '../public/demo23_files/occasion_love_selected.png'
        },
        alt: 'I Love You',
        text: 'I love you! "Whatever our souls are made of, yours & mine are the same." ~ Emily Bronte'
      },
      {
        name: 'getwell',
        images: {
          normal: '../public/demo23_files/occasion_getwell.png',
          selected: '../public/demo23_files/occasion_getwell_selected.png'
        },
        alt: 'Get Well',
        text: 'Your family and friends miss you and look forward to your speedy recovery. Get well soon!'
      },
      {
        name: 'congrats',
        images: {
          normal: '../public/demo23_files/occasion_congrats.png',
          selected: '../public/demo23_files/occasion_congrats_selected.png'
        },
        alt: 'Congrats',
        text: 'Spread joy. Chase your wildest dreams. Congratulations!'
      }
    ];
    this.right_column = [
      {
        name: 'wedding',
        images: {
          normal: '../public/demo23_files/occasion_wedding.png',
          selected: '../public/demo23_files/occasion_wedding_selected.png'
        },
        alt: 'Wedding',
        text: 'Falling in love is EASY. But staying in love is EXTRAORDINARY. Congratulations on your marriage!'
      },
      {
        name: 'baby',
        images: {
          normal: '../public/demo23_files/occasion_baby.png',
          selected: '../public/demo23_files/occasion_baby_selected.png'
        },
        alt: 'Baby',
        text: 'Congratulations on the birth of your child!'
      },
      {
        name: 'sympathy',
        images: {
          normal: '../public/demo23_files/occasion_sympathy.png',
          selected: '../public/demo23_files/occasion_sympathy_selected.png'
        },
        alt: 'Sympathy',
        text: 'Our collective hearts are heavy with sympathy.'
      },
      {
        name: 'thankyou',
        images: {
          normal: '../public/demo23_files/occasion_thankyou.png',
          selected: '../public/demo23_files/occasion_thankyou_selected.png'
        },
        alt: 'Thank You',
        text: 'You’re the best! You deserve some retail therapy.'
      },
      {
        name: 'custom',
        images: {
          normal: '../public/demo23_files/occasion_custom.png',
          selected: '../public/demo23_files/occasion_custom_selected.png'
        },
        alt: 'Custom',
        text: 'If you want to be loved for who you are, just be yourself.'
      }
    ];
    this.set = function(occasion){
      // change occasion text only if a new occasion is selected
      if ($scope.formData.Icon != occasion.name)
        $scope.formData.Occasion = occasion.text;
      $scope.formData.Icon = occasion.name;
    }
  });
  
  cliqueApp.controller('PageController', function(){
    this.page = 'main';
    this.isCurrent = function(page){
      return this.page == page;
    };
    this.setPage = function(page){
      this.page = page;
    }
  })

})();