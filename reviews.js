var data = {
    reviews:[
        {
          review_id:"Qr-j8xe_5As",
          created_timestamp: new Date(),
        //   last_change_timestamp:"018-05-13 12:16:33",
          content:{
            // "language_code":"en",
            headline:"A room on the canal...",
            positive:"It was great that ...",
            negative:"What I really didn't like was that, ..."
          },
        //   "reservation_id":87654321,
          scoring:{
            review_score:9.5,
            // "clean":10,
            // "facilities":10,
            // "location":10,
            // "services":10,
            // "staff":7.5,
            // "value":null
          },
          reviewer:{
            country_code:"fr",
            name:"John",
            // "is_genius":false
          },
        //   "reply":{
            // "text":"Thank you for your review!",
            // "last_change_timestamp":"2018-05-15 10:23:57"
        //   }
        },
        {
          review_id:"9dC4PAoRI_w",
        //   "reservation_id":12345678,
          created_timestamp:new Date(),
        //   "last_change_timestamp":"2018-06-13 12:16:33",
          content:null,
          scoring:{
            review_score:10,
            // "clean":10,
            // "facilities":null,
            // "location":null,
            // "services":null,
            // "staff":null,
            // "value" :null
          },
          reviewer:null,
        }
      ]
    }

   console.log(data.reviews);
   if(data && data.reviews && data.reviews.length > 0){
    var reviewesElement = $("#trial_opinion");
        for(var i=0; i<data.reviews.length; i++){
            var newElement = $('<div>');
            var description= "Opinia użytkownika " + (data.reviews[i].reviewer ? data.reviews[i].reviewer.name : "") + "\n" + "Data dodania: " + data.reviews[i].created_timestamp;
            newElement.text(description);
            reviewesElement.append(newElement);
            
        }
   }