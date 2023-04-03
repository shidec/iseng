import Soal from './Soal.js';

class SoalTiga extends Soal {

    constructor(containerQuestion, containerOptions){
        super(containerQuestion, containerOptions, '2 x 2 x 2 x 2 = ...',['8', '10', '12', '14', '16'], 25);
    }

    checkAnswer(jawaban){
        let result;
        if(jawaban == 4){
            this.question = '2 x 2 x 2 + 2 = ...';
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. 2 x 2 x 2 + 2 = 10</div>',
                    score: 0
                };
        }else{
            this.question = '2 x 2 x 2 x 2 = ...';
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. 2 x 2 x 2 x 2 = 16</div>',
                    score: 0
                };
        }

        this.renderQuestion();
        return result;
    }
}

export default SoalTiga;