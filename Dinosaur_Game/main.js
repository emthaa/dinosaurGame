console.log('it works')

class dinosaurControls{
    jump(){

        const dinosaur = document.querySelector('.dinosaur')
        let isJumping = false
        dinosaur.classList.remove('dinosaurJumping')
        dinosaur.classList.remove('dinosaurFalling')
   
        

       
        if(event.key === ' ' && isJumping == false){
            //jumping
            isJumping = true
            dinosaur.classList.add('dinosaurJumping')
            
            setTimeout(function(){
                dinosaur.classList.add('dinosaurFalling')
                
            },300)



        //falling
        
    }

    }

    
}

const dinoCons = new dinosaurControls()


document.addEventListener('keydown', (event) => {
    
    dinoCons.jump();
  });
  
  