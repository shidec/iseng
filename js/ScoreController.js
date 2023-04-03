class ScoreController{

    //score = 0;

    constructor(container){
        this.score = 0;
        this.container = container;
    }

    add(score){
        this.score += score;
    }

    render(){
        this.container.innerHTML = `Score: ${this.score}`;
    }
}

export default ScoreController;