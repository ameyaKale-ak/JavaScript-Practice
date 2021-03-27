(
    function()
      {
               var year=2015;
               printYear=function()
               {
                   console.log("Year : "+year);
               }
               incrementYear=function ()
               {
                 return   year++;
                   
               }
               setYear=function(yr)
               {
                      year=yr;
               }
      }
  )
  ();
  console.log(" Initial Year : "+printYear());
  console.log(" Set Year : "+setYear(2021));
  console.log(" Initial Year : "+printYear());
  console.log(" Incremebt year : "+incrementYear());
  console.log(" Initial Year : "+printYear());
  