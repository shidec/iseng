import Soal from './Soal.js';

class SoalEmpat extends Soal {

    constructor(containerQuestion, containerOptions){
        super(containerQuestion, containerOptions, 'Ibukota Peru adalah ...',['Satu', 'Dua', 'Tiga', 'Empat', 'Lima'], 25);
    }

    checkAnswer(jawaban){
        let result;
        if(jawaban == 4){
            this.question = 'Ibukota Peru ada ...';
                    
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. Ibukota Peru ada satu.</div>',
                    score: 0
                };
        }else{            
            this.question = 'Ibukota Peru adalah ...';
            result = {
                    html: '<img src="img/wrong.png"/><div>Salah. Ibukota Peru adalah Lima.</div>',
                    score: 0
                };
        }

        this.renderQuestion();
        return result;
    }
}

export default SoalEmpat;