var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://clipartstation.com/wp-content/uploads/2018/09/cartoon-dad-clipart-4.jpg",
"https://tse2.mm.bing.net/th?id=OIP.vefNphJj2jdloWlm820jbQHaO0&pid=Api&P=0&w=300&h=300",
"https://www.kindpng.com/picc/m/594-5945449_transparent-cartoon-kids-png-reading-cute-kid-png.png"];
var names = ["Family book","My Dad","my Mom","Me"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
