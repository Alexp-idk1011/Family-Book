var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://cliparts.zone/img/508913.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
//add family member names
var names = ["Fmaily Book","Rosa", "Pavel", "Alex", "Angelina", "Lilia"];
          
var i = 0;
function update()
{
    i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updateImage = images[i];
     var updatedName  = names[i]; 
     document.getElementById("family_member_image").src = updateImage; 
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
