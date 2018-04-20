function Terbilang(x)
    {
      var ambil = new Array("", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas");
	      if (x < 12){
	        return " "+ambil[x];
	        }     
	  else if (x < 20){
      var nilai = x-10;
          awal = Terbilang(nilai);
      return awal+" belas";
        }   

      else if (x < 100){
        var nilai1 = x/10;
          nilai = parseInt(nilai1);
          sisa = x%10;
          //$(".content-wrapper").html(nilai);
      return Terbilang(nilai)+" puluh "+Terbilang(sisa);
      } 

      else if (x < 200){
      var nilai = x-100;
      return "seratus "+Terbilang(nilai);
       }

      else if (x < 1000){
      var nilai1 = x/100;
          nilai = parseInt(nilai1);
          sisa = x%100;
      return Terbilang(nilai)+" ratus "+Terbilang(sisa);
      }

       else if (x<2000){
       var nilai = x-1000;
       return "seribu"+Terbilang(nilai);

       }

       else if (x<10000){
       var nilai1 = x/1000;
           nilai = parseInt(nilai1);
           sisa = x%1000;
        return Terbilang(nilai)+" ribu"+Terbilang(sisa); 
       }
    
       else if (x<100000){
        var nilai1 = x/100;
            nilai = parseInt(nilai1);
            sisa = x%1000;
        return Terbilang(nilai)+" ribu"+Terbilang(sisa); 
       }
      
      else if (x < 1000000){
      var nilai1 = x/1000;
          nilai = parseInt(nilai1);
          sisa1 = x%1000;
          //$(".content-wrapper").html(sisa);
      return Terbilang(nilai)+" ribu "+Terbilang(sisa1);
      }
      else if (x < 1000000000){
      var nilai1 = x/1000000;
          nilai = parseInt(nilai1);
          sisa = x%1000000;
        return Terbilang(nilai)+" juta "+Terbilang(sisa);
        }
      else if (x < 10000000000){
      var nilai1 = x/1000000;
          nilai = parseInt(nilai1);
          sisa = x%1000000;
        return Terbilang(nilai)+" juta "+Terbilang(sisa);
        }
    }