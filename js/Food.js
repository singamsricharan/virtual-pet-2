class Food{
    constructor(){
        var foodStock;
        var lastFed;
    }
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFood(){

    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,728,228,70,70);

        if(this.foodStock!=0){
            for (var i=0;i<this.foodStock;i++){
                if(1%10==0){
                    x=80;
                    y+=50
                }
                image(this.image,x,y,50,50);
                x+=30
            }
        }
    }
}
