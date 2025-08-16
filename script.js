const photoSegment = document.getElementById ('photo-segment')
const photoNames = [
            "MLN (1).jpeg",
            "MLN (1).jpg",
            "MLN (2).jpeg",
            "MLN (2).jpg",
            "MLN (3).jpeg",
            "MLN (3).jpg",
            "MLN (4).jpeg",
            "MLN (4).jpg",
            "MLN (5).jpeg",
            "MLN (5).jpg",
            "MLN (6).jpeg",
            "MLN (6).jpg",
            "MLN (7).jpeg",
            "MLN (7).jpg",
            "MLN (8).jpeg",
            "MLN (8).jpg",
            "MLN (9).jpeg",
            "MLN (9).jpg",
            "MLN (10).jpeg",
            "MLN (10).jpg",
            "MLN (11).jpeg",
            "MLN (11).jpg",
            "MLN (12).jpeg",
            "MLN (12).jpg",
            "MLN (13).jpeg",
            "MLN (13).jpg",
            "MLN (14).jpeg",
            "MLN (14).jpg",
            "MLN (15).jpeg",
            "MLN (15).jpg",
            "MLN (16).jpeg",
            "MLN (16).jpg",
            "MLN (17).jpg",
            "MLN (18).jpg",
            "MLN (19).jpg"]
            
            
            


;
let i = 0;

function showPhoto() {
    photoSegment.innerHTML = `<img style="margin: 20px 0;"  width="100%" class= "photo-view" src="${photoNames[i]}" alt="">`


}

function nextPhoto(){
i++;
    if(i >= photoNames.length){
        i = 0;
    }
    

    showPhoto();
    
}

function prevPhoto(){
    i--;
        if(i < 0){
            i = photoNames.length - 1; ;
        }
        
    
        showPhoto();
        
    }


  
showPhoto();




















