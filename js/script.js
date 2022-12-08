  var news1=[
    {
    n1p1:"Gujarat Election Results 2022 LIVE: BJP's extends early big lead, ahead in 145",
    n01p01:"The BJP has got the early lead with the Congress leading at the second position an hour after the counting of Gujarat Assembly Election 2022 began. Catch latest updates on Gujarat Election Results 2022 as the counting proceeds."
  }
];

  document.querySelector('h1.pankaj').innerHTML=news1[0].n1p1;
  document.querySelector('h1.pankaj').style.color="GoldenRod";
  
  document.querySelector('p.Rathore').innerHTML=news1[0].n01p01;
  document.querySelector('p.Rathore').style.color="SaddleBrown";

   const news2=[
    {

            n2p2:"Election results 2022 LIVE: BJP set to sweep Gujarat, Cong fighting for Himachal",
            n02p02:"Assembly Election Results 2022 Live Updates: While AAP entry in Gujarat has made the fight three-cornered, the contest in Himachal Pradesh is expected to remain between BJP and Congress"
   },
         {   n3p3:"Gujarat election: BJP leads in Anjar, Anklav, Asarwa, Balasinor",
            n03p03:"BJP candidates Chhanga Trikam Bijal",
   },

         {   n4p4:"Jairam Thakur leads with nearly 15,000 votes in Seraj",
            n04p04:"Himachal Pradesh chief minister Jairam Thakur is leading with a total of 14,921 votes in his constituency Seraj",
         },
        ]

         document.getElementById('n2p2').innerHTML=news2[0].n2p2;
         document.getElementById('n2p2').style.color="red"
         document.getElementById('n02p02').innerHTML=news2[0].n02p02;
         document.getElementById('n3p3').innerHTML=news2[1].n3p3;
         document.getElementById('n3p3').style.color="purple";
         document.getElementById('n03p03').innerHTML=news2[1].n03p03;
         document.querySelector('[data-P]').innerHTML=news2[2].n4p4;
         document.querySelector('[data-P]').style.color="MediumSeaGreen"
         document.querySelector('[data-R]').innerHTML=news2[2].n04p04;